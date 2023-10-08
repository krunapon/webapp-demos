import { useState, useRef, useEffect } from "react";
function VideoPlayer({ src, isPlaying }) {
  const videoRef = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()')
      videoRef.current.play();
    } else {
      console.log('Calling video.pause()')
      videoRef.current.pause();
    }
  }, [isPlaying]);
  return <video ref={videoRef} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} /> 
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
    </>
  );
}
