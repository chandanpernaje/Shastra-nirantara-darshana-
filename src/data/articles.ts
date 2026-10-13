import { Language } from './translations';

export interface ArticleItem {
  id: string;
  storyId?: string; // Mapped directly to corresponding story
  title: string;
  titleEn?: string;
  titleHi?: string;
  category: 'ಸೌಂದರ್ಯಲಹರೀ' | 'ಸಾಮೋಪಾಸನೆ' | 'ಗರುಡಪುರಾಣ' | 'ಶಂಕರತತ್ತ್ವ';
  categoryLabel: string;
  categoryLabelEn?: string;
  categoryLabelHi?: string;
  image: string;
  url: string;
  summary: string;
  summaryEn?: string;
  summaryHi?: string;
  keyPoints?: string[];
  keyPointsEn?: string[];
  keyPointsHi?: string[];
  scriptureRef?: string;
  scriptureRefEn?: string;
  scriptureRefHi?: string;
  readTime: string;
  readTimeEn?: string;
  readTimeHi?: string;
}

export interface DeityMediaItem {
  id: string;
  title: string;
  titleEn?: string;
  titleHi?: string;
  deity: 'ಗಣಪತಿ' | 'ಶಿವ' | 'ದೇವಿ' | 'ಕೃಷ್ಣ';
  deityLabel: string;
  deityLabelEn?: string;
  deityLabelHi?: string;
  image: string;
  url: string;
  description: string;
  descriptionEn?: string;
  descriptionHi?: string;
  duration?: string;
  durationEn?: string;
  durationHi?: string;
}

