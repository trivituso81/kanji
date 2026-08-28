const TTS='https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.pathname.endsWith('/tts')){
    const q=u.searchParams.get('q');
    if(!q){e.respondWith(new Response('missing q',{status:400}));return}
    e.respondWith(fetch(TTS+encodeURIComponent(q),{
      referrerPolicy:'no-referrer',
      headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    }).then(r=>new Response(r.body,{
      status:r.status,
      headers:{'Content-Type':'audio/mpeg','Cache-Control':'public, max-age=86400'}
    })).catch(()=>new Response('tts error',{status:502})));
  }
});
