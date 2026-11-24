/**
 * ===============================================================
 * 🎂 BIRTHDAY WISH CONFIGURATION
 * ===============================================================
 * Customize this file to personalize the birthday website!
 * Just change the values below and save the file.
 * 
 * TIP: You can also share a link with URL parameters:
 *   ?to=FriendName&from=YourName
 * to quickly customize it without touching any code!
 * ===============================================================
 */

const BIRTHDAY_CONFIG = {
  // 🎈 Recipient Name (The person whose birthday it is)
  recipientName: "Bestie",

  // ✍️ Sender Name (Your name or your group's name)
  senderName: "Your Friend",

  // 📅 Birthday Date (Optional: YYYY-MM-DD format for age / celebration date)
  birthdayDate: "2026-11-24",

  // 🎉 Main Page Title & Hero Subtitle
  heroTitle: "Happy Birthday!",
  heroSubtitle: "Wishing you a day as extraordinary, joyful, and wonderful as you are!",

  // 💌 Personal Letter / Message from the heart
  messageTitle: "A Special Birthday Message For You",
  messageBody: `Hey there! 🌟

Happy, happy birthday! Another wonderful trip around the sun, and another year of amazing memories together.

May this upcoming year bring you endless laughter, breakthrough opportunities, genuine happiness, and all the success you truly deserve. Thank you for being such an inspiring, kind-hearted, and incredible person.

Never stop smiling and shining bright! 🚀✨`,

  // 🎂 Wishes / Highlights cards (You can add, edit, or remove any of these)
  wishes: [
    {
      icon: "✨",
      title: "Limitless Joy",
      text: "May your year ahead be packed with unforgettable adventures and spontaneous laughs."
    },
    {
      icon: "🎯",
      title: "Big Dreams",
      text: "May you conquer all your aspirations, smash your milestones, and reach new heights."
    },
    {
      icon: "🍕",
      title: "Endless Good Times",
      text: "More food, more parties, less stress, and zero alarm clocks on weekends!"
    },
    {
      icon: "💖",
      title: "Everlasting Friendship",
      text: "So grateful to have you in my life. Here's to many more years of friendship and memories!"
    }
  ],

  // 🎁 Surprise Gift Box configuration
  showGiftBox: true,
  giftBoxTitle: "Tap to unwrap your birthday surprise! 🎁",
  giftSurpriseTitle: "Surprise! 🎉",
  giftSurpriseMessage: "A coupon for an all-expenses-paid celebration dinner, ice cream treat, and unlimited fun with me! 🍨🥂",

  // 📸 Memory Photos (Leave empty [] if no photos, or add image file paths / URLs)
  // Example: photos: ["images/pic1.jpg", "images/pic2.jpg"]
  photos: [
    {
      url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
      caption: "Time to celebrate!"
    },
    {
      url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
      caption: "Sweet memories & brighter days"
    },
    {
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
      caption: "Cheers to you!"
    }
  ],

  // 🎵 Audio settings
  // Uses built-in Web Audio synthesis melody by default (no external file needed!)
  // If you have a custom MP3 audio URL or file, you can specify it here:
  customAudioUrl: "", // e.g. "music/birthday.mp3"
  enableMusicButton: true
};

// Node.js module export support (for testing / bundling)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BIRTHDAY_CONFIG;
}

