import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-black text-olive-dark py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl md:text-3xl font-bold tracking-widest font-serif block text-gold">
             {language === 'ar' ? 'معصرة زيتون بيكي' : "BIKKI'S OLIVE PRESS"}
          </Link>
          <p className="text-olive-dark/60 text-sm leading-relaxed max-w-xs">
            {t('footer.desc')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-olive-light hover:text-cream transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-olive-light hover:text-cream transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-olive-light hover:text-cream transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-gold">{t('footer.shop')}</h4>
          <ul className="space-y-4 text-olive-dark/70 text-sm">
            <li><Link to="/products" className="hover:text-olive-light transition-colors">{t('footer.shop.1')}</Link></li>
            <li><Link to="/products" className="hover:text-olive-light transition-colors">{t('footer.shop.2')}</Link></li>
            <li><Link to="/products" className="hover:text-olive-light transition-colors">{t('footer.shop.3')}</Link></li>
            <li><Link to="/products" className="hover:text-olive-light transition-colors">{t('footer.shop.4')}</Link></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-gold">{t('footer.company')}</h4>
          <ul className="space-y-4 text-olive-dark/70 text-sm">
            <li><Link to="/about" className="hover:text-olive-light transition-colors">{t('footer.company.1')}</Link></li>
            <li><Link to="/about" className="hover:text-olive-light transition-colors">{t('footer.company.2')}</Link></li>
            <li><Link to="/contact" className="hover:text-olive-light transition-colors">{t('footer.company.3')}</Link></li>
            <li><Link to="/contact" className="hover:text-olive-light transition-colors">{t('footer.company.4')}</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-gold">{t('footer.contact.title')}</h4>
          <div className="space-y-4 text-olive-dark/70 text-sm">
             <div className="flex items-start gap-3 group">
                <Mail size={18} className="text-olive-light mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{t('footer.data.email')}</span>
            </div>
            <div className="flex items-start gap-3 group">
                <Phone size={18} className="text-olive-light mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors" dir="ltr">{t('footer.data.phone')}</span>
            </div>
             <div className="flex items-start gap-3 group">
                <MapPin size={18} className="text-olive-light mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors leading-relaxed">{t('footer.data.address')}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-olive-dark/40">
        <p>&copy; {new Date().getFullYear()} {t('footer.copy')}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-white">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;