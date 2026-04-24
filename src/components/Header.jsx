import React from 'react';

const LayoutGridIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

function Header({ onGalleryToggle }) {
  return (
    <header className="w-full px-6 py-8 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur-md z-50">
      <div className="text-xl font-montserrat font-bold tracking-tight text-white">
        Erié.
      </div>
      <button 
        onClick={onGalleryToggle} 
        className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-emerald-500 transition-colors"
        aria-label="Toggle Project Gallery"
      >
        <span className="hidden sm:inline">Project Gallery</span>
        <LayoutGridIcon size={20} />
      </button>
    </header>
  );
}

export default Header;
