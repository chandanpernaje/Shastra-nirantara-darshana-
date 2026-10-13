export type Language = 'kn' | 'en' | 'hi';

export interface UiTranslations {
  // Brand
  brandTitle: string;
  brandSubtitle: string;
  // Nav
  navArticles: string;
  navStories: string;
  navDeity: string;
  navInvocation: string;
  navAbout: string;
  navDownloadZip: string;
  navZipShort: string;
  navSearchTitle: string;
  navFontSizeTitle: string;
  navBookmarksTitle: string;
  navThemeLight: string;
  navThemeDark: string;
  // Hero
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge1: string;
  heroBadge2: string;
  heroBadge3: string;
  heroExploreCta: string;
  heroDeityCta: string;
  // Section 1
  sectionArticlesTitle: string;
  sectionArticlesSubtitle: string;
  searchPlaceholder: string;
  clearFilter: string;
  searchResultsText: string;
  noArticlesFound: string;
  noArticlesDesc: string;
  showAllArticles: string;
  // Category tabs
  catAll: string;
  catSaundaryaLahari: string;
  catGarudaPurana: string;
  catSamopasana: string;
  catShankaraTattva: string;
  // Article card
  readSummary: string;
  readStory: string;
  readDescription: string;
  savedToast: string;
  removedToast: string;
  copiedToast: string;
  copyFailedToast: string;
  shareTitle: string;
  bookmarkTitle: string;
  // Stories Page
  storiesOrnament: string;
  storiesHeroBadge: string;
  storiesHeroTitle: string;
  storiesHeroSubtitle: string;
  storiesBadge1: string;
  storiesBadge2: string;
  storiesBadge3: string;
  backToArticles: string;
  storiesSearchPlaceholder: string;
  totalStoriesAvailable: string;
  readFullStory: string;
  keyLessonsCount: string;
  noStoriesFound: string;
  noStoriesDesc: string;
  showAllStories: string;
  storyShlokaTitle: string;
  storyShlokaMeaning: string;
  storyContentSection: string;
  storyKeyLessonsTitle: string;
  storySourceScripture: string;
  closeBtn: string;
  listenStory: string;
  stopAudio: string;
  shareStory: string;
  // Deity Media Section
  deitySectionTitle: string;
  deitySectionSubtitle: string;
  watchAudioLecture: string;
  allDeitiesTab: string;
  // Invocation Banner
  invocationTitle: string;
  invocationSubtitle: string;
  audioPlay: string;
  audioPause: string;
  // Bookmarks Modal
  bookmarksHeading: string;
  noBookmarksYet: string;
  noBookmarksDesc: string;
  readExplanation: string;
  removeBookmark: string;
  // Footer
  footerTitle: string;
  footerDesc: string;
  footerStoriesBtn: string;
  footerDownloadBtn: string;
  footerBackToTop: string;
  footerCopyright: string;
}

