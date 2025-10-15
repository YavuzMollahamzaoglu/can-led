
import React from 'react';
import { COMPANY_NAME, NAV_LINKS, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 py-10">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <div className="mb-6">
          <h3 className="text-2xl font-black text-white tracking-wider mb-2">{COMPANY_NAME}</h3>
          <p>Yenilikçi LED teknolojisiyle geleceği aydınlatıyoruz.</p>
        </div>
        <div className="flex justify-center space-x-8 mb-6">
            {NAV_LINKS.map(link => (
                <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                </a>
            ))}
        </div>
        <div className="flex justify-center space-x-6 mb-8">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><i className="fab fa-instagram"></i></a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><i className="fab fa-facebook"></i></a>
        </div>
        <div className="border-t border-slate-700 pt-6">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
