"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5457],{94629:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(82394),i=r(21831),o=r(82684),u=r(50724),l=r(82555),s=r(97618),c=r(70613),a=r(59696),d=r(68899),f=r(28598);function p(e,n){var r=e.children;return(0,f.jsx)(d.HS,{ref:n,children:r})}var h=o.forwardRef(p),b=r(62547),g=r(82571),O=r(35686),v=r(98464),S=r(46684),I=r(70515),P=r(53808),m=r(19183);function E(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function T(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?E(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var j=function(e){var n,r=e.addProjectBreadcrumbToCustomBreadcrumbs,t=e.after,p=e.afterHidden,E=e.afterWidth,j=e.afterWidthOverride,k=e.before,y=e.beforeWidth,N=e.breadcrumbs,M=e.children,R=e.errors,_=e.headerMenuItems,A=e.headerOffset,Z=e.mainContainerHeader,x=e.navigationItems,C=e.setErrors,w=e.subheaderChildren,G=e.title,L=e.uuid,B=(0,m.i)().width,D="dashboard_after_width_".concat(L),H="dashboard_before_width_".concat(L),Y=(0,o.useRef)(null),U=(0,o.useState)(j?E:(0,P.U2)(D,E)),W=U[0],K=U[1],F=(0,o.useState)(!1),q=F[0],z=F[1],V=(0,o.useState)(k?Math.max((0,P.U2)(H,y),13*I.iI):null),Q=V[0],$=V[1],J=(0,o.useState)(!1),X=J[0],ee=J[1],ne=(0,o.useState)(null)[1],re=O.ZP.projects.list({},{revalidateOnFocus:!1}).data,te=null===re||void 0===re?void 0:re.projects,ie={label:function(){var e;return null===te||void 0===te||null===(e=te[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];N?(r&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(N))):(null===te||void 0===te?void 0:te.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return G}}]),(0,o.useEffect)((function(){null===Y||void 0===Y||!Y.current||q||X||null===ne||void 0===ne||ne(Y.current.getBoundingClientRect().width)}),[q,W,X,Q,Y,ne,B]),(0,o.useEffect)((function(){q||(0,P.t8)(D,W)}),[p,q,W,D]),(0,o.useEffect)((function(){X||(0,P.t8)(H,Q)}),[X,Q,H]);var ue=(0,v.Z)(E);return(0,o.useEffect)((function(){j&&ue!==E&&K(E)}),[j,E,ue]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{title:G}),(0,f.jsx)(a.Z,{breadcrumbs:oe,menuItems:_,project:null===te||void 0===te?void 0:te[0],version:null===te||void 0===te||null===(n=te[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===x||void 0===x?void 0:x.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(g.Z,{navigationItems:x,showMore:!0})}),(0,f.jsx)(s.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:t,afterHeightOffset:S.Mz,afterHidden:p,afterMousedownActive:q,afterWidth:W,before:k,beforeHeightOffset:S.Mz,beforeMousedownActive:X,beforeWidth:d.k1+(k?Q:0),headerOffset:A,hideAfterCompletely:!0,leftOffset:k?d.k1:null,mainContainerHeader:Z,mainContainerRef:Y,setAfterMousedownActive:z,setAfterWidth:K,setBeforeMousedownActive:ee,setBeforeWidth:$,children:[w&&(0,f.jsx)(h,{children:w}),M]})})]}),R&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===C||void 0===C?void 0:C(null)},children:(0,f.jsx)(l.Z,T(T({},R),{},{onClose:function(){return null===C||void 0===C?void 0:C(null)}}))})]})}},28795:function(e,n,r){var t;r.d(n,{B:function(){return i},M:function(){return t}}),function(e){e.BACKFILLS="backfills",e.BLOCK_RUNS="block_runs",e.DASHBOARD="dashboard",e.EDIT="edit",e.MONITOR="monitor",e.PIPELINE_LOGS="pipeline_logs",e.PIPELINE_RUNS="pipeline_runs",e.RUNS="runs",e.SETTINGS="settings",e.SYNCS="syncs",e.TRIGGERS="triggers"}(t||(t={}));var i="cancel_all_running_pipeline_runs"},75457:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(82394),i=r(21831),o=r(82684),u=r(34376),l=r(50724),s=r(94629),c=r(15338),a=r(82555),d=r(55485),f=r(85854),p=r(38276),h=r(35686),b=r(38626),g=r(44897),O=r(42631),v=r(70515),S=b.default.div.withConfig({displayName:"indexstyle__BannerStyle",componentId:"sc-1te3pmf-0"})(["border-radius:","px;padding:","px;"," "," ",""],O.n_,3*v.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||g.Z.shadow).small,";\n  ")}),(function(e){return e.background&&"\n    background: ".concat(e.background,";\n  ")}),(function(e){return e.backgroundImage&&'\n    background-image: url("'.concat(e.backgroundImage,'");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  ')})),I=r(46684),P=r(85010),m=r(72619),E=r(19183),T=r(28598);function j(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?j(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var y=function(e){var n=e.after,r=e.afterHidden,t=e.afterWidth,b=e.before,g=e.beforeWidth,O=e.breadcrumbs,j=e.buildSidekick,y=e.children,N=e.errors,M=e.headline,R=e.pageName,_=e.pipeline,A=e.setErrors,Z=e.subheader,x=e.subheaderBackground,C=e.subheaderBackgroundImage,w=e.subheaderButton,G=e.subheaderText,L=e.title,B=e.uuid,D=(0,E.i)().height,H=(0,u.useRouter)().query.pipeline,Y=_.uuid,U=h.ZP.pipelines.detail(Y,{includes_outputs:!1},{revalidateOnFocus:!1}).data,W=null===U||void 0===U?void 0:U.pipeline;(0,o.useEffect)((function(){(0,m.bB)(U,A)}),[U,A]);var K=(0,o.useMemo)((function(){return n||(j?j({height:D,heightOffset:I.Mz,pipeline:W}):null)}),[n,j,D,W]),F=t||(K?50*v.iI:null),q=(0,o.useMemo)((function(){var e=[];return W?(e.push.apply(e,[{label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}}]),O?(e.push({label:function(){return W.uuid},linkProps:{as:"/pipelines/".concat(Y,"/triggers"),href:"/pipelines/[pipeline]/triggers"}}),e.push.apply(e,(0,i.Z)(O)),e[e.length-1].bold=!0):e.push({bold:!0,label:function(){return W.name}})):null!==U&&void 0!==U&&U.error&&e.push({bold:!0,danger:!0,label:function(){return"Error loading pipeline"}}),e}),[O,null===U||void 0===U?void 0:U.error,W,Y]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(s.Z,{after:K,afterHidden:r,afterWidth:F,before:b,beforeWidth:g,breadcrumbs:q,navigationItems:(0,P.H)(R,W,H),subheaderChildren:"undefined"!==typeof Z&&Z,title:W?L?L(W):W.name:null,uuid:B,children:[(w||G)&&(0,T.jsx)(p.Z,{mb:v.Mq,mt:v.cd,mx:v.cd,children:(0,T.jsx)(S,{background:x,backgroundImage:C,children:(0,T.jsxs)(d.ZP,{alignItems:"center",children:[w,G&&(0,T.jsx)(p.Z,{ml:3}),G]})})}),M&&(0,T.jsx)(p.Z,{p:v.cd,children:(0,T.jsxs)(p.Z,{mt:v.cd,px:v.cd,children:[(0,T.jsx)(f.Z,{level:5,children:M}),(0,T.jsx)(c.Z,{light:!0,mt:v.cd,short:!0})]})}),y]}),N&&(0,T.jsx)(l.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===A||void 0===A?void 0:A(null)},children:(0,T.jsx)(a.Z,k(k({},N),{},{onClose:function(){return null===A||void 0===A?void 0:A(null)}}))})]})}},85010:function(e,n,r){r.d(n,{H:function(){return l}});var t=r(57653),i=r(72473),o=r(28795),u=r(50178);function l(e,n,r){var l=(n||{}).uuid||r,s=[{Icon:i.Bf,id:o.M.TRIGGERS,isSelected:function(){return o.M.TRIGGERS===e},label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(l,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{Icon:i.Pf,id:o.M.RUNS,isSelected:function(){return o.M.RUNS===e},label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(l,"/runs"),href:"/pipelines/[pipeline]/runs"}},{Icon:i.dE,id:o.M.BACKFILLS,isSelected:function(){return o.M.BACKFILLS===e},label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(l,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{Icon:i.UL,id:o.M.PIPELINE_LOGS,isSelected:function(){return o.M.PIPELINE_LOGS===e},label:function(){return"Logs"},linkProps:{as:"/pipelines/".concat(l,"/logs"),href:"/pipelines/[pipeline]/logs"}},{Icon:i.ug,id:o.M.MONITOR,isSelected:function(){return o.M.MONITOR===e},label:function(){return"Monitor"},linkProps:{as:"/pipelines/".concat(l,"/monitors"),href:"/pipelines/[pipeline]/monitors"}}];return t.qL.INTEGRATION===(null===n||void 0===n?void 0:n.type)&&s.unshift({Icon:i.Nt,id:o.M.SYNCS,isSelected:function(){return o.M.SYNCS===e},label:function(){return"Syncs"},linkProps:{as:"/pipelines/".concat(l,"/syncs"),href:"/pipelines/[pipeline]/syncs"}}),(0,u.Ct)()||(s.unshift({Icon:i.EK,disabled:!l,id:o.M.EDIT,isSelected:function(){return o.M.EDIT===e},label:function(){return"Edit pipeline"},linkProps:{as:"/pipelines/".concat(l,"/edit"),href:"/pipelines/[pipeline]/edit"}}),s.push({Icon:i.Zr,id:o.M.SETTINGS,isSelected:function(){return o.M.SETTINGS===e},label:function(){return"Pipeline settings"},linkProps:{as:"/pipelines/".concat(l,"/settings"),href:"/pipelines/[pipeline]/settings"}})),s.unshift({Icon:i.G6,id:o.M.DASHBOARD,isSelected:function(){return o.M.DASHBOARD===e},label:function(){return"Dashboard"},linkProps:{as:"/pipelines/".concat(l,"/dashboard"),href:"/pipelines/[pipeline]/dashboard"}}),s}},57653:function(e,n,r){r.d(n,{$1:function(){return a},G7:function(){return f},LM:function(){return p},Mj:function(){return h},QK:function(){return c},a_:function(){return g},kA:function(){return b},qL:function(){return u},r0:function(){return d}});var t,i,o,u,l=r(82394),s=r(72473);!function(e){e.INTEGRATION="integration",e.PYTHON="python",e.PYSPARK="pyspark",e.STREAMING="streaming"}(u||(u={}));var c,a,d,f=(t={},(0,l.Z)(t,u.INTEGRATION,"Integration"),(0,l.Z)(t,u.PYTHON,"Standard"),(0,l.Z)(t,u.PYSPARK,"PySpark"),(0,l.Z)(t,u.STREAMING,"Streaming"),t),p="all",h=(u.PYTHON,u.INTEGRATION,u.STREAMING,i={},(0,l.Z)(i,p,s.ie),(0,l.Z)(i,u.INTEGRATION,s.YC),(0,l.Z)(i,u.PYTHON,s.El),(0,l.Z)(i,u.STREAMING,s.dB),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive",e.NO_SCHEDULES="no_schedules",e.RETRY="retry",e.RETRY_INCOMPLETE_BLOCK_RUNS="retry_incomplete_block_runs"}(c||(c={})),function(e){e.GROUP="group_by",e.HISTORY_DAYS="from_history_days",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(a||(a={})),function(e){e.STATUS="status",e.TAG="tag",e.TYPE="type"}(d||(d={}));var b=[c.ACTIVE,c.INACTIVE,c.NO_SCHEDULES],g=(o={},(0,l.Z)(o,u.PYTHON,"python3"),(0,l.Z)(o,u.PYSPARK,"pysparkkernel"),o)}}]);