# Catalyst Education Website

Official marketing site for **Catalyst Education** (owned and operated by EdufinGrow LLP).

**Motto:** Ignite Potential. Engineer Excellence.

## Important: this is plain HTML

You do **not** need npm to view or host this site.

- **View on your PC:** open `index.html` in Chrome (double-click the file).
- **Host on GoDaddy:** upload the files below into `public_html`. Visitors never use npm.
- **npm is only for developers** if someone changes Tailwind CSS classes and must rebuild `css/styles.css`. That CSS file is already built.

**Current live path (free):** GitHub Pages + Google Forms (no PHP required).

Optional: PHP contact/register still exists under `api/` for paid GoDaddy hosting later — those built-in forms are hidden while `useGoogleFormsOnly` is true.

## What to upload to GoDaddy (`public_html`)

```text
index.html
disclaimer.html
.htaccess
robots.txt
sitemap.xml
css/
js/
assets/
api/
storage/          (include the .htaccess inside so logs stay private)
```

Do **not** upload `node_modules/`, `src/`, or `package.json` unless you want them for development only. They are not required for the live site.

### GoDaddy checklist

1. Open **File Manager** (or FTP) and go to `public_html`.
2. Upload the files/folders listed above.
3. Turn on **SSL** for `catalysteducation.net` / `www.catalysteducation.net`.
4. Visit your domain and confirm:
   - Homepage loads
   - Logo looks correct
   - Motto shows: Ignite Potential. Engineer Excellence.
   - Menu works (Programmes, Free Quiz, Syllabus, Faculty, Testimonials, Contact Us)
   - Quiz works
   - Map opens from Contact Us
   - Contact form and Free Test popup submit

## Production structure

```text
/
  index.html          Homepage
  .htaccess            HTTPS + basic security (Apache / GoDaddy)
  css/styles.css       Built CSS (already generated)
  js/app.js            Site logic
  assets/              Favicon + share image
  api/                 PHP form endpoints
  robots.txt
  sitemap.xml
```

The Catalyst brand logo SVG (`#catalyst-brand-logo`) must stay intact — do not edit it.

## Forms (Google Forms — free / GitHub Pages)

Enquiry and Free Mock Test use embedded Google Forms configured in `js/app.js` → `SiteConfig.googleForms`.

- `features.useGoogleFormsOnly: true` hides the old PHP forms in the page.
- Responses land in the linked Google Forms / Sheets (check the Google account that owns the forms).
- To change a form: update the embed `src` URL in `SiteConfig.googleForms`, commit, and push.

### Allow responses without Google sign-in

The website cannot bypass Google’s sign-in gate. Fix it in each form’s editor:

1. Open the form → **Settings** (gear).
2. **Responses** → turn **off** “Limit to 1 response” (this forces sign-in).
3. **Collect email addresses** → choose **Do not collect** or **Responder input** — not **Verified**.
4. Remove any **File upload** questions (uploads also force sign-in).
5. Confirm sharing is **Anyone with the link can respond** (not restricted to a Google Workspace domain).
6. Preview the embed URL (`…/viewform?embedded=true`) in a private window — you should see fields, not “Sign in to continue”.

PHP fallback (only if you later use paid hosting): `api/contact.php` / `api/register.php` → `info@catalysteducation.net`, with `storage/*.log` backup. Set `useGoogleFormsOnly: false` and remove `hidden` from the built-in forms to re-enable.

## Fees policy (on the site)

Paid Final Series / Class 12 fees are **not listed on the website**. Visitors are asked to **Contact us / WhatsApp** for fees and schedule. Update programme copy in `js/app.js` only when you decide to publish numbers.

## Browser & mobile support

- Responsive layout for phones/tablets (grids collapse, larger tap targets).
- Safari/iOS fixes: input zoom prevention, backdrop-filter prefixes, no fixed background jank.
- Works in current Chrome, Edge, Firefox, Safari, and mobile browsers.

## GitHub (optional backup)

```bash
git init
git add .
git commit -m "Production-ready Catalyst Education website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Developer-only: rebuild CSS

Only needed after changing Tailwind classes in `index.html` or `js/app.js`:

```bash
npm install
npm run build
```

## Brand rules

- Do not modify the Catalyst Education logo artwork in the SVG symbol.
- Site motto: **Ignite Potential. Engineer Excellence.**
