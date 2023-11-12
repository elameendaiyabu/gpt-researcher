"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(r),k=a,m=g["".concat(i,".").concat(k)]||g[k]||u[k]||o;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},389:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},p="Getting Started",l={unversionedId:"gpt-researcher/getting-started",id:"gpt-researcher/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Quickstart",source:"@site/docs/gpt-researcher/getting-started.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/getting-started",permalink:"/docs/gpt-researcher/getting-started",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/gpt-researcher/introduction"},next:{title:"PIP Package",permalink:"/docs/gpt-researcher/pip-package"}},i=[{value:"Quickstart",id:"quickstart",children:[],level:2},{value:"Try it with Docker",id:"try-it-with-docker",children:[],level:2},{value:"Try it with PIP Pacakge",id:"try-it-with-pip-pacakge",children:[],level:2}],c={toc:i};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 0")," - Install Python 3.11 or later. ",(0,a.kt)("a",{parentName:"p",href:"https://www.tutorialsteacher.com/python/install-python"},"See here")," for a step-by-step guide.")),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 1")," - Download the project")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/assafelovic/gpt-researcher.git\n$ cd gpt-researcher\n")),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 2")," - Install dependencies"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pip install -r requirements.txt\n")),(0,a.kt)("br",null)),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," - Create .env file with your OpenAI Key and Tavily API key or simply export it")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export OPENAI_API_KEY={Your OpenAI API Key here}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export TAVILY_API_KEY={Your Tavily API Key here}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"For LLM, we recommend ",(0,a.kt)("a",{parentName:"strong",href:"https://platform.openai.com/docs/guides/gpt"},"OpenAI GPT")),", but you can use any other LLM model (including open sources) supported by ",(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/guides/adapters/openai"},"Langchain Adapter"),", simply change the llm model and provider in config/config.py. Follow ",(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/integrations/llms/"},"this guide")," to learn how to integrate LLMs with Langchain. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"For search engine, we recommend ",(0,a.kt)("a",{parentName:"strong",href:"https://app.tavily.com"},"Tavily Search API")," (optimized for LLMs)"),", but you can also refer to other search engines of your choice by changing the search provider in config/config.py to ",(0,a.kt)("inlineCode",{parentName:"li"},'"duckduckgo"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"googleAPI"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"googleSerp"'),", or ",(0,a.kt)("inlineCode",{parentName:"li"},'"searx"'),". Then add the corresponding env API key as seen in the config.py file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"We highly recommend using ",(0,a.kt)("a",{parentName:"strong",href:"https://platform.openai.com/docs/guides/gpt"},"OpenAI GPT")," models and ",(0,a.kt)("a",{parentName:"strong",href:"https://app.tavily.com"},"Tavily Search API")," for optimal performance."))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 4")," - Run the agent with FastAPI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ uvicorn main:app --reload\n")),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 5")," - Go to http://localhost:8000 on any browser and enjoy researching!")),(0,a.kt)("h2",{id:"try-it-with-docker"},"Try it with Docker"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 1")," - Install Docker")),(0,a.kt)("p",null,"Follow instructions at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 2")," - Create .env file with your OpenAI Key or simply export it")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export OPENAI_API_KEY={Your API Key here}\n$ export TAVILY_API_KEY={Your Tavily API Key here}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," - Run the application")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 4")," - Go to http://localhost:8000 on any browser and enjoy researching!")),(0,a.kt)("h2",{id:"try-it-with-pip-pacakge"},"Try it with PIP Pacakge"))}s.isMDXComponent=!0}}]);