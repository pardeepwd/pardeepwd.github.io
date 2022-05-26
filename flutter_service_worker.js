'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8469b9530708115addbda53136660061",
"index.html": "27af9a97e9d3194d6a0890821419215f",
"/": "27af9a97e9d3194d6a0890821419215f",
"main.dart.js": "99a93c3184dd1f9ee738e68b6bc709fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc96ae9aa1cb8a1ff2f8accbedf92bf5",
"assets/AssetManifest.json": "b30538a6cb7dbea82cbbe36b20312488",
"assets/NOTICES": "b7421c59665655b449988ccae8fc4402",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Vector_(1).png": "fb53e01d9ccf8995cc310f4367783508",
"assets/assets/Ellipse_45.png": "d5c16e579b5dc6da11fd10ae54d6270c",
"assets/assets/Rectangle_2.png": "6b8aab53f19b5411a1ec8fef5a26e32f",
"assets/assets/Rectangle_28.png": "eff23a4e7982d0e5d24324f694e47db6",
"assets/assets/sun_1.png": "82feb0fbdd83dec09ad6e8ffd8fe5aff",
"assets/assets/Rectangle_28_(1).png": "26d493a40d3aa386231a9012d96ba6b1",
"assets/assets/qinas-logo_1.png": "74b2d02b27652de0ef57dc89515a0341",
"assets/assets/image_12.png": "aa8c9c65d8ac4d18dea087014c0d462d",
"assets/assets/Rectangle_17.png": "13e9dda87adc6146f6819115180db3dd",
"assets/assets/Rectangle_5.png": "067b6560ea54e5b0b2df282604949969",
"assets/assets/image_10.png": "b4e88448ae0bb2945e1de87fb317f70d",
"assets/assets/quotes_end.png": "e03e47772f5d020b3dade3a9aca46e8a",
"assets/assets/Ellipse_18.png": "ba4e2e74622484e91447a26f58f857d3",
"assets/assets/Group_1.png": "a8f2fd78bff1f624bc2938210c3e25b5",
"assets/assets/image_8.png": "88626f0ce8e3cc6d727b4e8b114275b1",
"assets/assets/Vector.png": "b73bce7a5fd2e485b7f5536323a01060",
"assets/assets/Frame_1_(1).png": "ee3e4faf41807296563cec431bab5853",
"assets/assets/quotes_start.png": "f92e9217c8b98206a889ceb1e4a83d88",
"assets/assets/comenius-rgb%25201.png": "809e73f6f51206e65dc5a66aa3bea9f3",
"assets/assets/CVO%2520t%2520Gooi%2520RGB%25201.png": "969239b97285590b6a97acba31c4d4e9",
"assets/assets/Rectangle_22_(1).png": "3f166259c409e0640b089a98f75226b8",
"assets/assets/Frame_1.png": "61d496def68e51d31f54685257719d1f",
"assets/assets/Ellipse_20.png": "63b784592fe7ff3bf3d2bb159cdbef23",
"assets/assets/Group_4.png": "abe0bdae0dd091a4313774ebe68d3412",
"assets/assets/image_1.png": "6599648e19134d519d9a0c573e1ff892",
"assets/assets/image_9_(1).png": "ef876c5f9fc565597e95af9f7d587d1d",
"assets/assets/image_4.png": "2163f7c213136850c329755496dc5365",
"assets/assets/twitter.png": "fb53e01d9ccf8995cc310f4367783508",
"assets/assets/Rectangle_27.png": "f6315c9b88f16ae59c734f0cb169ec49",
"assets/assets/Untitled.png": "e7ad0ee9ebf46a6196de19daeb168530",
"assets/assets/Rectangle_26.png": "205bd262285531d3a592021d9d89d5f2",
"assets/assets/Rectangle_32.png": "4c17f815bac3415f03cd15f37d2473a3",
"assets/assets/image_3_(1).png": "aa35464759a39f19ac88a3cbb08e0e15",
"assets/assets/Rectangle_30.png": "28cfb3e9a74b89cb80963b8f64cb1625",
"assets/assets/Rectangle_25.png": "94bb4b908ce821fba34b98dc53432b6d",
"assets/assets/LC-Logo-Geel-RGB%2520-%2520light%2520theme%25201.png": "a4788277df5a708414475c52b489649b",
"assets/assets/image_2_(1).png": "07e9248ccba0720b88c84aa0f5817b17",
"assets/assets/Ellipse_5.png": "d2322fbdb1b7b49217e5cd103b3b1f0e",
"assets/assets/Rectangle_22.png": "206f4e61d6ff15dda638e98bea1452e5",
"assets/assets/Ellipse_7.png": "2c0f3e09f7dc91ee2976a443f6cff773",
"assets/assets/Ellipse_6.png": "77b1b5abd433fc9d1a4fed51a3afcc9c",
"assets/assets/erfgooierscollege_1.png": "bcd3c2b09f13d64162bda8d488b37452"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
