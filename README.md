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
