(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-map-circle~page-map-leaflet~page-map-line~page-test-leaflet~page-test-leaflet3~0ed798d9"],{"0dbd":function(t,e,i){"use strict";var n=i("e11e"),s=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},o=function(t,e,i,o){var a=function(o){var a="set"+s(o),r=i[o].type===Object||i[o].type===Array||Array.isArray(i[o].type);i[o].custom&&t[a]?t.$watch(o,(function(e,i){t[a](e,i)}),{deep:r}):"setOptions"===a?t.$watch(o,(function(t,i){Object(n["setOptions"])(e,t)}),{deep:r}):e[a]&&t.$watch(o,(function(t,i){e[a](t)}),{deep:r})};for(var r in i)a(r)},a=function(t){var e={};for(var i in t){var n=t[i];null!==n&&void 0!==n&&(e[i]=n)}return e},r=function(t,e){var i=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var n=a(i);t=a(t);var s=e.$options.props;for(var o in t){var r=s[o]?s[o].default&&"function"===typeof s[o].default?s[o].default.call():s[o].default:Symbol("unique"),l=!1;l=Array.isArray(r)?JSON.stringify(r)===JSON.stringify(t[o]):r===t[o],n[o]&&!l?(console.warn(o+" props is overriding the value passed in the options props"),n[o]=t[o]):n[o]||(n[o]=t[o])}return n},l=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},p={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){var i=this.$parent.mapObject.attributionControl;i.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},c={props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}},u={mixins:[p,c],props:{lStyle:{type:Object,custom:!0,default:null},stroke:{type:Boolean,custom:!0,default:!0},color:{type:String,custom:!0,default:"#3388ff"},weight:{type:Number,custom:!0,default:3},opacity:{type:Number,custom:!0,default:1},lineCap:{type:String,custom:!0,default:"round"},lineJoin:{type:String,custom:!0,default:"round"},dashArray:{type:String,custom:!0,default:null},dashOffset:{type:String,custom:!0,default:null},fill:{type:Boolean,custom:!0,default:!1},fillColor:{type:String,custom:!0,default:"#3388ff"},fillOpacity:{type:Number,custom:!0,default:.2},fillRule:{type:String,custom:!0,default:"evenodd"},className:{type:String,custom:!0,default:null}},mounted:function(){if(this.pathOptions=Object.assign({},this.layerOptions,this.interactiveLayerOptions,{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,lineCap:this.lineCap,lineJoin:this.lineJoin,dashArray:this.dashArray,dashOffset:this.dashOffset,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,fillRule:this.fillRule,className:this.className}),this.lStyle)for(var t in console.warn("lStyle is deprecated and is going to be removed in the next major version"),this.lStyle)this.pathOptions[t]=this.lStyle[t]},beforeDestroy:function(){this.parentContainer?this.parentContainer.removeLayer(this):console.error("Missing parent container")},methods:{setLStyle:function(t){this.mapObject.setStyle(t)},setStroke:function(t){this.mapObject.setStyle({stroke:t})},setColor:function(t){this.mapObject.setStyle({color:t})},setWeight:function(t){this.mapObject.setStyle({weight:t})},setOpacity:function(t){this.mapObject.setStyle({opacity:t})},setLineCap:function(t){this.mapObject.setStyle({lineCap:t})},setLineJoin:function(t){this.mapObject.setStyle({lineJoin:t})},setDashArray:function(t){this.mapObject.setStyle({dashArray:t})},setDashOffset:function(t){this.mapObject.setStyle({dashOffset:t})},setFill:function(t){this.mapObject.setStyle({fill:t})},setFillColor:function(t){this.mapObject.setStyle({fillColor:t})},setFillOpacity:function(t){this.mapObject.setStyle({fillOpacity:t})},setFillRule:function(t){this.mapObject.setStyle({fillRule:t})},setClassName:function(t){this.mapObject.setStyle({className:t})}}},f={mixins:[u],props:{fill:{type:Boolean,custom:!0,default:!0},radius:{type:Number,default:null}},mounted:function(){this.circleOptions=Object.assign({},this.pathOptions,{radius:this.radius})}},h={props:{options:{type:Object,default:function(){return{}}}}},d={name:"LCircle",mixins:[f,h],props:{latLng:{type:[Object,Array],default:function(){return[0,0]}}},data:function(){return{ready:!1}},mounted:function(){var t=this,e=r(this.circleOptions,this);this.mapObject=Object(n["circle"])(this.latLng,e),n["DomEvent"].on(this.mapObject,this.$listeners),o(this,this.mapObject,this.$options.props),this.ready=!0,this.parentContainer=l(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},methods:{}};function y(t,e,i,n,s,o,a,r,l,p){"boolean"!==typeof a&&(l=r,r=a,a=!1);var c,u="function"===typeof i?i.options:i;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,s&&(u.functional=!0)),n&&(u._scopeId=n),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):e&&(c=a?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),c)if(u.functional){var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return i}var m=d,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"none"}},[t.ready?t._t("default"):t._e()],2)},v=[],O=void 0,S=void 0,g=void 0,j=!1,C=y({render:b,staticRenderFns:v},O,m,S,j,g,!1,void 0,void 0,void 0);e["a"]=C}}]);
//# sourceMappingURL=page-map-circle~page-map-leaflet~page-map-line~page-test-leaflet~page-test-leaflet3~0ed798d9.5ebde004.js.map