import React, { useEffect } from 'react';
import { ArticleItem, getLocalizedArticle } from '../data/articles';
import { X, Bookmark, Share2, Check, BookOpen, ScrollText } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ArticleModalProps {
  article: ArticleItem | null;
  isOpen: boolean;
  isDark: boolean;
  isBookmarked: boolean;
  currentLang: Language;
  onClose: () => void;
  onToggleBookmark: (id: string) => void;
  onShare: (article: ArticleItem) => void;
  copiedId: string | null;
  onSelectArticleStory?: (article: ArticleItem) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  isDark,
  isBookmarked,
  currentLang,
  onClose,
  onToggleBookmark,
  onShare,
  copiedId,
  onSelectArticleStory,
}) => {
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
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !article) return null;

  const loc = getLocalizedArticle(article, currentLang);
  const t = TRANSLATIONS[currentLang];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div
        className={`relative w-full sm:max-w-2xl md:max-w-3xl max-h-[92vh] sm:max-h-[86vh] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all transform duration-300 ${
          isDark
            ? 'bg-[#1f1713] text-[#f2e7d5] border sm:border-[#85541e]/40'
            : 'bg-[#faf6f0] text-[#2c2018] border sm:border-[#c6923b]/30'
        }`}
      >
        {/* Header Bar */}
        <div
          className={`flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b shrink-0 ${
            isDark ? 'border-[#85541e]/30 bg-[#261c17]' : 'border-[#c6923b]/20 bg-[#f2ece0]'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-[#c6923b] min-w-0 pr-2">
            <ScrollText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="truncate">{loc.categoryLabel}</span>
            {loc.scriptureRef && (
              <>
                <span aria-hidden="true" className="opacity-40 shrink-0">·</span>
                <span className="opacity-80 font-normal shrink-0 truncate max-w-[120px] sm:max-w-none">
                  {loc.scriptureRef}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => onToggleBookmark(article.id)}
              aria-label={t.bookmarkTitle}
              title={isBookmarked ? 'ಉಳಿಸಲಾಗಿದೆ' : t.bookmarkTitle}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isBookmarked
                  ? 'text-[#c6923b] bg-[#c6923b]/10'
                  : isDark
                  ? 'text-[#c7b7a5] hover:bg-[#342720]'
                  : 'text-[#705e4f] hover:bg-[#eae2d3]'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => onShare(article)}
              aria-label={t.shareTitle}
              title={t.shareTitle}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                copiedId === article.id
                  ? 'text-emerald-500 bg-emerald-500/10'
                  : isDark
                  ? 'text-[#c7b7a5] hover:bg-[#342720]'
                  : 'text-[#705e4f] hover:bg-[#eae2d3]'
              }`}
            >
              {copiedId === article.id ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              aria-label={t.closeBtn}
              title={t.closeBtn}
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

        {/* Scrollable Body Content */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-5 sm:space-y-6">
          {/* Main Visual & Title */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
            <img
              src={article.image}
              alt={loc.title}
              className="w-full sm:w-44 h-48 sm:h-44 rounded-xl object-cover object-top border-2 border-[#c6923b]/30 shadow-md shrink-0"
            />
            <div className="flex-1 space-y-2">
              <div className="text-xs text-[#8c6d48] flex items-center gap-2">
                <span>{loc.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{loc.categoryLabel}</span>
              </div>
              <h2
                id="modal-title"
                className="font-serif text-lg sm:text-2xl font-bold leading-snug tracking-tight"
              >
                {loc.title}
              </h2>
            </div>
          </div>

          {/* Detailed Summary */}
          <div
            className={`p-4 rounded-xl border leading-relaxed text-xs sm:text-sm ${
              isDark
                ? 'bg-[#291e18] border-[#85541e]/30 text-[#dfd0be]'
                : 'bg-[#f4efe4] border-[#c6923b]/25 text-[#423326]'
            }`}
          >
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#c6923b] mb-2">
              {t.readSummary}
            </h3>
            <p>{loc.summary}</p>
          </div>

          {/* Key Highlights */}
          {loc.keyPoints && loc.keyPoints.length > 0 && (
            <div
              className={`p-4 rounded-xl border space-y-2.5 ${
                isDark
                  ? 'bg-[#251a14] border-[#85541e]/30'
                  : 'bg-[#f2ebe0] border-[#c6923b]/25'
              }`}
            >
              <h4 className="text-xs font-bold text-[#c6923b] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.keyPoints}</span>
              </h4>
              <ul className="space-y-1.5">
                {loc.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="text-[#c6923b] font-bold text-sm leading-none mt-0.5 shrink-0">✦</span>
                    <span className={isDark ? 'text-[#cfbeab]' : 'text-[#534335]'}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Scripture Citation Note */}
          <div className="pt-2 text-xs text-[#8c6d48] border-t border-black/5 dark:border-white/5 flex items-center justify-between">
            <span className="truncate pr-2">{t.storySourceScripture}: {loc.scriptureRef || 'Sanatana Vedic Tradition'}</span>
            <span className="shrink-0">Advaita Vedanta</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          className={`p-4 sm:p-5 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${
            isDark ? 'border-[#85541e]/30 bg-[#261c17]' : 'border-[#c6923b]/20 bg-[#f2ece0]'
          }`}
        >
          <div className="text-xs text-[#8c6d48] hidden md:block">
            {currentLang === 'en'
              ? 'Explore sacred stories of Sanatana Dharma'
              : currentLang === 'hi'
              ? 'सनातन धर्म की पावन कथाएं पढ़ें'
              : 'ಸನಾತನ ಧರ್ಮ ಹಾಗೂ ಶಾಸ್ತ್ರ ಕಥೆಗಳನ್ನು ಓದಿ'}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className={`flex-1 sm:flex-none px-5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-colors border cursor-pointer ${
                isDark
                  ? 'border-[#85541e]/40 text-[#c7b7a5] hover:bg-[#342720]'
                  : 'border-[#c6923b]/30 text-[#625143] hover:bg-[#eae2d3]'
              }`}
            >
              {t.closeBtn}
            </button>

            {onSelectArticleStory && (
              <button
                onClick={() => {
                  onClose();
                  onSelectArticleStory(article);
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1a1411] rounded-lg bg-gradient-to-r from-[#d8a349] to-[#bf8c35] hover:from-[#e2b05b] hover:to-[#cd983f] shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.readStory}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
