import { ReactNode, useState } from 'react';
import AudioPlayer from './AudioPlayer';

// Mobile Footer Navigation Component
const MobileFooterNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 md:hidden">
    <div className="flex justify-around items-center h-[60px]">
      <button className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M3 9.75L12 4.5l9 5.25v9.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5V9.75z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 22.5v-6a3 3 0 016 0v6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs">Listen Now</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12h6m-3-3v6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs">Browse</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12.5L12 10v5l4-2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs">Radio</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M6 3v18m12-18v18m-9-9h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs">Library</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <path d="M6 18L18 6m-12 0l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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

      {/* Sidebar - Medium Screens and Up */}
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
                className={`text-sm cursor-pointer transition-colors ${
                  activeCategory === item ? 'text-red-500' : 'text-zinc-400 hover:text-white'
                }`}
                onClick={() => setActiveCategory(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-zinc-900 border-b border-zinc-800">
          {/* Upper Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-zinc-800 rounded-md"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black p-4 sm:p-6 pb-32 md:pb-6">
          {children}
        </main>

        {/* Audio Player Bar - Mobile Only */}
        <AudioPlayer />

        {/* Mobile Footer Navigation */}
        <MobileFooterNav />
      </div>
    </div>
  );
};

export default AppleMusicLayout;
