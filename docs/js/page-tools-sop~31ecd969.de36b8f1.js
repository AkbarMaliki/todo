(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-tools-sop~31ecd969"],{"03a0":function(t,a,e){var n=e("25bb"),r=e("d309");t.exports={distanceInWords:n(),format:r()}},"0801":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"btn btn-sm btn-style1 font-bold text-uppercase underline text-white",staticStyle:{position:"absolute"},attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[e("span",{staticClass:"text-xl typcn typcn-arrow-left"}),t._v(" Kembali ")]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#000b76","fill-opacity":"1",d:"M0,288L0,320L144,320L144,160L288,160L288,160L432,160L432,128L576,128L576,32L720,32L720,160L864,160L864,288L1008,288L1008,256L1152,256L1152,64L1296,64L1296,32L1440,32L1440,0L1296,0L1296,0L1152,0L1152,0L1008,0L1008,0L864,0L864,0L720,0L720,0L576,0L576,0L432,0L432,0L288,0L288,0L144,0L144,0L0,0L0,0Z"}})]),e("br"),e("div",{staticClass:"p-3"},[t._m(0),e("br"),e("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(a){t.edit=!t.edit}}},[e("span",{staticClass:"typcn typcn-plus"}),t._v(" Tambah ")]),e("a",{staticClass:"float-right btn-lg btn-success",attrs:{href:"https://akbarmaliki.github.io/infolayanansjs/#/excel?data="+JSON.stringify(t.datanya).split("&").join("%26")}},[e("span",{staticClass:"typcn typcn-chart-bar"})]),e("br"),e("br"),t.edit?e("div",[e("br"),e("form",{staticClass:"animate__animated animate__fadeIn",attrs:{action:""},on:{submit:function(a){return a.preventDefault(),t.simpanvicon(a)}}},[e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"judul"}},[t._v("Judul / Perihal")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.judul,expression:"vdata.judul"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"judul",name:"judul",placeholder:"judul"},domProps:{value:t.vdata.judul},on:{input:function(a){a.target.composing||t.$set(t.vdata,"judul",a.target.value)}}})]),e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"pemateri"}},[t._v("Nama")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.pemateri,expression:"vdata.pemateri"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"pemateri",name:"pemateri",placeholder:"pemateri"},domProps:{value:t.vdata.pemateri},on:{input:function(a){a.target.composing||t.$set(t.vdata,"pemateri",a.target.value)}}})]),e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"tanggal"}},[t._v("Tanggal")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tanggal,expression:"vdata.tanggal"}],staticClass:"form-control form-control-sm",attrs:{type:"date",id:"tanggal",name:"tanggal",placeholder:"tanggal"},domProps:{value:t.vdata.tanggal},on:{input:function(a){a.target.composing||t.$set(t.vdata,"tanggal",a.target.value)}}})]),e("br"),t._m(1)])]):t._e(),t._l(t.datanya,(function(a,n){return e("div",{key:n,staticClass:"shadow-lg rounded-lg p-2 mt-2",staticStyle:{border:"1px solid grey"}},[e("button",{staticClass:"btn btn-sm btn-danger  float-right",attrs:{type:"button"},on:{click:function(e){return t.hapus(a.id)}}},[t._v("x")]),e("p",{staticClass:"font-bold"},[e("span",[t._v("Perihal :")]),e("span",{staticClass:"text-capitalize pl-2"},[t._v(t._s(a.judul))])]),e("p",{staticClass:"font-bold"},[e("span",[t._v("Tanggal :")]),e("span",{staticClass:"text-capitalize pl-2"},[t._v(t._s(a.tanggal))])]),e("p",{staticClass:"font-bold"},[e("span",[t._v("Pemateri :")]),e("span",{staticClass:"text-capitalize pl-2"},[t._v(t._s(a.pemateri))])])])})),e("br")],2)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"text-center font-times text-xl"},[t._v("JADWAL SOP "),e("span",{staticClass:"typcn typcn-document-text"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-sm btn-style9",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Simpan ")])}],o=e("5530"),s=(e("0d03"),e("d81d"),e("bc3a"),e("8aa5")),i=e.n(s),u=e("4b97"),c=e("03a0"),l=i.a.firestore(),d=(new u["a"],{data:function(){return{vdata:{},edit:!1,datanya:[]}},methods:{format:function(t){return this.$datefns.format(new Date(t),"dddd DD MMMM YYYY",{locale:c})},simpanvicon:function(){this.vdata.tanggal=this.format(this.vdata.tanggal),this.vdata.createdAt=new Date,l.collection("sop").doc().set(this.vdata,{merge:!0}).then((function(t){}))},hapus:function(t){l.collection("sop").doc(t)["delete"]().then((function(t){}))}},mounted:function(){var t=this;l.collection("sop").onSnapshot((function(a){var e=a.docs.map((function(t){return Object(o["a"])({id:t.id},t.data())}));t.datanya=e}))}}),p=d,f=e("2877"),m=Object(f["a"])(p,n,r,!1,null,null,null);a["default"]=m.exports},"1d1c":function(t,a,e){var n=e("23e7"),r=e("83ab"),o=e("37e8");n({target:"Object",stat:!0,forced:!r,sham:!r},{defineProperties:o})},"25bb":function(t,a){function e(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function a(a,e,n){var r;return n=n||{},r="string"===typeof t[a]?t[a]:1===e?t[a].one:t[a].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:a}}t.exports=e},"4de4":function(t,a,e){"use strict";var n=e("23e7"),r=e("b727").filter,o=e("1dde"),s=o("filter");n({target:"Array",proto:!0,forced:!s},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));e("b64b"),e("a4d3"),e("4de4"),e("e439"),e("4160"),e("159b"),e("dbb4"),e("1d1c"),e("7a82");var n=e("ade3");function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},d309:function(t,a,e){var n=e("90e5");function r(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],a=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],s=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],i=["AM","PM"],u=["am","pm"],c=["a.m.","p.m."],l={MMM:function(a){return t[a.getMonth()]},MMMM:function(t){return a[t.getMonth()]},dd:function(t){return e[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return s[t.getDay()]},A:function(t){return t.getHours()/12>=1?i[1]:i[0]},a:function(t){return t.getHours()/12>=1?u[1]:u[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}},d=["M","D","DDD","d","Q","W"];return d.forEach((function(t){l[t+"o"]=function(a,e){return o(e[t](a))}})),{formatters:l,formattingTokensRegExp:n(l)}}function o(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=r},d81d:function(t,a,e){"use strict";var n=e("23e7"),r=e("b727").map,o=e("1dde"),s=o("map");n({target:"Array",proto:!0,forced:!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,a,e){var n=e("23e7"),r=e("83ab"),o=e("56ef"),s=e("fc6a"),i=e("06cf"),u=e("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var a,e,n=s(t),r=i.f,c=o(n),l={},d=0;while(c.length>d)e=r(n,a=c[d++]),void 0!==e&&u(l,a,e);return l}})},e439:function(t,a,e){var n=e("23e7"),r=e("d039"),o=e("fc6a"),s=e("06cf").f,i=e("83ab"),u=r((function(){s(1)})),c=!i||u;n({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(t,a){return s(o(t),a)}})}}]);
//# sourceMappingURL=page-tools-sop~31ecd969.de36b8f1.js.map