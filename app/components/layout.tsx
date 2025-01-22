import { ReactNode, useState } from 'react';
import AudioPlayer from './AudioPlayer';

// Mobile Footer Navigation Component
const MobileFooterNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-900 to-black md:hidden">
    <div className="flex justify-evenly items-center h-[60px] w-full">
      <button className="flex flex-col items-center space-y-0 text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      </button>
      <button className="flex flex-col items-center space-y-0 text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-compass">
          <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      </button>
      <button className="flex flex-col items-center space-y-0 text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-radio">
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
          <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
      </button>
      <button className="flex flex-col items-center space-y-0 text-zinc-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-library">
          <path d="m16 6 4 14" />
          <path d="M12 6v14" />
          <path d="M8 8v12" />
          <path d="M4 4v16" />
        </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
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

            {/* Search and User Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Button - Mobile */}
              <button className="sm:hidden p-2 hover:bg-zinc-800 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </button>

              {/* Search Bar - Tablet and Up */}
              <div className="hidden sm:flex items-center bg-zinc-800 rounded-full px-4 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none focus:outline-none text-sm ml-2 w-48"
                />
              </div>

              {/* Notification Bell */}
              <button className="hidden sm:block p-2 hover:bg-zinc-800 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
              </button>

              {/* Profile/Sign In Button */}
              <button className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 rounded-full px-3 sm:px-4 py-1.5">
                <div className="w-6 h-6 bg-zinc-600 rounded-full"></div>
                <span className="hidden sm:inline text-sm font-medium">Sign In</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              </button>
            </div>
          </div>

          {/* Lower Header - Category Navigation */}
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