export const ARTICLES: ArticleItem[] = [
  {
    id: 'vamadevya-samopasana',
    storyId: 'vamadeva-rishi-enlightenment',
    title: 'ವಾಮದೇವ್ಯ ಸಾಮೋಪಾಸನಾ ವಿಮರ್ಶೆ',
    titleEn: 'Critical Review of Vamadevya Samopasana',
    titleHi: 'वामदेव्य सामोपासना समीक्षा',
    category: 'ಸಾಮೋಪಾಸನೆ',
    categoryLabel: 'ಸಾಮೋಪಾಸನೆ',
    categoryLabelEn: 'Samopasana',
    categoryLabelHi: 'सामोपासना',
    image: '/images/shankaracharya.jpg',
    url: 'https://www.facebook.com/share/p/1JJhbdPCiV/',
    summary: 'ಛಾಂದೋಗ್ಯೋಪನಿಷತ್ತಿನ ವಾಮದೇವ್ಯ ಸಾಮೋಪಾಸನೆಯ ಶಾಸ್ತ್ರೀಯ ಅರ್ಥ, ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ದೃಷ್ಟಿಕೋನದ ಸಮಗ್ರ ವಿಮರ್ಶೆ. ಉಪಾಸನೆಯ ಗೂಢ ತತ್ತ್ವಗಳನ್ನು ವೈದಿಕ ಸಂಪ್ರದಾಯಾನುಸಾರ ಸ್ಪಷ್ಟಪಡಿಸುವ ವಿದ್ವತ್ಪೂರ್ಣ ಲೇಖನ.',
    summaryEn: 'Comprehensive scriptural critique of Vamadevya Samopasana from the Chandogya Upanishad, elucidating its esoteric principles and Vedic spiritual perspective.',
    summaryHi: 'छांदोग्योपनिषद की वामदेव्य सामोपासना का शास्त्रीय अर्थ, प्रक्रिया और आध्यात्मिक दृष्टिकोण की समग्र समीक्षा। गूढ़ तत्त्वों का वैदिक प्रामाणिक विवेचन।',
    keyPoints: [
      'ಛಾಂದೋಗ್ಯೋಪನಿಷತ್ತಿನ ವಾಮದೇವ್ಯ ಸಾಮದ ರಹಸ್ಯ',
      'ಉಪಾಸನಾ ಕಾಂಡದಲ್ಲಿನ ವಿಧಿನಿಷೇಧಗಳ ಶಾಸ್ತ್ರೀಯ ವಿವೇಚನೆ',
      'ಆದಿ ಶಂಕರ ಭಗವತ್ಪಾದರ ಭಾಷ್ಯದ ಬೆಳಕಿನಲ್ಲಿ ಸಮನ್ವಯ'
    ],
    keyPointsEn: [
      'The esoteric secrets of Vamadevya Sama in Chandogya Upanishad',
      'Scriptural discernment of injunctions and prohibitions in Upasana Kanda',
      'Synthesis in the illuminating light of Adi Shankaracharya’s Bhashya'
    ],
    keyPointsHi: [
      'छांदोग्योपनिषद के वामदेव्य साम का गूढ़ रहस्य',
      'उपासना कांड में विधि-निषेधों का शास्त्रीय विवेचन',
      'आदि शंकर भगवत्पाद के भाष्य के आलोक में समन्वय'
    ],
    scriptureRef: 'ಛಾಂದೋಗ್ಯೋಪನಿಷತ್ (೨.೧೩)',
    scriptureRefEn: 'Chandogya Upanishad (2.13)',
    scriptureRefHi: 'छांदोग्योपनिषद (२.१३)',
    readTime: '೭ ನಿಮಿಷ ಓದು',
    readTimeEn: '7 min read',
    readTimeHi: '७ मिनट पठन'
  },
  {
    id: 'saundarya-lahari-akshepa',
    storyId: 'saundarya-lahari-origin-kailasa',
    title: 'ಸೌಂದರ್ಯಲಹರೀ–ಆಕ್ಷೇಪ–ನಿರಾಕರಣಮ್',
    titleEn: 'Refutation of Objections on Saundarya Lahari',
    titleHi: 'सौंदर्यलहरी–आक्षेप–निराकरणम्',
    category: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabel: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabelEn: 'Saundarya Lahari',
    categoryLabelHi: 'सौंदर्यलहरी',
    image: '/images/devi.jpg',
    url: 'https://www.facebook.com/share/p/1JwJuE83uG/',
    summary: 'ಶ್ರೀಮತ್ ಸೌಂದರ್ಯಲಹರೀ ಸ್ತೋತ್ರದ ಮೇಲೆ ಎತ್ತಲಾದ ವಿವಿಧ ಆಕ್ಷೇಪಗಳಿಗೆ ಶಾಸ್ತ್ರೋಕ್ತ ನಿರಾಕರಣೆ. ಭಗವತಿ ಲಲಿತಾ ಪರಮೇಶ್ವರಿಯ ತತ್ತ್ವಸ್ವರೂಪ ಮತ್ತು ಶ್ರೀ ಶಂಕರರ ಕೃತಿತ್ವದ ಪ್ರಾಮಾಣಿಕತೆಯ ವಿವರಣೆ.',
    summaryEn: 'Rigorous scholarly refutation of objections raised against Saundarya Lahari, affirming Adi Shankaracharya’s authorship and Sri Lalita Parameshvari’s transcendent truth.',
    summaryHi: 'श्रीमत् सौंदर्यलहरी स्तोत्र पर उठाए गए आक्षेपों का शास्त्रोक्त निराकरण। भगवती ललिता परमेश्वरी के तत्त्वस्वरूप और श्री शंकर के कर्तृत्व का प्रमाण।',
    keyPoints: [
      'ಸೌಂದರ್ಯಲಹರಿಯ ಕರ್ತೃತ್ವ ಕುರಿತಾದ ನಿರಾಧಾರ ಸಂಶಯಗಳಿಗೆ ಉತ್ತರ',
      'ಆನಂದಲಹರೀ ಮತ್ತು ಸೌಂದರ್ಯಲಹರೀ ಭಾಗಗಳ ಐಕ್ಯತೆ',
      'ಶಾಂಕರ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಶಕ್ತಿತತ್ತ್ವದ ಉನ್ನತ ಸ್ಥಾನ'
    ],
    keyPointsEn: [
      'Answering baseless doubts regarding the authorship of Saundarya Lahari',
      'Unity and continuity of Ananda Lahari and Saundarya Lahari sections',
      'Exalted status of Shakta principle in Shankara tradition'
    ],
    keyPointsHi: [
      'सौंदर्यलहरी के कर्तृत्व पर निराधार शंकाओं का समाधान',
      'आनंदलहरी और सौंदर्यलहरी भागों की अखण्ड एकता',
      'शांकर परंपरा में शक्तितत्त्व का सर्वोच्च स्थान'
    ],
    scriptureRef: 'ಸೌಂದರ್ಯಲಹರೀ ಸ್ತೋತ್ರಮ್',
    scriptureRefEn: 'Saundarya Lahari Stotram',
    scriptureRefHi: 'सौंदर्यलहरी स्तोत्रम्',
    readTime: '೯ ನಿಮಿಷ ಓದು',
    readTimeEn: '9 min read',
    readTimeHi: '९ मिनट पठन'
  },
  {
    id: 'saundarya-lahari-99-part1',
    storyId: 'saundarya-lahari-origin-kailasa',
    title: 'ಸೌಂದರ್ಯಲಹರೀ–೯೯ನೆಯ ಶ್ಲೋಕದ ವ್ಯಾಖ್ಯಾನಪರಂಪರಾ-ಪರೀಕ್ಷೆ ಮತ್ತು ಪಾಠಕ್ರಮ-ವಿಚಾರ',
    titleEn: 'Textual Examination & Commentary Tradition on Verse 99',
    titleHi: 'सौंदर्यलहरी–९९वें श्लोक की व्याख्या परंपरा व पाठक्रम विचार',
    category: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabel: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabelEn: 'Saundarya Lahari',
    categoryLabelHi: 'सौंदर्यलहरी',
    image: '/images/devi.jpg',
    url: 'https://www.facebook.com/share/p/1Dy2ENqX57/',
    summary: 'ಸೌಂದರ್ಯಲಹರೀ ಗ್ರಂಥದ ೯೯ನೆಯ ಶ್ಲೋಕದ ಪ್ರಾಚೀನ ಹಸ್ತಪ್ರತಿಗಳು, ವ್ಯಾಖ್ಯಾನಕಾರರ ಪರಂಪರೆ (ಲಕ್ಷ್ಮೀಧರ, ಭಾಸ್ಕರರಾಯ, ಕಾಮೇಶ್ವರ ಸೂರಿ) ಹಾಗೂ ಪಾಠಾಂತರಗಳ ಸೂಕ್ಷ್ಮ ಸಂಶೋಧನಾತ್ಮಕ ವಿವೇಚನೆ.',
    summaryEn: 'Scholarly critique of manuscript variants and traditional commentaries (Lakshmidhara, Bhaskararaya, Kameshvara Suri) on Verse 99 of Saundarya Lahari.',
    summaryHi: 'सौंदर्यलहरी के ९९वें श्लोक की प्राचीन पांडुलिपियों, व्याख्याकार परंपरा (लक्ष्मीधर, भास्करराय आदि) तथा पाठ-भेदों का गहन शोधपरक विवेचन।',
    keyPoints: [
      'ಲಕ್ಷ್ಮೀಧರೀಯ ಮತ್ತು ಸುಭಗೋದಯ ವ್ಯಾಖ್ಯಾನಗಳ ತುಲನಾತ್ಮಕ ಅಧ್ಯಯನ',
      'ಪಾಠಭೇದಗಳ ಮೂಲ ಹಾಗೂ ಅವುಗಳ ಶಾಸ್ತ್ರಾರ್ಥ ಪರಿಣಾಮ',
      'ಮಂತ್ರಶಾಸ್ತ್ರದ ಚೌಕಟ್ಟಿನಲ್ಲಿ ೯೯ನೆಯ ಶ್ಲೋಕದ ಮಹತ್ತ್ವ'
    ],
    keyPointsEn: [
      'Comparative study of Lakshmidhariya and Subhagodaya commentaries',
      'Origins of textual variants and their theological implications',
      'Esoteric significance of verse 99 in Mantrashastra'
    ],
    keyPointsHi: [
      'लक्ष्मीधरीय व सुभगोदय व्याख्याओं का तुलनात्मक अध्ययन',
      'पाठ-भेदों के मूल और उनके शास्त्रार्थ प्रभाव',
      'मंत्रशास्त्र के आलोक में ९९वें श्लोक का महत्त्व'
    ],
    scriptureRef: 'ಸೌಂದರ್ಯಲಹರೀ (ಶ್ಲೋಕ ೯೯)',
    scriptureRefEn: 'Saundarya Lahari (Verse 99)',
    scriptureRefHi: 'सौंदर्यलहरी (श्लोक ९९)',
    readTime: '೧೦ ನಿಮಿಷ ಓದು',
    readTimeEn: '10 min read',
    readTimeHi: '१० मिनट पठन'
  },
  {
    id: 'saundarya-lahari-99-part2',
    storyId: 'saundarya-lahari-origin-kailasa',
    title: '೯೯ನೆಯ ಶ್ಲೋಕದ ಆಕ್ಷೇಪ-ನಿರಾಕರಣ — ಉತ್ತರಭಾಗ',
    titleEn: 'Refuting Objections on Verse 99 — Part II',
    titleHi: '९९वें श्लोक के आक्षेपों का निराकरण — उत्तरभाग',
    category: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabel: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabelEn: 'Saundarya Lahari',
    categoryLabelHi: 'सौंदर्यलहरी',
    image: '/images/devi.jpg',
    url: 'https://www.facebook.com/share/p/1Dy2ENqX57/',
    summary: '೯೯ನೆಯ ಶ್ಲೋಕದ ಕುರಿತು ಕೆಲವರು ಮುಂದಿಟ್ಟ ಅಸಂಗತ ಆಕ್ಷೇಪಗಳ ಶಾಸ್ತ್ರೀಯ ಖಂಡನೆ. ಶ್ರೀವಿದ್ಯಾ ಸಂಪ್ರದಾಯದ ಗೂಢಾರ್ಥಗಳನ್ನು ಅಲೌಕಿಕ ದೃಷ್ಟಿಯಿಂದ ನೋಡಬೇಕಾದ ಅನಿವಾರ್ಯತೆಯನ್ನು ಪ್ರತಿಪಾದಿಸುವ ಮುಂದುವರಿದ ಭಾಗ.',
    summaryEn: 'Definitive scriptural rejoinder to misinterpretations of verse 99, advocating the transcendental perspective of Sri Vidya tradition.',
    summaryHi: '९९वें श्लोक पर प्रस्तुत असंगत आक्षेपों का शास्त्रीय खंडन। श्रीविद्या संप्रदाय के गूढ़ रहस्यों को आध्यात्मिक दृष्टि से समझने का प्रतिपादन।',
    keyPoints: [
      'ಕುಂಡಲಿನೀ ಯೋಗದ ಅನುಭವದ ಬೆಳಕಿನಲ್ಲಿ ಶ್ಲೋಕಾರ್ಥ',
      'ಸ್ಥೂಲ ದೃಷ್ಟಿಯ ಆಕ್ಷೇಪಗಳಿಗೆ ಸೂಕ್ಷ್ಮ ತಾತ್ತ್ವಿಕ ಉತ್ತರ',
      'ಅದ್ವೈತ ಪರಂಪರೆಯಲ್ಲಿ ದೇವೀ ಸಾಯುಜ್ಯದ ಸ್ವರೂಪ'
    ],
    keyPointsEn: [
      'Understanding verse meaning through Kundalini Yoga insight',
      'Subtle philosophical answers to superficial literal critiques',
      'Nature of Devi Sayujya (liberation) in Advaita'
    ],
    keyPointsHi: [
      'कुंडलिनी योग के अनुभव के प्रकाश में श्लोक का अर्थ',
      'स्थूल दृष्टि के आक्षेपों का सूक्ष्म दार्शनिक उत्तर',
      'अद्वैत परंपरा में देवी सायुज्य का स्वरूप'
    ],
    scriptureRef: 'ಸೌಂದರ್ಯಲಹರೀ (ಉತ್ತರಾರ್ಧ)',
    scriptureRefEn: 'Saundarya Lahari (Latter Section)',
    scriptureRefHi: 'सौंदर्यलहरी (उत्तरार्ध)',
    readTime: '೮ ನಿಮಿಷ ಓದು',
    readTimeEn: '8 min read',
    readTimeHi: '८ मिनट पठन'
  },
  {
    id: 'saundarya-lahari-no-obscenity-1',
    storyId: 'kanakadhara-golden-amla',
    title: 'ಸೌಂದರ್ಯಲಹರೀ ಮತ್ತು ಅದರ ವ್ಯಾಖ್ಯಾನಗಳಲ್ಲಿ ಅಶ್ಲೀಲಸಾಹಿತ್ಯವಿಲ್ಲ - I',
    titleEn: 'Absence of Obscenity in Saundarya Lahari & Commentaries - I',
    titleHi: 'सौंदर्यलहरी व उसकी व्याख्याओं में अश्लीलता का अभाव - I',
    category: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabel: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabelEn: 'Saundarya Lahari',
    categoryLabelHi: 'सौंदर्यलहरी',
    image: '/images/devi.jpg',
    url: 'https://www.facebook.com/share/p/1JwJ75W3bp/',
    summary: 'ಸೌಂದರ್ಯಲಹರಿಯಲ್ಲಿನ ಅಂಗವರ್ಣನೆಯನ್ನು ಆಧುನಿಕ ಲೌಕಿಕ ದೃಷ್ಟಿಯಿಂದ ಅಶ್ಲೀಲವೆಂದು ಕರೆಯುವ ಅಜ್ಞಾನಕ್ಕೆ ಶಾಸ್ತ್ರೀಯ ಪ್ರತ್ಯುತ್ತರ. ವೇದ, ಉಪನಿಷತ್ತುಗಳಲ್ಲಿನ ರೂಪಕ ವಿಧಾನ ಹಾಗೂ ಕಾವ್ಯಮೀಮಾಂಸೆಯ ಆಳವಾದ ಪರಿಶೀಲನೆ.',
    summaryEn: 'Answering modern misunderstandings regarding divine anatomical descriptions, drawing upon Vedic metaphors and classic Sanskrit aesthetics.',
    summaryHi: 'सौंदर्यलहरी के दिव्य रूप-वर्णन को आधुनिक दृष्टिकोण से अश्लील कहने के भ्रम का शास्त्रीय समाधान। वैदिक रूपक शैली और काव्यमीमांसा का विश्लेषण।',
    keyPoints: [
      'ಋಗ್ವೇದ, ಯಜುರ್ವೇದಗಳಲ್ಲಿನ ದೈವಿಕ ರೂಪಕಗಳ ವಿಶ್ಲೇಷಣೆ',
      'ಆಧ್ಯಾತ್ಮಿಕ ತತ್ತ್ವವನ್ನು ಗ್ರಹಿಸಲು ಸಾಕಾರ ವರ್ಣನೆಯ ಉಪಯುಕ್ತತೆ',
      'ಭಕ್ತನ ನಿಸ್ವಾರ್ಥ ದೇವೀ ಧ್ಯಾನ ಮತ್ತು ಮಾತೃಭಾವ'
    ],
    keyPointsEn: [
      'Analysis of divine allegories in Rigveda and Yajurveda',
      'Utility of anthropomorphic descriptions to grasp abstract reality',
      'Pure maternal devotion (Matru-bhava) in the devotee’s heart'
    ],
    keyPointsHi: [
      'ऋग्वेद और यजुर्वेद के दिव्य रूपकों का विश्लेषण',
      'आध्यात्मिक तत्त्व को समझने में साकार वर्णन की उपयोगिता',
      'भक्त का निष्काम देवी ध्यान और पवित्र मातृभाव'
    ],
    scriptureRef: 'ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ & ಕಾವ್ಯಪ್ರಕಾಶ',
    scriptureRefEn: 'Taittiriya Aranyaka & Kavyaprakasha',
    scriptureRefHi: 'तैत्तिरीय आरण्यक व काव्यप्रकाश',
    readTime: '೮ ನಿಮಿಷ ಓದು',
    readTimeEn: '8 min read',
    readTimeHi: '८ मिनट पठन'
  },
  {
    id: 'saundarya-lahari-tatva-upasana-2',
    storyId: 'saundarya-lahari-origin-kailasa',
    title: 'ಅಶ್ಲೀಲತೆಯ ಆರೋಪದಾಚೆ — ಸೌಂದರ್ಯಲಹರಿಯ ಶಾಸ್ತ್ರಾರ್ಥ, ತತ್ತ್ವಾರ್ಥ ಮತ್ತು ಉಪಾಸನಾರ್ಥ - II',
    titleEn: 'Beyond Objections: Meaning, Philosophy & Upasana in Saundarya Lahari - II',
    titleHi: 'आरोपों से परे — सौंदर्यलहरी का शास्त्रार्थ, तत्त्वार्थ व उपासनार्थ - II',
    category: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabel: 'ಸೌಂದರ್ಯಲಹರೀ',
    categoryLabelEn: 'Saundarya Lahari',
    categoryLabelHi: 'सौंदर्यलहरी',
    image: '/images/devi.jpg',
    url: 'https://www.facebook.com/share/p/1BwpjkgX9E/',
    summary: 'ಸೌಂದರ್ಯಲಹರಿಯ ದ್ವಿತೀಯ ಭಾಗದ ವಿಸ್ತೃತ ವಿಮರ್ಶೆ. ಷಟ್ಚಕ್ರ ಭೇದನ, ಶ್ರೀಚಕ್ರ ನವಾತ್ಮಕ ತತ್ತ್ವ, ಹಾಗೂ ಉಪಾಸಕನಿಗೆ ಮುಕ್ತಿ ನೀಡುವ ಪರಾಶಕ್ತಿಯ ಅದ್ವೈತ ಅನುಭೂತಿಯ ಪ್ರೌಢ ವಿಶ್ಲೇಷಣೆ.',
    summaryEn: 'In-depth analysis of the second half of Saundarya Lahari: Shat-chakra piercing, Sri Chakra ninefold mystery, and non-dual realization of Supreme Shakti.',
    summaryHi: 'सौंदर्यलहरी के द्वितीय भाग की विस्तृत समीक्षा। षट्चक्र भेदन, श्रीचक्र का नवात्मक तत्त्व और पराशक्ति के अद्वैत साक्षात्कार का गंभीर अध्ययन।',
    keyPoints: [
      'ಮೂಲಾಧಾರದಿಂದ ಸಹಸ್ರಾರದವರೆಗಿನ ಆಂತರಿಕ ಯೋಗ ಪಯಣ',
      'ಶಿವ-ಶಕ್ತಿಯರ ಅವಿನಾಭಾವ ಸಂಬಂಧ ಮತ್ತು ಅದ್ವೈತ ರಹಸ್ಯ',
      'ಪೂರ್ವಮೀಮಾಂಸಾ ಹಾಗೂ ಉತ್ತರಮೀಮಾಂಸಾ ಪ್ರಮಾಣಗಳ ಆಧಾರ'
    ],
    keyPointsEn: [
      'Internal yogic journey from Muladhara to Sahasrara',
      'Inseparable union of Shiva-Shakti and the Advaita mystery',
      'Firm foundation in Purva and Uttara Mimamsa authorities'
    ],
    keyPointsHi: [
      'मूलाधार से सहस्रार तक की आंतरिक यौगिक यात्रा',
      'शिव-शक्ति का अविनाशी संबंध और अद्वैत रहस्य',
      'पूर्व व उत्तर मीमांसा प्रमाणों पर आधारित समाधान'
    ],
    scriptureRef: 'ಸೌಂದರ್ಯಲಹರೀ & ರುದ್ರಯಾಮಲ ತಂತ್ರ',
    scriptureRefEn: 'Saundarya Lahari & Rudrayamala Tantra',
    scriptureRefHi: 'सौंदर्यलहरी व रुद्रयामल तंत्र',
    readTime: '೧೧ ನಿಮಿಷ ಓದು',
    readTimeEn: '11 min read',
    readTimeHi: '११ मिनट पठन'
  },
  {
    id: 'garuda-purana-maniman-1',
    storyId: 'kashi-chandala-manisha-panchakam',
    title: 'ಗರುಡಪುರಾಣದ ‘ಮಣಿಮಾನ್–ಸಂಕರ’ ಶ್ಲೋಕಗಳು : ಪ್ರಕ್ಷೇಪವೇ ಅಲ್ಲವೇ? — ವಿಮರ್ಶೆ',
    titleEn: 'The ‘Maniman–Shankara’ Verses in Garuda Purana: Interpolation Critique',
    titleHi: 'गरुड़ पुराण के ‘मणिमान्–शंकर’ श्लोक : क्या यह प्रक्षेप है? — समीक्षा',
    category: 'ಗರುಡಪುರಾಣ',
    categoryLabel: 'ಗರುಡಪುರಾಣ',
    categoryLabelEn: 'Garuda Purana',
    categoryLabelHi: 'गरुड़ पुराण',
    image: '/images/krishna.jpg',
    url: 'https://www.facebook.com/share/p/18UHUdRjJ5/',
    summary: 'ಗರುಡಪುರಾಣದಲ್ಲಿ ಕಂಡುಬರುವ ಶಂಕರರ ಬಗೆಗಿನ ಕೃತಕ ನಿಂದಾತ್ಮಕ ಶ್ಲೋಕಗಳ ಐತಿಹಾಸಿಕ ಮತ್ತು ಪಠ್ಯಶಾಸ್ತ್ರೀಯ ತನಿಖೆ. ಅವು ಪ್ರಾಚೀನ ಪುರಾಣಗಳಲ್ಲಿ ಇಲ್ಲದ ಅರ್ವಾಚೀನ ಪ್ರಕ್ಷಿಪ್ತ (interpolated) ಶ್ಲೋಕಗಳೆಂಬುದರ ನಿರೂಪಣೆ.',
    summaryEn: 'Historical and textual examination proving the derogatory verses against Adi Shankara in modern editions of Garuda Purana to be recent interpolations.',
    summaryHi: 'गरुड़ पुराण में आदि शंकर के विरुद्ध मिलने वाले निंदात्मक श्लोकों की ऐतिहासिक व पाठशास्त्रीय जांच। यह सिद्ध करना कि वे बाद में जोड़े गए प्रक्षिप्त श्लोक हैं।',
    keyPoints: [
      'ಪ್ರಾಚೀನ ಕಲ್ಕತ್ತಾ, ಬಂಗಾಳಿ, ವೆಂಕಟೇಶ್ವರ ಪ್ರೆಸ್ ಮುದ್ರಣಗಳ ಹೋಲಿಕೆ',
      'ವ್ಯಾಕರಣ ದೋಷಗಳು ಹಾಗೂ ಛಂದೋಭಂಗದ ಸಾಕ್ಷ್ಯಗಳು',
      'ಮತೀಯ ದ್ವೇಷದಿಂದ ಸೇರಿಸಲಾದ ಪ್ರಕ್ಷೇಪಗಳ ಪತ್ತೆಹಚ್ಚುವಿಕೆ'
    ],
    keyPointsEn: [
      'Comparison across antique Calcutta, Bengali, and Venkateshwara Press prints',
      'Evidence of grammatical errors and metrical discordance in fake verses',
      'Detection of interpolations inserted due to sectarian bias'
    ],
    keyPointsHi: [
      'प्राचीन कलकत्ता, बंगाली और वेंकटेश्वर प्रेस संस्करणों की तुलना',
      'प्रक्षिप्त श्लोकों में व्याकरण दोष और छंद-भंग के स्पष्ट प्रमाण',
      'सांप्रदायिक पूर्वाग्रह से जोड़े गए मिलावटी अंशों की पहचान'
    ],
    scriptureRef: 'ಗರುಡಪುರಾಣ ಸಂಹಿತಾ ವಿಮರ್ಶೆ',
    scriptureRefEn: 'Garuda Purana Samhita Critique',
    scriptureRefHi: 'गरुड़ पुराण संहिता समीक्षा',
    readTime: '೧೨ ನಿಮಿಷ ಓದು',
    readTimeEn: '12 min read',
    readTimeHi: '१२ मिनट पठन'
  },
  {
    id: 'garuda-purana-pratinirasana-2',
    storyId: 'mandana-mishra-shastrartha',
    title: 'ಗರುಡಪುರಾಣದ ‘ಸಂಕರಾಖ್ಯ’ ವಿವಾದ — ಪ್ರತ್ಯುತ್ತರಕ್ಕೆ ಪ್ರತಿನಿರಸನ',
    titleEn: 'The ‘Sankarakhya’ Debate in Garuda Purana — Rebuttal',
    titleHi: 'गरुड़ पुराण का ‘शंकराख्य’ विवाद — प्रत्युत्तर का प्रति-निराकरण',
    category: 'ಗರುಡಪುರಾಣ',
    categoryLabel: 'ಗರುಡಪುರಾಣ',
    categoryLabelEn: 'Garuda Purana',
    categoryLabelHi: 'गरुड़ पुराण',
    image: '/images/krishna.jpg',
    url: 'https://www.facebook.com/share/p/1bDQAsfDwn/',
    summary: 'ಪ್ರಕ್ಷೇಪ ವಾದವನ್ನು ಅಲ್ಲಗಳೆಯಲು ಎದುರಾಳಿಗಳು ನೀಡಿದ ಸಮರ್ಥನೆಗಳನ್ನು ವಾಕ್ಯಾರ್ಥ ಶೈಲಿಯಲ್ಲಿ ಖಂಡಿಸಿ, ಸತ್ಯವಾದ ಪುರಾಣ ಪಾಠವನ್ನು ಪ್ರಸ್ತುತಪಡಿಸುವ ತಾರ್ಕಿಕ ಪ್ರತಿವಾದ.',
    summaryEn: 'Logical scriptural rejoinder deconstructing sectarian claims that attempted to justify the spurious anti-Shankara interpolations.',
    summaryHi: 'प्रक्षेप सिद्ध करने वाले तर्कों को नकारने के लिए विरोधियों द्वारा दी गई दलीलों का वाक्यार्थ शैली में शास्त्रीय खंडन।',
    keyPoints: [
      'ಪ್ರತಿಪಕ್ಷದ ಆಕ್ಷೇಪಗಳ ಸೂಕ್ಷ್ಮ ವಿಭಜನೆ',
      'ನ್ಯಾಯ ಮತ್ತು ಮೀಮಾಂಸಾ ಶಾಸ್ತ್ರಗಳ ನಿಯಮಾನುಸಾರ ವಾದ ಮಂಡನೆ',
      'ವಿವಿಧ ಪುರಾಣಗಳ ಶೈಲಿಯೊಂದಿಗೆ ಶಂಕರವಿರೋಧಿ ಶ್ಲೋಕಗಳ ಅಸಾಂಗತ್ಯ'
    ],
    keyPointsEn: [
      'Fine deconstruction of opposing arguments',
      'Presentation anchored in Nyaya and Mimamsa epistemology',
      'Stylistic incompatibility of anti-Shankara verses with genuine Puranic tone'
    ],
    keyPointsHi: [
      'प्रतिपक्ष के आक्षेपों का सूक्ष्म दार्शनिक विश्लेषण',
      'न्याय और मीमांसा के नियमानुसार अकाट्य तर्क',
      'पौराणिक शैली से विरोधी श्लोकों की स्पष्ट विसंगति'
    ],
    scriptureRef: 'ಪುರಾಣ ವಿಮರ್ಶಾ ಪದ್ಧತಿ',
    scriptureRefEn: 'Purana Critical Methodology',
    scriptureRefHi: 'पुराण समीक्षा पद्धति',
    readTime: '೧೦ ನಿಮಿಷ ಓದು',
    readTimeEn: '10 min read',
    readTimeHi: '१० मिनट पठन'
  },
  {
    id: 'maniman-avatara-nirasana',
    storyId: 'kashi-chandala-manisha-panchakam',
    title: 'ಮಣಿಮಂತಾವತಾರ-ನಿರಸನಂ',
    titleEn: 'Refutation of the Maniman Incarnation Fabrication',
    titleHi: 'मणिमन्तावतार-निरासनम्',
    category: 'ಗರುಡಪುರಾಣ',
    categoryLabel: 'ಗರುಡಪುರಾಣ',
    categoryLabelEn: 'Garuda Purana',
    categoryLabelHi: 'गरुड़ पुराण',
    image: '/images/krishna.jpg',
    url: 'https://www.facebook.com/share/p/1FGUmf563F/',
    summary: 'ಭಗವಾನ್ ಆದಿ ಶಂಕರರನ್ನು ರಾಕ್ಷಸ ಮಣಿಮಂತನ ಅವತಾರವೆಂದು ಹೀಯಾಳಿಸುವ ಕಟ್ಟುಕತೆಯ ಸುಳ್ಳುಗಳನ್ನು ಪುರಾಣ ಹಾಗೂ ಇತಿಹಾಸಗಳ ಆಧಾರದ ಮೇಲೆ ಸಪ್ರಮಾಣವಾಗಿ ನಿರಸನಗೊಳಿಸುವ ಲೇಖನ.',
    summaryEn: 'Scholarly debunking of the false narrative equating Adi Shankaracharya with the demon Maniman, backed by Mahabharata and authentic Shankara Digvijayas.',
    summaryHi: 'भगवान आदि शंकर को राक्षस मणिमान् का अवतार बताने वाली मनगढ़ंत कथा का महाभारत और शंकर विजय के आधार पर सप्रमाण खंडन।',
    keyPoints: [
      'ಮಹಾಭಾರತದ ಮಣಿಮಂತನ ಕಥೆಯ ನಿಜವಾದ ಆಶಯ',
      'ಶಂಕರ ದಿಗ್ವಿಜಯಗಳಲ್ಲಿ ಶಿವಾವತಾರವೆಂಬ ಸರ್ವಸಮ್ಮತ ದಾಖಲೆಗಳು',
      'ವೈದಿಕ ಧರ್ಮ ರಕ್ಷಣೆಯಲ್ಲಿ ಶಂಕರರ ಅಪ್ರತಿಮ ಕೊಡುಗೆ'
    ],
    keyPointsEn: [
      'True context of the Maniman episode in the Mahabharata',
      'Unanimous evidence across ancient texts declaring Shankara as Shiva’s incarnation',
      'Shankara’s monumental contribution in preserving Sanatana Dharma'
    ],
    keyPointsHi: [
      'महाभारत में मणिमान् प्रसंग का वास्तविक संदर्भ',
      'समस्त शंकर विजय ग्रंथों में शिवावतार के निर्विवाद प्रमाण',
      'वैदिक धर्म के पुनरुद्धार में आदि शंकर का अनुपम योगदान'
    ],
    scriptureRef: 'ಮಹಾಭಾರತ & ಮಾಧವೀಯ ಶಂಕರವಿಜಯ',
    scriptureRefEn: 'Mahabharata & Madhaviya Shankara Vijaya',
    scriptureRefHi: 'महाभारत व माधवीय शंकरविजय',
    readTime: '೮ ನಿಮಿಷ ಓದು',
    readTimeEn: '8 min read',
    readTimeHi: '८ मिनट पठन'
  },
  {
    id: 'shankara-nindane-samaja-hone',
    storyId: 'totakacharya-guru-bhakti',
    title: 'ಶಂಕರನಿಂದನೆಯೂ ಮತ್ತು ಇಂದಿನ ಸಮಾಜದ ಜವಾಬ್ದಾರಿಯೂ',
    titleEn: 'Anti-Shankara Propaganda & The Responsibility of Today’s Society',
    titleHi: 'शंकर निंदा और वर्तमान समाज का दायित्व',
    category: 'ಶಂಕರತತ್ತ್ವ',
    categoryLabel: 'ಶಂಕರತತ್ತ್ವ',
    categoryLabelEn: 'Shankara Tattva',
    categoryLabelHi: 'शंकर तत्त्व',
    image: '/images/shiva.jpg',
    url: 'https://www.facebook.com/share/p/1DZTawLP4Y/',
    summary: 'ಸನಾತನ ಧರ್ಮದ ಜ್ಯೋತಿಯನ್ನು ಬೆಳಗಿಸಿದ ಜಗದ್ಗುರು ಆದಿ ಶಂಕರಾಚಾರ್ಯರ ಮೇಲೆ ನಡೆಯುತ್ತಿರುವ ದುರುದ್ದೇಶಪೂರಿತ ನಿಂದನೆಗಳನ್ನು ತಡೆಯಲು ಪ್ರಜ್ಞಾವಂತ ಸಮಾಜವು ಕೈಗೊಳ್ಳಬೇಕಾದ ಶಾಸ್ತ್ರೀಯ ಹಾಗೂ ಸಾಂಸ್ಕೃತಿಕ ಕರ್ತವ್ಯಗಳ ಕರೆ.',
    summaryEn: 'A clarion call to enlightened society to preserve scriptural integrity and counter malicious disinformation campaigns against Adi Shankaracharya.',
    summaryHi: 'सनातन धर्म के प्रखर प्रकाशक जगद्गुरु आदि शंकराचार्य पर होने वाली दुर्भावनापूर्ण निंदा का प्रतिरोध करने हेतु प्रबुद्ध समाज के कर्तव्यों का आह्वान।',
    keyPoints: [
      'ಇಂದಿನ ಡಿಜಿಟಲ್ ಯುಗದಲ್ಲಿ ಸುಳ್ಳು ಪ್ರಚಾರಗಳ ಸ್ವರೂಪ',
      'ಆಚಾರ್ಯರ ಗ್ರಂಥಗಳ ಮೂಲ ಅಧ್ಯಯನದ ಅವಶ್ಯಕತೆ',
      'ಧಾರ್ಮಿಕ ಸೌಹಾರ್ದತೆ ಮತ್ತು ಶಾಸ್ತ್ರ ಸಂವಾದದ ಘನತೆ'
    ],
    keyPointsEn: [
      'Dynamics of sectarian disinformation in the digital era',
      'Imperative of studying the Acharya’s original Sanskrit commentaries',
      'Preserving spiritual harmony and dignified scriptural debate'
    ],
    keyPointsHi: [
      'डिजिटल युग में भ्रामक प्रचार का स्वरूप व प्रभाव',
      'आचार्य के मूल ग्रंथों के प्रामाणिक अध्ययन की अनिवार्यता',
      'धार्मिक सौहार्द और शास्त्र-संवाद की गरिमा की रक्षा'
    ],
    scriptureRef: 'ಸನಾತನ ಧರ್ಮ ಕರ್ತವ್ಯ ವಿಮರ್ಶೆ',
    scriptureRefEn: 'Sanatana Dharma Civic Duty',
    scriptureRefHi: 'सनातन धर्म कर्तव्य समीक्षा',
    readTime: '೬ ನಿಮಿಷ ಓದು',
    readTimeEn: '6 min read',
    readTimeHi: '६ मिनट पठन'
  }
];

