"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4756:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Introduction",c={unversionedId:"welcome",id:"welcome",isDocsHomePage:!1,title:"Introduction",description:"Hey there! \ud83d\udc4b",source:"@site/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/docs/welcome",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/welcome.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Introduction",permalink:"/docs/gpt-researcher/introduction"}},s=[{value:"GPT Researcher",id:"gpt-researcher",children:[],level:3},{value:"Tavily Search API",id:"tavily-search-api",children:[],level:3}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Hey there! \ud83d\udc4b"),(0,a.kt)("p",null,"We're a team of AI researchers and developers who are passionate about building the next generation of AI assistants.\nOur mission is to empower individuals and organizations with accurate, unbiased, and factual information."),(0,a.kt)("h3",{id:"gpt-researcher"},"GPT Researcher"),(0,a.kt)("p",null,"In this digital age, quickly accessing relevant and trustworthy information is more crucial than ever. However, we've learned that none of today's search engines provide a suitable tool that provides factual, explicit and objective answers without the need to continuously click and explore multiple sites for a given research task. "),(0,a.kt)("p",null,"This is why we've built the trending open source ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/assafelovic/gpt-researcher"},"GPT Researcher")),". GPT Researcher is an autonomous agent that takes care of the tedious task of research for you, by scraping, filtering and aggregating over 20+ web sources per a single research task. "),(0,a.kt)("p",null,"To learn more about GPT Researcher, check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/gpt-researcher/introduction"},"documentation page"),"."),(0,a.kt)("h3",{id:"tavily-search-api"},"Tavily Search API"),(0,a.kt)("p",null,"Building an AI agent that leverages realtime online information is not a simple task. Scraping doesn't scale and requires expertise to refine, current search engine APIs don't provide explicit information to queries but simply potential related articles (which are not always related), and are not very customziable for AI agent needs. This is why we're excited to introduce the first search engine for AI agents - ",(0,a.kt)("strong",{parentName:"p"},"Tavily Search API"),"."),(0,a.kt)("p",null,"Tavily Search API is a search engine optimized for LLMs, aimed at efficient, quick and persistent search results. Unlike other search APIs such as Serp or Google, Tavily focuses on optimizing search for AI developers and autonomous AI agents. We take care of all the burden in searching, scraping, filtering and extracting the most relevant information from online sources. All in a single API call! "),(0,a.kt)("p",null,"To learn how to build your AI application with Tavily Search API, check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tavily-api/introduction"},"documentation page"),"."),(0,a.kt)("p",null,"To try our API in action, you can now use GPT Researcher on our hosted version ",(0,a.kt)("a",{parentName:"p",href:"https://app.tavily.com/chat"},"here")," or on our ",(0,a.kt)("a",{parentName:"p",href:"https://app.tavily.com/playground"},"API Playground"),"."),(0,a.kt)("p",null,"If you're an AI developer looking to integrate your application with our API or seek increased API limits, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:support@tavily.com"},"please reach out!"))))}p.isMDXComponent=!0}}]);