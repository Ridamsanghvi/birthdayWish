/**
 * ===============================================================
 * 🎈 BIRTHDAY WISH - INTERACTIVE SCRIPTS & AUDIO
 * ===============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Resolve configuration with URL query params override
  const urlParams = new URLSearchParams(window.location.search);
  
  const config = {
    recipientName: urlParams.get('to') || urlParams.get('recipient') || BIRTHDAY_CONFIG.recipientName || "Friend",
    senderName: urlParams.get('from') || urlParams.get('sender') || BIRTHDAY_CONFIG.senderName || "Your Friend",
    birthdayDate: BIRTHDAY_CONFIG.birthdayDate || "",
    heroTitle: urlParams.get('title') || BIRTHDAY_CONFIG.heroTitle || "Happy Birthday!",
    heroSubtitle: BIRTHDAY_CONFIG.heroSubtitle || "Wishing you an unforgettable day packed with joy!",
    messageTitle: BIRTHDAY_CONFIG.messageTitle || "A Special Birthday Message For You",
    messageBody: urlParams.get('msg') || BIRTHDAY_CONFIG.messageBody || "",
    wishes: BIRTHDAY_CONFIG.wishes || [],
    showGiftBox: BIRTHDAY_CONFIG.showGiftBox !== false,
    giftBoxTitle: BIRTHDAY_CONFIG.giftBoxTitle || "Tap to unwrap your birthday surprise! 🎁",
    giftSurpriseTitle: BIRTHDAY_CONFIG.giftSurpriseTitle || "Surprise! 🎉",
    giftSurpriseMessage: BIRTHDAY_CONFIG.giftSurpriseMessage || "Wishing you infinite happiness and smiles!",
    photos: BIRTHDAY_CONFIG.photos || [],
    customAudioUrl: BIRTHDAY_CONFIG.customAudioUrl || "",
    enableMusicButton: BIRTHDAY_CONFIG.enableMusicButton !== false
  };

  // 2. Populate DOM elements
  document.title = `${config.heroTitle} - ${config.recipientName}`;

  const elRecipientName = document.getElementById('recipient-name');
  if (elRecipientName) elRecipientName.textContent = config.recipientName;

  const elHeroSubtitle = document.getElementById('hero-subtitle');
  if (elHeroSubtitle) elHeroSubtitle.textContent = config.heroSubtitle;

  const elMessageTitle = document.getElementById('message-title');
  if (elMessageTitle) elMessageTitle.textContent = config.messageTitle;

  const elMessageBody = document.getElementById('message-body');
  if (elMessageBody) elMessageBody.textContent = config.messageBody;

  const elSenderName = document.getElementById('sender-name');
  if (elSenderName) elSenderName.textContent = config.senderName;

  const elFooterSender = document.getElementById('footer-sender');
  if (elFooterSender) elFooterSender.textContent = config.senderName;

  // Render Wishes Cards
  const elWishesContainer = document.getElementById('wishes-container');
  if (elWishesContainer && config.wishes.length > 0) {
    elWishesContainer.innerHTML = config.wishes.map(wish => `
      <div class="wish-card">
        <div class="wish-icon">${wish.icon || '🎂'}</div>
        <h3>${wish.title || 'Special Wish'}</h3>
        <p>${wish.text || ''}</p>
      </div>
    `).join('');
  }

  // Render Surprise Gift Box
  const elGiftSection = document.getElementById('gift-section');
  if (elGiftSection) {
    if (!config.showGiftBox) {
      elGiftSection.style.display = 'none';
    } else {
      const elGiftTitle = document.getElementById('gift-box-title');
      if (elGiftTitle) elGiftTitle.textContent = config.giftBoxTitle;

      const elGiftSurpriseTitle = document.getElementById('gift-surprise-title');
      if (elGiftSurpriseTitle) elGiftSurpriseTitle.textContent = config.giftSurpriseTitle;

      const elGiftSurpriseMsg = document.getElementById('gift-surprise-msg');
      if (elGiftSurpriseMsg) elGiftSurpriseMsg.textContent = config.giftSurpriseMessage;
    }
  }

  // Render Memories Gallery (if photos are configured)
  const elGallerySection = document.getElementById('gallery-section');
  const elGalleryGrid = document.getElementById('gallery-grid');
  if (elGallerySection && elGalleryGrid) {
    if (config.photos && config.photos.length > 0) {
      elGallerySection.style.display = 'block';
      elGalleryGrid.innerHTML = config.photos.map(photo => {
        const url = typeof photo === 'string' ? photo : photo.url;
        const caption = typeof photo === 'string' ? 'Special memory ✨' : (photo.caption || 'Celebration!');
        return `
          <div class="polaroid">
            <img src="${url}" alt="${caption}" onerror="this.src='https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80'">
            <div class="polaroid-caption">${caption}</div>
          </div>
        `;
      }).join('');
    } else {
      elGallerySection.style.display = 'none';
    }
  }

  // 3. Floating Balloons Generator
  createFloatingBalloons();

  // 4. Confetti Canvas Particle System
  initConfetti();
  // Fire initial celebratory burst
  setTimeout(() => {
    fireConfettiBurst(window.innerWidth / 2, window.innerHeight / 3, 70);
  }, 600);

  // 5. Interactive Birthday Cake & Candle
  setupCakeInteractions();

  // 6. Interactive Gift Box
  setupGiftBox();

  // 7. Background Music & Web Audio Synthesizer
  setupAudioPlayer(config);

  // 8. Share Link Generator Tool
  setupShareTool(config);
});

/* ===============================================================
   🎈 FLOATING BALLOONS BACKGROUND
   =============================================================== */
