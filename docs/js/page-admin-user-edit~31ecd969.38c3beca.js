(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-user-edit~31ecd969"],{"1d1c":function(t,a,e){var n=e("23e7"),s=e("83ab"),i=e("37e8");n({target:"Object",stat:!0,forced:!s,sham:!s},{defineProperties:i})},"4de4":function(t,a,e){"use strict";var n=e("23e7"),s=e("b727").filter,i=e("1dde"),r=i("filter");n({target:"Array",proto:!0,forced:!r},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));e("b64b"),e("a4d3"),e("4de4"),e("e439"),e("4160"),e("159b"),e("dbb4"),e("1d1c"),e("7a82");var n=e("ade3");function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},"670f":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"btn btn-md btn-danger float-left absolute m-3",attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[e("span",{staticClass:"typcn typcn-arrow-left"})]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#000b76","fill-opacity":"1",d:"M0,224L0,224L180,224L180,288L360,288L360,32L540,32L540,160L720,160L720,64L900,64L900,32L1080,32L1080,288L1260,288L1260,64L1440,64L1440,0L1260,0L1260,0L1080,0L1080,0L900,0L900,0L720,0L720,0L540,0L540,0L360,0L360,0L180,0L180,0L0,0L0,0Z"}})]),e("div",{staticClass:"card animate__animated animate__backInRight"},[e("div",{staticClass:"card-header text-center mx-auto"}),e("div",{staticClass:"card-body"},[e("hr",{staticClass:"style13"}),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-business-card text-lg"}),t._v(" "),e("label",{attrs:{for:"nip"}},[t._v("nip")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nip,expression:"vdata.nip"}],staticClass:"form-control",attrs:{type:"text",id:"nip",name:"nip",required:""},domProps:{value:t.vdata.nip},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nip",a.target.value)}}})]),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-user-add text-lg"}),t._v(" "),e("label",{attrs:{for:"nama"}},[t._v("Nama")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control",attrs:{type:"text",id:"nama",name:"nama",required:""},domProps:{value:t.vdata.nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama",a.target.value)}}})]),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-group text-lg"}),t._v(" "),e("label",{attrs:{for:"unit"}},[t._v("Unit")]),e("v-select",{attrs:{options:t.units,label:"nama_unit"},model:{value:t.vdata.unit,callback:function(a){t.$set(t.vdata,"unit",a)},expression:"vdata.unit"}})],1),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-key-outline text-lg"}),t._v(" "),e("label",{attrs:{for:"nama"}},[t._v("Bagian")]),e("v-select",{attrs:{options:t.bagians,label:"nama_unit"},model:{value:t.vdata.bagian,callback:function(a){t.$set(t.vdata,"bagian",a)},expression:"vdata.bagian"}})],1),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-key text-lg"}),t._v(" "),e("label",{attrs:{for:"nama"}},[t._v("Hak akses")]),e("v-select",{attrs:{options:t.akses,label:"nama_unit"},model:{value:t.vdata.auth,callback:function(a){t.$set(t.vdata,"auth",a)},expression:"vdata.auth"}})],1),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-key-outline text-lg"}),t._v(" "),e("label",{attrs:{for:"nama"}},[t._v("Ganti Password :")]),e("v-select",{attrs:{options:t.ganti_p,label:"nama_unit"},model:{value:t.vdata.changepassword,callback:function(a){t.$set(t.vdata,"changepassword",a)},expression:"vdata.changepassword"}})],1),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-pencil text-lg"}),t._v(" "),e("label",{attrs:{for:"nama"}},[t._v("Ganti TTD :")]),e("v-select",{attrs:{options:t.ganti_ttd,label:"nama_unit"},model:{value:t.vdata.changettd,callback:function(a){t.$set(t.vdata,"changettd",a)},expression:"vdata.changettd"}})],1),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-user text-lg"}),t._v(" "),e("label",{attrs:{for:"nama"}},[t._v("Set User balik :")]),e("v-select",{attrs:{options:t.ganti_user,label:"nama_unit"},model:{value:t.vdata.pertama,callback:function(a){t.$set(t.vdata,"pertama",a)},expression:"vdata.pertama"}})],1),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-phone text-lg"}),t._v(" "),e("label",{attrs:{for:"nohp"}},[t._v("NO WA (optional)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nohp,expression:"vdata.nohp"}],staticClass:"form-control",attrs:{type:"text",id:"nohp",name:"nohp"},domProps:{value:t.vdata.nohp},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nohp",a.target.value)}}})]),e("hr",{staticClass:"style2"}),t.email?e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-mail text-lg"}),t._v(" "),e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.emailnotif,expression:"vdata.emailnotif"}],staticClass:"form-control",attrs:{type:"email",id:"email",name:"email",required:""},domProps:{value:t.vdata.emailnotif},on:{input:function(a){a.target.composing||t.$set(t.vdata,"emailnotif",a.target.value)}}})]):t._e(),e("br"),e("br"),e("br"),t.vdata.nama.length>0&&t.vdata.unit?e("button",{staticClass:"btn btn-sm btn-style9 float-right",attrs:{type:"button"},on:{click:function(a){return t.simpan()}}},[t._v(" Simpan "),e("span",{staticClass:"typcn typcn-edit"})]):t._e()])]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#000b76","fill-opacity":"1",d:"M0,224L0,224L180,224L180,288L360,288L360,32L540,32L540,160L720,160L720,64L900,64L900,32L1080,32L1080,288L1260,288L1260,64L1440,64L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"}})])])},s=[],i=e("5530"),r=(e("d81d"),e("bc3a"),e("8aa5")),o=e.n(r),l=o.a.firestore(),c={data:function(){return{vdata:{nama:"",unit:""},akses:["admin","user"],bagians:["pegawai","sekertaris","pimpinan"],ganti_p:["true","false"],ganti_ttd:["true","false"],ganti_user:["true","false"],units:[],unit:"",imageData:null,datauser:[],picture:null,email:!1,uploadValue:0}},beforeMount:function(){},layout:"admin",methods:{getData:function(){var t=this;console.log(this.$route.query.id),l.collection("users").doc(this.$route.query.id).get().then((function(a){var e=Object(i["a"])({id:a.id},a.data());t.vdata=e,t.$forceUpdate()}))},simpan:function(){l.collection("users").doc(this.$route.query.id).set(this.vdata,{merge:!0}).then((function(t){alert("Berhasil Simpan")}))}},mounted:function(){var t=this;this.getData(),l.collection("unit").get().then((function(a){var e=a.docs.map((function(t){return Object(i["a"])({id:t.id},t.data())}));e=_.orderBy(e,["nama_unit"],["asc"]),t.units=e,console.log(t.units)}))}},d=c,u=e("2877"),p=Object(u["a"])(d,n,s,!1,null,null,null);a["default"]=p.exports},d81d:function(t,a,e){"use strict";var n=e("23e7"),s=e("b727").map,i=e("1dde"),r=i("map");n({target:"Array",proto:!0,forced:!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,a,e){var n=e("23e7"),s=e("83ab"),i=e("56ef"),r=e("fc6a"),o=e("06cf"),l=e("8418");n({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var a,e,n=r(t),s=o.f,c=i(n),d={},u=0;while(c.length>u)e=s(n,a=c[u++]),void 0!==e&&l(d,a,e);return d}})},e439:function(t,a,e){var n=e("23e7"),s=e("d039"),i=e("fc6a"),r=e("06cf").f,o=e("83ab"),l=s((function(){r(1)})),c=!o||l;n({target:"Object",stat:!0,forced:c,sham:!o},{getOwnPropertyDescriptor:function(t,a){return r(i(t),a)}})}}]);
//# sourceMappingURL=page-admin-user-edit~31ecd969.38c3beca.js.map