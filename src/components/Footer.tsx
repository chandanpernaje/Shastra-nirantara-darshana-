import React from 'react';
import { ArrowUp, BookOpen, Download } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  isDark: boolean;
  currentLang: Language;
  onOpenStories?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDark, currentLang, onOpenStories }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const t = TRANSLATIONS[currentLang];

  const siteTitle =
    currentLang === 'en'
      ? 'Shastra Nirantara Darshana'
      : currentLang === 'hi'
      ? 'शास्त्र निरन्तर दर्शन'
      : 'ಶಾಸ್ತ್ರ ನಿರಂತರ ದರ್ಶನ';

  const siteMission =
    currentLang === 'en'
      ? 'A sacred digital repository dedicated to Jagadguru Adi Shankaracharya’s Advaita philosophy, esoteric secrets of Srividya Soundarya Lahari, and scriptural truth against modern misinterpretations.'
      : currentLang === 'hi'
      ? 'जगद्गुरु आदि शंकराचार्य का अद्वैत दर्शन, श्रीविद्या सौन्दर्यलहरी के गूढ़ रहस्य और पौराणिक प्रक्षेपों के प्रामाणिक शास्त्रीय समाधान का पावन ज्ञाननिधि।'
      : 'ಆದಿ ಶಂಕರ ಭಗವತ್ಪಾದರ ಅದ್ವೈತ ಸಿದ್ಧಾಂತ, ಶ್ರೀವಿದ್ಯಾ ಸೌಂದರ್ಯಲಹರೀ ರಹಸ್ಯಗಳು, ಮತ್ತು ಪೌರಾಣಿಕ ಅಪಪ್ರಚಾರಗಳ ಶಾಸ್ತ್ರೀಯ ನಿರಸನ ಕುರಿತ ಜ್ಞಾನನಿಧಿ.';

  const downloadText =
    currentLang === 'en'
      ? 'Download Project ZIP (1.2 MB)'
      : currentLang === 'hi'
      ? 'परियोजना ज़िप डाउनलोड (1.2 MB)'
      : 'ಪ್ರಾಜೆಕ್ಟ್ ಜಿಪ್ ಡೌನ್‌ಲೋಡ್ (1.2 MB)';

  const copyrightText =
    currentLang === 'en'
      ? `© ${new Date().getFullYear()} Shastra Nirantara Darshana Collection. Sarve Bhavantu Sukhinah.`
      : currentLang === 'hi'
      ? `© ${new Date().getFullYear()} शास्त्र निरन्तर दर्शन संग्रह। सर्वे भवन्तु सुखिनः।`
      : `© ${new Date().getFullYear()} ಶಾಸ್ತ್ರ ನಿರಂತರ ದರ್ಶನ ಸಂಗ್ರಹ. ಸರ್ವೇ ಭವಂತು ಸುಖಿನಃ.`;

  const backToTopText =
    currentLang === 'en'
      ? 'Back to Top'
      : currentLang === 'hi'
      ? 'ऊपर जाएं'
      : 'ಮೇಲಕ್ಕೆ ಹೋಗಿ';

  return (
    <footer
      id="about-section"
      className={`border-t transition-colors mt-14 sm:mt-20 py-10 sm:py-12 text-center w-full max-w-full overflow-hidden ${
        isDark
          ? 'border-[#85541e]/40 bg-[#16100c] text-[#bdae9c]'
          : 'border-[#c6923b]/30 bg-[#f4ece0] text-[#5e4d3f]'
      }`}
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 space-y-6 w-full overflow-hidden">
        {/* Sacred Sanskrit OM Ornament */}
        <div className="ornament-divider mx-auto max-w-xs">
          <span className="text-[#c6923b] font-serif font-bold text-sm tracking-widest select-none">
            {t.invocationLead}
          </span>
        </div>

        {/* Site Identity & Mission Statement */}
        <div className="max-w-xl mx-auto space-y-2">
          <h3 className="font-serif text-lg font-bold text-[#c6923b]">
            {siteTitle}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed">
            {siteMission}
          </p>
        </div>

        {/* Primary Action Buttons (Stories & Download) */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {onOpenStories && (
            <button
              onClick={onOpenStories}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6923b]/15 text-[#9a6f23] dark:text-[#f0c375] hover:bg-[#c6923b] hover:text-white transition-all text-xs font-semibold border border-[#c6923b]/30 shadow-2xs cursor-pointer active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.navStories}</span>
            </button>
          )}

          <a
            href="/shastra-nirantara-darshana.zip"
            download="shastra-nirantara-darshana.zip"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6923b]/15 text-[#9a6f23] dark:text-[#f0c375] hover:bg-[#c6923b] hover:text-white transition-all text-xs font-semibold border border-[#c6923b]/30 shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloadText}</span>
          </a>
        </div>

        {/* Back to top & Copyright */}
        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{copyrightText}</p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer active:scale-95 ${
              isDark
                ? 'border-[#85541e]/40 hover:bg-[#261c17] text-[#e0cfbb]'
                : 'border-[#c6923b]/30 hover:bg-[#eae2d3] text-[#5a483a]'
            }`}
          >
            <span>{backToTopText}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
