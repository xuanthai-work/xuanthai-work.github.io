'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0f3daf337c23621fc593d97538f90684",
".git/config": "2b39d39288152cb181a30c94f3146e2c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4c911f385f0c9303606f4fa197c79607",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a8869df73f17a55d72196f3fafc3e70a",
".git/logs/refs/heads/main": "2bc4b7154211666e8679f7e11b26651a",
".git/logs/refs/remotes/origin/main": "273447ae62d4a79a650ed0ea9c101340",
".git/objects/02/39bd655c8b7eb198c153b2fb76a14b99223a11": "a725944010200cffdb3b82d17cb72647",
".git/objects/03/00d9fc3b6e98641d946a3e5cf0f43931320f2b": "790ac3222d63d437ccc76bb8a107baa0",
".git/objects/05/31e9a37e7fac9083c12fd658ed30a7bc13e304": "a0901fb2a039cafb81d025087debba23",
".git/objects/05/cdf06a41b0f4b9ae28776941a12995f2db3877": "92932d6bc7d3905ca437c9a8c7ee6f8d",
".git/objects/06/afc5b96c1ef38d95121ee40e5d909de40dbc20": "4ab97fc06f3c11fd421cc378fc479059",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/08fa2bda8615997575ead1e270e71483255880": "341f9e7f18997304bfb4eedf55b056e7",
".git/objects/0a/bd712fa778bb8fc533a7ae91446b5e002809fe": "382ceb39bd8faa3e6fee7fe418e865b2",
".git/objects/0c/62e147296c479b61dc510d3586a1262f148ddd": "7447af294e5b7e5a95c41071ff337548",
".git/objects/0c/b997e831d50a9ba7f53ed261238d80d6446e8f": "28ebd1a022a971457812dddd9bfc13ae",
".git/objects/0c/bc9a617debf8837e5d1ac5a8f255be99d1e197": "db355f94c902169c1290b33be2c3f594",
".git/objects/0d/b2321ea0bc07696fcf71086d8049a878fda0e0": "5e0025b1db3333441e3462645feab555",
".git/objects/10/81b56f5520da78f92f43a9853fdc78a36b803d": "994b5ad61399e7739e311951378cfe0e",
".git/objects/14/5809511bc4cd30593287ede3f796c4cca58c76": "e9625ff1c47ee617462121afa9ed43a2",
".git/objects/14/90d6f3bcfaa4b22aa0763b854579ccc3d5f43b": "1bb3fff81f6fc09a53bcccbcd70c52cb",
".git/objects/15/78f91bbf0b01c247ed993ebc59f27871ffdee4": "46dd2dadb4173f8ca709f489b0c6f858",
".git/objects/1a/c8c310377dc4a9a4126d5e88bd306ed6b26f29": "e7a69727f0bb8b0ffe9db8c3392d99eb",
".git/objects/1c/1e3512829aaafc76657517055b2c6f73980901": "ee4284855a13a7ccf6a5fca5b2c6b784",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/a81758a39d6c0c923abc0c1b7a99994cc1c236": "2e2cef3bf26c6bfac6aa206e347d1446",
".git/objects/1f/cd58914fde0fe23aff5c877580644b61b8a00f": "088bbf943c8e449027b604a818457bff",
".git/objects/20/a32be2c225f0d7169a144dc523a2fd63811326": "426e906bdcf35c0cae64e55286f07c6f",
".git/objects/21/48ebc514352450d9eb3ee3f058891166969495": "b269ac6c528a3e3ac22c4c691bc0538d",
".git/objects/22/d2d01b9379d4848627c5bd491f0d7da49fdc34": "c8f02b644a193cf0fa9daca175a259d2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/80f272533469079e53c5055ecdd87a4a24465b": "32ec19a7435bb3134a3af8bc2f3351c3",
".git/objects/28/479d16750f3c18d7fdde18ff8e8ff3a2bf5874": "2a7166386368618dd007857755bad503",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/0fabe79981d7a33053d2ce0ee795b453f32cde": "4ced3f3473733b5d05c3e263ba872bee",
".git/objects/37/807321ebcca33caacebe785e368e6f784f3d0a": "f40ec3833f005af6fd16f1b178f1471e",
".git/objects/38/493565298f7e25cbdabc5bf39afa7927a0ee05": "5f2bab9b1fd110a318df944be3d2a554",
".git/objects/39/e5bfcc5defb0a3b83b2e1d1619e0547c65707e": "0a12fc0415cb6f4a770e67c9c05cf4a0",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/513633ae17c839ab592d8bf26f81e998750d68": "d3f014815cee7918b601fa0fe7e32297",
".git/objects/3c/671796ef597b564cd89bc5b947ae5a8c59ccd7": "bf09f9a1c66dce38cd0ef667bc51fca3",
".git/objects/3d/5a36c529fe976a60ec47992f28e1aa74be72bc": "44f0e855b20928ee82440a4e80c639fd",
".git/objects/3f/b905c369c13fb5c2694fa7435eef3973ebc49b": "d7c4061269bbda9e48a8bf746980159c",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/d729602239d6be62221afbf5625f5818f6f0f5": "10def42da1a7074d2195fd7ebf6c2cd0",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/1f5dae0aa719537e9160adeb2d9fd300f4f09b": "666b17e74e0ec10fd44d0fbb09e87791",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/83ebdc08a2fa1ad3c70b70f909a667faf74838": "42cd60135e4559774d8538ab731ee685",
".git/objects/51/ca0d36f9d4f075b31bca638b7b3abaa135ef3a": "a54944f82033c9f0ee56f740684cee31",
".git/objects/58/1ea6a18da052a2afca4de81ee7aaffda3daba5": "b2db68ef781dabf702b315054c1f28e3",
".git/objects/59/0bbcaabe8c4cbdbca5d29ffa2e7afddb8da861": "4f09761d1dbcc9bceb82fb5280f7b4dd",
".git/objects/5e/9ebed9fb460265eae39a5778090dd17f46c5be": "4b4a3fe81a9aa6f38b9a607a2243d1c0",
".git/objects/69/27cf38adf03a209490167c2082820feed76799": "c7c36979dca7b9dba2778713bb2d152c",
".git/objects/69/82c4960805fe2b9f7fe67d89c7f9988281cc7a": "21ab4156ecf372d5fe6794051fbcaf9f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/71/f8015c410d2c9d7b333fd387c1cd069918d324": "4d3f798ff180093a60b79ba027e1ff2b",
".git/objects/72/aaffc63e4a282a5be4d04e008bf68fe858546a": "a0e7096b658191f0089d9620a7edd6b2",
".git/objects/74/bb46943c63f931e4e1a75a418fbadf6c98d2cb": "2935cd228ea699cfee97986835b35453",
".git/objects/79/1dca53084172dac5a4a2779ded530969b8ef28": "c5c557adce25191f7f5441b4ff0f50d6",
".git/objects/7a/c95ddc4c6e1b6b6a5ec9e8218f943bafed7cc3": "e13253f8635ced4dbf2358d76ed1e7c5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/dfd35659853908145cc918190e36d2103204a0": "54bba9b6e91a6b01f0e353c64b84204c",
".git/objects/83/af8c9c38a853064b08857e2d9d0272abfe8ecc": "1f0ee8cf8b403e3f288473af976f1de6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/182e7488779371955b46b2e2060c9f9f4c7104": "f421f45a47088cbb39db4eebf5ff3ab5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/917dfe2a6d90bb7531a474698d1272eeded2ed": "afa307542917baab7842412a6462a2ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7bf97a7081086da371c6cf79f0c20994a1fbe5": "fbad7b19282e63e55edd3cc69ab72471",
".git/objects/8d/fb5652e91ede320aa67d0d58aa9096c227a64e": "62454f8554fbbad65d8ee14090ad5cd8",
".git/objects/8e/be595836bcdeaec337c7a0b74a7ce39ca1cccb": "8b7927af50d2047ccdaeac7dff321e55",
".git/objects/8f/35201178ac88d2e81ac549bbcca6adc8179091": "affd8e875ca9592da9a922f019870377",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/c8b843e738745fca9df2f7af3eadb4f4468f58": "216b4b579d29732c1005cd1691102492",
".git/objects/96/b4b5d467a609df2edaf5892b55cf1937719aae": "29b26fe8baddd72c226b701feccd888d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/b350b0283e7ed9dbe2018400a339ccdeba65a3": "b805b3a101e4bf82162cbd1afd21d723",
".git/objects/9b/d079fdf4ddea13138eeeb8a7b001c7658e1e89": "073822327df8a12ae85ea70bc4ffef96",
".git/objects/9e/3c4e1b2e2ff97ffd0604f021bcd83a697dcc48": "30a983977f82e073c7cb00344c228f40",
".git/objects/9f/c15ce4d5ba2b1f570b3d7bf76c9906062d2b78": "8977b325188837a18276630defc9c5c8",
".git/objects/a0/bf5e9183bd5a64ccf7964cee1445bfdab4821c": "15c7e2ecbf58679aaf8de3809da8f4c4",
".git/objects/a1/6da55a1e776193f35f9f3461d064a243f5e4c2": "9c2ba95c60dda1ac8df7eac557fbec83",
".git/objects/a5/46e8a41d31c4ca3683f34abe261237589ac2da": "b2bbd7a1c0d31eecc4c0e9f94a34a3ba",
".git/objects/a6/df39532414d900ec006a7c0c14e2e2cc831e2e": "ad2b6a6e0ca78132565fcf697cd35674",
".git/objects/a9/967ac0bd76917641afee9a5fd3a92437b61d6b": "6cd0225f78bbe73565e310861a357933",
".git/objects/aa/daad73e3ced551d2981f1a5f57c8c93f3b1d57": "ea3a135e8a610b25ec2a3949614a0f13",
".git/objects/ac/f322d9990636c3a0948023daccc42f5e3a635e": "f0efea08bf246776323de89aa7b56e02",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/6f04d38c475ce63e654f9452bf43b964789559": "8bf331494dac24cf95eb1331c05b26c4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/571bd3b784b86efe8cea61b8b0fde5e3434de3": "13345da79f4ff00a9cfa3074cc925978",
".git/objects/b7/8881dcd8a69ea6daaa9cca393552447de48a45": "b523e08827ff6d87cd4b44fef01b50c9",
".git/objects/b8/1630e795a8c6c207e4b64455e2e151683ea9d8": "990509dae42ba4c12e216adc1a2d6080",
".git/objects/b8/3ea6024e3b71353032adb750b569caf6c7fc9d": "88d882abe436b0d7bf4f2524809fe8c9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/926591f5fddd46c37552cd02e97bd5ceadbd0d": "9f267c431647f0ac964bfec7bb759ae1",
".git/objects/bc/008aa77089db1cc4188e3539c20a0f1007f293": "6a28be64bed44593e994db505a73f459",
".git/objects/be/9bc57617144c4b39499e9314e53c0b8357de84": "64f7428d855779d2938cd27d31206011",
".git/objects/bf/c98d0a56758d103365b5cef66dd6803cc3ea53": "16b09910b27560474f3cd656200a06f4",
".git/objects/c7/09b665b731adc123c194e4298209feb3c475c1": "d7645b4d993b92a762451132a9332501",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/eaef4602e9a8b5de365a074b28baa0e20b1c38": "774e121c7c4367acbe584a43ee13a2c2",
".git/objects/cd/004cba2baf76217c10ba1843e7ac41a4cf4122": "9f0279b09c87a93e4a440fb5088f9922",
".git/objects/cd/c0a374b2553277c7b2a625ce9daef6637ffd2b": "9a6e58446657f54de8a23c33ed42e866",
".git/objects/cf/91ab89490865ed560762b794241aab04d18a5c": "c96dcbdb7580b4f987c048143cfb2347",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/e4f9f3d968d790650dad34c6ec01eb951e7665": "4e9759cf6f2e29c3773998fad54e7b18",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/f7f4cc3405a13dd5a42e65d0728f4a7b06d3be": "0b9688c7b4d8cfd55b72b6ed17a76f2b",
".git/objects/df/4e7f8f3252f62d57d1d17293282fd0f1f06273": "a7c749a04f6268effc06fbbe57721da1",
".git/objects/e4/7e7154816b7ac019b56a33d864babc611de354": "9a697c55f5ec256d8a9cdb67318f919b",
".git/objects/e4/beb9a40a6c20835c9f600701bc70e74cc9f043": "68e1785eade53276f73d02d39394c0c0",
".git/objects/e6/cb70e04dc2d7ecb97cdb07fd250b49720b9445": "90412dae90a3be50b75588a97aa27c64",
".git/objects/eb/11fb00590075cbc37973e692a8a115e722f4a8": "83cc91ba1791fdaed9f42ec6eb966451",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/09fd9ad057d9bfd839e0d6b8783580a31260c2": "939c9be7b334fe211cdfc799617a905f",
".git/objects/ee/478af5fccc73e5346ab65f5f4b5e15fc155b97": "4b94bc4180d1d79d738af7dd3cd695e8",
".git/objects/f1/1c9812604da265a02a999dc2fd69fc37b2e7df": "d281c1aef7f173a6325110b73c060517",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/ae715286fa088c8a98b36a44bac078e7900065": "a9e6909eb397dd2b7bed524378c6898a",
".git/objects/f5/fa80278bc503da83ce7dee4dc2d466756f0973": "b28701d1f9ba2f426f0a29ab7f65a52b",
".git/objects/f6/0f266c76ba77ea38095b501c3569e21c6d9195": "92b0f6b1a5ebdb769a7078e0e23bbf6f",
".git/objects/f6/9df56d1054d79f1a8fe9f5ae14d1458447bb59": "c7eac15ccc1cedf25e8af20c3c5482db",
".git/objects/fd/420440e99186326caac8eb82224c2d1c8f52d3": "69789b957d8698b9f09e00e41eb3d95e",
".git/refs/heads/main": "a5f61c603d42e0bfcb63601ab15a4ad1",
".git/refs/remotes/origin/main": "a5f61c603d42e0bfcb63601ab15a4ad1",
"assets/AssetManifest.bin": "a999ec7f19a004837d3e7790bb587dde",
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
"assets/NOTICES": "6cf09af5af3e4a928a31c15111d898e0",
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
"flutter_bootstrap.js": "06ad4dfad25bde7ec7a8391bf9ab5e93",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac0089b58cd238e185a24193d1f0b841",
"/": "ac0089b58cd238e185a24193d1f0b841",
"main.dart.js": "1ff7088b7e8bfc272ce53ef1a46b3f78",
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
