// ===== DATABASE FAKTA (30+ FAKTA) =====
const factsDB = [
    // SAINS (5 fakta)
    {
        category: "sains", emoji: "🔬", title: "Air panas membeku lebih cepat dari air dingin",
        desc: "Fenomena ini disebut Efek Mpemba. Dinamai dari siswa Tanzania, Erasto Mpemba, yang mengamatinya saat membuat es krim pada 1963.",
        source: "Physics World", isTrue: true,
        quizQuestion: "Siapa yang menemukan Efek Mpemba?",
        quizOptions: ["Isaac Newton", "Erasto Mpemba", "Albert Einstein", "Marie Curie"], quizAnswer: 1
    },
    {
        category: "sains", emoji: "🧬", title: "DNA manusia 60% identik dengan pisang",
        desc: "Meski terlihat sangat berbeda, manusia dan pisang berbagi sekitar 60% gen yang sama karena semua makhluk hidup berasal dari nenek moyang yang sama.",
        source: "National Human Genome Research Institute", isTrue: true,
        quizQuestion: "Berapa persen DNA manusia yang identik dengan pisang?",
        quizOptions: ["20%", "40%", "60%", "80%"], quizAnswer: 2
    },
    {
        category: "sains", emoji: "⚛️", title: "Atom 99.9999999% adalah ruang kosong",
        desc: "Jika inti atom sebesar kelereng, elektron terdekat berjarak sekitar 1 km. Seluruh umat manusia bisa muat dalam sebutir gula jika ruang kosong dihilangkan.",
        source: "CERN", isTrue: true,
        quizQuestion: "Jika inti atom sebesar kelereng, berapa jarak elektron terdekat?",
        quizOptions: ["1 meter", "100 meter", "1 kilometer", "10 kilometer"], quizAnswer: 2
    },
    {
        category: "sains", emoji: "🌡️", title: "Satu sendok bintang neutron beratnya 6 miliar ton",
        desc: "Bintang neutron adalah sisa ledakan supernova yang sangat padat. Satu sendok teh materinya bisa seberat Gunung Everest.",
        source: "NASA", isTrue: true,
        quizQuestion: "Berapa berat satu sendok bintang neutron?",
        quizOptions: ["6 juta ton", "6 miliar ton", "6 triliun ton", "6 kilogram"], quizAnswer: 1
    },
    {
        category: "sains", emoji: "💧", title: "Air bisa mendidih dan membeku secara bersamaan",
        desc: "Dalam kondisi tertentu (titik triple), air bisa berada dalam 3 fase sekaligus: padat, cair, dan gas. Ini terjadi pada suhu 0.01°C dan tekanan 0.006 atm.",
        source: "Thermodynamics Research", isTrue: true,
        quizQuestion: "Pada suhu berapa air bisa berada dalam 3 fase sekaligus?",
        quizOptions: ["0°C", "0.01°C", "100°C", "-273°C"], quizAnswer: 1
    },
    
    // SEJARAH (5 fakta)
    {
        category: "sejarah", emoji: "📜", title: "Oxford University lebih tua dari Kekaisaran Aztec",
        desc: "Oxford mulai mengajar sejak tahun 1096, sementara Kekaisaran Aztec didirikan pada 1428. Oxford sudah berusia 300+ tahun sebelum Aztec berdiri.",
        source: "Oxford University Archives", isTrue: true,
        quizQuestion: "Kapan Oxford University mulai mengajar?",
        quizOptions: ["Tahun 800", "Tahun 1096", "Tahun 1428", "Tahun 1500"], quizAnswer: 1
    },
    {
        category: "sejarah", emoji: "🏛️", title: "Cleopatra hidup lebih dekat ke iPhone daripada Piramida",
        desc: "Piramida Giza dibangun sekitar 2560 SM, Cleopatra hidup sekitar 30 SM, dan iPhone dirilis 2007. Jarak Cleopatra ke iPhone lebih dekat daripada ke Piramida.",
        source: "Historical Timeline Analysis", isTrue: true,
        quizQuestion: "Kapan Piramida Giza dibangun?",
        quizOptions: ["2560 SM", "1000 SM", "500 SM", "30 SM"], quizAnswer: 0
    },
    {
        category: "sejarah", emoji: "⚔️", title: "Perang terpendek dalam sejarah hanya 38 menit",
        desc: "Perang Anglo-Zanzibar pada 27 Agustus 1896 adalah perang terpendek yang pernah tercatat. Inggris mengalahkan Zanzibar dalam waktu kurang dari satu jam.",
        source: "British Historical Records", isTrue: true,
        quizQuestion: "Berapa lama perang terpendek dalam sejarah?",
        quizOptions: ["10 menit", "38 menit", "1 jam", "2 jam"], quizAnswer: 1
    },
    {
        category: "sejarah", emoji: "🗺️", title: "Saudi Arabia mengimpor unta dari Australia",
        desc: "Meski identik dengan unta dan gurun, Arab Saudi mengimpor unta dari Australia untuk dikonsumsi. Australia memiliki populasi unta liar terbesar di dunia.",
        source: "Trade Records", isTrue: true,
        quizQuestion: "Dari negara mana Saudi Arabia mengimpor unta?",
        quizOptions: ["Afrika", "India", "Australia", "Amerika"], quizAnswer: 2
    },
    {
        category: "sejarah", emoji: "👑", title: "Napoleon sebenarnya tidak pendek",
        desc: "Tinggi Napoleon sekitar 170 cm, rata-rata untuk pria Prancis pada zamannya. Mitos 'kependekannya' berasal dari perbedaan satuan pengukuran Prancis dan Inggris.",
        source: "Historical Biography", isTrue: true,
        quizQuestion: "Berapa tinggi Napoleon sebenarnya?",
        quizOptions: ["150 cm", "160 cm", "170 cm", "180 cm"], quizAnswer: 2
    },
    
    // PSIKOLOGI (4 fakta)
    {
        category: "psikologi", emoji: "🧩", title: "Efek Dunning-Kruger: Orang bodoh merasa paling pintar",
        desc: "Orang dengan kemampuan rendah cenderung overestimate kemampuan mereka, sementara ahli justru meragukan diri sendiri.",
        source: "Cornell University, 1999", isTrue: true,
        quizQuestion: "Apa yang dialami orang dengan kemampuan rendah menurut Efek Dunning-Kruger?",
        quizOptions: ["Merasa sangat bodoh", "Overestimate kemampuan mereka", "Menjadi lebih pintar", "Tidak peduli dengan kemampuan"], quizAnswer: 1
    },
    {
        category: "psikologi", emoji: "👁️", title: "Memori palsu bisa ditanam dalam 15 menit",
        desc: "Penelitian Elizabeth Loftus menunjukkan memori palsu bisa ditanam dengan mudah. Otak tidak merekam kejadian seperti video, tapi merekonstruksinya.",
        source: "University of California", isTrue: true,
        quizQuestion: "Siapa peneliti yang membuktikan memori palsu bisa ditanam?",
        quizOptions: ["Sigmund Freud", "Elizabeth Loftus", "Carl Jung", "B.F. Skinner"], quizAnswer: 1
    },
    {
        category: "psikologi", emoji: "🎵", title: "Lagu favoritmu terkait momen penting dalam hidup",
        desc: "Penelitian menunjukkan preferensi musik kita memuncak di usia 13-16 tahun. Otak remaja lebih responsif terhadap musik karena pelepasan dopamin yang intens.",
        source: "Frontiers in Psychology", isTrue: true,
        quizQuestion: "Di usia berapa preferensi musik kita memuncak?",
        quizOptions: ["5-10 tahun", "13-16 tahun", "20-25 tahun", "30-35 tahun"], quizAnswer: 1
    },
    {
        category: "psikologi", emoji: "🧠", title: "Otak manusia menggunakan 20% energi tubuh",
        desc: "Meski hanya 2% dari berat badan, otak mengonsumsi 20% oksigen dan glukosa tubuh. Ini karena otak memiliki 86 miliar neuron yang terus aktif.",
        source: "Neuroscience Research", isTrue: true,
        quizQuestion: "Berapa persen energi tubuh yang digunakan otak?",
        quizOptions: ["5%", "10%", "20%", "50%"], quizAnswer: 2
    },
    
    // LUAR ANGKASA (4 fakta)
    {
        category: "luar-angkasa", emoji: "🪐", title: "Di Venus, satu hari lebih lama dari satu tahun",
        desc: "Satu hari di Venus (243 hari Bumi) lebih lama dari satu tahun Venus (225 hari Bumi). Venus juga berputar berlawanan arah.",
        source: "NASA Planetary Facts", isTrue: true,
        quizQuestion: "Berapa lama satu hari di Venus dalam hari Bumi?",
        quizOptions: ["100 hari", "225 hari", "243 hari", "365 hari"], quizAnswer: 2
    },
    {
        category: "luar-angkasa", emoji: "🌌", title: "Ada lebih banyak bintang daripada butiran pasir di Bumi",
        desc: "Estimasi menunjukkan ada sekitar 200 sextillion bintang di alam semesta teramati, melebihi semua butiran pasir di Bumi.",
        source: "Australian National University", isTrue: true,
        quizQuestion: "Berapa estimasi jumlah bintang di alam semesta teramati?",
        quizOptions: ["1 juta", "1 miliar", "200 sextillion", "1 triliun"], quizAnswer: 2
    },
    {
        category: "luar-angkasa", emoji: "🌑", title: "Jejak kaki astronaut di Bulan akan bertahan jutaan tahun",
        desc: "Karena Bulan tidak memiliki atmosfer, tidak ada angin atau air yang bisa mengikis permukaan. Jejak kaki Apollo akan tetap ada jutaan tahun.",
        source: "Lunar Reconnaissance Orbiter", isTrue: true,
        quizQuestion: "Mengapa jejak kaki di Bulan bisa bertahan lama?",
        quizOptions: ["Karena gravitasi rendah", "Karena tidak ada atmosfer", "Karena suhu dingin", "Karena radiasi matahari"], quizAnswer: 1
    },
    {
        category: "luar-angkasa", emoji: "☀️", title: "Cahaya Matahari berusia 8 menit 20 detik",
        desc: "Cahaya butuh waktu sekitar 8 menit 20 detik untuk menempuh jarak 150 juta km dari Matahari ke Bumi. Jika Matahari padam, kita baru tahu 8 menit kemudian.",
        source: "Space.com", isTrue: true,
        quizQuestion: "Berapa lama cahaya Matahari sampai ke Bumi?",
        quizOptions: ["1 detik", "8 menit 20 detik", "1 jam", "1 hari"], quizAnswer: 1
    },
    
    // ALAM (4 fakta)
    {
        category: "alam", emoji: "🌿", title: "Pohon berkomunikasi lewat jaringan jamur",
        desc: "Disebut 'Wood Wide Web', pohon menggunakan jaringan mikoriza untuk saling berbagi nutrisi, mengirim peringatan bahaya, bahkan memberi makan anak pohonnya.",
        source: "Nature Journal", isTrue: true,
        quizQuestion: "Apa nama jaringan yang digunakan pohon untuk berkomunikasi?",
        quizOptions: ["Root Web", "Wood Wide Web", "Tree Network", "Forest Link"], quizAnswer: 1
    },
    {
        category: "alam", emoji: "🐙", title: "Gurita memiliki 3 jantung dan darah biru",
        desc: "Dua jantung memompa darah ke insang, satu jantung memompa ke seluruh tubuh. Darahnya biru karena menggunakan hemocyanin berbasis tembaga.",
        source: "Marine Biology Institute", isTrue: true,
        quizQuestion: "Berapa jumlah jantung yang dimiliki gurita?",
        quizOptions: ["1", "2", "3", "4"], quizAnswer: 2
    },
    {
        category: "alam", emoji: "🍯", title: "Madu tidak pernah basi",
        desc: "Arkeolog menemukan madu berusia 3.000 tahun di makam Mesir Kuno yang masih bisa dimakan. Kandungan air rendah dan pH asam menciptakan lingkungan anti-bakteri.",
        source: "Smithsonian Magazine", isTrue: true,
        quizQuestion: "Berapa usia madu tertua yang masih bisa dimakan?",
        quizOptions: ["100 tahun", "500 tahun", "1000 tahun", "3000 tahun"], quizAnswer: 3
    },
    {
        category: "alam", emoji: "🦈", title: "Hiu sudah ada sebelum pohon",
        desc: "Hiu pertama muncul sekitar 450 juta tahun lalu, sementara pohon pertama baru muncul sekitar 350 juta tahun lalu. Hiu juga lebih tua dari cincin Saturnus.",
        source: "Paleontological Research", isTrue: true,
        quizQuestion: "Kapan hiu pertama muncul di Bumi?",
        quizOptions: ["100 juta tahun lalu", "250 juta tahun lalu", "450 juta tahun lalu", "1 miliar tahun lalu"], quizAnswer: 2
    },
    
    // TEKNOLOGI (4 fakta)
    {
        category: "teknologi", emoji: "💻", title: "Smartphone-mu lebih kuat dari komputer Apollo",
        desc: "Komputer Apollo memiliki RAM 4KB dan prosesor 0.043 MHz. Smartphone modern memiliki RAM 8GB (2 juta kali lipat) dan prosesor 3GHz.",
        source: "MIT Technology Review", isTrue: true,
        quizQuestion: "Berapa RAM komputer Apollo?",
        quizOptions: ["1KB", "4KB", "64KB", "1MB"], quizAnswer: 1
    },
    {
        category: "teknologi", emoji: "🌐", title: "90% data dunia diciptakan dalam 2 tahun terakhir",
        desc: "Setiap menit, 500 jam video di-upload ke YouTube, 6 juta pencarian Google dilakukan, dan 188 juta email dikirim.",
        source: "IBM & Domo Data Study", isTrue: true,
        quizQuestion: "Berapa jam video di-upload ke YouTube setiap menit?",
        quizOptions: ["50 jam", "100 jam", "500 jam", "1000 jam"], quizAnswer: 2
    },
    {
        category: "teknologi", emoji: "🔐", title: "Password '123456' digunakan oleh 23 juta akun",
        desc: "Meski sudah diingatkan berkali-kali, password terlemah ini masih menjadi yang paling populer di dunia. Peretas bisa membobolnya dalam kurang dari 1 detik.",
        source: "NordPass Security Report", isTrue: true,
        quizQuestion: "Berapa banyak akun yang menggunakan password '123456'?",
        quizOptions: ["1 juta", "10 juta", "23 juta", "100 juta"], quizAnswer: 2
    },
    {
        category: "teknologi", emoji: "📱", title: "iPhone pertama hanya punya RAM 128MB",
        desc: "iPhone pertama (2007) memiliki RAM 128MB dan prosesor 412 MHz. Smartphone modern memiliki RAM 8-12GB dan prosesor 3+ GHz.",
        source: "Apple Technical Specs", isTrue: true,
        quizQuestion: "Berapa RAM iPhone pertama?",
        quizOptions: ["64MB", "128MB", "256MB", "512MB"], quizAnswer: 1
    },
    
    // UNIK (5 fakta)
    {
        category: "unik", emoji: "🎭", title: "Wombat mengeluarkan kotoran berbentuk kubus",
        desc: "Wombat adalah satu-satunya hewan yang menghasilkan kotoran berbentuk kubus untuk menandai wilayah tanpa menggelinding.",
        source: "Current Biology, 2018", isTrue: true,
        quizQuestion: "Hewan apa yang mengeluarkan kotoran berbentuk kubus?",
        quizOptions: ["Koala", "Kanguru", "Wombat", "Platypus"], quizAnswer: 2
    },
    {
        category: "unik", emoji: "🎰", title: "Setiap kocokkan kartu menghasilkan urutan unik",
        desc: "Jumlah kemungkinan urutan 52 kartu adalah 52! = 8×10⁶⁷, lebih besar dari jumlah atom di Bumi. Setiap kocokkan benar-benar unik.",
        source: "Mathematical Probability Theory", isTrue: true,
        quizQuestion: "Berapa jumlah kemungkinan urutan 52 kartu?",
        quizOptions: ["52 juta", "52 miliar", "52! (faktorial)", "52^52"], quizAnswer: 2
    },
    {
        category: "unik", emoji: "👃", title: "Kamu bisa mencium bau hujan sebelum hujan turun",
        desc: "Petrichor dihasilkan oleh bakteri tanah yang melepaskan geosmin. Angin bisa membawa aroma ini hingga 10 km sebelum hujan tiba.",
        source: "MIT Research, 2015", isTrue: true,
        quizQuestion: "Apa nama bau khas setelah hujan?",
        quizOptions: ["Geosmin", "Petrichor", "Ozone", "Mist"], quizAnswer: 1
    },
    {
        category: "unik", emoji: "🦷", title: "Hiu bisa mengganti gigi hingga 50.000 kali",
        desc: "Hiu memiliki barisan gigi cadangan. Setiap kali gigi tanggal, gigi baru bergeser maju dalam waktu 1-2 hari. Satu hiu bisa menggunakan lebih dari 30.000 gigi seumur hidup.",
        source: "Florida Museum", isTrue: true,
        quizQuestion: "Berapa kali hiu bisa mengganti gigi seumur hidup?",
        quizOptions: ["100 kali", "1000 kali", "10.000 kali", "50.000 kali"], quizAnswer: 3
    },
    {
        category: "unik", emoji: "🐘", title: "Gajah adalah satu-satunya hewan yang tidak bisa melompat",
        desc: "Karena struktur kaki dan berat badannya, gajah tidak bisa mengangkat keempat kakinya dari tanah secara bersamaan. Mereka juga tidak bisa berlari dalam arti tradisional.",
        source: "Zoological Society", isTrue: true,
        quizQuestion: "Hewan apa yang tidak bisa melompat?",
        quizOptions: ["Kuda nil", "Badak", "Gajah", "Jerapah"], quizAnswer: 2
    }
];

