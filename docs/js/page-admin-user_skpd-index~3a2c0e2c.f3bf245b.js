(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-user_skpd-index~3a2c0e2c"],{c851:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"font-times"},[t.show?s("div",{staticClass:"row"},[s("div",{staticClass:"offset-sm-2 col-sm-8"},[s("form",{attrs:{action:""},on:{submit:function(e){e.preventDefault(),"insert"==t.aksi?t.insert():"update"==t.aksi?t.update():t.remove()}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("tbuser")]),s("div",{staticClass:"card-body"},[s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("id_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"id_",id:"id",name:"id",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.id},on:{input:function(e){e.target.composing||t.$set(t.vdata,"id",e.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("nip_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nip,expression:"vdata.nip"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"nip_",id:"nip",name:"nip",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.nip},on:{input:function(e){e.target.composing||t.$set(t.vdata,"nip",e.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("nama_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"nama_",id:"nama",name:"nama",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.nama},on:{input:function(e){e.target.composing||t.$set(t.vdata,"nama",e.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("skpd_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.skpd,expression:"vdata.skpd"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.vdata,"skpd",e.target.multiple?s:s[0])}}},t._l(t.skpd,(function(e,a){return s("option",{key:a+"skpd",domProps:{value:e.id_skpd}},[t._v(t._s(e.nama_skpd))])})),0)])]),s("br"),s("div",{staticClass:"text-center"},[s("button",{directives:[{name:"show",rawName:"v-show",value:"insert"==t.aksi,expression:"aksi=='insert'"}],staticClass:"btn btn-sm btn-outline-primary ml-2  font-times text-uppercase",attrs:{type:"submit"}},[s("span",{staticClass:"typcn typcn-edit"}),t._v(" "+t._s("insert"==t.aksi?"insert":"update"==t.aksi?"update":"remove"))]),s("button",{directives:[{name:"show",rawName:"v-show",value:"insert"!=t.aksi,expression:"aksi!='insert'"}],staticClass:"btn btn-sm btn-outline-success ml-2  font-times text-uppercase",attrs:{type:"submit"},on:{click:function(e){t.aksi="update"}}},[s("span",{staticClass:"typcn typcn-edit"}),t._v(" Update")]),s("button",{directives:[{name:"show",rawName:"v-show",value:"insert"!=t.aksi,expression:"aksi!='insert'"}],staticClass:"btn btn-sm btn-outline-danger ml-2  font-times text-uppercase",attrs:{type:"submit"},on:{click:function(e){t.aksi="remove"}}},[s("span",{staticClass:"typcn typcn-edit"}),t._v(" Delete")])])])])]),s("hr",{staticClass:"style13"})])]):t._e(),s("hr",{staticClass:"style16"}),t.ready?t._e():s("button",{staticClass:"btn btn-sm text-white bg-dark mr-2",staticStyle:{width:"40px",height:"30px"},attrs:{type:"button"},on:{click:function(e){t.show=!t.show}}},[s("span",{staticClass:"typcn typcn-arrow-maximise"})]),t.ready?s("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row p-2"},[s("div",{staticClass:"col-sm-4 text-center"},[s("button",{staticClass:"btn btn-sm text-white bg-dark mr-2",staticStyle:{width:"40px",height:"30px"},attrs:{type:"button"},on:{click:function(e){t.show=!t.show}}},[s("span",{staticClass:"typcn typcn-arrow-maximise"})]),s("button",{staticClass:"text-uppercase font-times btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(e){t.aksi="insert",t.clearInput(),t.show=!0}}},[s("span",{staticClass:"typcn typcn-plus"}),t._v("Tambah")])]),s("div",{staticClass:"col-sm-4 row"},[s("div",{staticClass:"col-6"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px",height:"30px","font-size":"12px"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?s:s[0]}}},[s("option",[t._v("10")]),s("option",[t._v("20")]),s("option",[t._v("50")]),s("option",[t._v("100")]),s("option",{domProps:{value:1e6}},[t._v("Semua")])])]),s("div",{staticClass:"col-3"}),s("div",{staticClass:"col-3"})]),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"sm-form "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"Cari data ..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),s("div",{staticClass:"sm-form "},[s("p",[t._v("SKPD : ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.skpds,expression:"skpds"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.skpds=e.target.multiple?s:s[0]}}},t._l(t.skpd,(function(e,a){return s("option",{key:a+"skpds",domProps:{value:e.id_skpd}},[t._v(t._s(e.nama_skpd))])})),0)])])])]),s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[s("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[s("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[s("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[s("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(e,a){return s("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(e),expression:"!less.includes(item)"}],key:a+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px",color:"black"},attrs:{scope:"col"},on:{click:function(s){return t.sort(e)}}},[s("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v(" "+t._s(e)+" "),t.orderWith?[s("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==e,expression:"orderBy==item"}]},[s("span",{staticClass:"typcn typcn-arrow-down"})])]:[s("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==e,expression:"orderBy==item"}]},[s("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),s("tbody",t._l(t.td,(function(e,a){return s("tr",{key:a+"td"},[s("td",[t._v(t._s(a+t.temp1+1))]),s("no-ssr",t._l(t.thnya,(function(i,n){return s("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(i),expression:"!less.includes(item2)"}],key:n+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s("skpd"==i?t.ambilskpd(e[i]):e[i])},on:{tap:function(s){t.ambil(e,a),t.modal=!0,t.aksi="update",t.show=!0}}})})),1)],1)})),0)])],s("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[s("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[s("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)]):s("div",[s("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},i=[],n=(s("4de4"),s("4795"),s("4160"),s("159b"),s("b64b"),s("d3b7"),s("25f0"),s("0d03"),s("5319"),s("ac1f"),s("c975"),s("841c"),s("d81d"),s("7db0"),s("fb6a"),s("bc3a"),s("8aa5"),s("4b97")),o=s("03a0"),r=new n["a"],c={components:{},data:function(){return{skpd:[],skpds:"",thbackground:"initial",thcolor:"asd",datanya:[],order:["id","nip","nama","skpd"],vdata:{},ready:!1,show:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id","id"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,aksi:"insert",formOn:!1,updateOn:!1}},methods:{test:function(){},ambilskpd:function(t){var e=this.skpd.filter((function(e){if(e.id_skpd==t)return e}));return e.length>0?e[0].nama_skpd:"-"},setSkpd:function(t){console.log(t),this.vdata.skpd=t.id_skpd,this.$forceUpdate()},insert:function(){delete this.vdata.id;var t=this;r.collection("tbuser").doc().set(this.vdata).then((function(e){console.log("berhasil"),alert("simpan data berhasil!"),t.refreshData()}))},update:function(){var t=this;r.collection("tbuser").doc().set(this.vdata).then((function(e){alert("update data berhasil!"),t.refreshData()}))},remove:function(){var t=this;confirm("Apakah yakin menghapus data?")&&r.collection("tbuser").doc(this.vdata.id)["delete"]().then((function(e){alert("delete data berhasil!"),t.refreshData()}))},refreshData:function(){var t=this;r.collection("tbuser").doc("*").get("*").then((function(e){setTimeout((function(){(function(){var t,e;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(s){s.style.position="relative";var a=document.createElement("div");a.innerHTML="&nbsp;",a.style.top=0,a.style.right=0,a.style.bottom=0,a.style.width="5px",a.style.position="absolute",a.style.cursor="col-resize",a.addEventListener("mousedown",(function(a){t=s,e=s.offsetWidth-a.pageX})),s.appendChild(a)})),document.addEventListener("mousemove",(function(s){t&&(t.style.width=e+s.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))})();var s=[],a={};e.forEach((function(i,n){t.order.forEach((function(t){a[t]=e[n][t]})),s.push(a),a={}})),t.datanya=s;var i=t.order;i=t.$_.difference(i,t.unless),t.thnya=i}),1e3)}))},ambil:function(t,e){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var s=this.$_.clone(t);console.log(s),this.vdata=s,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var e=Object.keys(this.vdata);e.forEach((function(e){t.vdata[e]=""}))},
//!==================
//! hapus dari sini
//! =================
checkedAll:function(){console.log(this.checkedItem)},susun:function(t){var e=t,s=["id","nip","nama","skpd"],a=[],i={};return e.forEach((function(t,n){s.forEach((function(t){i[t]=e[n][t]})),a.push(i),i={}})),a},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),this.$store.state.print2=this.susun(this.$store.state.print2),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString()));this.$store.state.print2=this.susun(this.td),alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},isDate:function(t){var e;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),e=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,e.test(t))},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:o})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:o,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,e=Object.keys(t[0]);return e=this.$_.difference(e,this.unless),e},td:function(){var t=this,e=this,s=this.datanya;//! order fungsi
if(this.orderBy.length>0){var a=this.orderWith?"asc":"desc";s=this.$_.orderBy(s,[this.orderBy],[a])}//! search fungsi
var i=this.thnya;return s=s.filter((function(e,s,a){var n=!1;if(i.filter((function(s){"string"==typeof e[s]?-1!=e[s].toLowerCase().indexOf(t.search.toLowerCase())&&(n=!0):null!=e[s]&&-1!=e[s].toString().indexOf(t.search)&&(n=!0)})),n)return e})),//! cari shortcut contoh
s=s.filter((function(s,a,i){return console.log(s.skpd==e.skpds),s["skpd"]==t.skpds||""==t.skpds?s:void 0})),s=s.map((function(t){var s={},a=Object.keys(t);return a=e.$_.difference(a,e.unless),a.forEach((function(i,n){a.find((function(t){return t==e.date[n]})),s[i]=t[i]})),s})),s=s.slice(this.temp1,this.temp2),s}},layout:"admin",mounted:function(){var t=this;r.collection("skpd").doc().select("select * from skpd").then((function(e){console.log(e),t.skpd=e,t.$forceUpdate()})),this.refreshData()}},l=c,d=s("2877"),p=Object(d["a"])(l,a,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=page-admin-user_skpd-index~3a2c0e2c.f3bf245b.js.map