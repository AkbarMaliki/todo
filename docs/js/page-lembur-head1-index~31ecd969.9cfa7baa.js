(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-lembur-head1-index~31ecd969"],{"03a0":function(t,e,n){var a=n("25bb"),r=n("d309");t.exports={distanceInWords:a(),format:r()}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1d1c":function(t,e,n){var a=n("23e7"),r=n("83ab"),i=n("37e8");a({target:"Object",stat:!0,forced:!r,sham:!r},{defineProperties:i})},"25bb":function(t,e){function n(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function e(e,n,a){var r;return a=a||{},r="string"===typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),a.addSuffix?a.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:e}}t.exports=n},"4de4":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").filter,i=n("1dde"),o=i("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("4160"),n("159b"),n("dbb4"),n("1d1c"),n("7a82");var a=n("ade3");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"841c":function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),i=n("1d80"),o=n("129f"),s=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var i=r(t),u=String(this),c=i.lastIndex;o(c,0)||(i.lastIndex=0);var d=s(i,u);return o(i.lastIndex,c)||(i.lastIndex=c),null===d?-1:d.index}]}))},b709:function(t,e,n){t.exports=n.p+"img/nofound.2251b368.png"},c8ff:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-sm btn-style1 font-bold text-uppercase underline",staticStyle:{position:"absolute","z-index":"100"},attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[a("span",{staticClass:"text-xl typcn typcn-arrow-left"}),t._v(" Kembali ")]),a("svg",{staticClass:"animated fadeInDown",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[a("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})]),a("div",{staticClass:"card animate__animated animate__zoomIn"},[a("div",{staticClass:"card-header"},[t._v("LIST APPROVE UNIT HEAD")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"search"}},[t._v("Your search")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._l(t.datanya,(function(e,r){return a("div",{key:r+"datanya",staticClass:"p-3 rounded-lg shadow-1 border-green-400  mt-1",staticStyle:{border:"1px solid"},on:{click:function(n){return t.$router.push("/lembur/head1/approve?id="+e.id)}}},[a("tr",[a("td",[t._v("NIP")]),a("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),a("td",[t._v(t._s(e.nip))])]),"-"!=e.from.gambar?a("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid rounded-circle float-right",staticStyle:{"margin-top":"20px",width:"40px",height:"40px"},attrs:{src:e.from.gambar}}):a("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid rounded-circle float-right",staticStyle:{"margin-top":"20px",width:"40px",height:"40px"},attrs:{src:n("b709")}}),t._v(" Nama : "+t._s(e.nama)+" "),a("br"),t._v(" Unit : "+t._s(e.from.unit.nama_unit)+" "),a("tr",[a("td",[t._v("Tanggal Ijin Keluar")]),a("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),a("td",[t._v(t._s(t.format(e.tanggal_ijin)))])]),a("tr",{directives:[{name:"show",rawName:"v-show",value:-1==e.lama_keluar.indexOf("undefined"),expression:"item.lama_keluar.indexOf('undefined')==-1"}]},[a("td",[t._v("Lama Ijin Keluar")]),a("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),a("td",[t._v(t._s(e.lama_keluar)+" Jam")])]),a("tr",[a("td",[t._v("Jenis Ijin Keluar")]),a("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),a("td",[t._v(t._s(e.jenis_pekerjaan))])]),a("tr",[a("td",[t._v("Rincian Ijin Keluar")]),a("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),a("td",[t._v(t._s(e.keperluan))])]),a("span",{staticClass:"text-sm float-right"},[t._v(t._s(t.distanceToNow(e.createAt.toDate()))+" Yang lalu")]),a("br"),a("br")])}))],2)])])},r=[],i=n("5530"),o=(n("0d03"),n("4de4"),n("c975"),n("841c"),n("ac1f"),n("d81d"),n("bc3a"),n("8aa5")),s=n.n(o),u=n("03a0"),c=s.a.firestore(),d={data:function(){return{datanya:[],search:""}},methods:{distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:u,includeSeconds:!0})},format:function(t){return this.$datefns.format(new Date(t),"DD MMMM YYYY",{locale:u})}},computed:{td:function(){var t=this,e=this.datanya;return e=e.filter((function(e){if(-1!=e.tanggalnya.indexOf(t.search))return e})),e}},mounted:function(){var t=this;c.collectionGroup("lembur").get().then((function(e){var n=e.docs.map((function(e){return Object(i["a"])(Object(i["a"])({id:e.id},e.data()),{},{tanggalnya:t.format(e.data().tanggal_ijin)})}));n=n.filter((function(t){if(1==t.status)return t})),n=n.filter((function(e){if(e.to.uid==t.$store.state.users.uid)return e})),n=t.$_.orderBy(n,["createAt"],["desc"]),t.datanya=n,console.log(n)}))},layout:"lembur"},l=d,f=n("2877"),p=Object(f["a"])(l,a,r,!1,null,null,null);e["default"]=p.exports},d309:function(t,e,n){var a=n("90e5");function r(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],n=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],o=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],s=["AM","PM"],u=["am","pm"],c=["a.m.","p.m."],d={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return o[t.getDay()]},A:function(t){return t.getHours()/12>=1?s[1]:s[0]},a:function(t){return t.getHours()/12>=1?u[1]:u[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}},l=["M","D","DDD","d","Q","W"];return l.forEach((function(t){d[t+"o"]=function(e,n){return i(n[t](e))}})),{formatters:d,formattingTokensRegExp:a(d)}}function i(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=r},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,i=n("1dde"),o=i("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,n){var a=n("23e7"),r=n("83ab"),i=n("56ef"),o=n("fc6a"),s=n("06cf"),u=n("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,a=o(t),r=s.f,c=i(a),d={},l=0;while(c.length>l)n=r(a,e=c[l++]),void 0!==n&&u(d,e,n);return d}})},e439:function(t,e,n){var a=n("23e7"),r=n("d039"),i=n("fc6a"),o=n("06cf").f,s=n("83ab"),u=r((function(){o(1)})),c=!s||u;a({target:"Object",stat:!0,forced:c,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})}}]);
//# sourceMappingURL=page-lembur-head1-index~31ecd969.9cfa7baa.js.map