// ===== ACHIEVEMENTS =====
const achievements = [
    { id: 'first_fact', icon: '🎯', name: 'Pemula', desc: 'Baca fakta pertama', requirement: 1, xp: 10 },
    { id: 'explorer', icon: '🧭', name: 'Penjelajah', desc: 'Baca 10 fakta', requirement: 10, xp: 50 },
    { id: 'scholar', icon: '📚', name: 'Cendekia', desc: 'Baca 25 fakta', requirement: 25, xp: 100 },
    { id: 'master', icon: '🎓', name: 'Master', desc: 'Baca 50 fakta', requirement: 50, xp: 200 },
    { id: 'collector', icon: '🔖', name: 'Kolektor', desc: 'Simpan 5 fakta', requirement: 5, xp: 30 },
    { id: 'hoarder', icon: '📦', name: 'Penyimpan', desc: 'Simpan 15 fakta', requirement: 15, xp: 75 },
    { id: 'streak_3', icon: '🔥', name: 'Konsisten', desc: 'Streak 3 hari', requirement: 3, type: 'streak', xp: 30 },
    { id: 'streak_7', icon: '⚡', name: 'Semangat', desc: 'Streak 7 hari', requirement: 7, type: 'streak', xp: 100 },
    { id: 'quiz_master', icon: '🏆', name: 'Quiz Master', desc: 'Skor quiz 10', requirement: 10, type: 'quiz', xp: 50 },
    { id: 'perfect_quiz', icon: '💎', name: 'Sempurna', desc: '5 quiz benar berturut-turut', requirement: 5, type: 'quiz_streak', xp: 100 },
    { id: 'speed_demon', icon: '⚡', name: 'Speed Demon', desc: 'Jawab quiz dalam 5 detik', requirement: 1, type: 'speed', xp: 50 },
    { id: 'daily_visitor', icon: '📅', name: 'Rajin', desc: 'Kunjungi 5 hari berturut-turut', requirement: 5, type: 'streak', xp: 75 }
];

