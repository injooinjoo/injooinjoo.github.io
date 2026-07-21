# Sidekick landing media provenance

All media in this directory is scoped to the `/sidekick/` marketing page. Generated visuals were explicitly requested and authorized by the user. No Extra assets, screenshots, logos, copy, or source files are included.

## Generated environmental media

| Local asset | Model | Job ID | Status | Purpose |
|---|---|---|---|---|
| `public/sidekick/media/extra-hero-poster.webp` | GPT Image 2 | `f16d6a96-06e3-486a-93f8-cba4d0162e5f` | accepted | Full-bleed desk environment with protected phone/copy space |
| `public/sidekick/media/extra-hero-motion.mp4` | Seedance 2.0 Mini | `1b98bcb5-e61c-4cad-907e-4d85ed508075` | accepted | Locked 5-second ambient Hero loop |
| `public/sidekick/media/extra-final-poster.webp` | GPT Image 2 | `487b8894-5d35-40b3-8aaf-f6c6ae045af3` | accepted | Empty riverside CTA environment with protected device space |
| `public/sidekick/media/extra-final-motion.mp4` | Seedance 2.0 Mini | `fb034ae7-3f99-43d3-83fb-5d8a880c3703` | accepted | Locked 5-second ambient Final CTA loop |

Rejected and not shipped:

- GPT Image 2 job `ebaa1f66-704a-4de5-999d-b89890defd6b` — a person and table occupied the required center-right device area.

Generation constraints for accepted assets:

- no generated product UI, phone, device, readable text, logo, icon, or watermark;
- one coherent light direction and a locked composition;
- video prompts prohibit camera pushes, zooms, object morphing, and new objects;
- generated media is decorative only; product truth remains available in text and real app screens;
- `prefers-reduced-motion: reduce` uses accepted posters and disables video/pinned behavior.

## Real Sidekick app media

Upstream repository: `injooinjoo/sidekick` (local checkout `/Users/injoo/Desktop/Dev/hermes-mobile`)

Pinned committed source SHA: `c15677e345bdee5dfc247e8b65b85e9054394547`

The upstream working tree was intentionally ignored because other mobile/backend development was active. Each source PNG was read with `git show <SHA>:<path>`. To make the evidence independently verifiable from this repository alone:

- the five exact PNG bytes are committed under `sidekick/media-source/app/`;
- `sidekick/media-source/manifest.json` binds every PNG to its upstream Git blob ID and SHA-256;
- the same manifest binds every shipped WebP to its SHA-256;
- the canonical conversion is `cwebp 1.6.0` with `cwebp -quiet -metadata none -q 88 <sourcePath> -o <targetPath>`;
- `tests/sidekick-media-provenance.spec.ts` recomputes all committed source and target hashes.

The app icon is copied byte-for-byte from `app-store-assets/sidekick-screenshot-editor/public/app-icon.png` at the same pinned commit. Product claims are carried only by these real screenshots plus editorial copy; hand-authored app controls, statuses, project boards, and other simulated product UI are prohibited.

These screens visibly support new-task input, team assignment/progress, approval-before-send, briefing, and result-card claims. They are not generated or altered into unsupported product capabilities.

## Web optimization and QA

- Posters: 1920px WebP, quality 82.
- App screens: WebP, quality 88.
- Videos: H.264/yuv420p, muted, no audio, fast-start, approximately 5.04 seconds.
- Final sizes: Hero MP4 ~193 KB; Final MP4 ~504 KB; Hero poster ~48 KB; Final poster ~307 KB.
- Start/middle/end contact sheets were visually checked for drift, deformation, generated text/UI, and object invention.
- Videos use `preload="none"` and play only near the viewport through `IntersectionObserver`.
