# Evergreen Thumbnail

Minimal landing page for a YouTube thumbnail design agency. Vanilla HTML, CSS, and JavaScript.

## Quick start

1. Open `index.html` in a browser, or run a local server:
   ```bash
   npx serve .
   ```
2. Add your thumbnails: put images in the **`images/`** folder and edit the **`GALLERY_ITEMS`** array in **`js/script.js`** (see `images/README.md`).
3. Update the contact email in **`index.html`**: change the `href` of the mailto link (or uncomment the form and hook it to Formspree/your backend).

## Viewing on mobile

- **Don’t open the file directly on your phone** (e.g. from Files or by opening `index.html`). Mobile browsers often block or mis-handle `file://` URLs, so CSS/JS/images may not load.
- **Option A — Same Wi‑Fi:** On your computer, run `npx serve .` in this folder. Note the URL (e.g. `http://localhost:3000`). Find your computer’s local IP (e.g. `192.168.1.5`). On your phone (same Wi‑Fi), open `http://YOUR_IP:3000` (replace with your IP and the port from the serve output).
- **Option B — Deploy:** Deploy to Vercel or Netlify (see below). Then open the live URL on your phone.

## Project structure

```
├── index.html       # Page structure (hero, gallery, contact, footer)
├── css/
│   └── styles.css   # All styles
├── js/
│   └── script.js    # Gallery data, lightbox, filters, scroll animations
├── images/          # Put your thumbnail files here
└── README.md
```

## Put the project on GitHub

If the folder isn’t a Git repo yet:

1. **Initialize Git and add files**
   ```bash
   cd /path/to/YouTube_Thumbnail_Agency
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a repo on GitHub**
   - Go to [github.com](https://github.com) → **New repository**.
   - Name it (e.g. `evergreen-thumbnail`). Don’t add a README or .gitignore (you already have files).
   - Copy the repo URL (e.g. `https://github.com/YOUR_USERNAME/evergreen-thumbnail.git`).

3. **Push your code**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/evergreen-thumbnail.git
   git branch -M main
   git push -u origin main
   ```
   Replace the URL with your repo URL. Use a [personal access token](https://github.com/settings/tokens) as the password if GitHub asks for one.

---

## Deploy the site (make it live)

### GitHub Pages (free, from your GitHub repo)

1. Push the project to GitHub (see above).
2. On GitHub: open your repo → **Settings** → **Pages** (left sidebar).
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**. Click **Save**.
5. After a minute or two, the site is at:  
   `https://YOUR_USERNAME.github.io/REPO_NAME/`  
   (e.g. `https://jane.github.io/evergreen-thumbnail/`)

If your repo is named `YOUR_USERNAME.github.io`, the URL is `https://YOUR_USERNAME.github.io/`.

### Vercel

1. Push this repo to GitHub (or connect another Git provider).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
3. Import the repo. Vercel will detect a static site; no build step needed.
4. Deploy. Your site will be live at `https://your-project.vercel.app`.

From the CLI:

```bash
npm i -g vercel
vercel
```

### Netlify

1. Push this repo to GitHub (or connect another Git provider).
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Connect the repo. Build settings:
   - **Build command:** leave empty (static site).
   - **Publish directory:** `.` (root).
4. Deploy.

From the CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

(When prompted, choose “Create & configure a new site” and set the publish directory to `.`.)

## Customization

- **Gallery:** Edit `GALLERY_ITEMS` in `js/script.js`. Add/remove items; set `category` for filters (tech, finance, lifestyle).
- **Contact:** Replace the mailto link in `index.html` with your email, or use the commented form with [Formspree](https://formspree.io) (or similar).
- **Colors:** Change CSS variables in `css/styles.css` (`--accent`, `--bg`, etc.).
