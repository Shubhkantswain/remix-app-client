import { ReactNode, useState } from 'react';
import AudioPlayer from './AudioPlayer';

const MOBILE_NAV_HEIGHT = 60;
const AUDIO_PLAYER_HEIGHT = 90;

// Audio Player Component


// Mobile Footer Navigation Component
const MobileFooterNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-900 to-black h-[60px] md:hidden">
    <div className="flex justify-evenly items-center h-full w-full">
      <button className="flex flex-col items-center text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
      </button>
      <button className="flex flex-col items-center text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
      </button>
      <button className="flex flex-col items-center text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" /></svg>
      </button>
      <button className="flex flex-col items-center text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></svg>
      </button>
    </div>
  </div>
);

// Main Layout Component
const AppleMusicLayout = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('For You');

  const categories = ['For You', 'Browse', 'Radio', 'Library'];
  const expandedCategories = [...categories, 'Listen Now', 'Recently Played', 'Playlists', 'Albums'];

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-50">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <span className="text-xl font-semibold">Music</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-zinc-800 rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
            <nav className="space-y-6">
              {expandedCategories.map((item) => (
                <button
                  key={item}
                  className="w-full text-left text-lg font-medium hover:text-red-500 transition-colors"
                  onClick={() => {
                    setActiveCategory(item);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Sidebar - Desktop */}
      <div className="hidden md:flex flex-col w-64 bg-zinc-900 p-6 space-y-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full"></div>
          <span className="text-xl font-semibold">Music</span>
        </div>

        <nav className="space-y-4">
          <div className="text-sm text-zinc-400 font-semibold">LIBRARY</div>
          <ul className="space-y-3">
            {expandedCategories.map((item) => (
              <li
                key={item}
                className={`text-sm cursor-pointer transition-colors ${activeCategory === item ? 'text-red-500' : 'text-zinc-400 hover:text-white'
                  }`}
                onClick={() => setActiveCategory(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-zinc-900 border-b border-zinc-800">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden p-2 hover:bg-zinc-800 rounded-md"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              </button>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
                  ←
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
                  →
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="sm:hidden p-2 hover:bg-zinc-800 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </button>
              <div className="hidden sm:flex items-center bg-zinc-800 rounded-full px-4 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none focus:outline-none text-sm ml-2 w-48"
                />
              </div>
              <button className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 rounded-full px-3 sm:px-4 py-1.5">
                <div className="w-6 h-6 bg-zinc-600 rounded-full"></div>
                <span className="hidden sm:inline text-sm font-medium">Sign In</span>
              </button>
            </div>
          </div>

          <div className="px-4 sm:px-6 py-2 flex items-center justify-between sm:justify-start sm:space-x-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm whitespace-nowrap py-2 border-b-2 transition-colors ${activeCategory === category
                    ? 'text-white border-red-500'
                    : 'text-zinc-400 border-transparent hover:text-white hover:border-red-500'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        {/* Main Content Area with Proper Spacing */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black">
          <div
            className={`p-4 sm:p-6 pb-[${MOBILE_NAV_HEIGHT + AUDIO_PLAYER_HEIGHT
              }px] md:pb-[${AUDIO_PLAYER_HEIGHT}px]`}
          >
            {children}
          </div>
        </main>


        <AudioPlayer />
        <MobileFooterNav />
      </div>
    </div>
  );
};

export default AppleMusicLayout;