import { Language } from './translations';

export interface StoryItem {
  id: string;
  title: string;
  titleEn: string;
  titleHi: string;
  category: 'ಶಾಂಕರ ಲೀಲಾಮೃತ' | 'ವೇದಾಂತ ತತ್ತ್ವ' | 'ಭಕ್ತಿ ಹಾಗೂ ಕಾರುಣ್ಯ' | 'ಗುರುಪರಂಪರೆ' | 'ಶಾಕ್ತ ತತ್ತ್ವ' | 'ಉಪನಿಷತ್ ರಹಸ್ಯ';
  categoryLabel: string;
  categoryLabelEn: string;
  categoryLabelHi: string;
  image: string;
  readTime: string;
  readTimeEn: string;
  readTimeHi: string;
  summary: string;
  summaryEn: string;
  summaryHi: string;
  shloka?: string;
  shlokaMeaning?: string;
  shlokaMeaningEn?: string;
  shlokaMeaningHi?: string;
  content: string[];
  contentEn: string[];
  contentHi: string[];
  keyLessons: string[];
  keyLessonsEn: string[];
  keyLessonsHi: string[];
  sourceReference: string;
  sourceReferenceEn: string;
  sourceReferenceHi: string;
}

export const STORIES: StoryItem[] = [
  {
    id: 'vamadeva-rishi-enlightenment',
    title: 'ವಾಮದೇವ ಋಷಿಯ ಗರ್ಭಸ್ಥ ಜ್ಞಾನೋದಯ ಮತ್ತು ಸಾಮೋಪಾಸನೆ',
    titleEn: 'Sage Vamadeva: Enlightenment in the Womb & Samopasana',
    titleHi: 'ऋषि वामदेव: गर्भस्थ ज्ञानोदय और सामोपासना',
    category: 'ಉಪನಿಷತ್ ರಹಸ್ಯ',
    categoryLabel: 'ವೈದಿಕ ಜ್ಞಾನ',
    categoryLabelEn: 'Vedic Wisdom',
    categoryLabelHi: 'वैदिक ज्ञान',
    image: '/images/shankaracharya.jpg',
    readTime: '೬ ನಿಮಿಷ ಓದು',
    readTimeEn: '6 min read',
    readTimeHi: '६ मिनट पठन',
    summary: 'ಛಾಂದೋಗ್ಯ ಹಾಗೂ ಐತರೇಯ ಉಪನಿಷತ್ತುಗಳಲ್ಲಿ ವರ್ಣಿತವಾಗಿರುವ ಮಹರ್ಷಿ ವಾಮದೇವರ ಪರಮಜ್ಞಾನ. ತಾಯಿಯ ಗರ್ಭದಲ್ಲಿರುವಾಗಲೇ ಬ್ರಹ್ಮಸಾಕ್ಷಾತ್ಕಾರ ಪಡೆದು ಹದ್ದು ಹಕ್ಕಿಯಂತೆ ಮುಕ್ತನಾದ ದಿವ್ಯ ಉಪಾಖ್ಯಾನ ಮತ್ತು ವಾಮದೇವ್ಯ ಸಾಮದ ರಹಸ್ಯ.',
    summaryEn: 'The profound realization of Sage Vamadeva in the Chandogya and Aitareya Upanishads, achieving liberation like an eagle from the womb and illuminating the mystic Vamadevya Samopasana.',
    summaryHi: 'छांदोग्य और ऐतरेय उपनिषदों में वर्णित महर्षि वामदेव का परमज्ञान। माता के गर्भ में ही आत्मसाक्षात्कार पाकर बाज पक्षी की तरह मुक्त होने का दिव्य प्रसंग और सामोपासना का रहस्य।',
    shloka: 'गर्भे नु सन्नन्वेषामवेदमहं देवानां जनिमान्येता । शतं मा पुर आयसीररक्षन्नध श्येनो जवसा निरपीयम् ॥',
    shlokaMeaning: 'ಗರ್ಭದಲ್ಲಿದ್ದಾಗಲೇ ನಾನು ದೇವತೆಗಳ ಸಕಲ ಜನ್ಮರಹಸ್ಯಗಳನ್ನು ಅರಿತೆನು. ನೂರು ಕಬ್ಬಿಣದ ಕೋಟೆಗಳು ನನ್ನನ್ನು ಬಂಧಿಸಿದ್ದರೂ ಹದ್ದಿನ ವೇಗದಲ್ಲಿ ಹಾರಿ ಮುಕ್ತನಾದೆನು.',
    shlokaMeaningEn: 'While yet in the womb, I knew all the generations of the gods. A hundred iron fortresses held me down, yet with the swift flight of a falcon, I burst forth free.',
    shlokaMeaningHi: 'गर्भ में रहते हुए ही मैंने देवों के समस्त जन्म-रहस्यों को जान लिया। सौ लोहे के किलों ने मुझे बांध रखा था, फिर भी बाज के वेग से मैं उड़कर मुक्त हो गया।',
    content: [
      'ಋಗ್ವೇದದ ನಾಲ್ಕನೆಯ ಮಂಡಲದ ದ್ರಷ್ಟಾರರಾದ ವಾಮದೇವ ಋಷಿಗಳು ಉಪನಿಷತ್ತಿನ ಮಹಾನ್ ತತ್ತ್ವಜ್ಞಾನಿಗಳು. ಅವರು ಜನಿಸುವ ಮುನ್ನವೇ ತಾಯಿಯ ಗರ್ಭದಲ್ಲಿದ್ದಾಗಲೇ ಪೂರ್ವಜನ್ಮಗಳ ಸಂಸ್ಕಾರ ಹಾಗೂ ತಪೋಬಲದಿಂದ ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರವನ್ನು ಪಡೆದರು.',
      'ಸಾಮಾನ್ಯ ಮನುಷ್ಯರು ಜನನ-ಮರಣದ ಮಾಯಾಪಾಶದಲ್ಲಿ ಸಿಲುಕಿ ಬಂಧಿತರಾಗುತ್ತಾರೆ. ಆದರೆ ವಾಮದೇವರಿಗೆ ಗರ್ಭಾವಸ್ಥೆಯಲ್ಲೇ ಅರಿವಾಯಿತು: "ನಾನು ಈ ಶರೀರವಲ್ಲ, ನಾನು ಸೂರ್ಯನಾಗಿದ್ದೇನೆ, ಮನುವು ನಾನಾಗಿದ್ದೇನೆ, ಕಕ್ಷೀವಂತ ಋಷಿಯೂ ನಾನೇ! ಸರ್ವವೂ ನಾನೇ ಆಗಿದ್ದೇನೆ!" ಎಂದು ಗರ್ಜಿಸಿದರು.',
      'ಛಾಂದೋಗ್ಯೋಪನಿಷತ್ತಿನಲ್ಲಿ ವಾಮದೇವ್ಯ ಸಾಮದ ರಹಸ್ಯವನ್ನು ಉಪದೇಶಿಸಲಾಗಿದೆ. ಸೃಷ್ಟಿಯ ಪ್ರತಿಯೊಂದು ಜೀವಿಯ ಮಿಲನ, ವಿಕಾಸ ಮತ್ತು ಪ್ರಕೃತಿಯ ಸಂಯೋಜನೆಯಲ್ಲಿ ಕಾಮನೆಗಳನ್ನು ಅಧ್ಯಾತ್ಮಿಕೀಕರಿಸಿ ಪರಬ್ರಹ್ಮನ ಉಪಾಸನೆ ಮಾಡುವುದೇ ವಾಮದೇವ್ಯ ಸಾಮೋಪಾಸನೆ.',
      'ಈ ಉಪಾಸನೆಯು ಭೋಗವನ್ನು ಯೋಗವನ್ನಾಗಿಸುವ, ಇಂದ್ರಿಯ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಪರಮಾತ್ಮನ ಕಡೆಗೆ ತಿರುಗಿಸುವ ಪವಿತ್ರ ವೈದಿಕ ಮಾರ್ಗವೆಂದು ಆದಿ ಶಂಕರರು ತಮ್ಮ ಭಾಷ್ಯದಲ್ಲಿ ಸ್ಪಷ್ಟಪಡಿಸಿದ್ದಾರೆ.'
    ],
    contentEn: [
      'Sage Vamadeva, the revered seer of the Rigveda’s fourth Mandala, was a supreme spiritual luminary. Due to accumulated meditative merits of past lives, he attained non-dual Brahman illumination while still resting within his mother’s womb.',
      'While mortals remain ensnared by the illusory chains of birth and death, Vamadeva roared with ecstatic realization: "I am not this perishable cage of flesh! I was Manu, I became the radiant Sun, I am the sage Kakshivan! I encompass all existence!"',
      'In the Chandogya Upanishad (2.13), the mystery of Vamadevya Samopasana is revealed. It teaches humanity how to sublimate primal desires, cosmic creation, and natural harmonies into contemplation of the Supreme Consciousness.',
      'Jagadguru Adi Shankaracharya clarifies in his venerable commentary that Vamadevya Samopasana transforms mundane worldly experience into divine Yoga, elevating human consciousness toward absolute freedom.'
    ],
    contentHi: [
      'ऋग्वेद के चतुर्थ मण्डल के द्रष्टा महर्षि वामदेव उपनिषदों के परम तत्त्ववेत्ता हैं। पूर्वजन्मों की साधना और तप के प्रभाव से उन्होंने अपनी माता के गर्भ में ही आत्मसाक्षात्कार प्राप्त कर लिया।',
      'साधारण जीव जन्म-मरण के मायापाश में बंधे रहते हैं, किंतु वामदेव ने गर्भ में ही उद्घोष किया: "मैं यह नाशवान् शरीर नहीं हूँ, मैं ही मनु बना, मैं ही सूर्य हुआ, मैं ही कक्षीवान् ऋषि हूँ! सम्पूर्ण चराचर जगत् मेरा ही स्वरूप है!"',
      'छांदोग्योपनिषद (२.१३) में वामदेव्य सामोपासना का रहस्य उपदेशित है। यह उपासना सिखाती है कि प्रकृति के प्रत्येक मिलन और सृष्टि के विकास को वासना नहीं, बल्कि परमात्मा की दिव्य लीला समझकर उपासना की जाए।',
      'आदि शंकर भगवत्पाद ने अपने भाष्य में स्पष्ट किया है कि यह उपासना भोग को योग में रूपांतरित करने का वैदिक मार्ग है।'
    ],
    keyLessons: [
      'ಆತ್ಮಜ್ಞಾನವು ಯಾವುದೇ ವಯಸ್ಸು ಅಥವಾ ಬಾಹ್ಯ ಕಾಲ-ದೇಶಗಳಿಗೆ ಕಟ್ಟುಬಿದ್ದಿಲ್ಲ.',
      'ಪ್ರಾಪಂಚಿಕ ಅನುಭವಗಳನ್ನು ಉಪಾಸನೆಯಾಗಿ ಪರಿವರ್ತಿಸುವುದೇ ಸಾಮೋಪಾಸನೆಯ ಗೂಢಾರ್ಥ.',
      'ಶಾಸ್ತ್ರಗಳ ಆಳವಾದ ಅಧ್ಯಯನವು ಅಜ್ಞಾನದ ಸಂಕೋಲೆಗಳನ್ನು ಮುರಿಯುತ್ತದೆ.'
    ],
    keyLessonsEn: [
      'Self-realization is beyond physical age, bodily limitations, or external constraints.',
      'Transforming sensory experience into divine contemplation is the heart of Samopasana.',
      'Authentic study of sacred scriptures shatters the shackles of spiritual ignorance.'
    ],
    keyLessonsHi: [
      'आत्मज्ञान किसी शारीरिक आयु अथवा बाह्य परिस्थितियों का मोहताज नहीं है।',
      'सांसारिक अनुभवों को उपासना में रूपांतरित करना ही सामोपासना का गूढ़ मर्म है।',
      'शास्त्रों का गहरा अध्ययन अज्ञान की बेड़ियों को तत्काल काट देता है।'
    ],
    sourceReference: 'ಐತರೇಯೋಪನಿಷತ್ (೨.೪) ಮತ್ತು ಛಾಂದೋಗ್ಯೋಪನಿಷತ್ (೨.೧೩)',
    sourceReferenceEn: 'Aitareya Upanishad (2.4) & Chandogya Upanishad (2.13)',
    sourceReferenceHi: 'ऐतरेयोपनिषद (२.४) एवं छांदोग्योपनिषद (२.१३)'
  },
  {
    id: 'saundarya-lahari-origin-kailasa',
    title: 'ಸೌಂದರ್ಯಲಹರಿಯ ಉಗಮ — ಕೈಲಾಸದ ರಹಸ್ಯ ದಿವ್ಯ ಶಾಸನ',
    titleEn: 'The Celestial Descent of Saundarya Lahari from Kailasa',
    titleHi: 'सौंदर्यलहरी का उद्गम — कैलास का रहस्यमय दिव्य शिलालेख',
    category: 'ಶಾಕ್ತ ತತ್ತ್ವ',
    categoryLabel: 'ಶ್ರೀವಿದ್ಯಾ ರಹಸ್ಯ',
    categoryLabelEn: 'Sri Vidya Esoteric',
    categoryLabelHi: 'श्रीविद्या रहस्य',
    image: '/images/devi.jpg',
    readTime: '೭ ನಿಮಿಷ ಓದು',
    readTimeEn: '7 min read',
    readTimeHi: '७ मिनट पठन',
    summary: 'ಕೈಲಾಸದಲ್ಲಿ ಪರಮೇಶ್ವರನಿಂದ ನೀಡಲ್ಪಟ್ಟ ದಿವ್ಯ ಮಂತ್ರಾತ್ಮಕ ಸ್ತೋತ್ರ. ನಂದಿಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಭಗವತಿ ಲಲಿತಾ ಪರಮೇಶ್ವರಿಯ ಪ್ರತ್ಯಕ್ಷ ದರ್ಶನದಿಂದ ಸಂಪೂರ್ಣಗೊಂಡ ಸೌಂದರ್ಯಲಹರಿ.',
    summaryEn: 'The celestial transmission of the hundred mystical verses from Mount Kailasa by Lord Shiva, and their completion through direct vision of Sri Lalita Parameshvari.',
    summaryHi: 'कैलास में परमेश्वर शिव द्वारा प्रदान किया गया दिव्य मंत्रात्मक स्तोत्र, नंदी की परीक्षा और भगवती ललिता के साक्षात् दर्शन से पूर्ण हुई सौंदर्यलहरी।',
    shloka: 'शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं न चेदेवं देवो न खलु कुशलः स्पन्दितुमपि ।',
    shlokaMeaning: 'ಶಿವನು ಪರಾಶಕ್ತಿಯೊಡನೆ ಕೂಡಿದಾಗ ಮಾತ್ರ ಸೃಷ್ಟಿ ಮಾಡಲು ಶಕ್ತನಾಗುತ್ತಾನೆ. ಆಕೆಯಿಲ್ಲದೆ ದೇವನು ಸ್ಪಂದಿಸಲೂ ಅಸಮರ್ಥನು.',
    shlokaMeaningEn: 'Shiva becomes capable of universal creation only when united with Divine Shakti; without Her, the Lord cannot even stir.',
    shlokaMeaningHi: 'शिव जब पराशक्ति से युक्त होते हैं, तभी विश्व-सृजन में समर्थ होते हैं; शक्ति के बिना वे स्पंदन करने में भी असमर्थ हैं।',
    content: [
      'ಶ್ರೀವಿದ್ಯೋಪಾಸನೆಯ ರಹಸ್ಯಗಳನ್ನು ಲೋಕೋದ್ಧಾರಕ್ಕಾಗಿ ತರಲು ಆದಿ ಶಂಕರರು ತಪೋಮಹಿಮೆಯಿಂದ ಕೈಲಾಸ ಪರ್ವತಕ್ಕೆ ತೆರಳಿದರು. ಅಲ್ಲಿ ಪರಮಶಿವ ಹಾಗೂ ಪಾರ್ವತೀ ದೇವಿಯನ್ನು ಸ್ತುತಿಸಿದರು.',
      'ಪ್ರಸನ್ನನಾದ ಪರಮೇಶ್ವರನು ಕೈಲಾಸದ ಮಣಿಮಯ ಗೋಡೆಯ ಮೇಲೆ ಕೆತ್ತಲ್ಪಟ್ಟಿದ್ದ ನೂರು ಶ್ಲೋಕಗಳ ಅದ್ಭುತ ಸ್ತೋತ್ರ ರತ್ನವನ್ನು ಶಂಕರರಿಗೆ ನೀಡಿದನು. ಆ ಸ್ತೋತ್ರವೇ ಜಗತ್ಕಲ್ಯಾಣಕಾರಕವಾದ ಸೌಂದರ್ಯಲಹರಿ.',
      'ಶಂಕರರು ಆ ಶ್ಲೋಕಗಳನ್ನು ಹೊತ್ತು ಭೂಲೋಕಕ್ಕೆ ಮರಳುವಾಗ, ಶಿವಗಣಾಧಿಪತಿಯಾದ ನಂದೀಶ್ವರನು ಮರ್ತ್ಯಲೋಕಕ್ಕೆ ಇಡೀ ರಹಸ್ಯ ಹೋಗಬಾರದೆಂದು ಕೆಳಗಿನ ಅರ್ಧ ಭಾಗವನ್ನು (೪೨ ರಿಂದ ೧೦೦ ಶ್ಲೋಕಗಳು) ಕಸಿದುಕೊಂಡನು. ಶಂಕರರ ಕೈಯಲ್ಲಿ ಕೇವಲ ಮೊದಲ ೪೧ ಶ್ಲೋಕಗಳು (ಆನಂದಲಹರಿ) ಉಳಿದವು.',
      'ಖಿನ್ನರಾದ ಶಂಕರರು ಜಗನ್ಮಾತೆ ಶ್ರೀಲಲಿತಾ ತ್ರಿಪುರಸುಂದರಿಯನ್ನು ಅನನ್ಯವಾಗಿ ಪ್ರಾರ್ಥಿಸಿದರು. ದೇವಿ ಪ್ರತ್ಯಕ್ಷಳಾಗಿ "ಮಗನೇ, ಆನಂದಲಹರಿಯು ಶಿವನಿಂದ ಬಂದಿತು; ಉಳಿದ ಭಾಗವನ್ನು ನೀನೇ ನನ್ನ ಸಾಕ್ಷಾತ್ ರೂಪವನ್ನು ವರ್ಣಿಸಿ ಪೂರ್ಣಗೊಳಿಸು" ಎಂದು ಆಶೀರ್ವದಿಸಿದಳು. ಶಂಕರರು ರಚಿಸಿದ ಆ ಭಾಗವೇ ಸೌಂದರ್ಯಲಹರಿಯಾಗಿ ಅಮರವಾಗಿದೆ.'
    ],
    contentEn: [
      'To bestow the supreme secret of Sri Vidya upon humanity, Jagadguru Adi Shankaracharya ascended through the power of yogic meditation to Mount Kailasa, eulogizing Shiva and Parvati.',
      'Pleased with his single-minded tapas, Lord Shiva gifted Shankara a celestial composition of one hundred verses engraved upon the lapis lazuli walls of Kailasa—the matchless Saundarya Lahari.',
      'As Shankara began carrying the verses back to the mortal world, Lord Nandi intervened, considering the mystery too sacred for unprepared minds, and reclaimed verses 42 through 100. Shankara was left with only the first 41 verses (Ananda Lahari).',
      'Distressed, Shankara surrendered to Mother Lalita Tripurasundari. The Divine Mother manifested in dazzling splendor and commanded: "My son, the first half came from Shiva; complete the remaining verses yourself by beholding My divine form directly!" Shankara composed the remainder under direct divine darshana.'
    ],
    contentHi: [
      'मानवता के कल्याण के लिए श्रीविद्या के रहस्यों को लाने हेतु आदि शंकराचार्य योगबल से कैलास पर्वत पर पहुंचे। वहां उन्होंने भगवान शिव और माता पार्वती की स्तुति की।',
      'प्रसन्न होकर देवाधिदेव शिव ने कैलास की मणियों से जड़ी दीवारों पर उत्कीर्ण सौ श्लोकों का दिव्य स्तोत्र-रत्न शंकराचार्य को दिया—वही सौंदर्यलहरी है।',
      'जब शंकर उस स्तोत्र को लेकर पृथ्वी पर लौटने लगे, तब नंदी ने यह सोचकर कि यह परम रहस्य अपात्रों के हाथ न लगे, श्लोक ४२ से १०० तक का भाग वापस ले लिया। शंकर के हाथ में केवल प्रथम ४१ श्लोक (आनंदलहरी) बचे।',
      'व्याकुल होकर शंकर ने जगन्माता ललिता त्रिपुरसुंदरी की प्रार्थना की। देवी ने साक्षात् प्रकट होकर कहा: "पुत्र, आनंदलहरी शिव से मिली; शेष भाग को तुम मेरे साक्षात् स्वरूप का दर्शन करके पूर्ण करो!" तब शंकर ने दिव्य दर्शन के आधार पर सौंदर्यलहरी को पूर्ण किया।'
    ],
    keyLessons: [
      'ಶಿವ ಮತ್ತು ಶಕ್ತಿ ಬೇರೆ ಬೇರೆಯಲ್ಲ, ಅವರು ಒಂದೇ ಪರಬ್ರಹ್ಮದ ಎರಡು ರೂಪಗಳು.',
      'ಸೌಂದರ್ಯಲಹರಿಯ ಪ್ರತಿಯೊಂದು ಶ್ಲೋಕವೂ ಸಿದ್ಧ ಮಂತ್ರ ಸ್ವರೂಪಿಯಾಗಿದೆ.',
      'ತಂತ್ರ, ಮಂತ್ರ ಮತ್ತು ಅದ್ವೈತ ಜ್ಞಾನದ ಅದ್ಭುತ ಸಂಗಮವೇ ಶ್ರೀವಿದ್ಯೆ.'
    ],
    keyLessonsEn: [
      'Shiva and Shakti are not separate; they are complementary dimensions of the One Brahman.',
      'Every single verse of Saundarya Lahari embodies a potent, living mantra.',
      'Sri Vidya represents the supreme harmony of Tantra, Mantra, and Advaita realization.'
    ],
    keyLessonsHi: [
      'शिव और शक्ति अलग नहीं हैं, वे एक ही परब्रह्म के दो अविनाशी रूप हैं।',
      'सौंदर्यलहरी का प्रत्येक श्लोक एक सिद्ध मंत्र का स्वरूप है।',
      'तंत्र, मंत्र और अद्वैत ज्ञान का पावन संगम ही श्रीविद्या है।'
    ],
    sourceReference: 'ಲಕ್ಷ್ಮೀಧರ ಭಾಷ್ಯ — ಸೌಂದರ್ಯಲಹರೀ ಪೀಠಿಕಾ',
    sourceReferenceEn: 'Lakshmidhara Bhashya — Introduction to Saundarya Lahari',
    sourceReferenceHi: 'लक्ष्मीधर भाष्य — सौंदर्यलहरी पीठिका'
  },
  {
    id: 'mandana-mishra-shastrartha',
    title: 'ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಮತ್ತು ಮಂಡನ ಮಿಶ್ರರ ಐತಿಹಾಸಿಕ ಶಾಸ್ತ್ರಾರ್ಥ',
    titleEn: 'Shankaracharya & Mandana Mishra: The Great Shastrartha',
    titleHi: 'आदि शंकराचार्य व मण्डन मिश्र का ऐतिहासिक शास्त्रार्थ',
    category: 'ಶಾಂಕರ ಲೀಲಾಮೃತ',
    categoryLabel: 'ಶಾಂಕರ ಚರಿತ್ರೆ',
    categoryLabelEn: 'Shankara Charita',
    categoryLabelHi: 'शंकर चरित',
    image: '/images/shankaracharya.jpg',
    readTime: '೮ ನಿಮಿಷ ಓದು',
    readTimeEn: '8 min read',
    readTimeHi: '८ मिनट पठन',
    summary: 'ಕರ್ಮಕಾಂಡದ ಅಗ್ರಗಣ್ಯ ವಿದ್ವಾಂಸ ಮಂಡನ ಮಿಶ್ರರು ಹಾಗೂ ಜ್ಞಾನಕಾಂಡದ ಪ್ರತಿಪಾದಕ ಶ್ರೀ ಆದಿ ಶಂಕರರ ನಡುವೆ ಮಹಿಷ್ಮತಿ ನಗರಿಯಲ್ಲಿ ನಡೆದ ಜಗತ್ಪ್ರಸಿದ್ಧ ಶಾಸ್ತ್ರ ಸಂವಾದ. ಸರಸ್ವತೀ ಸ್ವರೂಪಿಣಿ ಉಭಯಭಾರತಿಯವರ ಪವಿತ್ರ ತೀರ್ಪು.',
    summaryEn: 'The historic debate at Mahishmati between Mandana Mishra (Karma Kanda) and Adi Shankaracharya (Jnana Kanda), judged impartially by Ubhaya Bharati with flower garlands.',
    summaryHi: 'माहिष्मती में कर्मकांड के प्रकांड विद्वान मण्डन मिश्र और ज्ञानकांड के प्रतिपादक आदि शंकर के बीच हुआ प्रसिद्ध शास्त्रार्थ और उभयभारती का निष्पक्ष निर्णय।',
    shloka: 'स्वस्त्यस्तु विश्वस्य खलः प्रसीदतां ध्यायन्तु भूतानि शिवं मिथो धिया ।',
    shlokaMeaning: 'ಸಕಲ ವಿಶ್ವಕ್ಕೂ ಮಂಗಳವಾಗಲಿ, ದುರ್ಜನರು ಸಜ್ಜನರಾಗಲಿ, ಸಮಸ್ತ ಜೀವಿಗಳು ಪರಸ್ಪರ ಹಿತವನ್ನು ಬಯಸಲಿ.',
    shlokaMeaningEn: 'May auspiciousness be upon the whole universe; may the wicked find peace and benevolence; may all beings seek each other’s welfare.',
    shlokaMeaningHi: 'सारे संसार का कल्याण हो, दुष्टों में सद्बुद्धि आए और सभी प्राणी परस्पर मंगल की भावना रखें।',
    content: [
      'ಸನಾತನ ಧರ್ಮದ ಪುನರುತ್ಥಾನಕ್ಕಾಗಿ ಸಮಗ್ರ ಭಾರತ ಪರಿಕ್ರಮಣ ಮಾಡುತ್ತಿದ್ದ ಜಗದ್ಗುರು ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಮಹಿಷ್ಮತಿ ನಗರವನ್ನು ತಲುಪಿದರು. ಅಲ್ಲಿ ಪೂರ್ವಮೀಮಾಂಸಾ ದರ್ಶನದ ಪರಮ ವಿದ್ವಾಂಸರಾದ ಮಂಡನ ಮಿಶ್ರರು ನೆಲೆಸಿದ್ದರು. ಅವರ ಮನೆಯಲ್ಲಿ ಗಿಳಿಗಳೂ ಸಹ ವೇದಮಂತ್ರಗಳ ಶಾಸ್ತ್ರೀಯ ಚರ್ಚೆಯನ್ನು ಆಡುತ್ತಿದ್ದವು ಎಂಬ ಖ್ಯಾತಿ ಇತ್ತು.',
      'ಶಂಕರಾಚಾರ್ಯರು ಕರ್ಮಕ್ಕಿಂತ ಜ್ಞಾನವೇ ಮುಕ್ತಿಗೆ ನೇರ ಸಾಧನವೆಂಬ ಉಪನಿಷತ್ತಿನ ಅದ್ವೈತ ಸಿದ್ಧಾಂತವನ್ನು ಮುಂದಿಟ್ಟರು. ಮಂಡನ ಮಿಶ್ರರು ವೇದೋಕ್ತ ಯಜ್ಞಯಾಗಾದಿ ಕರ್ಮಗಳೇ ಪರಮ ಪುರುಷಾರ್ಥವೆಂದು ವಾದಿಸಿದರು. ಇಬ್ಬರೂ ಮಹಾನ್ ವಿದ್ವಾಂಸರು ಶಾಸ್ತ್ರಾರ್ಥ ಚರ್ಚೆಗೆ ಸಿದ್ಧರಾದರು. ಸೋತವರು ಗೆದ್ದವರ ಶಿಷ್ಯರಾಗಿ ಸನ್ಯಾಸ ಅಥವಾ ಗೃಹಸ್ಥಾಶ್ರಮ ಸ್ವೀಕರಿಸಬೇಕೆಂಬ ಒಪ್ಪಂದವಾಯಿತು.',
      'ಈ ಮಹಾಸಭೆಗೆ ನ್ಯಾಯಾಧೀಶರಾಗಿ ಮಂಡನ ಮಿಶ್ರರ ಪತ್ನಿ, ಸಾಕ್ಷಾತ್ ಶಾರದಾಂಬೆಯ ಅವತಾರವೆನಿಸಿದ ವಿದುಷಿ ಉಭಯಭಾರತಿಯವರನ್ನು ನೇಮಿಸಲಾಯಿತು. ಅವರು ಇಬ್ಬರ ಕೊರಳಿಗೂ ಒಂದೊಂದು ತಾಜಾ ಹೂಮಾಲೆಯನ್ನು ಹಾಕಿ: "ಯಾರ ಮಾಲೆಯು ಮೊದಲು ಬಾಡುವುದೋ ಅವರು ಪರಾಜಿತರಾದಂತೆ" ಎಂದು ತೀರ್ಮಾನಿಸಿದರು.',
      'ದಿನಗಳ ಕಾಲ ತೀವ್ರ ತರ್ಕ, ಶ್ರುತಿ ಪ್ರಮಾಣ ಮತ್ತು ಗಹನ ವಿಚಾರಗಳ ಮಂಥನ ನಡೆಯಿತು. ಅಂತಿಮವಾಗಿ ಮಂಡನ ಮಿಶ್ರರ ಹೂಮಾಲೆ ಬಾಡಿತು. ಮಂಡನ ಮಿಶ್ರರು ವಿನಮ್ರರಾಗಿ ಶಂಕರರ ಶಿಷ್ಯತ್ವವನ್ನು ಸ್ವೀಕರಿಸಿ \'ಸುರೇಶ್ವರಾಚಾರ್ಯ\' ಎಂಬ ಸನ್ಯಾಸ ನಾಮದಿಂದ ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠದ ಪ್ರಥಮ ಪೀಠಾಧಿಪತಿಗಳಾದರು.'
    ],
    contentEn: [
      'During his historic spiritual traversal of Bharat, Jagadguru Adi Shankaracharya arrived at Mahishmati, the seat of the greatest scholar of Purva Mimamsa, Mandana Mishra.',
      'Shankara championed the Upanishadic Advaita truth: Jnana (Self-knowledge) alone leads directly to Moksha. Mandana Mishra upheld the supremacy of Vedic ritualistic sacrifices (Karma). They engaged in an epochal debate.',
      'Mandana Mishra’s scholarly wife, Ubhaya Bharati—revered as an incarnation of Saraswati—served as the impartial judge. She placed a fresh garland around both contenders: the one whose flowers wilted first would concede defeat.',
      'After days of relentless philosophical dialectics and Vedic citations, Mandana Mishra’s garland wilted. Graciously accepting truth over ego, he became Shankara’s foremost disciple, ordained as Sureshwaracharya, the first Peethadhipati of Sringeri Sharada Peetham.'
    ],
    contentHi: [
      'सनातन धर्म की पुनर्स्थापना हेतु भारत-परिक्रमा करते हुए आदि शंकराचार्य माहिष्मती पहुंचे। वहां पूर्वमीमांसा के प्रकांड आचार्य मण्डन मिश्र निवास करते थे।',
      'शंकराचार्य ने प्रतिपादित किया कि केवल ज्ञान ही मोक्ष का सीधा साधन है, जबकि मण्डन मिश्र ने कर्मकांड को ही सर्वोपरि माना। दोनों में ऐतिहासिक शास्त्रार्थ हुआ।',
      'मण्डन मिश्र की विदुषी पत्नी उभयभारती को निर्णायक चुना गया। उन्होंने दोनों के गले में ताजे फूलों की माला डाली और कहा: "जिसकी माला पहले मुरझाएगी, वह पराजित होगा।"',
      'अनेक दिनों के गंभीर वाद-विवाद के उपरांत मण्डन मिश्र की माला मुरझा गई। उन्होंने सहर्ष सत्य स्वीकार किया और संन्यास लेकर ‘सुरेश्वराचार्य’ नाम से शृंगेरी शारदा पीठ के प्रथम पीठाधीश्वर बने।'
    ],
    keyLessons: [
      'ಜ್ಞಾನ ಹಾಗೂ ಸತ್ಯದ ಶೋಧದಲ್ಲಿ ಅಹಂಕಾರಕ್ಕೆ ಸ್ಥಾನವಿಲ್ಲ.',
      'ಶಾಸ್ತ್ರೀಯ ಸಂವಾದವು ವಿರೋಧಕ್ಕಾಗಿ ಅಲ್ಲ, ಆತ್ಮೋದ್ಧಾರಕ್ಕಾಗಿ.',
      'ಉಭಯಭಾರತಿಯವರ ನಿಷ್ಪಕ್ಷಪಾತ ತೀರ್ಪು ಪ್ರಾಚೀನ ಭಾರತದ ಸ್ತ್ರೀ ವಿದ್ವತ್ತಿಗೆ ಸಾಕ್ಷಿ.'
    ],
    keyLessonsEn: [
      'In the pursuit of supreme Truth, there is no place for personal pride or dogma.',
      'Scriptural debate is not meant to vanquish an opponent, but to liberate the soul.',
      'Ubhaya Bharati’s impartial judgment stands as eternal proof of ancient India’s revered female scholarship.'
    ],
    keyLessonsHi: [
      'सत्य और ज्ञान की खोज में अहंकार के लिए कोई स्थान नहीं है।',
      'शास्त्रार्थ पराजित करने के लिए नहीं, अपितु आत्मोद्धार के लिए होता है।',
      'उभयभारती का निष्पक्ष निर्णय प्राचीन भारत की उच्च विदुषी परंपरा का प्रमाण है।'
    ],
    sourceReference: 'ಮಾಧವೀಯ ಶಂಕರ ವಿಜಯ (ಅಧ್ಯಾಯ ೮)',
    sourceReferenceEn: 'Madhaviya Shankara Vijaya (Chapter 8)',
    sourceReferenceHi: 'माधवीय शंकर विजय (अध्याय ८)'
  },
  {
    id: 'kashi-chandala-manisha-panchakam',
    title: 'ಕಾಶಿಯ ಚಂಡಾಲ ಮತ್ತು ಮನೀಷಾಪಂಚಕಮ್ — ಪರಮ ಅದ್ವೈತ ದರ್ಶನ',
    titleEn: 'The Kashi Encounter & The Birth of Manisha Panchakam',
    titleHi: 'काशी का चांडाल और मनीषापंचकम् — परम अद्वैत दर्शन',
    category: 'ವೇದಾಂತ ತತ್ತ್ವ',
    categoryLabel: 'ವೇದಾಂತ ದರ್ಶನ',
    categoryLabelEn: 'Vedanta Philosophy',
    categoryLabelHi: 'वेदांत दर्शन',
    image: '/images/shankaracharya.jpg',
    readTime: '೬ ನಿಮಿಷ ಓದು',
    readTimeEn: '6 min read',
    readTimeHi: '६ मिनट पठन',
    summary: 'ಪವಿತ್ರ ಕಾಶಿ ನಗರಿಯಲ್ಲಿ ಆದಿ ಶಂಕರರಿಗೆ ಎದುರಾದ ಚಂಡಾಲ ರೂಪದ ಪರಮಶಿವ. ಸರ್ವ ಜೀವಿಗಳಲ್ಲೂ ಒಂದೇ ಬ್ರಹ್ಮಚೈತನ್ಯವಿದೆ ಎಂಬ ಪರಮ ಸತ್ಯವನ್ನು ಸ್ಮರಿಸಿ ಶಂಕರರು ರಚಿಸಿದ ದಿವ್ಯ ಸ್ತೋತ್ರ ಮನೀಷಾಪಂಚಕಮ್.',
    summaryEn: 'Shiva appears as an outcaste in Kashi with four hounds representing the Vedas, reminding Shankara of the undivided Atman and giving birth to Manisha Panchakam.',
    summaryHi: 'पवित्र काशी में आदि शंकर के समक्ष चांडाल रूप में प्रकट हुए भगवान शिव। सर्वत्र एक ही आत्मतत्त्व व्याप्त है—इस सत्य पर रचित मनीषापंचकम्।',
    shloka: 'जाग्रत्स्वप्नसुषुप्तिषु स्फुटतरा या संविदुज्जृम्भते या ब्रह्मादिपिपीलिकान्ततनुषु प्रोता जगत्साक्षिणी ।',
    shlokaMeaning: 'ಜಾಗ್ರತ್, ಸ್ವಪ್ನ, ಸುಷುಪ್ತಿ ಅವಸ್ಥೆಗಳಲ್ಲಿ ಬೆಳಗುವ ಹಾಗೂ ಬ್ರಹ್ಮನಿಂದ ಹಿಡಿದು ಇರುವೆಯವರೆಗೂ ವ್ಯಾಪಿಸಿರುವ ಸಾಕ್ಷಿ ಚೈತನ್ಯವೇ ನಾನು.',
    shlokaMeaningEn: 'I am that witness Consciousness which shines forth in waking, dream, and deep sleep, pervading all beings from Brahma down to an ant.',
    shlokaMeaningHi: 'जाग्रत, स्वप्न और सुषुप्ति में जो नित्य प्रकाशित है, ब्रह्मा से चींटी तक सबमें जो साक्षी चैतन्य है, वही मैं हूँ।',
    content: [
      'ಒಮ್ಮೆ ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಕಾಶಿಯ ಗಂಗಾನದಿಯಲ್ಲಿ ಪ್ರಾತಃಸ್ನಾನ ಮುಗಿಸಿ ಶಿಷ್ಯರೊಂದಿಗೆ ವಿಶ್ವನಾಥ ದರ್ಶನಕ್ಕೆ ತೆರಳುತ್ತಿದ್ದರು. ದಾರಿಯಲ್ಲಿ ನಾಲ್ಕು ನಾಯಿಗಳೊಂದಿಗೆ ಒಬ್ಬ ಚಂಡಾಲನು ಎದುರಾಗಿ ಬರುತ್ತಿದ್ದನು.',
      'ಶಿಷ್ಯರು ಸಂಪ್ರದಾಯದಂತೆ "ದೂರ ಹೋಗು, ದಾರಿ ಬಿಡು" ಎಂದು ಕೂಗಿದರು. ಆಗ ಆ ಚಂಡಾಲನು ಶಾಂತಚಿತ್ತನಾಗಿ ನಗುತ್ತಾ ಶಂಕರರನ್ನುದ್ದೇಶಿಸಿ ಪ್ರಶ್ನಿಸಿದನು: "ಹೇ ಯತಿವರೇ, ನೀವು ದೂರ ಸರಿಯಲು ಹೇಳುತ್ತಿರುವುದು ಯಾರಿಗೆ? ಅನ್ನಮಯವಾದ ಈ ದೇಹಕ್ಕೋ ಅಥವಾ ಸರ್ವವ್ಯಾಪಿಯಾದ ಚೈತನ್ಯ ಆತ್ಮಕ್ಕೋ? ಮಣ್ಣಿನ ಪಾತ್ರೆಯೊಳಗಿನ ಆಕಾಶಕ್ಕೂ, ಬಂಗಾರದ ಪಾತ್ರೆಯೊಳಗಿನ ಆಕಾಶಕ್ಕೂ ಭೇದವಿದೆಯೇ?"',
      'ಈ ಗಂಭೀರ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿದ ಕೂಡಲೇ ಶಂಕರಾಚಾರ್ಯರು ಸ್ತಬ್ಧರಾದರು. ಸಾಕ್ಷಾತ್ ವಿಶ್ವನಾಥನೇ ನಾಲ್ಕು ವೇದಗಳನ್ನು ನಾಯಿಗಳ ರೂಪದಲ್ಲಿ ತಂದು ತಮಗೆ ಪರೀಕ್ಷೆ ಒಡ್ಡಿದ್ದಾನೆಂದು ಅರಿತರು. ಶಂಕರರು ಭಕ್ತಿಯಿಂದ ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕರಿಸಿದರು.',
      'ಅಲ್ಲಿಯೇ ತಕ್ಷಣವೇ ಐದು ಅಮೃತವಾಣಿಯ ಶ್ಲೋಕಗಳನ್ನು ರಚಿಸಿದರು, ಅದೇ "ಮನೀಷಾಪಂಚಕಮ್". "ಯಾರಿಗೆ ಸರ್ವಭೂತಗಳಲ್ಲೂ ಆತ್ಮೈಕ್ಯ ಭಾವನೆ ದೃಢವಾಗಿದೆಯೋ, ಆತನು ಚಂಡಾಲನಾಗಿರಲಿ ಅಥವಾ ಬ್ರಾಹ್ಮಣನಾಗಿರಲಿ, ಆತನೇ ನನ್ನ ಪರಮ ಗುರು" ಎಂದು ಸಾರಿದರು.'
    ],
    contentEn: [
      'Walking along the sacred ghats of Varanasi toward Kashi Vishvanatha Temple after his morning bath in the Ganga, Shankara encountered an outcaste accompanied by four dogs.',
      'The disciples shouted: "Move aside, give way!" The stranger smiled serenely and asked: "O noble ascetic, what are you asking to move away? This physical body of clay or the all-pervading Atman? Does the sky inside a clay pot differ from the sky inside a golden vessel?"',
      'Hearing this profound Vedantic inquiry, Shankara paused in awe. He recognized Lord Vishvanatha Himself testing him, accompanied by the four Vedas as hounds.',
      'Prostrating in supreme reverence, Shankara uttered the celebrated five verses of Manisha Panchakam: "He who sees the same divine Consciousness in all beings, be he a Brahmin or an outcaste, he alone is my Guru!"'
    ],
    contentHi: [
      'काशी के मणिकर्णिका घाट पर प्रातःस्नान के उपरांत जब आदि शंकर विश्वनाथ मंदिर जा रहे थे, तब मार्ग में चार श्वानों के साथ एक चांडाल सामने आया।',
      'शिष्यों ने कहा: "दूर हटो, मार्ग छोड़ो!" उस चांडाल ने शांत भाव से पूछा: "हे संन्यासी, आप किसे दूर हटने को कह रहे हैं? इस अन्नमय देह को या सर्वव्यापी आत्मतत्त्व को? क्या मिट्टी के घड़े का आकाश सोने के घड़े के आकाश से भिन्न है?"',
      'इस प्रश्न को सुनकर शंकराचार्य स्तब्ध रह गए। वे समझ गए कि साक्षात् भगवान विश्वनाथ चार वेदों के साथ उनकी परीक्षा ले रहे हैं। उन्होंने साष्टांग प्रणाम किया।',
      'उसी क्षण शंकर ने ‘मनीषापंचकम्’ की रचना की और कहा: "जिसकी बुद्धि में समस्त प्राणियों के प्रति अद्वैत भाव स्थिर है, वह चांडाल हो या ब्राह्मण, वही मेरा परम गुरु है!"'
    ],
    keyLessons: [
      'ಆತ್ಮತತ್ತ್ವಕ್ಕೆ ಜಾತಿ, ವರ್ಣ, ಲಿಂಗಗಳ ಭೇದವಿಲ್ಲ.',
      'ಬಾಹ್ಯ ವೇಷಭೂಷಣಗಳಿಗಿಂತ ಆಂತರಿಕ ಜ್ಞಾನ ಮತ್ತು ಬ್ರಹ್ಮಸಾಕ್ಷಾತ್ಕಾರವೇ ಶ್ರೇಷ್ಠ.',
      'ನಿಜವಾದ ಜ್ಞಾನಿಯು ಎಲ್ಲ ಜೀವಿಗಳಲ್ಲೂ ಪರಮಾತ್ಮನನ್ನೇ ಕಾಣುತ್ತಾನೆ.'
    ],
    keyLessonsEn: [
      'The Atman transcends all external distinctions of caste, birth, and appearance.',
      'Internal Self-realization is infinitely superior to mere ritualistic propriety.',
      'The true sage beholds the undivided Divine dwelling equally in every being.'
    ],
    keyLessonsHi: [
      'आत्मतत्त्व जाति, वर्ण अथवा बाह्य भेदों से सर्वथा परे है।',
      'बाह्य वेशभूषा की तुलना में आंतरिक ब्रह्मज्ञान ही वास्तविक श्रेष्ठता है।',
      'सच्चा ज्ञानी सभी प्राणियों में एक ही परमात्मा का दर्शन करता है।'
    ],
    sourceReference: 'ಶಂಕರ ದಿಗ್ವಿಜಯ ಹಾಗೂ ಮನೀಷಾಪಂಚಕ ಭಾಷ್ಯ',
    sourceReferenceEn: 'Shankara Digvijaya & Manisha Panchakam Bhashya',
    sourceReferenceHi: 'शंकर दिग्विजय एवं मनीषापंचक भाष्य'
  },
  {
    id: 'kanakadhara-golden-amla',
    title: 'ಕನಕಧಾರಾ ಸ್ತೋತ್ರ ಮತ್ತು ಬಡ ಬ್ರಾಹ್ಮಣ ಸ್ತ್ರೀಯ ನೆಲ್ಲಿಕಾಯಿ ದಾನ',
    titleEn: 'Kanakadhara Stotram & The Golden Gooseberry',
    titleHi: 'कनकधारा स्तोत्र और निर्धन स्त्री का आंवला दान',
    category: 'ಭಕ್ತಿ ಹಾಗೂ ಕಾರುಣ್ಯ',
    categoryLabel: 'ಭಕ್ತಿ ಲೀಲೆ',
    categoryLabelEn: 'Devotional Grace',
    categoryLabelHi: 'भक्ति लीला',
    image: '/images/devi.jpg',
    readTime: '೫ ನಿಮಿಷ ಓದು',
    readTimeEn: '5 min read',
    readTimeHi: '५ मिनट पठन',
    summary: 'ಬಾಲ ಶಂಕರರು ಭಿಕ್ಷಾಟನೆಗೆ ಹೋದಾಗ ಕಡುಬಡತನದಲ್ಲೂ ತನ್ನಲ್ಲಿದ್ದ ಕೊನೆಯ ಒಣ ನೆಲ್ಲಿಕಾಯಿಯನ್ನು ಸಂತೋಷದಿಂದ ಸಮರ್ಪಿಸಿದ ತಾಯಿಯ ಅಪ್ರತಿಮ ತ್ಯಾಗ ಮತ್ತು ಕನಕಧಾರೆಯ ವೃಷ್ಟಿ.',
    summaryEn: 'The touching tale of the destitute woman who offered her last dried amla to young Shankara, invoking Mahalakshmi’s torrential shower of golden fruits.',
    summaryHi: 'बाल शंकर को अत्यंत निर्धनता में भी अपना अंतिम सूखा आंवला समर्पित करने वाली माता का निस्वार्थ त्याग और कनकधारा की स्वर्ण वर्षा।',
    shloka: 'अङ्गं हरेः पुलकभूषणमाश्रयन्ती भृङ्गाङ्गनेव मुकुलाभरणं तमालम् ।',
    shlokaMeaning: 'ತಮಾಲ ವೃಕ್ಷವನ್ನು ಆಶ್ರಯಿಸುವ ದುಂಬಿಯಂತೆ ಶ್ರೀಹರಿಯ ಪುಲಕಾಂಕಿತ ಶರೀರವನ್ನು ಆಶ್ರಯಿಸಿರುವ ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿಯು ನಮಗೆ ಮಂಗಳವನ್ನುಂಟುಮಾಡಲಿ.',
    shlokaMeaningEn: 'As the dark bee hovers around the blossoming Tamala tree, so does Mahalakshmi grace the thrilled body of Hari; may She shower auspiciousness upon us.',
    shlokaMeaningHi: 'तमाल वृक्ष पर मंडराने वाली भ्रमरी की भांति श्रीहरि के वक्षःस्थल को सुशोभित करने वाली महालक्ष्मी हम पर कृपा करें।',
    content: [
      'ಬಾಲಕ ಶಂಕರರು ಉಪನಯನದ ನಂತರ ಗುರುಕುಲ ಪದ್ಧತಿಯಂತೆ ಪ್ರತಿದಿನ ಊರಿನಲ್ಲಿ ಭಿಕ್ಷಾಟನೆ ಮಾಡುತ್ತಿದ್ದರು. ಒಂದು ದಿನ ಅವರು ಅತ್ಯಂತ ಶಿಥಿಲವಾದ, ಬಡತನದ ಒಂದು ಸಣ್ಣ ಗುಡಿಸಲಿನ ಮುಂದೆ ನಿಂತು "ಭವತಿ ಭಿಕ್ಷಾಂದೇಹಿ" ಎಂದು ನುಡಿದರು.',
      'ಆ ಮನೆಯಲ್ಲಿದ್ದ ಬ್ರಾಹ್ಮಣ ಸ್ತ್ರೀಯು ಬಹಳ ಕಷ್ಟದಲ್ಲಿದ್ದಳು. ಮನೆಯಲ್ಲಿ ತಿನ್ನಲು ಒಂದು ಕಣ ಧಾನ್ಯವೂ ಇರಲಿಲ್ಲ. ಆದರೆ ಮನೆ ಬಾಗಿಲಿಗೆ ಬಂದ ತೇಜಸ್ವಿ ಬ್ರಹ್ಮಚಾರಿಯನ್ನು ಬರಿಗೈಯಲ್ಲಿ ಕಳುಹಿಸಲು ಆಕೆಯ ಮನಸ್ಸು ಒಪ್ಪಲಿಲ್ಲ. ಮನೆಯ ಮೂಲೆ ಮೂಲೆಯನ್ನು ಹುಡುಕಿದಾಗ ಒಂದು ಒಣಗಿದ ನೆಲ್ಲಿಕಾಯಿ ಸಿಕ್ಕಿತು.',
      'ಆಕೆ ಕಣ್ಣೀರು ತುಂಬಿದ ಕಣ್ಣುಗಳಿಂದ ಬಾಲ ಶಂಕರರ ಜೋಳಿಗೆಯಲ್ಲಿ ಆ ನೆಲ್ಲಿಕಾಯಿಯನ್ನು ಸಮರ್ಪಿಸಿ ಕೈಮುಗಿದಳು. ಆಕೆಯ ನಿಸ್ವಾರ್ಥ ತಾಯ್ತನ ಮತ್ತು ಭಕ್ತಿಯನ್ನು ಕಂಡು ಶಂಕರರ ಕರುಳು ಕರಗಿತು.',
      'ತಕ್ಷಣವೇ ಶಂಕರರು ಜಗನ್ಮಾತೆ ಮಹಾಲಕ್ಷ್ಮಿಯನ್ನು ಧ್ಯಾನಿಸಿ ಮಧುರವಾದ "ಕನಕಧಾರಾ ಸ್ತೋತ್ರ"ವನ್ನು ಹಾಡಲಾರಂಭಿಸಿದರು. ಅವರ ಭಕ್ತಿಗೆ ಪ್ರತ್ಯಕ್ಷಳಾದ ಮಹಾಲಕ್ಷ್ಮಿಯು ಆ ಬಡ ಸ್ತ್ರೀಯ ಮನೆಯ ಮೇಲೆ ಬಂಗಾರದ ನೆಲ್ಲಿಕಾಯಿಗಳ ಮಳೆಯನ್ನೇ ಸುರಿಸಿದಳು.'
    ],
    contentEn: [
      'In accordance with brahmacharya discipline, young Shankara went to a modest hut seeking alms, calling out: "Bhavati Bhiksham Dehi."',
      'Inside lived an impoverished woman who had not eaten for days. Finding nothing in her barren kitchen, she searched weeping and found only a solitary dried gooseberry (amla).',
      'Moved by maternal love, she placed that humble fruit into Shankara’s bowl with tears of joy. Overwhelmed by her unselfish sacrifice, Shankara composed the Kanakadhara Stotra on the spot, imploring Goddess Mahalakshmi.',
      'Goddess Lakshmi appeared and, responding to Shankara’s prayers for the poor woman’s pure heart, showered a downpour of solid golden amlas upon the hut.'
    ],
    contentHi: [
      'बालक शंकर भिक्षाटन के लिए एक जीर्ण-शीर्ण झोपड़ी के द्वार पर खड़े हुए और बोले: "भवती भिक्षां देहि।"',
      'उस घर में रहने वाली निर्धन स्त्री के पास अन्न का एक दाना भी नहीं था। उस तेजस्वी बालक को खाली हाथ लौटाना उसे स्वीकार न हुआ। उसने घर में खोजा तो एक सूखा आंवला मिला।',
      'सजल नेत्रों से उसने वही अंतिम आंवला शंकर की झोली में डाल दिया। उसके निष्काम त्याग को देखकर शंकर का हृदय द्रवित हो उठा।',
      'शंकर ने उसी क्षण भगवती महालक्ष्मी की स्तुति में ‘कनकधारा स्तोत्र’ का गान किया। माता लक्ष्मी ने प्रसन्न होकर उस कुटिया पर सोने के आंवलों की वर्षा कर दी।'
    ],
    keyLessons: [
      'ದಾನದಲ್ಲಿ ಮುಖ್ಯವಾದುದು ವಸ್ತುವಿನ ಬೆಲೆಯಲ್ಲ, ಕೊಡುವ ಹೃದಯದ ಪರಿಶುದ್ಧತೆ.',
      'ಆರ್ತತೆಯಿಂದ ಬೇಡಿದಾಗ ಜಗನ್ಮಾತೆಯ ಕೃಪೆ ಕ್ಷಣಮಾತ್ರದಲ್ಲಿ ಒಲಿಯುತ್ತದೆ.',
      'ಅನನ್ಯ ಭಕ್ತಿಯು ಜನ್ಮಾಂತರಗಳ ದಾರಿದ್ರ್ಯವನ್ನು ನಿವಾರಿಸುತ್ತದೆ.'
    ],
    keyLessonsEn: [
      'The worth of charity lies not in material value, but in the purity of the giving heart.',
      'Divine Mother showers Her grace instantly upon selfless devotion.',
      'Selfless surrender eradicates lifetimes of spiritual and worldly poverty.'
    ],
    keyLessonsHi: [
      'दान में वस्तु का मूल्य नहीं, देने वाले के हृदय की पवित्रता महत्त्वपूर्ण है।',
      'सच्ची प्रार्थना पर जगन्माता की कृपा क्षणमात्र में बरसती है।',
      'निस्वार्थ भक्ति जन्म-जन्मांतरों की दरिद्रता को मिटा देती है।'
    ],
    sourceReference: 'ಪುರಾಣ ಪ್ರಸಿದ್ಧ ಶಂಕರ ಚರಿತಾಮೃತ',
    sourceReferenceEn: 'Puranic Shankara Charitamrita',
    sourceReferenceHi: 'पौराणिक शंकर चरितामृत'
  },
  {
    id: 'totakacharya-guru-bhakti',
    title: 'ತೋಟಕಾಚಾರ್ಯರ ಅಚಲ ಗುರುಭಕ್ತಿ ಮತ್ತು ತೋಟಕಾಷ್ಟಕಮ್',
    titleEn: 'Totakacharya: The Pinnacle of Devoted Guru Bhakti',
    titleHi: 'तोटकाचार्य की अनन्य गुरुभक्ति और तोटकाष्टकम्',
    category: 'ಗುರುಪರಂಪರೆ',
    categoryLabel: 'ಗುರು ಕೃಪೆ',
    categoryLabelEn: 'Guru Parampara',
    categoryLabelHi: 'गुरु कृपा',
    image: '/images/shankaracharya.jpg',
    readTime: '೬ ನಿಮಿಷ ಓದು',
    readTimeEn: '6 min read',
    readTimeHi: '६ मिनट पठन',
    summary: 'ಇತರ ಶಿಷ್ಯರಿಂದ ಶಾಸ್ತ್ರಜ್ಞಾನವಿಲ್ಲದವನೆಂದು ಪರಿಗಣಿಸಲ್ಪಟ್ಟ ಗಿರಿಯ ನಿಷ್ಕಲ್ಮಶ ಗುರುಸೇವೆ. ಜಗದ್ಗುರುಗಳ ಕೃಪೆಯಿಂದ ತೋಟಕಾಚಾರ್ಯರಾಗಿ ಅಲೌಕಿಕ ಕಾವ್ಯ ರಚಿಸಿದ ಅದ್ಭುತ ಕಥೆ.',
    summaryEn: 'Giri, regarded as unlearned by fellow disciples, served Shankara with pure humility. Shankara blessed him to spontaneously sing the intricate Totakashtakam.',
    summaryHi: 'अन्य शिष्यों द्वारा अल्पबुद्धि समझे जाने वाले गिरि की निस्वार्थ गुरुसेवा, और गुरु की कृपा से तत्काल रचित अद्भुत तोटकाष्टकम् की कथा।',
    shloka: 'विदिताखिलशास्त्रसुधाजलधे महितोपनिषत् कथितार्थनिधे ।',
    shlokaMeaning: 'ಸಕಲ ಶಾಸ್ತ್ರಗಳೆಂಬ ಅಮೃತ ಸಾಗರವನ್ನು ಬಲ್ಲವರೇ, ಉಪನಿಷತ್ತುಗಳ ಗೂಢಾರ್ಥದ ನಿಧಿಯೇ, ಹೇ ಶಂಕರ ದೇಶಿಕಾ ನನ್ನನ್ನು ರಕ್ಷಿಸು.',
    shlokaMeaningEn: 'O Knower of the nectar ocean of all scriptures, treasure of the Upanishadic wisdom, O Guru Shankara, protect me!',
    shlokaMeaningHi: 'समस्त शास्त्रों के अमृत-सागर के ज्ञाता, उपनिषदों के परम अर्थ के खजाने, हे शंकर गुरुदेव, मेरी रक्षा करें!',
    content: [
      'ಆದಿ ಶಂಕರರ ಶಿಷ್ಯ ಮಂಡಳಿಯಲ್ಲಿ ಗಿರಿ ಎಂಬ ಸರಳ ಶಿಷ್ಯನಿದ್ದನು. ಆತ ದಿನವಿಡೀ ಗುರುವಿನ ಬಟ್ಟೆಗಳನ್ನು ಒಗೆಯುವುದು, ಆಶ್ರಮವನ್ನು ಗುಡಿಸುವುದು, ಪಾಕಶಾಲೆಗೆ ಕಟ್ಟಿಗೆ ತರುವುದು ಮುಂತಾದ ಸೇವೆಗಳಲ್ಲೇ ಮುಳುಗಿರುತ್ತಿದ್ದನು. ಇತರ ಪಂಡಿತ ಶಿಷ್ಯರು ಆತನನ್ನು ಶಾಸ್ತ್ರದಲ್ಲಿ ದಡ್ಡನೆಂದು ಭಾವಿಸಿದ್ದರು.',
      'ಒಂದು ದಿನ ಶಂಕರಾಚಾರ್ಯರು ಪಾಠ ಆರಂಭಿಸಲು ಗಿರಿ ನದಿಯಿಂದ ಬಟ್ಟೆ ಒಗೆದು ಬರುವವರೆಗೂ ಕಾಯುತ್ತಿದ್ದರು. ಆಗ ಪದ್ಮಪಾದರಾದಿಯಾಗಿ ಇತರ ವಿದ್ವಾಂಸರು "ಗುರುಗಳೇ, ಆತನಿಗೆ ಗೋಡೆಗೆ ಹೇಳಿದಷ್ಟೇ ಅರ್ಥವಾಗುತ್ತದೆ, ಆತನಿಗಾಗಿ ಏಕೆ ಕಾಯಬೇಕು?" ಎಂದು ನಕ್ಕರು.',
      'ತಮ್ಮ ನಿಸ್ವಾರ್ಥ ಸೇವಕನ ಮೇಲಿನ ಅಪಹಾಸ್ಯವನ್ನು ಕಂಡ ಶಂಕರರು, ಗಿರಿಗೆ ಸಮಗ್ರ ವೇದ-ವೇದಾಂತ ಶಾಸ್ತ್ರಗಳ ದಿವ್ಯಜ್ಞಾನವನ್ನು ಸಂಕಲ್ಪ ಮಾತ್ರದಿಂದಲೇ ಅನುಗ್ರಹಿಸಿದರು.',
      'ನದಿ ತೀರದಿಂದ ಬಟ್ಟೆಗಳನ್ನು ಹೊತ್ತು ಬರುತ್ತಿದ್ದ ಗಿರಿಯು ಆ ಕ್ಷಣದಲ್ಲೇ ಸಂಸ್ಕೃತದ ಅತಿ ಕ್ಲಿಷ್ಟವಾದ \'ತೋಟಕಾ ವೃತ್ತ\'ದಲ್ಲಿ ಪರಮ ಅದ್ಭುತವಾದ "ತೋಟಕಾಷ್ಟಕಮ್" ರಚಿಸಿ ರಾಗಬದ್ಧವಾಗಿ ಹಾಡುತ್ತಾ ಗುರುವಿನ ಪಾದಗಳಿಗೆ ನಮಸ್ಕರಿಸಿದನು. ಆತನ ಅಸಾಧಾರಣ ವಿದ್ವತ್ತನ್ನು ಕಂಡು ಇತರ ಶಿಷ್ಯರು ನಾಚಿ ತಲೆಬಾಗಿದರು.'
    ],
    contentEn: [
      'Among Shankara’s disciples was a modest youth named Giri, who dedicated his days to washing his Guru’s clothes, sweeping the ashram, and tending the hearth, quietly dismissed as simple-minded by scholarly peers.',
      'One day, Shankara delayed his lecture until Giri returned from the river. Some disciples whispered arrogantly: "Why wait for him? Explaining Vedanta to him is like addressing a wooden wall!"',
      'Hearing this slight against true humility, Shankara silently willed the entirety of Vedic wisdom into Giri’s heart.',
      'Returning with the clean garments, Giri broke into spontaneous, ecstatic Sanskrit poetry set to the difficult Totaka meter—the world-renowned Totakashtakam. The astonished disciples bowed their heads in humility.'
    ],
    contentHi: [
      'आदि शंकर के शिष्यों में गिरि नाम का एक सरल शिष्य था, जो दिन-रात गुरु के वस्त्र धोने और आश्रम की सेवा में लीन रहता था। अन्य विद्वान शिष्य उसे अल्पज्ञ समझते थे।',
      'एक दिन शंकराचार्य ने पाठ शुरू करने से पहले गिरि की प्रतीक्षा की। कुछ शिष्यों ने उपहास करते हुए कहा: "गुरुदेव, उसके लिए रुकने का क्या लाभ? उसे समझाना तो दीवार को समझाने जैसा है!"',
      'गुरुभक्ति का उपहास देखकर शंकर ने मात्र संकल्प से गिरि के हृदय में संपूर्ण वेद-वेदांत का ज्ञान प्रवाहित कर दिया।',
      'नदी से वस्त्र लेकर लौटते ही गिरि ने संस्कृत के अत्यंत कठिन ‘तोटक’ छंद में अद्भुत ‘तोटकाष्टकम्’ गाते हुए गुरु के चरणों में साष्टांग प्रणाम किया। सभी शिष्य लज्जित होकर नतमस्तक हो गए।'
    ],
    keyLessons: [
      'ಪಾಂಡಿತ್ಯಕ್ಕಿಂತ ಪ್ರಾಮಾಣಿಕವಾದ ಗುರುಸೇವೆಯೇ ಜ್ಞಾನೋದಯಕ್ಕೆ ಸುಲಭ ಮಾರ್ಗ.',
      'ಗುರುಕೃಪೆಯಿಂದ ಅಸಾಧ್ಯವಾದದ್ದೂ ಕ್ಷಣಾರ್ಧದಲ್ಲಿ ಸಾಧ್ಯವಾಗುತ್ತದೆ.',
      'ಯಾರನ್ನೂ ಬಾಹ್ಯ ಲಕ್ಷಣಗಳಿಂದ ಹಗುರವಾಗಿ ಅಳೆಯಬಾರದು.'
    ],
    keyLessonsEn: [
      'Pure, humble devotion to the Guru outshines mere intellectual pedantry.',
      'By the Guru’s grace alone, the impossible becomes effortless within moments.',
      'Never judge an earnest seeker by outward appearances or academic credentials.'
    ],
    keyLessonsHi: [
      'शुष्क पांडित्य की तुलना में सच्ची गुरुसेवा ज्ञान प्राप्ति का सबसे सुगम मार्ग है।',
      'गुरु की कृपा से असंभव भी क्षणभर में संभव हो जाता है।',
      'किसी भी साधक को बाह्य रूप अथवा सांख्यिकी से नहीं आंकना चाहिए।'
    ],
    sourceReference: 'ಶೃಂಗೇರಿ ಮಠ ಪರಂಪರಾ ಚರಿತ್ರೆ',
    sourceReferenceEn: 'Sringeri Sharada Peetham Traditional Chronicles',
    sourceReferenceHi: 'शृंगेरी शारदा पीठ परंपरा चरित'
  }
];

