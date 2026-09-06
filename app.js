/**
 * घर सा Café (Ghar Sa Café) — Interactive Logic
 * Features:
 * 1. Aaj Kya Ban Raha Hai (Dynamic filtering for daily menu)
 * 2. Nani Ke Haath Se (Recipe story modal & secret tips)
 * 3. Chai Pe Charcha (Interactive mood-based chai + snack pairings)
 * 4. Apni Thaali Banao (Live Stainless Steel Plate visualizer & pricing)
 * 5. Mera Tiffin Dabba (Cart drawer, localStorage, quantity controls)
 * 6. Kitchen Sound Synthesizer (Web Audio API realistic tadka & stove ambience)
 * 7. Table Reservation & Vintage Receipt Generation
 */

// ==========================================
// 1. DATA REPOSITORY
// ==========================================

const MENU_DISHES = [
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    hindi: 'दाल मखनी',
    desc: 'Black urad lentils & rajma simmered for 14 hours on a low clay flame. Finished with white makkhan & ginger juliennes.',
    price: 240,
    category: 'veg',
    mealTime: 'dopahar',
    spice: 'Mridu (Mild)',
    badge: 'Maa\'s Special',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'paneer-bhurji',
    name: 'Amritsari Paneer Bhurji',
    hindi: 'पनीर भुर्जी',
    desc: 'Hand-crumbled fresh malai paneer scrambled with juicy tomatoes, green bell peppers, kasuri methi & desi ghee.',
    price: 260,
    category: 'veg',
    mealTime: 'raat',
    spice: 'Madhyam (Medium)',
    badge: 'Iron Tawa',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dum-biryani',
    name: 'Ghar Ki Dum Biryani',
    hindi: 'घर की दम बिरयानी',
    desc: 'Fragrant aged basmati rice cooked in a sealed handi with caramelized onions, saffron milk, whole spices & fried cashews.',
    price: 280,
    category: 'veg',
    mealTime: 'dopahar',
    spice: 'Madhyam (Medium)',
    badge: 'Handi Cooked',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pindi-chole',
    name: 'Purani Dilli Pindi Chole',
    hindi: 'पिंडी छोले',
    desc: 'Dark spiced chickpeas simmered with anardana, dried amla & roasted carom seeds. Served with pickled chillies.',
    price: 210,
    category: 'veg',
    mealTime: 'dopahar',
    spice: 'Chatpata (Spicy)',
    badge: 'Secret Masala',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tariwala-chicken',
    name: 'Sunday Tariwala Chicken',
    hindi: 'रविवार तरी चिकन',
    desc: 'Classic North Indian homestyle thin curry chicken simmered with whole black cardamom, garlic cloves & coriander.',
    price: 320,
    category: 'non-veg',
    mealTime: 'dopahar',
    spice: 'Chatpata (Spicy)',
    badge: 'Sunday Special',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'egg-curry',
    name: 'Dhaba Style Egg Curry',
    hindi: 'ढाबा एग करी',
    desc: 'Hard boiled desi eggs pan-roasted in turmeric, simmered in a hearty onion-tomato-ginger homestyle gravy.',
    price: 220,
    category: 'non-veg',
    mealTime: 'raat',
    spice: 'Madhyam (Medium)',
    badge: 'Comfort Bowl',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'aloo-paratha',
    name: 'Maa Ka Aloo Paratha (2 pcs)',
    hindi: 'माँ का आलू परांठा',
    desc: 'Generously stuffed with spiced potatoes and fresh coriander, roasted golden on iron tawa with fresh white butter & dahi.',
    price: 180,
    category: 'comfort',
    mealTime: 'shaam',
    spice: 'Madhyam (Medium)',
    badge: 'Desi Ghee',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kadhi-pakoda',
    name: 'Kadhi Pakoda with Steamed Rice',
    hindi: 'कढ़ी पकोड़ा व चावल',
    desc: 'Tangy sour dahi kadhi with soft fenugreek pakodas, tempered with mustard seeds, whole red chillies & curry leaves.',
    price: 210,
    category: 'comfort',
    mealTime: 'dopahar',
    spice: 'Chatpata (Spicy)',
    badge: 'Bespoke Comfort',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'maa-ki-kheer',
    name: 'Kesar Pista Chawal Kheer',
    hindi: 'केसर पिस्ता खीर',
    desc: 'Slowly condensed buffalo milk with fragrant Govindbhog rice, Kashmiri saffron threads, almonds & silver vark.',
    price: 140,
    category: 'comfort',
    mealTime: 'raat',
    spice: 'Meetha (Sweet)',
    badge: 'Slow Cooked',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  }
];

