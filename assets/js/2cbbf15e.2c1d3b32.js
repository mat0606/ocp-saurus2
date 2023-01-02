"use strict";(self.webpackChunkocp_saurus_2=self.webpackChunkocp_saurus_2||[]).push([[9273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),s=a(7094),p=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:d,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,s.U)(),[v,O]=(0,r.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=d){const e=b[d];null!=e&&e!==v&&k.some((t=>t.value===e))&&O(e)}const w=e=>{const t=e.currentTarget,a=C.indexOf(t),n=k[a].value;n!==v&&(x(t),O(n),null!=d&&y(d,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},g)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:S,onClick:w},i,{className:(0,l.Z)("tabs__item",u,i?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},4802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const l={sidebar_position:7,title:"Option 1: Nutanix CSI Deployment using NCM Self Service"},i="Option 1: Nutanix CSI Deployment using NCM Self Service",o={unversionedId:"ocp_ntnx_hci/ocp_csi",id:"ocp_ntnx_hci/ocp_csi",title:"Option 1: Nutanix CSI Deployment using NCM Self Service",description:"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims.",source:"@site/docs/ocp_ntnx_hci/ocp_csi.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/ocp_csi",permalink:"/ocp-saurus2/ocp_ntnx_hci/ocp_csi",draft:!1,editUrl:"https://github.com/mat0606/ocp-saurus2/edit/main/docs/ocp_ntnx_hci/ocp_csi.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Option 1: Nutanix CSI Deployment using NCM Self Service"},sidebar:"tutorialSidebar",previous:{title:"Option 3: OCP Assisted Installation",permalink:"/ocp-saurus2/ocp_assisted_install/"},next:{title:"Option 2: Nutanix CSI Deployment using OperatorHub",permalink:"/ocp-saurus2/ocp_ntnx_hci/ocp_csi2"}},s={},p=[{value:"Install Nutanix CSI Operator using NCM Self Service",id:"install-nutanix-csi-operator-using-ncm-self-service",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"option-1-nutanix-csi-deployment-using-ncm-self-service"},"Option 1: Nutanix CSI Deployment using NCM Self Service"),(0,r.kt)("p",null,"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims."),(0,r.kt)("p",null,"We will also install kubernetes operator provided by Nutanix to maintain the lifecycle of operator."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-what-operators-are.html"},"What are Kubernetes Operators?")," for more information."),(0,r.kt)("p",null,"OpenShift provides a easy way of implementing these third-party operators via OperatorHub from the cluster manager GUI ."),(0,r.kt)("p",null,"As the Nutanix CSI Operator provides the following capabilities as of now, we will install it to manage all our Nutanix StorageClass in this OCP cluster."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basic install"),(0,r.kt)("li",{parentName:"ul"},"Seamless upgrades (Manual or Automatic)")),(0,r.kt)("p",null,"In future Nutanix CSI Operator may provide the following additional features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full lifecycle"),(0,r.kt)("li",{parentName:"ul"},"Deep insights"),(0,r.kt)("li",{parentName:"ul"},"Autopilot")),(0,r.kt)("p",null,"Nutanix CSI supports Nutanix Volumes and Nutanix Files as backend data storage systems."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Storage Class Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadWriteOnce"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadOnlyMany"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadWriteMany"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix Volumes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix Files"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,"In this lab, we will deploy both Nutanix Volumes and Files Storage Class and use them throughout the bootcamp."),(0,r.kt)("h2",{id:"install-nutanix-csi-operator-using-ncm-self-service"},"Install Nutanix CSI Operator using NCM Self Service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to Prism Central. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Please click on the hamburger menu and navigate to Files"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9231).Z,width:"267",height:"665"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note down the File Server name"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6545).Z,width:"990",height:"242"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the hamburger menu.  Navigate to Nutanix Calm."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2968).Z,width:"298",height:"634"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Application"),".  Click on ",(0,r.kt)("strong",{parentName:"p"},"Application Name")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3876).Z,width:"986",height:"252"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Deploy CSI")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(917).Z,width:"783",height:"550"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the Nutanix File Server name.  Click on ",(0,r.kt)("strong",{parentName:"p"},"Run")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4318).Z,width:"705",height:"636"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Audit"),".  Observe the deployment of CSI into OpenShift"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7878).Z,width:"812",height:"710"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login into RedHat OpenShift.  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Project"),".  Fill in ",(0,r.kt)("strong",{parentName:"p"},"ntnx"),".  Observe the ntnx-system project was created"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1418).Z,width:"990",height:"336"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Operators"),".  Click on ",(0,r.kt)("strong",{parentName:"p"},"Installed Operators"),".  Observe the Nutanix CSI was installed."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3878).Z,width:"991",height:"357"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Projects"),".  Observe the ",(0,r.kt)("strong",{parentName:"p"},"ntnx-system")," project had been created"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7739).Z,width:"1886",height:"432"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Storage"),".  Click on ",(0,r.kt)("strong",{parentName:"p"},"Storage Class"),".  Observe the ",(0,r.kt)("strong",{parentName:"p"},"ntnx-volume")," and ",(0,r.kt)("strong",{parentName:"p"},"ntnx-files")," had been created"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3774).Z,width:"1873",height:"467"})))))}u.isMDXComponent=!0},917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm1-4340cf0c9501e159c9f97fefc6996200.png"},7739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm10-11571f015003a5b6cdc38581c3b082b2.png"},3774:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm11-f60f2903d4e7ade97d35d6158317657c.png"},9231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm2-ddf116982cd3330d7a25ffdc8fbe7304.png"},6545:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm3-d61820ed1a9f491ebbd83b03f8aca168.png"},4318:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm4-7d31b44989897b7630bb2b952d4a6831.png"},7878:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm5-61456a7099d2c55616687f906f8ff130.png"},1418:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm6-989a11e36cf5df93f6beff7ed458d27d.png"},3878:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm7-9e0012805a8436d20df039616c6362a2.png"},2968:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm8-0287ecb235eda6a84916d8cdf1b94f1f.png"},3876:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-csi-ncm9-2a31e44a94bd8fb53ec9b09dd302d71e.png"}}]);