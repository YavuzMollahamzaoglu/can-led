// FIX: Removed a stray '<' character from the beginning of the file that was causing a syntax error.
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const FloatingActionButton: React.FC = () => {
  return (
    <div className="fixed bottom-24 right-6 z-40 group">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary hover:bg-secondary-hover text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp üzerinden iletişime geçin"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
      <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap">
        <span className="bg-slate-800 text-white text-sm font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Destek Hattı
        </span>
      </div>
    </div>
  );
};

export default FloatingActionButton;