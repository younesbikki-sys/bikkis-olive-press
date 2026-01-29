import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Clear and Visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://oleumhistriae.com/wp-content/uploads/2023/11/prva-fotka.jpg"
          alt="Olive Grove"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
      </div>

      {/* Content wrapped in a Transparent Glass Card */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="bg-black/50 backdrop-blur-md p-8 md:p-14 rounded-3xl shadow-2xl border border-white/10 mx-auto max-w-4xl animate-in fade-in zoom-in duration-700">
            <div className="mb-8 flex justify-center">
              <div className="px-6 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
                  {t('hero.est')} &nbsp;—&nbsp; {t('hero.tagline')}
                </p>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-olive-dark mb-6 leading-tight drop-shadow-sm">
            {t('hero.headline.1')} <br />
            <span className="italic text-gold">{t('hero.headline.2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-olive-dark/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
            {t('hero.subheadline')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
                to="/products"
                className="group bg-olive-light/90 hover:bg-olive-light text-cream px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-xl shadow-olive-light/20 backdrop-blur-sm"
            >
                {t('hero.cta.shop')}
                <ArrowRight size={16} className={`group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>
            <Link 
                to="/about"
                className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-olive-dark border-2 border-olive-dark/40 hover:bg-olive-dark hover:text-cream transition-all backdrop-blur-sm"
            >
                {t('hero.cta.story')}
            </Link>
            </div>
        </div>
      </div>

      {/* Decorative leaf element at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-olive-light drop-shadow-lg">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;