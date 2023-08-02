"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[468],{876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(c,".").concat(g)]||u[g]||f[g]||i;return n?o.createElement(d,a(a({ref:t},l),{},{components:n})):o.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7896),r=(n(2784),n(876));const i={id:"extend-configurations",title:"Extend configurations",sidebar_position:4},a=void 0,s={unversionedId:"create-a-plugin/extend-configurations",id:"create-a-plugin/extend-configurations",title:"Extend configurations",description:"The .config/ directory holds the preferred configuration for the different tools used to develop, test, and build a Grafana plugin. Although you can make changes, we recommend against doing so. Instead, follow the guidance in this topic to customize your tooling configs.",source:"@site/../docs/create-a-plugin/extend-configurations.md",sourceDirName:"create-a-plugin",slug:"/create-a-plugin/extend-configurations",permalink:"/plugin-tools/docs/create-a-plugin/extend-configurations",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/create-a-plugin/extend-configurations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"extend-configurations",title:"Extend configurations",sidebar_position:4},sidebar:"docs",previous:{title:"Set up GitHub workflows",permalink:"/plugin-tools/docs/create-a-plugin/set-up-github-workflows"},next:{title:"Nested plugins",permalink:"/plugin-tools/docs/create-a-plugin/nested-plugins"}},c={},p=[{value:"Extend the ESLint config",id:"extend-the-eslint-config",level:2},{value:"Extend the Prettier config",id:"extend-the-prettier-config",level:2},{value:"Extend the Jest config",id:"extend-the-jest-config",level:2},{value:"ESM errors with Jest",id:"esm-errors-with-jest",level:3},{value:"Extend the TypeScript config",id:"extend-the-typescript-config",level:2},{value:"Extend the Webpack config",id:"extend-the-webpack-config",level:2},{value:"1. Create a new Webpack configuration file",id:"1-create-a-new-webpack-configuration-file",level:3},{value:"2. Merge the Grafana config with your custom config",id:"2-merge-the-grafana-config-with-your-custom-config",level:3},{value:"3. Update the <code>package.json</code> to use the new Webpack config",id:"3-update-the-packagejson-to-use-the-new-webpack-config",level:3}],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".config/")," directory holds the preferred configuration for the different tools used to develop, test, and build a Grafana plugin. Although you can make changes, we recommend against doing so. Instead, follow the guidance in this topic to customize your tooling configs."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not edit the ",(0,r.kt)("inlineCode",{parentName:"p"},".config/")," directory or extend the tooling configurations. If you attempt to do so, then you may experience issues such as failure to compile or load in Grafana. Instead of changing the files directly, follow the instructions in this topic to make advanced configurations.")),(0,r.kt)("h2",{id:"extend-the-eslint-config"},"Extend the ESLint config"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc")," file in the project root to extend the ESLint configuration:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Eslint configuration provided by @grafana/create-plugin\n  "extends": "./.config/.eslintrc",\n  "rules": {\n    "react/prop-types": "off"\n  }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extend-the-prettier-config"},"Extend the Prettier config"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},".prettierrc.js")," file in the project root to extend the Prettier configuration:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // Prettier configuration provided by @grafana/create-plugin\n  ...require('./.config/.prettierrc.js'),\n  semi: false,\n};\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extend-the-jest-config"},"Extend the Jest config"),(0,r.kt)("p",null,"There are two files in the project root that belong to Jest: ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-setup.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"jest-setup.js"),":")," This file is run before each test file in the suite is executed. It sets up Jest DOM for the testing library and applies some polyfills. For more information, refer to the (",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#setupfilesafterenv-array"},"Jest documentation"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"jest.config.js"),":")," This is the Jest config file that extends the Grafana config. For more information, refer to the (",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration"},"est documentation"),")."),(0,r.kt)("h3",{id:"esm-errors-with-jest"},"ESM errors with Jest"),(0,r.kt)("p",null,"A common issue with the current Jest config involves importing an npm package which only offers an ESM build. These packages cause Jest to generate the error: ",(0,r.kt)("inlineCode",{parentName:"p"},"SyntaxError: Cannot use import statement outside a module"),". "),(0,r.kt)("p",null,"To work around this issue, use one of the packages known to pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[transformIgnorePatterns](https://jestjs.io/docs/configuration#transformignorepatterns-arraystring)")," Jest configuration property. "),(0,r.kt)("p",null,"To use these packages, extend them in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"process.env.TZ = 'UTC';\nconst { grafanaESModules, nodeModulesToTransform } = require('./.config/jest/utils');\n\nmodule.exports = {\n  // Jest configuration provided by @grafana/create-plugin\n  ...require('./.config/jest.config'),\n  // Inform Jest to only transform specific node_module packages.\n  transformIgnorePatterns: [nodeModulesToTransform([...grafanaESModules, 'packageName'])],\n};\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extend-the-typescript-config"},"Extend the TypeScript config"),(0,r.kt)("p",null,"To extend the TS configuration, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file in the project root:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // TypeScript configuration provided by @grafana/create-plugin\n  "extends": "./.config/tsconfig.json",\n  "compilerOptions": {\n    "preserveConstEnums": true\n  }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extend-the-webpack-config"},"Extend the Webpack config"),(0,r.kt)("p",null,"Follow these steps to extend the Webpack configuration that lives in ",(0,r.kt)("inlineCode",{parentName:"p"},".config/"),":"),(0,r.kt)("h3",{id:"1-create-a-new-webpack-configuration-file"},"1. Create a new Webpack configuration file"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.ts")," file in the project root. This file extends the Webpack config provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"create-plugin"),"."),(0,r.kt)("h3",{id:"2-merge-the-grafana-config-with-your-custom-config"},"2. Merge the Grafana config with your custom config"),(0,r.kt)("p",null,"Use the following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/survivejs/webpack-merge"},"webpack-merge")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// webpack.config.ts\nimport type { Configuration } from 'webpack';\nimport { merge } from 'webpack-merge';\nimport grafanaConfig from './.config/webpack/webpack.config';\n\nconst config = async (env): Promise<Configuration> => {\n  const baseConfig = await grafanaConfig(env);\n\n  return merge(baseConfig, {\n    // Add custom config here...\n    output: {\n      asyncChunks: true,\n    },\n  });\n};\n\nexport default config;\n")),(0,r.kt)("p",null,'The following alternative customization excludes "libs" via rules in addition to "node_modules". It also provides fallbacks that are no longer present in Webpack v5.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Configuration } from 'webpack';\nimport { mergeWithRules } from 'webpack-merge';\nimport grafanaConfig from './.config/webpack/webpack.config';\n\nconst config = async (env: any): Promise<Configuration> => {\n  const baseConfig = await grafanaConfig(env);\n  const customConfig = {\n    module: {\n      rules: [\n        {\n          exclude: /(node_modules|libs)/,\n        },\n      ],\n    },\n    resolve: {\n      fallback: {\n        crypto: require.resolve('crypto-browserify'),\n        fs: false,\n        path: require.resolve('path-browserify'),\n        stream: require.resolve('stream-browserify'),\n        util: require.resolve(\"util\"),\n      },\n    },\n  };\n  return mergeWithRules({\n    module: {\n      rules: {\n        exclude: 'replace',\n      },\n    },\n  })(baseConfig, customConfig);\n};\n\nexport default config;\n")),(0,r.kt)("h3",{id:"3-update-the-packagejson-to-use-the-new-webpack-config"},"3. Update the ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")," to use the new Webpack config"),(0,r.kt)("p",null,"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," to use the extended Webpack configuration:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update ",(0,r.kt)("inlineCode",{parentName:"strong"},"build"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'-"build": "webpack -c ./.config/webpack/webpack.config.ts --env production",\n+"build": "webpack -c ./webpack.config.ts --env production",\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update ",(0,r.kt)("inlineCode",{parentName:"strong"},"dev"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'-"dev": "webpack -w -c ./.config/webpack/webpack.config.ts --env development",\n+"dev": "webpack -w -c ./webpack.config.ts --env development",\n')))}f.isMDXComponent=!0}}]);