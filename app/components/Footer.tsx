import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-b border-zinc-800 pb-6">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm">
              We are a platform dedicated to delivering the best music experience, 
              bringing you closer to your favorite tracks and artists.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Browse Music
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Radio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.56v14.91A4.52 4.52 0 0 1 19.47 24H4.52A4.52 4.52 0 0 1 0 19.47V4.52A4.52 4.52 0 0 1 4.52 0h14.91A4.52 4.52 0 0 1 24 4.52zM7.13 19h3V9.47h-3zm4.62-6.7h-.05c-1 0-1.65-.64-1.65-1.42 0-.8.68-1.42 1.7-1.42s1.65.64 1.65 1.42c-.03.79-.67 1.42-1.65 1.42zm3.55 6.7h3V13c0-1.57-.86-2.3-2.05-2.3-1 0-1.53.57-1.8 1.1v6.18z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.46 6c-.77.35-1.59.59-2.46.69a4.16 4.16 0 0 0 1.83-2.3 8.36 8.36 0 0 1-2.64 1 4.16 4.16 0 0 0-7.09 3.78A11.8 11.8 0 0 1 2 4.71a4.16 4.16 0 0 0 1.29 5.55 4.12 4.12 0 0 1-1.89-.52v.05a4.17 4.17 0 0 0 3.33 4.1 4.24 4.24 0 0 1-1.89.07 4.17 4.17 0 0 0 3.9 2.9A8.34 8.34 0 0 1 2 18.58 11.79 11.79 0 0 0 6.29 20c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.37-.02-.55A8.26 8.26 0 0 0 22.46 6z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.77v20.46C0 23.22.79 24 1.77 24H12V14.7h-3V11h3v-2.3c0-2.95 1.8-4.56 4.42-4.56 1.26 0 2.35.09 2.67.13v3.1H16c-1.25 0-1.49.59-1.49 1.47V11h3.18l-.41 3.7h-2.77V24h5.42c.98 0 1.77-.79 1.77-1.77V1.77C24 .78 23.22 0 22.23 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