const RECIPE_STORIES = {
  rajma: {
    title: "Nani's Overnight Slow-Cooked Rajma",
    hindi: 'नानी के हाथ के राजमा',
    story: "“Whenever we reached Nani’s house after the 6-hour bus ride, the aroma of heeng and cumin hitting the hot ghee in the courtyard iron handi would greet us at the doorstep. She never used pressure cookers for her Sunday rajma—she believed the beans must yield naturally to the warmth of the fire.”",
    ingredients: [
      "1.5 cups Kashmiri or Chitra Rajma (soaked for 10 hours)",
      "Pure Bilona cow ghee + 1 pinch of asafoetida (heeng)",
      "4 ripe desi tomatoes puréed with fresh mountain ginger",
      "Roasted ground coriander, Kashmiri degi mirch & saunf",
      "Finely sliced raw shallots & 2 green chillies for serving"
    ],
    naniTip: "“Hamesha tamatar tadka daalne ke baad 20 minute dhiimi aanch par dakk kar pakne do. Aur ghee mein kanjoosi bilkul nahi!”"
  },
  paratha: {
    title: "Maa's Crispy Iron Tawa Aloo Paratha",
    hindi: 'माँ का आलू परांठा',
    story: "“The alarm wasn’t a clock; it was the rhythmic rolling pin on the marble chakla and the sizzle of ghee on the black iron tawa. Maa’s rule was simple: the potato filling must reach all four corners of the paratha, not just stay bundled in the middle.”",
    ingredients: [
      "Fresh boiled Pahadi potatoes mashed while still warm",
      "Crushed dry pomegranate seeds (anardana) & roasted ajwain",
      "Handful of chopped fresh hara dhaniya & spicy green chillies",
      "Coarsely ground whole wheat flour kneaded with soft hands",
      "A mountain of freshly churned homemade makhan (white butter)"
    ],
    naniTip: "“Aloo hamesha thande hone ke baad hi masalo mein milana, warna paratha phat jaata hai. Iron tawa hi use karna!”"
  },
  chai: {
    title: "Papa's Balcony Cutting Chai",
    hindi: 'पापा की कड़क चाय',
    story: "“Sunday mornings belonged to Papa and his brass saucepan. The newspaper was folded at the sports section, the balcony sparrow was chirping, and Papa stood by the stove watching the tea rise and fall three precise times to let the milk marry the ginger.”",
    ingredients: [
      "Strong Assam CTC tea leaves",
      "Fresh winter adrak crushed in mortar pestle",
      "2 green cardamoms split with fingernails",
      "Full cream milk boiled just before brewing",
      "2 Parle-G biscuits waiting on the side saucer"
    ],
    naniTip: "“Adrak hamesha paani mein daal kar pehle khoob ubaalo, doodh baad mein daalna chahiye taaki adrak ka teekhapan poora nikle!”"
  }
};

