"use strict";(self.webpackChunkantd_pro_x=self.webpackChunkantd_pro_x||[]).push([[60],{3060:function(Ct,ne,E){E.r(ne),E.d(ne,{default:function(){return Nt},registerComponent:function(){return Be},registerComponents:function(){return Ue}});var y=E(50959),$=E(64964),oe=E(4721),ae=E(79144),W=E(78412),we=E(24996),Pe=E(34539),ie=E(35021),je=["value","onChange","className","style","data"];function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},B.apply(this,arguments)}function Fe(t,e){if(t==null)return{};var r=Ee(t,e),n,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Ee(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,l;for(l=0;l<n.length;l++)a=n[l],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}var Re=function(e){var r=e.value,n=e.onChange,a=e.className,l=e.style,m=e.data,h=Fe(e,je);return y.createElement(ie.ZP.Group,B({className:a,style:l,value:r,onChange:n},h),m==null?void 0:m.map(function(d){return y.createElement(ie.ZP,{value:d.value,key:d.value},d.label)}))},ue=Re,ce=E(96555);function U(){return U=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},U.apply(this,arguments)}var De=function(e){var r=e.value,n=e.onChange,a=e.className,l=e.style,m=e.data,h=e.elementSpecProps;return y.createElement(ce.Z.Group,U({className:a,style:l,value:r,onChange:n},h),m==null?void 0:m.map(function(d){return y.createElement(ce.Z,{value:d.value,key:d.value},d.label)}))},Le=De;function V(t){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(t)}function le(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function fe(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?le(Object(r),!0).forEach(function(n){Te(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Te(t,e,r){return e=Ie(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ie(t){var e=Ne(t,"string");return V(e)==="symbol"?e:String(e)}function Ne(t,e){if(V(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(V(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ce=function(e,r){var n=function(l){var m=fe(fe({},typeof r=="function"?r(l):r),l);return y.createElement(e,m)};return n.displayName="MultipleSelect",n},D=Ce,Ae=D(oe.Z,function(t){return{showSearch:!0,filterOption:function(r,n){var a;return(n==null||(a=n.label)===null||a===void 0?void 0:a.toLowerCase().indexOf(r.toLowerCase()))>=0},options:t.data}}),Ge=D(oe.Z,function(t){return{showSearch:!0,mode:"multiple",filterOption:function(r,n){var a;return(n==null||(a=n.label)===null||a===void 0?void 0:a.toLowerCase().indexOf(r.toLowerCase()))>=0},options:t.data}}),_e=D(ae.Z,function(t){return{treeData:t.data,treeCheckable:!0,showCheckedStrategy:ae.Z.SHOW_PARENT,treeDataSimpleMode:!0,multiple:!0,showSearch:!0,treeNodeFilterProp:"title"}}),Ve=D(W.Z,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}),Me=D(W.Z.RangePicker,{format:"YYYY-MM-DD HH:mm:ss"}),Ye=D(W.Z.RangePicker,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}),Ze=D(W.Z.RangePicker,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}),He=D(we.Z,function(t){return{checked:t.value}}),Ke=D(ue,function(t){return{optionType:"button",options:t.data}}),xe={input:Pe.Z,select:Ae,multipleSelect:Ge,radio:ue,radioButton:Ke,checkbox:Le,treeSelect:_e,datePicker:Ve,dateRangePicker:Me,dateTimeRangePicker:Ye,timeRangePicker:Ze,switch:He},$e=xe;function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function We(t,e,r){return e=ke(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ke(t){var e=ze(t,"string");return M(e)==="symbol"?e:String(e)}function ze(t,e){if(M(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(M(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var J=$e;function Be(t){Object.assign(J,We({},t.name,t))}function Ue(t){Object.assign(J,t)}var Je=J;function Y(t){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(t)}function se(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?se(Object(r),!0).forEach(function(n){Qe(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Qe(t,e,r){return e=Xe(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Xe(t){var e=qe(t,"string");return Y(e)==="symbol"?e:String(e)}function qe(t,e){if(Y(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(Y(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var et=function(e){var r=e.placeholder,n=e.components,a=e.style,l=e.className,m=e.type,h=e.component,d=e.fieldName,O=e.value,g=e.onChange,v=e.data,b=e.elementSpecProps,w=Q({placeholder:r,style:a,className:l,id:d,value:O,onChange:g,data:v},b),S=Q(Q({},Je),n);if(m==="custom"&&h)return y.isValidElement(h)?y.cloneElement(h,w):y.createElement(h,w);var R=S[m];return R?y.createElement(R,w):(console.error("component ".concat(m," is not register")),null)},tt=et;function A(t){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(t)}function me(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function de(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?me(Object(r),!0).forEach(function(n){rt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function rt(t,e,r){return e=nt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function nt(t){var e=ot(t,"string");return A(e)==="symbol"?e:String(e)}function ot(t,e){if(A(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(A(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function X(){"use strict";X=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(c,o,i){c[o]=i.value},a=typeof Symbol=="function"?Symbol:{},l=a.iterator||"@@iterator",m=a.asyncIterator||"@@asyncIterator",h=a.toStringTag||"@@toStringTag";function d(c,o,i){return Object.defineProperty(c,o,{value:i,enumerable:!0,configurable:!0,writable:!0}),c[o]}try{d({},"")}catch(c){d=function(i,u,f){return i[u]=f}}function O(c,o,i,u){var f=o&&o.prototype instanceof b?o:b,s=Object.create(f.prototype),p=new K(u||[]);return n(s,"_invoke",{value:te(c,i,p)}),s}function g(c,o,i){try{return{type:"normal",arg:c.call(o,i)}}catch(u){return{type:"throw",arg:u}}}t.wrap=O;var v={};function b(){}function w(){}function S(){}var R={};d(R,l,function(){return this});var F=Object.getPrototypeOf,G=F&&F(F(x([])));G&&G!==e&&r.call(G,l)&&(R=G);var L=S.prototype=b.prototype=Object.create(R);function k(c){["next","throw","return"].forEach(function(o){d(c,o,function(i){return this._invoke(o,i)})})}function _(c,o){function i(f,s,p,P){var j=g(c[f],c,s);if(j.type!=="throw"){var N=j.arg,I=N.value;return I&&A(I)=="object"&&r.call(I,"__await")?o.resolve(I.__await).then(function(C){i("next",C,p,P)},function(C){i("throw",C,p,P)}):o.resolve(I).then(function(C){N.value=C,p(N)},function(C){return i("throw",C,p,P)})}P(j.arg)}var u;n(this,"_invoke",{value:function(s,p){function P(){return new o(function(j,N){i(s,p,j,N)})}return u=u?u.then(P,P):P()}})}function te(c,o,i){var u="suspendedStart";return function(f,s){if(u==="executing")throw new Error("Generator is already running");if(u==="completed"){if(f==="throw")throw s;return z()}for(i.method=f,i.arg=s;;){var p=i.delegate;if(p){var P=T(p,i);if(P){if(P===v)continue;return P}}if(i.method==="next")i.sent=i._sent=i.arg;else if(i.method==="throw"){if(u==="suspendedStart")throw u="completed",i.arg;i.dispatchException(i.arg)}else i.method==="return"&&i.abrupt("return",i.arg);u="executing";var j=g(c,o,i);if(j.type==="normal"){if(u=i.done?"completed":"suspendedYield",j.arg===v)continue;return{value:j.arg,done:i.done}}j.type==="throw"&&(u="completed",i.method="throw",i.arg=j.arg)}}}function T(c,o){var i=o.method,u=c.iterator[i];if(u===void 0)return o.delegate=null,i==="throw"&&c.iterator.return&&(o.method="return",o.arg=void 0,T(c,o),o.method==="throw")||i!=="return"&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+i+"' method")),v;var f=g(u,c.iterator,o.arg);if(f.type==="throw")return o.method="throw",o.arg=f.arg,o.delegate=null,v;var s=f.arg;return s?s.done?(o[c.resultName]=s.value,o.next=c.nextLoc,o.method!=="return"&&(o.method="next",o.arg=void 0),o.delegate=null,v):s:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,v)}function re(c){var o={tryLoc:c[0]};1 in c&&(o.catchLoc=c[1]),2 in c&&(o.finallyLoc=c[2],o.afterLoc=c[3]),this.tryEntries.push(o)}function H(c){var o=c.completion||{};o.type="normal",delete o.arg,c.completion=o}function K(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(re,this),this.reset(!0)}function x(c){if(c){var o=c[l];if(o)return o.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length)){var i=-1,u=function f(){for(;++i<c.length;)if(r.call(c,i))return f.value=c[i],f.done=!1,f;return f.value=void 0,f.done=!0,f};return u.next=u}}return{next:z}}function z(){return{value:void 0,done:!0}}return w.prototype=S,n(L,"constructor",{value:S,configurable:!0}),n(S,"constructor",{value:w,configurable:!0}),w.displayName=d(S,h,"GeneratorFunction"),t.isGeneratorFunction=function(c){var o=typeof c=="function"&&c.constructor;return!!o&&(o===w||(o.displayName||o.name)==="GeneratorFunction")},t.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,S):(c.__proto__=S,d(c,h,"GeneratorFunction")),c.prototype=Object.create(L),c},t.awrap=function(c){return{__await:c}},k(_.prototype),d(_.prototype,m,function(){return this}),t.AsyncIterator=_,t.async=function(c,o,i,u,f){f===void 0&&(f=Promise);var s=new _(O(c,o,i,u),f);return t.isGeneratorFunction(o)?s:s.next().then(function(p){return p.done?p.value:s.next()})},k(L),d(L,h,"Generator"),d(L,l,function(){return this}),d(L,"toString",function(){return"[object Generator]"}),t.keys=function(c){var o=Object(c),i=[];for(var u in o)i.push(u);return i.reverse(),function f(){for(;i.length;){var s=i.pop();if(s in o)return f.value=s,f.done=!1,f}return f.done=!0,f}},t.values=x,K.prototype={constructor:K,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(H),!o)for(var i in this)i.charAt(0)==="t"&&r.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=void 0)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var i=this;function u(N,I){return p.type="throw",p.arg=o,i.next=N,I&&(i.method="next",i.arg=void 0),!!I}for(var f=this.tryEntries.length-1;f>=0;--f){var s=this.tryEntries[f],p=s.completion;if(s.tryLoc==="root")return u("end");if(s.tryLoc<=this.prev){var P=r.call(s,"catchLoc"),j=r.call(s,"finallyLoc");if(P&&j){if(this.prev<s.catchLoc)return u(s.catchLoc,!0);if(this.prev<s.finallyLoc)return u(s.finallyLoc)}else if(P){if(this.prev<s.catchLoc)return u(s.catchLoc,!0)}else{if(!j)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return u(s.finallyLoc)}}}},abrupt:function(o,i){for(var u=this.tryEntries.length-1;u>=0;--u){var f=this.tryEntries[u];if(f.tryLoc<=this.prev&&r.call(f,"finallyLoc")&&this.prev<f.finallyLoc){var s=f;break}}s&&(o==="break"||o==="continue")&&s.tryLoc<=i&&i<=s.finallyLoc&&(s=null);var p=s?s.completion:{};return p.type=o,p.arg=i,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(p)},complete:function(o,i){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&i&&(this.next=i),v},finish:function(o){for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i];if(u.finallyLoc===o)return this.complete(u.completion,u.afterLoc),H(u),v}},catch:function(o){for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i];if(u.tryLoc===o){var f=u.completion;if(f.type==="throw"){var s=f.arg;H(u)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(o,i,u){return this.delegate={iterator:x(o),resultName:i,nextLoc:u},this.method==="next"&&(this.arg=void 0),v}},t}function ve(t,e,r,n,a,l,m){try{var h=t[l](m),d=h.value}catch(O){r(O);return}h.done?e(d):Promise.resolve(d).then(n,a)}function at(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var l=t.apply(e,r);function m(d){ve(l,n,a,m,h,"next",d)}function h(d){ve(l,n,a,m,h,"throw",d)}m(void 0)})}}function it(t,e){return ft(t)||lt(t,e)||ct(t,e)||ut()}function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(t,e){if(t){if(typeof t=="string")return he(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return he(t,e)}}function he(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function lt(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,a,l,m,h=[],d=!0,O=!1;try{if(l=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;d=!1}else for(;!(d=(n=l.call(r)).done)&&(h.push(n.value),h.length!==e);d=!0);}catch(g){O=!0,a=g}finally{try{if(!d&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(O)throw a}}return h}}function ft(t){if(Array.isArray(t))return t}var st=function(e){var r=e.dependencies,n=(0,y.useState)(e.data),a=it(n,2),l=a[0],m=a[1],h=function(){var g=at(X().mark(function v(b,w){var S;return X().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,b(w);case 2:S=F.sent,m(S);case 4:case"end":return F.stop()}},v)}));return function(b,w){return g.apply(this,arguments)}}();(0,y.useEffect)(function(){typeof e.remoteData=="function"?h(e.remoteData):e.data&&m(e.data)},[e.remoteData,e.data]);var d=function(){var v=e.type,b=e.component;return v==="custom"||y.isValidElement(b)?!1:typeof b=="function"},O=function(v){var b=de({initialValue:v.initialValue,name:v.fieldName,label:v.label,dependencies:v.dependencies,rules:v.rules},v.formItemSpecProps),w={disabled:v.disabled,placeholder:v.placeholder,fieldName:v.fieldName,style:v.style,className:v.className,components:v.components,data:l,type:v.type,component:v.component,elementSpecProps:v.elementSpecProps};return y.createElement($.Z.Item,b,y.createElement(tt,w))};return r?y.createElement($.Z.Item,{noStyle:!0,dependencies:r},function(g){var v=de({},e);if(d()){var b=v.component(g);if(b===null)return null;delete v.component,b.remoteData&&!l&&h(b.remoteData),Object.assign(v,b)}return O(v)}):O(e)},mt=st;function q(){return q=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},q.apply(this,arguments)}function dt(t,e,r,n){var a,l;return y.createElement(mt,q({key:e,components:r},t[e],(a=t[e])===null||a===void 0||(l=a.mapStateToSchema)===null||l===void 0?void 0:l.call(a,n)))}var ye=function(e){if(!(e instanceof Array))return e;for(var r={},n=0;n<e.length;n++){var a=e[n];r[a.fieldName]=a}return r};function pe(t,e){var r=ye(t);return Object.keys(e).forEach(function(n){var a;if((a=r[n])!==null&&a!==void 0&&a.fusion){var l;e[n]=(l=r[n])===null||l===void 0?void 0:l.fusion(e[n])}}),e}function vt(t,e){var r=ye(t);return Object.keys(e).forEach(function(n){var a;if((a=r[n])!==null&&a!==void 0&&a.fission){var l;e[n]=(l=r[n])===null||l===void 0?void 0:l.fission(e[n])}}),e}var ht=function(t,e,r){var n=e.getFieldsValue;t.getFieldsValue=function(){var a=n();return vt(r,a)}},yt=function(t,e,r){var n=e.setFieldsValue;t.setFieldsValue=function(a){var l=pe(r,a);n(l)}},be=[ht,yt];function pt(t,e){for(var r=Object.keys(e),n=0;n<r.length;n++){var a=r[n];e.hasOwnProperty(a)&&(t[a]=e[a])}}function bt(t,e,r){pt(t,e);for(var n=0;n<be.length;n++){var a=be[n];a(t,e,r)}}var gt=bt;function Z(t){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(t)}var Ot=["initialValues","enableValueAtomize","form","components","schema","schemaGroups","groupRender","groupsRender","globalState"];function ee(){return ee=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ee.apply(this,arguments)}function ge(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function St(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ge(Object(r),!0).forEach(function(n){wt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function wt(t,e,r){return e=Pt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Pt(t){var e=jt(t,"string");return Z(e)==="symbol"?e:String(e)}function jt(t,e){if(Z(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(Z(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Oe(t,e){return Dt(t)||Rt(t,e)||Et(t,e)||Ft()}function Ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(t,e){if(t){if(typeof t=="string")return Se(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Se(t,e)}}function Se(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Rt(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,a,l,m,h=[],d=!0,O=!1;try{if(l=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;d=!1}else for(;!(d=(n=l.call(r)).done)&&(h.push(n.value),h.length!==e);d=!0);}catch(g){O=!0,a=g}finally{try{if(!d&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(O)throw a}}return h}}function Dt(t){if(Array.isArray(t))return t}function Lt(t,e){if(t==null)return{};var r=Tt(t,e),n,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Tt(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,l;for(l=0;l<n.length;l++)a=n[l],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}function It(t,e){var r=t.initialValues,n=t.enableValueAtomize,a=t.form,l=t.components,m=t.schema,h=t.schemaGroups,d=t.groupRender,O=t.groupsRender,g=t.globalState,v=Lt(t,Ot),b=$.Z.useForm(n?void 0:a),w=Oe(b,1),S=w[0],R=(0,y.useRef)(n?a||{}:S),F=(0,y.useRef)(!1);n&&!F.current&&(F.current=!0,gt(R.current,S,m));var G=(0,y.useState)(0),L=Oe(G,2),k=L[0],_=L[1],te=(0,y.useMemo)(function(){return n?pe(m,r||{}):r},[n,m,r]);(0,y.useImperativeHandle)(e,function(){return St({forceRefresh:function(){return _(function(u){return++u})}},R.current)});var T=(0,y.useMemo)(function(){var i={};return m instanceof Array?(m.forEach(function(u){i[u.fieldName]=u}),i):m},[m]),re=function(u){return u||[{list:m instanceof Array?m.map(function(f){return f.fieldName}):Object.keys(m)}]},H=function(u){return n&&typeof T[u].fusion=="function"&&T[u].initialValue!==void 0&&(T[u].initialValue=T[u].fusion(T[u].initialValue)),dt(T,u,l,g)},K=function(u){return Object.values(u.list).map(H)},x=function(u){return u},z=function(u){var f=u.render||d||x;return f(K(u),u,g)},c=function(){var u=re(h),f=u==null?void 0:u.map(z);return f},o=(0,y.useMemo)(function(){return O?O(c()):c()},[m,h,g,k]);return y.createElement($.Z,ee({form:S,initialValues:te},v),y.createElement(y.Fragment,null,o,t.children))}var Nt=y.forwardRef(It)}}]);
