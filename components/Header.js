import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gray-100">
      <div className="max-w-screen-lg mx-auto bg-grey-400 p-4">
        <nav className="w-full">
          <ul className="w-full flex flex-row justify-between items-center">
            <Link href="/">
              <li className="cursor-pointer">Multi Step Form</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
