"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[465],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>k});var o=n(7896),a=(n(2784),n(876)),r=n(9448);const i={toc:[]},l="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm dlx @grafana/create-plugin@latest update\n")))}p.isMDXComponent=!0;const s={toc:[]},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create @grafana/plugin update\n")))}c.isMDXComponent=!0;const d={id:"update-to-new-releases",title:"Update to new releases",sidebar_position:4},m=void 0,g={unversionedId:"get-started/update-to-new-releases",id:"get-started/update-to-new-releases",title:"Update to new releases",description:"To update an existing plugin to use a newer version of the create-plugin tool, run the following command:",source:"@site/../docs/get-started/update-to-new-releases.mdx",sourceDirName:"get-started",slug:"/get-started/update-to-new-releases",permalink:"/plugin-tools/docs/get-started/update-to-new-releases",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/get-started/update-to-new-releases.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"update-to-new-releases",title:"Update to new releases",sidebar_position:4},sidebar:"docs",previous:{title:"Set up development environment",permalink:"/plugin-tools/docs/get-started/set-up-development-environment"},next:{title:"Migrate from Grafana Toolkit",permalink:"/plugin-tools/docs/get-started/migrate-from-toolkit"}},f={},k=[{value:"Prompts",id:"prompts",level:2},{value:"Would you like to update the project&#39;s configuration?",id:"would-you-like-to-update-the-projects-configuration",level:3},{value:"Would you like to update the following dependencies in the <code>package.json</code>?",id:"would-you-like-to-update-the-following-dependencies-in-the-packagejson",level:3},{value:"Would you like to update the scripts in your <code>package.json</code>? All scripts using grafana-toolkit will be replaced.",id:"would-you-like-to-update-the-scripts-in-your-packagejson-all-scripts-using-grafana-toolkit-will-be-replaced",level:3}],h=(y="CodeSnippets",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var y;const w={toc:k},b="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To update an existing plugin to use a newer version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-plugin")," tool, run the following command:"),(0,a.kt)(h,{snippets:[{component:r.ZP,label:"npm"},{component:p,label:"pnpm"},{component:c,label:"yarn"}],groupId:"package-manager",queryString:"current-package-manager",mdxType:"CodeSnippets"}),(0,a.kt)("p",null,"This command reruns the original scaffolding commands against the configuration files, dependencies, and scripts. It automatically uses the latest version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-plugin")," tool. It prompts you to confirm any destructive operations before it runs."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommended that you normally agree to all prompts so that configs, dependencies, and scripts are kept in sync.")),(0,a.kt)("h2",{id:"prompts"},"Prompts"),(0,a.kt)("p",null,"When you run the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," command, you are prompted with the following questions. The default for each prompt is ",(0,a.kt)("inlineCode",{parentName:"p"},"No"),"."),(0,a.kt)("h3",{id:"would-you-like-to-update-the-projects-configuration"},"Would you like to update the project's configuration?"),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," to replace the files inside the ",(0,a.kt)("inlineCode",{parentName:"p"},".config")," directory. By doing so, you can make sure that the plugin is built and tested with the latest Grafana recommended configurations."),(0,a.kt)("h3",{id:"would-you-like-to-update-the-following-dependencies-in-the-packagejson"},"Would you like to update the following dependencies in the ",(0,a.kt)("inlineCode",{parentName:"h3"},"package.json"),"?"),(0,a.kt)("p",null,"Select from the following choices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Yes, all of them"),":")," This updates all existing dependencies and adds any missing dependencies to ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Yes, but only the outdated ones"),":")," This updates all existing dependencies in ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"No"),":")," This choice skips this step, thus preventing any dependency updates.")),(0,a.kt)("p",null,"Note that if there are no dependencies then you will not see this prompt."),(0,a.kt)("h3",{id:"would-you-like-to-update-the-scripts-in-your-packagejson-all-scripts-using-grafana-toolkit-will-be-replaced"},"Would you like to update the scripts in your ",(0,a.kt)("inlineCode",{parentName:"h3"},"package.json"),"? All scripts using grafana-toolkit will be replaced."),(0,a.kt)("p",null,"Select 'y' to update any npm scripts in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file to match the latest configurations. Any scripts that previously used ",(0,a.kt)("inlineCode",{parentName:"p"},"grafana-toolkit")," are replaced."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We strongly recommend that you consult the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grafana/plugin-tools/blob/main/CHANGELOG.md"},"changelog")," for potential breaking changes before making changes to your configuration.")))}v.isMDXComponent=!0},9448:(e,t,n)=>{n.d(t,{ZP:()=>l});var o=n(7896),a=(n(2784),n(876));const r={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx @grafana/create-plugin@latest update\n")))}l.isMDXComponent=!0}}]);