export function getLocalizedStory(story: StoryItem, lang: Language) {
  if (lang === 'en') {
    return {
      id: story.id,
      title: story.titleEn,
      category: story.category,
      categoryLabel: story.categoryLabelEn,
      image: story.image,
      readTime: story.readTimeEn,
      summary: story.summaryEn,
      shloka: story.shloka,
      shlokaMeaning: story.shlokaMeaningEn || story.shlokaMeaning,
      content: story.contentEn,
      keyLessons: story.keyLessonsEn,
      sourceReference: story.sourceReferenceEn,
    };
  }
  if (lang === 'hi') {
    return {
      id: story.id,
      title: story.titleHi,
      category: story.category,
      categoryLabel: story.categoryLabelHi,
      image: story.image,
      readTime: story.readTimeHi,
      summary: story.summaryHi,
      shloka: story.shloka,
      shlokaMeaning: story.shlokaMeaningHi || story.shlokaMeaning,
      content: story.contentHi,
      keyLessons: story.keyLessonsHi,
      sourceReference: story.sourceReferenceHi,
    };
  }
  return {
    id: story.id,
    title: story.title,
    category: story.category,
    categoryLabel: story.categoryLabel,
    image: story.image,
    readTime: story.readTime,
    summary: story.summary,
    shloka: story.shloka,
    shlokaMeaning: story.shlokaMeaning,
    content: story.content,
    keyLessons: story.keyLessons,
    sourceReference: story.sourceReference,
  };
}
