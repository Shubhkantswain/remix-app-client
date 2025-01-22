import { ReactNode, useState } from 'react';
import { Search, Bell, ChevronDown, Menu, X, Home, Compass, Radio, Library} from 'lucide-react';
import AudioPlayer from './AudioPlayer';

// Mobile Footer Navigation Component
const MobileFooterNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 md:hidden">
    <div className="flex justify-around items-center h-[60px]">
      <button className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white">
        <Home size={20} />
        <span className="text-xs">Listen Now</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white">
        <Compass size={20} />
        <span className="text-xs">Browse</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white">
        <Radio size={20} />
        <span className="text-xs">Radio</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white">
        <Library size={20} />
        <span className="text-xs">Library</span>
      </button>
    </div>
  </div>
);

// Main Layout Component
const AppleMusicLayout = ({ children }: {children: ReactNode}) => {
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
                <X size={24} />
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
                <Menu size={20} />
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
                <Search size={20} className="text-zinc-400" />
              </button>

              {/* Search Bar - Tablet and Up */}
              <div className="hidden sm:flex items-center bg-zinc-800 rounded-full px-4 py-1.5">
                <Search size={16} className="text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none focus:outline-none text-sm ml-2 w-48"
                />
              </div>

              {/* Notification Bell */}
              <button className="hidden sm:block p-2 hover:bg-zinc-800 rounded-full">
                <Bell size={20} className="text-zinc-400" />
              </button>

              {/* Profile/Sign In Button */}
              <button className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 rounded-full px-3 sm:px-4 py-1.5">
                <div className="w-6 h-6 bg-zinc-600 rounded-full"></div>
                <span className="hidden sm:inline text-sm font-medium">Sign In</span>
                <ChevronDown size={16} className="text-zinc-400" />
              </button>
            </div>
          </div>

          {/* Lower Header - Category Navigation */}
          <div className="px-4 sm:px-6 py-2 flex items-center justify-between sm:justify-start sm:space-x-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm whitespace-nowrap py-2 border-b-2 transition-colors ${
                  activeCategory === category
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