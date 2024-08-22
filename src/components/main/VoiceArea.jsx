import { useState, useRef, useEffect } from "react";
import { FiMic, FiPlay } from "react-icons/fi";
import styled from "styled-components";

const Speech = ({ onSpeechComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorder = useRef(null);
  const [textData, setTextData] = useState("");
  const [apiData, setApiData] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState("");
  const audioChunks = useRef([]);
  const audioRef = useRef(new Audio());
  const [greetingReady, setGreetingReady] = useState(false);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const formData = new FormData();
        const response = await fetch(
          `https://2024-36-38-187-106.ngrok-free.app/api/audio/greet/`,
          {
            method: "POST",
            body: formData,
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.formData();
        const textData = responseData.get("text");
        const audioData = responseData.get("audio");

        setGreetingMessage(textData);
        console.log(textData);

        if (audioData) {
          const audioBlob = new Blob([await audioData.arrayBuffer()], {
            type: "audio/mpeg",
          });
          const audioUrl = URL.createObjectURL(audioBlob);
          audioRef.current.src = audioUrl;
          setGreetingReady(true);
        }
      } catch (error) {
        console.error("Error fetching greeting:", error);
      }
    };

    fetchGreeting();
  }, []);

  const playGreeting = () => {
    audioRef.current
      .play()
      .catch((e) => console.error("Error playing greeting audio:", e));
    setGreetingReady(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.onended = () => {
      console.log("Audio playback ended");
    };
    return () => {
      audio.onended = null;
    };
  }, []);

  useEffect(() => {
    if (textData) {
      setHasInteracted(true);
    }
  }, [textData]);

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
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
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
      let textData, audioData;

      // 첫 번째 경우: category_text와 category_audio
      if (
        formDataResponse.has("category_text") &&
        formDataResponse.has("category_audio")
      ) {
        textData = formDataResponse.get("category_text");
        audioData = formDataResponse.get("category_audio");
      }
      // 두 번째 경우: text1과 audio1
      else if (
        formDataResponse.has("text1") &&
        formDataResponse.has("audio1")
      ) {
        textData = formDataResponse.get("text1");
        audioData = formDataResponse.get("audio1");
      }
      // 예외 처리
      else {
        throw new Error("Expected response data not found");
      }

      const apiData = formDataResponse.get("api_url");
      setTextData(textData);
      setApiData(apiData);
      setHasInteracted(true);
      console.log("Text response:", textData);
      console.log("Audio file name:", audioData.name);
      console.log("api response:", apiData);

      if (typeof onSpeechComplete === "function") {
        onSpeechComplete(textData, apiData);
      }

      const responseAudioBlob = new Blob([await audioData.arrayBuffer()], {
        type: "audio/mpeg",
      });

      const audioUrl = URL.createObjectURL(responseAudioBlob);
      audioRef.current.src = audioUrl;

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
      {/* {greetingReady && (
        <PlayButton onClick={playGreeting}>
          <FiPlay size={"2rem"} color="#fff" />
        </PlayButton>
      )} */}
      <VoiceBtn
        onClick={toggleRecording}
        disabled={isProcessing}
        $isRecording={isRecording}
        className={`ml-2 p-2 rounded-md transition-colors ${
          isProcessing ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FiMic size={"3rem"} color="#fff" />
      </VoiceBtn>
      <Voice>{hasInteracted ? textData : greetingMessage}</Voice>
    </VoiceContainer>
  );
};

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
  background-color: ${({ $isRecording }) => ($isRecording ? "red" : "none")};
`;

const Voice = styled.div`
  margin-top: 1.5rem;
  font-size: 25px;
  color: #fff;
  font-weight: 100;
  line-height: 1.3;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export default Speech;