// ===== XP & LEVEL SYSTEM =====
const XP_PER_FACT = 10;
const XP_PER_QUIZ_CORRECT = 20;
const XP_PER_QUIZ_WRONG = 5;
const XP_PER_SAVE = 15;
const XP_PER_STREAK_DAY = 10;

function getLevelFromXP(xp) {
    return Math.floor(xp / 100) + 1;
}

function getXPForNextLevel(xp) {
    const currentLevel = getLevelFromXP(xp);
    return (currentLevel * 100) - xp;
}

function getLevelProgress(xp) {
    const xpInCurrentLevel = xp % 100;
    return (xpInCurrentLevel / 100) * 100;
}

function getLevelTitle(level) {
    if (level < 5) return 'Pemula';
    if (level < 10) return 'Pelajar';
    if (level < 20) return 'Cendekia';
    if (level < 50) return 'Ahli';
    if (level < 100) return 'Master';
    return 'Legenda';
}

// ===== STATE =====
let currentFact = null;
let currentCategory = "all";
let savedFacts = JSON.parse(localStorage.getItem('tahubelum_saved') || '[]');
let totalExplored = parseInt(localStorage.getItem('tahubelum_explored') || '0');
let streak = parseInt(localStorage.getItem('tahubelum_streak') || '0');
let lastVisit = localStorage.getItem('tahubelum_lastvisit') || '';
let usedIndices = [];
let unlockedAchievements = JSON.parse(localStorage.getItem('tahubelum_achievements') || '[]');
let quizScore = parseInt(localStorage.getItem('tahubelum_quiz_score') || '0');
let quizTotal = parseInt(localStorage.getItem('tahubelum_quiz_total') || '0');
let quizStreak = parseInt(localStorage.getItem('tahubelum_quiz_streak') || '0');
let currentTheme = localStorage.getItem('tahubelum_theme') || 'dark';
let factRatings = JSON.parse(localStorage.getItem('tahubelum_ratings') || '{}');
let factNotes = JSON.parse(localStorage.getItem('tahubelum_notes') || '{}');
let categoryExplored = JSON.parse(localStorage.getItem('tahubelum_category_explored') || '{}');
let timeSpent = parseInt(localStorage.getItem('tahubelum_time_spent') || '0');
let sessionStart = Date.now();
let totalXP = parseInt(localStorage.getItem('tahubelum_xp') || '0');
let previousLevel = getLevelFromXP(totalXP);
let factHistory = JSON.parse(localStorage.getItem('tahubelum_history') || '[]');
let dailyChallenge = JSON.parse(localStorage.getItem('tahubelum_daily') || 'null');
let quizTimer = null;
let quizTimeLeft = 30;
let quizStartTime = 0;
let soundEnabled = localStorage.getItem('tahubelum_sound') !== 'false';

