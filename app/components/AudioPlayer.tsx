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
                        <button
                            className="text-zinc-400 hover:text-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        </button>
                        <button
                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black hover:bg-zinc-200"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
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
                className={`fixed inset-0 bg-black overflow-y-auto transition-transform duration-300 ease-in-out z-50 md:hidden ${showDetails ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="max-w-3xl mx-auto min-h-full">
                    {/* Header */}
                    <div className="p-4 flex items-center justify-between">
                        <button
                            onClick={() => setShowDetails(false)}
                            className="text-zinc-400 hover:text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                        </button>
                        <button className="text-zinc-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-music"><path d="M21 15V6" /><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path d="M12 12H3" /><path d="M16 6H3" /><path d="M12 18H3" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" x2="5" y1="19" y2="5" /></svg>
                            </button>
                            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:bg-zinc-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                            </button>
                            <button className="text-zinc-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" x2="19" y1="5" y2="19" /></svg>
                            </button>
                        </div>

                        {/* Bottom Controls */}
                        <div className="flex items-center justify-between max-w-md mx-auto">
                            <button className="text-zinc-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></svg>
                            </button>
                            <button className="text-zinc-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AudioPlayer;