function createFloatingBalloons() {
  const container = document.getElementById('balloon-container');
  if (!container) return;

  const colors = [
    '#ff4081', '#7c4dff', '#ffd740', '#00e5ff', 
    '#ff5252', '#69f0ae', '#ea80fc', '#ffab40'
  ];

  const balloonCount = 18;
  for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 95}%`;
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = `${10 + Math.random() * 12}s`;
    balloon.style.animationDelay = `${Math.random() * 10}s`;
    
    const size = 35 + Math.random() * 25;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.25}px`;
    
    container.appendChild(balloon);
  }
}

/* ===============================================================
   🎊 FULL HTML5 CANVAS CONFETTI ENGINE
   =============================================================== */
let confettiParticles = [];
let confettiCtx = null;
let confettiCanvas = null;

function initConfetti() {
  confettiCanvas = document.getElementById('confetti-canvas');
  if (!confettiCanvas) return;
  confettiCtx = confettiCanvas.getContext('2d');

  function resize() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function animate() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > confettiCanvas.height) {
        confettiParticles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.globalAlpha = Math.max(0, p.opacity);

      if (p.shape === 'circle') {
        confettiCtx.beginPath();
        confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        confettiCtx.fill();
      } else {
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }
      confettiCtx.restore();
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

function fireConfettiBurst(x, y, count = 80) {
  if (!confettiCanvas) return;
  const colors = ['#ff4081', '#7c4dff', '#ffd740', '#00e5ff', '#ff5252', '#69f0ae', '#ffffff'];
  
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 12;
    confettiParticles.push({
      x: x || confettiCanvas.width / 2,
      y: y || confettiCanvas.height / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      gravity: 0.18,
      size: 7 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
      decay: 0.007 + Math.random() * 0.008,
      shape: Math.random() > 0.4 ? 'rect' : 'circle'
    });
  }
}

/* ===============================================================
   🎂 INTERACTIVE CAKE & CANDLE
   =============================================================== */
