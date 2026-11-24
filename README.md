# 🎂 Handcrafted Birthday Celebration — Standalone Offline App

A personal, editorial-grade birthday celebration page built as **one single, self-contained file (`index.html`)**.

No web servers, build tools, or hosting required. You can share this file directly with your friend (via WhatsApp, Google Drive, AirDrop, email, or flash drive), and they can run it simply by **double-clicking `index.html` to open it in their browser**.

---

## ✨ Design & Experience Highlights

- 🍷 **Luxe Burgundy & Gold Palette**: Warm rich burgundy (`#1A0E10`), velvet surfaces, cream typography, and champagne gold accents—curated to feel like a bespoke physical card and vintage celebration.
- 💿 **Tactile Vinyl Soundtrack Player**: Animated spinning vinyl record with tonearm movements, spindle label, track progress ring, and playback controls.
- 🎵 **Plays Copyrighted / Favorite Songs**: Supports any local MP3 file (e.g. `song.mp3` placed in the same folder), with an on-the-fly local audio picker, plus a built-in warm Rhodes/celesta synthesizer fallback that works even with zero external files.
- 🕯️ **Interactive Birthday Candle**: Make a wish and click the golden candle to blow out the flickering flame, releasing realistic physics-based smoke and a burst of gold/champagne confetti.
- 📜 **Editorial Typography**: Styled with Fraunces serif display and Instrument Sans for a timeless, personal look without generic AI cards.
- 🔒 **100% Offline & Private**: Zero data sent to any third-party servers. Everything runs entirely on your local machine.

---

## 🛠️ How to Tweak Before Sending

Open `index.html` in any text editor (Notepad, VS Code, etc.). 

Near the bottom of the file (around line 530), you will find the clearly marked `CONFIG` block:

```javascript
const CONFIG = {
  // 1. Friend's Name (the birthday star!)
  recipientName: "Alex",

  // 2. Your Name (sender)
  senderName: "Ridam",

  // 3. Occasion / Tag
  yearOrOccasion: "Chapter 24",

  // 4. Headline / Hero Title
  heroTag: "A Toast To You",

  // 5. Personal Letter Content
  letterTitle: "To a True Friend",
  letterBody: `Happy Birthday! Today is a tribute to all the laughter we've shared...`,

  // 6. Audio Soundtrack (put your favorite song in the same folder!)
  audioFile: "song.mp3",
  audioTitle: "Happy Birthday Soundtrack",
  audioArtist: "Dedicated with Love",

  // 7. Editorial Highlights
  highlights: [
    { number: "01", label: "Resilience", text: "For meeting every curveball with calm dignity..." },
    { number: "02", label: "Generosity", text: "For brightening rooms simply by listening..." },
    { number: "03", label: "Unwritten Chapters", text: "May the year ahead be packed with spontaneous triumphs..." }
  ],

  // 8. Polaroid Photo (Optional - local photo.jpg or leave "")
  photoUrl: "",
  photoCaption: "Here's to the memories behind us & the adventures ahead."
};
```

Make your edits, press **Ctrl+S** (Save), and you're ready!

---

## 🎵 Using Your Favorite / Copyrighted Song

1. Take any MP3 song file you want to use.
2. Rename it to `song.mp3` and place it in the same folder as `index.html`.
3. Double-click `index.html` — click **Play Soundtrack**, and your song will spin on the vinyl record!
4. *(Bonus)* You or your friend can also click **"Choose a local song file (.mp3)"** right beneath the record to select any song from your computer on the fly.

---

## 📁 File Structure

```text
birthdayWish/
├── index.html       # The entire standalone website (HTML, CSS, JS, Config)
├── song.mp3         # (Optional) Your local MP3 song file
└── README.md        # Guide
```
