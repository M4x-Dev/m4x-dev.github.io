'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7e4fda915ce42447fa29d479843e0d4e",
"index.html": "d6343922037d06329829fe62401db472",
"/": "d6343922037d06329829fe62401db472",
"main.dart.js": "b9b2e02f4b7880b115b8a505519c60dd",
"favicon.jpg": "cd122d177b16f92a501ab956ac4f50ce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1aa74f162af9a7c6fc22dad7b68cd969",
"extensions.js": "c5a2634ace79b68926cd1a185c04de84",
"assets/AssetManifest.json": "cd7dfb465ec481e9c60df55ce7745448",
"assets/NOTICES": "6c61ccf70534141eebb1d4a32deed241",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/naturwissenschaften.JPG": "191dfb0a7e80b2ebf53af51fbb67ef0a",
"assets/assets/images/foyer_adjusted.JPG": "851f3e78d5303d5e1501f775dd6e87ab",
"assets/assets/images/intro_banner.jpeg": "d641ea156065fa9021a85745dfedfd9e",
"assets/assets/images/kunst_adjusted.JPG": "7a2ea4010a922c6a3de4a7b0de269d97",
"assets/assets/images/sprachen.JPG": "a5d1364617fd776d9aa0137751a17d2e",
"assets/assets/images/sekretariat_adjusted.jpeg": "bec30f3a1fdb467dfa64d228b7d737c5",
"assets/assets/images/kunst.JPG": "4f8f852e4f062eefe38571f54779a84b",
"assets/assets/images/sekretariat.JPG": "3f3529d4f9746f169f0e9afcf1cc8728",
"assets/assets/images/naturwissenschaften_adjusted.JPG": "2bbb3c6bec27b3b44913a8b534871845",
"assets/assets/images/logo.jpg": "cd122d177b16f92a501ab956ac4f50ce",
"assets/assets/images/foyer.JPG": "87af1249122b8fd73676fbb10183ae5f",
"assets/assets/resources/foerderverein_stadtfeld.md": "1c0a414d494cfaadc12c454ec491dbd3",
"assets/assets/resources/config.xml": "d03022c6d762a7900e6418a463226658",
"assets/assets/resources/virtual_tour.xml": "c189ba0996023d0375a24532f100335e",
"assets/assets/animation/help_pc_drag.riv": "cc9166ed5673ece592878ba38238d0cf",
"assets/assets/animation/help_pc_pinch.riv": "acac0ff9830dd9d2c2ddb45b159dca0d",
"assets/assets/animation/help_phone_drag.riv": "bee2d7d90217ca0f1c7c499b934603f4",
"assets/assets/animation/help_phone_pinch.riv": "09db6f3b06eee7915089e96bc76db4f4",
"assets/assets/subjects/franzoesisch/summary.md": "557b8bfc08425c4e13c8302df935cd43",
"assets/assets/subjects/franzoesisch/subject.json": "d41a5bd7854f1f0f08a02cf2b7d72460",
"assets/assets/subjects/geschichte/summary.md": "a4379095ca1dccf260992405b8e3e00a",
"assets/assets/subjects/geschichte/examples/freizeit_roemer.jpeg": "4ef1f162a7e988687abb1364b422a5ca",
"assets/assets/subjects/geschichte/examples/freizeit_roemer.json": "db923ce1093dbca169854e28839f5b3b",
"assets/assets/subjects/geschichte/examples/alltagsleben_altes_rom.json": "446efe7a30d640890f7d7fc2ed750149",
"assets/assets/subjects/geschichte/examples/alltagsleben_altes_rom.jpeg": "45225414ed68cf9b34049532772109c3",
"assets/assets/subjects/geschichte/subject.json": "5b0ee2719a8b3ef8278505a65f5a8225",
"assets/assets/subjects/chemie/summary.md": "7262d73d60eb2d3a1ef3984790348c4e",
"assets/assets/subjects/chemie/subject.json": "722cb24851536ac31de2d284e45fa35e",
"assets/assets/subjects/biologie/summary.md": "86790484c1093b332f926931015c5e25",
"assets/assets/subjects/biologie/subject.json": "9ec17f7bc310267ec1605affe7e90423",
"assets/assets/subjects/englisch/summary.md": "27edc08efd73fa338abedcbf8c19b155",
"assets/assets/subjects/englisch/examples/going_to_future_2.jpeg": "36196f716f4d36be49d2ea141218ac25",
"assets/assets/subjects/englisch/examples/present_progressive.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/englisch/examples/going_to_future_2.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/englisch/examples/present_progressive.jpeg": "a1fa3cab1725f9305d230648c2d2ffaf",
"assets/assets/subjects/englisch/examples/adjectives.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/englisch/examples/going_to_future.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/englisch/examples/adverbs_2.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/englisch/examples/adverbs.jpeg": "195ac6596a926b76d095063fca65f3bd",
"assets/assets/subjects/englisch/examples/subject_object_questions.jpeg": "96e551946e95555c0d28dd0ade4f94fc",
"assets/assets/subjects/englisch/examples/adjectives.jpeg": "2c46d64c9e9034b0044854a642a9c586",
"assets/assets/subjects/englisch/examples/going_to_future.jpeg": "1f9bac1d5fd4d89ebf31196111f67fbd",
"assets/assets/subjects/englisch/examples/adverbs_2.jpeg": "aaaba4927b4c79c980e84fcd91ea8a94",
"assets/assets/subjects/englisch/examples/adverbs.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/englisch/examples/subject_object_questions.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/englisch/subject.json": "24bb7036dac9363f4d231534a9083607",
"assets/assets/subjects/ethik_religion/summary.md": "39c7d960a670c08ca808e4c0ebb7e8d9",
"assets/assets/subjects/ethik_religion/subject.json": "4613cb01b0d71834c83688488af2a2b0",
"assets/assets/subjects/kunst/summary.md": "2506735155627e39e968ed864120e4e2",
"assets/assets/subjects/kunst/subject.json": "6c6ddd6115f8c95605c9aabe14474660",
"assets/assets/subjects/astronomie/summary.md": "c75fbbbda6f3f726b4dc546ab1b3b4dd",
"assets/assets/subjects/astronomie/gallery/astro_1.jpeg": "1418c1137cd108d84a76b0ace5114172",
"assets/assets/subjects/astronomie/gallery/astro_1.json": "8fd658eae2f9ba839d5e62bb3bc6e8a8",
"assets/assets/subjects/astronomie/gallery/astro_2.mov": "b52c46b349465cad15e8872351e7063c",
"assets/assets/subjects/astronomie/gallery/astro_2.json": "aac2c1890c1059b348f7469d2fb7c8d3",
"assets/assets/subjects/astronomie/subject.json": "d68928d176ce41a149e7780d2bad070a",
"assets/assets/subjects/latein/summary.md": "59d6f2bc53daf997f74955ba4532533e",
"assets/assets/subjects/latein/examples/orpheus_und_eurydike.json": "2d5131ca01811af67bde03d02ac28a3a",
"assets/assets/subjects/latein/examples/orpheus_und_eurydike.html": "ad47d607c1717bceab4b0c446c8cb14a",
"assets/assets/subjects/latein/subject.json": "6a0713a054d5a13d9a5c1087aed225f7",
"assets/assets/subjects/physik/summary.md": "94755232860a9a3b848d110698b6b383",
"assets/assets/subjects/physik/gallery/phaeno_2.json": "a646feca53ded2a148a7f5a03eac61ee",
"assets/assets/subjects/physik/gallery/phaeno_2.jpeg": "ff07913c57440f1ea7b648630a4aa4a2",
"assets/assets/subjects/physik/gallery/phaeno_1.jpeg": "793ba0c43ae5ceb287b55660f5bf7b3d",
"assets/assets/subjects/physik/gallery/phaeno_1.json": "508ae89dddee625c60941256d6eaed25",
"assets/assets/subjects/physik/subject.json": "81c650c3c9932d80ecd1d64fc2d92822",
"assets/assets/subjects/mathematik/summary.md": "074b01ab46eec7eaf47a5e4a0d11143c",
"assets/assets/subjects/mathematik/subject.json": "ce12eec5153ad2a74c5e804cbbd14e56",
"assets/assets/subjects/sozialkunde/summary.md": "511e32e90c1be568132ef31c9a5e7f62",
"assets/assets/subjects/sozialkunde/subject.json": "d4336679ceab8238b481f52cd5cb66b7",
"assets/assets/subjects/deutsch/summary.md": "491102cf1a96265e094e996416237a2a",
"assets/assets/subjects/deutsch/examples/schlechte_wette.jpeg": "99b722eb9958e4fefba5a947d59fe85c",
"assets/assets/subjects/deutsch/examples/handschuh.jpeg": "000cbda8436b02a55ee7848b7fe9d303",
"assets/assets/subjects/deutsch/examples/boese_luege.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/deutsch/examples/fuchs_und_esel.jpeg": "b0769898f0e5bd15e33c87da040eb3a1",
"assets/assets/subjects/deutsch/examples/schlechte_wette.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/deutsch/examples/handschuh.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/deutsch/examples/boese_luege.jpeg": "50976822ded23781f495511385cb12b4",
"assets/assets/subjects/deutsch/examples/fuchs_und_esel.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/deutsch/subject.json": "ebde33125ab06b7a2170138b9a530b5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
