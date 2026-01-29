import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-surface py-20 px-6 mb-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-olive-light font-bold tracking-widest uppercase text-sm mb-4 block">{t('about.since')}</span>
          <h1 className="text-5xl md:text-7xl font-serif text-olive-dark mb-8">{t('about.title')}</h1>
          <p className="text-xl text-olive-dark/70 font-light max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Main Story Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Sidebar Info (Desktop) */}
          <div className="hidden md:block md:col-span-4 sticky top-32 space-y-8">
            <div className="bg-surface p-8 rounded-xl shadow-lg shadow-black/20 border border-white/5">
              <h3 className="font-serif text-2xl mb-6 text-gold">{t('about.facts.title')}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Calendar className="text-olive-light mt-1" size={20} />
                  <div>
                    <span className="block font-bold text-sm uppercase tracking-wide text-olive-dark">{t('about.facts.founded')}</span>
                    <span className="text-olive-dark/60">{t('about.facts.founded.val')}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="text-olive-light mt-1" size={20} />
                  <div>
                    <span className="block font-bold text-sm uppercase tracking-wide text-olive-dark">{t('about.facts.loc')}</span>
                    <span className="text-olive-dark/60">{t('about.facts.loc.val')}</span>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <Award className="text-olive-light mt-1" size={20} />
                  <div>
                    <span className="block font-bold text-sm uppercase tracking-wide text-olive-dark">{t('about.facts.dist')}</span>
                    <span className="text-olive-dark/60">{t('about.facts.dist.val')}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-span-1 md:col-span-8 space-y-8">
             <div className="prose prose-lg prose-headings:font-serif prose-headings:text-gold text-olive-dark/80 marker:text-olive-light prose-strong:text-olive-dark">
              <p className="lead text-2xl font-serif italic text-olive-dark leading-relaxed">
                {t('about.quote')}
              </p>
              
              <h2 className="text-3xl mt-8 mb-4">{t('about.sect1.title')}</h2>
              <p>{t('about.sect1.p1')}</p>
              <p>{t('about.sect1.p2')}</p>

              <div className="my-12 relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                 <img 
                   src="https://thumbs.dreamstime.com/b/millstone-olive-oil-press-squeeze-out-olive-oil-millstone-olive-oil-press-114226937.jpg" 
                   alt="Traditional Millstone Olive Oil Press"
                   className="object-cover w-full h-full"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-sm italic">{t('about.img.cap')}</p>
                 </div>
              </div>

              <h2 className="text-3xl mt-8 mb-4">{t('about.sect2.title')}</h2>
              <p>{t('about.sect2.p1')}</p>
              <p>{t('about.sect2.p2')}</p>
             </div>
             
             {/* Signature */}
             <div className="pt-12 mt-12 border-t border-white/10">
                <p className="font-serif text-2xl text-gold">{t('about.sig.name')}</p>
                <p className="text-sm uppercase tracking-widest text-olive-dark/60 mt-1">{t('about.sig.role')}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;