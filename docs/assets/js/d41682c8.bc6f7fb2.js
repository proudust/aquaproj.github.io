"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3364],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:100},u="Homebrew",s={unversionedId:"comparison/homebrew",id:"comparison/homebrew",title:"Homebrew",description:"Pros",source:"@site/docs/comparison/homebrew.md",sourceDirName:"comparison",slug:"/comparison/homebrew",permalink:"/docs/comparison/homebrew",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/comparison/homebrew.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Manual download and install tools",permalink:"/docs/comparison/manual"},next:{title:"apt and yum",permalink:"/docs/comparison/apt-yum"}},p={},c=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Homebrew Bundle",id:"homebrew-bundle",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"homebrew"},"Homebrew"),(0,a.kt)("h2",{id:"pros"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"aqua supports changing tool versions per project"),(0,a.kt)("li",{parentName:"ul"},"aqua forces to pin tool version, which solves the problem due to the different of version"),(0,a.kt)("li",{parentName:"ul"},"aqua's command is always ",(0,a.kt)("inlineCode",{parentName:"li"},"aqua i [-l]"),". You don't have to specify tool names. It's user friendly"),(0,a.kt)("li",{parentName:"ul"},"aqua is a single binary written in Go, so it is easy to install aqua in a container")),(0,a.kt)("h2",{id:"cons"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aqua's install process is very simple."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Download tool"),(0,a.kt)("li",{parentName:"ol"},"Unarchive tool in $AQUA_ROOT_DIR")),(0,a.kt)("p",{parentName:"li"},"aqua doesn't support running commands after unarchiving.\nSo aqua doesn't support installing tools which some commands are required.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aqua doesn't support installing dependent tools automatically"))),(0,a.kt)("h2",{id:"homebrew-bundle"},"Homebrew Bundle"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-bundle"},"Homebrew Bundle"),", you can manage tools with Configuration file same as aqua.\nBut even if Brewfile is updated, tools aren't updated until ",(0,a.kt)("inlineCode",{parentName:"p"},"brew bundle")," explicitly."),(0,a.kt)("p",null,"On the other hand, aqua supports ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/lazy-install"},"Lazy Install")," so the update of aqua.yaml is reflected automatically."))}d.isMDXComponent=!0}}]);