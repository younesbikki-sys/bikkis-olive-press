import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const { t, dir } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Capture form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const quantity = formData.get('quantity') as string;
    const address = formData.get('address') as string;

    // Construct WhatsApp message
    const message = `*New Order Request (Bikki's Olive Press)*\n\n` +
                    `*Name:* ${name}\n` +
                    `*Phone:* ${phone}\n` +
                    `*Quantity:* ${quantity} Liters\n` +
                    `*Address:* ${address}`;

    // WhatsApp API URL (International format without +)
    const whatsappUrl = `https://wa.me/905050983277?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show success state in modal
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative w-full max-w-md bg-surface rounded-xl shadow-2xl p-8 animate-in zoom-in-95 duration-200 border border-white/10 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
        <button 
          onClick={handleClose}
          className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} text-olive-dark/50 hover:text-olive-light transition-colors`}
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-olive-light/10 rounded-full flex items-center justify-center mx-auto mb-6 text-olive-light">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-serif text-gold mb-4">{t('modal.success')}</h3>
            <p className="text-olive-dark/60 mb-6 text-sm">We have opened WhatsApp to complete your order.</p>
            <button 
              onClick={handleClose}
              className="mt-4 bg-olive-light text-cream px-8 py-3 rounded-full font-bold hover:bg-olive transition-colors"
            >
              {t('modal.close')}
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-serif text-gold mb-2">{t('modal.title')}</h2>
            <p className="text-olive-dark/60 mb-8 text-sm">{t('modal.subtitle')}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-olive-dark mb-1">{t('modal.name')}</label>
                <input required name="name" type="text" className="w-full bg-cream/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-light text-olive-dark transition-colors placeholder-olive-dark/30" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-olive-dark mb-1">{t('modal.phone')}</label>
                <input required name="phone" type="tel" className="w-full bg-cream/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-light text-olive-dark transition-colors placeholder-olive-dark/30" />
              </div>

              <div>
                <label className="block text-sm font-bold text-olive-dark mb-1">{t('modal.quantity')}</label>
                <input required name="quantity" type="number" min="1" className="w-full bg-cream/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-light text-olive-dark transition-colors placeholder-olive-dark/30" />
              </div>

              <div>
                <label className="block text-sm font-bold text-olive-dark mb-1">{t('modal.address')}</label>
                <textarea required name="address" rows={3} className="w-full bg-cream/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-light text-olive-dark transition-colors resize-none placeholder-olive-dark/30"></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-olive-light text-cream py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-olive transition-colors mt-4 shadow-lg shadow-olive-light/20"
              >
                {t('modal.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default OrderModal;