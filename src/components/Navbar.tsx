import React from 'react';

function Navbar() {
    return (
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:py-8 2xl:px-0 w-full">
        <img src="/duelx-logo.png" alt="duelx logo" className="w-16" />
        <a className="rounded-full border border-white p-4 text-sm transition hover:bg-gray hover:bg-opacity-20 md:p-5 md:text-base">
          Read Whitepaper
        </a>
      </nav>
    );
}

export default Navbar;