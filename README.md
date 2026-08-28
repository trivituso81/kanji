# N4 漢字 Mastery

A single-page JLPT N4 kanji study app with spaced repetition, drills, and reading passages.

## Live app

**https://trivituso81.github.io/kanji/**

### First-time setup (fixes 404)

GitHub Pages must be enabled once:

1. Open **[Settings → Pages](https://github.com/trivituso81/kanji/settings/pages)**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Select branch **`gh-pages`**, folder **`/ (root)`**, click **Save**

Wait ~1 minute, then reload the live URL.

*(Alternative: branch **`main`**, folder **`/docs`**.)*

After the first visit, **reload once** so the audio service worker activates. Open the site directly — preview wrappers break audio.

## Local

```bash
python3 -m http.server 8080
```

Visit http://localhost:8080/index.html

Audio uses Google Translate text-to-speech (requires internet).
