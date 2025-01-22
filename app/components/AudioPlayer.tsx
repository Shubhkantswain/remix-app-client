import React, { useState } from 'react';
import NowPlaying from './NowPlaying';

const AudioPlayer = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            {/* Minimized Player - Hidden on md and larger screens */}
            <div
                className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-[95%] max-w-3xl bg-[#17171a] rounded-2xl p-1.5 mb-2 cursor-pointer md:hidden"
                onClick={() => setShowDetails(true)}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-zinc-700 rounded-md flex-shrink-0">
                            <img
                                src="https://yt3.googleusercontent.com/A8BAczcCszeBNer_o6wC3LnvY-Q6NC1z72ODLnBjOPctDnJZF6vuvgo7MDbRDmBwjzbGJUTfIA=s900-c-k-c0x00ffffff-no-rj"
                                alt="Album art"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium truncate">Song Title</div>
                            <div className="text-xs text-zinc-400 truncate">Artist Name</div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 flex-shrink-0 mr-3">
                        <button
                            className="w-6 h-6 rounded-full flex items-center justify-center bg-transparent"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="white"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-play"
                            >
                                <polygon points="6 3 20 12 6 21 6 3" />
                            </svg>
                        </button>
                        <button
                            className="w-6 h-6 rounded-full flex items-center justify-center bg-transparent text-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-heart"
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-1">
                    <div className="h-0.5 bg-zinc-600 rounded-full">
                        <div className="h-full w-1/3 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Full Screen Detail View - Hidden on md and larger screens */}
            <NowPlaying showDetails={showDetails} setShowDetails={setShowDetails}/>
        </>
    );
};

export default AudioPlayer;