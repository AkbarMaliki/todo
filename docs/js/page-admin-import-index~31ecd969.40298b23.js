(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-import-index~31ecd969"],{1300:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("div",{staticClass:"p-3"},[n("div",{staticClass:"rounded-lg shadow-lg"},[n("div",{staticClass:"row p-2"},[t._m(0),n("div",{staticClass:"col-6"},[n("button",{staticClass:"btn btn-sm btn-primary btn-block",attrs:{type:"button"},on:{click:t.skpd}},[t._v(" import skpd ")])]),n("div",{staticClass:"col-6"},[t.skpds.length>0?n("button",{staticClass:"btn btn-sm btn-style9 btn-block",attrs:{type:"button"},on:{click:t.proses_skpd}},[t._v(" Proses Skpd ")]):t._e()])])])]),n("div",{staticClass:"p-3"},[n("div",{staticClass:"rounded-lg shadow-lg"},[n("div",{staticClass:"row p-2"},[t._m(1),n("div",{staticClass:"col-6"},[n("button",{staticClass:"btn btn-sm btn-primary btn-block",attrs:{type:"button"},on:{click:t.importUser}},[t._v(" import user ")])]),n("div",{staticClass:"col-6"},[t.users.length>0?n("button",{staticClass:"btn btn-sm btn-style9 btn-block",attrs:{type:"button"},on:{click:t.proses_user}},[t._v(" Proses User ")]):t._e()])])])]),n("div",{staticClass:"p-3"},[n("div",{staticClass:"rounded-lg shadow-lg"},[n("div",{staticClass:"row p-2"},[t._m(2),n("div",{staticClass:"col-6"},[n("button",{staticClass:"btn btn-sm btn-primary btn-block",attrs:{type:"button"},on:{click:t.importUser2}},[t._v(" import user ")])]),n("div",{staticClass:"col-6"},[t.users2.length>0?n("button",{staticClass:"btn btn-sm btn-style9 btn-block",attrs:{type:"button"},on:{click:t.proses_user2}},[t._v(" Proses User ")]):t._e()])])])]),t._m(3)])},e=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"col-12"},[n("p",{staticClass:"text-center p-2 font-bold"},[t._v("IMPORT SKPD DARI E-OFFICE")]),n("pre",[t._v("INSERT INTO skpd (nama_skpd,id_skpd)\nSELECT skpd_nama,skpd_id\nFROM tb_skpd;\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"col-12"},[n("p",{staticClass:"text-center p-2 font-bold"},[t._v(" IMPORT USER PEGAWAI DARI E-OFFICE ")]),n("pre",[t._v("INSERT INTO tbuser (nip,username, nama, skpd)\nSELECT pegawai_nip,pegawai_nip, pegawai_nama, skpd_id\nFROM tb_pegawai;\n            ")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"col-12"},[n("p",{staticClass:"text-center p-2 font-bold"},[t._v(" IMPORT USER PEGAWAI KONTRAK DARI E-OFFICE ")]),n("pre",[t._v("INSERT INTO tbuser (nip,username, nama, skpd)\nSELECT pegawaikontrak_nik,pegawaikontrak_nik, pegawaikontrak_nama, skpd_id\nFROM tb_pegawaikontrak;\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"col-12 p-4"},[n("pre",[t._v("  UPDATE tbuser SET password='25d55ad283aa400af464c76d713c07ad', gambar=\"https://balangankab.go.id/icon.png\"\n")]),n("pre",[t._v("DELETE E\n    FROM tbuser E\n         INNER JOIN\n    (\n        SELECT *, \n               RANK() OVER(PARTITION BY nip, \n                                        username \n               ORDER BY id) rank\n        FROM tbuser\n    ) T ON E.ID = t.ID\n    WHERE rank > 1;\n\n")])])}],o=n("ade3"),i=n("1da1"),c=(n("96cf"),n("d81d"),n("4160"),n("159b"),n("bc3a"),n("6821")),r=n.n(c),l=n("8aa5"),p=n.n(l),d=n("4b97"),u=(p.a.firestore(),new d["a"]),b={data:function(){return{skpds:[],users:[],users2:[]}},methods:{skpd:function(){var t,s,n=this,a=this;u.collection("skpd").doc().select("select nama_skpd from skpd").then((function(e){t=e,u.collection("tb_skpd").doc().select("select skpd_id,skpd_nama from tb_skpd").then((function(e){s=e,s=s.map((function(t){return{id:t.skpd_id,nama_skpd:t.skpd_nama}}));var o=n.$_.differenceBy(s,t,"nama_skpd");console.log(t),console.log(s),a.skpds=o,console.log("baru",o)}))}))},proses_skpd:function(){console.log(this.skpds),this.skpds.forEach((function(t){u.collection("skpd").doc().set({id_skpd:t.id,nama_skpd:t.nama_skpd}).then((function(t){console.log(t)}))}))},importUser:function(){var t,s,n=this,a=this;u.collection("tbuser").doc().select("select nip,nama from tbuser").then((function(e){t=e,u.collection("tb_pegawai").doc().select("select pegawai_nip as nip,pegawai_nama as nama from tb_pegawai").then((function(e){s=e;var o=n.$_.differenceBy(s,t,"nip");console.log(t),console.log(s),a.users=o,console.log("baru",o)}))}))},proses_user:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:for(console.log(t.users),n=0;n<t.users.length;n++)console.log(n,t.users[n]);case 2:case"end":return s.stop()}}),s)})))()},importUser2:function(){var t,s,n=this,a=this;u.collection("tbuser").doc().select("select nip,nama,skpd from tbuser").then((function(e){t=e,u.collection("tb_pegawaikontrak").doc().select("select pegawaikontrak_nik as nip,pegawaikontrak_nama as nama from tb_pegawaikontrak").then((function(e){s=e;var o=n.$_.differenceBy(s,t,"nip");console.log(t),console.log(s),a.users2=o,console.log("baru",o)}))}))},proses_user2:function(){console.log(this.users),this.users.forEach((function(t){var s;u.collection("tbuser").doc().set((s={nip:t.nip,nama:t.nama,nohp:"-",unit_kerja:"-"},Object(o["a"])(s,"unit_kerja",t.nip),Object(o["a"])(s,"password",r()(t.nip)),Object(o["a"])(s,"jabatan","-"),Object(o["a"])(s,"email","-"),Object(o["a"])(s,"pertama",!1),Object(o["a"])(s,"changepassword",!0),Object(o["a"])(s,"fcm","-"),Object(o["a"])(s,"gambar","http://balangankab.go.id/icon.png"),Object(o["a"])(s,"displayName",t.nama),Object(o["a"])(s,"atasan",null),Object(o["a"])(s,"unit",null),Object(o["a"])(s,"emails",null),s)).then((function(t){console.log(t)}))}))}},mounted:function(){},layout:"admin"},k=b,_=n("2877"),m=Object(_["a"])(k,a,e,!1,null,null,null);s["default"]=m.exports},d81d:function(t,s,n){"use strict";var a=n("23e7"),e=n("b727").map,o=n("1dde"),i=o("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=page-admin-import-index~31ecd969.40298b23.js.map