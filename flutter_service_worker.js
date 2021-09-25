'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "de14b646f75f047b85edcc0b47ba21ee",
"assets/assets/country.json": "9f968e59b1043548af4fbb8ccb205981",
"assets/assets/flags/ad.png": "c74612b405eec7a0d8ad3e965ed3c8ed",
"assets/assets/flags/ae.png": "9da5765bceffac54c723af05c3e0deef",
"assets/assets/flags/af.png": "5de0721fe3bc5e46201cca7408180955",
"assets/assets/flags/ag.png": "e1196dbff93c717db2c509c943cf2e0c",
"assets/assets/flags/al.png": "6e5f8e56ac8dd7c311efdebe3a64aa99",
"assets/assets/flags/am.png": "dbb15489ed85889ea08cbeec793ec185",
"assets/assets/flags/ao.png": "2d380d27e7855941e0107b90ab77ca26",
"assets/assets/flags/ar.png": "21cfb736ed467ef3946c5e971901d83e",
"assets/assets/flags/at.png": "fab4fc3852244f5d17a6c9ff93c5ac92",
"assets/assets/flags/au.png": "b7916deee8c4843cd14019d26736b55f",
"assets/assets/flags/az.png": "c480f86e50a5e14f26385a2ed0587f19",
"assets/assets/flags/ba.png": "35efdacbe24559e160b611f7b494f782",
"assets/assets/flags/bb.png": "77c52daea16c56752872e084c45ecd21",
"assets/assets/flags/bd.png": "d0fd69f61ebe3d91174361ac9c569c2b",
"assets/assets/flags/be.png": "9846a6128285acf4913691d205f69a1d",
"assets/assets/flags/Bermuda.png": "99ab35eb780d1eec88a9d100f66fbeb6",
"assets/assets/flags/bf.png": "821e70a4d6f1879cc9c24896eb868aca",
"assets/assets/flags/bg.png": "390cad9d8f288dc5e4baa4709522c56d",
"assets/assets/flags/bh.png": "256664e176a0afa9aa493986078cbd79",
"assets/assets/flags/bi.png": "b847f87b5d90144f87b5b5bea329675f",
"assets/assets/flags/bj.png": "47836ed3504c9fd325fd6ee032cd144d",
"assets/assets/flags/bn.png": "b7a34b142dc543a95d1756f107ea6607",
"assets/assets/flags/bo.png": "5397b154a5ffedcacdfb296774cf5d88",
"assets/assets/flags/br.png": "59871ddcb737cf5881d09721f94c4188",
"assets/assets/flags/bs.png": "b87656b320db24992c9149cda924daef",
"assets/assets/flags/bt.png": "ed20ad2a885d6764bd24dcce22c7d080",
"assets/assets/flags/bw.png": "e81ff8ba9f91e2e54d07e66db4d66947",
"assets/assets/flags/by.png": "f242fbdd54a1807e8f93108a13839f9e",
"assets/assets/flags/bz.png": "7e8c62c9448343adf4cefa73d6f648d9",
"assets/assets/flags/ca.png": "80393f3610aff78a9a3d611dbf79f8c9",
"assets/assets/flags/Cayman_Islands.png": "1bd0d9a57b42abe1819d22e6806b4a57",
"assets/assets/flags/cd.png": "59f6ae4976d3231d18db43eeabddf38f",
"assets/assets/flags/cf.png": "8c535eabd25f052856ed25c800a698f8",
"assets/assets/flags/cg.png": "82a3309fe11c51dc1478c60901016ef2",
"assets/assets/flags/ch.png": "3239e038b196f3db889be8dd04dfc9f7",
"assets/assets/flags/ci.png": "3749e1ae604407e3291f6e89b2945767",
"assets/assets/flags/cl.png": "af0c6852939c7909200df982ea2bf055",
"assets/assets/flags/cm.png": "3c617fb3f53a0a14d2428e34756b7f8f",
"assets/assets/flags/cn.png": "415d3f08cb5d8ac9251430750c46a63f",
"assets/assets/flags/co.png": "d5f8b392400b79c66dd0a8740b63e6b9",
"assets/assets/flags/Cook_Islands.png": "0a2e425d457ce09f3e388e9e791fd028",
"assets/assets/flags/cr.png": "03cfa86bbbf57d5523a6f0c226fc17e2",
"assets/assets/flags/cu.png": "19b867ae0463ce93977d7ef6eb11aabe",
"assets/assets/flags/cv.png": "b0cbbdcc0b0aa17116b8bdeb63bce619",
"assets/assets/flags/cy.png": "1e15259b4341aa9441d189defe3c551c",
"assets/assets/flags/cz.png": "787d8ffcf51c942bb99051db97a056a5",
"assets/assets/flags/de.png": "57fea9f2824a84e4a2c2242fd74060d9",
"assets/assets/flags/dj.png": "04310c2cde0c2d2e9b996821fda6f6ec",
"assets/assets/flags/dk.png": "a189fe61259a01456a3c7569410427b9",
"assets/assets/flags/dm.png": "1554fca4f487426a3c9de56006dff72c",
"assets/assets/flags/do.png": "71499c602e144a4c1e703f5144ad09ee",
"assets/assets/flags/dz.png": "e7a2499f14e5cf13180d0efe26b30071",
"assets/assets/flags/ec.png": "2ec17c24882ba7927f37de2f30b627cd",
"assets/assets/flags/ee.png": "0adf99ca7ccbb72323b7602e7a14aeb0",
"assets/assets/flags/eg.png": "82f51e3dd8831f2cdb86c0009f8b9951",
"assets/assets/flags/eh.png": "1dd799d53391722493f7dd9ad1b6d071",
"assets/assets/flags/England.png": "1ee246c0e904d5b94a23d788a7613ea4",
"assets/assets/flags/er.png": "e59218e0a5d21741ad87d79cd8ba31e8",
"assets/assets/flags/es.png": "27419cdcccd710331bfb46d3065eb76f",
"assets/assets/flags/et.png": "73288bd471e08a74f935534180825aa0",
"assets/assets/flags/fi.png": "57c08c7143c25571f2713fbeb3febec3",
"assets/assets/flags/fj.png": "b14d79d047dc75a2b12761b1c4681983",
"assets/assets/flags/fm.png": "b47f905e3dd0a179bad85538f7cd79c7",
"assets/assets/flags/fr.png": "9f58861e15adda71a9ca71ef990b2307",
"assets/assets/flags/ga.png": "c2ee053916c10288004ed5b6e6d57b7d",
"assets/assets/flags/gb.png": "11e9c2d3c17a34ba250dc14e16a5217d",
"assets/assets/flags/gd.png": "17027067ad45a0425a4b8966d1d429b2",
"assets/assets/flags/ge.png": "c0583986f06c76a6883bcf1968be7539",
"assets/assets/flags/gh.png": "e68d9ef9af16846193f2daa61a4a6999",
"assets/assets/flags/gm.png": "7048a7fe271fe696463da3ff059cc2c4",
"assets/assets/flags/gn.png": "1a57addb9fc1049b978f9632b2784a84",
"assets/assets/flags/gq.png": "50869e33f79e27a2442f91731d864465",
"assets/assets/flags/gr.png": "9c0f2b0e026364da9be3eafbdc1a0043",
"assets/assets/flags/Greenland.png": "c1cbc6500890de2bf68f004db169ff8c",
"assets/assets/flags/gt.png": "3a718a276dfd4fb256f88f194f8d7b50",
"assets/assets/flags/Guam.png": "8eeb7aea5ae658fb33738a7f9b86dc16",
"assets/assets/flags/gw.png": "98acc4817260873d420045586025f39a",
"assets/assets/flags/gy.png": "96781ee7ea715e849f942e9385646c3d",
"assets/assets/flags/hn.png": "2419c63f75af0df36de91e994c492467",
"assets/assets/flags/Hong_Kong.png": "2914f9dd25fc091ed623f843519b9c5e",
"assets/assets/flags/hr.png": "207ca0d1871db675fde71c83c2368629",
"assets/assets/flags/ht.png": "cd8e258812b561144ce9edf1100934f1",
"assets/assets/flags/hu.png": "63882fc401a4e63bdca6fd28407a3c20",
"assets/assets/flags/id.png": "a779915cae57579f5dd518261af339e6",
"assets/assets/flags/ie.png": "6162eeb80818316c5bab3c87ecd4a17d",
"assets/assets/flags/il.png": "425f15b0adb0552e9b0415b746b0c06d",
"assets/assets/flags/in.png": "37c530c218a75e88b62ea01a8d76fab2",
"assets/assets/flags/iq.png": "88241e975a157f55bc296850a4b0b0b1",
"assets/assets/flags/ir.png": "558a4f58ba88f820d6611af72c301409",
"assets/assets/flags/is.png": "773b2a8d1db736f067c98abeb6ce8c76",
"assets/assets/flags/it.png": "0cbcefeeb31b402a8b99643eb6232973",
"assets/assets/flags/jm.png": "12cd3ea33094f0565d2b01f73b40ead8",
"assets/assets/flags/jo.png": "6616a879b19a892b1759aa7ae7bdffc7",
"assets/assets/flags/jp.png": "3364141d79e36620101744133ddd43b4",
"assets/assets/flags/ke.png": "10c132bc26bd7dea94cd49518a7ce76d",
"assets/assets/flags/kg.png": "25a6b591f1c1747862adf84b241ff2a2",
"assets/assets/flags/kh.png": "11da9110e55e30629fccdb0c7d8c4c63",
"assets/assets/flags/ki.png": "070a47710dd9cf5dadc40066ae28189f",
"assets/assets/flags/km.png": "d297b57861867894f8e26231e21916ff",
"assets/assets/flags/kn.png": "94e0ca1bb0761424b72dada8d3d79fe8",
"assets/assets/flags/kp.png": "b10919f560916955d2e51a89be1a589d",
"assets/assets/flags/kr.png": "3092ce79c017a37da81f333275b3a2cb",
"assets/assets/flags/ks.png": "11255bb0bda5de22232cd2c8abbb8cf5",
"assets/assets/flags/kw.png": "d538cab8d5fe004e5db335bf6fe2fdda",
"assets/assets/flags/kz.png": "93958817613a2132dd03ada302cb4fff",
"assets/assets/flags/la.png": "152f1b827a0ae9dc683ab95c534c6006",
"assets/assets/flags/lb.png": "67bdd5a4727b7b3eb35df569801928c2",
"assets/assets/flags/lc.png": "8242b0a4a2528df676c36ed5db4c0c6f",
"assets/assets/flags/li.png": "52ade487f9460b2cb7df3f830d658634",
"assets/assets/flags/lk.png": "3d6c8c9d1f25fb41fa87de79b6dd89cd",
"assets/assets/flags/lr.png": "d075de65da820c1767cde1d21d914497",
"assets/assets/flags/ls.png": "4c45dd05908bf6dcd974ed3ac676f029",
"assets/assets/flags/lt.png": "505b6357a581255d8c9563a22b527234",
"assets/assets/flags/lu.png": "4b562db817be475f4de5070a3935cb6c",
"assets/assets/flags/lv.png": "f73ee221b6c3f62d95b7a9a7e2756202",
"assets/assets/flags/ly.png": "d61f41ec403d37ac5009f17262f9c5d8",
"assets/assets/flags/ma.png": "b41c0be49328ea930b20093154954b32",
"assets/assets/flags/mc.png": "0321d6347102421ad6c5bd33f2555a13",
"assets/assets/flags/md.png": "86ac3731762e0cdff89b66b2a37a824a",
"assets/assets/flags/me.png": "40e1101cac2e58205cffc245c272a932",
"assets/assets/flags/mg.png": "5434539eceadc711d804750418314796",
"assets/assets/flags/mh.png": "687c2b8735ff040a72227ede862dd649",
"assets/assets/flags/mk.png": "1112ea0156cdd1a0cbedd665af4417b0",
"assets/assets/flags/ml.png": "e0fc641737a8cf4d3cd8238176cd5309",
"assets/assets/flags/mm.png": "9dafe5766a18c56d626d9484eefc11c6",
"assets/assets/flags/mn.png": "5bc963c2c4409d336cb070db8f6d87c7",
"assets/assets/flags/mr.png": "a89b946f4c642f0349e83ffbcb39b91a",
"assets/assets/flags/mt.png": "aa40c5ea49db4547969c73790b1bdba7",
"assets/assets/flags/mu.png": "dd8570714c677ae8bea9f93f8f06d259",
"assets/assets/flags/mv.png": "8f0a6f69719f4b78ef885fdc78a581fd",
"assets/assets/flags/mw.png": "ca4460f93049e8086c631f69af99cf10",
"assets/assets/flags/mx.png": "0aa9591d2f69b634c888d57417bcab0b",
"assets/assets/flags/my.png": "bc56bb5b8766ea96e9dc3f261f9970ba",
"assets/assets/flags/mz.png": "e0a81bbf900493368db9eb172474906e",
"assets/assets/flags/na.png": "6d857fee68032a38e28a4f4862ad02dc",
"assets/assets/flags/ne.png": "f9d2fb3ec7a7646bc22b00004ab37309",
"assets/assets/flags/New_Caledonia.png": "6eebb74ef8e02c2cb671d1cf9d830a0a",
"assets/assets/flags/ng.png": "42eb8189f381f2f160e66093b7eb4b6a",
"assets/assets/flags/ni.png": "986d4b086501bf51c76cb960d9f27606",
"assets/assets/flags/nl.png": "58da8c1f878ef35da79de355cccfa1f6",
"assets/assets/flags/no.png": "4661196fe84a2545a50f6d0e99ebacb3",
"assets/assets/flags/np.png": "ccebc9827d61907d8e3be959a75bd607",
"assets/assets/flags/nr.png": "0649d18a737017ef71d93fe07b8c315a",
"assets/assets/flags/nz.png": "4896e265527994ab4ca9bc5268eb72d0",
"assets/assets/flags/om.png": "9cb1e20982b80bd6178e758352cd9539",
"assets/assets/flags/pa.png": "c0c619f56196e1b0a036c9ec7b744bba",
"assets/assets/flags/Palestine.png": "d2bd6bd93e85f814c2c2c0e2c4397cb0",
"assets/assets/flags/pe.png": "1ac26ba161463f6bacadd04ee8ca29ba",
"assets/assets/flags/pg.png": "fd116d9d4795862f7ea8cb2e39d867e4",
"assets/assets/flags/ph.png": "81ce5367850c3203ba39805ff9331945",
"assets/assets/flags/pk.png": "d8c3622ac78a3b3af4c66bad11fa36bd",
"assets/assets/flags/pl.png": "0a081f916fc4e73fa31f23886e4f4c89",
"assets/assets/flags/pt.png": "a6a1de9008682833b0e1997e5d107acd",
"assets/assets/flags/Puerto_Rico.png": "1bb1a48e239e8fb619b9678bb7b4cda4",
"assets/assets/flags/pw.png": "08b09f3618582df884e238290e74a5e0",
"assets/assets/flags/py.png": "2d5da9bcf1f4cb47317ffc3b73e87ee3",
"assets/assets/flags/qa.png": "b7e7f43ceebe3d61d620f4e606189cf0",
"assets/assets/flags/ro.png": "1b4427e8d2f5dfd79403acd258cf7453",
"assets/assets/flags/rs.png": "33708f000758270a16df5a16485f1c2d",
"assets/assets/flags/ru.png": "16a71e385e332ab6ded503b0cc4d003e",
"assets/assets/flags/rw.png": "4a2cfd1603dcd0e60196957e34dbeeb0",
"assets/assets/flags/sa.png": "789ec8851198f05219de4ce3ea409be1",
"assets/assets/flags/sb.png": "278fcb379c678868649c1b5ba5c5e472",
"assets/assets/flags/sc.png": "accbc584579dd604bcd71750b973fbb4",
"assets/assets/flags/Scotland.png": "f637706580e29856496e79918b911912",
"assets/assets/flags/sd.png": "c23d2a4b577ce37ecd1eca68b6fd389d",
"assets/assets/flags/se.png": "b3ffbd1a730c9bf10a92c8d241463776",
"assets/assets/flags/sg.png": "b27aa8fdc8f3a7d853aefd841aea49b8",
"assets/assets/flags/si.png": "199153e93ad09d6adf9adeca223c7596",
"assets/assets/flags/sk.png": "b3bad06cef3ba74e846972811c29682d",
"assets/assets/flags/sl.png": "96ad73723455b29946d98c952474899d",
"assets/assets/flags/sm.png": "1e4c6b23dbd98b2ecdf911318c598a72",
"assets/assets/flags/sn.png": "28e23393794ba4b4bc68bd979ad76027",
"assets/assets/flags/so.png": "79605e3e3f6b7e86db03bf275c7280fe",
"assets/assets/flags/South_Sudan.png": "af2b891f84759af67cb26ec09c2c5521",
"assets/assets/flags/sr.png": "109d4eee1d4303a07ebfbf28931d4f80",
"assets/assets/flags/st.png": "5cd81a846d87f70c1238cd7aa53b67f9",
"assets/assets/flags/sv.png": "eb14345d2c3ae292de8234e3a2cb1d13",
"assets/assets/flags/sy.png": "2ca4d99a5d402b34dbb872c36e715289",
"assets/assets/flags/sz.png": "b7338376c0eaa052b6797089469023ac",
"assets/assets/flags/td.png": "77094b62194caddae25800373805d140",
"assets/assets/flags/tg.png": "fed1f33d5dfb0e1feac206ef1ef71775",
"assets/assets/flags/th.png": "aa5227d4bdb9e9713c8eed801d2312d0",
"assets/assets/flags/tj.png": "715d5c4738f06cdaeec8730aeb776713",
"assets/assets/flags/tl.png": "f60985977552502b8f6caf160babd502",
"assets/assets/flags/tm.png": "ae976919519419ff9a05b2358516f152",
"assets/assets/flags/tn.png": "25db0b4c647796579552278805b85b02",
"assets/assets/flags/to.png": "f4b5544e9aeca34a0bdfe3d0765bd359",
"assets/assets/flags/tr.png": "11977fd2d386be3c3d44a07e865895aa",
"assets/assets/flags/tt.png": "1922da56fadcb34a4b4f9a528d2588c9",
"assets/assets/flags/tv.png": "66e986d668a5eabc2e8e3abd5cf9a691",
"assets/assets/flags/tw.png": "1f15ef99f76978b65c5c3bbee0bc1d4c",
"assets/assets/flags/tz.png": "1307e8fd75c665f6a665a4e9f614db90",
"assets/assets/flags/ua.png": "6e0abc984541e51b2126c86b66d62718",
"assets/assets/flags/ug.png": "46b834704de0faafa756def106ea97ed",
"assets/assets/flags/us.png": "91175e8b3694b22f331d3b4027a0f218",
"assets/assets/flags/uy.png": "06cd7ca21e214d663b3b0f39f0899114",
"assets/assets/flags/uz.png": "46126cfb8cc67c33a051c7b7dfaa202b",
"assets/assets/flags/va.png": "2d9dff840a3ed3168982e630c3be365c",
"assets/assets/flags/vc.png": "95eab302096e412233998d72bb044f3d",
"assets/assets/flags/ve.png": "b6703e615d1b41761d20a6e298089633",
"assets/assets/flags/vn.png": "e250774a4d250554e0a218c5ddb1b6b1",
"assets/assets/flags/vu.png": "6dd912c31b8894006563b5ee72527851",
"assets/assets/flags/Wales.png": "9d002e74413df0728b200b756f8f932e",
"assets/assets/flags/ws.png": "c50cb97081eaaa2e1d72ef8ea07b52c3",
"assets/assets/flags/ye.png": "c687a3bda0a04a2eadd58403ad933087",
"assets/assets/flags/za.png": "f3d7465fa144ec48fbc1f4146d3544d0",
"assets/assets/flags/zm.png": "8806a73d418a4657bc1052353699a4c2",
"assets/assets/flags/zw.png": "005e37272881663d4bc840696086f1e1",
"assets/assets/icon/ad.png": "9563b39a108391491e3d50a921db9065",
"assets/assets/icon/ae.png": "de49a90e1fa3e22dc824c82f7914acdf",
"assets/assets/icon/af.png": "3f6aa1bef35f3f49b6b005c2f45d5233",
"assets/assets/icon/ag.png": "9e998aa79673a06c8a6286dcffc2277a",
"assets/assets/icon/al.png": "415c76be7219b7bded62c89c5c89994a",
"assets/assets/icon/am.png": "4184208739fdfc68c913211dc428e675",
"assets/assets/icon/ao.png": "d5f83499a1cfb09c92d48c7716989006",
"assets/assets/icon/ar.png": "8aef5bd3d44e089a3ac2b63f90727fa1",
"assets/assets/icon/at.png": "6ff1750b2622fa95a11eace81048d244",
"assets/assets/icon/au.png": "b9cddc4e4682e4d73eb29956116afef2",
"assets/assets/icon/az.png": "5bd87a806a3d1e59f50dcb3708ccda87",
"assets/assets/icon/ba.png": "0e70edd6748fa0f6256c22f884347ffc",
"assets/assets/icon/bb.png": "642a6b54bf85bc716afab0787fca8ce2",
"assets/assets/icon/bd.png": "4b80b27bf9e2e5cc357d833f103a2349",
"assets/assets/icon/be.png": "d95f9cadfaefce79d7cfee413cd8e1ce",
"assets/assets/icon/bf.png": "40a0e92331b02980ae41d53a51ef7990",
"assets/assets/icon/bg.png": "ed9f10d3a165657539232e0ab54f945b",
"assets/assets/icon/bh.png": "29185291e5089bcfa130b6cfe37b6d6d",
"assets/assets/icon/bi.png": "12b81142666c834d252ca3ab22dde866",
"assets/assets/icon/bj.png": "873499f497a60d24ac2ec1443d217b63",
"assets/assets/icon/bn.png": "4c6f93f8873fd746d05d47697efc1cd6",
"assets/assets/icon/bo.png": "8bfe7cd467d471e179def5502838d1af",
"assets/assets/icon/br.png": "f17d794d3bcf9a57c603e709bcdee937",
"assets/assets/icon/bs.png": "204bf39b06c24a3e716cdfb23c7e1c42",
"assets/assets/icon/bt.png": "b1afe8b77355dfb2d2d2521606bf4c19",
"assets/assets/icon/bw.png": "88fe8a0b44a711a40416fd547d8b3c6a",
"assets/assets/icon/by.png": "41072855e94422fcb18084ec5f15a405",
"assets/assets/icon/bz.png": "0e28d0bbfc424a9a47ea8dc167f10419",
"assets/assets/icon/ca.png": "925eca969822b294153eb7257d265a9c",
"assets/assets/icon/cd.png": "dc07ef6c206c0a2464c678c1f66e778e",
"assets/assets/icon/cf.png": "2550649eba802603b8299c5793c0a2d0",
"assets/assets/icon/cg.png": "0d84563be64525accbc8545ad380e61b",
"assets/assets/icon/ch.png": "2238f06e00149f83cc0ffa5f3b2a9f84",
"assets/assets/icon/ci.png": "db91d140074e232816566096707486a2",
"assets/assets/icon/cl.png": "47c8c5707f14b0a56b28c1403ac611e2",
"assets/assets/icon/cm.png": "1ab30e933d4bfba1918ab128bfb3a5e9",
"assets/assets/icon/cn.png": "329ab7109b748022f6f62a1440fecbff",
"assets/assets/icon/co.png": "488369c6fedaa3c7e2ef9f5bc595e816",
"assets/assets/icon/cr.png": "5e03f4167c7727d38d1e86dba4d1292c",
"assets/assets/icon/cu.png": "ce06b1cf4664af21a46dcc0b191aa613",
"assets/assets/icon/cv.png": "69bc127b8b0e3ed867016b3a2a4583bf",
"assets/assets/icon/cy.png": "6d619b0997826f3f6934195eb11ca8f8",
"assets/assets/icon/cz.png": "70e9e42644b1f3b718abff3699cb825c",
"assets/assets/icon/de.png": "a2e69d73380dba13c0a17998e511a140",
"assets/assets/icon/dj.png": "cc6c4e8a0bac8c77bc7621152c346754",
"assets/assets/icon/dk.png": "51bfa8d99823eef0b715e5df664d477a",
"assets/assets/icon/dm.png": "b670a86bc8398103e324473729ff06a5",
"assets/assets/icon/do.png": "e69cf9f88c273174315fa98572dd1240",
"assets/assets/icon/dz.png": "24a700941b7c216ffafb3d1c60905b94",
"assets/assets/icon/ec.png": "64b108dc1a17ad910a844e6562042ac0",
"assets/assets/icon/ee.png": "44a732f32a8b780d93502ac25e82fb1d",
"assets/assets/icon/eg.png": "64f1463398a8def015e6b1b7d4ee999d",
"assets/assets/icon/eh.png": "5dee0b8ba516f640cd9cbb2800f6813c",
"assets/assets/icon/er.png": "595917707001bf3691fe74feb0e43d15",
"assets/assets/icon/es.png": "908a129a2f845d558d7f48b13a43860f",
"assets/assets/icon/et.png": "4c0bd4636d58c4e858a743a0b6230d3c",
"assets/assets/icon/fi.png": "fc4300cf0128069719cf80955832e3cd",
"assets/assets/icon/fj.png": "90b5cda16ffbccabfd2be21a40195453",
"assets/assets/icon/fm.png": "7c376236f18e8c2d511f4225a76d3f98",
"assets/assets/icon/fr.png": "90a8d1aaa2eadbf91aae6bf11045b343",
"assets/assets/icon/ga.png": "52e0164248a9c435d220a18f5ffcabaa",
"assets/assets/icon/gb.png": "6cf76dd8ff7586277b900b549147ef7b",
"assets/assets/icon/gd.png": "8b7cfb58a25b8d4e5947562f1c702ba2",
"assets/assets/icon/ge.png": "4d37cb147478048a88fb255ce094b074",
"assets/assets/icon/gh.png": "7ac8a32e903111f9e82ae70ab62bc22c",
"assets/assets/icon/gm.png": "701fed4fe58bc2c676a6bc7c89c3d83d",
"assets/assets/icon/gn.png": "832620fccd78d90471e2c6e8b40ff088",
"assets/assets/icon/gq.png": "f112cea78049214e5359515484fb59cb",
"assets/assets/icon/gr.png": "15cdf008f9876366412af5236949204c",
"assets/assets/icon/gt.png": "ee85cb632550366717ca1d14d51f52c6",
"assets/assets/icon/gw.png": "b18a313082dbcae48aa733fd38b82a98",
"assets/assets/icon/gy.png": "5bc16f7b2ff8be95e5153a25acdb987c",
"assets/assets/icon/hn.png": "f937d4826e9d07eb0cd7e379698148ca",
"assets/assets/icon/hr.png": "b5669a9d5005ada0ec9f2732ec76d42e",
"assets/assets/icon/ht.png": "85d63f3119f752706172d5f77443760d",
"assets/assets/icon/hu.png": "abb187bf65f459bdf29691196b86797f",
"assets/assets/icon/id.png": "de725820147baa9ca052df4393f89878",
"assets/assets/icon/ie.png": "b3b34c5c366c624f796d867572f2f801",
"assets/assets/icon/il.png": "54c441f674990c2a1a196b84e2f65f71",
"assets/assets/icon/in.png": "0f22e563cd62cdd6e95b2f0cd4acce04",
"assets/assets/icon/iq.png": "ab00a9c4e00cc140013eb55a74cfa942",
"assets/assets/icon/ir.png": "b3c9809c7fd81079dfcfc5d52006e19a",
"assets/assets/icon/is.png": "a4bb032f708eca45a61d887237a28461",
"assets/assets/icon/it.png": "6392db8b8a2180e4fe288e9f8690a1d7",
"assets/assets/icon/jm.png": "5d680966c498dce1d34585c266c3f8d6",
"assets/assets/icon/jo.png": "996ad4e14fb1b24bedce8c94360d49d8",
"assets/assets/icon/jp.png": "5c676e1afc72d7db7ab7ed510b7c4e48",
"assets/assets/icon/ke.png": "a4bd22d381c77709c7a7fcfd45db08b8",
"assets/assets/icon/kg.png": "3924523748212b9125087913d70b9d3d",
"assets/assets/icon/kh.png": "3808e827363d071c50e2fe30d8adbafb",
"assets/assets/icon/ki.png": "177175bf0cbd49a53118311f954fa8e8",
"assets/assets/icon/km.png": "61e49f0fe49216170dd33290a1502411",
"assets/assets/icon/kn.png": "91b08325c6c2c5b9bd72712b7e1bc88f",
"assets/assets/icon/kp.png": "402afd19218aa111ef3c217b9be023cf",
"assets/assets/icon/kr.png": "cdf914f18d7df5564fb7821302b64dd1",
"assets/assets/icon/ks.png": "b9ba8f122c8ba75ca3ea4941d610319d",
"assets/assets/icon/kw.png": "d590c0c00f4b3ecebbd0643a0b6d88b2",
"assets/assets/icon/kz.png": "7f7eee2c0b01efdbfec50214e596831b",
"assets/assets/icon/la.png": "6fa3195a1cf329a543071d205d278c20",
"assets/assets/icon/lb.png": "599a405854f19efa006d3f1e92711e2f",
"assets/assets/icon/lc.png": "b3731d90fb9e06a6dfd70426d5e9a8d7",
"assets/assets/icon/li.png": "2f0d85b70e7e6c425d22728e8f17855f",
"assets/assets/icon/lk.png": "65e65020da83914ebf96e12bbfbc59e9",
"assets/assets/icon/lr.png": "0dd11f8b0a63fb0544c4ec1b0da58834",
"assets/assets/icon/ls.png": "bdad6334e6fb77125372bafa91c56684",
"assets/assets/icon/lt.png": "c91b5c099cb5cc6479c237086cb4e65a",
"assets/assets/icon/lu.png": "78164a99122298c835940d90ee10268b",
"assets/assets/icon/lv.png": "4c7882fd8913a6cebfc8e030c41451c5",
"assets/assets/icon/ly.png": "30f9b089658193b0d27de1982f12c7ca",
"assets/assets/icon/ma.png": "53681766cdb61c43600955892306b358",
"assets/assets/icon/mc.png": "79d21c57846e6d253d3547205f10f15c",
"assets/assets/icon/md.png": "85d692c9d7707759968c5abe4d197e11",
"assets/assets/icon/me.png": "07ff65cb9dcb2476361339c957a52608",
"assets/assets/icon/mg.png": "bf29fa17dce77f7ed79dd56d0d1873fc",
"assets/assets/icon/mh.png": "fd91a0afb0c351b52458d5c100df922a",
"assets/assets/icon/mk.png": "dc9f8d75f7810b14471a4964e554a5d9",
"assets/assets/icon/ml.png": "a33504d8791f50a8a85718a4e48ef59b",
"assets/assets/icon/mm.png": "ad793d0404c9d4c1a1f263a73506e8b8",
"assets/assets/icon/mn.png": "2aef2bb67ceede4e413c6a63f91f3ef0",
"assets/assets/icon/mr.png": "c9bd2778c8d002266a358b5a5ab342cc",
"assets/assets/icon/mt.png": "892ca82b30875620be713e55a2df49db",
"assets/assets/icon/mu.png": "a7ff26a9c0c4d7e1bfb37f5bb15bd493",
"assets/assets/icon/mv.png": "f18954c9f0102f6c779dc81521047809",
"assets/assets/icon/mw.png": "a2461e5e252351e044f238826d33d1ea",
"assets/assets/icon/mx.png": "7ce34af7c547dbbccc8bf29dc8ff36d4",
"assets/assets/icon/my.png": "42b4b3671ce03a47059e66d8b195a5af",
"assets/assets/icon/mz.png": "65cb439b79e70d1db6b340d1b88bdb7d",
"assets/assets/icon/na.png": "474e5df87b1f07d923ae8e2c7dbc1914",
"assets/assets/icon/ne.png": "639331e62e4727849e1f8182d822a3af",
"assets/assets/icon/ng.png": "13c008910827ec8503da6b3a93c44b85",
"assets/assets/icon/ni.png": "fb76412030c86c0fc0be1d8191bb4dcd",
"assets/assets/icon/nl.png": "022761e9c4de93f1de0e10452e4d5ac0",
"assets/assets/icon/no.png": "89ca88a4d9739b49cbce4fc501c32a47",
"assets/assets/icon/np.png": "cd2ee3787c9bb775ebdb80de3c4985fd",
"assets/assets/icon/nr.png": "23574929049fbde609a4a08bc7f86ce5",
"assets/assets/icon/nz.png": "660e494d2b9f84f4305c2d221cb5e91b",
"assets/assets/icon/om.png": "a2acdce0482d7bf1dc9fdfc67fc8d959",
"assets/assets/icon/pa.png": "408f7a83868e30955ea04b79eb871ce2",
"assets/assets/icon/pe.png": "17605f91d67cc4548344c33a01d8b935",
"assets/assets/icon/pg.png": "ce661ce8b29a8c6ada01b9ce95635206",
"assets/assets/icon/ph.png": "78a3420de7b12449f4b908c75852aa85",
"assets/assets/icon/pk.png": "2d121bf2b1deea8e7b34765f0d7b6589",
"assets/assets/icon/pl.png": "afd84a0ea5b87ae675ab68236384ca8a",
"assets/assets/icon/pt.png": "901e0830633f58203fd33f855d30fe60",
"assets/assets/icon/pw.png": "680d82430b4a65922f71d07986d9b4d6",
"assets/assets/icon/py.png": "a00530e9bf10fb54493bd6a4d36c7991",
"assets/assets/icon/qa.png": "b5f8eeaf3c48ae5ea34e32ad84a4f0c9",
"assets/assets/icon/ro.png": "10b381a4d1854dc86060d9936e585e59",
"assets/assets/icon/rs.png": "225973f9a4a653c73a5be882a6bdee57",
"assets/assets/icon/ru.png": "5aab509c45c66fcbffe404a6839473f0",
"assets/assets/icon/rw.png": "f1f05d5a0c364f68f147b0761bc647a5",
"assets/assets/icon/sa.png": "71f00753e8d7c9d43318108684739be9",
"assets/assets/icon/sb.png": "aa0e09130d867b63a2044ae55ed352cb",
"assets/assets/icon/sc.png": "a4d49340abba609d0e569a1d83ae10f7",
"assets/assets/icon/sd.png": "c759b5b6ade0007d502820f87c5de40c",
"assets/assets/icon/se.png": "89d9bb05f4c992b143273b662171e809",
"assets/assets/icon/sg.png": "43a3eddc49b6fb4b3e09f8d1f806cb37",
"assets/assets/icon/si.png": "b9afb361682990214097791ad84e6050",
"assets/assets/icon/sk.png": "5312594310542077bfc636880c0e4e16",
"assets/assets/icon/sl.png": "ea187dcdddf93400e201167a3c62b27d",
"assets/assets/icon/sm.png": "73874979c0fa52eaaae3d8d4f051c06f",
"assets/assets/icon/sn.png": "ae591b386962e38ddf83b3b3ffca910b",
"assets/assets/icon/so.png": "dbbfd528946cbbd41bd4f945bf3c8ea1",
"assets/assets/icon/sr.png": "f17b411fab992d61e5dd94259fb8af19",
"assets/assets/icon/st.png": "054566884adaeb160bdfa714da4aab5f",
"assets/assets/icon/sv.png": "8adcd7a4d4a9387b718f5ab10bf110cf",
"assets/assets/icon/sy.png": "ad73ec5db486bf745cbb5036fed182fd",
"assets/assets/icon/sz.png": "dde80f84211bb22eac3603be912505f9",
"assets/assets/icon/td.png": "d68beb390093f2a330c0cc0e35207ace",
"assets/assets/icon/tg.png": "4e01b2afd44b68cc0d9f51c5afbf0f4f",
"assets/assets/icon/th.png": "b16c7cbc7d17c14d7699358ac71361f1",
"assets/assets/icon/tj.png": "dc09f8070728d05e62f16650d5731b2a",
"assets/assets/icon/tl.png": "b38ca73f7871814e568caab17660820e",
"assets/assets/icon/tm.png": "779d250003fdf718023298544229e798",
"assets/assets/icon/tn.png": "e632a1047c25b6214b85c07593b5510c",
"assets/assets/icon/to.png": "6f388c604521d77778c6093ffeedcc02",
"assets/assets/icon/tr.png": "e93c5188c37aff8fdccab9b609395bb8",
"assets/assets/icon/tt.png": "0186586946e7c0469a07468356457d8e",
"assets/assets/icon/tv.png": "1e82919e1806aa659a46d7a8abc843a4",
"assets/assets/icon/tw.png": "230d6c9845b829626303266508f1237a",
"assets/assets/icon/tz.png": "94206dfb01da0fb0820e3eb62e8c5d21",
"assets/assets/icon/ua.png": "80b7c675988cc1910c555ec9fba87ed4",
"assets/assets/icon/ug.png": "76a8db934720ab48b70d7637cee1c405",
"assets/assets/icon/us.png": "d1a610a3a4441af2ef94f671835bf26a",
"assets/assets/icon/uy.png": "adef66fcf3d266bf1ca16af6e4b1caaf",
"assets/assets/icon/uz.png": "09ebc75cb34090efa0004b0285116e92",
"assets/assets/icon/va.png": "39aa4459e12c0c0b1b914ce5b861377b",
"assets/assets/icon/vc.png": "a9e40d6221a4bd96b07b81d2d1d9796d",
"assets/assets/icon/ve.png": "1612188b683477aba9c2ff35fd6b1038",
"assets/assets/icon/vn.png": "62a149383fd1e86c8ad71af3b8808dd1",
"assets/assets/icon/vu.png": "18caee761fdf13e82cc8305191536a75",
"assets/assets/icon/ws.png": "e2c8c72620002511f98c295d77c2b67f",
"assets/assets/icon/ye.png": "4f2d524fe54811020c059e347ba3b264",
"assets/assets/icon/za.png": "13e219e0fdd1956993371b0f02b487b7",
"assets/assets/icon/zm.png": "458f0eabc950619aee6f592cf534df95",
"assets/assets/icon/zw.png": "246e11bca5b392eef73300c954ddef90",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "50fb80cd258092ea75c93e284aab345e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "301b2907c396326f1c0bcc564f6dd120",
"/": "301b2907c396326f1c0bcc564f6dd120",
"main.dart.js": "15db646919e09d0702d549b9eb9427aa",
"manifest.json": "005db56c4579d1bee51d3938297dc758",
"version.json": "1e7cd9b88bb2ad3bc22fef3b4b6b5cc1"
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
