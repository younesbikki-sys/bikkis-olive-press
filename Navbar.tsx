import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onOpenOrder: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface shadow-md py-4' : 'bg-surface/95 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest text-gold font-serif">
          {language === 'ar' ? 'معصرة زيتون بيكي' : "BIKKI'S OLIVE PRESS"}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm md:text-base font-medium uppercase tracking-wider transition-colors hover:text-olive-light ${
                location.pathname === link.path ? 'text-olive-light underline underline-offset-4' : 'text-olive-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="text-olive-dark hover:text-olive-light transition-colors flex items-center gap-1 text-sm font-bold"
          >
            <Globe size={18} />
            <span>{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          
           <button className="text-olive-dark hover:text-olive-light transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button 
            onClick={onOpenOrder}
            className="bg-olive-light text-cream px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-olive transition-colors shadow-lg shadow-olive-light/20"
          >
            {t('nav.order')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-olive-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-white/5 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lg font-medium text-olive-dark hover:text-olive-light py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between py-2 border-b border-white/5">
             <span className="text-olive-dark">{language === 'en' ? 'Language' : 'اللغة'}</span>
             <button 
                onClick={toggleLanguage}
                className="text-olive-light font-bold"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
          </div>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenOrder();
            }}
            className="bg-olive-light text-cream w-full py-3 rounded-full text-sm font-bold uppercase tracking-wide mt-4"
          >
             {t('nav.order')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;