/* ─────────────────────────────────────────────────────────────────────────────
   Verified LinkedIn Recommendations Data
   Third-party professional recommendations received by Erolla Rishvin Reddy.
   Verbatim text from official LinkedIn source:
   https://www.linkedin.com/in/rishvinreddy/details/recommendations/?detailScreenTabIndex=2
───────────────────────────────────────────────────────────────────────────── */

export interface Recommendation {
  id: string;
  name: string;
  initials: string;
  title: string;
  shortTitle: string;
  relationship: string;
  date: string;
  dateShort: string;
  excerpt: string;
  fullText: string;
  linkedinUrl: string;
}

export const LINKEDIN_RECOMMENDATIONS_SOURCE_URL =
  'https://www.linkedin.com/in/rishvinreddy/details/recommendations/?detailScreenTabIndex=2';

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'sachith',
    name: 'Sachith Reddy Yerolla',
    initials: 'SY',
    title: 'Senior Software Engineer at Adqura',
    shortTitle: 'Senior Software Engineer · Adqura',
    relationship: 'Mentor during Pega internship',
    date: 'September 30, 2026',
    dateShort: 'Sep 30, 2026',
    excerpt:
      'Rishvin is a motivated and enthusiastic Computer Science student with a strong willingness to learn and explore new technologies. His Pega internship has given him valuable exposure to the Pega ecosystem and a professional environment. From my interactions with him, I have found him to be curious, committed to learning, and proactive in developing practical skills.',
    fullText:
      'Rishvin is a motivated and enthusiastic Computer Science student with a strong willingness to learn and explore new technologies. His Pega internship has given him valuable exposure to the Pega ecosystem and a professional environment.\n\nFrom my interactions with him, I have found him to be curious, committed to learning, and proactive in developing practical skills. I wish him continued success in his professional journey.',
    linkedinUrl: 'https://www.linkedin.com/in/sachith-reddy/',
  },
  {
    id: 'meher',
    name: 'Meher Gayatri Devi Tiwari',
    initials: 'MG',
    title:
      'Assistant Professor | PEGA Certified System Architect (CSA) | Cyber Security Zealot | Prompt Engineering Enthusiast',
    shortTitle: 'Assistant Professor · PEGA Certified System Architect',
    relationship: 'Mentor',
    date: 'September 19, 2026',
    dateShort: 'Sep 19, 2026',
    excerpt:
      'I am pleased to recommend Mr. Rishvin Reddy, whose initiative, technical curiosity, and interest in practical problem-solving have been evident through our interactions. Rishvin demonstrates a strong inclination toward exploring emerging technologies, automation, and the development of solutions that address real-world challenges.',
    fullText:
      'I am pleased to recommend Mr. Rishvin Reddy, whose initiative, technical curiosity, and interest in practical problem-solving have been evident through our interactions.\n\nRishvin demonstrates a strong inclination toward exploring emerging technologies, automation, and the development of solutions that address real-world challenges. Our discussions around workflow automation, customer relationship management systems, and the practical implementation of technology have reflected his willingness to think beyond conventional approaches and explore opportunities for innovation.\n\nWhat I particularly appreciate is his proactive attitude toward learning and improvement. He actively seeks feedback, discusses ideas, and looks for ways to enhance his projects and their potential applications. His interest in developing solutions that could support everyday university operations also reflects his focus on practical impact.\n\nI believe Rishvin\'s curiosity, initiative, and commitment to expanding his technical knowledge will support his continued professional growth. I wish him every success in his future academic and professional endeavors.',
    linkedinUrl: 'https://www.linkedin.com/in/mehergayatridevi/',
  },
  {
    id: 'bhanu',
    name: 'Dr. S. Bhanu Prakash',
    initials: 'BP',
    title:
      'Associate Professor, School of Technology, Woxsen University, Hyderabad | Power Electronics in Renewable Energy',
    shortTitle: 'Associate Professor · Woxsen University',
    relationship: 'Mentor',
    date: 'September 10, 2026',
    dateShort: 'Sep 10, 2026',
    excerpt:
      'I am pleased to recommend Rishvin Reddy, whom I had the opportunity to teach in the Engineering Concepts in IoT course. Rishvin is a sincere and enthusiastic student who has demonstrated a good understanding of engineering fundamentals and IoT concepts, showing a positive attitude toward learning and good analytical problem-solving abilities.',
    fullText:
      'I am pleased to recommend Rishvin Reddy, whom I had the opportunity to teach in the Engineering Concepts in IoT course. Rishvin is a sincere and enthusiastic student who has demonstrated a good understanding of engineering fundamentals and IoT concepts.\n\nDuring the course, he showed a positive attitude toward learning, good analytical and problem-solving abilities, and a willingness to understand the practical applications of emerging technologies. He was attentive to academic activities and demonstrated a genuine interest in developing his technical knowledge.\n\nI appreciate Rishvin\'s sincerity, discipline, and willingness to learn, and I am confident that he has the potential to grow further and achieve success in his academic and professional career. I wish him all the very best for his future endeavors.',
    linkedinUrl: 'https://www.linkedin.com/in/dr-s-bhanu-prakash-3a5a6221/',
  },
  {
    id: 'sandeep',
    name: 'Dr. Sandeep Dasari',
    initials: 'SD',
    title: 'Assistant Professor at VIT-AP University',
    shortTitle: 'Assistant Professor · VIT-AP University',
    relationship: 'Mentor',
    date: 'September 8, 2026',
    dateShort: 'Sep 8, 2026',
    excerpt:
      'I had the opportunity to teach and mentor Rishvin at Woxsen University. He is a disciplined, sincere, and responsible student who approaches academic and project work with dedication and a strong sense of ownership. He demonstrates sound technical understanding, good problem-solving ability, and a consistent willingness to learn and improve.',
    fullText:
      'I had the opportunity to teach and mentor Rishvin at Woxsen University. He is a disciplined, sincere, and responsible student who approaches academic and project work with dedication and a strong sense of ownership. He demonstrates sound technical understanding, good problem-solving ability, and a consistent willingness to learn and improve.\n\nHis respectful attitude, reliability, and commitment to completing tasks with quality make him a promising candidate for both higher studies and professional opportunities. I am confident that he will continue to grow and contribute positively wherever he works or studies.',
    linkedinUrl: 'https://www.linkedin.com/in/dr-sandeep-dasari-2681102a1/',
  },
];
