"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function HeroVideo() {
  const [videoUrl, setVideoUrl] = useState("/dark-bg.mp4");
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const updateVideoSource = () => {
      if (theme === "dark") {
        setVideoUrl("/dark-bg.mp4");
      } else {
        setVideoUrl("/light-bg.mp4");
      }
    };

    // Update video source when theme changes
    updateVideoSource();
  }, [theme]);

  useEffect(() => {
    // Ensure video plays on mount and when source changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videoUrl]);

  return (
    <div className="absolute top-0 w-full h-screen z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover z-0"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="overlay z-10 w-full min-h-full absolute top-0 left-0"
        style={{
          backgroundColor: theme === "dark" ? "#00000099" : "#ffffff23",
          backdropFilter: "blur(10px)",
        }}
      />
    </div>
  );
}
