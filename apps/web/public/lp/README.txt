Screenshots for /shopify-store-setup.

Specs:
  - Capture the hero / top of each store at a 1440px-wide browser window
  - Crop to 3:2 (e.g. 1440 x 960). The component crops to 3:2 from the top anyway,
    but cropping yourself means you choose what survives
  - Export at 1200px wide, JPG or WebP, aim for under 200 KB each
  - Name them plainly: cld9.jpg, furniture.jpg, renderease.jpg, store-1.jpg ...
  - 3 or 6 images look best (the grid is 3 across on desktop)

Then list them in the `work` array at the top of src/pages/shopify-store-setup.astro.
An item with an empty `image` is skipped, so you can add them one at a time.

Only use screenshots you have the right to show publicly.