const MOOD_PAIRINGS = {
  energy: {
    tag: "Need Energy (Thakaan Mittao)",
    chai: "Kadak Adrak Chai",
    snack: "Crispy Bun Maska with Amul Butter",
    emojiChai: "☕",
    emojiSnack: "🧈",
    descChai: "Double-boiled ginger kick that wakes up every nerve.",
    descSnack: "Warm toasted pav smeared thick with salted butter.",
    price: 150,
    quote: "“Ek chammach adrak aur garam bun maska—din ki saari thakaan 5 minute mein gayab!”"
  },
  rain: {
    tag: "Baarish Ho Rahi Hai (Mausam Special)",
    chai: "Special Masala Kulhad Chai",
    snack: "Garma-Garam Pyaaz & Mirchi Pakode",
    emojiChai: "🫖",
    emojiSnack: "🥟",
    descChai: "Infused with clove, cinnamon, peppercorns & fennel.",
    descSnack: "Golden crisp onion fritters with spicy mint-coriander chutney.",
    price: 160,
    quote: "“Baarish ki boondein, khidki ki seat, aur hath mein garam pakode... zindagi set hai.”"
  },
  peace: {
    tag: "Bas Sukoon Chahiye (Shanti & Memories)",
    chai: "Elaichi & Gulab Rose Chai",
    snack: "Bakery Suji Rusk & Nankhatai",
    emojiChai: "🍵",
    emojiSnack: "🍪",
    descChai: "Gentle floral cardamom brew with dried rose petals.",
    descSnack: "Crispy twice-baked cardamom rusk meant for dipping.",
    price: 140,
    quote: "“Duniya ki bheed se door, bas ek cup chai aur tumhare pasandida kisse.”"
  },
  gossip: {
    tag: "Time for Gossip (Chai Pe Charcha)",
    chai: "Papa's Tapri Cutting Chai",
    snack: "Purani Dilli Samosa Chaat",
    emojiChai: "☕",
    emojiSnack: "🥘",
    descChai: "Two glasses of piping hot tapri-style cutting chai.",
    descSnack: "Crushed potato samosas with tangy imli chutney & boondi.",
    price: 180,
    quote: "“Yaaron ke sath baithak ho aur samosa na ho? Ho hi nahi sakta!”"
  }
};

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

let cart = [];
let thaliState = {
  step: 1,
  sabzi: { name: 'Paneer Bhurji', hindi: 'पनीर भुर्जी', price: 0, color: '#E8B042', icon: '🥘' },
  roti: { name: 'Phulka with Ghee (3 pcs)', hindi: 'घी के फुल्के', price: 0, color: '#EED59C', icon: '🫓' },
  side: { name: 'Tadka Dal & Jeera Rice', hindi: 'तड़का दाल व जीरा राइस', price: 0, color: '#EAA638', icon: '🍲' },
  sweet: { name: 'Gulab Jamun (2 pcs)', hindi: 'गुलाब जामुन', price: 40, color: '#5E2313', icon: '🍮' },
  basePrice: 299
};

// Load cart from localStorage if available
try {
  const savedCart = localStorage.getItem('gharSaCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.warn('LocalStorage not available', e);
}

// ==========================================
// 3. INITIALIZATION ON DOM LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderDishes('all', 'all');
  initMenuFilters();
  initThaliBuilder();
  initMoodRecommender();
  initCartEvents();
  initAudioSynthesizer();
  updateCartUI();
  initMobileDrawer();
  initHeaderScroll();
});

// ==========================================
// 4. HEADER & SCROLL BEHAVIORS
// ==========================================

function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileDrawer() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const links = drawer.querySelectorAll('.mobile-link');
  const reserveBtn = document.getElementById('reserveTableMobileBtn');

  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.add('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });

  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      openTableModal();
    });
  }
}

// ==========================================
// 5. INTERACTION 1: MENU FILTERING
// ==========================================

function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timeChips = document.querySelectorAll('.time-chip');

  let currentCategory = 'all';
  let currentTime = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentCategory = btn.getAttribute('data-filter');
      renderDishes(currentCategory, currentTime);
    });
  });

  timeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      timeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentTime = chip.getAttribute('data-time');
      renderDishes(currentCategory, currentTime);
    });
  });
}

