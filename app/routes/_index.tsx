import React, { useState } from 'react';
import { Play, MoreHorizontal, Heart, Shuffle, Share2, Download, Clock, Mic2 } from 'lucide-react';
import AppleMusicLayout from '~/components/layout';
import Footer from '~/components/Footer';

const PlaylistPage = () => {
  const [isLiked, setIsLiked] = useState(false);

  const songs = [
    { id: 1, title: "Starboy", artist: "The Weeknd", album: "Starboy", explicit: true, hasLyrics: true },
    { id: 2, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", explicit: false, hasLyrics: true },
    { id: 3, title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", explicit: true, hasLyrics: true },
  ];

  return (
    <AppleMusicLayout>

      <div className="flex flex-col min-h-full">
        {/* Playlist Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6 p-6">
          <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-purple-600 to-pink-500 shadow-xl">
            <img
              src="/api/placeholder/224/224"
              alt="Playlist cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center md:items-start flex-1">
            <span className="text-xs font-semibold uppercase tracking-wider">Playlist</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 text-center md:text-left">The Weeknd Essentials</h1>
            <p className="text-sm text-zinc-400 mt-2">Created by Apple Music</p>
            <p className="text-sm text-zinc-400 mt-1">50 songs, 2 hours 45 minutes</p>

            <div className="flex items-center space-x-4 mt-4">
              <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-3 flex items-center space-x-2">
                <Play size={20} fill="white" />
                <span>Play</span>
              </button>

              <button
                className={`p-2 rounded-full ${isLiked ? "text-red-500" : "text-zinc-400"} hover:text-white`}

                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
              </button>

              <button className="p-2 text-zinc-400 hover:text-white">
                <Shuffle size={24} />
              </button>

              <button className="p-2 text-zinc-400 hover:text-white">
                <Share2 size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Songs List */}
        <div className="flex-1 px-6">
          <table className="w-full mt-6">
            <thead>
              <tr className="text-left text-xs text-zinc-400 border-b border-zinc-800">
                <th className="pb-2 font-medium w-12">#</th>
                <th className="pb-2 font-medium">Title</th>
                <th className="pb-2 font-medium hidden md:table-cell">Album</th>
                <th className="pb-2 font-medium text-right w-24">
                  <Clock size={16} />
                </th>
                <th className="pb-2 font-medium w-12"></th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <tr
                  key={song.id}
                  className={`group transition-colors
                  ${index % 2 === 0 ? 'bg-zinc-900/30' : 'bg-zinc-800/20'}
                  hover:bg-zinc-700/50`}
                >
                  <td className="py-3 text-sm text-zinc-400 group-hover:text-white pl-2">{index + 1}</td>
                  <td className="py-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 flex-shrink-0">
                        <img
                          src="/api/placeholder/40/40"
                          alt={`${song.title} cover`}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium group-hover:text-white flex items-center gap-2">
                          {song.title}
                          {song.explicit && (
                            <span className="text-xs px-1 bg-zinc-700 rounded">E</span>
                          )}
                        </span>
                        <span className="text-sm text-zinc-400">{song.artist}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-zinc-400 hidden md:table-cell">{song.album}</td>
                  <td className="py-3 text-zinc-400 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      {song.hasLyrics && <Mic2 size={16} />}
                      <Download size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </td>
                  <td className="py-3">
                    <button className="invisible group-hover:visible p-2 text-zinc-400 hover:text-white">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
     {/* <Footer/> */}
    </AppleMusicLayout>
  );
};

export default PlaylistPage;