(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-lembur-ijin-lembur~31ecd969"],{"1d1c":function(t,e,a){var r=a("23e7"),n=a("83ab"),s=a("37e8");r({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperties:s})},"4de4":function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").filter,s=a("1dde"),i=s("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("4160"),a("159b"),a("dbb4"),a("1d1c"),a("7a82");var r=a("ade3");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("d039"),s=a("e8b5"),i=a("861d"),o=a("7b0b"),l=a("50c4"),u=a("8418"),c=a("65f0"),d=a("1dde"),m=a("b622"),v=a("2d00"),p=m("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",b=v>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=d("concat"),j=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},k=!b||!g;r({target:"Array",proto:!0,forced:k},{concat:function(t){var e,a,r,n,s,i=o(this),d=c(i,0),m=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?i:arguments[e],j(s)){if(n=l(s.length),m+n>f)throw TypeError(h);for(a=0;a<n;a++,m++)a in s&&u(d,m,s[a])}else{if(m>=f)throw TypeError(h);u(d,m++,s)}return d.length=m,d}})},b4e8:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("button",{staticClass:"btn btn-sm btn-style1 font-bold text-uppercase underline",staticStyle:{position:"absolute"},attrs:{type:"button"},on:{click:function(e){return t.$router.push("/lembur")}}},[r("span",{staticClass:"text-xl typcn typcn-arrow-left"}),t._v(" Kembali ")]),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"}})]),r("p",{staticClass:"text-center"},[t._v("FORM IJIN KELUAR")]),r("div",{staticClass:"card animate__animated animate__backInDown"},[r("div",{staticClass:"card-header text-center mx-auto"},[r("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"img-fluid rounded-top z-depth-1",staticStyle:{height:"100px"},attrs:{src:a("c8f1"),alt:""}})]),r("div",{staticClass:"card-body"},[r("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.requesting()}}},[r("div",{staticClass:"sm-form"},[r("label",{attrs:{for:"keperluan"}},[t._v("Ijin : ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.ijin,expression:"vdata.ijin"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.vdata,"ijin",e.target.multiple?a:a[0])}}},[r("option",[t._v("Tidak Masuk Kerja")]),r("option",[t._v("Ijin Terlambat Datang")]),r("option",[t._v("Ijin Keluar Kantor")]),r("option",[t._v("Ijin Pulang Cepat")])])]),r("div",{staticClass:"sm-form"},[r("label",{attrs:{for:"keperluan"}},[t._v("Keperluan : ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.keperluan,expression:"vdata.keperluan"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"keperluan",name:"keperluan",rows:"2",placeholder:"isi keperluan",required:""},domProps:{value:t.vdata.keperluan},on:{input:function(e){e.target.composing||t.$set(t.vdata,"keperluan",e.target.value)}}})]),r("div",{staticClass:"sm-form"},[r("label",{staticClass:"pl-2",attrs:{for:"tanggal"}},[t._v("Tanggal Ijin ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tanggal_ijin,expression:"vdata.tanggal_ijin"}],staticClass:"form-control form-control-sm",attrs:{type:"date",id:"tanggal_ijin",name:"tanggal",placeholder:"tanggal",required:""},domProps:{value:t.vdata.tanggal_ijin},on:{input:function(e){e.target.composing||t.$set(t.vdata,"tanggal_ijin",e.target.value)}}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:"Tidak Masuk Kerja"!=t.vdata.ijin,expression:"vdata.ijin != 'Tidak Masuk Kerja'"}]},[r("div",{staticClass:"sm-form"},[r("label",{attrs:{for:"jam1"}},[t._v("Dari Jam")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.jam1,expression:"vdata.jam1"}],staticClass:"form-control form-control-sm",attrs:{type:"time",id:"jam1",name:"jam1",placeholder:"jam"},domProps:{value:t.vdata.jam1},on:{input:function(e){e.target.composing||t.$set(t.vdata,"jam1",e.target.value)}}})]),r("div",{staticClass:"sm-form"},[r("label",{attrs:{for:"jam2"}},[t._v("S/D Jam")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.jam2,expression:"vdata.jam2"}],staticClass:"form-control form-control-sm",attrs:{type:"time",id:"jam2",name:"jam2",placeholder:"s/d jam"},domProps:{value:t.vdata.jam2},on:{input:function(e){e.target.composing||t.$set(t.vdata,"jam2",e.target.value)}}})])]),t._m(0),r("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tos,expression:"vdata.tos"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.vdata,"tos",e.target.multiple?a:a[0])}}},t._l(t.heads,(function(e,a){return r("option",{key:a+"option",domProps:{value:e}},[t._v(t._s(e.nama))])})),0),r("br"),t._m(1)])])]),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"}})])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"pl-2"},[t._v("Disposisi ke :")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-sm btn-style9 float-right",attrs:{type:"submit"}},[t._v(" Request "),a("span",{staticClass:"typcn typcn-edit"})])}],s=a("5530"),i=(a("99af"),a("0d03"),a("4795"),a("d81d"),a("bc3a"),a("8aa5")),o=a.n(i),l=a("4b97"),u=o.a.firestore(),c=new l["a"],d={data:function(){return{vdata:{lama_keluar:1},head_nama:"",units:[],units2:[],heads:[],ada:!1,ready:!1}},methods:{pilih:function(){alert("y")},requesting:function(){var t=this,e=this;navigator.onLine?c.collection("ijin_keluar").doc().select("select id from ijin_keluar where froms='".concat(this.$store.state.users.id,"' AND status='2'")).then((function(a){if(a.length>0)e.$router.push("/lembur/status");else{var r=JSON.parse(JSON.stringify(t.vdata.tos));t.vdata.tos=t.vdata.tos.id,t.vdata.lama_keluar="".concat(t.vdata.jam1," s/d ").concat(t.vdata.jam2),t.vdata.createAt=new Date,console.log("this.vdata",t.vdata),confirm("apakah data yang dimasukkan sudah benar?")&&c.collection("ijin_keluar").doc().set(Object(s["a"])({froms:e.$store.state.users.id,status:2},t.vdata)).then((function(a){c.collection("tbuser").doc().select("select * from tbuser where id='".concat(r.id,"'")).then((function(a){var r="";r="/lembur/head2",alert("Ijin Keluar berhasil di request!"),t.$store.dispatch("notifikasi",{title:"Permintaan approve Ijin Keluar!",body:"Ijin "+e.vdata.ijin+" oleh "+e.$store.state.users.nama,link:r,from:e.$store.state.users,to:a[0]}),e.$router.push("/lembur/status")}))}))}})):alert("Cek jaringan anda !")},next2:function(){var t=this,e=this;this.vdata.from=this.$store.state.users,this.vdata.lama_keluar="".concat(this.vdata.jam1," s/d ").concat(this.vdata.jam2),confirm("apakah data yang dimasukkan sudah benar?")&&(this.vdata.createAt=new Date,c.collection("ijin_keluar").doc().set(Object(s["a"])({status:1},this.vdata)).then((function(a){console.log(a);var r="";r="/lembur/head2",alert("Ijin Keluar berhasil di request!"),t.$store.dispatch("notifikasi",{title:"Permintaan approve Ijin Keluar!",body:"Ijin Keluar oleh "+t.$store.state.users.nama,link:r,from:t.$store.state.users,to:e.vdata.to}),t.$router.push("/lembur/status")})))}},mounted:function(){var t,e=this,a=this;c.collection("tbuser").doc().select("select * from tbuser where id='".concat(this.$store.state.users.id,"'")).then((function(t){console.log("tbuser",t);var a=t[0];a.nama&&a.nip||(alert("Tambahkan dulu nama dan nip pegawai sebelum melakukan permintaan ijin keluar!"),e.$router.push("/setting")),"NULL"==a.atasan||a.atasan})),t="unit_head"==this.$store.state.users.bagian?"select * from tbuser where skpd='".concat(this.$store.state.users.skpd,"' AND (bagian='deputy')"):"select * from tbuser where skpd='".concat(this.$store.state.users.skpd,"' AND (bagian='unit_head')"),c.collection("tbuser").doc().select("".concat(t)).then((function(t){a.heads=t,t.length>0||(alert("Atasan/Desposisi untuk akun belum di set, silahkan minta admin untuk menambahkan Atasan/Desposisi"),a.$router.push("/lembur")),a.$forceUpdate()})),this.vdata.tos=a.$store.state.users.atasan?JSON.parse(a.$store.state.users.atasan):"";var r=new Date,n=r.getDate()+1,s=r.getMonth()+1,i=r.getFullYear();n<10&&(n="0"+n),s<10&&(s="0"+s),r=i+"-"+s+"-"+n,setTimeout((function(){a.vdata.nip=e.$store.state.users.nip,a.vdata.nama=e.$store.state.users.nama,a.vdata.unit=e.$store.state.users.unit,a.vdata.status=2,a.$forceUpdate()}),1e3)},beforeMount:function(){var t=this,e=this;u.collection("users").where("bagian","==","unit_head").get().then((function(e){var a=e.docs.map((function(t){return Object(s["a"])({uid:t.id},t.data())}));t.units=a})),u.collection("users").where("bagian","==","deputy").get().then((function(e){var a=e.docs.map((function(t){return Object(s["a"])({uid:t.id},t.data())}));t.units2=a})),c.collection("ijin_keluar").doc().select("select * from ijin_keluar where froms='".concat(this.$store.state.users.id,"' AND status='2'")).then((function(t){console.log("ijin_kelaur",t),t.length>0&&e.$router.push("/lembur/status")}))},layout:"lembur"},m=d,v=a("2877"),p=Object(v["a"])(m,r,n,!1,null,null,null);e["default"]=p.exports},c8f1:function(t,e,a){t.exports=a.p+"img/kopdiskominfo.bdcc1330.png"},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,a){var r=a("23e7"),n=a("83ab"),s=a("56ef"),i=a("fc6a"),o=a("06cf"),l=a("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,r=i(t),n=o.f,u=s(r),c={},d=0;while(u.length>d)a=n(r,e=u[d++]),void 0!==a&&l(c,e,a);return c}})},e439:function(t,e,a){var r=a("23e7"),n=a("d039"),s=a("fc6a"),i=a("06cf").f,o=a("83ab"),l=n((function(){i(1)})),u=!o||l;r({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})}}]);
//# sourceMappingURL=page-lembur-ijin-lembur~31ecd969.ac5aff2f.js.map