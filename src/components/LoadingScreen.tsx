import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          {/* Outer glowing ring */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-spin-slow opacity-70"></div>
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-pink-500 animate-pulse-fast"></div>
        </div>
        <p className="mt-8 text-xl font-semibold tracking-wide text-purple-300">Loading Portfolio...</p>
      </div>
    </div>
  );
}
