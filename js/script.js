/**
 * Evergreen Thumbnail — Landing Page Script
 * Gallery, lightbox, filters, scroll animations.
 */

/* ============================================
   GALLERY ITEMS — Edit this array to add/remove thumbnails.
   - src: image path (use "images/your-file.jpg" for local files)
   - alt: short description for accessibility
   - title: text shown below the image (change or add for each)
   - category: optional — "tech" | "finance" | "lifestyle" (for filters)
   ============================================ */
const GALLERY_ITEMS = [
  {
    src: 'images/thumb-1.png',
    alt: 'Travel thumbnail — $1,200 experience, Thailand bathroom scene',
    title: 'Recently Divorced Bachelor Leaves Virginia For Thailand | Tour His Luxury Penthouse Condo With Me',
  },
  {
    src: 'images/thumb-2.png',
    alt: 'Erewhon Store Review',
    title: 'Eating At The MOST EXPENSIVE Grocery Store In LA | We Starving',
  },
  {
    src: 'images/thumb-3.png',
    alt: 'Mia Khalifa standing in front of warzone, ISIS',
    title: 'From Adult Actress To Being Targeted By ISIS: Mia Khalifa',
  },
  {
    src: 'images/thumb-4.png',
    alt: 'The Over-Therapization of Society',
    title: 'The Over-Therapization of Society',
  },
  {
    src: 'images/thumb-5.png',
    alt: 'Angela White Finally Squashing Beef W/ Heather, Celebrating 2yrs of Sobriety, Baptism, Kids + More',
    title: 'Angela White Finally Squashing Beef W/ Heather, Celebrating 2yrs of Sobriety, Baptism, Kids + More',
  },
  {
    src: 'images/thumb-6.png',
    alt: 'G Herbo On Facing PTSD, Pressures of Being A Role Model, Being Sh*t, Mental Health, New Music + More',
    title: 'G Herbo On Facing PTSD, Pressures of Being A Role Model, Being Sh*t, Mental Health, New Music + More',
  },
];

/* ---------- DOM refs ---------- */
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
const filterBtns = document.querySelectorAll('.filter-btn');

/* ---------- Render gallery ---------- */
function renderGallery(items) {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = items
    .map(
      (item, i) => `
    <article class="gallery-item" data-category="${item.category || ''}" data-index="${i}">
      <a href="${item.src}" class="gallery-item__link" data-full="${item.src}" data-alt="${escapeHtml(item.alt)}" data-title="${escapeHtml(item.title || '')}" aria-label="View ${escapeHtml(item.alt)}">
        <img class="gallery-item__img" src="${item.src}" alt="${escapeHtml(item.alt)}" loading="lazy" width="640" height="360">
      </a>
      ${item.title ? `<p class="gallery-item__title">${escapeHtml(item.title)}</p>` : ''}
    </article>
  `
    )
    .join('');

  // Re-attach click handlers and observer for new nodes
  galleryGrid.querySelectorAll('.gallery-item__link').forEach((link) => {
    link.addEventListener('click', openLightbox);
  });
  observeGalleryItems();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ---------- Lightbox ---------- */
function openLightbox(e) {
  e.preventDefault();
  const link = e.currentTarget;
  const src = link.getAttribute('data-full') || link.getAttribute('href');
  const alt = link.getAttribute('data-alt') || '';
  const title = link.getAttribute('data-title') || '';
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  const captionEl = document.getElementById('lightboxCaption');
  if (captionEl) {
    captionEl.textContent = title;
    captionEl.style.display = title ? 'block' : 'none';
  }
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
});

/* ---------- Filters ---------- */
let activeFilter = 'all';

function filterGallery() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach((el) => {
    const cat = el.getAttribute('data-category') || '';
    const show = activeFilter === 'all' || cat === activeFilter;
    el.style.display = show ? '' : 'none';
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter') || 'all';
    filterGallery();
  });
});

/* ---------- Scroll animations (fade-in) ---------- */
function observeGalleryItems() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
}

/* ---------- Init ---------- */
renderGallery(GALLERY_ITEMS);
