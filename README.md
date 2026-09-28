# Pragya Hanvat — Portfolio

A single-page React portfolio (Vite + plain JavaScript, no TypeScript) built from your resume, in a distinct
dark "fintech ledger" theme — different palette, typography, and layout from the earlier sidebar-style site.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Theme notes

- **Palette**: near-black charcoal-green background with mint, gold, and rust accents — evokes a secure
  ledger/terminal rather than a bright portfolio.
- **Type**: Newsreader (serif headlines), Work Sans (body), JetBrains Mono (stats, dates, tech tags) —
  the mono face leans into the data/numbers-heavy resume content.
- **Layout**: a sticky top navbar (instead of a side rail), a hero with four animated count-up stats pulled
  straight from your resume's numbers (1000+ daily transactions, 50% faster deploys, 30% less manual effort,
  70% less manual scripting), and an animated upward trend-line illustration.
- **Animations**: the hero trend line draws itself in on load, the stat numbers count up once scrolled into
  view, and every section below fades in on scroll. Project rows, skill tags, and stat cards lift slightly on
  hover. A scrolling logo strip shows your core stack (C#, .NET, SQL Server, Git, GitLab, Docker, Kubernetes,
  Azure) using simplified, self-drawn icons.
- **Full width, no horizontal scroll**: the layout intentionally fills the browser width, with `min-width: 0`
  on all elements and `overflow-x: hidden` safeguards at the page level so nothing (like the scrolling logo
  strip) can push the page wider than the viewport.
- **Responsive navbar**: below 860px the section links and the desktop resume button collapse behind a
  hamburger icon; tapping it opens a full-width dropdown with stacked links and a "Download Resume" button,
  and the page scroll locks while it's open.

## Resume download

`public/resume.pdf` is your actual uploaded resume — the "Resume" button in the navbar (and its mobile
equivalent inside the hamburger menu) link straight to it with `download`, so it works with zero setup. To
update it later, just replace `public/resume.pdf` with a new file of the same name.

## Adding a photo

This layout uses a text-only navbar rather than a sidebar photo badge. If you'd like a profile photo, the
easiest spot is next to the hero heading in `src/components/Hero.jsx` — add an `<img>` there and give it a
`border-radius: 50%` and a fixed size in `App.css`.

## Contact form (sending real email)

- **Zero setup**: submitting the form opens your visitor's own email client with your address, subject, and
  their message pre-filled.
- **Real in-page sending (optional)**: sign up for a free [EmailJS](https://www.emailjs.com) account, then
  fill in `src/emailConfig.js`:

  ```js
  export const EMAILJS_SERVICE_ID = "your_service_id";
  export const EMAILJS_TEMPLATE_ID = "your_template_id";
  export const EMAILJS_PUBLIC_KEY = "your_public_key";
  ```

  Your EmailJS template should expect `from_name`, `from_email`, `message`, and `to_email`. Once all three
  values are filled in, the form automatically sends through EmailJS instead of falling back to mailto.

## Structure

```
src/
  data.js                    → all resume content lives here (edit freely)
  emailConfig.js               → EmailJS credentials (optional)
  App.jsx                        → composes the page sections
  App.css                          → theme tokens + animations + styling
  components/
    Navbar.jsx                      → sticky top nav with active-section highlight
    Backdrop.jsx                      → dot-grid + glow background texture
    Hero.jsx                            → summary + stat counters + trend illustration
    HeroGraphic.jsx                       → animated trend-line SVG
    StatCounter.jsx                        → count-up animated stat card
    TechLogos.jsx, LogoMarquee.jsx           → scrolling tech-stack strip
    Experience.jsx                             → role card
    Skills.jsx                                   → grouped tech tags
    Projects.jsx                                   → project write-up
    Achievements.jsx                                 → certifications + achievements
    Education.jsx                                      → education history
    Contact.jsx, ContactForm.jsx                         → contact section + working form
    Reveal.jsx                                             → scroll-triggered animation wrapper
    BackToTop.jsx                                            → floating scroll-to-top button
```

## Notes

- Only one role appears on the resume (Fiserv), so Experience is a single detailed card rather than a
  multi-job timeline.
- LinkedIn is pulled from your resume; add any other profile links you'd like in `src/data.js`.
