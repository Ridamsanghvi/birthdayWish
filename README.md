# 🎂 Birthday Wish - Interactive Birthday Celebration Web App 🎉

An interactive, responsive, and festive Birthday Wishing website designed to share with friends and family. Anyone can easily customize it with their own names, heartfelt messages, and photos with just a couple of small tweaks!

![Celebration Preview](https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80)

---

## ✨ Features

- 🎂 **Interactive 3D-Styled Birthday Cake**: Tap or click the cake to blow out the candle flame, see realistic smoke puff away, trigger massive celebratory confetti bursts, and make a wish! Click again to relight the candle.
- 🎵 **Built-in Birthday Music**: Synthesizes the melodic "Happy Birthday to You" tune using Web Audio API—no external audio files required, works offline anywhere. You can also hook up any custom MP3.
- 💌 **Personal Letter & Signature**: A glassmorphism note card addressing your friend by name, with your personalized message and signature.
- 🌟 **Wishes & Perks Cards**: Highlight special wishes, adventures, and milestones for their upcoming year.
- 🎁 **Surprise Gift Box**: Clickable gift box that unboxes an animated gift voucher or custom surprise.
- 📸 **Polaroid Photo Gallery**: Showcase favorite memories with polaroid-styled photo cards.
- 🎈 **Festive Atmosphere**: Dynamic floating colorful balloons and continuous canvas confetti particles.
- 🔗 **Zero-Code Share Tool**: Visitors can type in their friend's name and their own name right on the website to generate a shareable link instantly!

---

## 🛠️ How to Customize

There are **two easy ways** to personalize this website for your friends:

### Option 1: Edit `config.js` (Recommended for Full Customization)

Open `config.js` in any text editor and change any of the fields:

```javascript
const BIRTHDAY_CONFIG = {
  // Friend's Name (the birthday star!)
  recipientName: "Alex",

  // Your Name (who is sending the wish)
  senderName: "Ridam",

  // Custom greeting message
  messageBody: `Happy Birthday! May your year ahead be packed with adventure, laughter, and success!`,

  // Add your own memory photos (place images in your folder or use URLs)
  photos: [
    { url: "images/photo1.jpg", caption: "Best trip ever!" },
    { url: "images/photo2.jpg", caption: "Good times!" }
  ]
};
```

### Option 2: Share via URL Parameters (No Code Changes Needed!)

Once your website is hosted (e.g. on GitHub Pages), you or your friends can send a personalized link simply by adding `?to=...&from=...` to the URL:

```text
https://ridamsanghvi.github.io/birthdayWish/?to=Emma&from=Ridam
```

The website will automatically display:
- **"Happy Birthday, Emma!"**
- **"With all the best wishes, Ridam"**

You can also use the **"Want to send this to another friend?"** generator right at the bottom of the page to copy a link with 1 click!

---

## 🚀 Free Deployment on GitHub Pages (1-Click)

1. Push your repository to GitHub.
2. In your repository on GitHub, go to **Settings** > **Pages** (under "Code and automation").
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / root (`/`)
   - Click **Save**.
4. Within 1 minute, GitHub will give you a live link:
   `https://<your-username>.github.io/birthdayWish/`
5. Send that link to your friends! 🥳

---

## 📁 Project Structure

```text
birthdayWish/
├── index.html       # Main HTML structure
├── style.css        # Festive styling & animations
├── script.js       # Interactive confetti, candle physics & audio synth
├── config.js       # Easy configuration file for names & messages
├── .gitignore      # Git ignore rules
└── README.md        # Documentation
```

---

## 💡 Tech Stack

- **HTML5 & Modern CSS3** (CSS Variables, Glassmorphism, Responsive Grid, Keyframe Animations)
- **Vanilla JavaScript (ES6+)**
- **Web Audio API** (Clean synthesizer for birthday melody)
- **HTML5 Canvas** (High performance particle physics confetti)
