import{_ as c}from"../chunks/preload-helper.41c905a7.js";import{S as u,i as m,s as f,k as p,l as w,m as g,h as l,n as r,p as o,b as v,F as _,o as y,w as b}from"../chunks/index.6fd590cb.js";function k(n){let t;return{c(){t=p("div"),this.h()},l(e){t=w(e,"DIV",{id:!0,style:!0,class:!0}),g(t).forEach(l),this.h()},h(){r(t,"id","tetris"),o(t,"--width",n[0]),r(t,"class","svelte-xkgnyk")},m(e,s){v(e,t,s),n[2](t)},p(e,[s]){s&1&&o(t,"--width",e[0])},i:_,o:_,d(e){e&&l(t),n[2](null)}}}function E(n,t,e){let s,{width:a="400px"}=t;y(async()=>{const i=await(await c(()=>import("../chunks/tetris-ts.10a8d090.js").then(h=>h.t),[],import.meta.url)).default;new i(s,()=>{})});function d(i){b[i?"unshift":"push"](()=>{s=i,e(1,s)})}return n.$$set=i=>{"width"in i&&e(0,a=i.width)},[a,s,d]}class D extends u{constructor(t){super(),m(this,t,E,k,f,{width:0})}}export{D as default};
