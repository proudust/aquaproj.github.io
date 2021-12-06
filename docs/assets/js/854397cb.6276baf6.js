"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4278],{3905:function(a,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function o(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},o=Object.keys(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var u=n.createContext({}),s=function(a){var e=n.useContext(u),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},c=function(a){var e=s(a.components);return n.createElement(u.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,o=a.originalType,u=a.parentName,c=l(a,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(k,i(i({ref:e},c),{},{components:t})):n.createElement(k,i({ref:e},c))}));function d(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=a,l.mdxType="string"==typeof a?a:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6464:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:100},u="Quick Start",s={unversionedId:"tutorial-basics/quick-start",id:"tutorial-basics/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"aqua is a CLI tool to install CLI tools with declarative YAML configuration.",source:"@site/docs/tutorial-basics/quick-start.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/quick-start",permalink:"/docs/tutorial-basics/quick-start",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-basics/quick-start.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",next:{title:"Search packages",permalink:"/docs/tutorial-basics/search-packages"}},c=[{value:"Quick Start with Katacoda",id:"quick-start-with-katacoda",children:[],level:2},{value:"Install aqua",id:"install-aqua",children:[],level:2},{value:"Install tools with aqua",id:"install-tools-with-aqua",children:[],level:2}],p={toc:c};function m(a){var e=a.components,t=(0,r.Z)(a,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"aqua is a CLI tool to install CLI tools with declarative YAML configuration.\nIn this quick start, let's install aqua and install tools with aqua."),(0,o.kt)("h2",{id:"quick-start-with-katacoda"},"Quick Start with Katacoda"),(0,o.kt)("p",null,"You can do the Quick Start with ",(0,o.kt)("a",{parentName:"p",href:"https://www.katacoda.com/"},"Katacoda"),".\nYou don't have to install anything in your laptop.\nThe content is same as this document."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.katacoda.com/szksh/scenarios/aqua-quick-start"},"https://www.katacoda.com/szksh/scenarios/aqua-quick-start")),(0,o.kt)("p",null,"ref. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/katacoda-scenarios/tree/master/aqua-quick-start"},"Source code of the scenario")),(0,o.kt)("h2",{id:"install-aqua"},"Install aqua"),(0,o.kt)("p",null,"Homebrew"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ brew install aquaproj/aqua/aqua\n")),(0,o.kt)("p",null,"Install script (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ curl -sSfL \\\n  https://raw.githubusercontent.com/aquaproj/aqua-installer/v0.3.0/aqua-installer |\n  bash\n# You can change the install path.\n# bash -s -- -i ~/bin/aqua\n")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aqua/bin")," to the environmenet variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ export PATH=$HOME/.aqua/bin:$PATH\n")),(0,o.kt)("p",null,"Confirm if aqua is installed correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua -v\n")),(0,o.kt)("p",null,"If you want to try this tutorial in the clean environment, container is useful."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker run --rm -ti alpine:3.15.0 sh\n# apk add curl\n# curl -sSfL \\\n  https://raw.githubusercontent.com/aquaproj/aqua-installer/v0.3.0/aqua-installer |\n  sh\n# adduser -D foo\n# su foo\n$ mkdir ~/workspace\n$ cd ~/workspace\n$ export PATH=$HOME/.aqua/bin:$PATH\n")),(0,o.kt)("h2",{id:"install-tools-with-aqua"},"Install tools with aqua"),(0,o.kt)("p",null,"Let's install ",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub Official CLI")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf"},"fzf")," with aqua."),(0,o.kt)("p",null,"Write a YAML configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.10.13 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n")),(0,o.kt)("p",null,"Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua i"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i \nINFO[0000] download and unarchive the package            aqua_version=0.8.0 package_name=aqua-proxy package_version=v0.2.0 program=aqua registry=inline\nINFO[0000] create a symbolic link                        aqua_version=0.8.0 link_file=/home/foo/.aqua/bin/aqua-proxy new=../pkgs/github_release/github.com/aquaproj/aqua-proxy/v0.2.0/aqua-proxy_linux_amd64.tar.gz/aqua-proxy program=aqua\nINFO[0001] create a symbolic link                        aqua_version=0.8.0 link_file=/home/foo/.aqua/bin/gh new=aqua-proxy program=aqua\nINFO[0001] create a symbolic link                        aqua_version=0.8.0 link_file=/home/foo/.aqua/bin/fzf new=aqua-proxy program=aqua\nINFO[0001] download and unarchive the package            aqua_version=0.8.0 package_name=junegunn/fzf package_version=0.28.0 program=aqua registry=standard\nINFO[0001] download and unarchive the package            aqua_version=0.8.0 package_name=cli/cli package_version=v2.2.0 program=aqua registry=standard\n")),(0,o.kt)("p",null,"Congratulation! Tools are installed correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ command -v gh\n/home/foo/.aqua/bin/gh\n\n$ gh version\ngh version 2.2.0 (2021-10-25)\nhttps://github.com/cli/cli/releases/tag/v2.2.0\n\n$ command -v fzf\n/home/foo/.aqua/bin/fzf\n\n$ fzf --version\n0.28.0 (e4c3ecc)\n")),(0,o.kt)("p",null,"aqua installs tools in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aqua")," by default."))}m.isMDXComponent=!0}}]);