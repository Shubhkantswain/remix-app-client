import React, { useState } from 'react';

const AudioPlayer = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* Minimized Player - Hidden on md and larger screens */}
      <div
        className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-[95%] max-w-3xl bg-zinc-800 rounded-2xl p-2 mb-2 cursor-pointer md:hidden"
        onClick={() => setShowDetails(true)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-10 h-10 bg-zinc-700 rounded-md flex-shrink-0">
              <img
                src="/path-to-your-image.jpg"
                alt="Album art"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium truncate">Song Title</div>
              <div className="text-xs text-zinc-400 truncate">Artist Name</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <button className="text-zinc-400 hover:text-white" onClick={(e) => e.stopPropagation()}>
              <svg width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L12 2 6 8l6 6-2 2L2 8l8-8z" />
              </svg>
            </button>
            <button
              className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black hover:bg-zinc-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 0h4v16H4V0zm8 0h4v16h-4V0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-1.5">
          <div className="h-0.5 bg-zinc-600 rounded-full">
            <div className="h-full w-1/3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Full Screen Detail View - Hidden on md and larger screens */}
      <div
        className={`fixed inset-0 bg-black overflow-y-auto transition-transform duration-300 ease-in-out z-50 md:hidden ${
          showDetails ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-3xl mx-auto min-h-full">
          {/* Header */}
          <div className="p-4 flex items-center justify-between">
            <button onClick={() => setShowDetails(false)} className="text-zinc-400 hover:text-white">
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21l9-9-9-9-9 9 9 9z" />
              </svg>
            </button>
            <button className="text-zinc-400 hover:text-white">
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </button>
          </div>

          {/* Album Art and Info */}
          <div className="px-8 pt-8">
            <div className="aspect-square w-full max-w-md mx-auto bg-zinc-800 rounded-lg mb-8">
              <img
                src="/path-to-your-image.jpg"
                alt="Album art"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="space-y-1 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">Song Title</h2>
              <p className="text-zinc-400">Artist Name</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-8 mt-8">
            <div className="h-1 bg-zinc-800 rounded-full">
              <div className="h-full w-1/3 bg-white rounded-full"></div>
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
              <button className="text-zinc-400 hover:text-white">
                <svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16h8v16H4V16zm12 0h8v16h-8V16z" />
                </svg>
              </button>
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:bg-zinc-200">
                <svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 0h8v32H4V0zm12 0h8v32h-8V0z" />
                </svg>
              </button>
              <button className="text-zinc-400 hover:text-white">
                <svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16h8v16H4V16zm12 0h8v16h-8V16z" />
                </svg>
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between max-w-md mx-auto">
              <button className="text-zinc-400 hover:text-white">
                <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0v24" />
                </svg>
              </button>
              <button className="text-zinc-400 hover:text-white">
                <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12h24" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
