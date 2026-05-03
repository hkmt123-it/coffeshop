const coffees = [
  {
    id: 1,
    category: "espresso",
    name: { az: "Espresso", en: "Espresso" },
    desc: { az: "Sıx, tünd, güclü. Kofenin saf halı.", en: "Dense, dark, powerful. Coffee in its purest form." },
    ingredients: { az: "Su, specialty kofe dənəsi", en: "Water, specialty coffee beans" },
    price: "4.50",
    badge: { az: "Klassik", en: "Classic" }
  },
  {
    id: 2,
    category: "latte",
    name: { az: "Süd Lattesi", en: "Milk Latte" },
    desc: { az: "Yumşaq, kremli, hər səhər üçün.", en: "Smooth, creamy, perfect for every morning." },
    ingredients: { az: "Espresso, buxarlanmış süd, süd köpüyü", en: "Espresso, steamed milk, milk foam" },
    price: "6.00",
    badge: { az: "Populyar", en: "Popular" }
  },
  {
    id: 3,
    category: "latte",
    name: { az: "Karamel Latte", en: "Caramel Latte" },
    desc: { az: "Şirin, ətirli, xoş bir təcrübə.", en: "Sweet, aromatic, a delightful experience." },
    ingredients: { az: "Espresso, süd, karamel sousu", en: "Espresso, milk, caramel sauce" },
    price: "7.00",
    badge: { az: "Sevimli", en: "Favorite" }
  },
  {
    id: 4,
    category: "cold",
    name: { az: "Cold Brew", en: "Cold Brew" },
    desc: { az: "24 saat soyuq dəmlənmiş. Yüngül, sərxoşedici.", en: "Cold brewed for 24 hours. Light and intoxicating." },
    ingredients: { az: "Soyuq su, kofe dənəsi, buz", en: "Cold water, coffee beans, ice" },
    price: "8.00",
    badge: { az: "Yeni", en: "New" }
  },
  {
    id: 5,
    category: "espresso",
    name: { az: "Americano", en: "Americano" },
    desc: { az: "Espresso və isti su. Sadə, güclü, saf.", en: "Espresso and hot water. Simple, strong, pure." },
    ingredients: { az: "Espresso, isti su", en: "Espresso, hot water" },
    price: "5.00",
    badge: null
  },
  {
    id: 6,
    category: "cold",
    name: { az: "İced Latte", en: "Iced Latte" },
    desc: { az: "Soyuq süd üzərində espresso. Yay favoriti.", en: "Espresso over cold milk. Summer favorite." },
    ingredients: { az: "Espresso, soyuq süd, buz", en: "Espresso, cold milk, ice" },
    price: "7.50",
    badge: { az: "Mövsüm", en: "Season" }
  },
  {
    id: 7,
    category: "special",
    name: { az: "Matcha Latte", en: "Matcha Latte" },
    desc: { az: "Yapon matcha tozu ilə zərif, ətirli içki.", en: "Delicate, aromatic drink with Japanese matcha powder." },
    ingredients: { az: "Matcha tozu, buxarlanmış süd, bal", en: "Matcha powder, steamed milk, honey" },
    price: "8.50",
    badge: { az: "Xüsusi", en: "Special" }
  },
  {
    id: 8,
    category: "special",
    name: { az: "Lavanda Latte", en: "Lavender Latte" },
    desc: { az: "Lavanda siropi ilə unikal, unudulmaz dad.", en: "Unique, unforgettable taste with lavender syrup." },
    ingredients: { az: "Espresso, süd, lavanda siropi", en: "Espresso, milk, lavender syrup" },
    price: "9.00",
    badge: { az: "Premium", en: "Premium" }
  },
  {
    id: 9,
    category: "dessert",
    name: { az: "Tiramisu", en: "Tiramisu" },
    desc: { az: "İtalyan klassiki. Kofe və maskarpone kremi.", en: "Italian classic. Coffee and mascarpone cream." },
    ingredients: { az: "Maskarpone, espresso, savoiardi, kakao", en: "Mascarpone, espresso, savoiardi, cocoa" },
    price: "9.00",
    badge: { az: "Populyar", en: "Popular" }
  },
  {
    id: 10,
    category: "dessert",
    name: { az: "Çokolad Keks", en: "Chocolate Muffin" },
    desc: { az: "Isti, yumşaq, əridən çokolad içi.", en: "Warm, soft, melting chocolate inside." },
    ingredients: { az: "Çokolad, un, yumurta, kərə yağı", en: "Chocolate, flour, eggs, butter" },
    price: "7.00",
    badge: { az: "Yeni", en: "New" }
  },
];

// --- NAV ---
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// --- GRİDLƏR ---
const hotGrid = document.getElementById('hotGrid');
const iceGrid = document.getElementById('iceGrid');
const dessertGrid = document.getElementById('dessertGrid');
const specialGrid = document.getElementById('specialGrid')

// --- RENDER ---
coffees.forEach(coffee => {
  const card = `
  <div class="relative bg-stone-900 border border-stone-800 hover:border-amber-400 hover:scale-105 transition-all duration-300 overflow-hidden">
    
    ${coffee.badge ? `
      <span class="absolute top-3 right-3 z-10 bg-amber-400 text-stone-950 text-xs tracking-widest uppercase px-3 py-1">
        ${coffee.badge.az}
      </span>
    ` : ''}

    <img src="https://placehold.co/400x300/1c1917/amber?text=Coffee" alt="${coffee.name.az}" class="w-full h-36 object-cover">

    <div class="p-6">
      <h3 class="font-['Cormorant_Garamond'] text-2xl text-stone-100 mb-2">${coffee.name.az}</h3>
      <p class="text-stone-400 text-sm leading-relaxed mb-3">${coffee.desc.az}</p>
      <p class="text-stone-500 text-xs mb-5">${coffee.ingredients.az}</p>
      <p class="text-amber-400 text-lg font-light">₼ ${coffee.price}</p>
    </div>

  </div>
`;

  if (coffee.category === "cold") {
    iceGrid.innerHTML += card;
  } else if (coffee.category === "espresso" || coffee.category === "latte") {
    hotGrid.innerHTML += card;
  } else if (coffee.category === "special") {
    specialGrid.innerHTML += card;
  } else {
    dessertGrid.innerHTML += card
  }
});

