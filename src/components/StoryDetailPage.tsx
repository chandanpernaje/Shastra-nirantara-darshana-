import React, { useState, useEffect } from 'react';
import { STORIES, StoryItem, getLocalizedStory } from '../data/stories';
import { Language, TRANSLATIONS } from '../data/translations';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  ScrollText,
  Volume2,
  VolumeX,
  Share2,
  Check,
  Home,
  Bookmark,
  ChevronRight,
} from 'lucide-react';

interface StoryDetailPageProps {
  storyId: string;
  isDark: boolean;
  fontSize: 'normal' | 'large' | 'larger';
  currentLang: Language;
  onNavigateBackToStories: () => void;
  onNavigateHome: () => void;
  onSelectStory: (id: string) => void;
}

export const StoryDetailPage: React.FC<StoryDetailPageProps> = ({
  storyId,
  isDark,
  fontSize,
  currentLang,
  onNavigateBackToStories,
  onNavigateHome,
  onSelectStory,
}) => {
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const t = TRANSLATIONS[currentLang];

  // Find story or default to first
  const storyIndex = STORIES.findIndex((s) => s.id === storyId);
  const story: StoryItem = storyIndex !== -1 ? STORIES[storyIndex] : STORIES[0];
  const loc = getLocalizedStory(story, currentLang);

  const prevStory = storyIndex > 0 ? STORIES[storyIndex - 1] : null;
  const nextStory = storyIndex < STORIES.length - 1 ? STORIES[storyIndex + 1] : null;

  // Cleanup speech synthesis on unmount or story change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [storyId]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: loc.title,
          text: `${loc.title} — ಶಾಸ್ತ್ರ ನಿರಂತರ ದರ್ಶನ`,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(`${loc.title}\n\n${loc.summary}\n\n${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignored
    }
  };

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      const fullText = `${loc.title}. ${loc.summary}. ${loc.content.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = currentLang === 'kn' ? 'kn-IN' : currentLang === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const textSizeClass =
    fontSize === 'larger'
      ? 'text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose'
      : fontSize === 'large'
      ? 'text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose'
      : 'text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose';

  const audioLabel = isPlayingAudio
    ? currentLang === 'en'
      ? 'Stop Audio'
      : currentLang === 'hi'
      ? 'ध्वनि बंद करें'
      : 'ಧ್ವನಿ ನಿಲ್ಲಿಸಿ'
    : currentLang === 'en'
    ? 'Listen to Story (Read Aloud)'
    : currentLang === 'hi'
    ? 'कथा सुनें (वाचन)'
    : 'ಕಥೆ ಕೇಳಿ (ಧ್ವನಿ ಶ್ರವಣ)';

  const shlokaLabel =
    currentLang === 'en'
      ? 'Sacred Shloka / Mantra'
      : currentLang === 'hi'
      ? 'शास्त्र श्लोक / मन्त्र'
      : 'ಶಾಸ್ತ್ರ ಶ್ಲೋಕ / ಮಂತ್ರ';

  const meaningLabel =
    currentLang === 'en' ? 'Meaning:' : currentLang === 'hi' ? 'अर्थ:' : 'ಅರ್ಥ:';

  const narrativeLabel =
    currentLang === 'en'
      ? 'Sacred Story Narrative'
      : currentLang === 'hi'
      ? 'पवित्र कथा भाग'
      : 'ಪವಿತ್ರ ಕಥಾ ಭಾಗ';

  const lessonsLabel =
    currentLang === 'en'
      ? 'Key Spiritual Lessons & Wisdom'
      : currentLang === 'hi'
      ? 'कथा से जीवन के आध्यात्मिक पाठ (तत्त्वार्थ)'
      : 'ಕಥೆಯಿಂದ ಕಲಿಯಬಹುದಾದ ಜೀವನ ಪಾಠಗಳು (ತತ್ತ್ವಾರ್ಥ)';

  const sourceLabel =
    currentLang === 'en'
      ? 'Scriptural Reference:'
      : currentLang === 'hi'
      ? 'शास्त्रीय आकर ग्रन्थ:'
      : 'ಶಾಸ್ತ್ರೀಯ ಆಕರ ಗ್ರಂಥ:';

  const wisdomLabel =
    currentLang === 'en'
      ? 'Sanatana Wisdom'
      : currentLang === 'hi'
      ? 'सनातन धर्म ज्ञान'
      : 'ಸನಾತನ ಧರ್ಮ ಜ್ಞಾನ';

  const backToStoriesText =
    currentLang === 'en'
      ? 'Back to Stories'
      : currentLang === 'hi'
      ? 'कथाओं की सूची'
      : 'ಕಥೆಗಳ ಪಟ್ಟಿಗೆ ಹಿಂತಿರುಗಿ';

  const allStoriesText =
    currentLang === 'en'
      ? 'View All 6 Stories'
      : currentLang === 'hi'
      ? 'सभी ६ कथाएं देखें'
      : 'ಎಲ್ಲಾ ೬ ಕಥೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ';

  const prevStoryLabel =
    currentLang === 'en' ? 'Previous Story' : currentLang === 'hi' ? 'पिछली कथा' : 'ಹಿಂದಿನ ಕಥೆ';

  const nextStoryLabel =
    currentLang === 'en' ? 'Next Story' : currentLang === 'hi' ? 'अगली कथा' : 'ಮುಂದಿನ ಕಥೆ';

  return (
    <div className="py-6 sm:py-10 w-full max-w-full overflow-hidden">
      {/* Top Breadcrumbs & Control Bar */}
      <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[#c6923b]/25">
          {/* Breadcrumb Links */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#8c6d48] flex-wrap">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#c6923b] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Home' : currentLang === 'hi' ? 'मुख्य' : 'ಮುಖಪುಟ'}</span>
            </button>
            <ChevronRight className="w-3 h-3 opacity-50 shrink-0" />
            <button
              onClick={onNavigateBackToStories}
              className="hover:text-[#c6923b] transition-colors cursor-pointer"
            >
              {t.navStories}
            </button>
            <ChevronRight className="w-3 h-3 opacity-50 shrink-0" />
            <span className="font-semibold text-[#c6923b] truncate max-w-[150px] xs:max-w-[220px] sm:max-w-[280px]">
              {loc.title}
            </span>
          </div>

          {/* Action Tools (Speech, Share, Back) */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            {'speechSynthesis' in window && (
              <button
                onClick={handleToggleSpeech}
                aria-label={audioLabel}
                title={audioLabel}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                  isPlayingAudio
                    ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
                    : isDark
                    ? 'bg-[#251a14] border-[#85541e]/40 text-[#c7b7a5] hover:bg-[#2e231e]'
                    : 'bg-[#faf6f0] border-[#c6923b]/30 text-[#625143] hover:bg-[#ede3d3]'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span className="hidden xs:inline">
                  {isPlayingAudio
                    ? currentLang === 'en' ? 'Stop' : currentLang === 'hi' ? 'रोकें' : 'ನಿಲ್ಲಿಸಿ'
                    : currentLang === 'en' ? 'Listen' : currentLang === 'hi' ? 'सुनें' : 'ಕೇಳಿ'}
                </span>
              </button>
            )}

            <button
              onClick={handleShare}
              aria-label={t.shareTitle}
              title={t.shareTitle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                copied
                  ? 'bg-emerald-600 text-white border-emerald-700'
                  : isDark
                  ? 'bg-[#251a14] border-[#85541e]/40 text-[#c7b7a5] hover:bg-[#2e231e]'
                  : 'bg-[#faf6f0] border-[#c6923b]/30 text-[#625143] hover:bg-[#ede3d3]'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden xs:inline">
                {copied
                  ? currentLang === 'en' ? 'Copied!' : currentLang === 'hi' ? 'कॉपी!' : 'ಕಾಪಿ ಆಗಿದೆ!'
                  : t.shareTitle}
              </span>
            </button>

            <button
              onClick={onNavigateBackToStories}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#c6923b] text-white hover:bg-[#b07e2c] transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{backToStoriesText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Full-Page Article Reader */}
      <article className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8 space-y-8">
        {/* Story Lead & Title Header */}
        <header className="text-center space-y-4">
          <div className="ornament-divider mx-auto max-w-xs">
            <span className="text-[#c6923b] font-serif font-bold text-sm select-none">
              {t.invocationLead}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#c6923b]/15 text-[#9a6f23] dark:text-[#f0c375] border border-[#c6923b]/30">
            <ScrollText className="w-3.5 h-3.5" />
            <span>{loc.categoryLabel}</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>{loc.readTime}</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="font-normal opacity-80">{loc.sourceReference}</span>
          </div>

          <h1
            className={`font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug sm:leading-tight text-balance ${
              isDark ? 'text-[#faf3e3]' : 'text-[#251b14]'
            }`}
          >
            {loc.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#8c6d48] font-sans">
            {loc.titleEn}
          </p>

          {/* Atmospheric Summary Quote Box */}
          <div
            className={`mx-auto max-w-2xl p-4 sm:p-5 rounded-2xl border text-left text-xs sm:text-sm leading-relaxed ${
              isDark
                ? 'bg-[#221a15] border-[#85541e]/40 text-[#dfd0be]'
                : 'bg-[#faf6f0] border-[#c6923b]/30 text-[#4c3b2e]'
            }`}
          >
            <span className="text-[#c6923b] font-serif font-bold text-xs uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.readSummary}</span>
            </span>
            <p className="italic">{loc.summary}</p>
          </div>
        </header>

        {/* Featured Story Visual Artwork */}
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl border-2 border-[#c6923b]/40 shadow-xl bg-[#ecdcc5]">
          <img
            src={story.image}
            alt={loc.title}
            className="w-full h-64 sm:h-96 md:h-[420px] object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
            <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md font-medium text-amber-200">
              {loc.category}
            </span>
            <span className="bg-black/40 px-2 py-0.5 rounded text-[11px] opacity-80">
              {wisdomLabel}
            </span>
          </div>
        </div>

        {/* Sacred Shloka Box */}
        {story.shloka && (
          <section
            className={`p-5 sm:p-7 rounded-2xl border relative overflow-hidden shadow-sm ${
              isDark
                ? 'bg-gradient-to-b from-[#281c15] to-[#201611] border-[#85541e]/50'
                : 'bg-gradient-to-b from-[#fbf6ec] to-[#f4ebe0] border-[#c6923b]/40'
            }`}
          >
            <div
              className="absolute -right-4 -bottom-6 text-[120px] font-serif select-none pointer-events-none opacity-[0.04] text-[#c6923b]"
              aria-hidden="true"
            >
              ॐ
            </div>
            <div className="relative space-y-3">
              <div className="text-xs font-bold text-[#c6923b] tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{shlokaLabel}</span>
              </div>
              <p className="font-serif text-sm sm:text-lg md:text-xl font-bold leading-relaxed text-[#c6923b] dark:text-[#f3c87e] tracking-wide">
                {story.shloka}
              </p>
              {loc.shlokaMeaning && (
                <div
                  className={`pt-3 border-t border-black/5 dark:border-white/5 text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-[#cfbeab]' : 'text-[#5d4c3f]'
                  }`}
                >
                  <span className="font-semibold text-[#c6923b] mr-1.5">{meaningLabel}</span>
                  <span>{loc.shlokaMeaning}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Full Narrative Content (ಪವಿತ್ರ ಕಥಾ ಭಾಗ) */}
        <section className="space-y-6 pt-2">
          <div className="flex items-center gap-2 border-b border-[#c6923b]/25 pb-2">
            <BookOpen className="w-4 h-4 text-[#c6923b]" />
            <h2 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-[#c6923b]">
              {narrativeLabel}
            </h2>
          </div>

          <div className="space-y-5">
            {loc.content.map((paragraph, index) => (
              <p
                key={index}
                className={`${textSizeClass} ${
                  isDark ? 'text-[#ebd8c4]' : 'text-[#32241a]'
                } ${index === 0 ? 'first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#c6923b] first-letter:mr-1' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Key Spiritual Lessons / Tattvartha Card */}
        {loc.keyLessons && loc.keyLessons.length > 0 && (
          <section
            className={`p-5 sm:p-7 rounded-2xl border space-y-3.5 shadow-sm ${
              isDark
                ? 'bg-[#231812] border-[#85541e]/40'
                : 'bg-[#f4ede0] border-[#c6923b]/30'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#c6923b] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <h3>{lessonsLabel}</h3>
            </div>
            <ul className="space-y-2.5">
              {loc.keyLessons.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                  <span className="text-[#c6923b] font-bold text-base leading-none mt-0.5 shrink-0">✦</span>
                  <span className={isDark ? 'text-[#d6c5b2]' : 'text-[#48372b]'}>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Scriptural Citation Note */}
        <div className="py-4 px-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#8c6d48]">
          <span>{sourceLabel} <strong className="text-[#c6923b]">{loc.sourceReference}</strong></span>
          <span>{wisdomLabel} · Advaita Vedanta</span>
        </div>

        {/* Bottom Story Navigation: Previous & Next Story */}
        <nav aria-label="Story navigation" className="pt-6 border-t border-[#c6923b]/25 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {prevStory ? (
              <button
                onClick={() => onSelectStory(prevStory.id)}
                className={`p-4 rounded-xl border text-left transition-all group cursor-pointer hover:-translate-y-0.5 shadow-xs ${
                  isDark
                    ? 'bg-[#221a15] border-[#85541e]/30 hover:border-[#c6923b]'
                    : 'bg-white border-[#c6923b]/25 hover:border-[#c6923b]'
                }`}
              >
                <span className="text-[11px] text-[#8c6d48] flex items-center gap-1 mb-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  <span>{prevStoryLabel}</span>
                </span>
                <span className="font-serif text-xs sm:text-sm font-bold line-clamp-1 group-hover:text-[#c6923b] transition-colors">
                  {getLocalizedStory(prevStory, currentLang).title}
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextStory ? (
              <button
                onClick={() => onSelectStory(nextStory.id)}
                className={`p-4 rounded-xl border text-right transition-all group cursor-pointer hover:-translate-y-0.5 shadow-xs ${
                  isDark
                    ? 'bg-[#221a15] border-[#85541e]/30 hover:border-[#c6923b]'
                    : 'bg-white border-[#c6923b]/25 hover:border-[#c6923b]'
                }`}
              >
                <span className="text-[11px] text-[#8c6d48] flex items-center justify-end gap-1 mb-1">
                  <span>{nextStoryLabel}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-serif text-xs sm:text-sm font-bold line-clamp-1 group-hover:text-[#c6923b] transition-colors">
                  {getLocalizedStory(nextStory, currentLang).title}
                </span>
              </button>
            ) : (
              <div />
            )}
          </div>

          {/* Central Actions: Back to Stories & Back to Articles */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onNavigateBackToStories}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#c6923b] text-white hover:bg-[#b07e2c] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>{allStoriesText}</span>
            </button>

            <button
              onClick={onNavigateHome}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border transition-all active:scale-95 cursor-pointer ${
                isDark
                  ? 'border-[#85541e]/40 text-[#c7b7a5] hover:bg-[#2e231e]'
                  : 'border-[#c6923b]/30 text-[#625143] hover:bg-[#ede3d3]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToArticles}</span>
            </button>
          </div>
        </nav>
      </article>
    </div>
  );
};
