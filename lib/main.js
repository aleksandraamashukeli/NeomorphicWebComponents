/*! For license information please see main.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("NeomorphicComponents",[],e):"object"==typeof exports?exports.NeomorphicComponents=e():t.NeomorphicComponents=e()}(this,(function(){return(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class o{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return e&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,n=t=>{let e=s.get(t);return void 0===e&&s.set(t,e=new o(t,i)),e},r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(t instanceof o)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return n(i)},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>n("string"==typeof t?t:t+""))(e)})(t):t;var a,h,c,d;const p={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this.Πp(i,e);void 0!==o&&(this.Πm.set(o,i),t.push(o))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static Πp(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}Πj(t,e,i=f){var o,s;const n=this.constructor.Πp(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(s=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==s?s:p.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,e){var i,o,s;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),l=t.converter,a=null!==(s=null!==(o=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof l?l:null)&&void 0!==s?s:p.fromAttribute;this.Πh=r,this[r]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var g,x,y,b;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(h=(a=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(a,{ReactiveElement:v}),(null!==(c=(d=globalThis).reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.0.0-rc.2");const m=globalThis.trustedTypes,w=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,k="?"+S,C=`<${k}>`,P=document,O=(t="")=>P.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,U=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,A=/"/g,B=/^(?:script|style|textarea)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),j=H(1),T=(H(2),Symbol.for("lit-noChange")),M=Symbol.for("lit-nothing"),L=new WeakMap,z=P.createTreeWalker(P,129,null,!1);class I{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,l=this.parts,[a,h]=((t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=D;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===D?"!--"===a[1]?r=_:void 0!==a[1]?r=U:void 0!==a[2]?(B.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=E):void 0!==a[3]&&(r=E):r===E?">"===a[0]?(r=null!=s?s:D,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?E:'"'===a[3]?A:N):r===A||r===N?r=E:r===_||r===U?r=D:(r=E,s=void 0);const d=r===E&&t[e+1].startsWith("/>")?" ":"";n+=r===D?i+C:h>=0?(o.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+S+d):i+S+(-2===h?(o.push(void 0),e):d)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==w?w.createHTML(l):l,o]})(t,e);if(this.el=I.createElement(a,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=z.nextNode())&&l.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(S)){const i=h[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(S),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?J:"@"===e[1]?Z:F})}else l.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(B.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],O()),z.nextNode(),l.push({type:2,index:++s});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===k)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)l.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,o){var s,n,r,l;if(e===T)return e;let a=void 0!==o?null===(s=i.Σi)||void 0===s?void 0:s[o]:i.Σo;const h=$(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a.O)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,i,o)),void 0!==o?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[o]=a:i.Σo=a),void 0!==a&&(e=V(t,a.S(t,e.values),a,o)),e}class W{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:o}=this.D,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:P).importNode(i,!0);z.currentNode=s;let n=z.nextNode(),r=0,l=0,a=o[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new G(n,this,t)),this.l.push(e),a=o[++l]}r!==(null==a?void 0:a.index)&&(n=z.nextNode(),r++)}return s}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class q{constructor(t,e,i,o){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=o}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=V(this,t,e),$(t)?t===M||null==t||""===t?(this.H!==M&&this.R(),this.H=M):t!==this.H&&t!==T&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return R(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(P.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this.C(t):(void 0===o.el&&(o.el=I.createElement(o.h,this.options)),o);if((null===(e=this.H)||void 0===e?void 0:e.D)===s)this.H.v(i);else{const t=new W(s,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new I(t)),e}g(t){R(this.H)||(this.H=[],this.R());const e=this.H;let i,o=0;for(const s of t)o===e.length?e.push(i=new q(this.k(O()),this.k(O()),this,this.options)):i=e[o],i.I(s),o++;o<e.length&&(this.R(i&&i.B.nextSibling,o),e.length=o)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class F{constructor(t,e,i,o,s){this.type=1,this.H=M,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(M),this.strings=i):this.H=M}get tagName(){return this.element.tagName}I(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=V(this,t,e,0),n=!$(t)||t!==this.H&&t!==T,n&&(this.H=t);else{const o=t;let r,l;for(t=s[0],r=0;r<s.length-1;r++)l=V(this,o[i+r],e,r),l===T&&(l=this.H[r]),n||(n=!$(l)||l!==this.H[r]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+s[r+1]),this.H[r]=l}n&&!o&&this.W(t)}W(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===M?void 0:t}}class J extends F{constructor(){super(...arguments),this.type=4}W(t){t&&t!==M?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Z extends F{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:M)===T)return;const o=this.H,s=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==M&&(o===M||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){V(this,t)}}var Q,X,Y,tt,et,it;null===(x=(g=globalThis).litHtmlPlatformSupport)||void 0===x||x.call(g,I,q),(null!==(y=(b=globalThis).litHtmlVersions)&&void 0!==y?y:b.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(Q=(it=globalThis).litElementVersions)&&void 0!==Q?Q:it.litElementVersions=[]).push("3.0.0-rc.2");class ot extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new q(e.insertBefore(O(),t),t,void 0,i)}return r.I(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return T}}ot.finalized=!0,ot._$litElement$=!0,null===(Y=(X=globalThis).litElementHydrateSupport)||void 0===Y||Y.call(X,{LitElement:ot}),null===(et=(tt=globalThis).litElementPlatformSupport)||void 0===et||et.call(tt,{LitElement:ot});const st=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e),nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)}const lt=Element.prototype;lt.msMatchesSelector||lt.webkitMatchesSelector;const at=r`
        input {
            margin:4px;
            border:1px solid rgb(241, 241, 241);
            padding:10px;
            color:rgb(61, 61, 61);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            outline:none;
            height: 35px;
            font-size:17px;
            width: 210px;
            background: #f6f7f8;
            box-shadow:  inset 3px 2px 5px #e1e4f0, inset -5px -5px 10px white;
            border-radius: 6px;
            box-sizing: border-box;
            transition: all 0.2s ease-in-out;
            appearance: none;
            -webkit-appearance: none;
          
        }
          input:focus{
            box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px  white;
        
          }
`;var ht=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ct=class extends ot{static get styles(){return at}get value(){return this._value}render(){return j`
      <input type="text" @change=${this.updateValue} value=${this._value} placeholder=${this.placeholder}>
    `}updateValue(t){var e=t.target;this._value=e.value}};ht([rt()],ct.prototype,"placeholder",void 0),ht([rt()],ct.prototype,"_value",void 0),ct=ht([st("neo-input")],ct);const dt=r`
    .checkbox {
  display: grid;
  cursor:pointer;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1.6rem;
  color: #333;
}
.checkbox__control {
  display: inline-grid;
  width: 0.8em;
  background: #f6f7f8;
  height: 0.8em;
  box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px  white;
  border-radius: 6px;
  border: 1px solid rgb(223, 221, 221);
}
 .checkbox__control svg {
    transition: transform 0.1s ease;
    transform: scale(0);
    transform-origin: ;
  }
  .checkbox__input {
  display: grid; 
  grid-template-areas: "checkbox";
  }
  .checkbox_input input{
    display:none;
}
.checkbox__control:focus{
    background:red;
}
.checkbox_hid{
    display:none;
}
input:focus   .checkbox__control {
      box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em red;
    }
input:checked  +.checkbox__control svg   {
      transform: scale(1);
}


`;var pt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ut=class extends ot{constructor(){super(...arguments),this._checked=!1}static get styles(){return dt}get checked(){return this._checked}render(){return j`
        <label class="checkbox">
            <span class="checkbox__input">
                    <input @change=${this.updateValue} type="checkbox" class="checkbox_hid" name="checkbox">
                    <span class="checkbox__control">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='-3 -3 30 30' aria-hidden="true" focusable="false">
                            <path  fill='none' stroke='rgb(69, 209, 155)' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                    </span>
            </span>
        </label>
        `}updateValue(t){var e=t.target;this._checked=e.checked}};pt([rt()],ut.prototype,"_checked",void 0),ut=pt([st("neo-checkbox")],ut);const ft=r`

button{
            padding:10px;
            border:none;
            outline:none;
            margin:7px;
            color:#4793F8;
            font-weight: bold;
            min-width:120px;
            max-width:300px;
            word-break:break-word;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            border-radius:15px;
            transition:all 0.3s ease;
            cursor:pointer;
            box-shadow:3px 3px 4px rgba(122, 122, 122, 0.377), -4px -4px 6px  white,inset 3px 3px 4px #2b76d8;
            background:#4793F8;
            color:white;
        }
        
        button:hover{
            background:#f6f7f8;
            color:#4793F8;
            transform:scale(1.1);
            box-shadow: inset 2px 2px 2px #BABECC, inset -2px -2px 2px  #f5f5f5 ;
        }
`;var vt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let gt=class extends ot{static get styles(){return ft}render(){return j`
            <button>
                <slot></slot>
            </button>
        
        `}};vt([rt()],gt.prototype,"color",void 0),gt=vt([st("neo-button")],gt);var xt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let yt=class extends ot{static get styles(){return r`
        .neoContainer{
            min-width:100px;
            min-height:100px;
            border-radius:20px;
            box-shadow: 6px 6px 16px 0 rgba(0, 0, 0, 0.25),
   -3px -3px 12px 0 rgba(255, 255, 255, 0.3);
            background: linear-gradient(-45deg, rgba(104, 104, 104, 0.6);, rgba(255,255,255,0.25));
        }
    `}render(){return j`
            <div  style="width:${this.width} ;height:${this.height}"  class="neoContainer">
                <slot></slot>
            </div>
        `}};xt([rt()],yt.prototype,"width",void 0),xt([rt()],yt.prototype,"height",void 0),yt=xt([st("neo-container")],yt);const bt=r`

.neoDropDown{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    margin:5px;
    width:150px;
    border-radius:6px;
    background:#f6f7f8;
    box-shadow:   3px 2px 5px #e1e4f0,  -5px -5px 10px white;
    display:flex;
    flex-direction:column;
    align-items:center;
    transition: all 0.5s ease-in-out;
}
.neoDropDownBtn{
    width:100%;
    height: 40px;
    border-radius:6px;
    cursor: pointer;
    display:flex;
    color:#abd5f1;
    justify-content:center;
    align-items:center;
}
.neoDropDownList{
    width:100%;
    flex-direction:column;
    align-items:center;
    transform:scale(0);
    height:0;
    transition: all 0.2s ease-in-out;
}
.neoDropDown:hover{
    box-shadow:  inset 3px 2px 5px #e1e4f0, inset -5px -5px 10px white;
}
.neoDropDown:hover  .neoDropDownList{
    transform:scale(1);
    height:auto;
}
.neoDropDown:hover .neoDropDownBtn{
    box-shadow:  none;
}
.neoDropDownOption{
    margin:4px;
    height: 30px;
    width:90%;
    cursor: pointer;
    border-radius:6px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.1s ease-in-out;
}
.neoDropDownOption:hover{
    background:#abd5f1;
    color:white;
    box-shadow:   2px 2px 5px #e1e4f0,  -3px -3px 10px white;
}
.selected{
    backrgound:red;
}
.unselected{
    
}
}

`;var mt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let wt=class extends ot{constructor(){super(...arguments),this._selected={key:null,value:null}}static get styles(){return bt}get selected(){return this._selected}render(){return j`
            <div class="neoDropDown">
                <div class="neoDropDownBtn">
                       <slot></slot>
                </div>
                <div class="neoDropDownList" @click=${this.updateValue}>
                        ${this.options.map((t=>j`<div class="neoDropDownOption "  key=${t.key}>${t.value}</div>`))} 
                </div>
            </div>
        `}updateValue(t){var e=t.target,i=parseInt(e.getAttribute("key")),o=this.options.filter((t=>t.key==i))[0];this.shadowRoot.querySelector(".neoDropDownBtn").innerHTML=o.value,this._selected=o}};mt([rt()],wt.prototype,"options",void 0),wt=mt([st("neo-dropdown")],wt);const St=r`
.progressBar{
    width:100%;
    height:12px;
    margin:5px;
    border-radius:30px;
    display:flex;
    align-items:center;
    background: #f6f7f8;
    box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px  white;
    overflow: hidden;
}
.progressBarLine{
    height: 6px;
    margin:2px;
    border-radius:5px;
    background:#abd5f1;
    box-shadow:   3px 2px 5px #e1e4f0,  -5px -5px 10px white;
    }
`;var kt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Ct=class extends ot{static get styles(){return[St]}render(){return j`
            <div class="progressBar">
                <div class="progressBarLine" style="width:${this.value}%" ></div>
            </div>
        `}};return kt([rt()],Ct.prototype,"value",void 0),Ct=kt([st("neo-progressbar")],Ct),exports.NeoInput=ct,exports.NeoCheckbox=ut,exports.NeoButton=gt,exports.NeoContainer=yt,exports.NeoDropDown=wt,exports.NeoProgressBar=Ct,t})()}));