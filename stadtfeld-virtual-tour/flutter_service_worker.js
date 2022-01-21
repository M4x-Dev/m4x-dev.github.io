'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7e4fda915ce42447fa29d479843e0d4e",
"index.html": "b0691a068ac534894d90b41748c4b403",
"/": "b0691a068ac534894d90b41748c4b403",
"main.dart.js": "4d5050f6cf341c32742034874431cbc4",
"favicon.jpg": "cd122d177b16f92a501ab956ac4f50ce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1aa74f162af9a7c6fc22dad7b68cd969",
"extensions.js": "721653107403865c919434d4bc8df478",
"assets/AssetManifest.json": "48ae38a89c064efc7c5254fbd340e0c7",
"assets/NOTICES": "e33d63303a3551a3a88cc89173064f23",
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
"assets/assets/images/vertretungsplan_web.png": "347af0ec741b33273300b9a5ff78c92f",
"assets/assets/images/intro_banner.jpeg": "d641ea156065fa9021a85745dfedfd9e",
"assets/assets/images/kunst_adjusted.JPG": "7a2ea4010a922c6a3de4a7b0de269d97",
"assets/assets/images/app_store_badge.svg": "b37fbda59ff4a48a379ec0f0fd7ffb1d",
"assets/assets/images/sprachen.JPG": "a5d1364617fd776d9aa0137751a17d2e",
"assets/assets/images/sekretariat_adjusted.jpeg": "bec30f3a1fdb467dfa64d228b7d737c5",
"assets/assets/images/google_play_badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/kunst.JPG": "4f8f852e4f062eefe38571f54779a84b",
"assets/assets/images/app_store_badge.png": "6ab916c46366f7602b366e9c15197665",
"assets/assets/images/sekretariat.JPG": "3f3529d4f9746f169f0e9afcf1cc8728",
"assets/assets/images/naturwissenschaften_adjusted.JPG": "eb69933e0b348565af11ea2c2aef7060",
"assets/assets/images/logo.jpg": "cd122d177b16f92a501ab956ac4f50ce",
"assets/assets/images/sekretariat_adjusted.JPG": "0b283252fc21176ef2a49d27e141b72c",
"assets/assets/images/foyer.JPG": "87af1249122b8fd73676fbb10183ae5f",
"assets/assets/resources/config.xml": "d03022c6d762a7900e6418a463226658",
"assets/assets/resources/virtual_tour.xml": "00733e82f1c8bcb0ba81e1258541f606",
"assets/assets/resources/documents/kontakt.md": "5b9ccbe2f17165a8b189ba5225e150ce",
"assets/assets/resources/documents/vertretungsplan.md": "560ab4833739432c54c211c8b15c2b81",
"assets/assets/resources/documents/begabungsfoerderung.md": "03176ba69f24cd9e976e77cf1ff51e34",
"assets/assets/resources/documents/stadtkueche_wernigerode.md": "9fb57b64771045d67a66923f11c94bc7",
"assets/assets/resources/documents/studienberatung.md": "6df664158cbbee1bdad36fabbcae657f",
"assets/assets/animation/help_pc_drag.riv": "cc9166ed5673ece592878ba38238d0cf",
"assets/assets/animation/help_pc_pinch.riv": "acac0ff9830dd9d2c2ddb45b159dca0d",
"assets/assets/animation/confetti_background.gif": "e993d191d03335fd09a1987db3f8d39a",
"assets/assets/animation/help_phone_drag.riv": "bee2d7d90217ca0f1c7c499b934603f4",
"assets/assets/animation/confetti_foreground.gif": "801b2c49b2713c8c6957a345db5fff93",
"assets/assets/animation/help_phone_pinch.riv": "09db6f3b06eee7915089e96bc76db4f4",
"assets/assets/sounds/finished.mp3": "837b8ab04d40b38abbbd7992f3752589",
"assets/assets/sounds/fireworks.mp3": "cfcc8f345749aec89dbe43202f575fb1",
"assets/assets/sounds/collected.mp3": "0c2d3ba54e1f59684131bb7c81109e35",
"assets/assets/subjects/franzoesisch/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/franzoesisch/examples/bundeswettbewerb.json": "84d5ce33f6ae3de3c87347e77f4ede6d",
"assets/assets/subjects/franzoesisch/subject.json": "fe5480a5854d4de050f214e4091aed51",
"assets/assets/subjects/musik/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/musik/subject.json": "9475477cdd96119be022f6f372154f3c",
"assets/assets/subjects/geschichte/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/geschichte/examples/06_fische_3.json": "992247751ad6c52149f7e97e356772b9",
"assets/assets/subjects/geschichte/examples/05_fische_2.json": "992247751ad6c52149f7e97e356772b9",
"assets/assets/subjects/geschichte/examples/07_freizeit_roemer.json": "db923ce1093dbca169854e28839f5b3b",
"assets/assets/subjects/geschichte/examples/04_fische_1.json": "992247751ad6c52149f7e97e356772b9",
"assets/assets/subjects/geschichte/examples/08_kalender_1.json": "47a7b48252b143bf9444e9423a785e8d",
"assets/assets/subjects/geschichte/examples/11_malerei_1.json": "fb3feaf0556f40401a0e9fa089d21c1c",
"assets/assets/subjects/geschichte/examples/06_fische_3.jpeg": "cdddf3eceff5623810e1ed28406c9dd5",
"assets/assets/subjects/geschichte/examples/05_fische_2.jpeg": "09353609b1b619d001e4b33f82182bb1",
"assets/assets/subjects/geschichte/examples/07_freizeit_roemer.jpeg": "4ef1f162a7e988687abb1364b422a5ca",
"assets/assets/subjects/geschichte/examples/04_fische_1.jpeg": "9046748f3d6dfa8162125faf70e53547",
"assets/assets/subjects/geschichte/examples/08_kalender_1.jpeg": "690f51c0c65d58adf2c2b3de198d0dfb",
"assets/assets/subjects/geschichte/examples/11_malerei_1.jpeg": "9fb5edbeb2e9ad8bc74e4a97621b92dd",
"assets/assets/subjects/geschichte/examples/02_bauten_1.jpeg": "b683ce4ca663521726f7e76e7653c621",
"assets/assets/subjects/geschichte/examples/01_alltagsleben_altes_rom.jpeg": "45225414ed68cf9b34049532772109c3",
"assets/assets/subjects/geschichte/examples/09_kalender_2.json": "47a7b48252b143bf9444e9423a785e8d",
"assets/assets/subjects/geschichte/examples/13_malerei_3.json": "fb3feaf0556f40401a0e9fa089d21c1c",
"assets/assets/subjects/geschichte/examples/12_malerei_2.json": "fb3feaf0556f40401a0e9fa089d21c1c",
"assets/assets/subjects/geschichte/examples/03_bauten_2.jpeg": "a950b50ddf6b91dcb8558c205b68fa14",
"assets/assets/subjects/geschichte/examples/10_kalender_3.json": "e2425c825ffdfb2f27ebcb83ff182184",
"assets/assets/subjects/geschichte/examples/02_bauten_1.json": "b6953e246e256e5dcc2f55d42b42f661",
"assets/assets/subjects/geschichte/examples/01_alltagsleben_altes_rom.json": "446efe7a30d640890f7d7fc2ed750149",
"assets/assets/subjects/geschichte/examples/09_kalender_2.jpeg": "ddae36cb9233bcb8553f5cd7d71a8f36",
"assets/assets/subjects/geschichte/examples/13_malerei_3.jpeg": "dd18f7a9da9baca411f39498f397b050",
"assets/assets/subjects/geschichte/examples/12_malerei_2.jpeg": "5cdaae0c615cbac90a524cd9e89ec9d4",
"assets/assets/subjects/geschichte/examples/03_bauten_2.json": "b6953e246e256e5dcc2f55d42b42f661",
"assets/assets/subjects/geschichte/examples/10_kalender_3.jpeg": "1a301ec93c26b99864f7e7cf5476a29a",
"assets/assets/subjects/geschichte/subject.json": "897cb0d2a872c3ed4d460fb83bde58e6",
"assets/assets/subjects/chemie/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/chemie/subject.json": "48f3ac867797e795e93ead78053d0e59",
"assets/assets/subjects/gta/schueler_band/band_1.json": "282ac4ff660a7d1adb15900f748172ad",
"assets/assets/subjects/gta/schueler_band/band_2.json": "115b24766bc87a092bb4f768650d3ee7",
"assets/assets/subjects/gta/schueler_band/index.json": "762cdbc841c95d8eb1c66dd9a1d600ca",
"assets/assets/subjects/gta/schueler_chor/1_schueler_chor_info.txt": "9ea0a05162234afc75e32c2af0fb5843",
"assets/assets/subjects/gta/schueler_chor/weihnachts_konzert.json": "642e51e47e02bd973546b6d9d7f775e0",
"assets/assets/subjects/gta/schueler_chor/index.json": "b44d55c44ff3eb991a0ddd1844a25f6b",
"assets/assets/subjects/gta/schueler_chor/1_schueler_chor_info.json": "4d87844c48e76628900eaa85f8a30921",
"assets/assets/subjects/gta/summary.md": "9a5aa5ec702bd1083dc86fba54657db8",
"assets/assets/subjects/gta/schueler_firma/3_schueler_firma_preis_2.json": "be8ba582c12a4d45ca89e418c7f34837",
"assets/assets/subjects/gta/schueler_firma/3_schueler_firma_preis_2.jpg": "748ed77035b313ce9a003afd97467463",
"assets/assets/subjects/gta/schueler_firma/1_schueler_firma_info.json": "51a69a17cc1386e5dd99459c60678fbf",
"assets/assets/subjects/gta/schueler_firma/2_schueler_firma_preis_1.json": "8eb299123a9dd568eeb2011af0de2835",
"assets/assets/subjects/gta/schueler_firma/1_schueler_firma_info.txt": "1aec8209dfe37c4a14296097df89155c",
"assets/assets/subjects/gta/schueler_firma/index.json": "54bb2df61813179f3642a1f97b2488db",
"assets/assets/subjects/gta/schueler_firma/2_schueler_firma_preis_1.JPEG": "95929610f48be774aad12cf7ecb87798",
"assets/assets/subjects/gta/subject.json": "38c43ae994affca7b2c508cccfa7ea0d",
"assets/assets/subjects/gta/3d_druck/3_3d_druck.json": "8774be3202dbbd7f1deeeb40b40461a2",
"assets/assets/subjects/gta/3d_druck/1_3d_druck_info.json": "63cb9bf0137a0c943aae3dc5a798d009",
"assets/assets/subjects/gta/3d_druck/3_3d_druck.jpeg": "ef3c9045c7850a3ba7bb0240a97e18f1",
"assets/assets/subjects/gta/3d_druck/1_3d_druck_info.txt": "0ab374809c188874f05e7f557fb51414",
"assets/assets/subjects/gta/3d_druck/2_3d_druck.json": "fa1d7c941f390bf53b76f390eb8f0cc1",
"assets/assets/subjects/gta/3d_druck/index.json": "9f2d71c3b18bfffd60ed037fbd62481a",
"assets/assets/subjects/biologie/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/biologie/subject.json": "8faccff66fd10ef5cf93ab52b43f390f",
"assets/assets/subjects/englisch/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/englisch/examples/going_to_future_2.jpeg": "36196f716f4d36be49d2ea141218ac25",
"assets/assets/subjects/englisch/examples/present_progressive.json": "4ff5901256da8988895a7d6bffb34efb",
"assets/assets/subjects/englisch/examples/going_to_future_2.json": "4ff5901256da8988895a7d6bffb34efb",
"assets/assets/subjects/englisch/examples/present_progressive.jpeg": "a1fa3cab1725f9305d230648c2d2ffaf",
"assets/assets/subjects/englisch/examples/adjectives.json": "4ff5901256da8988895a7d6bffb34efb",
"assets/assets/subjects/englisch/examples/going_to_future.json": "4ff5901256da8988895a7d6bffb34efb",
"assets/assets/subjects/englisch/examples/adverbs_2.json": "4ff5901256da8988895a7d6bffb34efb",
"assets/assets/subjects/englisch/examples/adverbs.jpeg": "195ac6596a926b76d095063fca65f3bd",
"assets/assets/subjects/englisch/examples/subject_object_questions.jpeg": "96e551946e95555c0d28dd0ade4f94fc",
"assets/assets/subjects/englisch/examples/adjectives.jpeg": "2c46d64c9e9034b0044854a642a9c586",
"assets/assets/subjects/englisch/examples/going_to_future.jpeg": "1f9bac1d5fd4d89ebf31196111f67fbd",
"assets/assets/subjects/englisch/examples/adverbs_2.jpeg": "aaaba4927b4c79c980e84fcd91ea8a94",
"assets/assets/subjects/englisch/examples/adverbs.json": "4ff5901256da8988895a7d6bffb34efb",
"assets/assets/subjects/englisch/examples/subject_object_questions.json": "4ff5901256da8988895a7d6bffb34efb",
"assets/assets/subjects/englisch/subject.json": "fc41fbbe6eea11ebc1a6cf20559001a2",
"assets/assets/subjects/ethik_religion/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/ethik_religion/gallery/podcast_2.json": "070374893b164ccd38c6d0ee3c7c7418",
"assets/assets/subjects/ethik_religion/gallery/podcast_report.jpg": "100eddef9f18c29c8804dce7e28290b3",
"assets/assets/subjects/ethik_religion/gallery/podcast_2.mp4": "3971817a4cae9043f901e1f360ae6c20",
"assets/assets/subjects/ethik_religion/gallery/podcast_2.mp3": "f4ecc389fc9499b6a5c4b04dc102e3a7",
"assets/assets/subjects/ethik_religion/gallery/podcast_1.mp4": "032e56fb56e7e47942e7eb35f533837e",
"assets/assets/subjects/ethik_religion/gallery/podcast_1.mp3": "332550be8d711d05f8031bf1323fb676",
"assets/assets/subjects/ethik_religion/gallery/podcast_report.json": "d634c5cb690f1bca2642c57fb93aef89",
"assets/assets/subjects/ethik_religion/gallery/podcast_1.json": "933f96badfa2862e6e95d86b73b9ee1a",
"assets/assets/subjects/ethik_religion/subject.json": "a1953e76b0d95de9ad54950c66ee89e1",
"assets/assets/subjects/spanisch/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/spanisch/gallery/barcelona.json": "9c288c45e9f4589002817fc6b3996cdb",
"assets/assets/subjects/spanisch/subject.json": "d21a1acf5bb502783d0d03cc654869a5",
"assets/assets/subjects/kunst/summary.md": "3f2f4131c427cccc0285e8dd3914e1dd",
"assets/assets/subjects/kunst/gallery/35_butterfly_1.json": "6367a2986aa1ee45a93750310c6d5be5",
"assets/assets/subjects/kunst/gallery/60_linol_4.json": "52aad04722bd5e8aad1a0a22ec6ef5a9",
"assets/assets/subjects/kunst/gallery/71_glas_5.json": "729b247032cc9673bd78185951ff82af",
"assets/assets/subjects/kunst/gallery/62_design_2.json": "fb35defa90191e57cd01d9b37e3adc39",
"assets/assets/subjects/kunst/gallery/08_rabbit_drawing_1.json": "b8664d7552ea32470cab4f2f3bd280a6",
"assets/assets/subjects/kunst/gallery/28_chameleon_1.jpeg": "7a962a511f7ecc0994b210dccc1e3cf0",
"assets/assets/subjects/kunst/gallery/77_tierwort_2.json": "2acbb31f0a07b1ddf319a6a5780dddba",
"assets/assets/subjects/kunst/gallery/74_shoe_3.jpeg": "afd0de78bcd5b4b2a867d8bb4dfb9e63",
"assets/assets/subjects/kunst/gallery/18_text_drawing_4.json": "3942222a74f29ef18d31fc12646ec6fe",
"assets/assets/subjects/kunst/gallery/42_foto_2.jpeg": "a0b540b40df4c87ed3edb56edf89a952",
"assets/assets/subjects/kunst/gallery/31_tiger_1.json": "a5ee0ec0eb0e8e7a079fe31568b74e11",
"assets/assets/subjects/kunst/gallery/25_isabela_s.json": "0fc79375b1e56554144bb7cc843a826a",
"assets/assets/subjects/kunst/gallery/44_plakat_1.jpeg": "ffdb2218dd6cd2fc0da07ff8edb93860",
"assets/assets/subjects/kunst/gallery/17_text_drawing_3.json": "f290503a9e1d0f61c507a22f24a67e79",
"assets/assets/subjects/kunst/gallery/50_faces_4.jpeg": "18f88f5516a7af9c4d7830603a0693a5",
"assets/assets/subjects/kunst/gallery/45_plakat_2.jpeg": "c21a2e955d507390b97bd3fe25d7b8f2",
"assets/assets/subjects/kunst/gallery/68_glas_2.jpeg": "f03477970ff11a83f488e3648639f2b1",
"assets/assets/subjects/kunst/gallery/21_text_drawing_7.jpeg": "e7103d07d9cd581015867bd4601b4ef6",
"assets/assets/subjects/kunst/gallery/65_design_5.jpeg": "b67fb99a3a0254c0d18e7625c1b12375",
"assets/assets/subjects/kunst/gallery/81_kunst_architektur_2.json": "8732fc8cbc70b7d03db16869d69b1bc4",
"assets/assets/subjects/kunst/gallery/01_cat_1_original.json": "26306bf642eb90d607f13b5ca2cba602",
"assets/assets/subjects/kunst/gallery/46_plakat_3.jpeg": "6ac618a58233b742c68458d05c0d4c7c",
"assets/assets/subjects/kunst/gallery/47_faces_1.json": "3c46828d3bab2c91c2d801f790c4e99c",
"assets/assets/subjects/kunst/gallery/30_chameleon_3.jpeg": "5c9b8a9ecfb8863e4c94dd674110d223",
"assets/assets/subjects/kunst/gallery/05_dog_2_original.jpeg": "f6d8800a1455d07ddfd47adcccb9788e",
"assets/assets/subjects/kunst/gallery/36_butterfly_2.json": "2b53fd355b1be90e7fdc476084b1b2be",
"assets/assets/subjects/kunst/gallery/22_random_1.json": "ca99f08b2ce320893fd446a79df609b6",
"assets/assets/subjects/kunst/gallery/53_city_2.jpeg": "c6c125e285c5463aea2b00ec671f72e1",
"assets/assets/subjects/kunst/gallery/20_text_drawing_6.jpeg": "db5cf68925048b613e2953c9931541d4",
"assets/assets/subjects/kunst/gallery/79_tierwort_4.json": "676895c6ef9a63fc1faf0dfc9bdec48f",
"assets/assets/subjects/kunst/gallery/49_faces_3.jpeg": "425289d8c9658282ed938b8a1446f291",
"assets/assets/subjects/kunst/gallery/10_city_drawing_1.json": "5b6986455de412377d440cb7501315f8",
"assets/assets/subjects/kunst/gallery/52_city_1.json": "327130db07f43714599e06944f9cab52",
"assets/assets/subjects/kunst/gallery/03_dog_1_original.jpeg": "498bbaf5ff5d055f4d6716f5dd21a87e",
"assets/assets/subjects/kunst/gallery/37_animals_1.jpeg": "6b2051d46a47449bdf1f24604d8deded",
"assets/assets/subjects/kunst/gallery/78_tierwort_3.json": "83347901819a541f48ee3a4be08ca54f",
"assets/assets/subjects/kunst/gallery/32_tiger_2.json": "a434e628fd51691ea78f594eee929309",
"assets/assets/subjects/kunst/gallery/48_faces_2.jpeg": "9bef7cc63dd8f307d7b8b1499857e519",
"assets/assets/subjects/kunst/gallery/34_owl_2.jpeg": "e259dc9c5a84714cfcb9cb3795fb6d56",
"assets/assets/subjects/kunst/gallery/27_isabela_s.jpeg": "94cb7040fa17e32feedd0bcd4f63dc5b",
"assets/assets/subjects/kunst/gallery/55_city_4.jpeg": "c153b10ea677782214c7a3e3a21c0e71",
"assets/assets/subjects/kunst/gallery/16_text_drawing_2.json": "756632251d6ae0e0096ba2bb2f4bf868",
"assets/assets/subjects/kunst/gallery/86_kunst_installation_3.json": "bb29b7758016de5350adaeae183779b8",
"assets/assets/subjects/kunst/gallery/19_text_drawing_5.json": "4b90ef1e64595b49916edb835c78ad60",
"assets/assets/subjects/kunst/gallery/35_butterfly_1.jpeg": "fbfbb445b3048be5da688ccd323f76d5",
"assets/assets/subjects/kunst/gallery/62_design_2.jpeg": "a86a9929212068e01132bd1aec9b1fd2",
"assets/assets/subjects/kunst/gallery/71_glas_5.jpeg": "9716809653a10560f173c6b56cf2badb",
"assets/assets/subjects/kunst/gallery/60_linol_4.jpeg": "12fd17aadcb6a7d90d30341f45b4cefa",
"assets/assets/subjects/kunst/gallery/08_rabbit_drawing_1.jpeg": "ad238884d2a19d855640aab945df9c39",
"assets/assets/subjects/kunst/gallery/77_tierwort_2.jpeg": "b3414245cbd1c3a30417a2717604207d",
"assets/assets/subjects/kunst/gallery/28_chameleon_1.json": "1cd6467c7064a57fb1d3f019c09ef05a",
"assets/assets/subjects/kunst/gallery/42_foto_2.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/kunst/gallery/74_shoe_3.json": "b2eedffbad7c3f6b51cb0c7d81693d6e",
"assets/assets/subjects/kunst/gallery/18_text_drawing_4.jpeg": "77dd266e2a81684c10b091fbef0ac4bc",
"assets/assets/subjects/kunst/gallery/31_tiger_1.jpeg": "66eb7fa24debbdf04780187d63d776f9",
"assets/assets/subjects/kunst/gallery/25_isabela_s.jpeg": "d21161c13059e92cc63ac461f44e2f28",
"assets/assets/subjects/kunst/gallery/44_plakat_1.json": "9ef91314bd96acfc09f5cb5507e1715d",
"assets/assets/subjects/kunst/gallery/17_text_drawing_3.jpeg": "9606aac73f891d05fe86378bdcac0596",
"assets/assets/subjects/kunst/gallery/50_faces_4.json": "868bf2c37813576d4344f69e2b44c5de",
"assets/assets/subjects/kunst/gallery/45_plakat_2.json": "d9bf1c4a40c8183f0b809e22956c6b3a",
"assets/assets/subjects/kunst/gallery/65_design_5.json": "690d408235c1668d4733db9b90857cc7",
"assets/assets/subjects/kunst/gallery/21_text_drawing_7.json": "3942222a74f29ef18d31fc12646ec6fe",
"assets/assets/subjects/kunst/gallery/68_glas_2.json": "4a69402bd4848b609393e82cbac94158",
"assets/assets/subjects/kunst/gallery/01_cat_1_original.jpeg": "4e23851f8230c2b6d9851ee0c7ca1432",
"assets/assets/subjects/kunst/gallery/47_faces_1.jpeg": "74109b12b02cbcac886d2f30430f09c1",
"assets/assets/subjects/kunst/gallery/46_plakat_3.json": "a5d52827af644e06a1a750dbdddd8e13",
"assets/assets/subjects/kunst/gallery/30_chameleon_3.json": "b8664d7552ea32470cab4f2f3bd280a6",
"assets/assets/subjects/kunst/gallery/36_butterfly_2.jpeg": "0c9f36ce9a28e55f3ed64f4100bf2bf9",
"assets/assets/subjects/kunst/gallery/22_random_1.jpeg": "a75031b5d92f8e6c24bd8c695bc0cf34",
"assets/assets/subjects/kunst/gallery/53_city_2.json": "64f6bc359647e77ba231edfbb604b485",
"assets/assets/subjects/kunst/gallery/05_dog_2_original.json": "4143ddc4b4bc1e99f2ea49ba0b820faa",
"assets/assets/subjects/kunst/gallery/20_text_drawing_6.json": "c38b41a5fad6859e6febe80575e6fc2c",
"assets/assets/subjects/kunst/gallery/79_tierwort_4.jpeg": "aa1c498b6f0e4cbcc383ed64b11e877e",
"assets/assets/subjects/kunst/gallery/49_faces_3.json": "1f2c2ba05ce0c201b70c9c14d83b40dd",
"assets/assets/subjects/kunst/gallery/52_city_1.jpeg": "10355403713c7b2adfba784dce80fa3a",
"assets/assets/subjects/kunst/gallery/10_city_drawing_1.jpeg": "dfaf9b40a11cc6ef7476c10ed50c7c83",
"assets/assets/subjects/kunst/gallery/37_animals_1.json": "76e3402c90c713859278575be37f114f",
"assets/assets/subjects/kunst/gallery/03_dog_1_original.json": "dc1c17baa19f2a87f1f5f33d8cb5693e",
"assets/assets/subjects/kunst/gallery/78_tierwort_3.jpeg": "0e1e3ff22e4cf08d276b911f9a37026c",
"assets/assets/subjects/kunst/gallery/32_tiger_2.jpeg": "0fc333b724d2f259a5556d4adc1f1a19",
"assets/assets/subjects/kunst/gallery/48_faces_2.json": "c07bea5e6f1055f258be5d716438096c",
"assets/assets/subjects/kunst/gallery/34_owl_2.json": "0d09638ec30e652a5e89a3c5e29b2b6b",
"assets/assets/subjects/kunst/gallery/55_city_4.json": "02aba9ad251b3db280f85a2bc1f13c56",
"assets/assets/subjects/kunst/gallery/27_isabela_s.json": "0fc79375b1e56554144bb7cc843a826a",
"assets/assets/subjects/kunst/gallery/16_text_drawing_2.jpeg": "607f1f53811cf806bbfe22b463e37927",
"assets/assets/subjects/kunst/gallery/19_text_drawing_5.jpeg": "7039d2d69c1dc6a1a3f6b82e59a22f57",
"assets/assets/subjects/kunst/gallery/70_glas_4.json": "1810116192980be24258b2442fb362f4",
"assets/assets/subjects/kunst/gallery/39_animals_3.json": "679ed3383034669d3b4377d5cb22b02e",
"assets/assets/subjects/kunst/gallery/64_design_4.json": "d8d7ad4b9f925543b1688e6121e7865c",
"assets/assets/subjects/kunst/gallery/73_shoe_2.json": "157b708269c40f744d99da859b713b93",
"assets/assets/subjects/kunst/gallery/38_animals_2.json": "aef2b73f41d84dda884e6a023216e946",
"assets/assets/subjects/kunst/gallery/41_foto_1.jpeg": "cd8b88d484ac6622445f8a268e0e0fd9",
"assets/assets/subjects/kunst/gallery/61_design_1.jpeg": "1277fb6ae77927d5ae78af3261053905",
"assets/assets/subjects/kunst/gallery/80_kunst_architektur_1.json": "1bc26901121e2a55debeab21e5a0d896",
"assets/assets/subjects/kunst/gallery/23_eisbecher.jpeg": "6e67d7682d5621e4947340768fe3cb35",
"assets/assets/subjects/kunst/gallery/51_portrait_1.jpeg": "3eab892627139d9318caf6ad28107164",
"assets/assets/subjects/kunst/gallery/43_foto_3.jpeg": "fad7b52dba6815a4b321556367b39bb6",
"assets/assets/subjects/kunst/gallery/72_shoe_1.jpeg": "ff3ac12624c7a873ba89dff8daaec6fa",
"assets/assets/subjects/kunst/gallery/66_design_6.json": "124ecde16ffa74ca61aac91882fd709e",
"assets/assets/subjects/kunst/gallery/11_city_drawing_2.jpeg": "53dfa342565e9fd19af60cf93149047b",
"assets/assets/subjects/kunst/gallery/09_rabbit_drawing_1.json": "4143ddc4b4bc1e99f2ea49ba0b820faa",
"assets/assets/subjects/kunst/gallery/13_city_drawing_4.json": "933ea23331c997005afeeff8d6e29988",
"assets/assets/subjects/kunst/gallery/57_linol_1.json": "0e7f1e3d9b74e945953efc7ec2948cfc",
"assets/assets/subjects/kunst/gallery/63_design_3.jpeg": "6e83eff5652ce825b791a06360a0675c",
"assets/assets/subjects/kunst/gallery/69_glas_3.jpeg": "1642dfd4ae0c09277a26c89e3c98dcf7",
"assets/assets/subjects/kunst/gallery/15_text_drawing_1.jpeg": "0813b9ebdb0719a8c3f23b66f439ee1e",
"assets/assets/subjects/kunst/gallery/83_kunst_architektur_4.json": "f6975d7559bf31f119c5582651f6a962",
"assets/assets/subjects/kunst/gallery/82_kunst_architektur_3.json": "167e7db120c4abb63b22fbd2f158bde7",
"assets/assets/subjects/kunst/gallery/14_city_drawing_5.json": "28b11117661e4321e06b0b7006a7e59a",
"assets/assets/subjects/kunst/gallery/56_tonfigures.json": "ac024dd5515c4b4894cfeee3f9099c3b",
"assets/assets/subjects/kunst/gallery/76_tierwort_1.json": "32211d869d51f42c293926666498e682",
"assets/assets/subjects/kunst/gallery/75_shoe_4.json": "3bbe663bf68e0e9d09433bcc90e82843",
"assets/assets/subjects/kunst/gallery/26_hedda_s.json": "6762cda9c0104e044460615b5d4bc0be",
"assets/assets/subjects/kunst/gallery/40_animals_4.jpeg": "1f774f72bbbde44ab3c5e2405da18bec",
"assets/assets/subjects/kunst/gallery/24_emilia_g.json": "7a60e6a5fb4c541c42b762276c240ad5",
"assets/assets/subjects/kunst/gallery/04_dog_1_drawing.jpeg": "ad26c8d1d464266377cfc38bf98e0fc3",
"assets/assets/subjects/kunst/gallery/02_cat_1_drawing.jpeg": "4b89e92d04d26bd3508f07d07861bc0b",
"assets/assets/subjects/kunst/gallery/54_city_3.json": "2842e7a4974aec59274e9e4091d32ae5",
"assets/assets/subjects/kunst/gallery/59_linol_3.jpeg": "1f8f1dea34f0911739b530e296076280",
"assets/assets/subjects/kunst/gallery/12_city_drawing_3.jpeg": "b97b5e821d334088d78581475fa5258b",
"assets/assets/subjects/kunst/gallery/84_kunst_installation_1.json": "eb4c596cce66808d3b5604a7b0f49589",
"assets/assets/subjects/kunst/gallery/29_chameleon_2.jpeg": "f0b52b84ea7e64fbc59d14e8c8faa3e0",
"assets/assets/subjects/kunst/gallery/06_dog_2_drawing.jpeg": "aad700055eb2e240598a26890467656b",
"assets/assets/subjects/kunst/gallery/85_kunst_installation_2.json": "caff8ebea7d8d399ada018ed778ddfa6",
"assets/assets/subjects/kunst/gallery/58_linol_2.jpeg": "7c1e376a50979f69768a4f0328122379",
"assets/assets/subjects/kunst/gallery/33_owl_1.jpeg": "b088d004f5cc8b269780ce66ba55f021",
"assets/assets/subjects/kunst/gallery/67_glas_1.jpeg": "0c7327f4d96d04ba5d82b5ab7a7044c6",
"assets/assets/subjects/kunst/gallery/07_rabbit_drawing_1.jpeg": "0b54b60e72a2c76e2953c98b3c765e2a",
"assets/assets/subjects/kunst/gallery/70_glas_4.jpeg": "5e3be2db086d665922da3fabb7b02aa2",
"assets/assets/subjects/kunst/gallery/64_design_4.jpeg": "d52fb7c2405ce025432b2a04f0db5a85",
"assets/assets/subjects/kunst/gallery/39_animals_3.jpeg": "c452a179c406988a7ae33d989bffd6c9",
"assets/assets/subjects/kunst/gallery/73_shoe_2.jpeg": "646e47336d7499f73e2146c928d02156",
"assets/assets/subjects/kunst/gallery/61_design_1.json": "d146b1ad18f39a1ec3240fbe9ba5abe1",
"assets/assets/subjects/kunst/gallery/38_animals_2.jpeg": "af55a800b9828c33b62787e127a2e45b",
"assets/assets/subjects/kunst/gallery/41_foto_1.json": "5032dd2d3a400367d9594192e7de2cd5",
"assets/assets/subjects/kunst/gallery/23_eisbecher.json": "60f5d0fcba863f73aa19903eaea42308",
"assets/assets/subjects/kunst/gallery/51_portrait_1.json": "2577a9f9c57d75e0e1f1ae022417757a",
"assets/assets/subjects/kunst/gallery/43_foto_3.json": "0d14e12bca65ecc0ac43345b181458cd",
"assets/assets/subjects/kunst/gallery/72_shoe_1.json": "b68797304b980f33efc44c467a6154af",
"assets/assets/subjects/kunst/gallery/66_design_6.jpeg": "71a923f8e2c81cb8207a135671ae35fd",
"assets/assets/subjects/kunst/gallery/09_rabbit_drawing_1.jpeg": "4ee782a26b1d9904cdc973db736765e8",
"assets/assets/subjects/kunst/gallery/11_city_drawing_2.json": "4ba8ae68d64842d2aa2301fc38f5cd5d",
"assets/assets/subjects/kunst/gallery/13_city_drawing_4.jpeg": "9fe1746c0632623e8981731e68a0319a",
"assets/assets/subjects/kunst/gallery/63_design_3.json": "d5e7e101464a07284539403721f2b164",
"assets/assets/subjects/kunst/gallery/57_linol_1.jpeg": "2f93ebef985503f7ab7555076c415bfd",
"assets/assets/subjects/kunst/gallery/69_glas_3.json": "27ff32ba1ebb66883b23d8a568350046",
"assets/assets/subjects/kunst/gallery/15_text_drawing_1.json": "f290503a9e1d0f61c507a22f24a67e79",
"assets/assets/subjects/kunst/gallery/14_city_drawing_5.jpeg": "b86eabab856f89e8452d5a4383c73213",
"assets/assets/subjects/kunst/gallery/56_tonfigures.jpeg": "0fc8e12d295108a812b82a26a2f8385a",
"assets/assets/subjects/kunst/gallery/76_tierwort_1.jpeg": "f7e396956b730609c61ca459656591ec",
"assets/assets/subjects/kunst/gallery/75_shoe_4.jpeg": "54b44b6aab0f9e4163470f3be650b37f",
"assets/assets/subjects/kunst/gallery/26_hedda_s.jpeg": "fe2af45ccad075559f29d66b96747611",
"assets/assets/subjects/kunst/gallery/40_animals_4.json": "f63013e35a0d5cad535916ecaf248750",
"assets/assets/subjects/kunst/gallery/24_emilia_g.jpeg": "07c9b1d3fc05819797b29bccf530aa62",
"assets/assets/subjects/kunst/gallery/02_cat_1_drawing.json": "26306bf642eb90d607f13b5ca2cba602",
"assets/assets/subjects/kunst/gallery/04_dog_1_drawing.json": "dc1c17baa19f2a87f1f5f33d8cb5693e",
"assets/assets/subjects/kunst/gallery/54_city_3.jpeg": "f677f3aee27235d6a9fda40e0c361fbf",
"assets/assets/subjects/kunst/gallery/59_linol_3.json": "65207554883337ab2e58e2b86ebf6b82",
"assets/assets/subjects/kunst/gallery/12_city_drawing_3.json": "4f14efe19b714a653fb074d74c82214d",
"assets/assets/subjects/kunst/gallery/29_chameleon_2.json": "c17ee3ff7d0d16efb8a45b811ac31e2f",
"assets/assets/subjects/kunst/gallery/06_dog_2_drawing.json": "4143ddc4b4bc1e99f2ea49ba0b820faa",
"assets/assets/subjects/kunst/gallery/67_glas_1.json": "6b449f2d5af772e1a9676808d3290a19",
"assets/assets/subjects/kunst/gallery/33_owl_1.json": "780c8cd12d89adb5f0bb22c7c6cd21b8",
"assets/assets/subjects/kunst/gallery/58_linol_2.json": "827e9f4eab51e27fb83a790c5eb738bb",
"assets/assets/subjects/kunst/gallery/07_rabbit_drawing_1.json": "e3971be916a34a1fd0093069a4509d57",
"assets/assets/subjects/kunst/subject.json": "4f91b6c49b05d501eeb0ee09d46096f4",
"assets/assets/subjects/kunst/rooms/kunst_1.jpg": "a6f2fbae3cfdee49001dbd8a2a901c3e",
"assets/assets/subjects/kunst/rooms/kunst_2.jpg": "581b6713a483a7c96d6d37e99b6eee8c",
"assets/assets/subjects/kunst/rooms/kunst_1.json": "74fdccc324b231e412f9338600f9e4da",
"assets/assets/subjects/kunst/rooms/kunst_2.json": "1b23faf8df62da947dbcb29d88e0c89a",
"assets/assets/subjects/kunst/rooms/index.json": "7f2c4dd98ebf5549ce625a7ac2c252cb",
"assets/assets/subjects/astronomie/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/astronomie/gallery/astro_1.jpeg": "1418c1137cd108d84a76b0ace5114172",
"assets/assets/subjects/astronomie/gallery/astro_1.json": "8fd658eae2f9ba839d5e62bb3bc6e8a8",
"assets/assets/subjects/astronomie/gallery/astro_2.mov": "b52c46b349465cad15e8872351e7063c",
"assets/assets/subjects/astronomie/gallery/astro_2.json": "aac2c1890c1059b348f7469d2fb7c8d3",
"assets/assets/subjects/astronomie/subject.json": "4bce4e273d65d6ae55b3c73f3c58e0bd",
"assets/assets/subjects/latein/summary.md": "6b957c315871af6a292ce635fd3a6627",
"assets/assets/subjects/latein/gallery/trier_3.json": "667395f2ded224c8e5f6fa317f54077c",
"assets/assets/subjects/latein/gallery/trier_2.json": "667395f2ded224c8e5f6fa317f54077c",
"assets/assets/subjects/latein/gallery/trier_3.jpeg": "0455b4b0e9a329e83b22dbaa202b9f8f",
"assets/assets/subjects/latein/gallery/trier_2.jpeg": "adac9f5a8473e0daaec1c07844297fe1",
"assets/assets/subjects/latein/gallery/trier_1.jpeg": "44ffc164d4ac25cb46e74d15b147fce8",
"assets/assets/subjects/latein/gallery/trier_1.json": "667395f2ded224c8e5f6fa317f54077c",
"assets/assets/subjects/latein/examples/orpheus_und_eurydike.json": "2d5131ca01811af67bde03d02ac28a3a",
"assets/assets/subjects/latein/examples/orpheus_und_eurydike.html": "ad47d607c1717bceab4b0c446c8cb14a",
"assets/assets/subjects/latein/subject.json": "dcfcd297d21fc041719b399891f04bb5",
"assets/assets/subjects/geographie/summary.md": "5489ef000675e4bd3a7af76babfac4b9",
"assets/assets/subjects/geographie/examples/04_plakate_1.json": "d9f4067bba01a2c74a962be489e7a8e9",
"assets/assets/subjects/geographie/examples/02_globus_2.json": "bcaa155b853b91c5f27e4f4a19df1087",
"assets/assets/subjects/geographie/examples/08_vulkan_3.jpeg": "68c830a51b87964377fb0f0a7c7887b1",
"assets/assets/subjects/geographie/examples/04_plakate_1.jpeg": "865a410295c1888b8cc55af51fa08fd1",
"assets/assets/subjects/geographie/examples/02_globus_2.jpeg": "eafd52f9096746f613437356e0809b2c",
"assets/assets/subjects/geographie/examples/08_vulkan_3.json": "e08803cfbd5f381dc9534a6d6cf40d8b",
"assets/assets/subjects/geographie/examples/07_vulkan_2.jpeg": "139ae247f9fde05f07622a6939e88ecd",
"assets/assets/subjects/geographie/examples/05_plakate_2.jpeg": "c1a14bc960461fb0295ce6ff9c95ba1a",
"assets/assets/subjects/geographie/examples/01_globus_1.jpeg": "ea565b2f44557f1586d8127af59b3839",
"assets/assets/subjects/geographie/examples/06_vulkan_1.jpeg": "bc41cbaaad86564bbb21a95e585cb5a7",
"assets/assets/subjects/geographie/examples/07_vulkan_2.json": "e08803cfbd5f381dc9534a6d6cf40d8b",
"assets/assets/subjects/geographie/examples/03_globus_3.png": "925f99b354801e9c41cdfab12db4a53d",
"assets/assets/subjects/geographie/examples/05_plakate_2.json": "d9f4067bba01a2c74a962be489e7a8e9",
"assets/assets/subjects/geographie/examples/03_globus_3.json": "d048bfe89bedeae96885c03d7f6f5738",
"assets/assets/subjects/geographie/examples/01_globus_1.json": "bcaa155b853b91c5f27e4f4a19df1087",
"assets/assets/subjects/geographie/examples/06_vulkan_1.json": "e08803cfbd5f381dc9534a6d6cf40d8b",
"assets/assets/subjects/geographie/subject.json": "3f7cc0bfb33c9f3dadc2663a00622761",
"assets/assets/subjects/physik/summary.md": "de3cd8dc3ea5acc548164d64fd957063",
"assets/assets/subjects/physik/gallery/phaeno_2.json": "a646feca53ded2a148a7f5a03eac61ee",
"assets/assets/subjects/physik/gallery/phaeno_2.jpeg": "ff07913c57440f1ea7b648630a4aa4a2",
"assets/assets/subjects/physik/gallery/phaeno_1.jpeg": "793ba0c43ae5ceb287b55660f5bf7b3d",
"assets/assets/subjects/physik/gallery/phaeno_1.json": "508ae89dddee625c60941256d6eaed25",
"assets/assets/subjects/physik/subject.json": "e076d10bd9196bc90fe52d018c943d16",
"assets/assets/subjects/physik/rooms/physik_2.jpeg": "22ccdca0af02888de09f21b878a35afe",
"assets/assets/subjects/physik/rooms/physik_2.json": "23dc0640412475726791fccf5d8ea01f",
"assets/assets/subjects/physik/rooms/index.json": "7f2c4dd98ebf5549ce625a7ac2c252cb",
"assets/assets/subjects/mathematik/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/mathematik/gallery/raum.JPG": "48465e921ab230c42de6fefe276eb1d0",
"assets/assets/subjects/mathematik/gallery/raum.json": "7c064b5ff8a7ef60d301bd29f1e69d6d",
"assets/assets/subjects/mathematik/subject.json": "4c0fd2192bafd3fc2a16abca411fe1ed",
"assets/assets/subjects/foerderverein/summary.md": "bf4c86cdf81a69de61cfca22d1240d34",
"assets/assets/subjects/foerderverein/gallery/aktivitaeten.json": "3cb385848f0a4cb5e532a27178bf25f1",
"assets/assets/subjects/foerderverein/subject.json": "d486341114e3d562d8182ba9c28db6ae",
"assets/assets/subjects/sozialkunde/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/sozialkunde/examples/bip_tutorial_1.json": "de5d197bcacb74d59b3515cf482bcc90",
"assets/assets/subjects/sozialkunde/examples/bip_tutorial_2.json": "4b88bdc7c50a18e409c1dab76c5d8208",
"assets/assets/subjects/sozialkunde/subject.json": "64986452e81d5f229e49f0f33ababc5e",
"assets/assets/subjects/deutsch/summary.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/subjects/deutsch/examples/schlechte_wette.jpeg": "99b722eb9958e4fefba5a947d59fe85c",
"assets/assets/subjects/deutsch/examples/handschuh.jpeg": "000cbda8436b02a55ee7848b7fe9d303",
"assets/assets/subjects/deutsch/examples/boese_luege.json": "231c7617a8866b6909e0771ce23f1992",
"assets/assets/subjects/deutsch/examples/fuchs_und_esel.jpeg": "b0769898f0e5bd15e33c87da040eb3a1",
"assets/assets/subjects/deutsch/examples/schlechte_wette.json": "231c7617a8866b6909e0771ce23f1992",
"assets/assets/subjects/deutsch/examples/handschuh.json": "231c7617a8866b6909e0771ce23f1992",
"assets/assets/subjects/deutsch/examples/boese_luege.jpeg": "50976822ded23781f495511385cb12b4",
"assets/assets/subjects/deutsch/examples/fuchs_und_esel.json": "231c7617a8866b6909e0771ce23f1992",
"assets/assets/subjects/deutsch/subject.json": "00478b636cfe4e91323553378050c7e6",
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
