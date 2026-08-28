# N4 漢字 Mastery

A single-page JLPT N4 kanji study app with spaced repetition, drills, and reading passages.

## Live app

**https://htmlpreview.github.io/?https://raw.githubusercontent.com/trivituso81/kanji/main/index.html**

For the permanent URL, enable GitHub Pages once:

1. Open [Settings → Pages](https://github.com/trivituso81/kanji/settings/pages)
2. Set **Source** to **Deploy from a branch**
3. Choose branch **`gh-pages`**, folder **`/ (root)`**

The app will be at **https://trivituso81.github.io/kanji/** (CI pushes to `gh-pages` automatically on every change to `main`).

## Local

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080/index.html

Audio uses Google Translate text-to-speech when you tap Japanese words or sentences (requires internet).
