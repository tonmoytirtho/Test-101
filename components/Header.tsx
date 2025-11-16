
import React from 'react';
import { SearchIcon, ChevronDownIcon } from './icons';

const Header: React.FC = () => {
  const navItems = ["Home", "Products", "Solutions", "Quality & Manufacturing", "Dealer Network", "Support", "Company", "Portal (B2B)"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-zess-heading" href="/">
              <span className="sr-only">Home</span>
              <span className="text-2xl font-bold font-heading">ZESS TYRE</span>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map(item => (
                  <li key={item}>
                    <a className="text-zess-body font-medium transition hover:text-zess-orange" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                 <button className="p-2 text-gray-600 hover:text-zess-orange">
                    <SearchIcon className="h-5 w-5" />
                </button>
                <button className="flex items-center gap-1 p-2 text-gray-600 hover:text-zess-orange">
                    <span className="text-sm font-semibold">EN</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-sm">BN</span>
                    <ChevronDownIcon className="h-4 w-4" />
                </button>
              </div>

              <div className="hidden sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-zess-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500"
                  href="#"
                >
                  Enquire Now
                </a>
                <a
                  className="rounded-md border border-gray-900 px-5 py-2.5 text-sm font-semibold text-zess-heading transition hover:bg-gray-100"
                  href="#"
                >
                  Find a Dealer
                </a>
              </div>

              <div className="block lg:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
