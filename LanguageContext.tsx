import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: Direction;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'hero.est': 'EST. 1985',
    'hero.tagline': 'Authentic Heritage',
    'hero.headline.1': 'Pure Liquid Gold',
    'hero.headline.2': 'From Our Grove',
    'hero.subheadline': 'Cold-pressed, single-origin olive oil from the heart of Tiznit, Morocco.',
    'hero.cta.shop': 'Shop Now',
    'hero.cta.story': 'Our Story',
    
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.order': 'Order Now',

    'home.feat1.title': '100% Organic',
    'home.feat1.desc': 'Certified organic farming with no pesticides or artificial fertilizers.',
    'home.feat2.title': 'Cold Pressed',
    'home.feat2.desc': 'Mechanically pressed below 27°C to preserve nutrients and flavor.',
    'home.feat3.title': 'Direct Delivery',
    'home.feat3.desc': 'From our heritage farm directly to your kitchen table.',
    'home.prev.title1': 'Taste the Difference',
    'home.prev.title2': "Nature's Gift",
    'home.prev.desc': 'Our premium extra virgin olive oil enhances every dish with a distinct, robust flavor profile unique to the Tiznit region.',
    'home.prev.btn': 'View Products',

    'about.since': 'Since 1985',
    'about.title': 'A Legacy of Quality',
    'about.subtitle': 'Cultivating the finest olives in the arid soils of Aglou for generations.',
    'about.facts.title': 'Quick Facts',
    'about.facts.founded': 'Founded',
    'about.facts.founded.val': '1985',
    'about.facts.loc': 'Location',
    'about.facts.loc.val': 'Aglou, Tiznit',
    'about.facts.dist': 'Distinction',
    'about.facts.dist.val': 'Single Estate',
    'about.quote': '"Olive oil is not just food, it is culture, history, and medicine wrapped in gold."',
    'about.sect1.title': 'Our Origins',
    'about.sect1.p1': 'It started with Grandfather Bikki in the mid-80s, who planted the first grove in the rocky soil of Aglou. He believed that the harsh climate would produce a more resilient olive and a more flavorful oil.',
    'about.sect1.p2': 'Today, we continue his tradition, harvesting by hand at the perfect moment of ripeness to ensure low acidity and high polyphenol content.',
    'about.img.cap': 'The original stone press used by the family in the late 1980s.',
    'about.sect2.title': 'Modern Methods',
    'about.sect2.p1': 'While we honor tradition, we embrace modernity where it counts. We have upgraded to a continuous cycle cold-press system that ensures maximum hygiene and minimal oxidation.',
    'about.sect2.p2': 'This allows us to bottle the freshness of the fruit within hours of harvesting.',
    'about.sig.name': 'Ahmed Bikki',
    'about.sig.role': 'Master Miller',

    'footer.desc': 'Premium Cold-Pressed Olive Oil from the heart of Tiznit, Morocco.',
    'footer.shop': 'Shop',
    'footer.shop.1': 'Extra Virgin',
    'footer.shop.2': 'Organic',
    'footer.shop.3': 'Gift Sets',
    'footer.shop.4': 'Wholesale',
    'footer.company': 'Company',
    'footer.company.1': 'About Us',
    'footer.company.2': 'Our Process',
    'footer.company.3': 'Contact',
    'footer.company.4': 'Visit Farm',
    'footer.contact.title': 'Contact',
    'footer.data.email': 'bikkipress@gmail.com',
    'footer.data.phone': '+212 661 634 455',
    'footer.data.address': 'Laaouina, Aglou, Tiznit, Morocco',
    'footer.copy': "Bikki's Olive Press. All rights reserved.",
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We would love to hear from you. Reach out for orders, visits, or just to say hello.',
    'contact.info.title': 'Contact Information',
    'contact.button.map': 'View on Google Maps',
    'contact.form.title': 'Chat with us',
    'contact.button.whatsapp': 'Open WhatsApp',

    'modal.success': 'Order Started!',
    'modal.close': 'Close',
    'modal.title': 'Place Order',
    'modal.subtitle': 'Fill in your details to generate a WhatsApp order message.',
    'modal.name': 'Full Name',
    'modal.phone': 'Phone Number',
    'modal.quantity': 'Quantity (Liters)',
    'modal.address': 'Delivery Address',
    'modal.submit': 'Send Order via WhatsApp',
  },
  ar: {
    'hero.est': 'تأسست ١٩٨٥',
    'hero.tagline': 'تراث أصيل',
    'hero.headline.1': 'ذهب سائل نقي',
    'hero.headline.2': 'من بساتيننا',
    'hero.subheadline': 'زيت زيتون معصور على البارد، أحادي المصدر من قلب تيزنيت، المغرب.',
    'hero.cta.shop': 'تسوق الآن',
    'hero.cta.story': 'قصتنا',
    
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.order': 'اطلب الآن',

    'home.feat1.title': 'عضوي ١٠٠٪',
    'home.feat1.desc': 'زراعة عضوية معتمدة خالية من المبيدات والأسمدة الصناعية.',
    'home.feat2.title': 'عصر بارد',
    'home.feat2.desc': 'معصور ميكانيكياً تحت ٢٧ درجة مئوية للحفاظ على العناصر الغذائية والنكهة.',
    'home.feat3.title': 'توصيل مباشر',
    'home.feat3.desc': 'من مزرعتنا العريقة مباشرة إلى مائدة مطبخك.',
    'home.prev.title1': 'تذوق الفرق',
    'home.prev.title2': 'هبة الطبيعة',
    'home.prev.desc': 'زيت الزيتون البكر الممتاز لدينا يضفي نكهة مميزة وقوية وفريدة لمنطقة تيزنيت على كل طبق.',
    'home.prev.btn': 'عرض المنتجات',

    'about.since': 'منذ ١٩٨٥',
    'about.title': 'إرث من الجودة',
    'about.subtitle': 'زراعة أجود أنواع الزيتون في تربة أكلو لأجيال.',
    'about.facts.title': 'حقائق سريعة',
    'about.facts.founded': 'تاريخ التأسيس',
    'about.facts.founded.val': '١٩٨٥',
    'about.facts.loc': 'الموقع',
    'about.facts.loc.val': 'أكلو، تيزنيت',
    'about.facts.dist': 'التميز',
    'about.facts.dist.val': 'مزرعة واحدة',
    'about.quote': '"زيت الزيتون ليس مجرد طعام، بل هو ثقافة وتاريخ ودواء مغلف بالذهب."',
    'about.sect1.title': 'أصولنا',
    'about.sect1.p1': 'بدأت القصة مع الجد بيكي في منتصف الثمانينيات، الذي زرع أول بستان في تربة أكلو الصخرية. كان يؤمن بأن المناخ القاسي سينتج زيتوناً أكثر صموداً وزيتاً ألذ نكهة.',
    'about.sect1.p2': 'اليوم، نواصل تقليده، ونحصد يدوياً في لحظة النضج المثالية لضمان حموضة منخفضة ومحتوى عالٍ من البوليفينول.',
    'about.img.cap': 'المعصرة الحجرية الأصلية التي استخدمتها العائلة في أواخر الثمانينيات.',
    'about.sect2.title': 'طرق حديثة',
    'about.sect2.p1': 'بينما نحترم التقاليد، نتبنى الحداثة حيثما كان ذلك مهماً. لقد طورنا نظام العصر البارد المستمر لضمان أقصى درجات النظافة وأقل قدر من الأكسدة.',
    'about.sect2.p2': 'هذا يسمح لنا بتعبئة نضارة الفاكهة في غضون ساعات من الحصاد.',
    'about.sig.name': 'أحمد بيكي',
    'about.sig.role': 'كبير المعاصر',

    'footer.desc': 'زيت زيتون ممتاز معصور على البارد من قلب تيزنيت، المغرب.',
    'footer.shop': 'المتجر',
    'footer.shop.1': 'بكر ممتاز',
    'footer.shop.2': 'عضوي',
    'footer.shop.3': 'مجموعات الهدايا',
    'footer.shop.4': 'الجملة',
    'footer.company': 'الشركة',
    'footer.company.1': 'من نحن',
    'footer.company.2': 'عمليتنا',
    'footer.company.3': 'اتصل بنا',
    'footer.company.4': 'زيارة المزرعة',
    'footer.contact.title': 'اتصل بنا',
    'footer.data.email': 'bikkipress@gmail.com',
    'footer.data.phone': '+212 661 634 455',
    'footer.data.address': 'لعوينة، أكلو، تيزنيت، المغرب',
    'footer.copy': 'معصرة زيتون بيكي. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',

    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نود أن نسمع منك. تواصل معنا للطلبات، الزيارات، أو فقط لإلقاء التحية.',
    'contact.info.title': 'معلومات الاتصال',
    'contact.button.map': 'عرض على خرائط جوجل',
    'contact.form.title': 'دردش معنا',
    'contact.button.whatsapp': 'فتح واتساب',

    'modal.success': 'بدأ الطلب!',
    'modal.close': 'إغلاق',
    'modal.title': 'إرسال طلب',
    'modal.subtitle': 'املأ بياناتك لإنشاء رسالة طلب عبر واتساب.',
    'modal.name': 'الاسم الكامل',
    'modal.phone': 'رقم الهاتف',
    'modal.quantity': 'الكمية (لتر)',
    'modal.address': 'عنوان التوصيل',
    'modal.submit': 'أرسل الطلب عبر واتساب',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    dir: language === 'ar' ? 'rtl' as Direction : 'ltr' as Direction
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};