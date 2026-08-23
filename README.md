# FM.OS

Cyberpunk portfolio **shell** for [Federico Monroy](https://github.com/fedemon16i).

## Relationship to `federico-portfolio`

| Repo | Role |
|------|------|
| [`fedemon16i/federico-portfolio`](https://github.com/fedemon16i/federico-portfolio) | **Source of truth for case pages** (EY, Chek, Customs, Blockchains, DollarCity) — each keeps its own design system |
| **`federico-os`** (this repo) | **OS shell** — home, skill tree, windows, navigation. Cases are mounted (iframe / embed), not restyled |

Do **not** rewrite case CSS here. The shell is Mono/PostHog-inspired; projects stay isolated volumes.

## Goals

1. **Home = OS** — skill tree (Cyberpunk-style nodes), attributes, project volumes, dock
2. **Projects open in windows** — resize, drag, fullscreen; case design systems untouched
3. **Ownership narrative** — cases can grow ownership / evidence layers without changing their product UI language
4. **Players** — text stays visible; stop + scrubbable progress where needed

## Structure (target)

```
federico-os/
  index.html              ← FM.OS home (skill tree + desktop)
  shell/                  ← shared OS chrome (optional)
  projects/               ← thin wrappers or iframes → portfolio cases
  players/                ← optional player hosts
  README.md
```

Cases may be:
- copied from `federico-portfolio` when we need a snapshot, or
- linked / embedded from the live portfolio pages.

## Status

- [x] Repo created
- [ ] Seed `index.html` from OS home preview
- [ ] Wire project windows to case HTML
- [ ] GitHub Pages

## Local previews (Grok artifacts)

Working previews live in the portfolio project workspace:
- `preview-os-home.html` — skill tree home
- `preview-os-shell.html` — earlier desktop shell
- `preview-ey-cyber-case.html` / `preview-ey-cyber-BOARD.html` — ownership pilot (not the case DS)

---

**Production portfolio (unchanged):** https://fedemon16i.github.io/federico-portfolio/
