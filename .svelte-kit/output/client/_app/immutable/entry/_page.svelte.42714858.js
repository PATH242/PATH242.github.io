import{S as T,i as R,s as U,k as f,q as $,a as w,l as h,m as p,r as D,h as o,c as A,b as P,D as t,E as C,C as fe,n as b,u as x,y as F,z as J,A as K,g as Q,d as W,B as X}from"../chunks/index.13786dfa.js";function he(g){let e,l,c,a,i;return{c(){e=f("h3"),l=$("Bio:"),c=w(),a=f("p"),i=$("3rd year computer science student at innopolis university")},l(r){e=h(r,"H3",{});var _=p(e);l=D(_,"Bio:"),_.forEach(o),c=A(r),a=h(r,"P",{});var u=p(a);i=D(u,"3rd year computer science student at innopolis university"),u.forEach(o)},m(r,_){P(r,e,_),t(e,l),P(r,c,_),P(r,a,_),t(a,i)},p:C,i:C,o:C,d(r){r&&o(e),r&&o(c),r&&o(a)}}}class ue extends T{constructor(e){super(),R(this,e,null,he,U,{})}}const pe=""+new URL("../assets/loading.1e745bb5.jpg",import.meta.url).href;function _e(g){let e,l,c,a,i,r,_,u,d,m,v;return{c(){e=f("div"),l=f("h3"),c=$(g[0]),a=w(),i=f("img"),_=w(),u=f("h4"),d=$(g[3]),m=w(),v=$(g[4]),this.h()},l(n){e=h(n,"DIV",{id:!0,class:!0});var s=p(e);l=h(s,"H3",{});var y=p(l);c=D(y,g[0]),y.forEach(o),a=A(s),i=h(s,"IMG",{src:!0,alt:!0}),_=A(s),u=h(s,"H4",{});var E=p(u);d=D(E,g[3]),m=A(E),v=D(E,g[4]),E.forEach(o),s.forEach(o),this.h()},h(){fe(i.src,r=g[1])||b(i,"src",r),b(i,"alt",g[2]),b(e,"id","joke"),b(e,"class","svelte-14aprtu")},m(n,s){P(n,e,s),t(e,l),t(l,c),t(e,a),t(e,i),t(e,_),t(e,u),t(u,d),t(u,m),t(u,v)},p(n,[s]){s&1&&x(c,n[0]),s&2&&!fe(i.src,r=n[1])&&b(i,"src",r),s&4&&b(i,"alt",n[2]),s&8&&x(d,n[3]),s&16&&x(v,n[4])},i:C,o:C,d(n){n&&o(e)}}}async function de(){let l=await(await fetch("https://fwd.innopolis.app/api/hw2?email=m.awadallah@innopolis.university")).json(),c=Number(l);return console.log(c),c}function ge(g,e,l){let c="Loading comic",a=pe,i="loading",r,_;async function u(m){var v="https://getxkcd.vercel.app/api/comic?num="+m;let s=await(await fetch(v)).json();l(0,c=s.title),l(1,a=s.img),l(2,i=s.alt);const y=parseInt(s.year),E=parseInt(s.month),M=parseInt(s.day),H=new Date(y,E-1,M),j={weekday:"long",year:"numeric",month:"long",day:"numeric"};l(3,r=H.toLocaleDateString("ar-EG",j)),l(4,_=H.toLocaleDateString("en-US",j))}de().then(m=>d(m)).catch(m=>console.log(m.message));function d(m){console.log(m),u(m).catch(v=>console.log(v.message))}return[c,a,i,r,_]}class ve extends T{constructor(e){super(),R(this,e,ge,_e,U,{})}}function ye(g){let e,l,c,a,i,r,_,u,d,m,v,n,s,y,E,M,H,j,N,z,k,S,O,V,G,q,Y;return{c(){e=f("h3"),l=$("Main projects:"),c=w(),a=f("ul"),i=f("li"),r=f("a"),_=$("Basic Delivery system"),u=w(),d=f("li"),m=f("a"),v=$("Remote file system"),n=w(),s=f("li"),y=f("a"),E=$("Accompaniment Generation"),M=w(),H=f("li"),j=f("a"),N=$("Multiple worlds modelling of system errors"),z=w(),k=f("li"),S=f("a"),O=$("Distributed system using raft algorithm"),V=w(),G=f("li"),q=f("a"),Y=$("Differential-equations solver"),this.h()},l(L){e=h(L,"H3",{});var B=p(e);l=D(B,"Main projects:"),B.forEach(o),c=A(L),a=h(L,"UL",{});var I=p(a);i=h(I,"LI",{});var Z=p(i);r=h(Z,"A",{href:!0});var ee=p(r);_=D(ee,"Basic Delivery system"),ee.forEach(o),Z.forEach(o),u=A(I),d=h(I,"LI",{});var te=p(d);m=h(te,"A",{href:!0});var ae=p(m);v=D(ae,"Remote file system"),ae.forEach(o),te.forEach(o),n=A(I),s=h(I,"LI",{});var se=p(s);y=h(se,"A",{href:!0});var re=p(y);E=D(re,"Accompaniment Generation"),re.forEach(o),se.forEach(o),M=A(I),H=h(I,"LI",{});var ne=p(H);j=h(ne,"A",{href:!0});var oe=p(j);N=D(oe,"Multiple worlds modelling of system errors"),oe.forEach(o),ne.forEach(o),z=A(I),k=h(I,"LI",{});var le=p(k);S=h(le,"A",{href:!0});var ie=p(S);O=D(ie,"Distributed system using raft algorithm"),ie.forEach(o),le.forEach(o),V=A(I),G=h(I,"LI",{});var ce=p(G);q=h(ce,"A",{href:!0});var me=p(q);Y=D(me,"Differential-equations solver"),me.forEach(o),ce.forEach(o),I.forEach(o),this.h()},h(){b(r,"href","https://github.com/Maves1/SSADProject"),b(m,"href","https://github.com/PATH242/System-network-Adminstration-project"),b(y,"href","https://github.com/PATH242/Accompaniment-Generation"),b(j,"href","https://github.com/PATH242/Internship-codes-2021"),b(S,"href","https://github.com/mariammaher550/raft-grpc"),b(q,"href","https://github.com/PATH242/Differential-equations")},m(L,B){P(L,e,B),t(e,l),P(L,c,B),P(L,a,B),t(a,i),t(i,r),t(r,_),t(a,u),t(a,d),t(d,m),t(m,v),t(a,n),t(a,s),t(s,y),t(y,E),t(a,M),t(a,H),t(H,j),t(j,N),t(a,z),t(a,k),t(k,S),t(S,O),t(a,V),t(a,G),t(G,q),t(q,Y)},p:C,i:C,o:C,d(L){L&&o(e),L&&o(c),L&&o(a)}}}class Ee extends T{constructor(e){super(),R(this,e,null,ye,U,{})}}function $e(g){let e,l,c,a,i,r,_,u,d,m,v;return l=new ue({}),a=new Ee({}),r=new ve({}),{c(){e=f("body"),F(l.$$.fragment),c=w(),F(a.$$.fragment),i=w(),F(r.$$.fragment),_=w(),u=f("main"),d=f("h3"),m=$("Connect on:"),this.h()},l(n){e=h(n,"BODY",{class:!0});var s=p(e);J(l.$$.fragment,s),c=A(s),J(a.$$.fragment,s),i=A(s),J(r.$$.fragment,s),_=A(s),u=h(s,"MAIN",{});var y=p(u);d=h(y,"H3",{});var E=p(d);m=D(E,"Connect on:"),E.forEach(o),y.forEach(o),s.forEach(o),this.h()},h(){b(e,"class","svelte-gm0wqn")},m(n,s){P(n,e,s),K(l,e,null),t(e,c),K(a,e,null),t(e,i),K(r,e,null),t(e,_),t(e,u),t(u,d),t(d,m),v=!0},p:C,i(n){v||(Q(l.$$.fragment,n),Q(a.$$.fragment,n),Q(r.$$.fragment,n),v=!0)},o(n){W(l.$$.fragment,n),W(a.$$.fragment,n),W(r.$$.fragment,n),v=!1},d(n){n&&o(e),X(l),X(a),X(r)}}}class we extends T{constructor(e){super(),R(this,e,null,$e,U,{})}}export{we as default};