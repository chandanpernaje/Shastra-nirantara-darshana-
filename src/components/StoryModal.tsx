import React, { useEffect } from 'react';
import { StoryItem, getLocalizedStory } from '../data/stories';
import { Language, TRANSLATIONS } from '../data/translations';
import { X, Share2, Check, BookOpen, Sparkles, ScrollText, Volume2, VolumeX } from 'lucide-react';

interface StoryModalProps {
  story: StoryItem | null;
  isOpen: boolean;
  isDark: boolean;
  currentLang: Language;
  onClose: () => void;
  fontSize: 'normal' | 'large' | 'larger';
}

export const StoryModal: React.FC<StoryModalProps> = ({
  story,
  isOpen,
  isDark,
  currentLang,
  onClose,
  fontSize,
}) => {
  const [copied, setCopied] = React.useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);
  const t = TRANSLATIONS[currentLang];
  const loc = story ? getLocalizedStory(story, currentLang) : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    }
    return () => {
      document.body.style.overflow = '';
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen]);

  if (!isOpen || !story || !loc) return null;

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
      ? 'text-base sm:text-lg leading-relaxed'
      : fontSize === 'large'
      ? 'text-sm sm:text-base leading-relaxed'
      : 'text-xs sm:text-sm leading-relaxed';

  const audioLabel = isPlayingAudio
    ? currentLang === 'en'
      ? 'Stop Audio'
      : currentLang === 'hi'
      ? 'ध्वनि बंद करें'
      : 'ಧ್ವನಿ ನಿಲ್ಲಿಸಿ'
    : currentLang === 'en'
    ? 'Listen to Story'
    : currentLang === 'hi'
    ? 'कथा सुनें'
    : 'ಕಥೆ ಕೇಳಿ';

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full sm:max-w-2xl md:max-w-3xl max-h-[92vh] sm:max-h-[86vh] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isDark
            ? 'bg-[#1f1713] text-[#f2e7d5] border sm:border-[#85541e]/40'
            : 'bg-[#faf6f0] text-[#2c2018] border sm:border-[#c6923b]/30'
        }`}
      >
        {/* Top Header Bar */}
        <div
          className={`flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b shrink-0 ${
            isDark ? 'border-[#85541e]/30 bg-[#261c17]' : 'border-[#c6923b]/20 bg-[#f2ece0]'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-[#c6923b] min-w-0 pr-2">
            <ScrollText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="truncate">{loc.categoryLabel}</span>
            <span aria-hidden="true" className="opacity-40 shrink-0">·</span>
            <span className="opacity-80 font-normal shrink-0">{loc.readTime}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {'speechSynthesis' in window && (
              <button
                onClick={handleToggleSpeech}
                aria-label={audioLabel}
                title={audioLabel}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isPlayingAudio
                    ? 'text-amber-500 bg-amber-500/15'
                    : isDark
                    ? 'text-[#c7b7a5] hover:bg-[#342720]'
                    : 'text-[#705e4f] hover:bg-[#eae2d3]'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={handleShare}
              aria-label={t.shareTitle}
              title={t.shareTitle}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                copied
                  ? 'text-emerald-500 bg-emerald-500/10'
                  : isDark
                  ? 'text-[#c7b7a5] hover:bg-[#342720]'
                  : 'text-[#705e4f] hover:bg-[#eae2d3]'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              aria-label={t.closeModal}
              title={t.closeModal}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-[#c7b7a5] hover:bg-[#342720] hover:text-white'
                  : 'text-[#705e4f] hover:bg-[#eae2d3] hover:text-black'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Story Content */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-5 sm:space-y-6">
          {/* Main Visual & Title */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
            <img
              src={story.image}
              alt={loc.title}
              className="w-full sm:w-44 h-48 sm:h-44 rounded-xl object-cover object-top border-2 border-[#c6923b]/30 shadow-md shrink-0"
            />
            <div className="flex-1 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#c6923b]/15 text-[#9a6f23] dark:text-[#f0c375] border border-[#c6923b]/30">
                {loc.category}
              </span>
              <h2
                id="story-modal-title"
                className="font-serif text-lg sm:text-2xl font-bold leading-snug tracking-tight"
              >
                {loc.title}
              </h2>
              <p className="text-xs text-[#8c6d48] font-sans">
                {loc.titleEn}
              </p>
            </div>
          </div>

          {/* Sacred Shloka Box */}
          {story.shloka && (
            <div
              className={`p-4 rounded-xl border relative overflow-hidden ${
                isDark
                  ? 'bg-[#2a1d16] border-[#85541e]/50'
                  : 'bg-[#f7f0e3] border-[#c6923b]/35'
              }`}
            >
              <div className="text-[11px] font-bold text-[#c6923b] tracking-widest uppercase mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{shlokaLabel}</span>
              </div>
              <p className="font-serif text-xs sm:text-base font-semibold leading-relaxed text-[#c6923b] dark:text-[#f3c87e]">
                {story.shloka}
              </p>
              {loc.shlokaMeaning && (
                <p className={`mt-2 text-xs italic ${isDark ? 'text-[#c2b29f]' : 'text-[#69584a]'}`}>
                  {meaningLabel} {loc.shlokaMeaning}
                </p>
              )}
            </div>
          )}

          {/* Full Narrative Content */}
          <div className="space-y-3.5 sm:space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#c6923b]">
              {narrativeLabel}
            </h3>
            {loc.content.map((paragraph, index) => (
              <p
                key={index}
                className={`${textSizeClass} ${isDark ? 'text-[#e5d8c8]' : 'text-[#3d2e22]'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Lessons / Tattva Arthas */}
          {loc.keyLessons && loc.keyLessons.length > 0 && (
            <div
              className={`p-4 rounded-xl border space-y-2.5 ${
                isDark
                  ? 'bg-[#251a14] border-[#85541e]/30'
                  : 'bg-[#f3ece0] border-[#c6923b]/25'
              }`}
            >
              <h4 className="text-xs font-bold text-[#c6923b] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{lessonsLabel}</span>
              </h4>
              <ul className="space-y-1.5">
                {loc.keyLessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="text-[#c6923b] font-bold text-sm leading-none mt-0.5 shrink-0">✦</span>
                    <span className={isDark ? 'text-[#cfbeab]' : 'text-[#534335]'}>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reference Attribution */}
          <div className="pt-3 text-xs text-[#8c6d48] border-t border-black/5 dark:border-white/5 flex items-center justify-between">
            <span className="truncate pr-2">{sourceLabel} {loc.sourceReference}</span>
            <span className="shrink-0">{wisdomLabel}</span>
          </div>
        </div>

        {/* Footer Bar */}
        <div
          className={`p-4 sm:p-5 border-t flex items-center justify-end gap-3 shrink-0 ${
            isDark ? 'border-[#85541e]/30 bg-[#261c17]' : 'border-[#c6923b]/20 bg-[#f2ece0]'
          }`}
        >
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#c6923b] text-white hover:bg-[#b07e2c] transition-colors shadow-sm cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
