'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "3401f97784d188780f29da655de2c432",
"/": "7a26ca7343dd16f62b15c6339b704bbf",
"main.dart.js": "32109123fc722421c729eb2af3ee36e8",
"hemish11.github.io/version.json": "980547175e325fe622a3362b84d55b6a",
"hemish11.github.io/index.html": "7a26ca7343dd16f62b15c6339b704bbf",
"hemish11.github.io/LICENSE": "ed743b2384d56944b3f66eaeed02ce0c",
"hemish11.github.io/main.dart.js": "033a9f9537e06544fc5059e9aa1f6a8b",
"hemish11.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"hemish11.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"hemish11.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"hemish11.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"hemish11.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"hemish11.github.io/manifest.json": "90c454c29b48f08bc06627d125f70466",
"hemish11.github.io/.git/config": "30c52abf3917d024acad1de458aa214d",
"hemish11.github.io/.git/objects/pack/pack-8610a6dcf59f67ee761056a4dfba9b4b161af03a.idx": "c9cf5da1a5765907922125ae1d254f5c",
"hemish11.github.io/.git/objects/pack/pack-8610a6dcf59f67ee761056a4dfba9b4b161af03a.pack": "2964d1f51314d2a7c2189f912c9368a6",
"hemish11.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"hemish11.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"hemish11.github.io/.git/logs/HEAD": "3eb77665856260d75bd1d903714c9a7a",
"hemish11.github.io/.git/logs/refs/heads/main": "3eb77665856260d75bd1d903714c9a7a",
"hemish11.github.io/.git/logs/refs/remotes/origin/HEAD": "3eb77665856260d75bd1d903714c9a7a",
"hemish11.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"hemish11.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"hemish11.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"hemish11.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"hemish11.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"hemish11.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"hemish11.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"hemish11.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"hemish11.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"hemish11.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"hemish11.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"hemish11.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"hemish11.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"hemish11.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"hemish11.github.io/.git/refs/heads/main": "1fe9d94c650317b701a51dafc2c0ae20",
"hemish11.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"hemish11.github.io/.git/index": "2a56261f236e279891dbec6811b3c984",
"hemish11.github.io/.git/packed-refs": "7c8d3865a7f015f768ab0fdf6095a2c9",
"hemish11.github.io/assets/AssetManifest.json": "9f3b266f73777a52761566ff0b61b2c3",
"hemish11.github.io/assets/NOTICES": "f70a20fc0afb0f8011474564dd9cc992",
"hemish11.github.io/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"hemish11.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"hemish11.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"hemish11.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"hemish11.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"hemish11.github.io/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"hemish11.github.io/assets/assets/images/my_image.jpg": "e490de7c0efb038f2b51b74bc16f35cf",
"hemish11.github.io/assets/assets/icons/Trigi%2520Free.png": "fffd55178ea635e292947f458ec0f91d",
"hemish11.github.io/assets/assets/icons/Vectorize.png": "ceca3e342c7a36812c209dc92a46465a",
"hemish11.github.io/assets/assets/icons/Kwizi.png": "0766df14bd6da570713df565e1d4fe9c",
"hemish11.github.io/assets/assets/icons/TooDoer.png": "deb24a5d1b1829464337ac8829a4c77a",
"hemish11.github.io/assets/assets/icons/Num%2520Cluster.png": "996d98a81d088bcec76dc9d17aaf30e6",
"hemish11.github.io/assets/assets/icons/A1%2520Calc.png": "fa38d4bd4c5c4e8cbb72677044002ad0",
"hemish11.github.io/assets/assets/icons/Carbon%252012.png": "2f5e1a07b7daaa1a5dc01f80fc7bfd42",
"hemish11.github.io/assets/assets/icons/ChemKosh.png": "57abc46fa07255145b238b8a0ed034e5",
"hemish11.github.io/assets/assets/icons/Math%2520Q.png": "bd8c7981dee0539897708fb061f190b4",
"hemish11.github.io/assets/assets/icons/kalQlus.png": "0eee87e4470de3e8fc78240c7a60a770",
"hemish11.github.io/assets/assets/icons/GeoPi%2520Free.png": "79ee744112d084b1e25217f0706a030f",
"hemish11.github.io/assets/assets/icons/GeoPi.png": "238b1e1ec9a8ce92dcb062078c3167b6",
"hemish11.github.io/assets/assets/icons/Trigi%2520Pro.png": "3e41685580a1df347f5fd90b3fe9b95a",
"hemish11.github.io/assets/assets/google_fonts/FiraSans-Medium.ttf": "f97963c595e8acb87013c1d4e1c3c9f9",
"hemish11.github.io/assets/assets/google_fonts/RobotoMono-Bold.ttf": "e72fdf1cca2cebcbe91325bbe9f9e5da",
"hemish11.github.io/assets/assets/google_fonts/FiraSans-Regular.ttf": "50e780b45678ae34cef52d3e5112bd0d",
"hemish11.github.io/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"hemish11.github.io/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"hemish11.github.io/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"hemish11.github.io/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "9f3b266f73777a52761566ff0b61b2c3",
"assets/NOTICES": "f70a20fc0afb0f8011474564dd9cc992",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/my_image.jpg": "e490de7c0efb038f2b51b74bc16f35cf",
"assets/assets/icons/Trigi%2520Free.png": "fffd55178ea635e292947f458ec0f91d",
"assets/assets/icons/Vectorize.png": "ceca3e342c7a36812c209dc92a46465a",
"assets/assets/icons/Kwizi.png": "0766df14bd6da570713df565e1d4fe9c",
"assets/assets/icons/TooDoer.png": "deb24a5d1b1829464337ac8829a4c77a",
"assets/assets/icons/Num%2520Cluster.png": "996d98a81d088bcec76dc9d17aaf30e6",
"assets/assets/icons/A1%2520Calc.png": "fa38d4bd4c5c4e8cbb72677044002ad0",
"assets/assets/icons/Carbon%252012.png": "2f5e1a07b7daaa1a5dc01f80fc7bfd42",
"assets/assets/icons/ChemKosh.png": "57abc46fa07255145b238b8a0ed034e5",
"assets/assets/icons/Math%2520Q.png": "bd8c7981dee0539897708fb061f190b4",
"assets/assets/icons/kalQlus.png": "0eee87e4470de3e8fc78240c7a60a770",
"assets/assets/icons/GeoPi%2520Free.png": "79ee744112d084b1e25217f0706a030f",
"assets/assets/icons/GeoPi.png": "238b1e1ec9a8ce92dcb062078c3167b6",
"assets/assets/icons/Trigi%2520Pro.png": "3e41685580a1df347f5fd90b3fe9b95a",
"assets/assets/google_fonts/FiraSans-Medium.ttf": "f97963c595e8acb87013c1d4e1c3c9f9",
"assets/assets/google_fonts/RobotoMono-Bold.ttf": "e72fdf1cca2cebcbe91325bbe9f9e5da",
"assets/assets/google_fonts/FiraSans-Regular.ttf": "50e780b45678ae34cef52d3e5112bd0d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