// ===== SOUND EFFECTS (Web Audio API) =====
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (!soundEnabled) return;
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
        
        setTimeout(() => {
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.frequency.value = 1200;
            osc2.type = 'sine';
            gain2.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc2.start(audioCtx.currentTime);
            osc2.stop(audioCtx.currentTime + 0.3);
        }, 150);
    } else if (type === 'wrong') {
        oscillator.frequency.value = 200;
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'click') {
        oscillator.frequency.value = 600;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'achievement') {
        const notes = [523, 659, 784, 1047];
        notes.forEach((freq, i) => {
            setTimeout(() => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.frequency.value = freq;
                osc.type = 'sine';
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                osc.start(audioCtx.currentTime);
                osc.stop(audioCtx.currentTime + 0.3);
            }, i * 150);
        });
    } else if (type === 'levelup') {
        const notes = [523, 659, 784, 1047, 1319];
        notes.forEach((freq, i) => {
            setTimeout(() => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.frequency.value = freq;
                osc.type = 'triangle';
                gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
                osc.start(audioCtx.currentTime);
                osc.stop(audioCtx.currentTime + 0.4);
            }, i * 120);
        });
    }
}

// ===== DOM ELEMENTS =====
const mainCard = document.getElementById('mainCard');
const factTitle = document.getElementById('factTitle');
const factDesc = document.getElementById('factDesc');
const categoryBadge = document.getElementById('categoryBadge');
const cardSource = document.getElementById('cardSource');
const cardEmoji = document.getElementById('cardEmoji');
const readingTime = document.getElementById('readingTime');
const nextBtn = document.getElementById('nextBtn');
const saveBtn = document.getElementById('saveBtn');
const shareBtn = document.getElementById('shareBtn');
const speakBtn = document.getElementById('speakBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const savedSection = document.getElementById('savedSection');
const savedList = document.getElementById('savedList');
const savedCount = document.getElementById('savedCount');
const totalExploredEl = document.getElementById('totalExplored');
const totalSavedEl = document.getElementById('totalSaved');
const streakEl = document.getElementById('streak');
const streakBar = document.getElementById('streakBar');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const toastIcon = document.getElementById('toastIcon');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchResults = document.getElementById('searchResults');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const quizToggle = document.getElementById('quizToggle');
const quizModal = document.getElementById('quizModal');
const quizClose = document.getElementById('quizClose');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizResult = document.getElementById('quizResult');
const quizScoreEl = document.getElementById('quizScore');
const achievementsSection = document.getElementById('achievementsSection');
const achievementsGrid = document.getElementById('achievementsGrid');
const achievementCount = document.getElementById('achievementCount');
const achievementModal = document.getElementById('achievementModal');
const achievementIconLarge = document.getElementById('achievementIconLarge');
const achievementTitleEl = document.getElementById('achievementTitle');
const achievementDescEl = document.getElementById('achievementDesc');
const achievementClose = document.getElementById('achievementClose');

// ===== CURSOR GLOW =====
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursorGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    cursorGlow.style.opacity = '0.6';
    requestAnimationFrame(animateCursorGlow);
}

// ===== READING PROGRESS BAR =====
const readingProgress = document.createElement('div');
readingProgress.className = 'reading-progress';
document.body.appendChild(readingProgress);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    readingProgress.style.width = progress + '%';
});

// ===== PARTICLE BACKGROUND =====
const particleCanvas = document.getElementById('particleCanvas');
const pCtx = particleCanvas.getContext('2d');
let particles = [];

function initParticles() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * particleCanvas.width,
            y: Math.random() * particleCanvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: ['#00ff9d', '#00e5ff', '#d14dff'][Math.floor(Math.random() * 3)]
        });
    }
}

function animateParticles() {
    pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > particleCanvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > particleCanvas.height) p.vy *= -1;
        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        pCtx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba');
        pCtx.fill();
    });
    requestAnimationFrame(animateParticles);
}

