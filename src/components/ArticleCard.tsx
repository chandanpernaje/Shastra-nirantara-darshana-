import React, { useState } from 'react';
import { ArticleItem, getLocalizedArticle } from '../data/articles';
import { Bookmark, BookOpen, Share2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ArticleCardProps {
  article: ArticleItem;
  viewMode: 'grid' | 'list';
  isDark: boolean;
  isBookmarked: boolean;
  currentLang: Language;
  onToggleBookmark: (id: string) => void;
  onSelectArticle: (article: ArticleItem) => void;
  onSelectArticleStory: (article: ArticleItem) => void;
  onShare: (article: ArticleItem) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  viewMode,
  isDark,
  isBookmarked,
  currentLang,
  onToggleBookmark,
  onSelectArticle,
  onSelectArticleStory,
  onShare,
}) => {
  const [imgError, setImgError] = useState(false);
  const loc = getLocalizedArticle(article, currentLang);
  const t = TRANSLATIONS[currentLang];

  if (viewMode === 'list') {
    return (
      <div
        className={`group relative flex flex-col sm:flex-row items-stretch overflow-hidden rounded-xl border transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
          isDark
            ? 'border-[#85541e]/30 bg-[#221a15] hover:border-[#c6923b]'
            : 'border-[#c6923b]/25 bg-white hover:border-[#c6923b]'
        }`}
      >
        {/* Thumbnail Image - Clicking redirects directly to the story */}
        <div
          onClick={() => onSelectArticleStory(article)}
          className="relative w-full sm:w-48 sm:min-w-[12rem] h-44 sm:h-auto overflow-hidden bg-[#ecdcc5] cursor-pointer"
        >
          {!imgError ? (
            <img
              src={article.image}
              alt={loc.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#f0e6d6] text-[#c6923b] font-serif text-3xl">
              ॐ
            </div>
          )}
          <span className="absolute top-2 left-2 rounded bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[10px] font-medium text-amber-200">
            {loc.categoryLabel}
          </span>
        </div>

        {/* Content body */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div>
            <div className="flex items-center justify-between gap-2 text-xs text-[#8c6d48] mb-1.5">
              <span>{loc.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{loc.readTime}</span>
            </div>

            <h3
              onClick={() => onSelectArticleStory(article)}
              className={`font-serif text-base sm:text-lg font-semibold leading-snug cursor-pointer transition-colors ${
                isDark
                  ? 'text-[#f5ebd7] group-hover:text-[#d8a349]'
                  : 'text-[#281d16] group-hover:text-[#9a6f23]'
              }`}
            >
              {loc.title}
            </h3>

            <p
              onClick={() => onSelectArticleStory(article)}
              className={`mt-2 text-xs sm:text-sm line-clamp-2 leading-relaxed cursor-pointer ${
                isDark ? 'text-[#b8a694]' : 'text-[#5d4c3f]'
              }`}
            >
              {loc.summary}
            </p>
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-2 flex-wrap">
            <button
              onClick={() => onSelectArticle(article)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#c6923b] hover:text-[#9a6f23] transition-colors cursor-pointer py-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.readDescription}</span>
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onShare(article)}
                title={t.shareTitle}
                aria-label={t.shareTitle}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  isDark ? 'hover:bg-[#342720] text-[#c7b7a5]' : 'hover:bg-[#f2ece0] text-[#705e4f]'
                }`}
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => onToggleBookmark(article.id)}
                title={isBookmarked ? 'ಉಳಿಸಲಾಗಿದೆ' : t.bookmarkTitle}
                aria-label={t.bookmarkTitle}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'text-[#c6923b]'
                    : isDark
                    ? 'hover:bg-[#342720] text-[#c7b7a5]'
                    : 'hover:bg-[#f2ece0] text-[#705e4f]'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              {/* Direct Story Button */}
              <button
                onClick={() => onSelectArticleStory(article)}
                title={t.readStory}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#c6923b] text-white hover:bg-[#b07e2c] transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.readStory}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-200 shadow-sm hover:-translate-y-1 hover:shadow-lg ${
        isDark
          ? 'border-[#85541e]/30 bg-[#221a15] hover:border-[#c6923b]'
          : 'border-[#c6923b]/25 bg-white hover:border-[#c6923b]'
      }`}
    >
      {/* Visual Image container with 1:1 Aspect ratio - Clicking redirects directly to story */}
      <div
        onClick={() => onSelectArticleStory(article)}
        className="relative aspect-square w-full overflow-hidden bg-[#efe5d5] cursor-pointer"
      >
        {!imgError ? (
          <img
            src={article.image}
            alt={loc.title}
            loading="lazy"
            width={1024}
            height={1024}
            onError={() => setImgError(true)}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#ede3d3] text-[#c6923b] font-serif text-4xl">
            ॐ
          </div>
        )}

        {/* Category tag watermark */}
        <span className="absolute top-2 left-2 rounded bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[10px] font-medium text-amber-100">
          {loc.categoryLabel}
        </span>

        {/* Hover Quick Action overlay on desktop */}
        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center gap-2 p-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectArticleStory(article);
            }}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/95 text-[#251e1a] shadow hover:bg-white transition-all flex items-center gap-1 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#c6923b]" />
            <span>{t.readStory}</span>
          </button>
        </div>

        {/* Quick Bookmark button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(article.id);
          }}
          aria-label={t.bookmarkTitle}
          title={isBookmarked ? 'ಉಳಿಸಲಾಗಿದೆ' : t.bookmarkTitle}
          className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-md shadow transition-transform active:scale-90 cursor-pointer ${
            isBookmarked
              ? 'bg-[#c6923b] text-white'
              : 'bg-black/40 text-white/80 hover:text-white hover:bg-black/60'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Title & Metadata Body */}
      <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-4">
        <div>
          <div className="text-[10px] sm:text-[11px] text-[#8c6d48] mb-1 font-sans">
            {loc.readTime}
          </div>

          <h3
            onClick={() => onSelectArticleStory(article)}
            className={`line-clamp-2 text-xs sm:text-base leading-snug sm:leading-relaxed font-semibold cursor-pointer transition-colors font-serif ${
              isDark
                ? 'text-[#f5ebd7] group-hover:text-[#d8a349]'
                : 'text-[#241a14] group-hover:text-[#9a6f23]'
            }`}
            title={loc.title}
          >
            {loc.title}
          </h3>
        </div>

        <div className="mt-2.5 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-1">
          <button
            onClick={() => onSelectArticle(article)}
            className="text-[11px] sm:text-xs font-medium text-[#c6923b] hover:text-[#9a6f23] transition-colors flex items-center gap-1 cursor-pointer py-1"
          >
            <span>{t.readSummary}</span>
          </button>

          {/* Direct Story Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectArticleStory(article);
            }}
            title={t.readStory}
            className="text-[11px] sm:text-xs font-semibold text-[#c6923b] bg-[#c6923b]/10 hover:bg-[#c6923b] hover:text-white transition-all flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md active:scale-95 shrink-0"
          >
            <span>{t.readStory}</span>
            <BookOpen className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
