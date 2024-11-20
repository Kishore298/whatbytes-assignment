"use client";
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-black sticky top-0 z-10 border-b border-gray-400">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.webp" alt="Logo" width={40} height={40} />
        <span className="text-2xl font-bold">WhatBytes</span>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-2 border border-gray-400 px-4 py-2 rounded-full">
        <Image
          src="/profile.webp"
          alt="Profile"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="text-sm lg:text-lg">Kishore</span>
      </div>
    </nav>
  );
}



  



  