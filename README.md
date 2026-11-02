# Catalyst Education Website

Official marketing site for **Catalyst Education** (owned and operated by EdufinGrow LLP).

**Motto:** Ignite Potential. Engineer Excellence.

## Important: this is plain HTML

You do **not** need npm to view or host this site.

- **View on your PC:** open `index.html` in Chrome (double-click the file).
- **Host on GoDaddy:** upload the files below into `public_html`. Visitors never use npm.
- **npm is only for developers** if someone changes Tailwind CSS classes and must rebuild `css/styles.css`. That CSS file is already built.

Contact / free-test **email sending** needs PHP on GoDaddy. The page itself still works as normal HTML.

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

## Forms (after GoDaddy upload)

- `api/contact.php` and `api/register.php` send to `info@catalysteducation.net`.
- If the host blocks PHP `mail()`, leads are still saved under `storage/*.log` for follow-up.
- Change `$TO_EMAIL` in those PHP files only if your inbox changes.

## Fees policy (on the site)

Paid Final Series / Class 12 fees are **not listed on the website**. Visitors are asked to **Contact us / WhatsApp** for fees and schedule. Update programme copy in `js/app.js` only when you decide to publish numbers.

## Add Google Forms under Enquiry + Free Mock popup

1. Open your Google Form → **Send** → **<>** (Embed).
2. Copy the `src` URL (it looks like `https://docs.google.com/forms/d/e/.../viewform?embedded=true`).
3. Open `js/app.js` and paste into `SiteConfig.googleForms`:

```js
googleForms: {
  enquiry: 'PASTE_ENQUIRY_FORM_EMBED_URL_HERE',
  mockTest: 'PASTE_MOCK_TEST_FORM_EMBED_URL_HERE'
}
```

4. Save and refresh. The Google Form appears under each built-in form.  
   If either URL is left empty, that Google Form block stays hidden.

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
