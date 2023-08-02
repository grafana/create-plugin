"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[865],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,p(p({ref:t},u),{},{components:n})):r.createElement(g,p({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(7896),a=(n(2784),n(876)),o=n(1850),p=n(5405),i=n(4332);const l={id:"nested-plugins",title:"Nested plugins",sidebar_position:5},s=void 0,u={unversionedId:"create-a-plugin/nested-plugins",id:"create-a-plugin/nested-plugins",title:"Nested plugins",description:"Grafana app plugins can nest frontend data sources together with panel plugins so that you can provide a complete user experience.",source:"@site/../docs/create-a-plugin/nested-plugins.mdx",sourceDirName:"create-a-plugin",slug:"/create-a-plugin/nested-plugins",permalink:"/plugin-tools/docs/create-a-plugin/nested-plugins",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/create-a-plugin/nested-plugins.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"nested-plugins",title:"Nested plugins",sidebar_position:5},sidebar:"docs",previous:{title:"Extend configurations",permalink:"/plugin-tools/docs/create-a-plugin/extend-configurations"},next:{title:"Distribute a plugin",permalink:"/plugin-tools/docs/publish-a-plugin/distribute-a-plugin"}},c={},d=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Scaffold an app plugin",id:"scaffold-an-app-plugin",level:2}],m=(g="CodeSnippets",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var g;const f={toc:d},y="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Grafana app plugins can nest frontend data sources together with panel plugins so that you can provide a complete user experience."),(0,a.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,a.kt)("p",null,"Be sure that you are using the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"create-plugin")," tool:"),(0,a.kt)(m,{snippets:[{component:o.ZP,label:"npm"},{component:p.ZP,label:"pnpm"},{component:i.ZP,label:"yarn"}],groupId:"package-manager",queryString:"current-package-manager",mdxType:"CodeSnippets"}),(0,a.kt)("h2",{id:"scaffold-an-app-plugin"},"Scaffold an app plugin"),(0,a.kt)("p",null,"To scaffold an app plugin, follow a few easy steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When prompted ",(0,a.kt)("inlineCode",{parentName:"p"},"What type of plugin would you like?"),", select ",(0,a.kt)("inlineCode",{parentName:"p"},"app"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make entries in both the plugin entry file (",(0,a.kt)("inlineCode",{parentName:"p"},"module.ts"),") and plugin meta file (",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.json"),"). Put them in a directory inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"./src")," directory:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"bash",bash:!0},"./src\n \u251c\u2500\u2500 README.md\n \u251c\u2500\u2500 components\n+\u251c\u2500\u2500 datasource\n+\u2502   \u251c\u2500\u2500 components\n+\u2502   \u2502   \u251c\u2500\u2500 ConfigEditor.tsx\n+\u2502   \u2502   \u2514\u2500\u2500 QueryEditor.tsx\n+\u2502   \u251c\u2500\u2500 datasource.ts\n+\u2502   \u251c\u2500\u2500 img\n+\u2502   \u251c\u2500\u2500 module.ts\n+\u2502   \u251c\u2500\u2500 plugin.json\n+\u2502   \u2514\u2500\u2500 types.ts\n \u251c\u2500\u2500 img\n \u2502   \u2514\u2500\u2500 logo.svg\n \u251c\u2500\u2500 module.ts\n \u2514\u2500\u2500 plugin.json\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To help speed up development in VS Code, you can download data source and panel plugin source directories directly from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.dev/grafana/grafana-plugin-examples/tree/main/examples"},"plugin-examples repo"),":"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},".")," or replace ",(0,a.kt)("inlineCode",{parentName:"li"},".com")," with ",(0,a.kt)("inlineCode",{parentName:"li"},".dev")," in the URL to open the repo in the GitHub editor."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Explorer")," pane (press Ctrl+Shift+E/Cmd+Shift+E), right-click the required file or folder, and then select ",(0,a.kt)("strong",{parentName:"li"},"Download"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Select Folder")," dialog, select the directory where you want to put the selected file or folder."))))}k.isMDXComponent=!0},1850:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7896),a=(n(2784),n(876));const o={toc:[]},p="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx @grafana/create-plugin@latest\n")))}i.isMDXComponent=!0},5405:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7896),a=(n(2784),n(876));const o={toc:[]},p="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm dlx @grafana/create-plugin@latest\n")))}i.isMDXComponent=!0},4332:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7896),a=(n(2784),n(876));const o={toc:[]},p="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create @grafana/plugin\n")))}i.isMDXComponent=!0}}]);