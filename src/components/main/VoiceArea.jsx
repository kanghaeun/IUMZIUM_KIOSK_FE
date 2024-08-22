import { useState, useRef, useEffect } from "react";
import { FiMic } from "react-icons/fi";
import styled from "styled-components";
const Speech = ({ onSpeechComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorder = useRef(null);
  const [isRed, setIsRed] = useState(false);
  const [textData, setTextData] = useState("");
  const [apiData, setApiData] = useState("");

  const [greetingMessage, setGreetingMessage] = useState("");

  const audioChunks = useRef([]);
  const hasGreeted = useRef(false);

  useEffect(() => {
    const fetchGreeting = async () => {
      if (!hasGreeted.current) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/audio/greet/`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setGreetingMessage(data.message);
          hasGreeted.current = true;
        } catch (error) {
          console.error("Error fetching greeting:", error);
        }
      }
    };

    fetchGreeting();
  }, []);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    audio.onended = () => {
      console.log("Audio playback ended");
    };
    return () => {
      audio.onended = null;
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      mediaRecorder.current.onstop = async () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/mpeg" });
        await handleSendAudio(audioBlob);
      };

      mediaRecorder.current.start();
      setIsRecording(true);
      setIsRed(true); // 버튼 색상을 빨간색으로 설정
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
      setIsRed(false);
      audioChunks.current = [];
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleSendAudio = async (audioBlob) => {
    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append("file", audioBlob, "recording.mp3");

      const response = await fetch(
        `https://2024-36-38-187-106.ngrok-free.app/api/audio/rasa/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const formDataResponse = await response.formData();
      const textData = formDataResponse.get("category_text");
      const audioData = formDataResponse.get("category_audio");
      const apiData = formDataResponse.get("api_url");
      setTextData(textData);
      setApiData(apiData);
      console.log("Text response:", textData);
      console.log("Audio file name:", audioData.name);
      console.log("api response:", apiData);

      // Call onSpeechComplete only if it's a function
      if (typeof onSpeechComplete === "function") {
        onSpeechComplete(textData);
      }

      // Convert the audio data to a Blob
      const responseAudioBlob = new Blob([await audioData.arrayBuffer()], {
        type: "audio/mpeg",
      });

      // Create a URL for the audio Blob and play it
      const audioUrl = URL.createObjectURL(responseAudioBlob);
      audioRef.current.src = audioUrl;

      // Play the audio and log any errors
      audioRef.current
        .play()
        .catch((e) => console.error("Error playing audio:", e));

      console.log("Audio should be playing now");
    } catch (error) {
      console.error("Error uploading recording:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <VoiceContainer>
      <VoiceBtn
        onClick={toggleRecording}
        disabled={isProcessing}
        isRed={isRed} // 녹음 상태에 따른 버튼 색상 변경
        className={`ml-2 p-2 rounded-md transition-colors ${
          isProcessing ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FiMic size={"3rem"} color="#fff" />
      </VoiceBtn>
      <Voice>{textData}</Voice>
    </VoiceContainer>
  );
};

export default Speech;
const VoiceContainer = styled.div`
  text-align: center;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;

const VoiceBtn = styled.div`
  margin-top: 2rem;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  background-color: ${({ isRed }) =>
    isRed ? "red" : "none"}; /* 녹음 상태에 따라 배경색 변경 */
`;

const Voice = styled.div`
  margin-top: 1.5rem;
  font-size: 25px;
  color: #fff;
  font-weight: 100;
  line-height: 1.3;
`;
