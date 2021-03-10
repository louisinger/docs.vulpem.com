(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),s=(t(0),t(86)),i={id:"balances",title:"Display Balances",image:"/img/marina_logo.svg"},o={unversionedId:"marina/balances",id:"marina/balances",isDocsHomePage:!1,title:"Display Balances",description:"Once the user accepted the request to connect with your application, you can access his addresses and relative blinding keys. This can compromise user privacy, be very mindful how you handle this secret material, altough you cannot spend or put user's funds at risks.",source:"@site/docs/marina/balances.md",slug:"/marina/balances",permalink:"/marina/balances",editUrl:"https://github.com/vulpemventures/docs.vulpem.com/edit/master/docs/docs/marina/balances.md",version:"current",sidebar:"docs",previous:{title:"Connect to Marina",permalink:"/marina/connect"},next:{title:"Send Transaction",permalink:"/marina/transaction"}},c=[{value:"New address",id:"new-address",children:[]},{value:"New change address",id:"new-change-address",children:[]},{value:"All addresses",id:"all-addresses",children:[]},{value:"Fetch and unblind utxos",id:"fetch-and-unblind-utxos",children:[]}],d={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Once the user accepted the request to ",Object(s.b)("a",{parentName:"p",href:"/marina/connect"},"connect")," with your application, you can access his addresses and relative blinding keys. This can compromise user privacy, be very mindful how you handle this secret material, altough you cannot spend or put user's funds at risks."),Object(s.b)("p",null,"In order to have the app to build an unsigned transaction on behalf of the user, one must be able to access the user's addresses and blinders necessary to reveal user's asset and amounts held by those addresses."),Object(s.b)("h2",{id:"new-address"},"New address"),Object(s.b)("p",null,"Derive a new confidential address and his blinding key for receiving funds"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"await window.marina.getNextAddress();\n/*\n{\n  confidentialAddress: string;\n  blindingPrivateKey: string;\n  derivationPath?: string;\n}\n*/\n")),Object(s.b)("h2",{id:"new-change-address"},"New change address"),Object(s.b)("p",null,"Derive a new confidential address and his blinding key to be used as ",Object(s.b)("strong",{parentName:"p"},"change")," output"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"await window.marina.getNextChangeAddress();\n/*\n{\n  confidentialAddress: string;\n  blindingPrivateKey: string;\n  derivationPath?: string;\n}\n*/\n")),Object(s.b)("h2",{id:"all-addresses"},"All addresses"),Object(s.b)("p",null,"Retrieve all dervied confidential addresses with blidning keys till now"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"await window.marina.getAddresses();\n")),Object(s.b)("h2",{id:"fetch-and-unblind-utxos"},"Fetch and unblind utxos"),Object(s.b)("p",null,"Example using ",Object(s.b)("inlineCode",{parentName:"p"},"fetchAndUnblindUtxos")," from ",Object(s.b)("inlineCode",{parentName:"p"},"ldk")," package. In production prefer generator syntax exposed via ",Object(s.b)("inlineCode",{parentName:"p"},"fetchAndUnblindUtxosGenerator")," method instead."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"import { fetchAndUnblindUtxos } from 'ldk';\n\n//...\n\n// Get al addresses from marina\nconst addrs = await window.marina.getAddresses();\n\n// fetch and unblind all utxos for given array of address\n//\n// THIS CAN TAKE A LOT OF TIME TO COMPLETE!\n// use fetchAndUnblindUtxosGenerator instead\nconst utxos = await fetchAndUnblindUtxos(addrs, ESPLORA_API_URL);\n\n// It will return an array of unblinded utxos\n// we suggest to cache unblindData in order to speed-up \n// future transaction building and blinding.\nconsole.log(utxos);\n/* \n[\n  {\n    txid: string;\n    vout: number;\n    asset?: string;\n    value?: number;\n    prevout?: TxOutput;\n    unblindData?: confidential.UnblindOutputResult;\n  }\n] \n*/\n")))}l.isMDXComponent=!0},86:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||s;return t?r.a.createElement(m,o(o({ref:n},d),{},{components:t})):r.a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);