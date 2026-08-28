# N4 漢字 Mastery

A single-page JLPT N4 kanji study app with spaced repetition, drills, and reading passages.

## Live app

**https://trivituso81.github.io/kanji/** (enable [GitHub Pages](https://github.com/trivituso81/kanji/settings/pages) → branch `gh-pages` if not live yet)

Open the app directly — do not use HTML preview wrappers; they break audio. After the first visit, **reload once** so the audio proxy service worker activates.

## Local

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080/index.html

Audio uses Google Translate text-to-speech when you tap Japanese words or sentences (requires internet).
