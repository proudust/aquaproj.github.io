"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[313],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7287:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:550},u="Configuration file path",l={unversionedId:"tutorial-basics/config-path",id:"tutorial-basics/config-path",isDocsHomePage:!1,title:"Configuration file path",description:"aqua finds configuration files from the current directory to the root directory.",source:"@site/docs/tutorial-basics/config-path.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/config-path",permalink:"/docs/tutorial-basics/config-path",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-basics/config-path.md",tags:[],version:"current",sidebarPosition:550,frontMatter:{sidebar_position:550},sidebar:"tutorialSidebar",previous:{title:"Use different version per project",permalink:"/docs/tutorial-basics/change-version-per-project"},next:{title:"Global Configuration",permalink:"/docs/tutorial-basics/global-config"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-file-path"},"Configuration file path"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# aqua.yaml\nregistries:\n- type: standard\n  ref: v0.10.8 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.1.0\n- name: junegunn/fzf@0.28.0\n- name: tfmigrator/cli@v0.2.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# bar/aqua.yaml\nregistries:\n- type: standard\n  ref: v0.10.8 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.0.0\n")),(0,o.kt)("p",null,"aqua finds configuration files from the current directory to the root directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ pwd\n/home/foo/workspace/bar\n$ mkdir zoo\n$ cd zoo\n\n$ gh version # find the configuration file /home/foo/workspace/bar/aqua.yaml\ngh version 2.2.0 (2021-10-25)\nhttps://github.com/cli/cli/releases/tag/v2.2.0\n")),(0,o.kt)("p",null,"aqua reads configuration files until the tool is found."),(0,o.kt)("p",null,"tfmigrator isn't found in ",(0,o.kt)("inlineCode",{parentName:"p"},"../aqua.yaml"),", but is found in ",(0,o.kt)("inlineCode",{parentName:"p"},"../../aqua.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfmigrator -v\ntfmigrator version 0.2.1 (3993c0824016673338530f4e7e8966c35efa5706)\n")),(0,o.kt)("p",null,"If the configuration file isn't found and the tool isn't installed outside aqua, the command fails."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ cd /tmp\n$ gh version\nFATA[0000] aqua failed                                   aqua_version=0.8.0 error="command is not found" exe_name=gh program=aqua\n')))}f.isMDXComponent=!0}}]);