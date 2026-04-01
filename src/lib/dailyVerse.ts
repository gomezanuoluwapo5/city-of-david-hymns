// Daily Bible Verse feature with notification support

const DAILY_VERSE_KEY = 'cod_daily_verse';
const NOTIF_SETTINGS_KEY = 'cod_daily_verse_notif';

export interface DailyVerse {
  reference: string;
  text: string;
  prayer: string;
  date: string; // YYYY-MM-DD
}

export interface NotifSettings {
  enabled: boolean;
  hour: number; // 0-23
  minute: number; // 0-59
}

// Curated list of popular Bible verses for daily rotation
const VERSES: { reference: string; text: string; prayer: string }[] = [
  { reference: "John 3:16", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", prayer: "Father, thank You for Your immeasurable love. Help me to walk in the fullness of the eternal life You have given through Jesus Christ. Amen." },
  { reference: "Psalm 23:1", text: "The LORD is my shepherd; I shall not want.", prayer: "Lord, You are my Shepherd. I trust You to provide for every need in my life today. Lead me in Your perfect peace. Amen." },
  { reference: "Proverbs 3:5-6", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", prayer: "Dear God, I surrender my plans to You. Give me the grace to trust You completely and not rely on my own limited understanding. Amen." },
  { reference: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me.", prayer: "Lord Jesus, strengthen me today for every task and challenge ahead. I know I can do all things because You empower me. Amen." },
  { reference: "Romans 8:28", text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", prayer: "Father, even when I don't understand my circumstances, I trust that You are working all things for my good. Increase my faith. Amen." },
  { reference: "Isaiah 41:10", text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.", prayer: "Almighty God, take away every fear from my heart. I rest in the assurance that You are with me and will uphold me. Amen." },
  { reference: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", prayer: "Lord, I thank You that Your plans for me are good. Help me to be patient as You unfold Your purpose in my life. Amen." },
  { reference: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble.", prayer: "Father, You are my refuge. In every storm and trial, I run to You knowing You are my present help. Amen." },
  { reference: "Matthew 11:28", text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", prayer: "Jesus, I bring my burdens to You today. Grant me Your rest and peace that surpasses all understanding. Amen." },
  { reference: "Romans 12:2", text: "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.", prayer: "Holy Spirit, renew my mind daily. Transform my thoughts so I may discern and walk in God's perfect will. Amen." },
  { reference: "Psalm 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path.", prayer: "Lord, illuminate my path with Your Word. Help me to study, meditate, and apply Your truth in every decision. Amen." },
  { reference: "Joshua 1:9", text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", prayer: "God of heaven and earth, fill me with courage and boldness. Wherever I go today, I know You are with me. Amen." },
  { reference: "2 Corinthians 5:17", text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", prayer: "Father, thank You for making me a new creation in Christ. Help me to leave behind old habits and walk in newness of life. Amen." },
  { reference: "Psalm 37:4", text: "Delight thyself also in the LORD; and he shall give thee the desires of thine heart.", prayer: "Lord, let my greatest delight be in You. Align my desires with Your will so I may experience the fullness of Your blessings. Amen." },
  { reference: "Hebrews 11:1", text: "Now faith is the substance of things hoped for, the evidence of things not seen.", prayer: "Father, increase my faith. Help me to hold on to Your promises even when I cannot see the outcome. Amen." },
  { reference: "1 John 4:8", text: "He that loveth not knoweth not God; for God is love.", prayer: "God of love, teach me to love others as You love me — unconditionally and sacrificially. Amen." },
  { reference: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.", prayer: "Holy Spirit, produce Your fruit abundantly in my life. Let love, joy, peace, and patience overflow from my heart. Amen." },
  { reference: "Psalm 91:1-2", text: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.", prayer: "Most High God, I dwell in Your secret place today. Cover me under Your shadow and protect me from all harm. Amen." },
  { reference: "Ephesians 2:8-9", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.", prayer: "Father, I am grateful for Your grace. Help me never to take for granted the gift of salvation through faith in Jesus Christ. Amen." },
  { reference: "Matthew 6:33", text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", prayer: "Lord, help me to prioritize Your kingdom above all else today. I trust You to supply every other need. Amen." },
  { reference: "Psalm 27:1", text: "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?", prayer: "Lord, You are my light and salvation. Dispel every darkness and fear from my life. I walk boldly in Your strength. Amen." },
  { reference: "Lamentations 3:22-23", text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.", prayer: "Faithful God, thank You for new mercies this morning. Your faithfulness sustains me through every season. Amen." },
  { reference: "1 Corinthians 10:13", text: "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able.", prayer: "Lord, when temptation comes, provide a way of escape. Strengthen me to stand firm in righteousness. Amen." },
  { reference: "Colossians 3:23", text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.", prayer: "Father, help me to give my best in everything I do today — not for human praise, but as worship unto You. Amen." },
  { reference: "Psalm 34:8", text: "O taste and see that the LORD is good: blessed is the man that trusteth in him.", prayer: "Lord, let me experience Your goodness afresh today. I put my trust fully in You. Amen." },
  { reference: "Isaiah 40:31", text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", prayer: "Father, teach me patience as I wait on You. Renew my strength so I can soar above every obstacle. Amen." },
  { reference: "Romans 15:13", text: "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.", prayer: "God of hope, fill me with joy and peace. Let hope overflow in my heart through the power of the Holy Spirit. Amen." },
  { reference: "2 Timothy 1:7", text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", prayer: "Lord, I reject the spirit of fear. Thank You for giving me power, love, and a sound mind through Your Spirit. Amen." },
  { reference: "Psalm 139:14", text: "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.", prayer: "Creator God, thank You for making me wonderfully. Help me to see myself the way You see me — fearfully and wonderfully made. Amen." },
  { reference: "Matthew 5:16", text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.", prayer: "Lord, let my life be a shining light that points others to You. Use my words and actions to glorify Your name. Amen." },
  { reference: "Psalm 121:1-2", text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.", prayer: "Lord, I look to You for help today. You who made heaven and earth are more than able to sustain me. Amen." },
];

function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

function getVerseIndexForDate(dateStr: string): number {
  // Use date as seed to pick a consistent verse per day
  const parts = dateStr.split('-').map(Number);
  const seed = parts[0] * 10000 + parts[1] * 100 + parts[2];
  return seed % VERSES.length;
}

export function getDailyVerse(): DailyVerse {
  const today = getTodayString();

  // Check cache
  try {
    const cached = localStorage.getItem(DAILY_VERSE_KEY);
    if (cached) {
      const parsed: DailyVerse = JSON.parse(cached);
      if (parsed.date === today) return parsed;
    }
  } catch { /* ignore */ }

  const idx = getVerseIndexForDate(today);
  const verse: DailyVerse = { ...VERSES[idx], date: today };
  localStorage.setItem(DAILY_VERSE_KEY, JSON.stringify(verse));
  return verse;
}

// Notification settings
export function getNotifSettings(): NotifSettings {
  try {
    const raw = localStorage.getItem(NOTIF_SETTINGS_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { enabled: false, hour: 7, minute: 0 };
}

export function setNotifSettings(settings: NotifSettings): void {
  localStorage.setItem(NOTIF_SETTINGS_KEY, JSON.stringify(settings));
  if (settings.enabled) {
    scheduleNotification(settings);
  } else {
    cancelNotification();
  }
}

// Request notification permission
export async function requestNotifPermission(): Promise<boolean> {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  const result = await Notification.requestPermission();
  return result === 'granted';
}

let notifTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleNotification(settings: NotifSettings): void {
  cancelNotification();
  
  const now = new Date();
  const target = new Date();
  target.setHours(settings.hour, settings.minute, 0, 0);
  
  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }
  
  const delay = target.getTime() - now.getTime();
  
  notifTimer = setTimeout(() => {
    showDailyVerseNotification();
    // Reschedule for next day
    scheduleNotification(settings);
  }, delay);
}

function cancelNotification(): void {
  if (notifTimer) {
    clearTimeout(notifTimer);
    notifTimer = null;
  }
}

function showDailyVerseNotification(): void {
  if (Notification.permission !== 'granted') return;
  const verse = getDailyVerse();
  new Notification("📖 Daily Bible Verse", {
    body: `${verse.text.slice(0, 120)}...\n— ${verse.reference}`,
    icon: '/placeholder.svg',
    tag: 'daily-verse',
  });
}

// Initialize notifications on app load
export function initDailyVerseNotifications(): void {
  const settings = getNotifSettings();
  if (settings.enabled) {
    scheduleNotification(settings);
  }
}
