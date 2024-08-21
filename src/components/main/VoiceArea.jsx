import React, { useState, useRef, useEffect } from "react";
import { FiMic } from "react-icons/fi";

const Speech = ({ onSpeechComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
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
        "https://6f72-36-38-187-106.ngrok-free.app/api/audio/rasa/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const formDataResponse = await response.formData();
      const textData = formDataResponse.get("text1");
      const audioData = formDataResponse.get("audio1");

      console.log("Text response:", textData);
      console.log("Audio file name:", audioData.name);

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
    <div>
      <button
        onClick={toggleRecording}
        disabled={isProcessing}
        className={`ml-2 p-2 rounded-md transition-colors ${
          isRecording
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <FiMic size={20} />
      </button>
    </div>
  );
};

export default Speech;
