"use strict";(self.webpackChunkocp_saurus_2=self.webpackChunkocp_saurus_2||[]).push([[7868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),o=r(6010),i=r(2389),s=r(7392),l=r(7094),c=r(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:i,values:m,groupId:d,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,s.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,l.U)(),[N,_]=(0,a.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&b.some((t=>t.value===e))&&_(e)}const C=e=>{const t=e.currentTarget,r=w.indexOf(t),n=b[r].value;n!==N&&(O(t),_(n),null!=d&&y(d,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},b.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:x,onClick:C},i,{className:(0,o.Z)("tabs__item",u,i?.className,{"tabs__item--active":N===t})}),r??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},4782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162);const o={sidebar_position:7,title:"CSI Metric Monitor with Prometheus"},i="CSI Metric Monitor with Prometheus",s={unversionedId:"ocp_ntnx_hci/ocp_csi_prometheus",id:"ocp_ntnx_hci/ocp_csi_prometheus",title:"CSI Metric Monitor with Prometheus",description:"1.  Login to Prism Central.",source:"@site/docs/ocp_ntnx_hci/ocp_csi_prometheus.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/ocp_csi_prometheus",permalink:"/ocp-saurus2/ocp_ntnx_hci/ocp_csi_prometheus",draft:!1,editUrl:"https://github.com/mat0606/ocp-saurus2/edit/main/docs/ocp_ntnx_hci/ocp_csi_prometheus.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"CSI Metric Monitor with Prometheus"},sidebar:"tutorialSidebar",previous:{title:"Option 2: Nutanix CSI Deployment using OperatorHub",permalink:"/ocp-saurus2/ocp_ntnx_hci/ocp_csi2"},next:{title:"Create Project in OpenShift",permalink:"/ocp-saurus2/ocp_project/"}},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"csi-metric-monitor-with-prometheus"},"CSI Metric Monitor with Prometheus"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login to Prism Central.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to Nutanix Calm.  Drill into the application."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(3862).Z,width:"987",height:"211"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Service")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(1394).Z,width:"982",height:"404"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"LB_DNS"),".  Click on ",(0,a.kt)("strong",{parentName:"p"},"Open Terminal")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(1245).Z,width:"987",height:"251"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run this command to install git"),(0,a.kt)("p",{parentName:"li"},"sudo yum install -y git")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run this command to download the CSI files."),(0,a.kt)("p",{parentName:"li"},"git clone ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/nutanix/csi-plugin"},"http://github.com/nutanix/csi-plugin"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(5665).Z,width:"940",height:"218"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following commands to initialize oc."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"KUBECONFIG=~/openshift/auth/kubeconfig\nexport KUBECONFIG\noc get nodes\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(4373).Z,width:"821",height:"244"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to csi-plugin/deploy directory.  Run this command"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oc -n kube-system create -f service-prometheus-csi.yaml\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(2332).Z,width:"1087",height:"82"})))))}u.isMDXComponent=!0},1394:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CSI-Prometheus-0-1-ce1ea0e4418d3b4ca8127ae44f856a68.png"},1245:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CSI-Prometheus-0-2-d37db491eee6ea94613c3c613366021c.png"},3862:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CSI-Prometheus-0-3f44ef7686cfe8e58bb070a585b12eb2.png"},5665:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CSI-Prometheus-1-22fd6b33f9c71716c3c9d87e607f06f0.png"},4373:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CSI-Prometheus-2-35a95e4305615d2ba6e48816e853ca49.png"},2332:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CSI-Prometheus-3-e5da84572f74d35f1fd86c3212248412.png"}}]);