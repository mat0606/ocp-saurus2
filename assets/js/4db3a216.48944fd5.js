"use strict";(self.webpackChunkocp_saurus_2=self.webpackChunkocp_saurus_2||[]).push([[5962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),o=a(6010),i=a(2389),s=a(7392),l=a(7094),p=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:d,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=(0,l.U)(),[y,C]=(0,r.useState)(b),v=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=d){const e=N[d];null!=e&&e!==y&&g.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,a=v.indexOf(t),n=g[a].value;n!==y&&(w(t),C(n),null!=d&&O(d,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const a=v.indexOf(e.currentTarget)+1;t=v[a]??v[0];break}case"ArrowLeft":{const a=v.indexOf(e.currentTarget)-1;t=v[a]??v[v.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},f)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>v.push(e),onKeyDown:P,onClick:A},i,{className:(0,o.Z)("tabs__item",u,i?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},9459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const o={sidebar_position:7,title:"Install OADP & ODF"},i="OpenShift API for Data Protection (OADP) & OpenShift Data Protection (ODF)",s={unversionedId:"ocp_object/ocp_odf",id:"ocp_object/ocp_odf",title:"Install OADP & ODF",description:"OADP enables backup, restore, and disaster recovery of applications on an OpenShift cluster. Data that can be protected with OADP include Kubernetes resource objects, persistent volumes, and internal images. The OpenShift API for Data Protection (OADP) is designed to protect Application Workloads on a single OpenShift cluster.",source:"@site/docs/ocp_object/ocp_odf.mdx",sourceDirName:"ocp_object",slug:"/ocp_object/ocp_odf",permalink:"/ocp-saurus2/ocp_object/ocp_odf",draft:!1,editUrl:"https://github.com/mat0606/ocp-saurus2/edit/main/docs/ocp_object/ocp_odf.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Install OADP & ODF"},sidebar:"tutorialSidebar",previous:{title:"Volume Snapshot in Nutanix",permalink:"/ocp-saurus2/ocp_object/ocp_volume_snapshot"},next:{title:"Nutanix Objects as Backup Destination",permalink:"/ocp-saurus2/optional_labs/objects_prep"}},l={},p=[{value:"Pre-requisites/Requirements",id:"pre-requisitesrequirements",level:2},{value:"Installing OpenShift Data Foundation (ODF) Operator",id:"installing-openshift-data-foundation-odf-operator",level:2},{value:"Verify ODF installation",id:"verify-odf-installation",level:3},{value:"Install OpenShift API for Data Protection (OADP) Operator",id:"install-openshift-api-for-data-protection-oadp-operator",level:2},{value:"Create Credentials Secret For OADP Operator To Use",id:"create-credentials-secret-for-oadp-operator-to-use",level:2},{value:"Create Nutanix CSI Snapshot Class",id:"create-nutanix-csi-snapshot-class",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openshift-api-for-data-protection-oadp--openshift-data-protection-odf"},"OpenShift API for Data Protection (OADP) & OpenShift Data Protection (ODF)"),(0,r.kt)("p",null,"OADP enables backup, restore, and disaster recovery of applications on an OpenShift cluster. Data that can be protected with OADP include Kubernetes resource objects, persistent volumes, and internal images. The OpenShift API for Data Protection (OADP) is designed to protect Application Workloads on a single OpenShift cluster."),(0,r.kt)("p",null,"Red Hat OpenShift\xae Data Foundation is software-defined storage for containers. Engineered as the data and storage services platform for Red Hat OpenShift, Red Hat OpenShift Data Foundation helps teams develop and deploy applications quickly and efficiently across clouds"),(0,r.kt)("p",null,"OADP backs up and restores Kubernetes resources and internal images at the granularity of a namespace by using Velero. Nutanix CSI offers snapshot\ncapabilities, which can be leveraged by OADP to back up and restore persistent volumes (PVs)."),(0,r.kt)("h2",{id:"pre-requisitesrequirements"},"Pre-requisites/Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The RedHat OpenShift 4.11 cluster was created either using NCM Self Service or IPI ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Nutanix CSI must be installed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Nutanix Volume deployment")," must be installed.  Refer to ",(0,r.kt)("strong",{parentName:"p"},"Nutanix Volume Deployment")," on the left\nhand side of this guide."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"-  Option 1 is specific for UPI installation & CSI installation through NCM Self Service\n    - Create Nutanix Volume Storage Class using RedHat OpenShift Console.\n\n-  Option 2 is specific for IPI deployment \n    - Create Volume Storage Class using Command Line.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Terminal environment must have the following commands:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"oc (Available in both UPI & IPI installation)"),(0,r.kt)("li",{parentName:"ul"},"git "),(0,r.kt)("li",{parentName:"ul"},"velero"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set alias to use command from cluster (preferred)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"alias velero='oc -n openshift-adp exec deployment/velero -c velero -it -- ./velero'"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download velero from Github Release")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your cluster meets the minimum requirement for ODF in Internal Mode deployment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3 worker nodes, each with at least:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"8 logical CPU"),(0,r.kt)("li",{parentName:"ul"},"24 GiB memory"),(0,r.kt)("li",{parentName:"ul"},"1+ storage devices")))))),(0,r.kt)("h2",{id:"installing-openshift-data-foundation-odf-operator"},"Installing OpenShift Data Foundation (ODF) Operator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the RedHat OpenShift console in the browser.  Put in the following:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://console-openshift-console.**ocp"},"https://console-openshift-console.**ocp")," subdomain",(0,r.kt)("strong",{parentName:"p"},"."),"base domain>**."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Eg ",(0,r.kt)("a",{parentName:"strong",href:"https://console-openshift-console.ocp1ipi.ntnxlab.local"},"https://console-openshift-console.ocp1ipi.ntnxlab.local")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Operators"),".  Navigate to ",(0,r.kt)("strong",{parentName:"p"},"OperatorHub"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Filter by ",(0,r.kt)("strong",{parentName:"p"},"openshift data"),".  Click on ",(0,r.kt)("strong",{parentName:"p"},"OpenShift Data Foundation")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5630).Z,width:"894",height:"490"})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Install")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3254).Z,width:"903",height:"515"})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Install")," at the bottom of the screen."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3926).Z,width:"1434",height:"601"}),"\n",(0,r.kt)("img",{src:a(9222).Z,width:"1436",height:"625"})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for a few minutes"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7142).Z,width:"904",height:"362"})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create Storage System")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4191).Z,width:"882",height:"578"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the following default values.  Click on ",(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6393).Z,width:"1436",height:"610"}),"\n",(0,r.kt)("img",{src:a(3548).Z,width:"899",height:"244"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Storage System created successfully"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1263).Z,width:"1415",height:"690"})))),(0,r.kt)("h3",{id:"verify-odf-installation"},"Verify ODF installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the LinuxToolVM (Eg LinuxToolVM1, LinuxToolVM2 etc), run the following commands:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"KUBECONFIG=~/openshift/auth/kubeconfig\nexport KUBECONFIG\noc get storagecluster -n openshift-storage ocs-storagecluster -o jsonpath='{.status.phase}{\"\\n\"}'\n")))),(0,r.kt)("h2",{id:"install-openshift-api-for-data-protection-oadp-operator"},"Install OpenShift API for Data Protection (OADP) Operator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to RedHat OpenShift Console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Operators"),".  Select ",(0,r.kt)("strong",{parentName:"p"},"OperatorHub"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Filter by ",(0,r.kt)("strong",{parentName:"p"},"openshift-api"),".  Select ",(0,r.kt)("strong",{parentName:"p"},"OADP Operator by RedHat")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5799).Z,width:"898",height:"384"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Install")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5791).Z,width:"885",height:"476"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the following.  Click on ",(0,r.kt)("strong",{parentName:"p"},"Install")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3300).Z,width:"1453",height:"639"}),"\n",(0,r.kt)("img",{src:a(4346).Z,width:"1431",height:"616"}),"\n",(0,r.kt)("img",{src:a(2384).Z,width:"1435",height:"429"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for a few minutes."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5412).Z,width:"897",height:"356"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"View Operator")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9431).Z,width:"887",height:"324"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OADP Operator installed successfully"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1270).Z,width:"1444",height:"695"})))),(0,r.kt)("h2",{id:"create-credentials-secret-for-oadp-operator-to-use"},"Create Credentials Secret For OADP Operator To Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Putty into the LinuxToolVM (Eg LinuxToolVM1, LinuxToolVM2 etc)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the credentials-velero & replace the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"aws_access_key_id with Nutanix Objects Access Key"),(0,r.kt)("li",{parentName:"ul"},"aws_secret_access_key with Nutanix Objects Secret Access Key")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > ./credentials-velero\n[default]\naws_access_key_id=my_access_key\naws_secret_access_key=my_secret_key\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run this command to create the secret"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc create secret generic cloud-credentials -n openshift-adp --from-file cloud=credentials-velero\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(22).Z,width:"958",height:"73"})))),(0,r.kt)("h2",{id:"create-nutanix-csi-snapshot-class"},"Create Nutanix CSI Snapshot Class"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Putty into the LinuxToolVM (Eg LinuxToolVM1, LinuxToolVM2 etc)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run this command to create the yaml file"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF > ./csi-snapshot-class.yaml\napiVersion: snapshot.storage.k8s.io/v1beta1\nkind: VolumeSnapshotClass\nmetadata:\nname: nutanix-snapshot-class\nlabels:\nvelero.io/csi-volumesnapshot-class: "true"\ndriver: csi.nutanix.com\nparameters:\nstorageType: NutanixVolumes\ncsi.storage.k8s.io/snapshotter-secret-name: ntnx-secret\ncsi.storage.k8s.io/snapshotter-secret-namespace: openshift-cluster-csi-drivers\ndeletionPolicy: Delete\nEOF\n')))))}u.isMDXComponent=!0},5799:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oadp-14-a66f1d04ee4d228ea0fcbc25234ccb74.png"},5791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oadp-15-98b900d0d1984164c4b255de5c640a93.png"},3300:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oadp-16-7796784104096d7534354b6f3a1fee5c.png"},4346:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oadp-17-69d1061b691160714a9461b7712bacdc.png"},2384:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oadp-18-23fb776660f9a8aa3350c04f891d4d3f.png"},5412:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oadp-19-d9637e6185f7acfb945d6d768d94270c.png"},9431:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oadp-20-0dd0bdd27dd5babfaafb669daf6d2656.png"},1270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oadp-21-2f4910779d1768e7c08fd59d9242c2f4.png"},22:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA74AAABJCAIAAACVY21qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABd9SURBVHhe7Z2LceO8DoW3HreSSlJICnEdf3H3AiAl8QGAR7bjx+75ZmdWpkC8CAmMo9h/CCGEEEIIIae5fF//q1y/L3Xwjbl8/2wOX3++PsBhErBV3s9XHVjx9QNIX772+hCu19NFbVYKuS3x35RLGHAIhBAQ6Hp/Ak2LfLY/m+mPaM2Vt/H53vp54bqTg20Z4BV4zj6hOPYeZSERr/y3LIqQSUnwL69owGeScab6gEtCC+T6Hf9Eha/X+rowXSbIErgFXjs5/3x+gOv9ubyoV35iIfyiz7Dqh9XPi9adHLzjPuF9ymLtrubkp5WAIvxNXu7Ap/PY6lsWM75eS1WbAEvgRpi4HObn3XhRr/zEQvhFn5+fjvfZI/2zPHYFHrNPeJ+yWLorng4CL7+pvNyBT+cdLwljqaoKvM/182nw2slhft6NF13rn1gIv+jz89PBe/zLeewKLBcUqrFYi0wvmBJ9NsR/huny9V3PCFf/bfBcRlxw6S1dmnCOJ1WcCA9Xhev15+t7TETzwLQwPjNdA5cpzQMx15/eEOazguRHXJw9rufOkNjallMWuw1frU0OPSA/hWVcVn0LNVqiO0HFB8txSOPrVUCvLpGLVAAgtQHUM8ZCD3i957WhyFSZe1iSJe1l4LVY2wJZ1iFq6yk5PFurGZfGlhXYdjW1ynJ/8Ot9mUMoP8j1rizWAgbWk98Tsmt5i3uffcQ4Kuy90RTK5FvCWsX1mFo1EJ8fUGPgdYHUj1gRlxufx3tUS77uktZDz5bleu5hQPnB4T6h55AOBMYaU/KysPiv3xKY+FoSowk5nprQa6bLmIY3mEFkBLM0DjYc59UFOXRvKuXcYa2muxEzCfFnG9AymlKtmpXqtysjOA70YPmp4VSKy+cvv7UtXWy9YbRiehF1Qg/LDxKXTjOp8jLKc2FVq2uB5XrtJKqKzxOpYY/1egkliYdUSSIaxQGqxzIUXu+mZVUbsl07Fl3meCKCWRqst2C2AExRXoeYraLoOTmsWgbNZ9GCOkrMts16/XfGIH/UmcX1jsZVI4t7yk52OZs1YC1WnNGT+NMnWlA9g5J59qRQBmTWrsec0QU7XwhoXPlamJbFmiI+I3rMFSWpMcU8PlQnZPWD3aMK6bpbTndVJc2P3zorYH6WaGXmtaoBiyFbsjrEfcLESovGFaoxC/X4oFeJyBgrd7fzzdRpiq+jHfXjtdFB0bA07kTf3o6drscHoya1NWj2J6YgtvSV47AM/0Z+kLhk0uCP74CRnCosBcx+vF4NS1X1vJ92AH/iYNb3F49iA9cjY+H17ufERnNv3Hl5FDfbmtGQBlVmux6jtnx/vVE1eH8OfXtn8DRchgsX9MdC6uSGiXhceX5afJ2Kn5vzGTunJ/THJtTjg1F8nj1IyMvZrsqcDetEXDJ2V60iPiN6BHOlk3Mn+rF5+HYDEtlEj/o8nDL/6vFDAfOzwHev16SvnCTL8D7om7bRs2uK5FAmDf74DhjJqcJSwOyvamylJVMSnWt1IjKFlbvb+WbmOMVe1+OAKNxhfHbGTVTuc3TWiV1+7pcaM/SHu/ZnQgzIlr7wpGR8y5sXpTKMo/lZxTVPcvUUklOFpUC+Xi1LVfW8aEzFIqD1MqF6fA8n9GQZilKySpUvkFm6w5ZLXoeQrafnMM8PgChwTA2FDfozO3ObHgONLLwGTUE9voeTeiJ/oniWKeoF2icSWzr1OiXg0HQirsh3JQi3HYd8BvQosytuwjOPe6L1cklkcz33925oTeH85ETZ61TpC09Kxre6iiwP4+iafuI+YaUlUxJNbXUiMoWVu/t5feOkHA1TlhkRRCSiVTU74yrPfcZj75l+gQIA2YoMN+NyFHFDfnqcuOZJiZ6liaVAvl4tsSrR4XGyl0fqW7vLcEDO6MkyJGoi2jkXvRE2onIvnN5WEJbXTgS4gjFjHSK2npxDAa9Vn8DjYRj0Z3bmNj0GGlmU8zNrkXFWTyQfqZlTNIj1AlFaThfCmbgy5aImYpsD+QzoUWZdbiB4OpI8gPeowpl83tK7QcD85EQzOlWR3mZcjiJuWNOeD9knrLRkSqJzrU5EprBytzmvua3r1BW8idTjgFXSKrMzbqJyn6Ozy5VbKXaAbOkLT0rGVz9NDoD5mRjnzZMSPUsTSwE8rStVVRMWtQO0XiZUj+/hhJ4sQ1CsoqB7BE7wk5RZguvwVjrjaFxPy6GR5wdAFDimhsUA/ZmduU2PgUYWXlymoB7fw0k9kT9RPMsU9QLQO7gQJ+LKlEfpb7jrXeeB2RU34Xg6svrB7lGF7JwD7uA5wPzkRM51qvSFJyXjW12Blm/1eZw3T0r0LE0sBaAlXGlJldjJenzQq0RkjKW7MmUVT6BDhndrcpxmrTArchO18NlO1+ODXpO/AAvFDqgtR68MH4Oi5yH5weKahfx5RnKqsBTA07pQtZ3GFY7YzHp8MJgN1MtwHucIrieQLMjJlVl3vpvL1BJkC8JfyN44ZCvwV4bHyYFkAbKlpFogPA3qbucA5s+saswrpsfw/PKIr8FAgwzDThjn9IT+mJp6fDCKz7MHCXk5e6MyWLoa8LgCyYKcdONtgHwG9AizK0N+CqnHHe50wdUQyCqRnuAE7uA5wPwsMC31+KDXpK+cGGT4GBQ9gOm1z34M47xZyJ9nJKcKS4HZbYeVloUSfWu9/WAX/SPu8VpCZAT1RFypw/YblWH9gIBMSfOsTP1cFPkRsw4IxZ/2Z84itdsW1ktuLH1ex24q+p+BxZuTLcDAbP3op/I0oU5/Ofug/GBxDZOEUU9DcqoACYhE9cirsY2Fqu30ymDGer2qw4t6RoD1LK6xZW2oIVGwvaop9srZXMrWYmkLwsws6xCx9bQcFpb5ATBTjcO6ONexZBF/1tc7HJenzGc2sQOvxYJTehJ/SuxNiYmsdy0f07cro1NYZh3eqDO6YCeXvdiC4rq/ViGfAT2OK33GKhbaPu+We7iOy4RNQ3KPKkR6iivLe8ujAPOzpKxFVquml/uERY1FWmyywywrio+nhtqLqAGREXqpNpuFLiLV6V0y+5Vg9FWy0fljMv1y75Rw22SMFlc+r2IvC6A1dwiJO/XsSSBbnc/mcj198ID8LONq1dSfgz09rVhPU4qBkPPj9Xq9CluqAsSgKc+llizWyxCZZT0j5Hra1LfM0aW1Idjtc8MyrFmyF+NyLNdiZQtgWYcbiK1n5bCyzM8a6Yu7x1ZgbmGn/mDXu5HHBeUHut6VfC1wFnrO+NOulrei3lrYiyaHQ6WKls2DadVy8rgeWquQz6meEzUm9JnurwtovYB7FKJHfZS563vL3ZzLz5JFrZa4ujyXJI08YE2XOWzVvNU+YcvSp9Ct5nwRk4xPW+wXskiVXIN6Vv47fdsi5IXwHkAIyeA9AoFZ+ofgYsMwVeSvhIVNCMngPQJBs1Th+2d/O7wk1jS/02GqyN+F/aKa93lCSAz3CYTsDI/5sH8S8i9wvDciXH943RNCIrhPIIQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgg5xfZRd5/xd5nddwr9N37P5HsC+Gx/Ixt8tkzzWYRv8eFrL/Tns2q18DY+ZzWG8G51iPCJPhNCCPkIpK1+xCZUOuGnfR8h5DO0rVFN79T+X+TPh9Rqxy/6DKuGagzh3eoQ4RN9JoQQ8s58xnbkH+/Z7xb+i/zh1rnj+en4xy9DQgghRODW+bd4oM/vFv6L/OHWuYNbZ4RP9JkQQsgzuHz9/Fyv+/N9+kVUTlfVh28bma9L03/lyJA+c/k+ntG9mtjLkMbn0TbDzfESyBHiuK+4fH03wTePUmh3tbGfGnfNzDZ6tvECPu82jZWFtP23i1Vdv5G+OkTTd7A5y7cjYZ6FpsgKRx5GhVmtnmMRF1g/SJ4Rn3M91RmZo7rsWIV6FUGBzZYauWC9xIq43Pjs3jcq+bpLWg89W5brOYDO2xpKP3aYPlHzqc9LPWBtyJm45gkhhLwpF6EeCnInn7qlNJFuw6itWbtm0wa0z9hQ00S0KYyd4tmk/a9gexTphNL8i+/a9X6OKPRM29CsDTZhlSZpIrVhS67q+MK0D+CzgojFMuqdxrXFoS38Nn9NU9Py687NXfnE52WehXn2pFAG0lrVCQmNQTQukUvqB8nzymcF0WOuKDWP0Zqax4fqhGS9gPvGQaLHAmu23SXNZ7bOBbEwBjVahXK4E/uM67FM33FvIYQQ8hkMLUMb+3Q3177StqrxdcWd+0zi/rej3cxxvWC9rx4fdFpNpM6eT9TjMwA+K4hYJOOP2+jJ1WqjP/BHE5+BPAvz7EFCXs52VcZ3JwGPS8ZC9X68NrrLIz4jegRzpZNzJ/qxefh2AxLZRI/6PJwy/+oxzhTVoBnM4U7k8xk96kKYaz/MyCwhhJDfR+/BAfmtub93X4I+23cqNeaJyfiZLoj4fCouFV40oqnlNkTnWrWtTGeuaY2P9llBxCKZaCpmuaGJESHyB8mzMM/uBbBaRTgRV6Y8ymczDvkM6FFmV9yE4+mI1sslkc319A9stO/0Kzo3oFcpmWxHxigjF6LxyOczerJMR+dO5ZwQQsgLuGjjapqT/qa4vXVHd/h+PLrfv7oPAPaz9hbNbtW28ztzdqIenwHMGSIWychwRJgLD9DVncQfV80gP4v1AkCt6oSEKnYmrkX9RGxzAJ/h9Zp1uYFkHvckeVjdNzrO5PP2hxZaK3rcX30yEOGai3w+o2dRG25KzuSKEELI85F7e/fYnjDcup/6rvPDAfpQ1t6ic63aVqYzZyfq8RkAnxVELJLBLACcjDHyB8mzMM/uBT7mXeeGu951HphdcROOpyNaL1WxuG90ZOcccAd71EyZ6Bg850Ls8xk9WSDRuZO5IoQQ8lzc2/dw65Zb+Syj9/d26vi64s59JkAfSvu0nazHB53Wdv58oh6fAfBZQcRCGfENMAEQZE+GPQOZP6s8C/PsQUJeukXo1WYOHlcgWZCTbrwNkM+AHmF2ZchPIfW4w50uuBoCWSXSE5zAHRwRdTpTFMxPHstg5J9H6PMJPWkgdrIeH4RmCSGEvAV6n5Z7e725X+yXsPqbx/7eLVLS3dNPALAbvn5aVfMH4182LWoczwFoRGl709P69/HH22uXko1jQju/M+e3xjWAzwoilsiUuNr3DcunmnV/8Q+gJiTOozrqRyS4Zpf+JHkW+ulbtXYKy6y0VjHguKD6SfMM+QzocVzpM1ax0PZ5NY1uDO50QcdlwqYhuG8cRHqKK/371xJVrGiJTf4JlgTJ4U7o8wk9UG00oYvNl98yCSGELLBb/obcyOXmb91Me2kVUVRslzMp7VFK6S5bn9Htchmvyl7F5t5AE1Tp2jNzu5SdQRN8u8lpVFjH2wZMR58hgLXPkYhwWEFkjC4uXa8jslPsOyej3w0It/nT5vmg+TxdE9gS3u43VrUKk8d1Y/34eYZ8TvW0WS5zpups6DMt9prT0HoB9w1Ej/ooc/vo7bMdb0X/WHCOd2exFlDsSq7nxtrwa54QQshfSWmB9QUhhBBCCCEkgltnQgghhBBCILh1JoQQQgghZMnwfCD/zIUQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEkIejH453/luvuy/9eu5n622mP+nzSN7GZ/tMlzvW64Xr/rfyifVMCCGE/CXIzuhkB9bGfc8W6N75N3I+0Nfziz7Dqu/dOu+8aN1fzK8t4SfWMyGEEPL5nO7AupX6uadlc+sM84s+Pz8d3Do/lE+sZ0IIIeTzOdmBdf9zZ8fm1hnmF31+fjq4dX4on1jPhBBCSM/X98/+XOf1+iMvpbvVc5VLIyJCP19u87t8/VxnTbuodM16SscO4aGVLmzJTsYla8hqOXjLeeHzQb6Funx9t2q+W6e3uPfZqmoYqvTeaOi3bjWeshYG4nOupzojc1SXHatQrwJc9yO3QrBeYkVcbnwWw/XUTL7uwLWD8az1WsYO5hmxNUbl1wYhhBDyUWhPll62NzNtdjpSXyomIm1vk9Ft4rwtKYqO/lkUzX3Seqd0XWnaRVgn7vtazFbVMmiO0M2PL4z6rCRbKN0fdDsH2zH0SubZk0IZaDfd5ozucuBAd9C4LIt3rQXiM6LHXFFqHu9f92S9/lyEeigEpirpultOd1UlzTdsnYuiZ6wXGrtZGqy3ILYeV8+EEELI+2DNt2+d1jbrsTVAp7faaNuC3VbrjarBqHtithTfnosaHKcbuM+K75tgE+rxwSg+zx4k5OVsV2XgQDfwuGTsrrVAfEb0COZKJ+dO9GPz8O0GJLKJHvV5OGX+1WMUPyZvVA1G8YN5nnHn+T5tILbk1axBRTLFhBBCyCfQ/9K5ffdLcbuk0I2f2DFkTRmyZeStvUXm+pInfFb87ULsySA/z+4FLoGaTr3tPHwOTSfiyrIYhNuOQz4DepTZFTfhmcc90Xq5JLK5nvzagXjeevm4AnmeAVtQbRBCCCF/Afp71ba5STuM2MXObFMW7T9imIN2YJELPDu1tRIi+UjNID+L9QJRQKe3Gk9cC8hnQI8y63IDwdOR5OGiG97GLX2KIMzZmXyO1w7CE9dLAWPP8wzYihTgC0gIIYR8DF17gzq7zajHC7Leie8iwA4sCkOxEz4r0RYn8mSQn2f3Ao97l+5EXJnyINyWu951HphdcROOpyPckoqK7jFdIZQVsnMOuIMbNqMeL8iUQ27CsedhALb4rjMhhJC/EqRvyiuoJ3sdUYbHyWnvhGwpqZYNx3pLoCOYlW3FnK3PKD7PHiTk5eyNygCB9uBxBZIFOenG2wD5DOgRZleG/BRSjzvc6YKrIZBVIj3BCdzBnWCKDI/6U+VyMophw51/SxiALUnPrEFzdjo/hBBCyPtgrax/H+oibXHoi/praP2b/qPjlU8Rk2n19d4Uj7+nNwlVXQc2lk15bUswc/uY/RZ66skLSyd8VlQ42C4Un5sUiuy4b+inV4d7hWXW4Y06o79PP73VgOO6fy0gnwE9jit9xioW2mLdC+50QcdlwqZhWwlXVon0FFeW1w6CaXrGeuGxm0tZnoE1FR2PqWdCCCHkbdAOKc1O+6C2UEUbYj3bIM3zEJEGqF2zntrZO7GhMk1jLc3YwWnbgC2hlRKhtosrJbT6IiT3WfcqAYPqzud2w3DQfA6uCWwJaXcSw0qIls2DdSgdT1wLyOdUT5vlMqd1cNxpZesOrZft4TZMg77zai+23x4gekqBAdcOwrPWC4h9I8uz8ajaIIQQQsjr0RbN9kwIIYQQQsgCfZuOvxcmhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQm7gf8A/QgghhBBCyLhLdv8RQgghhBBCxl2y+48QQgghhBAy7pLdf4QQQgh5Q5pvLPuIT0Ruv5xPv6aMfCpb5cHfYGPfSLeS7r437z/9SuiTNdJ8o2BuS/w35RLG6S/hGXbJ7j9CCCGEvCG6gXmPr9+TPctqn2O7LREyKdkkvfybAwGfScaZ6gO2zlog7tehV/D1Wl8XpssEz5fAsEt2/xFCCCHkDfmkrbPunX5aCXwn9Eu83IFP57HVtyxmfL2WqjaBm0pg2CW7/wghhBDyhnzQ1lk8HQS4df50Hlt9L9g633b9DLtk9x8hhBBC3pC49cs2o2CbDX2GtDxEOu49Ll/f9Yxw9X9dnsuICy69pUuz7TmeaHV2QoerwvX68/U9bpiaB6aF8ZnpGrhMaR6cvf70hjCfFSQ/4uLscT13hsTWtpy23eutTQ49ID+FZVxWfQs1WqI7wTY1WI5DGl+vwnJLXHfhIhepSBh2ye4/QgghhLwhqy2C7RBkAyR7mrKB0o3T8dSE7lK7nZXtW/u9BCIj1L1IyHFeXZDDizelnDus1W1ZI2YS4s82oNvNaUummpXqtysjOA70YPmp4VSKy+e3zmtbutgSVLcZ1s12J/Sw/CBx6TSTKi+jPBeW21l0vwuQqCo+T6SGB4ZdsvuPEEIIIe/Anz//B6ulDmueR3DDAAAAAElFTkSuQmCC"},5630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-1-58849194333b2a9eb7cf212e8e307fde.png"},3254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-2-41e214be900af449cbfc53d17c150fc8.png"},3926:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-3-4ef20f976f6b9e45c0f91d86e25e1164.png"},9222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-4-8962c2998f55c68d2cd03605769cf01d.png"},7142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-5-8fc0d86282023a0ffe3e9bcfb60f0175.png"},4191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-6-e3faaf24000fd295899aa4ff5bcc72d0.png"},6393:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-7-9af03c0f22b9792275afddd023a21cfa.png"},3548:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-8-1400f0b2bd2267c88719e08607c17ebd.png"},1263:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/odf-9-94e6cc8da93d26eec40ef40f2e2df07a.png"}}]);