export const TRANSLATIONS: Record<Language, UiTranslations> = {
  kn: {
    brandTitle: 'ಶಾಸ್ತ್ರ ನಿರಂತರ ದರ್ಶನ',
    brandSubtitle: 'Shastra Nirantara',
    navArticles: 'ವಿಮರ್ಶಾ ಲೇಖನಗಳು',
    navStories: 'ಕಥೆಗಳು (Stories)',
    navDeity: 'ದೇವತಾ ಮಾಧ್ಯಮ',
    navInvocation: 'ಮಂಗಲಾಚರಣೆ',
    navAbout: 'ಪರಿಚಯ',
    navDownloadZip: 'ZIP ಡೌನ್‌ಲೋಡ್',
    navZipShort: 'ZIP',
    navSearchTitle: 'ಲೇಖನಗಳನ್ನು ಹುಡುಕಿ',
    navFontSizeTitle: 'ಅಕ್ಷರ ಗಾತ್ರ ಬದಲಾಯಿಸಿ',
    navBookmarksTitle: 'ಉಳಿಸಿದ ಲೇಖನಗಳು',
    navThemeLight: 'ಬೆಳಕಿನ ಮೋಡ್',
    navThemeDark: 'ಕತ್ತಲೆಯ ಮೋಡ್',
    heroKicker: 'ಶಾಸ್ತ್ರ ವಿಮರ್ಶೆ',
    heroTitle: 'ಸೌಂದರ್ಯಲಹರೀ ವಿಮರ್ಶಾ ಸಂಗ್ರಹ',
    heroSubtitle: 'ಸೌಂದರ್ಯಲಹರೀ, ವಾಮದೇವ್ಯ ಸಾಮೋಪಾಸನೆ, ಗರುಡಪುರಾಣದ ಮಣಿಮಾನ್ ವಿವಾದ ಹಾಗೂ ಶಂಕರನಿಂದನೆಯ ಕುರಿತ ಲೇಖನಗಳ ಸಂಗ್ರಹ.',
    heroBadge1: '೧೦ ಸಂಶೋಧನಾತ್ಮಕ ಲೇಖನಗಳು',
    heroBadge2: '೬ ಪಾವನ ಶಾಸ್ತ್ರ ಕಥೆಗಳು',
    heroBadge3: 'ಅದ್ವೈತ ವೇದಾಂತ ಪರಂಪರೆ',
    heroExploreCta: 'ಲೇಖನಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    heroDeityCta: 'ದೇವತಾ ಮಾಧ್ಯಮ',
    sectionArticlesTitle: 'ಪ್ರಕಟಿತ ವಿಮರ್ಶಾ ಲೇಖನಗಳು',
    sectionArticlesSubtitle: 'ಸೌಂದರ್ಯಲಹರೀ, ವಾಮದೇವ್ಯ ಸಾಮೋಪಾಸನೆ, ಗರುಡಪುರಾಣ ಮಣಿಮಾನ್ ಪ್ರಕ್ಷೇಪ ಮತ್ತು ಶಂಕರನಿಂದನೆಯ ಶಾಸ್ತ್ರೋಕ್ತ ಸತ್ಯಶೋಧನೆ.',
    searchPlaceholder: 'ಲೇಖನಗಳು, ಶ್ಲೋಕ, ಉಪಾಸನೆ ಹುಡುಕಿ...',
    clearFilter: 'ಫಿಲ್ಟರ್ ತೆರವುಗೊಳಿಸಿ',
    searchResultsText: 'ಫಲಿತಾಂಶಗಳು: {count} ಲೇಖನಗಳು',
    noArticlesFound: 'ಯಾವುದೇ ಲೇಖನ ಸಿಗಲಿಲ್ಲ',
    noArticlesDesc: 'ನೀವು ಹುಡುಕಿದ ಪದಕ್ಕೆ ಸರಿಹೊಂದುವ ಲೇಖನಗಳು ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಪದವನ್ನು ಬಳಸಿ ಹುಡುಕಿ.',
    showAllArticles: 'ಎಲ್ಲಾ ಲೇಖನಗಳನ್ನು ತೋರಿಸಿ',
    catAll: 'ಎಲ್ಲಾ',
    catSaundaryaLahari: 'ಸೌಂದರ್ಯಲಹರೀ',
    catGarudaPurana: 'ಗರುಡಪುರಾಣ',
    catSamopasana: 'ಸಾಮೋಪಾಸನೆ',
    catShankaraTattva: 'ಶಂಕರತತ್ತ್ವ',
    readSummary: 'ಸಾರಾಂಶ',
    readStory: 'ಕಥೆಗಳು',
    readDescription: 'ವಿವರಣೆ ಓದಿ',
    savedToast: 'ಲೇಖನವನ್ನು ಉಳಿಸಲಾಗಿದೆ ✓',
    removedToast: 'ಲೇಖನವನ್ನು ಪಟ್ಟಿಯಿಂದ ತೆಗೆಯಲಾಗಿದೆ',
    copiedToast: 'ಮಾಹಿತಿ ಕಾಪಿ ಮಾಡಲಾಗಿದೆ!',
    copyFailedToast: 'ಕಾಪಿ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ',
    shareTitle: 'ಹಂಚಿಕೊಳ್ಳಿ',
    bookmarkTitle: 'ಉಳಿಸಿ',
    storiesOrnament: '॥ ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ ॥',
    storiesHeroBadge: 'ಪಾವನ ಶಾಸ್ತ್ರ ಕಥಾಮೃತ ಸಂಗ್ರಹ',
    storiesHeroTitle: 'ಸನಾತನ ಶಾಸ್ತ್ರ ಹಾಗೂ ಗುರುಪರಂಪರೆಯ ಕಥೆಗಳು',
    storiesHeroSubtitle: 'ಆದಿ ಶಂಕರ ಭಗವತ್ಪಾದರ ದಿವ್ಯ ಲೀಲೆಗಳು, ಉಪನಿಷತ್ತುಗಳ ಗೂಢ ಸತ್ಯಗಳು ಹಾಗೂ ಭಾರತೀಯ ಋಷಿಪರಂಪರೆಯ ಸ್ಪೂರ್ತಿದಾಯಕ ಅಮೃತ ಕಥೆಗಳ ಸಂಗ್ರಹ.',
    storiesBadge1: '೬ ದಿವ್ಯ ಕಥೆಗಳು',
    storiesBadge2: 'ಅದ್ವೈತ ವೇದಾಂತ ರಹಸ್ಯ',
    storiesBadge3: 'ಆಕರ ಗ್ರಂಥ ಸಹಿತ',
    backToArticles: '← ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ (ವಿಮರ್ಶಾ ಲೇಖನಗಳು)',
    storiesSearchPlaceholder: 'ಕಥೆ, ಶ್ಲೋಕ, ಪಾತ್ರ ಹುಡುಕಿ...',
    totalStoriesAvailable: 'ಒಟ್ಟು {count} ಕಥೆಗಳು ಲಭ್ಯ',
    readFullStory: 'ಸಂಪೂರ್ಣ ಕಥೆ ಓದಿ',
    keyLessonsCount: '{count} ಮುಖ್ಯಾಂಶಗಳು',
    noStoriesFound: 'ಯಾವುದೇ ಕಥೆ ಸಿಗಲಿಲ್ಲ',
    noStoriesDesc: 'ನೀವು ಹುಡುಕಿದ ಪದಕ್ಕೆ ಸರಿಹೊಂದುವ ಕಥೆಗಳು ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಪದದಿಂದ ಹುಡುಕಿ.',
    showAllStories: 'ಎಲ್ಲಾ ಕಥೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    storyShlokaTitle: 'ಶಾಸ್ತ್ರ ಶ್ಲೋಕ / ಮಂತ್ರ',
    storyShlokaMeaning: 'ಅರ್ಥ',
    storyContentSection: 'ಪವಿತ್ರ ಕಥಾ ಭಾಗ',
    storyKeyLessonsTitle: 'ಕಥೆಯಿಂದ ಕಲಿಯಬಹುದಾದ ಜೀವನ ಪಾಠಗಳು (ತತ್ತ್ವಾರ್ಥ)',
    storySourceScripture: 'ಶಾಸ್ತ್ರೀಯ ಆಕರ ಗ್ರಂಥ',
    closeBtn: 'ಮುಚ್ಚಿ',
    listenStory: 'ಕಥೆ ಕೇಳಿ (Read Aloud)',
    stopAudio: 'ಧ್ವನಿ ನಿಲ್ಲಿಸಿ',
    shareStory: 'ಕಥೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ',
    deitySectionTitle: 'ದೇವತಾ ಮಾಧ್ಯಮ ಮತ್ತು ಉಪಾಸನೆ',
    deitySectionSubtitle: 'ಗಣಪತಿ, ಪರಮಶಿವ, ಶ್ರೀ ಲಲಿತಾ ಪರಮೇಶ್ವರಿ ಹಾಗೂ ಯೋಗೇಶ್ವರ ಶ್ರೀಕೃಷ್ಣನ ದಿವ್ಯೋಪಾಸನೆ, ಶ್ಲೋಕಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಉಪನ್ಯಾಸಗಳ ಪವಿತ್ರ ಸಂಗ್ರಹ.',
    watchAudioLecture: 'ಉಪನ್ಯಾಸ ಆಲಿಸಿ',
    allDeitiesTab: 'ಎಲ್ಲಾ ದೇವತೆಗಳು',
    invocationTitle: 'ಮಂಗಲಾಚರಣೆ ಮತ್ತು ಪ್ರಾರ್ಥನಾ ಶ್ಲೋಕಗಳು',
    invocationSubtitle: 'ಆದಿ ಶಂಕರ ಭಗವತ್ಪಾದರ ದಿವ್ಯ ಸ್ತುತಿಗಳು ಮತ್ತು ಸೌಂದರ್ಯಲಹರಿಯ ಮಂಗಳ ಶ್ಲೋಕಗಳು.',
    audioPlay: 'ಮಂಗಲಾಚರಣೆ ಶಂಖನಾದ ಆಲಿಸಿ',
    audioPause: 'ನಿಲ್ಲಿಸಿ',
    bookmarksHeading: 'ಉಳಿಸಿದ ಲೇಖನಗಳು',
    noBookmarksYet: 'ಇನ್ನೂ ಯಾವುದೇ ಲೇಖನವನ್ನು ಉಳಿಸಿಲ್ಲ.',
    noBookmarksDesc: 'ಯಾವುದೇ ಲೇಖನದ ಮೇಲಿರುವ ಬುಕ್‌ಮಾರ್ಕ್ ಚಿಹ್ನೆಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ನಂತರ ಓದಲು ಇಲ್ಲಿ ಸಂಗ್ರಹಿಸಬಹುದು.',
    readExplanation: 'ವಿವರಣೆ ಓದಿ',
    removeBookmark: 'ತೆಗೆದುಹಾಕಿ',
    footerTitle: 'ಶಾಸ್ತ್ರ ನಿರಂತರ ದರ್ಶನ',
    footerDesc: 'ಆದಿ ಶಂಕರ ಭಗವತ್ಪಾದರ ಅದ್ವೈತ ಸಿದ್ಧಾಂತ, ಶ್ರೀವಿದ್ಯಾ ಸೌಂದರ್ಯಲಹರೀ ರಹಸ್ಯಗಳು, ಮತ್ತು ಪೌರಾಣಿಕ ಅಪಪ್ರಚಾರಗಳ ಶಾಸ್ತ್ರೀಯ ನಿರಸನ ಕುರಿತ ಜ್ಞಾನನಿಧಿ.',
    footerStoriesBtn: 'ಶಾಸ್ತ್ರ ಕಥೆಗಳು (Stories)',
    footerDownloadBtn: 'ಪ್ರಾಜೆಕ್ಟ್ ಜಿಪ್ ಡೌನ್‌ಲೋಡ್ (1.2 MB)',
    footerBackToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ',
    footerCopyright: 'ಶಾಸ್ತ್ರ ನಿರಂತರ ದರ್ಶನ ಸಂಗ್ರಹ. ಸರ್ವೇ ಭವಂತು ಸುಖಿನಃ.'
  },
  en: {
    brandTitle: 'Shastra Nirantara Darshana',
    brandSubtitle: 'Eternal Scriptural Vision',
    navArticles: 'Critical Articles',
    navStories: 'Stories',
    navDeity: 'Deity Media',
    navInvocation: 'Invocation',
    navAbout: 'About',
    navDownloadZip: 'Download ZIP',
    navZipShort: 'ZIP',
    navSearchTitle: 'Search articles',
    navFontSizeTitle: 'Adjust font size',
    navBookmarksTitle: 'Saved Articles',
    navThemeLight: 'Light Mode',
    navThemeDark: 'Dark Mode',
    heroKicker: 'SCRIPTURAL ANALYSIS',
    heroTitle: 'Saundarya Lahari Critical Compendium',
    heroSubtitle: 'A scholarly compendium on Saundarya Lahari, Vamadevya Samopasana, Garuda Purana interpolations, and defence of Adi Shankaracharya.',
    heroBadge1: '10 Research Articles',
    heroBadge2: '6 Sacred Shastra Stories',
    heroBadge3: 'Advaita Vedanta Tradition',
    heroExploreCta: 'Explore Articles',
    heroDeityCta: 'Deity Media',
    sectionArticlesTitle: 'Published Research Articles',
    sectionArticlesSubtitle: 'Rigorous scriptural truth-seeking on Saundarya Lahari, Vamadevya Samopasana, Garuda Purana Maniman interpolation, and refutation of anti-Shankara claims.',
    searchPlaceholder: 'Search articles, verses, upasana...',
    clearFilter: 'Clear filter',
    searchResultsText: 'Results: {count} articles',
    noArticlesFound: 'No articles found',
    noArticlesDesc: 'No articles matched your search query. Please try searching with a different term.',
    showAllArticles: 'Show all articles',
    catAll: 'All',
    catSaundaryaLahari: 'Saundarya Lahari',
    catGarudaPurana: 'Garuda Purana',
    catSamopasana: 'Samopasana',
    catShankaraTattva: 'Shankara Tattva',
    readSummary: 'Summary',
    readStory: 'Stories',
    readDescription: 'Read Details',
    savedToast: 'Article saved ✓',
    removedToast: 'Article removed from saved list',
    copiedToast: 'Copied to clipboard!',
    copyFailedToast: 'Could not copy to clipboard',
    shareTitle: 'Share',
    bookmarkTitle: 'Bookmark',
    storiesOrnament: '॥ Shri Gurubhyo Namah ॥',
    storiesHeroBadge: 'Sacred Scriptural Stories Collection',
    storiesHeroTitle: 'Stories of Sanatana Dharma & Guru Tradition',
    storiesHeroSubtitle: 'Inspiring divine stories of Jagadguru Adi Shankaracharya, Vedic Upanishadic revelations, and timeless philosophical insights.',
    storiesBadge1: '6 Divine Stories',
    storiesBadge2: 'Advaita Vedanta Secrets',
    storiesBadge3: 'With Scriptural References',
    backToArticles: '← Back to Articles',
    storiesSearchPlaceholder: 'Search story, shloka, character...',
    totalStoriesAvailable: 'Total {count} stories available',
    readFullStory: 'Read Full Story',
    keyLessonsCount: '{count} Key Lessons',
    noStoriesFound: 'No stories found',
    noStoriesDesc: 'No stories match your search query. Please try searching with another keyword.',
    showAllStories: 'View all stories',
    storyShlokaTitle: 'Scriptural Shloka / Mantra',
    storyShlokaMeaning: 'Meaning',
    storyContentSection: 'Sacred Narrative',
    storyKeyLessonsTitle: 'Core Spiritual & Life Lessons (Tattvartha)',
    storySourceScripture: 'Scriptural Source Citation',
    closeBtn: 'Close',
    listenStory: 'Listen (Read Aloud)',
    stopAudio: 'Stop Audio',
    shareStory: 'Share Story',
    deitySectionTitle: 'Deity Media & Sacred Upasana',
    deitySectionSubtitle: 'Sacred discourses, verses, and meditative insights on Lord Ganesha, Shiva, Lalita Tripurasundari, and Yogeshwara Krishna.',
    watchAudioLecture: 'Listen to Discourse',
    allDeitiesTab: 'All Deities',
    invocationTitle: 'Mangalacharana & Sacred Invocations',
    invocationSubtitle: 'Revered hymns to Adi Shankaracharya and the auspicious opening verses of Saundarya Lahari.',
    audioPlay: 'Play Shankha Naada Invocation',
    audioPause: 'Pause',
    bookmarksHeading: 'Saved Articles',
    noBookmarksYet: 'No articles saved yet.',
    noBookmarksDesc: 'Click the bookmark icon on any article card to save it for reading later.',
    readExplanation: 'Read Details',
    removeBookmark: 'Remove',
    footerTitle: 'Shastra Nirantara Darshana',
    footerDesc: 'A treasure of knowledge defending Advaita Vedanta, unveiling Sri Vidya Saundarya Lahari secrets, and refuting anti-Shankara interpolations.',
    footerStoriesBtn: 'Scriptural Stories',
    footerDownloadBtn: 'Download Project ZIP (1.2 MB)',
    footerBackToTop: 'Back to Top',
    footerCopyright: 'Shastra Nirantara Darshana Collection. Sarve Bhavantu Sukhinah.'
  },
  hi: {
    brandTitle: 'शास्त्र निरंतर दर्शन',
    brandSubtitle: 'शाश्वत शास्त्रीय दृष्टि',
    navArticles: 'समीक्षा लेख',
    navStories: 'कथाएं (Stories)',
    navDeity: 'देवता मीडिया',
    navInvocation: 'मंगलाचरण',
    navAbout: 'परिचय',
    navDownloadZip: 'ज़िप डाउनलोड',
    navZipShort: 'ज़िप',
    navSearchTitle: 'लेख खोजें',
    navFontSizeTitle: 'अक्षर आकार बदलें',
    navBookmarksTitle: 'सहेजे गए लेख',
    navThemeLight: 'प्रकाश मोड',
    navThemeDark: 'अंधकार मोड',
    heroKicker: 'शास्त्र समीक्षा',
    heroTitle: 'सौंदर्यलहरी समीक्षा संग्रह',
    heroSubtitle: 'सौंदर्यलहरी, वामदेव्य सामोपासना, गरुड़ पुराण के मणिमान् विवाद तथा शंकर निंदा के शास्त्रीय निराकरण पर शोध लेखों का संग्रह।',
    heroBadge1: '१० अनुसंधानात्मक लेख',
    heroBadge2: '६ पावन शास्त्र कथाएं',
    heroBadge3: 'अद्वैत वेदांत परंपरा',
    heroExploreCta: 'लेख देखें',
    heroDeityCta: 'देवता मीडिया',
    sectionArticlesTitle: 'प्रकाशित समीक्षा लेख',
    sectionArticlesSubtitle: 'सौंदर्यलहरी, वामदेव्य सामोपासना, गरुड़ पुराण मणिमान् प्रक्षेप तथा शंकर निंदा का शास्त्रीय सत्यशोधन।',
    searchPlaceholder: 'लेख, श्लोक, उपासना खोजें...',
    clearFilter: 'फ़िल्टर हटाएं',
    searchResultsText: 'परिणाम: {count} लेख',
    noArticlesFound: 'कोई लेख नहीं मिला',
    noArticlesDesc: 'आपके खोजे गए शब्द से कोई लेख मेल नहीं खाता। कृपया किसी अन्य शब्द से खोजें।',
    showAllArticles: 'सभी लेख दिखाएं',
    catAll: 'सभी',
    catSaundaryaLahari: 'सौंदर्यलहरी',
    catGarudaPurana: 'गरुड़ पुराण',
    catSamopasana: 'सामोपासना',
    catShankaraTattva: 'शंकर तत्त्व',
    readSummary: 'सारांश',
    readStory: 'कथाएं',
    readDescription: 'विवरण पढ़ें',
    savedToast: 'लेख सहेजा गया ✓',
    removedToast: 'लेख सूची से हटाया गया',
    copiedToast: 'कॉपी किया गया!',
    copyFailedToast: 'कॉपी करने में विफल',
    shareTitle: 'साझा करें',
    bookmarkTitle: 'सहेजें',
    storiesOrnament: '॥ श्री गुरुभ्यो नमः ॥',
    storiesHeroBadge: 'पावन शास्त्र कथामृत संग्रह',
    storiesHeroTitle: 'सनातन शास्त्र और गुरुपरंपरा की प्रेरक कथाएं',
    storiesHeroSubtitle: 'आदि शंकर भगवत्पाद की दिव्य लीलाएं, उपनिषदों के गूढ़ सत्य और भारतीय ऋषिपरंपरा की प्रेरणादायक अमृत कथाएं।',
    storiesBadge1: '६ दिव्य कथाएं',
    storiesBadge2: 'अद्वैत वेदांत रहस्य',
    storiesBadge3: 'मूल शास्त्रों के प्रमाण सहित',
    backToArticles: '← मुख्य पृष्ठ पर वापस जाएं (समीक्षा लेख)',
    storiesSearchPlaceholder: 'कथा, श्लोक, पात्र खोजें...',
    totalStoriesAvailable: 'कुल {count} कथाएं उपलब्ध',
    readFullStory: 'संपूर्ण कथा पढ़ें',
    keyLessonsCount: '{count} मुख्य बिंदु',
    noStoriesFound: 'कोई कथा नहीं मिली',
    noStoriesDesc: 'आपके द्वारा खोजे गए शब्द से कोई कथा नहीं मिली। कृपया अन्य शब्द का प्रयास करें।',
    showAllStories: 'सभी कथाएं देखें',
    storyShlokaTitle: 'शास्त्रीय श्लोक / मंत्र',
    storyShlokaMeaning: 'अर्थ',
    storyContentSection: 'पवित्र कथा भाग',
    storyKeyLessonsTitle: 'कथा से जीवन-पाठ (तत्त्वार्थ)',
    storySourceScripture: 'शास्त्रीय संदर्भ ग्रंथ',
    closeBtn: 'बंद करें',
    listenStory: 'कथा सुनें (बोलकर सुनाएं)',
    stopAudio: 'आवाज रोकें',
    shareStory: 'कथा साझा करें',
    deitySectionTitle: 'देवता मीडिया और उपासना',
    deitySectionSubtitle: 'भगवान गणेश, परमशिव, श्री ललिता परमेश्वरी और योगेश्वर श्रीकृष्ण की दिव्य उपासना, श्लोक और आध्यात्मिक प्रवचन।',
    watchAudioLecture: 'प्रवचन सुनें',
    allDeitiesTab: 'सभी देवता',
    invocationTitle: 'मंगलाचरण और प्रार्थना श्लोक',
    invocationSubtitle: 'आदि शंकर भगवत्पाद की दिव्य स्तुति और सौंदर्यलहरी के मंगल श्लोक।',
    audioPlay: 'शंखनाद मंगलाचरण सुनें',
    audioPause: 'रोकें',
    bookmarksHeading: 'सहेजे गए लेख',
    noBookmarksYet: 'अभी कोई लेख सहेजा नहीं गया है।',
    noBookmarksDesc: 'किसी भी लेख पर बुकमार्क चिह्न दबाकर उसे बाद में पढ़ने के लिए सहेजें।',
    readExplanation: 'विवरण पढ़ें',
    removeBookmark: 'हटाएं',
    footerTitle: 'शास्त्र निरंतर दर्शन',
    footerDesc: 'आदि शंकर भगवत्पाद के अद्वैत सिद्धांत, श्रीविद्या सौंदर्यलहरी के रहस्यों और पौराणिक अपप्रचारों के शास्त्रीय निराकरण का ज्ञाननिधि।',
    footerStoriesBtn: 'शास्त्र कथाएं (Stories)',
    footerDownloadBtn: 'प्रोजेक्ट ज़िप डाउनलोड (1.2 MB)',
    footerBackToTop: 'ऊपर जाएं',
    footerCopyright: 'शास्त्र निरंतर दर्शन संग्रह। सर्वे भवन्तु सुखिनः।'
  }
};
