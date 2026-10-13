import React, { useState } from 'react';
import { Bookmark, Moon, Sun, Type, Search, BookOpen, Languages, Menu, X, Info } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface TopNavbarProps {
  onOpenBookmarks: () => void;
  bookmarksCount: number;
  isDark: boolean;
  onToggleTheme: () => void;
  fontSize: 'normal' | 'large' | 'larger';
  onCycleFontSize: () => void;
  onOpenSearch: () => void;
  currentPage?: 'home' | 'stories' | 'story-detail';
  onNavigateHome?: () => void;
  onNavigateStories?: () => void;
  currentLang: Language;
  onSelectLanguage: (lang: Language) => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  onOpenBookmarks,
  bookmarksCount,
  isDark,
  onToggleTheme,
  fontSize,
  onCycleFontSize,
  onOpenSearch,
  currentPage = 'home',
  onNavigateHome,
  onNavigateStories,
  currentLang,
  onSelectLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const handleMobileNav = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full max-w-full overflow-x-hidden backdrop-blur-md transition-colors border-b ${
        isDark
          ? 'bg-[#1a1411]/92 border-[#85541e]/30 text-[#f5ebd7]'
          : 'bg-[#faf7f2]/92 border-[#c6923b]/25 text-[#2c221e]'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-1 sm:gap-2">
        {/* Brand Zone */}
        <button
          onClick={() => {
            onNavigateHome?.();
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-1.5 sm:gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6923b] rounded-md px-1 py-1 text-left cursor-pointer min-w-0 shrink"
        >
          <span className="text-[#c6923b] font-serif text-xl sm:text-2xl font-bold tracking-tight select-none shrink-0">
            ॐ
          </span>
          <div className="flex flex-col min-w-0">
            <span className="font-serif font-bold text-xs sm:text-base md:text-lg tracking-tight group-hover:text-[#c6923b] transition-colors leading-tight truncate max-w-[130px] xs:max-w-[190px] sm:max-w-none">
              {t.brandTitle}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-60 hidden md:inline truncate">
              {t.brandSubtitle}
            </span>
          </div>
        </button>

        {/* Desktop Navigation links (hidden on mobile, visible on lg+) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => {
              if (currentPage !== 'home') {
                onNavigateHome?.();
                setTimeout(() => {
                  document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`transition-colors whitespace-nowrap cursor-pointer ${
              currentPage === 'home' ? 'text-[#c6923b] font-semibold' : 'hover:text-[#c6923b]'
            }`}
          >
            {t.navArticles}
          </button>

          <button
            onClick={onNavigateStories}
            className={`transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'stories' ? 'text-[#c6923b] font-semibold' : 'hover:text-[#c6923b]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.navStories}</span>
          </button>

          <button
            onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#c6923b] transition-colors whitespace-nowrap cursor-pointer"
          >
            {t.navAbout}
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Language Switcher Pill */}
          <div className="flex items-center rounded-lg border border-[#c6923b]/35 p-0.5 bg-[#c6923b]/10 shrink-0">
            <Languages className="w-3 h-3 sm:w-3.5 sm:h-3.5 mx-0.5 sm:mx-1 text-[#c6923b] shrink-0" />
            {(['kn', 'en', 'hi'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onSelectLanguage(l)}
                className={`px-1 sm:px-1.5 py-0.5 text-[10px] sm:text-[11px] font-bold rounded transition-all cursor-pointer ${
                  currentLang === l
                    ? 'bg-[#c6923b] text-white shadow-2xs'
                    : isDark
                    ? 'text-[#dfd0be] hover:text-white'
                    : 'text-[#6b5847] hover:text-black'
                }`}
                title={l === 'kn' ? 'ಕನ್ನಡ' : l === 'en' ? 'English' : 'हिन्दी'}
              >
                <span className="hidden sm:inline">
                  {l === 'kn' ? 'ಕನ್ನಡ' : l === 'en' ? 'EN' : 'हिन्दी'}
                </span>
                <span className="sm:hidden font-mono uppercase text-[9px] font-bold">
                  {l}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Search (visible on sm+) */}
          <button
            onClick={onOpenSearch}
            aria-label={t.navSearchTitle}
            title={t.navSearchTitle}
            className={`hidden sm:flex p-1.5 sm:p-2 rounded-lg transition-colors items-center justify-center cursor-pointer ${
              isDark
                ? 'hover:bg-[#2e231e] text-[#e0cfbb]'
                : 'hover:bg-[#efe6d6] text-[#6b5847]'
            }`}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Bookmarks Counter Button */}
          <button
            onClick={onOpenBookmarks}
            aria-label={t.navBookmarksTitle}
            title={t.navBookmarksTitle}
            className={`relative p-1.5 sm:p-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer ${
              isDark
                ? 'hover:bg-[#2e231e] text-[#e0cfbb]'
                : 'hover:bg-[#efe6d6] text-[#6b5847]'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            {bookmarksCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#c6923b] text-[10px] font-bold text-white shadow-sm">
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Font Size Adjuster (Desktop / Tablet) */}
          <button
            onClick={onCycleFontSize}
            aria-label={t.navFontSizeTitle}
            title={t.navFontSizeTitle}
            className={`hidden sm:flex px-2 py-1 text-xs font-semibold rounded-lg transition-colors items-center gap-1 cursor-pointer ${
              isDark
                ? 'hover:bg-[#2e231e] text-[#e0cfbb] border border-[#85541e]/40'
                : 'hover:bg-[#efe6d6] text-[#6b5847] border border-[#c6923b]/30'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span className="text-[11px]">
              {fontSize === 'normal'
                ? currentLang === 'en' ? 'A' : currentLang === 'hi' ? 'अ' : 'ಅ'
                : fontSize === 'large'
                ? currentLang === 'en' ? 'A+' : currentLang === 'hi' ? 'अ+' : 'ಅ+'
                : currentLang === 'en' ? 'A++' : currentLang === 'hi' ? 'अ++' : 'ಅ++'}
            </span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? t.navThemeLight : t.navThemeDark}
            title={isDark ? t.navThemeLight : t.navThemeDark}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer ${
              isDark
                ? 'hover:bg-[#2e231e] text-[#d9aa52]'
                : 'hover:bg-[#efe6d6] text-[#8c571e]'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Menu Toggle (Visible on < lg) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-1.5 rounded-lg transition-colors flex items-center justify-center cursor-pointer ${
              isDark ? 'text-[#f5ebd7] hover:bg-[#2e231e]' : 'text-[#2c221e] hover:bg-[#efe6d6]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#c6923b]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Visible when open on mobile/tablet) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 py-4 space-y-3 transition-all animate-in fade-in slide-in-from-top-2 ${
            isDark
              ? 'bg-[#1e1510] border-[#85541e]/40 text-[#f5ebd7]'
              : 'bg-[#fcf8f2] border-[#c6923b]/30 text-[#2c221e]'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium">
            <button
              onClick={() =>
                handleMobileNav(() => {
                  if (currentPage !== 'home') onNavigateHome?.();
                  setTimeout(() => {
                    document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                })
              }
              className={`p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                currentPage === 'home'
                  ? 'border-[#c6923b] bg-[#c6923b]/15 text-[#c6923b] font-semibold'
                  : 'border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span>{t.navArticles}</span>
            </button>

            <button
              onClick={() => handleMobileNav(() => onNavigateStories?.())}
              className={`p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                currentPage === 'stories'
                  ? 'border-[#c6923b] bg-[#c6923b]/15 text-[#c6923b] font-semibold'
                  : 'border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#c6923b]" />
              <span>{t.navStories}</span>
            </button>

            <button
              onClick={() =>
                handleMobileNav(() => {
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                })
              }
              className="p-2.5 rounded-lg border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 text-left cursor-pointer flex items-center gap-2"
            >
              <Info className="w-3.5 h-3.5 text-[#c6923b]" />
              <span>{t.navAbout}</span>
            </button>
          </div>

          <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-2 text-xs">
            {/* Quick Search in mobile drawer */}
            <button
              onClick={() =>
                handleMobileNav(() => {
                  onOpenSearch();
                })
              }
              className="flex-1 py-2 px-3 rounded-lg border border-[#c6923b]/30 bg-[#c6923b]/10 flex items-center justify-center gap-1.5 cursor-pointer font-semibold"
            >
              <Search className="w-3.5 h-3.5 text-[#c6923b]" />
              <span>{t.navSearchTitle}</span>
            </button>

            {/* Font Size cycle in mobile drawer */}
            <button
              onClick={onCycleFontSize}
              className="flex-1 py-2 px-3 rounded-lg border border-[#c6923b]/30 bg-[#c6923b]/10 flex items-center justify-center gap-1.5 cursor-pointer font-semibold"
            >
              <Type className="w-3.5 h-3.5 text-[#c6923b]" />
              <span>
                {t.navFontSizeTitle}:{' '}
                {fontSize === 'normal'
                  ? currentLang === 'en' ? 'Default' : currentLang === 'hi' ? 'सामान्य' : 'ಸಾಮಾನ್ಯ'
                  : fontSize === 'large'
                  ? currentLang === 'en' ? 'Large' : currentLang === 'hi' ? 'बड़ा' : 'ದೊಡ್ಡದು'
                  : currentLang === 'en' ? 'Extra Large' : currentLang === 'hi' ? 'अति बड़ा' : 'ಅತಿದೊಡ್ಡದು'}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
