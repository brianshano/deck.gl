(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"7ZmC":function(e,t,r){r("rzGZ"),r("Dq+y"),r("q8oJ"),r("C9fy"),r("6kNP"),r("8npG"),r("LagC"),r("pJf4"),r("JHok"),r("pS08"),r("R48M"),r("m210"),r("4DPX");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var l={};function f(){}function h(){}function d(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&r.call(y,o)&&(p=y);var m=d.prototype=f.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=m.constructor=d,d.constructor=h,h.displayName=c(d,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,a,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},g(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(m),c(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"i+OJ":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("lxDd"),a=r("o0o1"),c=r.n(a);r("7ZmC"),r("6kNP"),r("8npG"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("Ggvi"),r("wcNg"),r("m210"),r("YbXK"),r("cFtU"),r("pJf4"),r("q8oJ");function s(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l={layers:{},layerFilter:{},parameters:{},effects:{},pickingRadius:{},onBeforeRender:{},onAfterRender:{},onClick:{},onHover:{},onDragStart:{},onDrag:{},onDragEnd:{},onError:{},debug:{},drawPickingColors:{},getCursor:{},getTooltip:{}};r("88iX");var f=r("sY70"),h=r("SOuN"),d=r("8nqg"),p=r("oFBv"),v=r("XQ8I");function y(e){var t=this;Object(h.e)(e),this.buffer=new d.a(e,new Int8Array([-1,-1,1,-1,-1,1,1,1])),this.model=new p.a(e,{vs:"\n      attribute vec2 a_pos;\n      varying vec2 v_texcoord;\n      void main(void) {\n          gl_Position = vec4(a_pos, 0.0, 1.0);\n          v_texcoord = (a_pos + 1.0) / 2.0;\n      }\n    ",fs:"\n      precision mediump float;\n      uniform sampler2D u_texture;\n      varying vec2 v_texcoord;\n      void main(void) {\n          vec4 rgba = texture2D(u_texture, v_texcoord);\n          rgba.rgb *= rgba.a;\n          gl_FragColor = rgba;\n      }\n    ",attributes:{a_pos:this.buffer},vertexCount:4,drawMode:e.TRIANGLE_STRIP}),this.deckFbo=new v.a(e,{width:1,height:1}),this.deckInstance=new f.a({viewState:{},controller:!1,gl:e,parameters:{depthTest:!0},_framebuffer:this.deckFbo,width:null,height:null,_customRender:function(e){"arcgis"===e?t.deckInstance._drawLayers(e):t.redraw()}})}function m(e){var t=this,r=e.gl,n=e.width,o=e.height,i=e.viewState,a=r.getParameter(r.FRAMEBUFFER_BINDING),c=window.devicePixelRatio;n=Math.round(n*c),o=Math.round(o*c),this.deckFbo.resize({width:n,height:o}),this.deckInstance.setProps({viewState:i}),this.deckInstance.redraw("arcgis"),Object(h.l)(r,{blend:!0,blendFunc:[r.ONE,r.ONE_MINUS_SRC_ALPHA],framebuffer:a,viewport:[0,0,n,o]},(function(){t.model.setUniforms({u_texture:t.deckFbo}).draw()}))}function g(){this.deckInstance&&(this.deckInstance.finalize(),this.deckInstance=null),this.model&&this.model.delete(),this.buffer&&this.buffer.delete(),this.deckFbo&&this.deckFbo.delete()}var b=r("iJYz");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,o)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){S(i,n,o,a,c,"next",e)}function c(e){S(i,n,o,a,c,"throw",e)}a(void 0)}))}}var P=null;function j(e,t){return I.apply(this,arguments)}function I(){return(I=O(c.a.mark((function e(t,r){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array.isArray(t)?null:t,e.next=3,T(n,r);case 3:if(!Array.isArray(t)){e.next=5;break}return e.abrupt("return",Object(b.loadModules)(t,r).then((function(e){return x(x({},P),{},{modules:e})})));case 5:return e.abrupt("return",P);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return P||(e?E(e.layers.Layer,e.core.Accessor,e.views["2d"].layers.BaseLayerViewGL2D,e.views["3d"].externalRenderers):Object(b.loadModules)(["esri/layers/Layer","esri/core/Accessor","esri/views/2d/layers/BaseLayerViewGL2D","esri/views/3d/externalRenderers"],t).then((function(e){return E(e[0],e[1],e[2],e[3])})))}function E(e,t,r,n){var o=function(e){return e.createSubclass({properties:l,constructor:function(){var e=this;this._callbacks={},this.watch(Object.keys(l),(function(t,r,n){var o;e.emit("change",((o={})[n]=t,o))}))},on:function(e,t){this._callbacks[e]=this._callbacks[e]||[],this._callbacks[e].push(t)},emit:function(e,t){var r=this._callbacks[e];if(r)for(var n,o=s(r);!(n=o()).done;){(0,n.value)(t)}},toJSON:function(){for(var e,t={},r=s(this.keys());!(e=r()).done;){var n=e.value;void 0!==this[n]&&(t[n]=this[n])}return t}})}(t),i=function(e,t,r){return t.createSubclass({properties:{deck:{}},constructor:function(){this.deck=new e},createLayerView:function(e){return"2d"===e.type?new r({view:e,layer:this}):(console.error("DeckLayer does not support SceneView at the moment. Use DeckRenderer instead."),null)}})}(o,e,function(e){return e.createSubclass({properties:{deckgl:{},deckFbo:{},model:{},buffer:{}},attach:function(){var e=this,t=this.context;y.call(this,t),this.layer.deck.on("change",(function(t){return e.deckInstance.setProps(t)})),this.deckInstance.setProps(this.layer.deck.toJSON())},redraw:function(){this.requestRender()},detach:function(){g.call(this)},render:function(e){var t=this.view.state.size,r=t[0],n=t[1],o=e.state;m.call(this,{gl:e.context,width:r,height:n,viewState:{latitude:this.view.center.latitude,longitude:this.view.center.longitude,zoom:this.view.featuresTilingScheme.scaleToLevel(o.scale),bearing:-o.rotation,pitch:0}})}})}(r)),a=function(e,t){return function(){function r(t,r){this.view=t,this.deck=new e(r)}var n=r.prototype;return n.setup=function(e){var t=this,r=e.gl;y.call(this,r),this.deck.on("change",(function(e){return t.deckInstance.setProps(e)})),this.deckInstance.setProps(this.deck.toJSON())},n.dispose=function(){g.call(this)},n.redraw=function(){t.requestRender(this.view)},n.render=function(e){var t,r,n,o,i=this.view.size,a=i[0],c=i[1];m.call(this,{gl:e.gl,width:a,height:c,viewState:{latitude:this.view.center.latitude,longitude:this.view.center.longitude,altitude:(t=this.view.camera.fov,r=a/c,n=Math.sqrt(1+Math.pow(r,2)),o=t/2/180*Math.PI,n/2/Math.tan(o)),zoom:this.view.zoom,bearing:this.view.camera.heading,pitch:this.view.camera.tilt}})},r}()}(o,n);return P={DeckLayer:i,DeckRenderer:a}}var L=r("49Am"),_=r("HaE+"),A=r("p1p/"),D=r("KQm4"),C=r("SDD5"),M=r("FlnL"),N=2,U="mesh",F="I3S",R=(r("C9fy"),r("MIFh"),r("1OyB")),G=r("vuIU"),z=r("DUak");function J(e){var t=e.halfSize,r=M.a.WGS84.cartographicToCartesian(e.center),n=(new z.b).fromCornerPoints([r[0]-t[0],r[1]-t[1],r[2]-t[2]],[r[0]+t[0],r[1]+t[1],r[2]+t[2]]);return[].concat(Object(D.a)(e.center),[n.radius])}function q(e){return B.apply(this,arguments)}function B(){return(B=Object(_.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse((new TextDecoder).decode(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(_.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=q(t),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V={id:"i3s-node-page",name:"I3S Node Page",version:"2.3.0",mimeTypes:["application/json"],parse:function(e){return H.apply(this,arguments)},extensions:["json"],options:{}};function W(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var X=function(){function e(t,r){Object(R.a)(this,e),this.tileset=t,this.nodesPerPage=t.nodePages.nodesPerPage,this.lodSelectionMetricType=t.nodePages.lodSelectionMetricType,this.options=r,this.nodePages=[]}var t,r;return Object(G.a)(e,[{key:"getNodeById",value:(r=Object(_.a)(c.a.mark((function e(t){var r,n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Math.floor(t/this.nodesPerPage),this.nodePages[r]){e.next=7;break}return n="".concat(this.tileset.url,"/nodepages/").concat(r),this.nodePages[r]=Object(A.a)(n,V,this.options),e.next=6,this.nodePages[r];case 6:this.nodePages[r]=e.sent;case 7:if(!(this.nodePages[r]instanceof Promise)){e.next=11;break}return e.next=10,this.nodePages[r];case 10:this.nodePages[r]=e.sent;case 11:return o=t%this.nodesPerPage,e.abrupt("return",this.nodePages[r].nodes[o]);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"formTileFromNodePages",value:(t=Object(_.a)(c.a.mark((function e(t){var r,n,o,i,a,s,u,l,f,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeById(t);case 2:r=e.sent,n=[],o=W(r.children),e.prev=5,o.s();case 7:if((i=o.n()).done){e.next=15;break}return a=i.value,e.next=11,this.getNodeById(a);case 11:s=e.sent,n.push({id:a,obb:s.obb,mbs:J(s.obb)});case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),o.e(e.t0);case 20:return e.prev=20,o.f(),e.finish(20);case 23:return u=null,l=null,r&&r.mesh&&(r.mesh.geometry&&(u="".concat(this.tileset.url,"/nodes/").concat(r.mesh.geometry.resource,"/geometries/0")),(f=this._getTextureName(r.mesh.material))&&(l="".concat(this.tileset.url,"/nodes/").concat(r.mesh.material.resource,"/textures/").concat(f))),h=[],"maxScreenThresholdSQ"===this.lodSelectionMetricType&&h.push({metricType:"maxScreenThreshold",maxError:Math.sqrt(r.lodThreshold/(.25*Math.PI))}),h.push({metricType:this.lodSelectionMetricType,maxError:r.lodThreshold}),e.abrupt("return",K({id:t,lodSelection:h,obb:r.obb,mbs:J(r.obb),contentUrl:u,textureUrl:l,children:n}));case 30:case"end":return e.stop()}}),e,this,[[5,17,20,23]])}))),function(e){return t.apply(this,arguments)})},{key:"_getTextureName",value:function(e){if(e){var t=this.tileset.materialDefinitions[e.definition],r=t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.baseColorTexture&&t.pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId;if(r||0===r){var n=this.tileset.textureSetDefinitions[r];return n&&n.formats&&n.formats[0]&&n.formats[0].name}}return null}}]),e}();function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?"".concat(e,"?token=").concat(t):e}var $=new C.a;function Q(e,t,r){return e.url=r.url,e.featureData&&(e.featureUrl="".concat(e.url,"/").concat(e.featureData[0].href)),e.geometryData&&(e.contentUrl="".concat(e.url,"/").concat(e.geometryData[0].href)),e.textureData&&(e.textureUrl="".concat(e.url,"/").concat(e.textureData[0].href)),K(e)}function K(e){$.copy(e.mbs);var t=M.a.WGS84.cartographicToCartesian(e.mbs.slice(0,3));return e.boundingVolume={sphere:[].concat(Object(D.a)(t),[e.mbs[3]])},e.lodMetricType=e.lodSelection[0].metricType,e.lodMetricValue=e.lodSelection[0].maxError,e.transformMatrix=e.transform,e.type=U,e.refine=N,e}function ee(e,t,r){return te.apply(this,arguments)}function te(){return(te=Object(_.a)(c.a.mark((function e(t,r,n){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url=n.url,!t.nodePages){e.next=8;break}return t.nodePagesTile=new X(t,r),e.next=5,t.nodePagesTile.formTileFromNodePages(0);case 5:t.root=e.sent,e.next=12;break;case 8:return o=Z("".concat(t.url,"/nodes/root"),r.token),e.next=11,Object(A.a)(o,t.loader,{i3s:{loadContent:!1,isTileHeader:!0,isTileset:!1}});case 11:t.root=e.sent;case 12:t.basePath=t.url,t.type=F,t.lodMetricType=t.root.lodMetricType,t.lodMetricValue=t.root.lodMetricValue;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r("zZTu");var re=r("kh/P"),ne=r("kEPd"),oe=(r("5irr"),r("SIeT"),r("h3Sa"),r("CtJk"),r("0mpS")),ie={UInt8:Uint8Array,UInt16:Uint16Array,UInt32:Uint32Array,Float32:Float32Array,UInt64:Float64Array},ae={UInt8:oe.a.UNSIGNED_BYTE,UInt16:oe.a.UNSIGNED_INT,Float32:oe.a.FLOAT,UInt32:oe.a.UNSIGNED_INT,UInt64:oe.a.DOUBLE},ce={position:"position",normal:"normal",uv0:"uv0",color:"color",region:"region"},se={vertexAttributes:"vertexAttributes",featureAttributeOrder:"featureAttributeOrder",featureAttributes:"featureAttributes"},ue="header",le="vertexCount",fe="featureCount",he={UInt8:1,UInt16:2,UInt32:4,Float32:4,UInt64:8};function de(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pe(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ve=new C.a([0,0,0]);function ye(e,t,r,n){return me.apply(this,arguments)}function me(){return(me=Object(_.a)(c.a.mark((function e(t,r,n,o){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.content=r.content||{},r.content.featureData=be(r,n),r.content.attributes={},!r.textureUrl){e.next=8;break}return i=Z(r.textureUrl,o.token),e.next=7,Object(A.a)(i,ne.a);case 7:r.content.texture=e.sent;case 8:return e.abrupt("return",ge(t,r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.content)return t;var r=t.content,n=r.featureData,o=n.vertexAttributes,i=n.attributesOrder,a=we(r,e),c=a.vertexCount,s=a.byteOffset,u=xe(e,s,o,c,i),l=u.attributes,f=ke(l.position,t),h=f.enuMatrix,d=f.cartographicOrigin,p=f.cartesianOrigin,v=(new re.a).multiplyRight(h);return r.attributes={positions:l.position,normals:l.normal,colors:l.color,texCoords:l.uv0},r.vertexCount=c,r.cartographicCenter=d,r.cartesianOrigin=p,r.modelMatrix=v.invert(),r.byteLength=e.byteLength,t}function be(e,t){var r=t.store.defaultGeometrySchema,n=r;for(var o in se)for(var i in ce){var a=r[o][i];if(a){var c=a.byteOffset,s=void 0===c?0:c,u=a.count,l=void 0===u?0:u,f=a.valueType,h=a.valuesPerElement;n[o][i]={valueType:f,valuesPerElement:h,byteOffset:s,count:l}}}return n.attributesOrder=r.ordering,n}function we(e,t){var r=0,n=0,o=0,i=e.featureData[ue];for(var a in i){var c=i[a],s=c.property,u=c.type,l=ie[u];s===le&&(n=new l(t,0,4)[0],r+=he[u]),s===fe&&(o=new l(t,4,4)[0],r+=he[u])}return{vertexCount:n,featureCount:o,byteOffset:r}}function xe(e,t,r,n,o){var i,a={},c=de(o);try{for(c.s();!(i=c.n()).done;){var s=i.value;if(r[s]){var u=r[s],l=u.valueType,f=u.valuesPerElement,h=n;if(t+h*f>e.byteLength)break;var d=new(0,ie[l])(e,t,h*f);switch(a[s]={value:d,type:ae[l],size:f},s){case"color":a.color.normalized=!0}t+=h*f*he[l]}}}catch(p){c.e(p)}finally{c.f()}return{attributes:a,byteOffset:t}}function ke(e,t){var r=t.mbs,n=e.value,o=new re.a,i=new C.a(r[0],r[1],r[2]),a=new C.a;return M.a.WGS84.cartographicToCartesian(i,a),M.a.WGS84.eastNorthUpToFixedFrame(a,o),e.value=function(e,t){for(var r=new Float64Array(e.length),n=0;n<r.length;n+=3)r[n]=e[n]+t.x,r[n+1]=e[n+1]+t.y,r[n+2]=e[n+2]+t.z;for(var o=0;o<r.length;o+=3)M.a.WGS84.cartographicToCartesian(r.subarray(o,o+3),ve),r[o]=ve.x,r[o+1]=ve.y,r[o+2]=ve.z;return r}(n,i),{enuMatrix:o,fixedFrameToENUMatrix:o.invert(),cartographicOrigin:i,cartesianOrigin:a}}var Se=/layers\/[0-9]+$/,Oe=/nodes\/([0-9-]+|root)$/;function Pe(e,t,r){return je.apply(this,arguments)}function je(){return(je=Object(_.a)(c.a.mark((function e(t,r,n){var o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.i3s.tile,i=r.i3s.tileset,o.content=o.content||{},e.next=5,ye(t,o,i,r);case 5:return e.abrupt("return",o.content);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(e,t,r){return Te.apply(this,arguments)}function Te(){return(Te=Object(_.a)(c.a.mark((function e(t,r,n){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=JSON.parse((new TextDecoder).decode(t))).loader=_e,e.next=4,ee(o,r,n);case 4:return e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(e,t,r){return Le.apply(this,arguments)}function Le(){return(Le=Object(_.a)(c.a.mark((function e(t,r,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse((new TextDecoder).decode(t)),e.abrupt("return",Q(t,0,n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _e={id:"i3s",name:"I3S 3D Tiles",version:"2.3.0",mimeTypes:["application/octet-stream"],parse:function(e,t,r,n){return Ae.apply(this,arguments)},extensions:["bin"],options:{i3s:{loadContent:!0,isTileset:"auto",isTileHeader:"auto",tile:null,tileset:null}}};function Ae(){return(Ae=Object(_.a)(c.a.mark((function e(t,r,n,o){var i,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=new URL(n.url),r.i3s=r.i3s||{},a="auto"===r.i3s.isTileset?Se.test(i.pathname):r.i3s.isTileset,s="auto"===r.isTileHeader?Oe.test(i.pathname):r.i3s.isTileHeader,!a){e.next=10;break}return e.next=7,Ie(t,r,n);case 7:t=e.sent,e.next=23;break;case 10:if(!s){e.next=20;break}return e.next=13,Ee(t,r,n);case 13:if(t=e.sent,!r.i3s.loadContent){e.next=18;break}return r.i3s.tile=t,e.next=18,Object(A.a)(t.contentUrl,_e,r);case 18:e.next=23;break;case 20:return e.next=22,Pe(t,r,n);case 22:t=e.sent;case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var De=_e;function Ce(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,o)}function Me(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){Ce(i,n,o,a,c,"next",e)}function c(e){Ce(i,n,o,a,c,"throw",e)}a(void 0)}))}}var Ne="https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0";function Ue(){return(Ue=Me(c.a.mark((function e(t){var r,n,o,i,a,s,u,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(["esri/Map","esri/views/SceneView","esri/views/3d/externalRenderers"]);case 2:return r=e.sent,n=r.DeckRenderer,o=r.modules,i=o[0],a=o[1],s=o[2],u=new a({container:t,qualityProfile:"high",map:new i({basemap:"dark-gray-vector"}),environment:{atmosphereEnabled:!1},camera:{position:{x:-122.4,y:37.78,z:3e3},heading:0,tilt:25},viewingMode:"local"}),l=new n(u,{}),s.add(u,l),u.on("layerview-create",(function(){l.deck.layers=[new L.a({id:"tile-3d-layer",data:Ne,loader:De})]})),e.abrupt("return",{remove:function(){u.destroy(),l.dispose()}});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Fe=r("CtqP");var Re=function(e){var t,r;function i(){for(var t,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this)._containerRef=Object(n.createRef)(),t}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.renderInfo=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,"Highly detailed LoD2 textured 3D buildings for downtown San Francisco in I3S format, visualized with deck.gl's Tile3DLayer. This data is provided by ",o.a.createElement("a",{href:"https://www.precisionlightworks.com/"},"Precision Light Works (PLW)"),"."),o.a.createElement("div",null,o.a.createElement("img",{src:"http://downloads.esri.com/blogs/arcgisonline/esrilogo_new.png",alt:"ESRI logo"}),o.a.createElement("a",{href:"https://www.arcgis.com/home/item.html?id=d3344ba99c3f4efaa909ccfbcc052ed5"},"Data profile page")))};var a=i.prototype;return a.componentDidMount=function(){var e=this,t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","https://js.arcgis.com/4.16/esri/themes/light/main.css"),document.head.appendChild(t),function(e){return Ue.apply(this,arguments)}(this._containerRef.current).then((function(t){return e._view=t}))},a.componentWillUnmount=function(){this._view&&this._view.remove()},a.render=function(){return o.a.createElement("div",{ref:this._containerRef,style:{width:"100%",height:"100%"}})},i}(n.Component);Re.title="San Francisco 3D Buildings",Re.code=i.b+"/examples/website/i3s";t.default=Object(Fe.a)(Re)},iJYz:function(e,t,r){r("R48M"),r("JHok"),r("Ll4R"),function(e){"use strict";function t(e){if("next"===e.toLowerCase())return"next";var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function r(e){return void 0===e&&(e="4.14"),"https://js.arcgis.com/"+e+"/"}function n(e){return!e||t(e)?function(e){void 0===e&&(e="4.14");var n=r(e),o=t(e);return"next"!==o&&3===o.major?n+(o.minor<=10?"js/":"")+"esri/css/esri.css":n+"esri/themes/light/main.css"}(e):e}function o(e,t){var r=n(e),o=function(e){return document.querySelector('link[href*="'+e+'"]')}(r);return o||function(e,t){if(t){var r=document.querySelector(t);r.parentNode.insertBefore(e,r)}else document.head.appendChild(e)}(o=function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}(r),t),o}var i={Promise:"undefined"!=typeof window?window.Promise:void 0},a={};function c(e,t,r){var n;r&&(n=function(e,t){var r=function r(n){t(n.error||new Error("There was an error attempting to load "+e.src)),e.removeEventListener("error",r,!1)};return e.addEventListener("error",r,!1),r}(e,r)),e.addEventListener("load",(function r(){t(e),e.removeEventListener("load",r,!1),n&&e.removeEventListener("error",n,!1)}),!1)}function s(e){void 0===e&&(e={}),a=e}function u(){return document.querySelector("script[data-esri-loader]")}function l(){var e=window.require;return e&&e.on}function f(e){void 0===e&&(e={});var t={};[a,e].forEach((function(e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}));var n=t.version,s=t.url||r(n);return new i.Promise((function(e,r){var i=u();if(i){var a=i.getAttribute("src");a!==s?r(new Error("The ArcGIS API for JavaScript is already loaded ("+a+").")):l()?e(i):c(i,e,r)}else if(l())r(new Error("The ArcGIS API for JavaScript is already loaded."));else{var f=t.css;f&&o(!0===f?n:f,t.insertCssBefore),t.dojoConfig&&(window.dojoConfig=t.dojoConfig),c(i=function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}(s),(function(){i.setAttribute("data-esri-loader","loaded"),e(i)}),r),document.body.appendChild(i)}}))}function h(e){return new i.Promise((function(t,r){var n=window.require.on("error",r);window.require(e,(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.remove(),t(e)}))}))}function d(e,t){if(void 0===t&&(t={}),l())return h(e);var r=u(),n=r&&r.getAttribute("src");return!t.url&&n&&(t.url=n),f(t).then((function(){return h(e)}))}var p={getScript:u,isLoaded:l,loadModules:d,loadScript:f,loadCss:o,setDefaultOptions:s,utils:i};e.getScript=u,e.isLoaded=l,e.loadModules=d,e.loadScript=f,e.loadCss=o,e.setDefaultOptions=s,e.utils=i,e.default=p,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);