export const DEITY_MEDIA: DeityMediaItem[] = [
  {
    id: 'ganapati-upasana',
    title: 'ಶ್ರೀ ಗಣಪತಿ ಉಪಾಸನಾ ವಿಧಾನ',
    titleEn: 'Lord Ganesha Upasana Method',
    titleHi: 'श्री गणपति उपासना विधि',
    deity: 'ಗಣಪತಿ',
    deityLabel: 'ಶ್ರೀ ಗಣೇಶ',
    deityLabelEn: 'Lord Ganesha',
    deityLabelHi: 'श्री गणेश',
    image: '/images/ganesha.jpg',
    url: 'https://www.youtube.com/',
    description: 'ಪ್ರಥಮ ಪೂಜ್ಯ ಮಹಾಗಣಪತಿಯ ಶಾಸ್ತ್ರೋಕ್ತ ಪೂಜಾವಿಧಾನ, ಅಥರ್ವಶೀರ್ಷ ಉಪನಿಷತ್ತಿನ ಮಹತ್ತ್ವ ಹಾಗೂ ಸಂಕಟನಾಶನ ಸ್ತೋತ್ರದ ನಿತ್ಯಾನುಷ್ಠಾನ ಕ್ರಮ.',
    descriptionEn: 'Scriptural worship of Mahaganapati, significance of the Atharvashirsha Upanishad, and daily recitation of Sankata Nashana Stotram.',
    descriptionHi: 'प्रथम पूज्य महागणपति की शास्त्रोक्त पूजाविधि, अथर्वशीर्ष उपनिषद का रहस्य और संकटनाशन स्तोत्र का नित्य अनुष्ठान।',
    duration: '೧೮ ನಿಮಿಷ ಉಪನ್ಯಾಸ',
    durationEn: '18 min discourse',
    durationHi: '१८ मिनट प्रवचन'
  },
  {
    id: 'shivatatva-dhyana',
    title: 'ಶಿವತತ್ತ್ವ ಮತ್ತು ಧ್ಯಾನ',
    titleEn: 'Shiva Tattva & Meditation',
    titleHi: 'शिवतत्त्व और ध्यान',
    deity: 'ಶಿವ',
    deityLabel: 'ಪರಮಶಿವ',
    deityLabelEn: 'Paramashiva',
    deityLabelHi: 'परमशिव',
    image: '/images/shiva.jpg',
    url: 'https://www.youtube.com/',
    description: 'ಕೈಲಾಸಪತಿ ಸಾಂಬಸದಾಶಿವನ ನಿಸ್ಸೀಮ ಧ್ಯಾನಸ್ವರೂಪ, ಪಂಚಾಕ್ಷರೀ ಮಂತ್ರ ಮಹಿಮೆ ಮತ್ತು ಅದ್ವೈತದಲ್ಲಿ ಶಿವ-ಜೀವ ಐಕ್ಯತೆಯ ದರ್ಶನ.',
    descriptionEn: 'Meditative vision of Lord Shiva, glory of the Panchakshari Mantra, and non-dual realization of Jiva-Shiva unity in Advaita.',
    descriptionHi: 'कैलासपति सांबसदाशिव का ध्यानस्वरूप, पंचाक्षरी मंत्र की महिमा और अद्वैत में जीव-शिव की एकता का दर्शन।',
    duration: '೨೪ ನಿಮಿಷ ಧ್ಯಾನ ವಿಚಾರ',
    durationEn: '24 min meditation',
    durationHi: '२४ मिनट ध्यान विचार'
  },
  {
    id: 'lalita-devi-mahime',
    title: 'ಶ್ರೀ ಲಲಿತಾ ದೇವಿ ಮಹಿಮೆ',
    titleEn: 'Glory of Sri Lalita Devi',
    titleHi: 'श्री ललिता देवी महिमा',
    deity: 'ದೇವಿ',
    deityLabel: 'ಶ್ರೀ ಲಲಿತಾ',
    deityLabelEn: 'Sri Lalita',
    deityLabelHi: 'श्री ललिता',
    image: '/images/devi.jpg',
    url: 'https://www.youtube.com/',
    description: 'ಶ್ರೀಮಾತಾ ಶ್ರೀಮಹಾರಾಜ್ಞೀ ಲಲಿತಾ ಪರಮೇಶ್ವರಿಯ ಸಚ್ಚಿದಾನಂದ ರೂಪ, ಲಲಿತಾ ಸಹಸ್ರನಾಮದ ಪ್ರಭಾವ ಹಾಗೂ ಮಾತೃಭಾವದ ಉಪಾಸನೆ.',
    descriptionEn: 'Sacred worship of Divine Mother Lalita Parameshvari, spiritual grace of Lalita Sahasranama, and maternal devotion.',
    descriptionHi: 'श्रीमाता श्रीमहाराज्ञी ललिता परमेश्वरी का सच्चिदानंद रूप, ललिता सहस्रनाम का प्रभाव और मातृभाव की साधना।',
    duration: '೩೦ ನಿಮಿಷ ಶಾಸ್ತ್ರಾರ್ಥ',
    durationEn: '30 min exposition',
    durationHi: '३० मिनट शास्त्रार्थ'
  },
  {
    id: 'krishna-leela-vichara',
    title: 'ಶ್ರೀಕೃಷ್ಣ ಲೀಲಾ ವಿಚಾರ',
    titleEn: 'Significance of Sri Krishna Leela',
    titleHi: 'श्रीकृष्ण लीला विचार',
    deity: 'ಕೃಷ್ಣ',
    deityLabel: 'ಶ್ರೀಕೃಷ್ಣ',
    deityLabelEn: 'Lord Krishna',
    deityLabelHi: 'श्रीकृष्ण',
    image: '/images/krishna.jpg',
    url: 'https://www.youtube.com/',
    description: 'ಯೋಗೇಶ್ವರ ಶ್ರೀಕೃಷ್ಣನ ಅವತಾರ ರಹಸ್ಯ, ಭಾಗವತದ ಆಧ್ಯಾತ್ಮಿಕ ದರ್ಶನ ಮತ್ತು ಗೀತಾಚಾರ್ಯನ ಜ್ಞಾನೋಪದೇಶದ ತಾತ್ಪರ್ಯ.',
    descriptionEn: 'Incarnation mystery of Yogeshwara Krishna, spiritual allegory of the Bhagavata, and essence of the Bhagavad Gita.',
    descriptionHi: 'योगेश्वर श्रीकृष्ण का अवतार रहस्य, भागवत का आध्यात्मिक दर्शन और गीता के ज्ञानोपदेश का सार।',
    duration: '೨೨ ನಿಮಿಷ ಪ್ರವಚನ',
    durationEn: '22 min lecture',
    durationHi: '२२ मिनट प्रवचन'
  },
  {
    id: 'vighnanashaka-ganesha-kathe',
    title: 'ವಿಘ್ನನಾಶಕ ಗಣೇಶ ಕಥೆ',
    titleEn: 'Story of Obstacle-Remover Ganesha',
    titleHi: 'विघ्नहर्ता गणेश कथा',
    deity: 'ಗಣಪತಿ',
    deityLabel: 'ಶ್ರೀ ಗಣೇಶ',
    deityLabelEn: 'Lord Ganesha',
    deityLabelHi: 'श्री गणेश',
    image: '/images/ganesha.jpg',
    url: 'https://www.youtube.com/',
    description: 'ಪುರಾಣಗಳಲ್ಲಿ ವರ್ಣಿತವಾದ ಗಣಪತಿಯ ಪಾವನ ಚರಿತ್ರೆ, ಮೂಷಿಕ ವಾಹನ ತತ್ತ್ವ ಹಾಗೂ ಭಕ್ತರ ಸರ್ವವಿಘ್ನ ನಿವಾರಣೆಯ ಸತ್ಯಗಾಥೆ.',
    descriptionEn: 'Puranic lore of Lord Ganesha, symbolism of the mouse vehicle, and the divine assurance of obstacle removal.',
    descriptionHi: 'पुराणों में वर्णित भगवान गणेश का पावन चरित्र, मूषक वाहन तत्त्व और भक्तों के समस्त विघ्न निवारण की कथा।',
    duration: '೧೬ ನಿಮಿಷ ಕಥಾ ಶ್ರವಣ',
    durationEn: '16 min story',
    durationHi: '१६ मिनट कथा'
  },
  {
    id: 'kailasavasi-shankara-mahatmya',
    title: 'ಕೈಲಾಸವಾಸಿ ಶಂಕರ ಮಾಹಾತ್ಮ್ಯ',
    titleEn: 'Greatness of Kailasa-Dwelling Shiva',
    titleHi: 'कैलासवासी शंकर माहात्म्य',
    deity: 'ಶಿವ',
    deityLabel: 'ಪರಮಶಿವ',
    deityLabelEn: 'Paramashiva',
    deityLabelHi: 'परमशिव',
    image: '/images/shiva.jpg',
    url: 'https://www.youtube.com/',
    description: 'ಮಹಾದೇವನ ಭಕ್ತವತ್ಸಲತೆ, ಗಂಗಾಧರ ಮೂರ್ತಿಯ ರಹಸ್ಯ ಹಾಗೂ ಶಿವಲಿಂಗಾರ್ಚನೆಯಿಂದ ಲಭಿಸುವ ಪರಮ ಶಾಂತಿಯ ನಿರೂಪಣೆ.',
    descriptionEn: 'Compassion of Mahadeva, mystery of Gangadhara form, and profound peace attained through Shivalinga worship.',
    descriptionHi: 'महादेव की भक्तवत्सलता, गंगाधर मूर्ति का रहस्य और शिवलिंगार्चन से प्राप्त होने वाली परम शांति।',
    duration: '೨೮ ನಿಮಿಷ ಮಾಹಾತ್ಮ್ಯ',
    durationEn: '28 min discourse',
    durationHi: '२८ मिनट माहात्म्य'
  },
  {
    id: 'devi-bhakti-marga',
    title: 'ದೇವೀ ಭಕ್ತಿ ಮಾರ್ಗ',
    titleEn: 'The Path of Devi Bhakti',
    titleHi: 'देवी भक्ति मार्ग',
    deity: 'ದೇವಿ',
    deityLabel: 'ಶ್ರೀ ಲಲಿತಾ',
    deityLabelEn: 'Sri Lalita',
    deityLabelHi: 'श्री ललिता',
    image: '/images/devi.jpg',
    url: 'https://www.youtube.com/',
    description: 'ಜಗನ್ಮಾತೆಯ ಅಖಂಡ ಕರುಣೆಯನ್ನು ಆವಾಹಿಸುವ ಭಕ್ತಿ ಮಾರ್ಗ, ನವರಾತ್ರಿ ಉಪಾಸನೆಯ ರಹಸ್ಯಗಳು ಹಾಗೂ ದೇವೀ ಕವಚದ ರಕ್ಷಣೆ.',
    descriptionEn: 'The path of invoking Divine Mother’s unbounded grace, Navaratri secrets, and the protective Devi Kavacha.',
    descriptionHi: 'जगन्माता की कृपा प्राप्त करने का भक्ति मार्ग, नवरात्रि उपासना के रहस्य और देवी कवच का संरक्षण।',
    duration: '೨೦ ನಿಮಿಷ ಉಪಾಸನಾ ವಿಧಿ',
    durationEn: '20 min upasana',
    durationHi: '२० मिनट उपासना विधि'
  },
  {
    id: 'geeteya-sara-sankshepa',
    title: 'ಗೀತೆಯ ಸಾರ ಸಂಕ್ಷೇಪ',
    titleEn: 'Summary Essence of the Gita',
    titleHi: 'गीता सार संक्षेप',
    deity: 'ಕೃಷ್ಣ',
    deityLabel: 'ಶ್ರೀಕೃಷ್ಣ',
    deityLabelEn: 'Lord Krishna',
    deityLabelHi: 'श्रीकृष्ण',
    image: '/images/krishna.jpg',
    url: 'https://www.youtube.com/',
    description: 'ಶ್ರೀಮದ್ಭಗವದ್ಗೀತೆಯ ಹದಿನೆಂಟು ಅಧ್ಯಾಯಗಳ ಅಮೃತ ಸಾರ, ಕರ್ಮ-ಭಕ್ತಿ-ಜ್ಞಾನ ಯೋಗಗಳ ಸಮನ್ವಯ ಹಾಗೂ ನಿತ್ಯ ಜೀವನದ ಸಾಧನೆ.',
    descriptionEn: 'The nectarous essence of all 18 chapters of Bhagavad Gita, unifying Karma, Bhakti, and Jnana Yogas for daily living.',
    descriptionHi: 'श्रीमद्भगवद्गीता के १८ अध्यायों का अमृत सार, कर्म-भक्ति-ज्ञान योगों का समन्वय और दैनिक जीवन की साधना।',
    duration: '೩೫ ನಿಮಿಷ ಗೀತಾ ಸಾರ',
    durationEn: '35 min summary',
    durationHi: '३५ मिनट गीता सार'
  }
];

