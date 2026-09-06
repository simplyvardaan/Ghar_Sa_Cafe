<div align="center">

# 🫖 घर सा Café & Kitchen
### *“Jahan khaana sirf khaana nahi, ghar ki yaad hai.”*

[![Website Status](https://img.shields.io/badge/Status-Live%20%26%20Serving-success?style=for-the-badge&color=8B3028&labelColor=4A3024)](index.html)
[![Made with Love](https://img.shields.io/badge/Made%20With-%E2%9D%A4%EF%B8%8F%20Maa%20Ke%20Haath%20Ka%20Pyaar-D99A27?style=for-the-badge&labelColor=2A1A12)](#-the-philosophy)
[![Pure Vanilla Stack](https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20CSS3%20%7C%20HTML5-657052?style=for-the-badge&labelColor=261B16)](#-tech-stack)
[![Web Audio API](https://img.shields.io/badge/Audio-Tadka%20Synthesizer-B57D18?style=for-the-badge&labelColor=4A3024)](#-ambient-kitchen-sound-synthesizer)

<p align="center">
  <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80" alt="Ghar Sa Cafe Hero Banner" width="880" style="border-radius: 18px; box-shadow: 0 16px 36px rgba(74, 48, 36, 0.28); border: 2px solid #D99A27;" />
</p>

[✨ Explore Menu](#-core-features) • [🍽️ Build Thaali](#-interactive-thali-builder) • [🫖 Chai Moods](#-chai-pe-charcha) • [📻 Kitchen Radio](#-ambient-kitchen-sound-synthesizer) • [🎨 Design Palette](#-warm-nostalgic-design-system) • [🚀 Quick Start](#-quick-start)

---

</div>

## 🌾 The Soul of घर सा (Our Story)

> *"Sunday lunches at 2:00 PM, four-compartment steel tiffins, iron tawa rotis puffed over direct flames, grandma's hand-written recipe scraps, and endless conversations over steaming ginger chai."*

**घर सा Café** is an immersive, nostalgic web experience crafted for an authentic Indian homestyle café & kitchen. It celebrates slow cooking in pure desi ghee, zero artificial food coloring, cold-pressed oils, and generational recipes handed down from dadi-nani kitchens.

---

## ✨ Standout Features

### 🍽️ Interactive Stainless Steel Thaali Visualizer
- **Live Compartment Plating**: Dynamically assemble your dream 5-compartment homestyle thaali (Dal, Sabzi/Curry, Roti/Paratha, Chawal, and Mithai/Raita).
- **Real-Time Calorie & Price Calculator**: Calculates your grand total and nutritional breakdown as dishes are added or customized.
- **Stainless Steel Skeuomorphism**: Custom CSS metallic radial gradients and reflections that bring the vintage dining plate to life.

### 🫖 Chai Pe Charcha — Mood Pairing Engine
- Choose your current feeling (*Baarish Ka Mausam*, *Office Thakaan*, *Yaari Dosti*, or *Dil Toota / Sukoon*).
- Instant recommendation matching special blends (Adrak-Elaichi Kadak Chai, Kulhad Masala Chai, Irani Chai, or Tulsi-Pudina Kahwa) with homestyle hot snacks like piping Bun Maska, Kurkure Pakode, or Samosa Chaat.

### 📻 Ambient Kitchen Sound Synthesizer (Web Audio API)
- Zero external MP3 downloads required! Pure programmatic audio synthesis mimicking:
  - **Tadka Sizzle**: Dynamic bandpass-filtered white noise with crackle grain.
  - **Radio Static & Cozy Hum**: Nostalgic 80s Vividh Bharati radio ambiance.
  - **Simmering Clay Handi**: Low bubbling resonant oscillators.

### 👵 Nani’s Secret Rasoi (Recipe Cards & Story Modal)
- Heritage cards detailing the origin story, secret ingredient hacks (e.g., *smoking dal with burning coal & desi ghee* or *slow-simmering rajma with anardana*).
- Interactive step-by-step preparation guides with printable memory cards.

### 🥘 Mera Tiffin Dabba (Cart & Seamless Checkout)
- Persistent cart state stored via `localStorage`.
- Direct 1-Click WhatsApp order formatting with itemized bill and delivery address details.
- Vintage paper bill generator with tear-off discount stamps.

### 🪑 Baithak Reservation & Table Booking
- Book cozy low-seating *diwan* baithak or family tables.
- Time-slot validation and instant vintage digital confirmation receipt.

---

## 🎨 Warm Nostalgic Design System

The visual identity is rooted in Earthy Indian warm tones, hand-lettered Hindi script, and raw linen textures.

```
 ┌────────────────────────────────────────────────────────────────────────┐
 │                              COLOR PALETTE                             │
 ├──────────────┬──────────────┬──────────────┬─────────────┬─────────────┤
 │   Sindoor    │    Haldi     │  Wood Brown  │ Warm Cream  │ Muted Green │
 │   #8B3028    │   #D99A27    │   #4A3024    │   #F7EEDC   │   #657052   │
 └──────────────┴──────────────┴──────────────┴─────────────┴─────────────┘
```

### 🖋️ Typography Hierarchy
- **Display Headings**: `Rozha One` & `Playfair Display` (Evoking vintage Hindi press & editorial charm)
- **Handwritten Notes & Badges**: `Caveat` & `Kalam` (Devanagari handwritten warmth)
- **Body & UI Elements**: `Plus Jakarta Sans` (Clean, hyper-readable modern sans-serif)

---

## 📂 Project Architecture

```plaintext
घर सा Café/
├── index.html       # Semantic HTML5 single-page application with microdata
├── styles.css       # Design tokens, keyframe animations & responsive layout
├── app.js           # Menu dataset, Thali visualizer, Web Audio engine & Cart
└── README.md        # Aesthetic project documentation & guide
```

---

## 🚀 Quick Start

### 1. Clone or Download the Repository
```bash
git clone https://github.com/your-username/ghar-sa-cafe.git
cd "ghar-sa-cafe"
```

### 2. Launch in Browser
No Node.js or backend dependencies required! Simply open `index.html` in any modern web browser:

```bash
# Using Python built-in server (Optional)
python -m http.server 3000

# Or with Node live-server / npx serve
npx serve .
```

Visit: `http://localhost:3000` (or double-click `index.html`).

---

## 💻 Tech Stack & Performance

| Category | Technology | Highlights |
|---|---|---|
| **Markup** | HTML5 Semantic | Accessible roles, microformats, SEO meta tags, ARIA attributes |
| **Styling** | Vanilla CSS3 | Custom CSS Properties (Variables), Grid, Flexbox, Glassmorphism |
| **Interactivity** | Vanilla JavaScript (ES6+) | LocalStorage persistence, event delegation, modular data objects |
| **Audio** | Web Audio API | Low-latency algorithmic sound synthesis (zero external media weight) |
| **Fonts** | Google Fonts | Rozha One, Kalam, Caveat, Playfair Display, Plus Jakarta Sans |

---

## ☕ Interactive Keyboard Shortcuts & Easter Eggs

| Action | Shortcut / Trigger | Effect |
|---|---|---|
| **Toggle Kitchen Radio** | Click `📻 Radio & Tadka` button | Starts live sizzle & vintage kitchen background frequency |
| **Quick Cart Open** | Click `🥘 Mera Tiffin` | Slid-out right drawer with itemized pricing |
| **Secret Chai Moods** | Click any mood chip in `#chai-charcha` | Instant pairing recommendation with animation |

---

## 🤝 Community & Feedback

Have an old family recipe or a favorite chai memory to contribute? We'd love to add it to the **Guestbook & Wall of Memories**!

- 💌 **Email**: `namaste@gharsacafe.in`
- 📍 **Baithak Address**: *Gali No. 4, Purani Haveli, Near Banyan Tree*
- 🕒 **Kitchen Timings**: *Tuesday to Sunday (8:00 AM – 11:00 PM)*

---

<div align="center">

**Made with 💛 for good food, warm chai, and memories that linger.**

*“Pet bhare ya na bhare, mann zaroor bharega.”*

</div>
