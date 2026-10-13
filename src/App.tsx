import React, { useState, useEffect, useMemo } from 'react';
import { ARTICLES, ArticleItem } from './data/articles';
import { STORIES } from './data/stories';
import { Language, TRANSLATIONS } from './data/translations';
import { TopNavbar } from './components/TopNavbar';
import { HeroHeader } from './components/HeroHeader';
import { ArticleCard } from './components/ArticleCard';
import { ArticleModal } from './components/ArticleModal';
import { BookmarksModal } from './components/BookmarksModal';
import { StoriesPage } from './components/StoriesPage';
import { StoryDetailPage } from './components/StoryDetailPage';
import { Footer } from './components/Footer';
import { getLocalizedArticle } from './data/articles';
import { Search, LayoutGrid, List, X, Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  // Language selection (persisted in localStorage, defaults to 'kn')
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('sn_lang');
    return saved === 'en' || saved === 'hi' || saved === 'kn' ? saved : 'kn';
  });

  // Theme & Reading preferences (Persisted in localStorage)
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('sn_theme') === 'dark';
  });
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>(() => {
    return (localStorage.getItem('sn_font_size') as 'normal' | 'large' | 'larger') || 'normal';
  });
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('sn_bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  // UI state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const t = TRANSLATIONS[currentLang];

  // Sync language
  useEffect(() => {
    localStorage.setItem('sn_lang', currentLang);
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Sync theme to localStorage and html tag
  useEffect(() => {
    localStorage.setItem('sn_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Sync font size
  useEffect(() => {
    localStorage.setItem('sn_font_size', fontSize);
  }, [fontSize]);

  // Sync bookmarks
  useEffect(() => {
    localStorage.setItem('sn_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // Navigation / Page state
  const [currentPage, setCurrentPage] = useState<'home' | 'stories' | 'story-detail'>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#story/')) return 'story-detail';
    if (hash.startsWith('#stories')) return 'stories';
    return 'home';
  });

  const [currentStoryId, setCurrentStoryId] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#story/')) {
      const id = hash.replace('#story/', '');
      return id || 'vamadeva-rishi-enlightenment';
    }
    return 'vamadeva-rishi-enlightenment';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#story/')) {
        const id = hash.replace('#story/', '');
        if (id) setCurrentStoryId(id);
        setCurrentPage('story-detail');
      } else if (hash.startsWith('#stories')) {
        setCurrentPage('stories');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToStories = () => {
    setCurrentPage('stories');
    window.location.hash = 'stories';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToStoryDetail = (storyId: string) => {
    setCurrentStoryId(storyId);
    setCurrentPage('story-detail');
    window.location.hash = `story/${storyId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Direct redirection to full-page story reader without tab or popup modal
   * User requirement: "sampurna kathe odhi click madidaga tab alli thorudu beda full page redirect agi alli barli aaga chennagiratte"
   */
  const handleSelectArticleStory = (article: ArticleItem) => {
    const targetStoryId = article.storyId || 'vamadeva-rishi-enlightenment';
    navigateToStoryDetail(targetStoryId);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleToggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((bId) => bId !== id));
      showToast(
        currentLang === 'en'
          ? 'Article removed from bookmarks'
          : currentLang === 'hi'
          ? 'लेख बुकमार्क से हटाया गया'
          : 'ಲೇಖನವನ್ನು ಪಟ್ಟಿಯಿಂದ ತೆಗೆಯಲಾಗಿದೆ'
      );
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
      showToast(
        currentLang === 'en'
          ? 'Article bookmarked ✓'
          : currentLang === 'hi'
          ? 'लेख सहेजा गया ✓'
          : 'ಲೇಖನವನ್ನು ಉಳಿಸಲಾಗಿದೆ ✓'
      );
    }
  };

  const handleShare = async (article: ArticleItem) => {
    const loc = getLocalizedArticle(article, currentLang);
    if (navigator.share) {
      try {
        await navigator.share({
          title: loc.title,
          text: `${loc.title} — ಶಾಸ್ತ್ರ ನಿರಂತರ ದರ್ಶನ`,
          url: window.location.href,
        });
        showToast(
          currentLang === 'en'
            ? 'Shared successfully!'
            : currentLang === 'hi'
            ? 'साझा किया गया!'
            : 'ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ!'
        );
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(`${loc.title}\n\n${loc.summary}\n\n${window.location.href}`);
      setCopiedId(article.id);
      showToast(
        currentLang === 'en'
          ? 'Article summary copied!'
          : currentLang === 'hi'
          ? 'लेख सारांश कॉपी किया गया!'
          : 'ಲೇಖನದ ವಿವರಣೆ ಕಾಪಿ ಮಾಡಲಾಗಿದೆ!'
      );
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      showToast(
        currentLang === 'en'
          ? 'Could not copy'
          : currentLang === 'hi'
          ? 'कॉपी नहीं हो सका'
          : 'ಕಾಪಿ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ'
      );
    }
  };

  const handleOpenArticle = (article: ArticleItem) => {
    setSelectedArticle(article);
    setIsArticleModalOpen(true);
  };

  const handleCycleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('larger');
    else setFontSize('normal');
  };

  // Filtered articles calculation with multilingual support
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesCategory =
        selectedCategory === 'all' || art.category === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const loc = getLocalizedArticle(art, currentLang);
      const matchesSearch =
        art.title.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        loc.title.toLowerCase().includes(q) ||
        loc.summary.toLowerCase().includes(q) ||
        art.categoryLabel.toLowerCase().includes(q) ||
        loc.categoryLabel.toLowerCase().includes(q) ||
        (art.scriptureRef && art.scriptureRef.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, currentLang]);

  const bookmarkedArticlesList = useMemo(() => {
    return ARTICLES.filter((a) => bookmarkedIds.includes(a.id));
  }, [bookmarkedIds]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: ARTICLES.length,
      ಸೌಂದರ್ಯಲಹರೀ: 0,
      ಸಾಮೋಪಾಸನೆ: 0,
      ಗರುಡಪುರಾಣ: 0,
      ಶಂಕರತತ್ತ್ವ: 0,
    };
    ARTICLES.forEach((a) => {
      if (counts[a.category] !== undefined) {
        counts[a.category]++;
      }
    });
    return counts;
  }, []);

  const categoryChips = useMemo(() => {
    if (currentLang === 'en') {
      return [
        { id: 'all', label: `All (${categoryCounts.all})` },
        { id: 'ಸೌಂದರ್ಯಲಹರೀ', label: `Soundarya Lahari (${categoryCounts['ಸೌಂದರ್ಯಲಹರೀ']})` },
        { id: 'ಗರುಡಪುರಾಣ', label: `Garuda Purana (${categoryCounts['ಗರುಡಪುರಾಣ']})` },
        { id: 'ಸಾಮೋಪಾಸನೆ', label: `Samopasana (${categoryCounts['ಸಾಮೋಪಾಸನೆ']})` },
        { id: 'ಶಂಕರತತ್ತ್ವ', label: `Shankara Vedanta (${categoryCounts['ಶಂಕರತತ್ತ್ವ']})` },
      ];
    }
    if (currentLang === 'hi') {
      return [
        { id: 'all', label: `सभी (${categoryCounts.all})` },
        { id: 'ಸೌಂದರ್ಯಲಹರೀ', label: `सौन्दर्यलहरी (${categoryCounts['ಸೌಂದರ್ಯಲಹರೀ']})` },
        { id: 'ಗರುಡಪುರಾಣ', label: `गरुड़पुराण (${categoryCounts['ಗರುಡಪುರಾಣ']})` },
        { id: 'ಸಾಮೋಪಾಸನೆ', label: `सामोपासना (${categoryCounts['ಸಾಮೋಪಾಸನೆ']})` },
        { id: 'ಶಂಕರತತ್ತ್ವ', label: `शंकरतत्त्व (${categoryCounts['ಶಂಕರತತ್ತ್ವ']})` },
      ];
    }
    return [
      { id: 'all', label: `ಎಲ್ಲಾ (${categoryCounts.all})` },
      { id: 'ಸೌಂದರ್ಯಲಹರೀ', label: `ಸೌಂದರ್ಯಲಹರೀ (${categoryCounts['ಸೌಂದರ್ಯಲಹರೀ']})` },
      { id: 'ಗರುಡಪುರಾಣ', label: `ಗರುಡಪುರಾಣ (${categoryCounts['ಗರುಡಪುರಾಣ']})` },
      { id: 'ಸಾಮೋಪಾಸನೆ', label: `ಸಾಮೋಪಾಸನೆ (${categoryCounts['ಸಾಮೋಪಾಸನೆ']})` },
      { id: 'ಶಂಕರತತ್ತ್ವ', label: `ಶಂಕರತತ್ತ್ವ (${categoryCounts['ಶಂಕರತತ್ತ್ವ']})` },
    ];
  }, [categoryCounts, currentLang]);

  // Text scaling class applied to root main container
  const fontSizeClass =
    fontSize === 'larger'
      ? 'text-lg [&_h1]:text-4xl sm:[&_h1]:text-6xl [&_h2]:text-2xl sm:[&_h2]:text-4xl [&_h3]:text-lg sm:[&_h3]:text-xl'
      : fontSize === 'large'
      ? 'text-base [&_h1]:text-3xl sm:[&_h1]:text-5xl [&_h2]:text-xl sm:[&_h2]:text-3xl [&_h3]:text-base sm:[&_h3]:text-lg'
      : '';

  const sectionArticlesTitle =
    currentLang === 'en'
      ? 'Published Critical Articles & Treatises'
      : currentLang === 'hi'
      ? 'प्रकाशित समीक्षा लेख एवं शोध'
      : 'ಪ್ರಕಟಿತ ವಿಮರ್ಶಾ ಲೇಖನಗಳು';

  const sectionArticlesSubtitle =
    currentLang === 'en'
      ? 'Soundarya Lahari, Vamadevya Samopasana, Garuda Purana interpolations, and authentic scriptural truth regarding Shankara Vedanta.'
      : currentLang === 'hi'
      ? 'सौन्दर्यलहरी, वामदेव्य सामोपासना, गरुड़पुराण मणिमान प्रक्षेप और शंकराचार्य पर लगाए गए आक्षेपों का शास्त्रीय सत्यशोधन।'
      : 'ಸೌಂದರ್ಯಲಹರೀ, ವಾಮದೇವ್ಯ ಸಾಮೋಪಾಸನೆ, ಗರುಡಪುರಾಣ ಮಣಿಮಾನ್ ಪ್ರಕ್ಷೇಪ ಮತ್ತು ಶಂಕರನಿಂದನೆಯ ಶಾಸ್ತ್ರೋಕ್ತ ಸತ್ಯಶೋಧನೆ.';

  const searchArticlesPlaceholder =
    currentLang === 'en'
      ? 'Search articles, shlokas, upasana...'
      : currentLang === 'hi'
      ? 'लेख, श्लोक, उपासना खोजें...'
      : 'ಲೇಖನಗಳು, ಶ್ಲೋಕ, ಉಪಾಸನೆ ಹುಡುಕಿ...';

  const emptyArticlesTitle =
    currentLang === 'en'
      ? 'No articles found'
      : currentLang === 'hi'
      ? 'कोई लेख नहीं मिला'
      : 'ಯಾವುದೇ ಲೇಖನ ಸಿಗಲಿಲ್ಲ';

  const emptyArticlesDesc =
    currentLang === 'en'
      ? 'No articles match your search keywords. Please try another query.'
      : currentLang === 'hi'
      ? 'आपकी खोज से मिलता कोई लेख नहीं मिला। कृपया अन्य शब्द से खोजें।'
      : 'ನೀವು ಹುಡುಕಿದ ಪದಕ್ಕೆ ಸರಿಹೊಂದುವ ಲೇಖನಗಳು ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಪದವನ್ನು ಬಳಸಿ ಹುಡುಕಿ.';

  const viewAllArticlesBtn =
    currentLang === 'en'
      ? 'Show all articles'
      : currentLang === 'hi'
      ? 'सभी लेख दिखाएं'
      : 'ಎಲ್ಲಾ ಲೇಖನಗಳನ್ನು ತೋರಿಸಿ';

  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#18120e] text-[#f2e7d5]' : 'bg-[#faf7f2] text-[#2c221e]'
      } ${fontSizeClass}`}
    >
      {/* Top Navbar */}
      <TopNavbar
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateStories={navigateToStories}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarksCount={bookmarkedIds.length}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        fontSize={fontSize}
        onCycleFontSize={handleCycleFontSize}
        currentLang={currentLang}
        onSelectLanguage={(lang) => setCurrentLang(lang)}
        onOpenSearch={() => {
          if (currentPage !== 'home') {
            navigateToHome();
            setTimeout(() => {
              const el = document.getElementById('search-input');
              el?.focus();
              el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
          } else {
            const el = document.getElementById('search-input');
            el?.focus();
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
      />

      {currentPage === 'story-detail' ? (
        /* Dedicated Full-Page Story Reader (No tabs, no popup modal) */
        <StoryDetailPage
          storyId={currentStoryId}
          isDark={isDark}
          fontSize={fontSize}
          currentLang={currentLang}
          onNavigateBackToStories={navigateToStories}
          onNavigateHome={navigateToHome}
          onSelectStory={navigateToStoryDetail}
        />
      ) : currentPage === 'stories' ? (
        /* Stories Collection View */
        <StoriesPage
          isDark={isDark}
          fontSize={fontSize}
          currentLang={currentLang}
          onNavigateHome={navigateToHome}
          onSelectStory={navigateToStoryDetail}
        />
      ) : (
        /* Home Articles View */
        <>
          {/* Hero Header with Shankaracharya circular artwork */}
          <HeroHeader
            isDark={isDark}
            currentLang={currentLang}
            onExploreClick={() => {
              const el = document.getElementById('articles-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onStoriesClick={navigateToStories}
          />

          {/* Main Content Area */}
          <main className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-14 w-full overflow-hidden">
            {/* Section 1: Published Articles */}
            <section id="articles-section" className="scroll-mt-20">
              {/* Top Divider */}
              <div className="ornament-divider mb-8">
                <span className="text-[#c6923b] text-base select-none">✦</span>
              </div>

              <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-3xl font-bold font-serif text-balance">
                  {sectionArticlesTitle}
                </h2>
                <p
                  className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-[#b8a694]' : 'text-[#625143]'
                  }`}
                >
                  {sectionArticlesSubtitle}
                </p>
              </div>

              {/* Search Bar & View Controls */}
              <div className="mb-6 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {/* Search input */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c6d48]" />
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={searchArticlesPlaceholder}
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

                  {/* View Mode Toggle (Grid vs List) */}
                  <div
                    className={`flex items-center self-end sm:self-auto p-1 rounded-lg border ${
                      isDark ? 'border-[#85541e]/30 bg-[#221a15]' : 'border-[#c6923b]/30 bg-[#f4ece0]'
                    }`}
                  >
                    <button
                      onClick={() => setViewMode('grid')}
                      title="Grid View"
                      aria-label="Grid View"
                      className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                        viewMode === 'grid'
                          ? 'bg-[#c6923b] text-white shadow-xs'
                          : 'text-[#8c6d48] hover:text-[#533f2d]'
                      }`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      title="List View"
                      aria-label="List View"
                      className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                        viewMode === 'list'
                          ? 'bg-[#c6923b] text-white shadow-xs'
                          : 'text-[#8c6d48] hover:text-[#533f2d]'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Category Filter Chips */}
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {categoryChips.map((cat) => {
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
              </div>

              {/* Active filter summary if searching */}
              {searchQuery && (
                <div className="mb-4 text-xs text-[#8c6d48] flex items-center justify-between">
                  <span>
                    "{searchQuery}": {filteredArticles.length} {currentLang === 'en' ? 'articles' : currentLang === 'hi' ? 'लेख' : 'ಲೇಖನಗಳು'}
                  </span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="underline hover:text-[#c6923b] cursor-pointer"
                  >
                    {currentLang === 'en' ? 'Clear filter' : currentLang === 'hi' ? 'फ़िल्टर हटाएं' : 'ಫಿಲ್ಟರ್ ತೆರವುಗೊಳಿಸಿ'}
                  </button>
                </div>
              )}

              {/* Articles Grid or List */}
              {filteredArticles.length === 0 ? (
                <div className="text-center py-16 px-4 space-y-4 rounded-2xl border border-dashed border-[#c6923b]/30">
                  <BookOpen className="w-12 h-12 mx-auto text-[#c6923b]/40" />
                  <h3 className="font-serif text-lg font-bold">{emptyArticlesTitle}</h3>
                  <p className="text-xs sm:text-sm text-[#8c6d48] max-w-sm mx-auto">
                    {emptyArticlesDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#c6923b] text-white shadow cursor-pointer hover:bg-[#b07e2c] transition-colors"
                  >
                    {viewAllArticlesBtn}
                  </button>
                </div>
              ) : viewMode === 'grid' ? (
                <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                  {filteredArticles.map((article) => (
                    <li key={article.id} className="h-full">
                      <ArticleCard
                        article={article}
                        viewMode="grid"
                        isDark={isDark}
                        currentLang={currentLang}
                        isBookmarked={bookmarkedIds.includes(article.id)}
                        onToggleBookmark={handleToggleBookmark}
                        onSelectArticle={handleOpenArticle}
                        onSelectArticleStory={handleSelectArticleStory}
                        onShare={handleShare}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col gap-4">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      viewMode="list"
                      isDark={isDark}
                      currentLang={currentLang}
                      isBookmarked={bookmarkedIds.includes(article.id)}
                      onToggleBookmark={handleToggleBookmark}
                      onSelectArticle={handleOpenArticle}
                      onSelectArticleStory={handleSelectArticleStory}
                      onShare={handleShare}
                    />
                  ))}
                </div>
              )}
            </section>
          </main>
        </>
      )}

      {/* Footer (Available on all pages) */}
      <Footer
        isDark={isDark}
        currentLang={currentLang}
        onOpenStories={navigateToStories}
      />

      {/* Article Preview / Reading Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={isArticleModalOpen}
        isDark={isDark}
        currentLang={currentLang}
        isBookmarked={selectedArticle ? bookmarkedIds.includes(selectedArticle.id) : false}
        onClose={() => {
          setIsArticleModalOpen(false);
          setSelectedArticle(null);
        }}
        onToggleBookmark={handleToggleBookmark}
        onShare={handleShare}
        copiedId={copiedId}
        onSelectArticleStory={handleSelectArticleStory}
      />

      {/* Bookmarks Drawer Modal */}
      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        isDark={isDark}
        currentLang={currentLang}
        bookmarkedArticles={bookmarkedArticlesList}
        onRemoveBookmark={handleToggleBookmark}
        onSelectArticle={handleOpenArticle}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#251e1a] text-[#f7eee2] text-xs font-medium shadow-2xl border border-[#c6923b]/50 animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-[#c6923b]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
