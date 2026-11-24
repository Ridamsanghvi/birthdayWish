# 🎂 Handcrafted Birthday Celebration — Standalone Offline App

> **🎉 Quick Start in 3 Steps:**
> 1. **Download:** Click the green **Code** button above > **Download ZIP** (or just grab `index.html`).
> 2. **Customize:** Open `index.html` in Notepad (or any text editor) and change the name & message in the `CONFIG` block around line 530.
> 3. **Run / Share:** Double-click `index.html` to open it in any browser! Send the file to your friend via WhatsApp, Drive, AirDrop, or email.

A personal, editorial-grade birthday celebration page built as **one single, self-contained file (`index.html`)**.

No web servers, Node.js, build tools, or hosting required. You can share this file directly with your friend, and they can run it simply by **double-clicking `index.html` to open it in their browser**.

---

## ⚡ Quick Step-by-Step Guide for Anyone

### Step 1: Open the File in Notepad or VS Code
Right-click `index.html` > **Open with** > **Notepad** (or VS Code / any text editor).

### Step 2: Edit the Names & Message
Scroll down near the bottom (around line 530) to the clearly marked `CONFIG` section:

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
  letterBody: `Happy Birthday! Today is a tribute to all the laughter we've shared, the hurdles you've conquered, and the adventures still waiting on your horizon.

May your year ahead be defined by boundless momentum, genuine peace, unforgettable memories, and dreams realized in full. Thank you for bringing so much warmth and authenticity into the world.

Cheers to your best year yet.`,

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

### Step 3: Save and Run!
Press **Ctrl + S** to save. Now simply **double-click `index.html`** to see your personalized celebration live in your browser!

---

## 🎵 Using Your Favorite / Copyrighted Song

Because this runs entirely offline on your local machine:
1. Take any MP3 song file you want to use.
2. Rename it to `song.mp3` and place it in the same folder as `index.html`.
3. Double-click `index.html` — click **Play Soundtrack**, and your song will spin on the vinyl record!
4. *(Bonus)* You or your friend can also click **"Choose a local song file (.mp3)"** right beneath the record to select any song from your computer on the fly.
5. If no file is selected, it automatically falls back to a built-in sweet Rhodes/celesta chime melody!

---

## ✨ Design & Experience Highlights

- 🍷 **Luxe Burgundy & Gold Palette**: Warm rich burgundy (`#1A0E10`), velvet surfaces, cream typography, and champagne gold accents—curated to feel like a bespoke physical card and vintage celebration.
- 💿 **Tactile Vinyl Soundtrack Player**: Animated spinning vinyl record with tonearm movements, spindle label, track progress ring, and playback controls.
- 🕯️ **Interactive Birthday Candle**: Make a wish and click the golden candle to blow out the flickering flame, releasing realistic physics-based smoke and a burst of gold/champagne confetti. Click again to relight!
- 📜 **Editorial Typography**: Styled with Fraunces serif display and Instrument Sans for a timeless, personal look without generic AI cards.
- 🔒 **100% Offline & Private**: Zero tracking and zero third-party server dependencies.

---

## 📁 File Structure

```text
birthdayWish/
├── index.html       # The entire standalone website (HTML, CSS, JS, Config)
├── song.mp3         # (Optional) Your local MP3 song file
└── README.md        # Guide
```
