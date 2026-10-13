import React, { useState } from 'react';
import { DeityMediaItem, getLocalizedDeityMedia } from '../data/articles';
import { Language, TRANSLATIONS } from '../data/translations';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

interface DeityMediaSectionProps {
  mediaItems: DeityMediaItem[];
  isDark: boolean;
  currentLang: Language;
}

export const DeityMediaSection: React.FC<DeityMediaSectionProps> = ({
  mediaItems,
  isDark,
  currentLang,
}) => {
  const [selectedDeity, setSelectedDeity] = useState<string>('all');
  const t = TRANSLATIONS[currentLang];

  const filteredItems = selectedDeity === 'all'
    ? mediaItems
    : mediaItems.filter(item => item.deity === selectedDeity);

  const tabs = [
    {
      id: 'all',
      label: currentLang === 'en' ? `All (${mediaItems.length})` : currentLang === 'hi' ? `सभी (${mediaItems.length})` : `ಎಲ್ಲಾ (${mediaItems.length})`,
    },
    {
      id: 'ಗಣಪತಿ',
      label: currentLang === 'en' ? 'Sri Ganapati' : currentLang === 'hi' ? 'श्री गणपति' : 'ಶ್ರೀ ಗಣಪತಿ',
    },
    {
      id: 'ಶಿವ',
      label: currentLang === 'en' ? 'Paramashiva' : currentLang === 'hi' ? 'परमशिव' : 'ಪರಮಶಿವ',
    },
    {
      id: 'ದೇವಿ',
      label: currentLang === 'en' ? 'Sri Lalita' : currentLang === 'hi' ? 'श्री ललिता' : 'ಶ್ರೀ ಲಲಿತಾ',
    },
    {
      id: 'ಕೃಷ್ಣ',
      label: currentLang === 'en' ? 'Sri Krishna' : currentLang === 'hi' ? 'श्रीकृष्ण' : 'ಶ್ರೀಕೃಷ್ಣ',
    },
  ];

  const kickerText =
    currentLang === 'en'
      ? 'Upasana Vision'
      : currentLang === 'hi'
      ? 'उपासना दर्शन'
      : 'ಉಪಾಸನಾ ದರ್ಶನ';

  const sectionTitle =
    currentLang === 'en'
      ? 'Divine Deities & Sacred Discourses'
      : currentLang === 'hi'
      ? 'देवता चित्र एवं पावन प्रवचन'
      : 'ದೇವತಾ ಚಿತ್ರಗಳು ಹಾಗೂ ಪ್ರವಚನಗಳು';

  const sectionSubtitle =
    currentLang === 'en'
      ? 'Sacred spiritual forms and contemplative teachings of Sri Mahaganapati, Paramashiva, Divine Mother Sri Lalita Tripurasundari, and Lord Sri Krishna.'
      : currentLang === 'hi'
      ? 'श्री महागणपति, देवाधिदेव परमशिव, जगन्माता ललिता परमेश्वरी और भगवान श्रीकृष्ण के पावन स्वरूप और उपासना विचार।'
      : 'ಶ್ರೀ ಮಹಾಗಣಪತಿ, ಪರಮಶಿವ, ಜಗನ್ಮಾತೆ ಲಲಿತಾ ಪರಮೇಶ್ವರಿ ಹಾಗೂ ಶ್ರೀಕೃಷ್ಣ ಪರಮಾತ್ಮನ ಪಾವನ ಸ್ವರೂಪ ಮತ್ತು ಉಪಾಸನಾ ವಿಚಾರಗಳು.';

  const watchYouTubeLabel =
    currentLang === 'en'
      ? 'Watch on YouTube'
      : currentLang === 'hi'
      ? 'यूट्यूब पर देखें'
      : 'ಯೂಟ್ಯೂಬ್‌ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ';

  const discourseBadge =
    currentLang === 'en'
      ? 'Discourse'
      : currentLang === 'hi'
      ? 'प्रवचन'
      : 'ಪ್ರವಚನ ಶ್ರವಣ';

  return (
    <section id="deity-section" className="mt-14 sm:mt-20 scroll-mt-20">
      {/* Ornate Divider */}
      <div className="ornament-divider mb-8">
        <span className="text-[#c6923b] text-base select-none">✦</span>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#c6923b] uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{kickerText}</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold font-serif text-balance">
          {sectionTitle}
        </h2>
        <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#b8a694]' : 'text-[#625143]'}`}>
          {sectionSubtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-8">
        {tabs.map((tab) => {
          const isActive = selectedDeity === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedDeity(tab.id)}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? 'bg-[#c6923b] text-white shadow-sm'
                  : isDark
                  ? 'bg-[#291e18] text-[#c7b7a5] hover:bg-[#342720]'
                  : 'bg-[#f0e7d8] text-[#5c493a] hover:bg-[#e7dcce]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Media Grid */}
      <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => {
          const loc = getLocalizedDeityMedia(item, currentLang);
          return (
            <li key={item.id} className="h-full">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${loc.title} - ${watchYouTubeLabel}`}
                className={`group flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-200 shadow-sm hover:-translate-y-1 hover:border-[#c6923b] hover:shadow-lg ${
                  isDark
                    ? 'border-[#85541e]/30 bg-[#221a15]'
                    : 'border-[#c6923b]/25 bg-white'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#efe5d5]">
                  <img
                    src={item.image}
                    alt={loc.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Deity Tag */}
                  <span className="absolute top-2 left-2 rounded bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[10px] font-medium text-amber-200">
                    {loc.deityLabel}
                  </span>

                  {/* Play affordance overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#c6923b] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="flex flex-1 flex-col justify-between p-3 sm:p-4">
                  <div>
                    <h3
                      className={`text-xs sm:text-sm font-semibold line-clamp-2 font-serif transition-colors ${
                        isDark ? 'group-hover:text-[#e4be77]' : 'group-hover:text-[#9a6f23]'
                      }`}
                    >
                      {loc.title}
                    </h3>
                    <p
                      className={`mt-1 text-[11px] sm:text-xs line-clamp-2 ${
                        isDark ? 'text-[#a89582]' : 'text-[#705e4f]'
                      }`}
                    >
                      {loc.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-[#c6923b]">
                    <span className="font-medium flex items-center gap-1">
                      <Play className="w-3 h-3 fill-current" />
                      <span>{discourseBadge}</span>
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