export const INVOCATION_SHLOKAS = [
  {
    sanskrit: 'श्रुतिस्मृतिपुराणानामालयं करुणालयम् ।\nनमामि भगवत्पादशङ्करं लोकशङ्करम् ॥',
    kannada: 'ಶ್ರುತಿಸ್ಮೃತಿಪುರಾಣಾನಾಮಾಲಯಂ ಕರುಣಾಲಯಮ್ ।\nನಮಾಮಿ ಭಗವತ್ಪಾದಶಂಕರಂ ಲೋಕಶಂಕರಮ್ ॥',
    meaningKn: 'ಶ್ರುತಿ, ಸ್ಮೃತಿ ಮತ್ತು ಪುರಾಣಗಳ ನಿಧಿಯೂ, ಕರುಣಾಮಯಿಯೂ, ಜಗತ್ತಿಗೆ ಶುಭವನ್ನುಂಟುಮಾಡುವವರೂ ಆದ ಭಗವಾನ್ ಶ್ರೀ ಶಂಕರಾಚಾರ್ಯರಿಗೆ ನನ್ನ ಸಾಷ್ಟಾಂಗ ಪ್ರಣಾಮಗಳು.',
    meaningEn: 'I bow to Jagadguru Bhagavatpada Shankara, the repository of the Vedas, Smritis, and Puranas, the abode of boundless compassion, who bestows auspiciousness upon the world.',
    meaningHi: 'श्रुति, स्मृति और पुराणों के धाम, करुणा के सागर, संसार का कल्याण करने वाले भगवान शंकराचार्य के श्रीचरणों में मेरा साष्टांग प्रणाम।'
  },
  {
    sanskrit: 'शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि ॥',
    kannada: 'ಶಿವಃ ಶಕ್ತ್ಯಾ ಯುಕ್ತೋ ಯದಿ ಭವತಿ ಶಕ್ತಃ ಪ್ರಭವಿತುಂ\nನ ಚೇದೇವಂ ದೇವೋ ನ ಖಲು ಕುಶಲಃ ಸ್ಪಂದಿತುಮಪಿ ॥',
    meaningKn: 'ಶಿವನು ಶಕ್ತಿಯೊಡನೆ ಕೂಡಿದಾಗ ಮಾತ್ರ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸಲು ಸಮರ್ಥನಾಗುತ್ತಾನೆ; ಇಲ್ಲದಿದ್ದರೆ ಆತನು ಚಲಿಸಲೂ ಅಸಮರ್ಥನು. (ಸೌಂದರ್ಯಲಹರೀ - ಶ್ಲೋಕ ೧)',
    meaningEn: 'Shiva is capable of creating the cosmos only when united with Shakti; without Her, the Divine Lord cannot even stir. (Saundarya Lahari - Verse 1)',
    meaningHi: 'शिव जब शक्ति से युक्त होते हैं, तभी सृष्टि की रचना करने में समर्थ होते हैं; शक्ति के बिना देव स्पंदन करने में भी असमर्थ हैं। (सौंदर्यलहरी - श्लोक १)'
  }
];

