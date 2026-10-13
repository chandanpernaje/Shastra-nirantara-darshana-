import React, { useState } from 'react';
import { INVOCATION_SHLOKAS } from '../data/articles';
import { Language, TRANSLATIONS } from '../data/translations';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface InvocationBannerProps {
  isDark: boolean;
  currentLang: Language;
}

export const InvocationBanner: React.FC<InvocationBannerProps> = ({ isDark, currentLang }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPlayingChime, setIsPlayingChime] = useState(false);
  const t = TRANSLATIONS[currentLang];

  // Gentle meditative tanpura/bell synth sound via Web Audio API (no external asset needed)
  const playSacredBell = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      setIsPlayingChime(true);

      // Harmonious Tibetan/Temple bell harmonics: fundamental and fifths
      const freqs = [216, 432, 648, 864];
      const now = ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const volume = 0.15 / (idx + 1);
        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.6);
      });

      setTimeout(() => {
        setIsPlayingChime(false);
      }, 3500);
    } catch {
      setIsPlayingChime(false);
    }
  };

  const shloka = INVOCATION_SHLOKAS[activeTab];

  const localizedMeanings = [
    {
      kn: 'ಶಂಕರಂ ಶಂಕರಾಚಾರ್ಯಂ ಕೇಶವಂ ಬಾದರಾಯಣಮ್ । ಸೂತ್ರಭಾಷ್ಯಕೃತೌ ವಂದೇ ಭಗವಂತೌ ಪುನಃ ಪುನಃ ॥ ಶ್ರೀ ಶಂಕರ ಭಗವತ್ಪಾದರು ಮತ್ತು ಶ್ರೀ ವೇದವ್ಯಾಸ ಮಹರ್ಷಿಗಳಿಗೆ ಅನಂತ ಪ್ರಣಾಮಗಳು.',
      en: 'Salutations again and again to Lord Shiva who manifested as Shankaracharya, and to Lord Vishnu who manifested as Badarayana (Vyasa)—the divine masters who created the Brahma Sutras and their holy Bhashya commentaries.',
      hi: 'साक्षात शंकर स्वरूप आद्य शंकराचार्य और साक्षात नारायण स्वरूप बादरायण (वेदव्यास) को बारम्बार प्रणाम, जिन्होंने ब्रह्मसूत्र और उनके पावन भाष्य की रचना की।',
    },
    {
      kn: 'ಶಿವಃ ಶಕ್ತ್ಯಾ ಯುಕ್ತೋ ಯದಿ ಭವತಿ ಶಕ್ತಃ ಪ್ರಭವಿತುಮ್ । ಜಗನ್ಮಾತೆ ಲಲಿತಾ ಪರಮೇಶ್ವರಿಯ ಪರಮ ಕೃಪೆಯಿಲ್ಲದೆ ಪರಮಶಿವನೂ ಸಹ ಚಲಿಸಲು ಅಶಕ್ತ. ಆ ಮಹಾಶಕ್ತಿಗೆ ಸಾಷ್ಟಾಂಗ ಪ್ರಣಾಮಗಳು.',
      en: 'United with Shakti alone is Shiva capable of creation; without Her grace, even the supreme Lord cannot stir. Salutations to the primordial Mother Sri Lalita Tripurasundari.',
      hi: 'शक्ति से युक्त होकर ही देवाधिदेव शिव सृष्टि रचने में समर्थ होते हैं; जगन्माता की कृपा के बिना परमेश्वर भी स्पंदन नहीं कर सकते। उस पराशक्ति को कोटि-कोटि वन्दन।',
    },
  ];

  const currentMeaning =
    localizedMeanings[activeTab]?.[currentLang] || shloka.meaning;

  const kickerText =
    currentLang === 'en'
      ? 'Sacred Mangalacharana'
      : currentLang === 'hi'
      ? 'पवित्र मंगलाचरण'
      : 'ಪವಿತ್ರ ಮಂಗಲಾಚರಣೆ';

  const tab0Label =
    currentLang === 'en'
      ? 'Shankara Pranama'
      : currentLang === 'hi'
      ? 'शंकर प्रणाम'
      : 'ಶಂಕರ ಪ್ರಣಾಮ';

  const tab1Label =
    currentLang === 'en'
      ? 'Soundarya Lahari (Verse 1)'
      : currentLang === 'hi'
      ? 'सौन्दर्यलहरी (श्लोक १)'
      : 'ಸೌಂದರ್ಯಲಹರೀ (ಶ್ಲೋಕ ೧)';

  const meaningHeading =
    currentLang === 'en' ? 'Inner Meaning:' : currentLang === 'hi' ? 'भावार्थ:' : 'ಭಾವಾರ್ಥ:';

  const bellPlayingLabel =
    currentLang === 'en'
      ? 'Sacred Sound Meditation Active...'
      : currentLang === 'hi'
      ? 'मंगल घण्टानाद ध्यान जारी...'
      : 'ನಾದ ಧ್ಯಾನ ಮೊಳಗುತ್ತಿದೆ...';

  const bellIdleLabel =
    currentLang === 'en'
      ? 'Listen to Temple Chime & Bell'
      : currentLang === 'hi'
      ? 'मंगल घण्टानाद श्रवण करें'
      : 'ಮಂಗಳ ಘಂಟಾನಾದ ಶ್ರವಣ';

  return (
    <section id="invocation-section" className="mt-14 sm:mt-20 scroll-mt-20">
      <div className="ornament-divider mb-8">
        <span className="text-[#c6923b] text-base select-none">✦</span>
      </div>

      <div
        className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 md:p-10 transition-all ${
          isDark
            ? 'bg-gradient-to-b from-[#241a14] to-[#1c1410] border-[#85541e]/40 shadow-xl'
            : 'bg-gradient-to-b from-[#fbf6ec] to-[#f4ebe0] border-[#c6923b]/30 shadow-md'
        }`}
      >
        {/* Subtle background Sanskrit OM glyph */}
        <div
          className="absolute -right-6 -bottom-10 text-[180px] font-serif select-none pointer-events-none opacity-[0.03] sm:opacity-[0.05] text-[#c6923b]"
          aria-hidden="true"
        >
          ॐ
        </div>

        <div className="relative max-w-3xl mx-auto text-center space-y-5">
          {/* Top kicker and tab selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c6923b] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{kickerText}</span>
            </div>

            {/* Shloka Selector */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-black/5 dark:bg-white/5">
              <button
                onClick={() => setActiveTab(0)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeTab === 0
                    ? 'bg-[#c6923b] text-white shadow-xs'
                    : 'text-[#8c6d48] hover:text-[#533f2d]'
                }`}
              >
                {tab0Label}
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeTab === 1
                    ? 'bg-[#c6923b] text-white shadow-xs'
                    : 'text-[#8c6d48] hover:text-[#533f2d]'
                }`}
              >
                {tab1Label}
              </button>
            </div>
          </div>

          {/* Sanskrit & Kannada Shloka Verse */}
          <div className="py-3 sm:py-5 space-y-3">
            <p
              className={`font-serif text-lg sm:text-2xl font-bold leading-relaxed whitespace-pre-line tracking-wide ${
                isDark ? 'text-[#faeed6]' : 'text-[#2e1f16]'
              }`}
            >
              {currentLang === 'en' || currentLang === 'hi' ? shloka.sanskrit : shloka.kannada}
            </p>

            <p className="text-xs sm:text-sm font-serif italic opacity-70 whitespace-pre-line tracking-wider">
              {currentLang === 'kn' ? shloka.sanskrit : shloka.kannada}
            </p>
          </div>

          {/* Meaning */}
          <div
            className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
              isDark
                ? 'bg-[#18110d]/60 border-[#85541e]/20 text-[#d6c7b5]'
                : 'bg-white/70 border-[#c6923b]/20 text-[#544336]'
            }`}
          >
            <span className="font-semibold text-[#c6923b] block mb-1">{meaningHeading}</span>
            <p>{currentMeaning}</p>
          </div>

          {/* Ambient Bell / Chime Trigger */}
          <div className="pt-2 flex items-center justify-center">
            <button
              onClick={playSacredBell}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full transition-all border active:scale-95 cursor-pointer ${
                isPlayingChime
                  ? 'border-[#c6923b] bg-[#c6923b] text-white'
                  : isDark
                  ? 'border-[#85541e]/40 text-[#c7b7a5] hover:bg-[#2d211b]'
                  : 'border-[#c6923b]/30 text-[#6d5745] hover:bg-[#ede3d3]'
              }`}
            >
              {isPlayingChime ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isPlayingChime ? bellPlayingLabel : bellIdleLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
