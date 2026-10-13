import React from 'react';
import { ArticleItem, getLocalizedArticle } from '../data/articles';
import { Language, TRANSLATIONS } from '../data/translations';
import { X, Bookmark, Trash2, ExternalLink } from 'lucide-react';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  currentLang: Language;
  bookmarkedArticles: ArticleItem[];
  onRemoveBookmark: (id: string) => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  isDark,
  currentLang,
  bookmarkedArticles,
  onRemoveBookmark,
  onSelectArticle,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang];

  const removeLabel =
    currentLang === 'en'
      ? 'Remove Bookmark'
      : currentLang === 'hi'
      ? 'बुकमार्क हटाएं'
      : 'ತೆಗೆದುಹಾಕಿ';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-xs" />

      <div
        className={`relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border ${
          isDark
            ? 'bg-[#1f1713] text-[#f2e7d5] border-[#85541e]/40'
            : 'bg-[#faf6f0] text-[#2c2018] border-[#c6923b]/30'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-5 py-4 border-b ${
            isDark ? 'border-[#85541e]/30 bg-[#261c17]' : 'border-[#c6923b]/20 bg-[#f2ece0]'
          }`}
        >
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#c6923b] fill-current" />
            <h2 className="font-serif font-bold text-base sm:text-lg">
              {t.bookmarksTitle} ({bookmarkedArticles.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={t.closeModal}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isDark ? 'hover:bg-[#342720] text-[#c7b7a5]' : 'hover:bg-[#eae2d3] text-[#705e4f]'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 divide-y divide-black/5 dark:divide-white/5 space-y-3">
          {bookmarkedArticles.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <Bookmark className="w-10 h-10 mx-auto text-[#c6923b]/40" />
              <p className="text-sm text-[#8c6d48]">
                {t.noBookmarks}
              </p>
              <p className="text-xs opacity-60 max-w-xs mx-auto">
                {t.noBookmarksDesc}
              </p>
            </div>
          ) : (
            bookmarkedArticles.map((article) => {
              const loc = getLocalizedArticle(article, currentLang);
              return (
                <div
                  key={article.id}
                  className="pt-3 first:pt-0 flex items-center justify-between gap-3 group"
                >
                  <div
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                  >
                    <img
                      src={article.image}
                      alt={loc.title}
                      className="w-12 h-12 rounded-lg object-cover border border-[#c6923b]/30 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-sm font-semibold truncate group-hover:text-[#c6923b] transition-colors">
                        {loc.title}
                      </h3>
                      <div className="text-[11px] text-[#8c6d48] flex items-center gap-1.5 mt-0.5">
                        <span>{loc.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{loc.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveBookmark(article.id)}
                    title={removeLabel}
                    aria-label={removeLabel}
                    className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 transition-colors opacity-70 hover:opacity-100 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div
          className={`p-4 border-t flex justify-end ${
            isDark ? 'border-[#85541e]/30 bg-[#261c17]' : 'border-[#c6923b]/20 bg-[#f2ece0]'
          }`}
        >
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#c6923b] text-white hover:bg-[#b07e2c] transition-colors cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