function setupCakeInteractions() {
  const cakeWrapper = document.getElementById('cake-wrapper');
  const flame = document.getElementById('candle-flame');
  const smoke = document.getElementById('candle-smoke');
  const statusBanner = document.getElementById('wish-status-banner');
  if (!cakeWrapper || !flame) return;

  let isBlownOut = false;

  function toggleCandle() {
    if (!isBlownOut) {
      // Blow out candle
      flame.classList.add('blown-out');
      if (smoke) {
        smoke.classList.add('active');
        setTimeout(() => smoke.classList.remove('active'), 1500);
      }
      
      const rect = cakeWrapper.getBoundingClientRect();
      fireConfettiBurst(rect.left + rect.width / 2, rect.top + 30, 100);
      playSparkleChime();

      if (statusBanner) {
        statusBanner.innerHTML = "✨ Wish made! May all your birthday wishes come true! ✨";
        statusBanner.style.color = "#ffd740";
      }

      isBlownOut = true;
    } else {
      // Re-light candle
      flame.classList.remove('blown-out');
      playChimeNote(659.25, 0.2); // E5 note
      if (statusBanner) {
        statusBanner.innerHTML = "🔥 Candle lit! Make a wish and click to blow it out again!";
        statusBanner.style.color = "#ff79b0";
      }
      isBlownOut = false;
    }
  }

  cakeWrapper.addEventListener('click', toggleCandle);
}

/* ===============================================================
   🎁 SURPRISE GIFT BOX
   =============================================================== */
function setupGiftBox() {
  const giftBox = document.getElementById('gift-box');
  const surpriseCard = document.getElementById('gift-surprise-card');
  if (!giftBox || !surpriseCard) return;

  let isOpened = false;

  giftBox.addEventListener('click', () => {
    if (!isOpened) {
      giftBox.classList.add('opened');
      surpriseCard.classList.add('visible');

      const rect = giftBox.getBoundingClientRect();
      fireConfettiBurst(rect.left + rect.width / 2, rect.top, 80);
      playCelebrationFanfare();

      isOpened = true;
    } else {
      giftBox.classList.remove('opened');
      surpriseCard.classList.remove('visible');
      isOpened = false;
    }
  });
}

/* ===============================================================
   🎵 WEB AUDIO API SYNTHESIZER (Happy Birthday Tune)
   =============================================================== */
let audioCtx = null;
let isMelodyPlaying = false;
let melodyTimeoutId = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playChimeNote(frequency, duration = 0.4, type = 'sine') {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);

  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
}

function playSparkleChime() {
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    setTimeout(() => playChimeNote(freq, 0.5, 'triangle'), idx * 80);
  });
}

function playCelebrationFanfare() {
  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
  notes.forEach((freq, idx) => {
    setTimeout(() => playChimeNote(freq, 0.6, 'triangle'), idx * 100);
  });
}

// "Happy Birthday" melody note frequencies (Hz) & relative durations
const HAPPY_BIRTHDAY_NOTES = [
  { f: 261.63, d: 0.35 }, // G4
  { f: 261.63, d: 0.25 }, // G4
  { f: 293.66, d: 0.6 },  // A4
  { f: 261.63, d: 0.6 },  // G4
  { f: 349.23, d: 0.6 },  // C5
  { f: 329.63, d: 1.0 },  // B4

  { f: 261.63, d: 0.35 }, // G4
  { f: 261.63, d: 0.25 }, // G4
  { f: 293.66, d: 0.6 },  // A4
  { f: 261.63, d: 0.6 },  // G4
  { f: 392.00, d: 0.6 },  // D5
  { f: 349.23, d: 1.0 },  // C5

  { f: 261.63, d: 0.35 }, // G4
  { f: 261.63, d: 0.25 }, // G4
  { f: 523.25, d: 0.6 },  // G5
  { f: 440.00, d: 0.6 },  // E5
  { f: 349.23, d: 0.6 },  // C5
  { f: 329.63, d: 0.6 },  // B4
  { f: 293.66, d: 0.8 },  // A4

  { f: 466.16, d: 0.35 }, // F5
  { f: 466.16, d: 0.25 }, // F5
  { f: 440.00, d: 0.6 },  // E5
  { f: 349.23, d: 0.6 },  // C5
  { f: 392.00, d: 0.6 },  // D5
  { f: 349.23, d: 1.2 }   // C5
];

