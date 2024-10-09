'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a999ec7f19a004837d3e7790bb587dde",
"assets/AssetManifest.bin.json": "c91dcea817d76b47b893108668eb9e11",
"assets/AssetManifest.json": "b554d2c49ab033ebb8f54285ac37c509",
"assets/assets/images/%25C4%2591%25E1%25BB%2593%2520H%25C3%25A0n.jpg": "f3cdf5e14c2fe00e1790b52df212680a",
"assets/assets/images/%25C4%2591%25E1%25BB%2593%2520n%25C6%25B0%25E1%25BB%259Bng.jpeg": "aa0ccc965f36cdd95bbbe10f4c88c3be",
"assets/assets/images/%25C4%2591%25E1%25BB%2593%2520Th%25C3%25A1i.jpg": "19991fea2c8972f8538dfb6aebdb05b2",
"assets/assets/images/b%25C3%25A1nh%2520%25C4%2591%25C3%25BAc.jpg": "55344c127f59db75b595999a49fcac4b",
"assets/assets/images/b%25C3%25A1nh%2520cu%25E1%25BB%2591n.jpg": "e454d2160eaae08fd3a094ee9144412e",
"assets/assets/images/b%25C3%25A1nh%2520m%25C3%25AC.jpg": "02f9a1fef58081857316a9f7b31578ae",
"assets/assets/images/b%25C3%25BAn%2520%25C4%2591%25E1%25BA%25ADu.jpg": "03c91ebfebd686657652cc637b9a5b11",
"assets/assets/images/b%25C3%25BAn%2520b%25C3%25B2%2520hu%25E1%25BA%25BF.jpg": "9d3f2cbee8cdb5d7176eacc485b4cd0c",
"assets/assets/images/b%25C3%25BAn%2520c%25C3%25A1%2520ch%25E1%25BA%25A5m.jpg": "7d4ac478af1790efc7fa376930587a31",
"assets/assets/images/b%25C3%25BAn%2520ch%25E1%25BA%25A3.jpg": "b195b8d8f03cbfdc3ced9b23ffa6f0ae",
"assets/assets/images/b%25C3%25BAn%2520ngan.jpg": "ff719b8da10941309a78e49519aeb04e",
"assets/assets/images/b%25C3%25BAn%2520ri%25C3%25AAu.jpeg": "67f4023ac21281884109479e945c8764",
"assets/assets/images/b%25C3%25BAn%2520thang.jpg": "f6fdea57239c542c983618e240527b8c",
"assets/assets/images/buffet-1.jpg": "3760ca5d686ce277861ce6bf1b6f2b53",
"assets/assets/images/bunsuon.jpg": "80c2b8ed3c8079eb1781dd8881db01a1",
"assets/assets/images/c%25C6%25A1m.jpg": "15e763b1f2c35cd7ed81c58bd6631f5a",
"assets/assets/images/ch%25C3%25A1o%2520s%25C6%25B0%25E1%25BB%259Dn.jpg": "69dec0e33c36ade5b59eaea45f9d8004",
"assets/assets/images/g%25C3%25A0%2520r%25C3%25A1n.jpg": "e0c15614bc2e16b44bda08e360c90d17",
"assets/assets/images/hamburger.jpg": "7b67b522143cfbd596f16977da4837e3",
"assets/assets/images/mi.png": "b9e3e80735498d5cb4123bf378991462",
"assets/assets/images/ph%25E1%25BB%259F%2520b%25C3%25B2.jpg": "8bab5fc8746e0b26bb32dad2c008305b",
"assets/assets/images/ph%25E1%25BB%259F%2520g%25C3%25A0.jpg": "3c09e7695c521cce45ecb8a8fa367982",
"assets/assets/images/tacos.jpg": "0686f6e1102ac498c399fe737c7bee8a",
"assets/assets/images/xi%25C3%25AAn%2520b%25E1%25BA%25A9n.jpg": "101174dedb15ec1145b3b260118c6124",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "8c64696bf989360c28d63102d4e77d33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7cd2a8888cbd3a8375011a8b239a3cf1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac0089b58cd238e185a24193d1f0b841",
"/": "ac0089b58cd238e185a24193d1f0b841",
"main.dart.js": "67091f15636fa3b17ce3bf220873d86c",
"manifest.json": "18c94a82a7dbe370e44371bbc7b89d81",
"version.json": "ce37b98673874c1cfa61d611a5d6b989"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
