"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4839],{55283:function(n,t,e){e.d(t,{HC:function(){return E},Kf:function(){return s},Nk:function(){return f},PY:function(){return A},gE:function(){return T},jv:function(){return R},nz:function(){return p},oh:function(){return d},qn:function(){return l},t1:function(){return h},y9:function(){return m}});var r=e(38626),o=e(44897),i=e(44425),c=e(42631),a=e(70515),u=e(91437),d=68;function l(n,t){var e,r,c=((null===t||void 0===t||null===(e=t.theme)||void 0===e?void 0:e.borders)||o.Z.borders).light,a=((null===t||void 0===t||null===(r=t.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,u=t||{},d=u.blockColor,l=u.isSelected,s=u.theme;return l?c=(s||o.Z).content.active:i.tf.TRANSFORMER===n||d===i.Lq.PURPLE?(c=(s||o.Z).accent.purple,a=(s||o.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||d===i.Lq.YELLOW?(c=(s||o.Z).accent.yellow,a=(s||o.Z).accent.yellowLight):i.tf.DATA_LOADER===n||d===i.Lq.BLUE?(c=(s||o.Z).accent.blue,a=(s||o.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||o.Z).accent.sky,a=(s||o.Z).accent.skyLight):i.tf.SENSOR===n||d===i.Lq.PINK?(c=(s||o.Z).accent.pink,a=(s||o.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||o.Z).accent.dbt,a=(s||o.Z).accent.dbtLight):i.tf.EXTENSION===n||d===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).teal,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).rose,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).roseLight):i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||d===i.Lq.GREY||i.tf.CUSTOM===n&&!d?(c=(s||o.Z).content.default,a=(s||o.Z).accent.contentDefaultTransparent):i.tf.GLOBAL_DATA_PRODUCT!==n||d||(c=(s||o.Z).monotone.white,a=(s||o.Z).monotone.whiteTransparent),{accent:c,accentLight:a}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,u.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),f=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),A=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(l(n.blockType,n).accent,";\n    }\n  ")})),p=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,a.iI,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return n.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((n.theme||o.Z).borders.medium2,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),R=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;position:relative;"," "," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding-bottom: ".concat(a.iI,"px;\n    padding-top: ").concat(a.iI,"px;\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),T=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*a.iI,.5*a.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||o.Z.text).fileBrowser,";\n      ")})),h=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*a.iI),m=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})([""," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?a.iI:d,"px;\n  ")}),(function(n){return!n.noMargin&&"\n    margin-bottom: ".concat(1*a.iI,"px;\n    padding-bottom: ").concat(1*a.iI,"px;\n  ")})),E=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,d)},44425:function(n,t,e){e.d(t,{$W:function(){return h},DA:function(){return R},HX:function(){return b},J8:function(){return g},L8:function(){return a},LE:function(){return f},Lk:function(){return L},Lq:function(){return A},M5:function(){return p},Q3:function(){return m},Qj:function(){return O},Ut:function(){return _},V4:function(){return y},VZ:function(){return E},dO:function(){return s},f2:function(){return C},iZ:function(){return D},t6:function(){return u},tf:function(){return l}});var r,o,i,c,a,u,d=e(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(a||(a={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var l,s=(r={},(0,d.Z)(r,u.MARKDOWN,"MD"),(0,d.Z)(r,u.PYTHON,"PY"),(0,d.Z)(r,u.R,"R"),(0,d.Z)(r,u.SQL,"SQL"),(0,d.Z)(r,u.YAML,"YAML"),r),f=(o={},(0,d.Z)(o,u.MARKDOWN,"Markdown"),(0,d.Z)(o,u.PYTHON,"Python"),(0,d.Z)(o,u.R,"R"),(0,d.Z)(o,u.SQL,"SQL"),(0,d.Z)(o,u.YAML,"YAML"),o);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(l||(l={}));var A,p=[l.CALLBACK,l.CONDITIONAL,l.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(A||(A={}));var R,T,h=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],m=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],E=[l.DATA_EXPORTER,l.DATA_LOADER],g=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],b=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],O=[l.CHART,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN],D=[l.CALLBACK,l.CHART,l.EXTENSION,l.SCRATCHPAD,l.MARKDOWN],L=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SENSOR,l.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(R||(R={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(T||(T={}));var C=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],y=(i={},(0,d.Z)(i,l.CALLBACK,"Callback"),(0,d.Z)(i,l.CHART,"Chart"),(0,d.Z)(i,l.CONDITIONAL,"Conditional"),(0,d.Z)(i,l.CUSTOM,"Custom"),(0,d.Z)(i,l.DATA_EXPORTER,"Data exporter"),(0,d.Z)(i,l.DATA_LOADER,"Data loader"),(0,d.Z)(i,l.DBT,"DBT"),(0,d.Z)(i,l.EXTENSION,"Extension"),(0,d.Z)(i,l.GLOBAL_DATA_PRODUCT,"Global data product"),(0,d.Z)(i,l.MARKDOWN,"Markdown"),(0,d.Z)(i,l.SCRATCHPAD,"Scratchpad"),(0,d.Z)(i,l.SENSOR,"Sensor"),(0,d.Z)(i,l.TRANSFORMER,"Transformer"),i),_=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER,l.SENSOR];c={},(0,d.Z)(c,l.DATA_EXPORTER,"DE"),(0,d.Z)(c,l.DATA_LOADER,"DL"),(0,d.Z)(c,l.SCRATCHPAD,"SP"),(0,d.Z)(c,l.SENSOR,"SR"),(0,d.Z)(c,l.MARKDOWN,"MD"),(0,d.Z)(c,l.TRANSFORMER,"TF")},81728:function(n,t,e){e.d(t,{RA:function(){return f},kC:function(){return A},vg:function(){return g},kE:function(){return y},Mp:function(){return p},Pb:function(){return l},HW:function(){return O},wX:function(){return R},x6:function(){return T},_6:function(){return h},zf:function(){return b},Y6:function(){return L},Lo:function(){return C},wE:function(){return _},J3:function(){return m},We:function(){return s},QV:function(){return D},C5:function(){return E}});var r=e(75582),o=e(17717),i=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],c=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],a=(e(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),u=["0","1","2","3","4","5","6","7","8","9"],d=e(86735);function l(n){if(!n)return!1;try{JSON.parse(n)}catch(t){return!1}return!0}function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(t)}function f(n){return n.split(" ").join("_")}function A(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function R(n){return n.charAt(0).toLowerCase()+n.slice(1)}function T(n){if(null===n||"undefined"===typeof n)return"";var t=n.toString().split("."),e=(0,r.Z)(t,2),o=e[0],i=e[1],c=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return i?"".concat(c,".").concat(i):c}function h(n,t){var e,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t,c=void 0!==i&&null!==i;if(c||(i=2),1===i)e=n;else{var a=n.length,u=n[a-1];e="y"===u&&"day"!==n?"".concat(n.slice(0,a-1),"ies"):"".concat(n,"s"===u?"es":"s")}if(c&&!o){var d=r?T(i):i;return"".concat(d," ").concat(e)}return e}function m(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function E(n){var t=n.length;return"ies"===n.slice(t-3,t)?"".concat(n.slice(0,t-3),"y"):"es"===n.slice(t-2,t)&&"ces"!==n.slice(t-3,t)?n.slice(0,t-2):n.slice(0,t-1)}function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return A(m(n.toLowerCase()))}function b(n){var t,e=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return e.forEach((function(o,i){if(!t){var c=(0,r.Z)(o,2),a=c[0],u=c[1],d=e.slice(0,i).reduce((function(n,t){return n*Number(t[1])}),1);n<Number(u)*d&&(t=h(a,Math.round(n/d)))}})),t}function O(n){return"undefined"!==typeof n&&null!==n&&!isNaN(n)}function D(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=Math.pow(10,t);return Math.round((n||0)*e)/e}function L(){return"".concat((0,d.mp)(i)," ").concat((0,d.mp)(a))}function C(){return"".concat((0,d.mp)(c)).concat((0,d.mp)(u))}function y(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function _(n){var t,e=n.split(o.sep),r=e[e.length-1].split(".");return t=1===r.length?r[0]:r.slice(0,-1).join("."),e.slice(0,e.length-1).concat(t).join(o.sep)}}}]);