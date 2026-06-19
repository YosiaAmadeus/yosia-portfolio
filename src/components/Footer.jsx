import React from "react";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 py-10 pb-2 mt-10 text-center flex flex-col items-center px-4">
          
          {/* Jejeran Icon/Link Sosial Media */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
            <a href="https://github.com/YosiaAmadeus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors font-medium">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yosiaamadeus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors font-medium">
              LinkedIn
            </a>
            <a href="mailto:yosiaamadeus10@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors font-medium">
              Email
            </a>
            <a href="https://wa.me/6287720837815" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors font-medium">
              WhatsApp
            </a>
            <a href="https://instagram.com/yosiaamadeus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors font-medium">
              Instagram
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Yosia Amadeus. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
    );
};

export default Footer;