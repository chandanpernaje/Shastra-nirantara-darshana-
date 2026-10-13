import React from 'react';
import { BookOpen } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroHeaderProps {
  isDark: boolean;
  currentLang: Language;
  onExploreClick: () => void;
  onStoriesClick?: () => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  isDark,
  currentLang,
  onExploreClick,
  onStoriesClick,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <header className="relative w-full max-w-full overflow-hidden border-b border-[#c6923b]/30">
      {/* Ambient background overlay with Shankaracharya artwork */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundImage: `url(/images/shankaracharya.jpg)` }}
        aria-hidden="true"
      />

      {/* Atmospheric gradient overlay */}
      <div
        className={`absolute inset-0 transition-colors pointer-events-none ${
          isDark
            ? 'bg-gradient-to-b from-[#17120e]/85 via-[#1a1411]/90 to-[#1a1411]'
            : 'bg-gradient-to-b from-[#f9f5ed]/80 via-[#faf7f2]/90 to-[#faf7f2]'
        }`}
      />

      <div className="relative mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 text-center w-full overflow-hidden">
        {/* Sacred Shankaracharya Portrait */}
        <div className="relative inline-block group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#c6923b] via-[#e2b96f] to-[#9a6f23] opacity-75 blur-sm group-hover:opacity-100 transition duration-500" />
          <img
            src="/images/shankaracharya.jpg"
            alt="Jagadguru Adi Shankaracharya"
            className="relative mx-auto h-28 w-28 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-full border-4 border-[#c6923b] object-cover object-top shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
            width="176"
            height="176"
            loading="eager"
          />
        </div>

        {/* Kicker label */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-6 sm:w-10 bg-[#c6923b]/60" />
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#c6923b] uppercase">
            {t.heroKicker}
          </p>
          <span className="h-px w-6 sm:w-10 bg-[#c6923b]/60" />
        </div>

        {/* Main Heading */}
        <h1
          className={`mt-3 text-2xl sm:text-4xl md:text-5xl font-bold font-serif leading-snug tracking-tight text-balance ${
            isDark ? 'text-[#faf3e3]' : 'text-[#251b14]'
          }`}
        >
          {t.heroTitle}
        </h1>

        {/* Secondary Subtitle */}
        <p
          className={`mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-balance ${
            isDark ? 'text-[#c7b7a5]' : 'text-[#625143]'
          }`}
        >
          {t.heroSubtitle}
        </p>

        {/* Metadata info indicators */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#8c6d48]">
          <span>{t.heroBadge1}</span>
          <span aria-hidden="true">·</span>
          <span>{t.heroBadge2}</span>
          <span aria-hidden="true">·</span>
          <span>{t.heroBadge3}</span>
        </div>

        {/* Quick CTA Actions */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#1a1411] bg-gradient-to-r from-[#d8a349] to-[#bf8c35] hover:from-[#e2b05b] hover:to-[#cd983f] transition-all shadow-md active:scale-95 touch-manipulation cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.heroExploreCta}</span>
          </button>

          {onStoriesClick && (
            <button
              onClick={onStoriesClick}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all border shadow-sm active:scale-95 touch-manipulation cursor-pointer ${
                isDark
                  ? 'border-[#85541e]/50 text-[#e6d8c5] hover:bg-[#2e231e]'
                  : 'border-[#c6923b]/40 text-[#4d3a2b] hover:bg-[#f3ede1]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#c6923b]" />
              <span>{t.navStories}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
