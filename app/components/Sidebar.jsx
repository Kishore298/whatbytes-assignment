"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faMedal, faFileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { path: '/Dashboard', label: 'Dashboard', icon: faChartBar },
    { path: '/', label: 'Skill Test', icon: faMedal },
    { path: '/Internship', label: 'Internship', icon: faFileAlt },
  ];

  return (
    <aside className="w-1/5 md:w-1/5 bg-white min-h-screen text-black border-r border-gray-400">
      <ul className="space-y-8 mt-4">
        {navItems.map((item) => (
          <li key={item.path} className="flex items-center">
            <Link
              href={item.path}
              className={`flex items-center gap-1 lg:gap-5 text-xs lg:text-xl px-1 py-1 lg:px-12 lg:py-3 rounded-full transition-all ${
                pathname === item.path
                  ? 'bg-blue-200 text-black border-2 border-blue-500'
                  : 'hover:text-blue-500 hover:bg-blue-100'
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-black text-xs lg:text-xl" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}





