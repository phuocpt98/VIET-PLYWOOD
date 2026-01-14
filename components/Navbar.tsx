
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: 'home' | 'catalog') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('VN');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href === '#catalog') {
      e.preventDefault();
      onNavigate('catalog');
      setIsMenuOpen(false);
    } else if (href === '#' || href === '#home') {
      e.preventDefault();
      onNavigate('home');
      setIsMenuOpen(false);
    }
  };

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
    setIsLangOpen(false);
  };

  const navLinks = [
    { name: 'Trang chủ', href: '#' },
    { name: 'Catalog', href: '#catalog' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Báo giá', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-[95%] mx-auto flex items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-[#513C2E] rounded-md flex items-center justify-center text-white font-bungee">VP</div>
          <span className="text-xl font-extrabold uppercase tracking-tighter text-[#513C2E]">VietPlywood</span>
        </a>

        <div className="flex items-center gap-4 lg:gap-8">
          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-all hover:bg-[#513C2E] hover:text-white ${
                    (link.href === '#catalog' && currentView === 'catalog') || (link.href === '#' && currentView === 'home') 
                    ? 'bg-[#513C2E] text-white' : ''
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center justify-between gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-xs font-bold w-16"
              >
                <span>{lang}</span>
                <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${isLangOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-md overflow-hidden border border-gray-100 min-w-[70px]">
                  {['VN', 'EN'].map((l) => (
                    <button
                      key={l}
                      onClick={() => toggleLang(l as Language)}
                      className="w-full px-4 py-2 text-xs font-semibold text-center hover:bg-[#513C2E] hover:text-white transition-colors"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              className="lg:hidden text-2xl text-[#513C2E]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'}`}>
        <ul className="bg-white p-5 flex flex-col gap-4 max-w-[95%] mx-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-sm font-bold text-[#513C2E] hover:text-[#B1967F]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
