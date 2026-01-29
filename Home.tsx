import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Header */}
      <div className="bg-surface py-20 px-6 mb-12 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-olive-dark mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-olive-dark/70 font-light max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-gold mb-8">{t('contact.info.title')}</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-olive-light/10 flex items-center justify-center text-olive-light group-hover:bg-olive-light group-hover:text-cream transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-olive-dark mb-1">Email</h3>
                    <a href="mailto:bikkipress@gmail.com" className="text-olive-dark/70 hover:text-gold transition-colors block text-lg">
                      bikkipress@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-olive-light/10 flex items-center justify-center text-olive-light group-hover:bg-olive-light group-hover:text-cream transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-olive-dark mb-1">Phone</h3>
                    <a href="tel:+212661634455" className="text-olive-dark/70 hover:text-gold transition-colors block text-lg" dir="ltr">
                      0661634455
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-full bg-olive-light/10 flex items-center justify-center text-olive-light group-hover:bg-olive-light group-hover:text-cream transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-olive-dark mb-1">Location</h3>
                    <p className="text-olive-dark/70 text-lg leading-relaxed">
                      Laaouina, Aglou<br />
                      Tiznit, Morocco
                    </p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Aglou+Tiznit+Morocco" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm font-bold uppercase tracking-widest text-olive-light border-b border-olive-light pb-1 hover:text-white transition-colors"
                    >
                      {t('contact.button.map')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Image / Visual */}
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tiznit_Montagne.jpg/1200px-Tiznit_Montagne.jpg" 
               alt="Tiznit Landscape" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
             
             {/* Floating WhatsApp Action */}
             <div className="absolute bottom-8 left-8 right-8 bg-surface/90 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center">
                <h3 className="font-serif text-xl text-gold mb-2">{t('contact.form.title')}</h3>
                <p className="text-sm text-olive-dark/70 mb-4">
                  For the quickest response, meimport React from 'react';
import Hero from '../components/Hero';
import { Truck, ShieldCheck, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="w-16 h-16 rounded-full bg-olive-light/10 flex items-center justify-center text-olive-light mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl mb-2 text-gold">{title}</h3>
    <p className="text-olive-dark/70 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Home: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature 
              icon={<Leaf size={32} />} 
              title={t('home.feat1.title')} 
              desc={t('home.feat1.desc')}
            />
            <Feature 
              icon={<ShieldCheck size={32} />} 
              title={t('home.feat2.title')} 
              desc={t('home.feat2.desc')}
            />
            <Feature 
              icon={<Truck size={32} />} 
              title={t('home.feat3.title')} 
              desc={t('home.feat3.desc')}
            />
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-24 px-6 bg-cream border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <img 
               src="https://www.oliveamelia.com/cdn/shop/collections/Olive-Amelia-3.jpg?crop=center&height=1200&v=1752594549&width=1200" 
               alt="Olive oil" 
               className="relative z-10 w-full h-auto rounded-lg shadow-2xl shadow-black/50"
             />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-olive-dark leading-snug">
              {t('home.prev.title1')} <br/>
              <span className="text-gold italic">{t('home.prev.title2')}</span>
            </h2>
            <p className="text-lg text-olive-dark/80 leading-relaxed">
              {t('home.prev.desc')}
            </p>
            <div className="pt-4">
              <button className="text-olive-light font-bold uppercase tracking-widest border-b-2 border-olive-light pb-1 hover:text-white transition-colors text-base">
                {t('home.prev.btn')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;ssage us directly on WhatsApp.
                </p>
                <a 
                  href="https://wa.me/212661634455" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={20} />
                  {t('contact.button.whatsapp')}
                </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Contact;