function renderDishes(category, mealTime) {
  const grid = document.getElementById('dishesGrid');
  if (!grid) return;

  const filtered = MENU_DISHES.filter(dish => {
    const matchCat = (category === 'all') || (dish.category === category);
    const matchTime = (mealTime === 'all') || (dish.mealTime === mealTime);
    return matchCat && matchTime;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #fff; border-radius: 12px; border: 1px dashed rgba(74,48,36,0.2);">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">🥘</p>
        <h4 style="font-family: var(--font-display); color: var(--wood-brown);">Yeh khana abhi rasoi mein tayyar ho raha hai!</h4>
        <p style="color: rgba(74,48,36,0.7); margin-top: 0.25rem;">Doosre meal time ya Sab Kuch par click karein.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(dish => `
    <article class="dish-card">
      <div class="dish-card-img-wrap">
        <img src="${dish.image}" alt="${dish.name}" class="dish-card-img" loading="lazy">
        <span class="dish-card-badge ${dish.category === 'non-veg' ? 'non-veg' : 'veg'}">
          ${dish.category === 'non-veg' ? '🍗 Non-Veg' : '🥬 Pure Veg'}
        </span>
        <span class="dish-special-stamp">${dish.badge}</span>
      </div>
      <div class="dish-card-body">
        <div class="dish-card-header">
          <div>
            <h3 class="dish-card-title">${dish.name}</h3>
            <span class="dish-card-hindi">${dish.hindi}</span>
          </div>
          <span class="dish-card-price">₹${dish.price}</span>
        </div>
        <p class="dish-card-desc">${dish.desc}</p>
        <div class="dish-card-footer">
          <span class="spice-meter">🌶️ ${dish.spice}</span>
          <button class="btn-add-dish" onclick="quickAddToCart('${dish.name.replace(/'/g, "\\'")}', ${dish.price}, '${dish.hindi}')">
            + Tiffin Mein Daalo
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// ==========================================
// 6. INTERACTION 2: CHAI MOOD RECOMMENDER
// ==========================================

function initMoodRecommender() {
  const moodBtns = document.querySelectorAll('.mood-btn');
  const resultBox = document.getElementById('recommendationResult');

  moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      moodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mood = btn.getAttribute('data-mood');
      const pairing = MOOD_PAIRINGS[mood];

      if (pairing && resultBox) {
        resultBox.innerHTML = `
          <div class="result-active-card">
            <div class="rec-combo-header">
              <span class="rec-pairing-tag">${pairing.tag}</span>
              <span class="rec-total-price">Combo ₹${pairing.price}</span>
            </div>

            <div class="rec-items-duo">
              <div class="rec-item">
                <span class="rec-item-emoji">${pairing.emojiChai}</span>
                <div>
                  <span class="rec-item-name">${pairing.chai}</span>
                  <span class="rec-item-desc">${pairing.descChai}</span>
                </div>
              </div>
              <div class="rec-item">
                <span class="rec-item-emoji">${pairing.emojiSnack}</span>
                <div>
                  <span class="rec-item-name">${pairing.snack}</span>
                  <span class="rec-item-desc">${pairing.descSnack}</span>
                </div>
              </div>
            </div>

            <p class="rec-reason-note">${pairing.quote}</p>

            <button class="btn-add-combo" onclick="quickAddToCart('${pairing.chai} + ${pairing.snack}', ${pairing.price}, 'Chai Pe Charcha Combo')">
              + Add This Jodi to Tiffin (₹${pairing.price})
            </button>
          </div>
        `;
      }
    });
  });
}

// ==========================================
// 7. INTERACTION 3: APNI THAALI BANAO (VISUAL PLATE)
// ==========================================

function initThaliBuilder() {
  const stepTabs = document.querySelectorAll('.thali-tab');
  const stepPanes = document.querySelectorAll('.step-pane');
  const prevBtn = document.getElementById('prevStepBtn');
  const nextBtn = document.getElementById('nextStepBtn');
  const addThaliBtn = document.getElementById('addThaliBtn');

  // Radio button listeners
  const sabziInputs = document.querySelectorAll('input[name="sabzi"]');
  const rotiInputs = document.querySelectorAll('input[name="roti"]');
  const sideInputs = document.querySelectorAll('input[name="side"]');
  const sweetInputs = document.querySelectorAll('input[name="sweet"]');

  sabziInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const el = e.target;
      thaliState.sabzi = {
        name: el.value,
        hindi: el.getAttribute('data-hindi'),
        price: parseInt(el.getAttribute('data-price') || 0, 10),
        color: el.getAttribute('data-color'),
        icon: '🥘'
      };
      updateThaliVisual();
    });
  });

  rotiInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const el = e.target;
      thaliState.roti = {
        name: el.value,
        hindi: el.getAttribute('data-hindi'),
        price: 0,
        color: el.getAttribute('data-color'),
        icon: el.value.includes('Laccha') ? '🥐' : '🫓'
      };
      updateThaliVisual();
    });
  });

  sideInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const el = e.target;
      thaliState.side = {
        name: el.value,
        hindi: el.getAttribute('data-hindi'),
        price: 0,
        color: el.getAttribute('data-color'),
        icon: el.value.includes('Raita') ? '🥣' : '🍲'
      };
      updateThaliVisual();
    });
  });

  sweetInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const el = e.target;
      thaliState.sweet = {
        name: el.value,
        hindi: el.getAttribute('data-hindi'),
        price: parseInt(el.getAttribute('data-price') || 0, 10),
        color: el.getAttribute('data-color'),
        icon: el.value === 'None' ? '' : (el.value.includes('Kheer') ? '🍨' : '🍮')
      };
      updateThaliVisual();
    });
  });

  // Step Switchers
  stepTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetStep = parseInt(tab.getAttribute('data-step'), 10);
      switchThaliStep(targetStep);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (thaliState.step > 1) {
        switchThaliStep(thaliState.step - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (thaliState.step < 4) {
        switchThaliStep(thaliState.step + 1);
      } else {
        // Trigger Add Thali
        addCustomThaliToCart();
      }
    });
  }

  if (addThaliBtn) {
    addThaliBtn.addEventListener('click', addCustomThaliToCart);
  }

  // Initial update
  updateThaliVisual();
}

function switchThaliStep(stepNum) {
  thaliState.step = stepNum;

  const stepTabs = document.querySelectorAll('.thali-tab');
  const stepPanes = document.querySelectorAll('.step-pane');
  const prevBtn = document.getElementById('prevStepBtn');
  const nextBtn = document.getElementById('nextStepBtn');

  stepTabs.forEach(tab => {
    const s = parseInt(tab.getAttribute('data-step'), 10);
    tab.classList.toggle('active', s === stepNum);
  });

  stepPanes.forEach(pane => {
    pane.classList.remove('active');
  });

  const currentPane = document.getElementById(`pane-step-${stepNum}`);
  if (currentPane) {
    currentPane.classList.add('active');
  }

  if (prevBtn) {
    prevBtn.disabled = (stepNum === 1);
  }

  if (nextBtn) {
    if (stepNum === 4) {
      nextBtn.innerHTML = 'Add Thaali to Tiffin 🍽️';
      nextBtn.classList.add('btn-add-highlight');
    } else {
      nextBtn.innerHTML = 'Next Step →';
      nextBtn.classList.remove('btn-add-highlight');
    }
  }
}

function updateThaliVisual() {
  // Update Katori 1: Sabzi
  const katoriSabzi = document.querySelector('#katoriSabzi .katori-inner');
  const katoriSabziBadge = document.getElementById('katoriSabziBadge');
  if (katoriSabzi && katoriSabziBadge) {
    katoriSabzi.style.background = `radial-gradient(circle, ${thaliState.sabzi.color} 0%, rgba(74,48,36,0.85) 90%)`;
    katoriSabziBadge.textContent = thaliState.sabzi.name.replace(/\(\+\₹\d+\)/, '').trim();
  }

  // Update Bread & Rice
  const breadLabel = document.getElementById('plateBreadLabel');
  const breadIcon = document.querySelector('#plateBread .bread-icon');
  if (breadLabel && breadIcon) {
    breadLabel.textContent = thaliState.roti.name.replace(/\(\d+ pcs\)/, '').trim();
    breadIcon.textContent = thaliState.roti.icon;
  }

  // Update Katori 2: Side 1
  const katoriSideBadge = document.getElementById('katoriSideBadge');
  const katoriSide = document.querySelector('#katoriSide1 .katori-inner');
  if (katoriSideBadge && katoriSide) {
    katoriSideBadge.textContent = thaliState.side.name.split('&')[0].trim();
    katoriSide.style.background = `radial-gradient(circle, ${thaliState.side.color} 0%, rgba(74,48,36,0.85) 90%)`;
  }

  // Update Katori 4: Sweet
  const katoriSweet = document.getElementById('katoriSweet');
  const katoriSweetInner = document.getElementById('katoriSweetInner');
  const katoriSweetEmoji = document.getElementById('katoriSweetEmoji');
  const katoriSweetBadge = document.getElementById('katoriSweetBadge');

  if (katoriSweet && katoriSweetInner && katoriSweetEmoji && katoriSweetBadge) {
    if (thaliState.sweet.name === 'None') {
      katoriSweet.style.opacity = '0.35';
      katoriSweetEmoji.textContent = '🍽️';
      katoriSweetBadge.textContent = 'Khali Katori';
      katoriSweetInner.style.background = '#cbd5e1';
    } else {
      katoriSweet.style.opacity = '1';
      katoriSweetEmoji.textContent = thaliState.sweet.icon;
      katoriSweetBadge.textContent = thaliState.sweet.name.replace(/\(\+\₹\d+\)/, '').replace(/\(\d+ pcs\)/, '').trim();
      katoriSweetInner.style.background = `radial-gradient(circle, ${thaliState.sweet.color} 0%, #35140d 90%)`;
    }
  }

  // Calculate Price
  const total = thaliState.basePrice + thaliState.sabzi.price + thaliState.sweet.price;
  const priceDisplay = document.getElementById('thaliPriceDisplay');
  const summaryTitle = document.getElementById('thaliSummaryTitle');

  if (priceDisplay) priceDisplay.textContent = `₹${total}`;
  if (summaryTitle) {
    const sabziClean = thaliState.sabzi.name.replace(/\(\+\₹\d+\)/, '').trim();
    const rotiClean = thaliState.roti.name.replace(/\(\d+ pcs\)/, '').trim();
    summaryTitle.textContent = `${sabziClean} + ${rotiClean} Thaali`;
  }
}

function addCustomThaliToCart() {
  const sabziClean = thaliState.sabzi.name.replace(/\(\+\₹\d+\)/, '').trim();
  const rotiClean = thaliState.roti.name.replace(/\(\d+ pcs\)/, '').trim();
  const sweetClean = thaliState.sweet.name === 'None' ? 'No Sweet' : thaliState.sweet.name.replace(/\(\+\₹\d+\)/, '').trim();
  const total = thaliState.basePrice + thaliState.sabzi.price + thaliState.sweet.price;

  const thaliItem = {
    id: `custom-thali-${Date.now()}`,
    name: `Custom Thaali: ${sabziClean}`,
    note: `${rotiClean} • ${thaliState.side.name.split('&')[0]} • ${sweetClean}`,
    price: total,
    quantity: 1
  };

  addToCart(thaliItem);
  showToast(`✨ ${thaliItem.name} added to your Tiffin!`);
  toggleCartDrawer(true);
}

// ==========================================
// 8. SHOPPING CART (MERA TIFFIN DABBA)
// ==========================================

function initCartEvents() {
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const viewReceiptBtn = document.getElementById('viewReceiptBtn');

  if (openCartBtn) openCartBtn.addEventListener('click', () => toggleCartDrawer(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCartDrawer(false));

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', sendOrderToWhatsApp);
  }

  if (viewReceiptBtn) {
    viewReceiptBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Pehle tiffin mein kuch daaliye!');
        return;
      }
      generateReceiptModal();
    });
  }
}

