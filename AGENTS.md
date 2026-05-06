# cv-ampr-v2 — Personal Portfolio (Angular 19)

## Golden Rule: Critical Thinking Before Action

**Never accept user suggestions blindly.** Before implementing any change:

1. **Analyze** — Does the proposal make sense? Is it coherent with the project?
2. **Evaluate** — Are there downsides, contradictions, or better alternatives?
3. **Debate** — If the proposal has issues, explain why and suggest alternatives
4. **Only implement** — Once the user confirms after understanding the trade-offs

This applies to ALL changes regardless of perceived simplicity. "Simple" changes (color tweaks, renames, style adjustments) are where unexamined assumptions cause the most waste. Always pause and think.

## Commands

| Command         | What it does                                                  |
| --------------- | ------------------------------------------------------------- |
| `npm start`     | `ng serve -o` — dev server, opens browser at `localhost:4200` |
| `npm run build` | `ng build` — outputs to `dist/cv-ampr-v2/`                    |
| `npm run watch` | `ng build --watch --configuration development`                |
| `npm test`      | `ng test` — Karma + Jasmine (no E2E)                          |

## Architecture

### Entrypoint
`src/main.ts` → `bootstrapApplication(AppComponent, appConfig)`.

### Routes (SPA)
- `/` — `IndexComponent` (landing page with all sections)
- `/projects` — `ProjectsComponent` (project listing)
- `/projects/:id` — `ProjectComponent` (detail page, hardcoded data)
- `**` — redirects to `/`

### Directory Structure
```
src/app/
  cv/
    pages/              <-- Route-level page components
      index/            IndexComponent (landing page shell)
      projects/         ProjectsComponent (listing)
      project/          ProjectComponent (detail)
    components/         <-- Section & reusable components
      home_component/       HomeComponent
      services_component/   ServicesComponent
      about_component/      AboutComponent
      resume_component/     ResumeComponent
      projects_component/   ProjectsSection (section in IndexComponent)
      navbar-index/         NavbarIndexComponent (full nav, used on /)
      navbar-general/       NavbarGeneralComponent (minimal nav, used on /projects*)
      footer/               FooterComponent (global, rendered in AppComponent)
      change_language/      ChangeLanguageComponent
      drawer/               DrawerComponent (mobile menu)
      carousel/             CarouselComponent (image carousel in project detail)
  services/
    language.service.ts   Transloco wrapper, reads/writes localStorage['language']
  loaders/
    translocoHttpLoader.ts  Fetches translation JSON via HttpClient
  classes/
    project.ts              Project model with transloco-linked descriptions
  app.config.ts
  app.routes.ts
  app.component.ts/html/css
```

### Component Inventory

| Component | Selector | Used In | Change Detection |
|-----------|----------|---------|-----------------|
| IndexComponent | `app-index` | Router → `/` | OnPush |
| ProjectsComponent | `app-projects` | Router → `/projects` | OnPush |
| ProjectComponent | `app-project` | Router → `/projects/:id` | OnPush |
| HomeComponent | `cv-home` | IndexComponent | OnPush |
| ServicesComponent | `cv-services` | IndexComponent | OnPush |
| AboutComponent | `cv-about` | IndexComponent | OnPush |
| ResumeComponent | `cv-resume` | IndexComponent | Default |
| ProjectsSection | `cv-projects` | IndexComponent | OnPush |
| NavbarIndexComponent | `app-navbar-index` | IndexComponent (inside) | Default |
| NavbarGeneralComponent | `app-navbar-general` | ProjectsComponent, ProjectComponent | OnPush |
| FooterComponent | `app-footer` | AppComponent (global, always visible) | OnPush |
| ChangeLanguageComponent | `change-language` | NavbarIndex, NavbarGeneral | OnPush |
| DrawerComponent | `app-drawer` | NavbarIndex, NavbarGeneral | Default |
| CarouselComponent | `carousel` | ProjectComponent | Default |

### Key Design Decisions
- **Global Footer**: `<app-footer>` rendered in `AppComponent`, NOT inside IndexComponent. Visible on all routes.
- **Two Navbar variants**: Index (full nav with section links + drawer) and General (logo + language only).
- **FooterComponent** is NOT inside IndexComponent. It lives in AppComponent template alongside `<router-outlet>`, making it global.
- **FooterComponent** is NOT a section of IndexComponent — it's appended globally in AppComponent's template.
- **Redundant language init**: `LanguageService` constructor calls `initChangeLanguage()` unconditionally. `AppComponent` constructor ALSO conditionally calls it when `localStorage` has a language key — the AppComponent call is redundant.

### Styling
- Tailwind CSS v3 + per-component CSS files
- Global styles in `src/styles.css`
- Custom `500px` breakpoint in `tailwind.config.js`
- Standard interaction pattern: `transition-all duration-500` + `hover:scale-110`
- Repeated inline style for Material Icons: `transform: rotate(45deg); display: inline-block; vertical-align: middle;`
- Color scheme: `green-200`/`green-600` accents, black/white buttons, blue-600/blue-800 nav

### i18n
- **Library**: Transloco (`@jsverse/transloco`). Default: `es`. Persisted in `localStorage['language']`.
- **Files**: `public/assets/i18n/{es,en}.json` (with CV PDF at `public/assets/CV-ampr.pdf`)
- **7 top-level sections**: `navbar`, `home`, `services`, `about`, `resume`, `projects`, `footer`
- **Resume subsections**: `about` (7 fields), `experience` (3 jobs), `education` (4+ fields), `skills` (7 category titles)
- **Projects 1-6**: Each has `line-1` through `line-4/5` transloco keys
- **Transloco usage patterns**: Both `*transloco="let t; prefix: 'x'"` structural directive AND `TranslocoModule` with `| transloco` pipe coexist

### Project Data Model
- `Project` class: `id`, `name`, `description: number[]` (array of 1-indexed line refs into transloco keys), `images: string[]`, `technologies: string[]`, `githubLink?`, `liveLink?`

## Conventions

- **Directory naming**: Inconsistent — three patterns coexist:
  - `snake_case_component/` (home, services, about, resume, projects)
  - `kebab-case/` (navbar-index, navbar-general)
  - `simple/` (carousel, drawer, footer, change_language)
- **Filenames**: dotted (`change_language.component.ts`)
- **All components standalone** (no NgModules)
- **Selector prefixes**: `cv-*` (sections), `app-*` (layout/pages), bare (change-language, carousel)
- **Material Icons**: Loaded via CDN in `index.html`
- **Import paths**: Mixed — both `src/app/...` absolute and relative paths used
- **Empty ngOnInit()**: Several components implement OnInit with empty methods (dead code convention)

## Deployment

- Netlify SPA: `public/_redirects` contains `/* /index.html 200`
- Static build in `dist/cv-ampr-v2/`

## TypeScript & Angular strictness

- `strict: true`, `strictTemplates: true`, `strictInputAccessModifiers: true`, `strictInjectionParameters: true`
- Dependencies: `@angular/animations` ^19.2.21, `@angular/forms` ^19.2.21, `rxjs` ~7.8.0, `zone.js` ~0.15.0
- Dev: `autoprefixer` ^10.4.19, `postcss` ^8.4.38, `typescript` ~5.5.4
