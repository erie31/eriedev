import React from 'react';

const GithubIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    </svg>
);

const InstagramIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TvIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
    </svg>
);

export default function Footer() {
    return (
        <footer className="w-full py-12 mt-20 border-t border-zinc-900">
            <div className="container mx-auto flex flex-col items-center justify-center gap-6">
                <div className="flex space-x-6">
                    <a href="https://github.com/erie31" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors">
                        <GithubIcon size={24} />
                    </a>
                    <a href="https://twitch.tv/eriezone" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors">
                        <TvIcon size={24} />
                    </a>
                    <a href="https://www.instagram.com/eriemilutinovic/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors">
                        <InstagramIcon size={24} />
                    </a>
                </div>
                <p className="text-zinc-600 text-xs tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} Erié
                </p>
            </div>
        </footer>
    );
}
