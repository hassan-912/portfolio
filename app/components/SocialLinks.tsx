'use client'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/hassan-912"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
        aria-label="GitHub Profile"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/hassan-mahmoud-b60587246/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/__hassanmahmoud_/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 text-pink-600 dark:text-pink-400"
        aria-label="Instagram Profile"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  )
} 