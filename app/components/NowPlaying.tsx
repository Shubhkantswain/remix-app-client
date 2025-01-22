import React, { useState } from 'react';

interface NowPlayingProps {
    showDetails: boolean;
    setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const NowPlaying: React.FC<NowPlayingProps> = ({ showDetails, setShowDetails }) => {
    const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`fixed inset-0 bg-black overflow-y-auto transition-all duration-300 ease-out z-50 md:hidden ${
        showDetails ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Enhanced Smooth Animated Gradient Background */}
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          background: 'linear-gradient(-45deg, #2C3E50, #BDC3C7, #3498DB, #ECF0F1, #34495E, #95A5A6, #E0E0E0)',
          backgroundSize: '400% 400%',
          animation: 'gradientFlow 15s ease-in-out infinite',
          filter: 'blur(120px)',
        }}
      />

      <style>
        {`
          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes pulseBackground {
            0%, 100% {
              filter: blur(120px);
            }
            50% {
              filter: blur(130px);
            }
          }
        `}
      </style>

      <div className="relative z-10 max-w-3xl mx-auto min-h-full">
        {/* Header */}
        <div className="p-4 flex items-center justify-between backdrop-blur-sm bg-black/30">
          <button
            onClick={() => setShowDetails(false)}
            className="text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-music"><path d="M21 15V6" /><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path d="M12 12H3" /><path d="M16 6H3" /><path d="M12 18H3" /></svg>
          </button>
        </div>

        {/* Album Art and Info */}
        <div className="px-8 pt-8">
          <div 
            className={`aspect-square w-full max-w-md mx-auto bg-zinc-800 rounded-lg mb-8 transition-all duration-500 ease-out transform ${
              isPlaying ? 'scale-100' : 'scale-95'
            }`}
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Album art"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="space-y-1 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold transition-all duration-300">Song Title</h2>
            <p className="text-zinc-400 transition-all duration-300">Artist Name</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-8 mt-8">
          <div className="h-1 bg-zinc-800/50 backdrop-blur-sm rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-white/90 rounded-full transition-all duration-300 ease-out"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-zinc-400">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>

        {/* Controls */}
        <div className="px-8 py-12">
          {/* Playback Controls */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <button className="text-zinc-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" x2="5" y1="19" y2="5" /></svg>
            </button>
            <button 
              className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white/80 transition-all duration-300 ease-out transform hover:scale-105"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
              )}
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" x2="19" y1="5" y2="19" /></svg>
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between max-w-md mx-auto">
            <button className="text-zinc-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></svg>
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;