// ===== 3D TILT EFFECT =====
mainCard.addEventListener('mousemove', (e) => {
    const rect = mainCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    mainCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

mainCard.addEventListener('mouseleave', () => {
    mainCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.btn, .icon-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// ===== RIPPLE EFFECT =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== TYPING ANIMATION =====
function typeText(element, text, speed = 25) {
    return new Promise(resolve => {
        element.innerHTML = '';
        let i = 0;
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        
        function type() {
            if (i < text.length) {
                element.textContent = text.substring(0, i + 1);
                element.appendChild(cursor);
                i++;
                setTimeout(type, speed);
            } else {
                element.textContent = text;
                resolve();
            }
        }
        type();
    });
}

// ===== CORE FUNCTIONS =====
function getFilteredFacts() {
    if (currentCategory === "all") return factsDB;
    return factsDB.filter(f => f.category === currentCategory);
}

function getRandomFact() {
    const filtered = getFilteredFacts();
    if (filtered.length === 0) return null;
    if (usedIndices.length >= filtered.length) usedIndices = [];
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * filtered.length);
    } while (usedIndices.includes(randomIndex));
    usedIndices.push(randomIndex);
    return filtered[randomIndex];
}

async function displayFact(fact) {
    if (!fact) return;
    currentFact = fact;
    categoryBadge.textContent = `${fact.emoji} ${capitalizeFirst(fact.category.replace('-', ' '))}`;
    cardSource.querySelector('.source-text').textContent = `Sumber: ${fact.source}`;
    cardEmoji.textContent = fact.emoji;
    const words = fact.desc.split(' ').length;
    const minutes = Math.ceil(words / 200);
    readingTime.querySelector('span:last-child').textContent = `${minutes} min read`;
    
    await typeText(factTitle, fact.title, 20);
    await typeText(factDesc, fact.desc, 12);
    
    if (!categoryExplored[fact.category]) categoryExplored[fact.category] = 0;
    categoryExplored[fact.category]++;
    localStorage.setItem('tahubelum_category_explored', JSON.stringify(categoryExplored));
    
    // Add to history
    factHistory.unshift({
        title: fact.title,
        emoji: fact.emoji,
        category: fact.category,
        timestamp: Date.now()
    });
    if (factHistory.length > 20) factHistory = factHistory.slice(0, 20);
    localStorage.setItem('tahubelum_history', JSON.stringify(factHistory));
    
    mainCard.classList.remove('animate');
    void mainCard.offsetWidth;
    mainCard.classList.add('animate');
    
    totalExplored++;
    addXP(XP_PER_FACT);
    localStorage.setItem('tahubelum_explored', totalExplored);
    checkAchievements();
    updateStats();
    renderExploration();
    renderRating();
    renderNotes();
    renderHistory();
    playSound('click');
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showToast(message, icon = '✓', duration = 2500) {
    toastMsg.textContent = message;
    toastIcon.textContent = icon;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

function showXPToast(xp) {
    const xpToast = document.createElement('div');
    xpToast.className = 'xp-toast';
    xpToast.textContent = `+${xp} XP`;
    xpToast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00ff9d, #00e5ff);
        color: #0a0a0a;
        padding: 12px 24px;
        border-radius: 50px;
        font-weight: 800;
        font-size: 18px;
        box-shadow: 0 0 30px rgba(0, 255, 157, 0.5);
        z-index: 9999;
        pointer-events: none;
        animation: xpFloat 1.5s ease-out forwards;
    `;
    document.body.appendChild(xpToast);
    setTimeout(() => xpToast.remove(), 1500);
}

function addXP(amount) {
    const oldLevel = getLevelFromXP(totalXP);
    totalXP += amount;
    localStorage.setItem('tahubelum_xp', totalXP);
    const newLevel = getLevelFromXP(totalXP);
    
    showXPToast(amount);
    renderXPBar();
    
    if (newLevel > oldLevel) {
        setTimeout(() => {
            showLevelUpModal(newLevel);
            playSound('levelup');
        }, 500);
    }
}

function showLevelUpModal(level) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content level-up-modal">
            <div class="level-up-content">
                <div class="level-up-icon">🎉</div>
                <h2>Level Up!</h2>
                <div class="level-up-number">Level ${level}</div>
                <div class="level-up-title">${getLevelTitle(level)}</div>
                <button class="btn btn-primary" onclick="this.closest('.modal').remove()">
                    <span>Mantap!</span>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    launchConfetti();
}

function saveFact() {
    if (!currentFact) return;
    const exists = savedFacts.some(f => f.title === currentFact.title);
    if (exists) {
        showToast('Fakta ini sudah tersimpan!', '⚠️');
        return;
    }
    const factToSave = { 
        ...currentFact, 
        savedAt: Date.now(),
        rating: factRatings[currentFact.title] || 0,
        notes: factNotes[currentFact.title] || ''
    };
    savedFacts.unshift(factToSave);
    localStorage.setItem('tahubelum_saved', JSON.stringify(savedFacts));
    renderSavedFacts();
    updateStats();
    checkAchievements();
    addXP(XP_PER_SAVE);
    showToast('Berhasil disimpan!', '✅');
    launchConfetti();
}

function removeFact(index) {
    savedFacts.splice(index, 1);
    localStorage.setItem('tahubelum_saved', JSON.stringify(savedFacts));
    renderSavedFacts();
    updateStats();
    showToast('Dihapus dari simpanan', '🗑️');
}

function renderSavedFacts() {
    if (savedFacts.length === 0) {
        savedSection.style.display = 'none';
        return;
    }
    savedSection.style.display = 'block';
    savedCount.textContent = savedFacts.length;
    savedList.innerHTML = savedFacts.map((fact, index) => `
        <div class="saved-item">
            <span class="saved-item-badge">${fact.emoji}</span>
            <div class="saved-item-content">
                <h4>${fact.title}</h4>
                <p>${fact.desc}</p>
                ${fact.rating ? `<div class="saved-item-rating">${'⭐'.repeat(fact.rating)}</div>` : ''}
                ${fact.notes ? `<div class="saved-item-notes">📝 ${fact.notes}</div>` : ''}
            </div>
            <button class="saved-item-remove" onclick="removeFact(${index})" title="Hapus">✕</button>
        </div>
    `).join('') + `
        <button class="export-btn" onclick="exportSavedFacts()">
            <span>📥</span>
            <span>Export Semua Fakta Tersimpan</span>
        </button>
    `;
}

function exportSavedFacts() {
    const text = savedFacts.map(f => 
        `${f.emoji} ${f.title}\n${f.desc}\nSumber: ${f.source}\n${f.rating ? 'Rating: ' + '⭐'.repeat(f.rating) : ''}\n${f.notes ? 'Catatan: ' + f.notes : ''}\n`
    ).join('\n---\n\n');
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tahubelum-saved-facts.txt';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Fakta berhasil diexport!', '📥');
}

function shareFact() {
    if (!currentFact) return;
    const text = `🧠 ${currentFact.title}\n\n${currentFact.desc}\n\n— via TahuBelum`;
    if (navigator.share) {
        navigator.share({ title: currentFact.title, text: text }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Disalin ke clipboard!', '📋');
        }).catch(() => {
            showToast('Gagal menyalin', '⚠️');
        });
    }
}

function speakFact() {
    if (!currentFact) return;
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(`${currentFact.title}. ${currentFact.desc}`);
        utterance.lang = 'id-ID';
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
        showToast('Membaca fakta...', '🔊');
    } else {
        showToast('Text-to-speech tidak didukung', '⚠️');
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        mainCard.requestFullscreen().catch(err => {
            showToast('Gagal masuk fullscreen', '⚠️');
        });
    } else {
        document.exitFullscreen();
    }
}

// ===== RATING SYSTEM =====
function renderRating() {
    const ratingSection = document.querySelector('.rating-section');
    if (ratingSection) ratingSection.remove();
    
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating-section';
    
    const currentRating = factRatings[currentFact.title] || 0;
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'rating-star' + (i <= currentRating ? ' active' : '');
        star.textContent = '⭐';
        star.addEventListener('click', () => setRating(i));
        ratingDiv.appendChild(star);
    }
    
    const label = document.createElement('span');
    label.className = 'rating-label';
    label.textContent = currentRating > 0 ? `(${currentRating}/5)` : 'Beri rating';
    ratingDiv.appendChild(label);
    
    mainCard.querySelector('.card-inner').insertBefore(ratingDiv, mainCard.querySelector('.card-footer'));
}

function setRating(rating) {
    factRatings[currentFact.title] = rating;
    localStorage.setItem('tahubelum_ratings', JSON.stringify(factRatings));
    renderRating();
    showToast(`Rating ${rating}/5 disimpan!`, '⭐');
    playSound('click');
}

// ===== NOTES SYSTEM =====
function renderNotes() {
    const notesSection = document.querySelector('.notes-section');
    if (notesSection) notesSection.remove();
    
    const notesDiv = document.createElement('div');
    notesDiv.className = 'notes-section';
    
    const currentNotes = factNotes[currentFact.title] || '';
    
    notesDiv.innerHTML = `
        <button class="notes-toggle" id="notesToggle">
            <span>📝</span>
            <span>${currentNotes ? 'Edit Catatan' : 'Tambah Catatan'}</span>
        </button>
        <div class="notes-input-wrapper ${currentNotes ? 'active' : ''}" id="notesWrapper">
            <textarea class="notes-textarea" id="notesTextarea" placeholder="Tulis catatan pribadi tentang fakta ini...">${currentNotes}</textarea>
            <button class="notes-save" id="notesSave">💾 Simpan Catatan</button>
        </div>
    `;
    
    mainCard.querySelector('.card-inner').appendChild(notesDiv);
    
    document.getElementById('notesToggle').addEventListener('click', () => {
        document.getElementById('notesWrapper').classList.toggle('active');
    });
    
    document.getElementById('notesSave').addEventListener('click', () => {
        const notes = document.getElementById('notesTextarea').value;
        factNotes[currentFact.title] = notes;
        localStorage.setItem('tahubelum_notes', JSON.stringify(factNotes));
        showToast('Catatan disimpan!', '📝');
        renderNotes();
        playSound('click');
    });
}

// ===== HISTORY SECTION =====
function renderHistory() {
    let section = document.querySelector('.history-section');
    if (section) section.remove();
    
    if (factHistory.length === 0) return;
    
    section = document.createElement('div');
    section.className = 'history-section';
    
    section.innerHTML = `
        <div class="section-header">
            <h3>🕐 Riwayat Terakhir</h3>
            <button class="history-clear-btn" onclick="clearHistory()">🗑️ Hapus</button>
        </div>
        <div class="history-list">
            ${factHistory.slice(0, 5).map(item => `
                <div class="history-item" onclick="showToast('${item.title.replace(/'/g, "\\'")}', '${item.emoji}')">
                    <span class="history-emoji">${item.emoji}</span>
                    <div class="history-content">
                        <div class="history-title">${item.title}</div>
                        <div class="history-time">${getTimeAgo(item.timestamp)}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    const achievements = document.querySelector('.achievements-section');
    if (achievements) {
        achievements.parentNode.insertBefore(section, achievements);
    }
}

function clearHistory() {
    factHistory = [];
    localStorage.setItem('tahubelum_history', JSON.stringify(factHistory));
    renderHistory();
    showToast('Riwayat dihapus', '🗑️');
}

function getTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'Baru saja';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} menit lalu`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} jam lalu`;
    return `${Math.floor(seconds / 86400)} hari lalu`;
}

// ===== EXPLORATION SECTION =====
function renderExploration() {
    let section = document.querySelector('.exploration-section');
    if (section) section.remove();
    
    section = document.createElement('div');
    section.className = 'exploration-section';
    
    const totalFacts = factsDB.length;
    const completionPercent = Math.min(Math.round((totalExplored / totalFacts) * 100), 100);
    const quizAccuracy = quizTotal > 0 ? Math.round((quizScore / quizTotal) * 100) : 0;
    
    let favoriteCategory = 'Belum ada';
    let maxExplored = 0;
    Object.keys(categoryExplored).forEach(cat => {
        if (categoryExplored[cat] > maxExplored) {
            maxExplored = categoryExplored[cat];
            favoriteCategory = capitalizeFirst(cat.replace('-', ' '));
        }
    });
    
    const currentTimeSpent = timeSpent + Math.floor((Date.now() - sessionStart) / 60000);
    const hours = Math.floor(currentTimeSpent / 60);
    const minutes = currentTimeSpent % 60;
    const timeString = hours > 0 ? `${hours}j ${minutes}m` : `${minutes}m`;
    
    const level = getLevelFromXP(totalXP);
    const levelTitle = getLevelTitle(level);
    
    section.innerHTML = `
        <div class="section-header">
            <h3>🌟 Statistik Eksplorasi</h3>
        </div>
        <div class="exploration-grid">
            <div class="exploration-card">
                <div class="exploration-icon">📊</div>
                <div class="exploration-label">Completion</div>
                <div class="exploration-value">${completionPercent}%</div>
            </div>
            <div class="exploration-card">
                <div class="exploration-icon">🎯</div>
                <div class="exploration-label">Quiz Accuracy</div>
                <div class="exploration-value">${quizAccuracy}%</div>
            </div>
            <div class="exploration-card">
                <div class="exploration-icon">⭐</div>
                <div class="exploration-label">Kategori Favorit</div>
                <div class="exploration-value" style="font-size: 20px;">${favoriteCategory}</div>
            </div>
            <div class="exploration-card">
                <div class="exploration-icon">⏱️</div>
                <div class="exploration-label">Waktu Belajar</div>
                <div class="exploration-value" style="font-size: 24px;">${timeString}</div>
            </div>
            <div class="exploration-card">
                <div class="exploration-icon">🔥</div>
                <div class="exploration-label">Quiz Streak</div>
                <div class="exploration-value">${quizStreak}</div>
            </div>
            <div class="exploration-card">
                <div class="exploration-icon">🎖️</div>
                <div class="exploration-label">Level</div>
                <div class="exploration-value" style="font-size: 20px;">${level} - ${levelTitle}</div>
            </div>
        </div>
    `;
    
    document.querySelector('.container').insertBefore(section, document.querySelector('.achievements-section'));
}

// ===== XP BAR =====
function renderXPBar() {
    let xpBar = document.querySelector('.xp-bar-container');
    if (!xpBar) {
        xpBar = document.createElement('div');
        xpBar.className = 'xp-bar-container';
        const statsBar = document.querySelector('.stats-bar');
        if (statsBar) {
            statsBar.parentNode.insertBefore(xpBar, statsBar.nextSibling);
        }
    }
    
    const level = getLevelFromXP(totalXP);
    const progress = getLevelProgress(totalXP);
    const xpToNext = getXPForNextLevel(totalXP);
    
    xpBar.innerHTML = `
        <div class="xp-bar-header">
            <span class="xp-level">Level ${level} - ${getLevelTitle(level)}</span>
            <span class="xp-progress">${totalXP % 100}/100 XP</span>
        </div>
        <div class="xp-bar">
            <div class="xp-bar-fill" style="width: ${progress}%"></div>
        </div>
        <div class="xp-next-level">Level ${level + 1} dalam ${xpToNext} XP lagi</div>
    `;
}

function updateStats() {
    totalExploredEl.textContent = totalExplored;
    totalSavedEl.textContent = savedFacts.length;
    streakEl.textContent = streak;
    const progress = Math.min((streak / 7) * 100, 100);
    streakBar.style.width = `${progress}%`;
}

function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastVisit === today) {
        // Same day
    } else if (lastVisit === yesterday) {
        streak++;
        addXP(XP_PER_STREAK_DAY);
        showToast(`Streak ${streak} hari! 🔥`, '🔥');
    } else if (lastVisit !== '') {
        streak = 1;
    } else {
        streak = 1;
    }
    localStorage.setItem('tahubelum_streak', streak);
    localStorage.setItem('tahubelum_lastvisit', today);
}

function toggleSearch() {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    }
}

function performSearch(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '';
        return;
    }
    const results = factsDB.filter(f => 
        f.title.toLowerCase().includes(query.toLowerCase()) ||
        f.desc.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item"><p>Tidak ada hasil</p></div>';
        return;
    }
    searchResults.innerHTML = results.map(fact => `
        <div class="search-result-item" onclick="displayFact(factsDB.find(f => f.title === '${fact.title.replace(/'/g, "\\'")}'))">
            <h4>${fact.emoji} ${fact.title}</h4>
            <p>${fact.desc}</p>
        </div>
    `).join('');
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('tahubelum_theme', currentTheme);
    playSound('click');
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('tahubelum_sound', soundEnabled);
    const soundBtn = document.getElementById('soundToggle');
    if (soundBtn) {
        soundBtn.querySelector('.theme-icon').textContent = soundEnabled ? '🔊' : '🔇';
    }
    showToast(soundEnabled ? 'Sound ON' : 'Sound OFF', soundEnabled ? '🔊' : '🔇');
}

// ===== QUIZ MULTIPLE CHOICE WITH TIMER =====
function openQuiz() {
    quizModal.classList.add('active');
    startQuiz();
}

function closeQuiz() {
    quizModal.classList.remove('active');
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function startQuiz() {
    const fact = getRandomFact();
    if (!fact) return;
    
    quizQuestion.textContent = fact.quizQuestion;
    quizQuestion.dataset.answer = fact.quizAnswer;
    
    const letters = ['A', 'B', 'C', 'D'];
    quizOptions.innerHTML = fact.quizOptions.map((option, index) => `
        <button class="quiz-option" data-index="${index}">
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${option}</span>
        </button>
    `).join('');
    
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', function() {
            answerQuiz(parseInt(this.dataset.index));
        });
    });
    
    quizResult.classList.remove('show', 'correct', 'wrong');
    
    // Start timer
    quizTimeLeft = 30;
    quizStartTime = Date.now();
    updateQuizTimer();
    
    if (quizTimer) clearInterval(quizTimer);
    quizTimer = setInterval(() => {
        quizTimeLeft--;
        updateQuizTimer();
        
        if (quizTimeLeft <= 0) {
            clearInterval(quizTimer);
            answerQuiz(-1); // Time's up
        }
    }, 1000);
}

function updateQuizTimer() {
    let timerEl = document.querySelector('.quiz-timer');
    if (!timerEl) {
        timerEl = document.createElement('div');
        timerEl.className = 'quiz-timer';
        const quizHeader = document.querySelector('.quiz-header');
        if (quizHeader) {
            quizHeader.appendChild(timerEl);
        }
    }
    
    const percent = (quizTimeLeft / 30) * 100;
    timerEl.innerHTML = `
        <div class="timer-circle" style="--percent: ${percent}">
            <span class="timer-text">${quizTimeLeft}</span>
        </div>
    `;
    
    if (quizTimeLeft <= 10) {
        timerEl.classList.add('warning');
    } else {
        timerEl.classList.remove('warning');
    }
}

function answerQuiz(selectedIndex) {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
    
    const correctIndex = parseInt(quizQuestion.dataset.answer);
    const isCorrect = selectedIndex === correctIndex;
    const timeTaken = (Date.now() - quizStartTime) / 1000;
    
    quizTotal++;
    localStorage.setItem('tahubelum_quiz_total', quizTotal);
    
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.disabled = true;
    });
    
    if (isCorrect) {
        quizScore++;
        quizStreak++;
        localStorage.setItem('tahubelum_quiz_score', quizScore);
        localStorage.setItem('tahubelum_quiz_streak', quizStreak);
        
        let xpGained = XP_PER_QUIZ_CORRECT;
        let bonusText = '';
        
        // Speed bonus
        if (timeTaken < 5) {
            xpGained += 15;
            bonusText = ' (Speed Bonus! ⚡)';
            checkSpeedAchievement();
        } else if (timeTaken < 10) {
            xpGained += 10;
            bonusText = ' (Quick! 🚀)';
        }
        
        // Streak bonus
        if (quizStreak >= 3) {
            xpGained += 10;
            bonusText += ' (Streak Bonus! 🔥)';
        }
        
        addXP(xpGained);
        
        quizResult.innerHTML = `✓ Benar! +${xpGained} XP${bonusText}`;
        quizResult.classList.add('show', 'correct');
        document.querySelectorAll('.quiz-option')[selectedIndex].classList.add('correct');
        launchConfetti();
        playSound('correct');
    } else {
        quizStreak = 0;
        localStorage.setItem('tahubelum_quiz_streak', quizStreak);
        
        addXP(XP_PER_QUIZ_WRONG);
        
        if (selectedIndex === -1) {
            quizResult.innerHTML = `⏰ Waktu habis! +${XP_PER_QUIZ_WRONG} XP`;
        } else {
            quizResult.innerHTML = `✗ Salah! +${XP_PER_QUIZ_WRONG} XP`;
        }
        quizResult.classList.add('show', 'wrong');
        
        if (selectedIndex !== -1) {
            document.querySelectorAll('.quiz-option')[selectedIndex].classList.add('wrong');
        }
        document.querySelectorAll('.quiz-option')[correctIndex].classList.add('correct');
        playSound('wrong');
    }
    
    quizScoreEl.textContent = `${quizScore}/${quizTotal}`;
    checkAchievements();
    renderExploration();
    
    setTimeout(() => {
        startQuiz();
    }, 3000);
}

function checkSpeedAchievement() {
    if (!unlockedAchievements.includes('speed_demon')) {
        unlockedAchievements.push('speed_demon');
        localStorage.setItem('tahubelum_achievements', JSON.stringify(unlockedAchievements));
        const ach = achievements.find(a => a.id === 'speed_demon');
        showAchievementModal(ach);
        renderAchievements();
    }
}

function renderAchievements() {
    achievementsGrid.innerHTML = achievements.map(ach => {
        const unlocked = unlockedAchievements.includes(ach.id);
        return `
            <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}" data-id="${ach.id}">
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-name">${ach.name}</div>
            </div>
        `;
    }).join('');
    achievementCount.textContent = `${unlockedAchievements.length}/${achievements.length}`;
}

function checkAchievements() {
    achievements.forEach(ach => {
        if (unlockedAchievements.includes(ach.id)) return;
        let unlocked = false;
        if (!ach.type && totalExplored >= ach.requirement) unlocked = true;
        if (ach.type === 'streak' && streak >= ach.requirement) unlocked = true;
        if (ach.type === 'quiz' && quizScore >= ach.requirement) unlocked = true;
        if (ach.type === 'quiz_streak' && quizStreak >= ach.requirement) unlocked = true;
        if (ach.id === 'collector' && savedFacts.length >= ach.requirement) unlocked = true;
        if (ach.id === 'hoarder' && savedFacts.length >= ach.requirement) unlocked = true;
        
        if (unlocked) {
            unlockedAchievements.push(ach.id);
            localStorage.setItem('tahubelum_achievements', JSON.stringify(unlockedAchievements));
            showAchievementModal(ach);
            renderAchievements();
            addXP(ach.xp || 50);
        }
    });
}

function showAchievementModal(ach) {
    achievementIconLarge.textContent = ach.icon;
    achievementTitleEl.textContent = ach.name;
    achievementDescEl.textContent = ach.desc;
    achievementModal.classList.add('active');
    launchConfetti();
    playSound('achievement');
}

function closeAchievementModal() {
    achievementModal.classList.remove('active');
}

// ===== CONFETTI =====
const confettiCanvas = document.getElementById('confettiCanvas');
const cCtx = confettiCanvas.getContext('2d');
let confetti = [];

function launchConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    confetti = [];
    const colors = ['#00ff9d', '#00e5ff', '#d14dff', '#ff3d8b', '#ffd700'];
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 6,
            vy: Math.random() * 3 + 2,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 15
        });
    }
    animateConfetti();
}

function animateConfetti() {
    if (confetti.length === 0) return;
    cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach((c, i) => {
        c.x += c.vx;
        c.y += c.vy;
        c.rotation += c.rotationSpeed;
        cCtx.save();
        cCtx.translate(c.x, c.y);
        cCtx.rotate(c.rotation * Math.PI / 180);
        cCtx.fillStyle = c.color;
        cCtx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
        cCtx.restore();
        if (c.y > confettiCanvas.height) confetti.splice(i, 1);
    });
    if (confetti.length > 0) requestAnimationFrame(animateConfetti);
}

// ===== SWIPE GESTURE =====
let touchStartX = 0;
let touchEndX = 0;

mainCard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

mainCard.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            const fact = getRandomFact();
            displayFact(fact);
        } else {
            saveFact();
        }
    }
}

// ===== TIME TRACKING =====
setInterval(() => {
    const currentTimeSpent = timeSpent + Math.floor((Date.now() - sessionStart) / 60000);
    localStorage.setItem('tahubelum_time_spent', currentTimeSpent);
}, 60000);

// ===== EVENT LISTENERS =====
nextBtn.addEventListener('click', () => {
    const fact = getRandomFact();
    displayFact(fact);
});

saveBtn.addEventListener('click', saveFact);
shareBtn.addEventListener('click', shareFact);
speakBtn.addEventListener('click', speakFact);
fullscreenBtn.addEventListener('click', toggleFullscreen);

searchToggle.addEventListener('click', toggleSearch);
searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchResults.innerHTML = '';
});
searchInput.addEventListener('input', (e) => performSearch(e.target.value));

themeToggle.addEventListener('click', toggleTheme);
quizToggle.addEventListener('click', openQuiz);
quizClose.addEventListener('click', closeQuiz);

achievementClose.addEventListener('click', closeAchievementModal);

document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        usedIndices = [];
        const fact = getRandomFact();
        displayFact(fact);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.code === 'Space' || e.code === 'ArrowRight') {
        e.preventDefault();
        const fact = getRandomFact();
        displayFact(fact);
    }
    if (e.code === 'KeyS' && !e.ctrlKey) {
        e.preventDefault();
        saveFact();
    }
    if (e.code === 'Slash') {
        e.preventDefault();
        toggleSearch();
    }
    if (e.code === 'Escape') {
        searchBar.classList.remove('active');
        closeQuiz();
        closeAchievementModal();
    }
});

// ===== INIT =====
function init() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    updateStreak();
    updateStats();
    renderSavedFacts();
    renderAchievements();
    quizScoreEl.textContent = `${quizScore}/${quizTotal}`;
    initParticles();
    animateParticles();
    animateCursorGlow();
    renderExploration();
    renderXPBar();
    renderHistory();
    const fact = getRandomFact();
    displayFact(fact);
}

init();