function playHappyBirthdayMelody(onEnd) {
  let noteIndex = 0;
  isMelodyPlaying = true;

  function nextNote() {
    if (!isMelodyPlaying) return;
    if (noteIndex >= HAPPY_BIRTHDAY_NOTES.length) {
      isMelodyPlaying = false;
      if (onEnd) onEnd();
      return;
    }

    const item = HAPPY_BIRTHDAY_NOTES[noteIndex];
    playChimeNote(item.f, item.d * 0.9, 'triangle');
    noteIndex++;

    melodyTimeoutId = setTimeout(nextNote, item.d * 750);
  }

  nextNote();
}

function stopHappyBirthdayMelody() {
  isMelodyPlaying = false;
  if (melodyTimeoutId) {
    clearTimeout(melodyTimeoutId);
    melodyTimeoutId = null;
  }
}

function setupAudioPlayer(config) {
  const audioBtn = document.getElementById('audio-toggle-btn');
  const btnText = document.getElementById('audio-btn-text');
  if (!audioBtn) return;

  if (!config.enableMusicButton) {
    audioBtn.style.display = 'none';
    return;
  }

  let customAudio = null;
  if (config.customAudioUrl) {
    customAudio = new Audio(config.customAudioUrl);
    customAudio.loop = true;
  }

  function setPlayingState(playing) {
    if (playing) {
      audioBtn.classList.add('playing');
      if (btnText) btnText.textContent = "Playing Music 🎶";
    } else {
      audioBtn.classList.remove('playing');
      if (btnText) btnText.textContent = "Play Music 🎵";
    }
  }

  audioBtn.addEventListener('click', () => {
    getAudioContext();

    if (customAudio) {
      if (customAudio.paused) {
        customAudio.play();
        setPlayingState(true);
      } else {
        customAudio.pause();
        setPlayingState(false);
      }
    } else {
      if (isMelodyPlaying) {
        stopHappyBirthdayMelody();
        setPlayingState(false);
      } else {
        setPlayingState(true);
        playHappyBirthdayMelody(() => {
          setPlayingState(false);
        });
      }
    }
  });
}

/* ===============================================================
   🔗 SHARE TOOL & CUSTOM URL GENERATOR
   =============================================================== */
function setupShareTool(config) {
  const inputTo = document.getElementById('share-to-input');
  const inputFrom = document.getElementById('share-from-input');
  const generateBtn = document.getElementById('share-generate-btn');
  const resultContainer = document.getElementById('share-result-container');
  const linkSpan = document.getElementById('share-result-link');
  const copyBtn = document.getElementById('share-copy-btn');
  const toast = document.getElementById('toast');

  if (inputTo) inputTo.value = config.recipientName;
  if (inputFrom) inputFrom.value = config.senderName;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function generateLink() {
    const toVal = (inputTo ? inputTo.value.trim() : "") || config.recipientName;
    const fromVal = (inputFrom ? inputFrom.value.trim() : "") || config.senderName;

    const base = window.location.origin + window.location.pathname;
    const params = new URLSearchParams();
    params.set('to', toVal);
    params.set('from', fromVal);

    const fullUrl = `${base}?${params.toString()}`;

    if (linkSpan) linkSpan.textContent = fullUrl;
    if (resultContainer) resultContainer.classList.add('visible');

    return fullUrl;
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      const link = generateLink();
      navigator.clipboard.writeText(link).then(() => {
        showToast("🎉 Custom link copied to clipboard!");
      }).catch(() => {
        showToast("Link generated! You can copy it above.");
      });
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const link = linkSpan ? linkSpan.textContent : generateLink();
      navigator.clipboard.writeText(link).then(() => {
        showToast("📋 Link copied to clipboard!");
      });
    });
  }
}
