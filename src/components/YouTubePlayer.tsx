"use client"
import YouTube from "react-youtube";

interface YouTubePlayerProps {
  videoId: string;
}

export default function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  // Set up event handlers
  const onReady = (event: { target: YT.Player }) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    // player.playVideo();
  };

  const onError = (error: { target: YT.Player }) => {
    console.error("YouTube Player Error:", error);
  };

  return <YouTube videoId={videoId} onReady={onReady} onError={onError} />;
}
