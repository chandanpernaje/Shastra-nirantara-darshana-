import React, { useState, useMemo } from 'react';
import { STORIES, StoryItem, getLocalizedStory } from '../data/stories';
import { Language, TRANSLATIONS } from '../data/translations';
import { BookOpen, Search, ArrowLeft, Sparkles, X, ScrollText } from 'lucide-react';

interface StoriesPageProps {
  isDark: boolean;
  fontSize: 'normal' | 'large' | 'larger';
  currentLang: Language;
  onNavigateHome: () => void;
  onSelectStory: (storyId: string) => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({
  isDark,
  fontSize,
  currentLang,
  onNavigateHome,
  onSelectStory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const t = TRANSLATIONS[currentLang];

  const categories = useMemo(() => {
    if (currentLang === 'en') {
      return [
        { id: 'all', label: `All (${STORIES.length})` },
        { id: 'ಶಾಂಕರ ಲೀಲಾಮೃತ', label: 'Shankara Pastimes' },
        { id: 'ವೇದಾಂತ ತತ್ತ್ವ', label: 'Vedanta Wisdom' },
        { id: 'ಭಕ್ತಿ ಹಾಗೂ ಕಾರುಣ್ಯ', label: 'Bhakti & Grace' },
        { id: 'ಗುರುಪರಂಪರೆ', label: 'Guru Lineage' },
        { id: 'ಶಾಕ್ತ ತತ್ತ್ವ', label: 'Shakta Lore' },
        { id: 'ಉಪನಿಷತ್ ರಹಸ್ಯ', label: 'Upanishads' },
      ];
    }
    if (currentLang === 'hi') {
      return [
        { id: 'all', label: `सभी (${STORIES.length})` },
        { id: 'ಶಾಂಕರ ಲೀಲಾಮೃತ', label: 'शांकर लीला' },
        { id: 'ವೇದಾಂತ ತತ್ತ್ವ', label: 'वेदान्त तत्त्व' },
        { id: 'ಭಕ್ತಿ ಹಾಗೂ ಕಾರುಣ್ಯ', label: 'भक्ति एवं करुणा' },
        { id: 'ಗುರುಪರಂಪರೆ', label: 'गुरुपरम्परा' },
        { id: 'ಶಾಕ್ತ ತತ್ತ್ವ', label: 'शाक्त तत्त्व' },
        { id: 'ಉಪನಿಷತ್ ರಹಸ್ಯ', label: 'उपनिषद् रहस्य' },
      ];
    }
    return [
      { id: 'all', label: `ಎಲ್ಲಾ (${STORIES.length})` },
      { id: 'ಶಾಂಕರ ಲೀಲಾಮೃತ', label: 'ಶಾಂಕರ ಲೀಲೆ' },
      { id: 'ವೇದಾಂತ ತತ್ತ್ವ', label: 'ವೇದಾಂತ' },
      { id: 'ಭಕ್ತಿ ಹಾಗೂ ಕಾರುಣ್ಯ', label: 'ಭಕ್ತಿ' },
      { id: 'ಗುರುಪರಂಪರೆ', label: 'ಗುರುಪರಂಪರೆ' },
      { id: 'ಶಾಕ್ತ ತತ್ತ್ವ', label: 'ಶಾಕ್ತ ತತ್ತ್ವ' },
      { id: 'ಉಪನಿಷತ್ ರಹಸ್ಯ', label: 'ಉಪನಿಷತ್' },
    ];
  }, [currentLang]);

  const filteredStories = useMemo(() => {
    return STORIES.filter((story) => {
      const matchesCategory =
        selectedCategory === 'all' || story.category === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const loc = getLocalizedStory(story, currentLang);
      const matchesSearch =
        story.title.toLowerCase().includes(q) ||
        story.titleEn.toLowerCase().includes(q) ||
        loc.title.toLowerCase().includes(q) ||
        loc.summary.toLowerCase().includes(q) ||
        story.summary.toLowerCase().includes(q) ||
        story.category.toLowerCase().includes(q) ||
        (story.shloka && story.shloka.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, currentLang]);

  const handleOpenStory = (story: StoryItem) => {
    onSelectStory(story.id);
  };

  const heroKicker =
    currentLang === 'en'
      ? 'Sacred Shastra & Spiritual Stories Collection'
      : currentLang === 'hi'
      ? 'पावन शास्त्र एवं आध्यात्मिक कथामृत संग्रह'
      : 'ಪಾವನ ಶಾಸ್ತ್ರ ಕಥಾಮೃತ ಸಂಗ್ರಹ';

  const heroTitle =
    currentLang === 'en'
      ? 'Sacred Stories of Sanatana Shastras & Guru Parampara'
      : currentLang === 'hi'
      ? 'सनातन शास्त्र एवं गुरुपरम्परा की दिव्य कथाएं'
      : 'ಸನಾತನ ಶಾಸ್ತ್ರ ಹಾಗೂ ಗುರುಪರಂಪರೆಯ ಕಥೆಗಳು';

  const heroSubtitle =
    currentLang === 'en'
      ? 'Divine pastimes of Jagadguru Adi Shankaracharya, profound secrets of the Upanishads, and inspiring wisdom tales from the sacred lineage of Vedic Rishis.'
      : currentLang === 'hi'
      ? 'जगद्गुरु आदि शंकराचार्य की दिव्य लीलाएं, उपनिषदों के गूढ़ रहस्य और भारतीय ऋषियों की पावन परम्परा की प्रेरक अमृत कथाओं का संग्रह।'
      : 'ಆದಿ ಶಂಕರ ಭಗವತ್ಪಾದರ ದಿವ್ಯ ಲೀಲೆಗಳು, ಉಪನಿಷತ್ತುಗಳ ಗೂಢ ಸತ್ಯಗಳು ಹಾಗೂ ಭಾರತೀಯ ಋಷಿಪರಂಪರೆಯ ಸ್ಪೂರ್ತಿದಾಯಕ ಅಮೃತ ಕಥೆಗಳ ಸಂಗ್ರಹ.';

  const searchPlaceholder =
    currentLang === 'en'
      ? 'Search stories, shlokas, characters...'
      : currentLang === 'hi'
      ? 'कथा, श्लोक, पात्र खोजें...'
      : 'ಕಥೆ, ಶ್ಲೋಕ, ಪಾತ್ರ ಹುಡುಕಿ...';

  const availableCountText =
    currentLang === 'en'
      ? `Total ${filteredStories.length} stories available`
      : currentLang === 'hi'
      ? `कुल ${filteredStories.length} कथाएं उपलब्ध`
      : `ಒಟ್ಟು ${filteredStories.length} ಕಥೆಗಳು ಲಭ್ಯ`;

  const readStoryBtnText =
    currentLang === 'en'
      ? 'Read Full Story'
      : currentLang === 'hi'
      ? 'पूरी कथा पढ़ें'
      : 'ಸಂಪೂರ್ಣ ಕಥೆ ಓದಿ';

  const emptyTitle =
    currentLang === 'en'
      ? 'No stories found'
      : currentLang === 'hi'
      ? 'कोई कथा नहीं मिली'
      : 'ಯಾವುದೇ ಕಥೆ ಸಿಗಲಿಲ್ಲ';

  const emptyText =
    currentLang === 'en'
      ? 'No stories match your search keyword. Please try another term.'
      : currentLang === 'hi'
      ? 'आपकी खोज से मिलती कोई कथा नहीं मिली। कृपया अन्य शब्द से खोजें।'
      : 'ನೀವು ಹುಡುಕಿದ ಪದಕ್ಕೆ ಸರಿಹೊಂದುವ ಕಥೆಗಳು ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಪದದಿಂದ ಹುಡುಕಿ.';

  const viewAllBtnText =
    currentLang === 'en'
      ? 'View All Stories'
      : currentLang === 'hi'
      ? 'सभी कथाएं देखें'
      : 'ಎಲ್ಲಾ ಕಥೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ';

  return (
    <div className="py-6 sm:py-10 w-full max-w-full overflow-hidden">
      {/* Top Breadcrumb & Return to Home button */}
      <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#c6923b] hover:bg-[#c6923b]/10 border border-[#c6923b]/30 transition-all cursor-pointer active:scale-95 max-w-full"
        >
          <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{t.backToArticles}</span>
        </button>
      </div>

      {/* Stories Hero Section */}
      <section className="relative overflow-hidden mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 text-center pb-8 sm:pb-12 border-b border-[#c6923b]/25 w-full">
        <div className="ornament-divider mx-auto max-w-xs mb-3">
          <span className="text-[#c6923b] font-serif font-bold text-sm select-none">
            {t.invocationLead}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#c6923b]/15 text-[#9a6f23] dark:text-[#f0c375] border border-[#c6923b]/30 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{heroKicker}</span>
        </div>

        <h1
          className={`font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug text-balance ${
            isDark ? 'text-[#faf3e3]' : 'text-[#251b14]'
          }`}
        >
          {heroTitle}
        </h1>

        <p
          className={`mx-auto mt-3 max-w-2xl text-xs sm:text-base leading-relaxed ${
            isDark ? 'text-[#c7b7a5]' : 'text-[#625143]'
          }`}
        >
          {heroSubtitle}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#8c6d48]">
          <span>{currentLang === 'en' ? '6 Divine Stories' : currentLang === 'hi' ? '६ पावन कथाएं' : '೬ ದಿವ್ಯ ಕಥೆಗಳು'}</span>
          <span aria-hidden="true">·</span>
          <span>{currentLang === 'en' ? 'Advaita Vedanta Secrets' : currentLang === 'hi' ? 'अद्वैत वेदान्त रहस्य' : 'ಅದ್ವೈತ ವೇದಾಂತ ರಹಸ್ಯ'}</span>
          <span aria-hidden="true">·</span>
          <span>{currentLang === 'en' ? 'Scriptural References' : currentLang === 'hi' ? 'आकर ग्रन्थ प्रमाण' : 'ಆಕರ ಗ್ರಂಥ ಸಹಿತ'}</span>
        </div>
      </section>

      {/* Controls: Search & Category Filter */}
      <section className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 py-6 space-y-4 w-full overflow-hidden">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c6d48]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className={`w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                isDark
                  ? 'bg-[#221a15] border-[#85541e]/40 text-[#f5ebd7] placeholder-[#8c6d48] focus:border-[#c6923b] focus:ring-1 focus:ring-[#c6923b]'
                  : 'bg-white border-[#c6923b]/30 text-[#2c221e] placeholder-[#8c6d48] focus:border-[#c6923b] focus:ring-1 focus:ring-[#c6923b]'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8c6d48] hover:text-[#c6923b] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <span className="text-xs text-[#8c6d48] self-end sm:self-auto">
            {availableCountText}
          </span>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer active:scale-95 shrink-0 ${
                  isActive
                    ? 'bg-[#c6923b] text-white shadow-sm'
                    : isDark
                    ? 'bg-[#241a14] text-[#c7b7a5] hover:bg-[#2e231e]'
                    : 'bg-[#ede5d6] text-[#5c493a] hover:bg-[#e4dac8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Stories Grid */}
      <main className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 py-2 w-full overflow-hidden">
        {filteredStories.length === 0 ? (
          <div className="text-center py-16 px-4 space-y-4 rounded-2xl border border-dashed border-[#c6923b]/30">
            <BookOpen className="w-12 h-12 mx-auto text-[#c6923b]/40" />
            <h3 className="font-serif text-lg font-bold">{emptyTitle}</h3>
            <p className="text-xs sm:text-sm text-[#8c6d48] max-w-sm mx-auto">
              {emptyText}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#c6923b] text-white shadow cursor-pointer hover:bg-[#b07e2c] transition-colors"
            >
              {viewAllBtnText}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredStories.map((story) => {
              const loc = getLocalizedStory(story, currentLang);
              return (
                <article
                  key={story.id}
                  className={`group flex flex-col justify-between overflow-hidden rounded-xl border transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-lg ${
                    isDark
                      ? 'border-[#85541e]/30 bg-[#221a15] hover:border-[#c6923b]'
                      : 'border-[#c6923b]/25 bg-white hover:border-[#c6923b]'
                  }`}
                >
                  {/* Visual Thumbnail */}
                  <div
                    onClick={() => handleOpenStory(story)}
                    className="relative h-44 w-full overflow-hidden bg-[#ecdcc5] cursor-pointer"
                  >
                    <img
                      src={story.image}
                      alt={loc.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 rounded bg-black/60 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-semibold text-amber-200">
                      {loc.categoryLabel}
                    </span>
                    <span className="absolute bottom-2 right-2 text-[10px] font-medium text-white/90 bg-black/40 px-2 py-0.5 rounded">
                      {loc.readTime}
                    </span>
                  </div>

                  {/* Content Details */}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-[#8c6d48]">
                        <span>{loc.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate max-w-[160px]">{loc.sourceReference}</span>
                      </div>

                      <h3
                        onClick={() => handleOpenStory(story)}
                        className={`font-serif text-base sm:text-lg font-bold leading-snug cursor-pointer transition-colors ${
                          isDark
                            ? 'text-[#f5ebd7] group-hover:text-[#d8a349]'
                            : 'text-[#281d16] group-hover:text-[#9a6f23]'
                        }`}
                      >
                        {loc.title}
                      </h3>

                      <p
                        onClick={() => handleOpenStory(story)}
                        className={`text-xs sm:text-sm line-clamp-3 leading-relaxed cursor-pointer ${
                          isDark ? 'text-[#b8a694]' : 'text-[#5d4c3f]'
                        }`}
                      >
                        {loc.summary}
                      </p>

                      {story.shloka && (
                        <div
                          className={`p-2.5 rounded-lg border text-[11px] font-serif italic line-clamp-2 ${
                            isDark
                              ? 'bg-[#1a1411]/70 border-[#85541e]/30 text-[#e4c489]'
                              : 'bg-[#faf6ee] border-[#c6923b]/25 text-[#9a6f23]'
                          }`}
                        >
                          "{story.shloka}"
                        </div>
                      )}
                    </div>

                    {/* Actions Row */}
                    <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleOpenStory(story)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#c6923b] text-white hover:bg-[#b07e2c] transition-all shadow-xs active:scale-95 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{readStoryBtnText}</span>
                      </button>

                      <span className="text-[11px] text-[#8c6d48]">
                        {loc.keyLessons.length} {currentLang === 'en' ? 'lessons' : currentLang === 'hi' ? 'पाठ' : 'ಮುಖ್ಯಾಂಶಗಳು'}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