export function getLocalizedArticle(article: ArticleItem, lang: Language) {
  if (lang === 'en') {
    return {
      title: article.titleEn || article.title,
      summary: article.summaryEn || article.summary,
      keyPoints: article.keyPointsEn || article.keyPoints || [],
      categoryLabel: article.categoryLabelEn || article.categoryLabel,
      scriptureRef: article.scriptureRefEn || article.scriptureRef,
      readTime: article.readTimeEn || article.readTime,
    };
  }
  if (lang === 'hi') {
    return {
      title: article.titleHi || article.title,
      summary: article.summaryHi || article.summary,
      keyPoints: article.keyPointsHi || article.keyPoints || [],
      categoryLabel: article.categoryLabelHi || article.categoryLabel,
      scriptureRef: article.scriptureRefHi || article.scriptureRef,
      readTime: article.readTimeHi || article.readTime,
    };
  }
  return {
    title: article.title,
    summary: article.summary,
    keyPoints: article.keyPoints || [],
    categoryLabel: article.categoryLabel,
    scriptureRef: article.scriptureRef,
    readTime: article.readTime,
  };
}

export function getLocalizedDeityMedia(item: DeityMediaItem, lang: Language) {
  if (lang === 'en') {
    return {
      title: item.titleEn || item.title,
      description: item.descriptionEn || item.description,
      deityLabel: item.deityLabelEn || item.deityLabel,
      duration: item.durationEn || item.duration,
    };
  }
  if (lang === 'hi') {
    return {
      title: item.titleHi || item.title,
      description: item.descriptionHi || item.description,
      deityLabel: item.deityLabelHi || item.deityLabel,
      duration: item.durationHi || item.duration,
    };
  }
  return {
    title: item.title,
    description: item.description,
    deityLabel: item.deityLabel,
    duration: item.duration,
  };
}
