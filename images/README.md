# Thumbnail images

**Drop your thumbnail images here** (e.g. `thumb-1.jpg`, `thumb-2.png`).

Then update the `GALLERY_ITEMS` array in **`js/script.js`** so each entry uses a path like:

- `images/thumb-1.jpg`
- `images/thumb-2.png`

Example:

```js
const GALLERY_ITEMS = [
  { src: 'YouTube_Thumbnail_1.jpg', alt: 'Tech channel thumbnail', category: 'tech' },
  { src: 'images/thumb-2.jpg', alt: 'Finance channel thumbnail', category: 'finance' },
  // add more…
];
```

Use 16:9 images (e.g. 1280×720) for best results. They’re displayed at 16:9 on the site.
