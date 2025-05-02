import { useRef, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start with sound ON

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to play audio on load
    const playAudio = async () => {
      try {
        await audio.play();
        audio.muted = false;
      } catch (error) {
        console.warn("Autoplay failed, waiting for user interaction...");
        // Optional: listen for user interaction to play
        const handleInteraction = () => {
          audio.play();
          document.removeEventListener("click", handleInteraction);
        };
        document.addEventListener("click", handleInteraction);
      }
    };

    playAudio();
  }, []);

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16 h-16 text-white-400 bg-white-400" src={logo} alt="Logo" />
      </div>

      {/* Social Icons & Music Toggle */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
      <a href="https://www.linkedin.com/in/ishan-l-35938025a" target="_blank" rel="noopener noreferrer">
  <FaLinkedin className="cursor-pointer hover:text-blue-500" />
</a>

<a href="https://github.com/Ishan-lokari" target="_blank" rel="noopener noreferrer">
  <FaGithub className="cursor-pointer hover:text-gray-400" />
</a>

<a href="https://www.instagram.com/ishan.lokari?igsh=eWwzeHpvdHM3enJp" target="_blank" rel="noopener noreferrer">
  <FaInstagram className="cursor-pointer hover:text-pink-500" />
</a>

<a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
  <FaSquareXTwitter className="cursor-pointer hover:text-sky-500" />
</a>


        <button
          onClick={toggleMute}
          className="cursor-pointer hover:text-green-400"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        <audio ref={audioRef} src="/background-music.mp3" autoPlay loop />
      </div>
    </nav>
  );
};

export default Navbar;
