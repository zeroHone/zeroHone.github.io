const CACHE_NAME = "version-1";
const urlsToCache = ['index.html','offline.html'];

// Install SW
self.addEventListener('install' , (event) =>{
event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache)=>{
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
    })
)


});
// Listen for requests
self.addEventListener('fetch' , (event) => {
/*
    event.respondWith(
        caches.match(event.request)
        .then(()=>{
            return fetch(event.request)
            .catch(()=> caches.match('offline.html'))
        })
    )
*/
self.addEventListener("fetch", event => {
    console.log('WORKER');    
    console.log('WORKER: Fetching', event.request);
  });
}

);
//Activate the SW


