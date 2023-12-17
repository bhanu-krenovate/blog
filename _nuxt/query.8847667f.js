import{X as U,l as m,Y as K,Z as N,$ as H,_ as M}from"./entry.458769a9.js";import{u as A}from"./preview.0faffdc6.js";const B=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function I(n,r){r?r={...B,...r}:r=B;const i=O(r);return i.dispatch(n),i.toString()}const q=Object.freeze(["prototype","__proto__","constructor"]);function O(n){let r="",i=new Map;const t=e=>{r+=e};return{toString(){return r},getContext(){return i},dispatch(e){return n.replacer&&(e=n.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const o=Object.prototype.toString.call(e);let s="";const c=o.length;c<10?s="unknown:["+o+"]":s=o.slice(8,c-1),s=s.toLowerCase();let a=null;if((a=i.get(e))===void 0)i.set(e,i.size);else return this.dispatch("[CIRCULAR:"+a+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](e):n.ignoreUnknown||this.unkown(e,s);else{let h=Object.keys(e);n.unorderedObjects&&(h=h.sort());let l=[];n.respectType!==!1&&!S(e)&&(l=q),n.excludeKeys&&(h=h.filter(u=>!n.excludeKeys(u)),l=l.filter(u=>!n.excludeKeys(u))),t("object:"+(h.length+l.length)+":");const f=u=>{this.dispatch(u),t(":"),n.excludeValues||this.dispatch(e[u]),t(",")};for(const u of h)f(u);for(const u of l)f(u)}},array(e,o){if(o=o===void 0?n.unorderedArrays!==!1:o,t("array:"+e.length+":"),!o||e.length<=1){for(const a of e)this.dispatch(a);return}const s=new Map,c=e.map(a=>{const h=O(n);h.dispatch(a);for(const[l,f]of h.getContext())s.set(l,f);return h.toString()});return i=s,c.sort(),this.array(c,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,o){if(t(o),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),S(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const o=[...e];return this.array(o,n.unorderedSets!==!1)},set(e){t("set:");const o=[...e];return this.array(o,n.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const $="[native code] }",W=$.length;function S(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-W)===$}class d{constructor(r,i){r=this.words=r||[],this.sigBytes=i===void 0?r.length*4:i}toString(r){return(r||Q).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let i=0;i<r.sigBytes;i++){const t=r.words[i>>>2]>>>24-i%4*8&255;this.words[this.sigBytes+i>>>2]|=t<<24-(this.sigBytes+i)%4*8}else for(let i=0;i<r.sigBytes;i+=4)this.words[this.sigBytes+i>>>2]=r.words[i>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new d([...this.words])}}const Q={stringify(n){const r=[];for(let i=0;i<n.sigBytes;i++){const t=n.words[i>>>2]>>>24-i%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},J={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,o=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,s=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|o<<8|s;for(let a=0;a<4&&t*8+a*6<n.sigBytes*8;a++)i.push(r.charAt(c>>>6*(3-a)&63))}return i.join("")}},V={parse(n){const r=n.length,i=[];for(let t=0;t<r;t++)i[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new d(i,r)}},G={parse(n){return V.parse(unescape(encodeURIComponent(n)))}};class X{constructor(){this._data=new d,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new d,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=G.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,i){}_process(r){let i,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,o=Math.min(e*4,this._data.sigBytes);if(e){for(let s=0;s<e;s+=this.blockSize)this._doProcessBlock(this._data.words,s);i=this._data.words.splice(0,e),this._data.sigBytes-=o}return new d(i,o)}}class Y extends X{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const x=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Z=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],y=[];class tt extends Y{constructor(){super(...arguments),this._hash=new d([...x])}reset(){super.reset(),this._hash=new d([...x])}_doProcessBlock(r,i){const t=this._hash.words;let e=t[0],o=t[1],s=t[2],c=t[3],a=t[4],h=t[5],l=t[6],f=t[7];for(let u=0;u<64;u++){if(u<16)y[u]=r[i+u]|0;else{const g=y[u-15],F=(g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3,w=y[u-2],T=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;y[u]=F+y[u-7]+T+y[u-16]}const L=a&h^~a&l,E=e&o^e&s^o&s,R=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),j=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),b=f+j+L+Z[u]+y[u],D=R+E;f=l,l=h,h=a,a=c+b|0,c=s,s=o,o=e,e=b+D|0}t[0]=t[0]+e|0,t[1]=t[1]+o|0,t[2]=t[2]+s|0,t[3]=t[3]+c|0,t[4]=t[4]+a|0,t[5]=t[5]+h|0,t[6]=t[6]+l|0,t[7]=t[7]+f|0}finalize(r){super.finalize(r);const i=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(i/4294967296),this._data.words[(t+64>>>9<<4)+15]=i,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function et(n){return new tt().finalize(n).toString(J)}function k(n,r={}){const i=typeof n=="string"?n:I(n,r);return et(i).slice(0,10)}const C=(n,r)=>r.split(".").reduce((i,t)=>i&&i[t],n),_=(n,r)=>Object.keys(n).filter(r).reduce((i,t)=>Object.assign(i,{[t]:n[t]}),{}),ht=n=>r=>n&&n.length?_(r,i=>!n.includes(i)):r,lt=n=>r=>Array.isArray(r)?r.map(i=>n(i)):n(r),v=n=>{const r=[],i=[];for(const t of n)["$","_"].includes(t)?r.push(t):i.push(t);return{prefixes:r,properties:i}},ft=(n=[])=>r=>{if(n.length===0||!r)return r;const{prefixes:i,properties:t}=v(n);return _(r,e=>!t.includes(e)&&!i.includes(e[0]))},pt=(n=[])=>r=>{if(n.length===0||!r)return r;const{prefixes:i,properties:t}=v(n);return _(r,e=>t.includes(e)||i.includes(e[0]))},dt=(n,r)=>{const i=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),t=Object.keys(r).filter(e=>!e.startsWith("$"));for(const e of t)n=n.sort((o,s)=>{const c=[C(o,e),C(s,e)].map(a=>{if(a!==null)return a instanceof Date?a.toISOString():a});return r[e]===-1&&c.reverse(),i.compare(c[0],c[1])});return n},yt=(n,r="Expected an array")=>{if(!Array.isArray(n))throw new TypeError(r)},p=n=>Array.isArray(n)?n:[void 0,null].includes(n)?[]:[n],rt=["sort","where","only","without"];function nt(n,r={}){const i={};for(const s of Object.keys(r.initialParams||{}))i[s]=rt.includes(s)?p(r.initialParams[s]):r.initialParams[s];const t=(s,c=a=>a)=>(...a)=>(i[s]=c(...a),o),e=s=>{var c;return r.legacy?s!=null&&s.surround?s.surround:s&&(s!=null&&s.dirConfig&&(s.result={_path:(c=s.dirConfig)==null?void 0:c._path,...s.result,_dir:s.dirConfig}),s!=null&&s._path||Array.isArray(s)||!Object.prototype.hasOwnProperty.call(s,"result")?s:s==null?void 0:s.result):s},o={params:()=>({...i,...i.where?{where:[...p(i.where)]}:{},...i.sort?{sort:[...p(i.sort)]}:{}}),only:t("only",p),without:t("without",p),where:t("where",s=>[...p(i.where),...p(s)]),sort:t("sort",s=>[...p(i.sort),...p(s)]),limit:t("limit",s=>parseInt(String(s),10)),skip:t("skip",s=>parseInt(String(s),10)),find:()=>n(o).then(e),findOne:()=>n(t("first")(!0)).then(e),count:()=>n(t("count")(!0)).then(e),locale:s=>o.where({_locale:s}),withSurround:t("surround",(s,c)=>({query:s,...c})),withDirConfig:()=>t("dirConfig")(!0)};return r.legacy&&(o.findSurround=(s,c)=>o.withSurround(s,c).find().then(e)),o}function z(n){return JSON.stringify(n,st)}function st(n,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const it=n=>{let r=z(n);return r=typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r),r=r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(r.match(/.{1,100}/g)||[]).join("/")},P=n=>U(n,m().public.content.api.baseURL),gt=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},ot=()=>{const{experimental:n}=m().public.content;return n.clientDB?!0:A().isEnabled()},at=()=>async n=>{const{content:r}=m().public,i=n.params(),t=r.experimental.stripQueryParameters?P(`/query/${`${k(i)}.${r.integrity}`}/${it(i)}.json`):P(`/query/${k(i)}.${r.integrity}.json`);if(ot())return(await M(()=>import("./client-db.6484a496.js"),["./client-db.6484a496.js","./entry.458769a9.js","./index.b0fe9fac.js","./preview.0faffdc6.js"],import.meta.url).then(s=>s.useContentDatabase())).fetch(n);const e=await $fetch(t,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:z(i),previewToken:A().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};function wt(n,...r){const{content:i}=m().public,t=nt(at(),{initialParams:typeof n!="string"?n:{},legacy:!0});let e;typeof n=="string"&&(e=K(N(n,...r)));const o=t.params;return t.params=()=>{var c,a,h;const s=o();return e&&(s.where=s.where||[],s.first&&(s.where||[]).length===0?s.where.push({_path:H(e)}):s.where.push({_path:new RegExp(`^${e.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=s.sort)!=null&&c.length||(s.sort=[{_file:1,$numeric:!0}]),i.locales.length&&((h=(a=s.where)==null?void 0:a.find(f=>f._locale))!=null&&h._locale||(s.where=s.where||[],s.where.push({_locale:i.defaultLocale}))),s},t}export{yt as a,p as b,dt as c,lt as d,it as e,ft as f,C as g,k as h,pt as i,z as j,nt as k,ht as o,wt as q,ot as s,gt as u,P as w};
