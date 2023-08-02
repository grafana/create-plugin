"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[692],{876:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(2784);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),d=n,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||i;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5383:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(7896),n=(o(2784),o(876));const i={id:"set-up-github-workflows",title:"Set up GitHub workflows",sidebar_position:3},a=void 0,l={unversionedId:"create-a-plugin/set-up-github-workflows",id:"create-a-plugin/set-up-github-workflows",title:"Set up GitHub workflows",description:"Automate your development process to minimize errors and make it faster and more cost-efficient. The create-plugin tool helps you to configure your GitHub actions workflows to help automate your development process.",source:"@site/../docs/create-a-plugin/set-up-github-workflows.md",sourceDirName:"create-a-plugin",slug:"/create-a-plugin/set-up-github-workflows",permalink:"/plugin-tools/docs/create-a-plugin/set-up-github-workflows",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/create-a-plugin/set-up-github-workflows.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"set-up-github-workflows",title:"Set up GitHub workflows",sidebar_position:3},sidebar:"docs",previous:{title:"Backend",permalink:"/plugin-tools/docs/create-a-plugin/backend"},next:{title:"Extend configurations",permalink:"/plugin-tools/docs/create-a-plugin/extend-configurations"}},s={},p=[{value:"The CI workflow",id:"the-ci-workflow",level:2},{value:"The release workflow",id:"the-release-workflow",level:2},{value:"The compatibility check (<code>is-compatible.yml</code>)",id:"the-compatibility-check-is-compatibleyml",level:2}],u={toc:p},c="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Automate your development process to minimize errors and make it faster and more cost-efficient. The ",(0,n.kt)("inlineCode",{parentName:"p"},"create-plugin")," tool helps you to configure your GitHub actions workflows to help automate your development process."),(0,n.kt)("h2",{id:"the-ci-workflow"},"The CI workflow"),(0,n.kt)("p",null,"The CI (",(0,n.kt)("inlineCode",{parentName:"p"},"ci.yml"),") workflow is designed to lint, type check, and build the frontend and backend. It is also used to run tests on your plugin every time you push changes to your repository. The ",(0,n.kt)("inlineCode",{parentName:"p"},"create-plugin")," tool helps to catch any issues early in the development process, before they become bigger problems."),(0,n.kt)("h2",{id:"the-release-workflow"},"The release workflow"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This workflow requires a Grafana Cloud API key. Before you begin, follow the instructions for ",(0,n.kt)("a",{parentName:"p",href:"/plugin-tools/docs/publish-a-plugin/distribute-a-plugin"},"distributing your plugin"),".")),(0,n.kt)("p",null,"The release (",(0,n.kt)("inlineCode",{parentName:"p"},"release.yml"),") workflow is designed to create a new release of your plugin whenever you're ready to publish a new version. This automates the process of creating releases in GitHub and provides instructions for submitting the plugin to the Grafana plugin catalog."),(0,n.kt)("p",null,"To trigger the release workflow, push a Git tag for the plugin version that you want to release:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git tag v1.0.0\ngit push origin v1.0.0\n")),(0,n.kt)("h2",{id:"the-compatibility-check-is-compatibleyml"},"The compatibility check (",(0,n.kt)("inlineCode",{parentName:"h2"},"is-compatible.yml"),")"),(0,n.kt)("p",null,"The compatibility check (",(0,n.kt)("inlineCode",{parentName:"p"},"is-compatible.yml"),") workflow is designed to check the Grafana API compatibility of your plugin every time you push changes to your repository. This helps to catch potential frontend runtime issues before they occur."),(0,n.kt)("p",null,"The workflow contains the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Finding ",(0,n.kt)("inlineCode",{parentName:"li"},"@grafana")," npm packages in your plugin."),(0,n.kt)("li",{parentName:"ol"},"Extracting the exported types of the specified version."),(0,n.kt)("li",{parentName:"ol"},"Comparing the differences between that version and the latest version."),(0,n.kt)("li",{parentName:"ol"},"Looking for usages of those changed APIs inside your plugin."),(0,n.kt)("li",{parentName:"ol"},"Reporting any potential incompatibilities.")))}f.isMDXComponent=!0}}]);