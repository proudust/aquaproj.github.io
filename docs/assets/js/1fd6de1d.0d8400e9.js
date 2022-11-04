"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4040],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(a),m=r,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3244:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],u={sidebar_position:100},l="Share aqua configuration for teams and organizations",c={unversionedId:"tutorial-extras/team-config",id:"tutorial-extras/team-config",title:"Share aqua configuration for teams and organizations",description:"aqua reads configuration from the environment variable AQUAGLOBALCONFIG.",source:"@site/docs/tutorial-extras/team-config.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/team-config",permalink:"/docs/tutorial-extras/team-config",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/team-config.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Update aqua by `aqua update-aqua` command",permalink:"/docs/tutorial-extras/update-aqua"},next:{title:"Split the list of packages",permalink:"/docs/tutorial-extras/split-config"}},s={},p=[{value:"How to share aqua configuration for teams and organizations",id:"how-to-share-aqua-configuration-for-teams-and-organizations",level:2}],f={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"share-aqua-configuration-for-teams-and-organizations"},"Share aqua configuration for teams and organizations"),(0,o.kt)("p",null,"aqua reads configuration from the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG")," is configuration file paths separated with semicolons ",(0,o.kt)("inlineCode",{parentName:"p"},":"),"."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export AQUA_GLOBAL_CONFIG="/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml:${AQUA_GLOBAL_CONFIG:-}"\n')),(0,o.kt)("p",null,"About the priority of configuration, plase see ",(0,o.kt)("a",{parentName:"p",href:"../reference/config/#configuration-file-path"},"Configuration File Path"),"."),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua i")," ignores Global Configuration.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"--all (-a)")," is set, aqua installs all packages including Global Configuration."),(0,o.kt)("h2",{id:"how-to-share-aqua-configuration-for-teams-and-organizations"},"How to share aqua configuration for teams and organizations"),(0,o.kt)("p",null,"Let's create the repository in your GitHub Organization,\nand add aqua configuration files for your teams and organization into the repository."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"aqua-config/\n  all.yaml # aqua configuration for all developers in your organization\n  sre.yaml # aqua configuration for your SRE team\n")),(0,o.kt)("p",null,"Then checkout the repository and set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\nIf you belong to SRE team,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export AQUA_GLOBAL_CONFIG="/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml:${AQUA_GLOBAL_CONFIG:-}"\n')),(0,o.kt)("p",null,"Otherwise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export AQUA_GLOBAL_CONFIG="/home/foo/aqua-config/all.yaml:${AQUA_GLOBAL_CONFIG:-}"\n')))}m.isMDXComponent=!0}}]);