function toggleCartDrawer(isOpen) {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    if (isOpen) {
      drawer.classList.add('active');
      overlay.classList.add('active');
    } else {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
  }
}

function quickAddToCart(name, price, note = '') {
  const existing = cart.find(item => item.name === name && item.note === note);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name,
      price,
      note,
      quantity: 1
    });
  }
  saveCart();
  updateCartUI();
  showToast(`🍲 Added "${name}" to Tiffin!`);
}

function addToCart(item) {
  cart.push(item);
  saveCart();
  updateCartUI();
}

function updateItemQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function saveCart() {
  try {
    localStorage.setItem('gharSaCart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Cannot save to localStorage', e);
  }
}

function updateCartUI() {
  const badge = document.getElementById('cartCountBadge');
  const cartBody = document.getElementById('cartItemsBody');
  const emptyState = document.getElementById('emptyCartState');
  const billSubtotal = document.getElementById('billSubtotal');
  const billGst = document.getElementById('billGst');
  const billGrandTotal = document.getElementById('billGrandTotal');

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (badge) badge.textContent = totalCount;

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="empty-cart-state" id="emptyCartState">
        <div class="empty-tiffin-ill">🥘</div>
        <h4>Tiffin abhi khali hai!</h4>
        <p>Thoda swaad, thodi yaadein daaliye. Aaj ki sabzi ya custom thaali chuniyega?</p>
        <a href="#thali-builder" class="btn-primary mini-btn" onclick="toggleCartDrawer(false)">Apni Thaali Banao</a>
      </div>
    `;
    if (billSubtotal) billSubtotal.textContent = '₹0';
    if (billGst) billGst.textContent = '₹0';
    if (billGrandTotal) billGrandTotal.textContent = '₹0';
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  cartBody.innerHTML = cart.map((item, index) => `
    <div class="cart-item-card">
      <div class="cart-item-info">
        <span class="cart-item-title">${item.name}</span>
        ${item.note ? `<span class="cart-item-note">${item.note}</span>` : ''}
        <span class="cart-item-price">₹${item.price * item.quantity}</span>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="updateItemQuantity(${index}, -1)" aria-label="Kam karo">-</button>
        <span class="qty-display">${item.quantity}</span>
        <button class="qty-btn" onclick="updateItemQuantity(${index}, 1)" aria-label="Badhao">+</button>
      </div>
    </div>
  `).join('');

  if (billSubtotal) billSubtotal.textContent = `₹${subtotal}`;
  if (billGst) billGst.textContent = `₹${gst}`;
  if (billGrandTotal) billGrandTotal.textContent = `₹${grandTotal}`;
}

// ==========================================
// 9. ORDERING & RECEIPT GENERATION
// ==========================================

function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    showToast('Aapka tiffin khali hai! Pehle kuch add karein.');
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  let msg = `*नमस्ते घर सा Café!* 🫖\n`;
  msg += `Main apna tiffin order karna chahta hoon:\n\n`;

  cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}* (x${item.quantity}) - ₹${item.price * item.quantity}\n`;
    if (item.note) msg += `   ↳ _${item.note}_\n`;
  });

  msg += `\n------------------------\n`;
  msg += `*Subtotal:* ₹${subtotal}\n`;
  msg += `*Maa Ka Pyaar:* Hamesha Free ❤️\n`;
  msg += `*GST (5%):* ₹${gst}\n`;
  msg += `*Kul Raashi (Total):* ₹${grandTotal}\n`;
  msg += `------------------------\n`;
  msg += `Kripya garam phulke aur thoda achaar zaroor bhejiyega! 🙏`;

  const encoded = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/917428938113?text=${encoded}`;

  window.open(whatsappUrl, '_blank');
}

function generateReceiptModal() {
  const receiptBackdrop = document.getElementById('receiptModalBackdrop');
  const parchaItemsList = document.getElementById('parchaItemsList');
  const parchaTotal = document.getElementById('parchaTotal');
  const parchaDate = document.getElementById('parchaDate');
  const parchaTime = document.getElementById('parchaTime');

  if (!receiptBackdrop || !parchaItemsList) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  if (parchaDate) parchaDate.textContent = `Date: ${dateStr}`;
  if (parchaTime) parchaTime.textContent = `Time: ${timeStr}`;

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  parchaItemsList.innerHTML = cart.map(item => `
    <div class="parcha-item-row">
      <span>${item.name} x${item.quantity}</span>
      <span>₹${item.price * item.quantity}</span>
    </div>
  `).join('') + `
    <div class="parcha-item-row" style="color: #657052; font-style: italic;">
      <span>Maa Ka Pyaar & Aashirwaad</span>
      <span>₹0.00</span>
    </div>
    <div class="parcha-item-row">
      <span>Rasoi Tax (GST 5%)</span>
      <span>₹${gst}</span>
    </div>
  `;

  if (parchaTotal) parchaTotal.textContent = `₹${grandTotal}`;

  receiptBackdrop.classList.add('active');
}

function closeReceiptModal() {
  const receiptBackdrop = document.getElementById('receiptModalBackdrop');
  if (receiptBackdrop) receiptBackdrop.classList.remove('active');
}

// ==========================================
// 10. RECIPE STORY MODAL
// ==========================================

function openRecipeModal(recipeKey) {
  const recipe = RECIPE_STORIES[recipeKey];
  const backdrop = document.getElementById('recipeModalBackdrop');
  const content = document.getElementById('recipeModalContent');

  if (!recipe || !backdrop || !content) return;

  content.innerHTML = `
    <div class="recipe-modal-header">
      <span class="recipe-modal-eyebrow">Nani Ki Purani Diary Se</span>
      <h3 class="recipe-modal-title">${recipe.title}</h3>
      <span style="font-family: var(--font-devanagari-hand); color: var(--sindoor); font-size: 1.15rem;">${recipe.hindi}</span>
    </div>

    <div class="recipe-memory-box">
      ${recipe.story}
    </div>

    <h4 style="font-family: var(--font-display); color: var(--wood-brown); margin-bottom: 0.65rem;">Asli Samagri (Ingredients)</h4>
    <ul class="recipe-steps-list">
      ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
    </ul>

    <div class="recipe-secret-tip">
      <span style="display: block; font-weight: bold; margin-bottom: 4px;">❤️ Nani Ka Secret Nuskha:</span>
      ${recipe.naniTip}
    </div>

    <button class="btn-primary w-full" onclick="quickAddToCart('${recipe.title.replace(/'/g, "\\'")}', 220, 'Nani Ke Haath Se'); closeRecipeModal();">
      Yeh Dish Tiffin Mein Order Karein
    </button>
  `;

  backdrop.classList.add('active');
}

function closeRecipeModal() {
  const backdrop = document.getElementById('recipeModalBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

// ==========================================
// 11. TABLE RESERVATION MODAL
// ==========================================

function openTableModal() {
  const backdrop = document.getElementById('tableModalBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeTableModal() {
  const backdrop = document.getElementById('tableModalBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

const bookTableBtn = document.getElementById('bookTableBtn');
if (bookTableBtn) {
  bookTableBtn.addEventListener('click', openTableModal);
}

function handleTableBooking(e) {
  e.preventDefault();
  const name = document.getElementById('bookName').value;
  const seating = document.getElementById('bookSeating').value;
  const guests = document.getElementById('bookGuests').value;

  closeTableModal();
  showToast(`🎉 Shukriya ${name} ji! Aapki baithak (${seating}) reserve ho gayi hai.`);
}

// Close modals when clicking backdrop
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('active');
  }
});

// ==========================================
// 12. WEB AUDIO API: KITCHEN AMBIANCE SYNTHESIZER
// ==========================================

let audioCtx = null;
let isAudioPlaying = false;
let tadkaNode = null;
let humNode = null;
let masterGain = null;

function initAudioSynthesizer() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (isAudioPlaying) {
      stopKitchenAmbience();
      soundBtn.classList.remove('playing');
      showToast('📻 Radio & Tadka off');
    } else {
      startKitchenAmbience();
      soundBtn.classList.add('playing');
      showToast('📻 Cozy Kitchen Tadka & Stove ambience playing ✨');
    }
  });
}

function startKitchenAmbience() {
  if (!audioCtx) return;

  masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.2, audioCtx.currentTime);
  masterGain.connect(audioCtx.destination);

  // 1. Sizzling Tadka Crackle (Filtered White Noise with random bursts)
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  const bandpass = audioCtx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.value = 1400;
  bandpass.Q.value = 2.5;

  const tadkaGain = audioCtx.createGain();
  tadkaGain.gain.value = 0.12;

  whiteNoise.connect(bandpass);
  bandpass.connect(tadkaGain);
  tadkaGain.connect(masterGain);

  whiteNoise.start();
  tadkaNode = whiteNoise;

  // 2. Simmering warm stove low drone (Two warm sine waves)
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  osc1.type = 'sine';
  osc1.frequency.value = 110; // A2 warm humming drone
  osc2.type = 'triangle';
  osc2.frequency.value = 165; // E3 harmony

  const humGain = audioCtx.createGain();
  humGain.gain.value = 0.05;

  osc1.connect(humGain);
  osc2.connect(humGain);
  humGain.connect(masterGain);

  osc1.start();
  osc2.start();
  humNode = [osc1, osc2];

  isAudioPlaying = true;
}

function stopKitchenAmbience() {
  if (tadkaNode) {
    try { tadkaNode.stop(); } catch(e){}
    tadkaNode = null;
  }
  if (humNode) {
    humNode.forEach(osc => {
      try { osc.stop(); } catch(e){}
    });
    humNode = null;
  }
  isAudioPlaying = false;
}

// ==========================================
// 13. TOAST NOTIFICATION UTILITY
// ==========================================

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="font-size: 1.2rem;">🫶</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}
