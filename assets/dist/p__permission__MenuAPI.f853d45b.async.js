(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"+BJd":function(e,n,t){"use strict";t("cIOH"),t("6MrE")},"+H1k":function(e,n,t){"use strict";t.r(n);t("IzEo");var a=t("bx4M"),c=(t("T2oS"),t("W9HT")),r=(t("14J3"),t("BMrR")),o=(t("+L6B"),t("2/Rp")),l=(t("y8nQ"),t("Vl3Y")),i=(t("OaEy"),t("2fM7")),u=(t("miYZ"),t("tsqr")),s=t("tJVT"),d=t("q1tI"),m=t.n(d),p=t("Hx5s"),h=t("MuoO"),b=t("4Mzt"),f=(t("Q9mQ"),t("diRs")),g=(t("+BJd"),t("mr32")),k=(t("sRBo"),t("kaz8")),O=t("k1fw"),v=t("0Owb"),y=t("oBTY"),E=(t("Mwp2"),t("VXEj")),j=t("IWSt"),C=t.n(j),I=20,P=250;function x(e){var n=e.permissionTree,t=e.checkedMenu,a=e.checkedAPI,c=e.onMenuChange,r=e.onAPIChange,o=e.disabled,l=void 0!==o&&o,i={};return t.map((function(e){i[e]=!0})),m.a.createElement(E["b"],{bordered:!0,split:!0,className:C.a.menuTree},m.a.createElement(E["b"].Item,null,m.a.createElement("div",{style:{width:"100%",textAlign:"center",display:"grid",gridTemplateColumns:P+"px auto"}},m.a.createElement("div",null,"\u83dc\u5355"),m.a.createElement("div",{style:{borderLeft:"1px solid #eee"}},"API\u6743\u9650"))),n.map((function(n){return m.a.createElement(E["b"].Item,{key:n.path},m.a.createElement(M,Object(v["a"])({disabled:l,checkedAPI:a,checked:t.indexOf(n.path)>-1,menuPath:[],checkedMenu:e.checkedMenu},n,{onAPIChange:function(e){var n=a.filter((function(n){return e.findIndex((function(e){return!e.checked&&e.method==n.method&&e.path==n.path}))<0}));n.push.apply(n,Object(y["a"])(e.filter((function(e){return e.checked})))),r(n)},onMenuChange:function(e){e.map((function(e){i[e.path]=e.checked})),c(Object.keys(i).filter((function(e){return i[e]})).map((function(e){return e})))},depth:0})))})))}function M(e){var n,t=e.depth,a=I*t,c=P-a;return m.a.createElement("div",{className:C.a.menuItem,style:{paddingLeft:I*t+"px"}},m.a.createElement("div",{className:C.a.menuItemContainer,style:{gridTemplateColumns:c+"px auto"}},m.a.createElement("div",null,m.a.createElement(k["a"],{disabled:e.disabled,checked:e.checked,onChange:function(n){if(n.target.checked){e.onMenuChange([].concat(Object(y["a"])(e.menuPath.map((function(e){return{path:e,checked:!0}}))),[{path:e.path,checked:!0}],Object(y["a"])((e.children||[]).map((function(e){return{path:e.path,checked:!0}})))));var t=e.api||[],a=function e(n){var t=[];return n.map((function(n){t.push.apply(t,Object(y["a"])(n.api||[])),n.children&&t.push.apply(t,Object(y["a"])(e(n.children)))})),t};t.push.apply(t,Object(y["a"])(a(e.children||[]))),e.onAPIChange(Object(y["a"])(t.map((function(e){return Object(O["a"])(Object(O["a"])({},e),{},{checked:!0})}))))}else e.onMenuChange([{path:e.path,checked:!1}].concat(Object(y["a"])((e.children||[]).map((function(e){return{path:e.path,checked:!1}})))))}},e.name)),m.a.createElement("div",null,null===(n=e.api)||void 0===n?void 0:n.map((function(n){var t=!1;return e.checkedAPI.map((function(e){e.method===n.method&&e.path===n.path&&(t=!0)})),m.a.createElement("span",{key:n.path+" "+n.method},m.a.createElement(k["a"],{disabled:e.disabled,checked:t,onChange:function(t){e.onAPIChange([Object(O["a"])(Object(O["a"])({},n),{},{checked:t.target.checked})])}},m.a.createElement(f["a"],{title:n.name,content:m.a.createElement("span",null,m.a.createElement(g["a"],{color:"success"},n.method)," ",n.path)},m.a.createElement("span",null,n.name))))})))),m.a.createElement("div",null,(e.children||[]).map((function(n){return m.a.createElement(M,Object(v["a"])({key:n.path,disabled:e.disabled,checkedAPI:e.checkedAPI,onAPIChange:e.onAPIChange,checked:e.checkedMenu.indexOf(n.path)>-1,checkedMenu:e.checkedMenu,onMenuChange:e.onMenuChange,menuPath:[].concat(Object(y["a"])(e.menuPath),[e.path])},n,{depth:t+1}))}))))}var _=x,w=function(e){var n=e.userGroups,t=(e.menu,e.dispatch),h=Object(d["useState"])([]),f=Object(s["a"])(h,2),g=f[0],k=f[1],O=Object(d["useState"])([]),v=Object(s["a"])(O,2),y=v[0],E=v[1],j=Object(d["useState"])("admin"),C=Object(s["a"])(j,2),I=C[0],P=C[1],x=Object(d["useState"])([]),M=Object(s["a"])(x,2),w=M[0],A=M[1],S=Object(d["useState"])(0),T=Object(s["a"])(S,2),N=T[0],B=T[1],G="admin"===I,J=function(e){var n=2;P(e),B(2),Object(b["e"])(e).then((function(e){14e3!==e.code&&(0===e.code?(B(--n),k(e.data||[])):u["b"].error("\u52a0\u8f7d\u83dc\u5355\u6743\u9650\u5931\u8d25:"+e.msg))})),Object(b["d"])(e).then((function(e){0===e.code?(B(--n),E(e.data||[])):u["b"].error("\u52a0\u8f7dAPI\u6743\u9650\u5931\u8d25:"+e.msg)}))};Object(d["useEffect"])((function(){t({type:"userGroup/fetch"}),J("admin"),Object(b["c"])().then((function(e){0===e.code||14e3===e.code?A(e.data):u["b"].error("\u52a0\u8f7d\u6743\u9650\u6811\u5931\u8d25:"+e.msg)}))}),[]);var R=function(){console.log(g,y),u["b"].loading({content:"\u6b63\u5728\u4fdd\u5b58\u83dc\u5355\u6743\u9650",key:"message_save_menu"}),u["b"].loading({content:"\u6b63\u5728\u4fdd\u5b58API\u6743\u9650",key:"message_save_api"}),Object(b["j"])(I,g).then((function(e){0!==e.code&&u["b"].error({content:"\u4fdd\u5b58\u83dc\u5355\u6743\u9650\u5931\u8d25: "+e.msg,key:"message_save_menu",duration:2}),u["b"].success({content:"\u83dc\u5355\u6743\u9650\u4fdd\u5b58\u6210\u529f",key:"message_save_menu",duration:2})})),Object(b["h"])(I,y).then((function(e){0!==e.code&&u["b"].error({content:"\u4fdd\u5b58API\u6743\u9650\u5931\u8d25: "+e.msg,key:"message_save_api",duration:2}),u["b"].success({content:"\u4fdd\u5b58API\u6743\u9650\u6210\u529f",key:"message_save_api",duration:2})}))};return m.a.createElement(p["b"],null,m.a.createElement(a["a"],{style:{minHeight:"600px"}},m.a.createElement(l["a"],null,m.a.createElement(r["a"],null,m.a.createElement(l["a"].Item,{label:"\u7528\u6237\u7ec4"},m.a.createElement(i["a"],{style:{width:"120px"},onSelect:J,value:I},n.map((function(e){return m.a.createElement(i["a"].Option,{value:e.name,key:e.name},e.name)})))),m.a.createElement(o["a"],{style:{marginLeft:"10px"},onClick:R,disabled:G},"\u66f4\u65b0")),m.a.createElement("div",{style:{marginTop:"10px"}},m.a.createElement(c["a"],{spinning:0!==N,tip:"\u52a0\u8f7d\u6743\u9650\u4e2d"},m.a.createElement(_,{disabled:G,onMenuChange:function(e){k(e)},onAPIChange:function(e){E(e)},checkedMenu:g,checkedAPI:y,permissionTree:w}))))))},A=function(e){var n=e.userGroup,t=e.global;return{userGroups:n.userGroups,menu:t.menu}};n["default"]=Object(h["connect"])(A)(w)},"6MrE":function(e,n,t){},IWSt:function(e,n,t){e.exports={menuTree:"menuTree___1raGy",menuItem:"menuItem___11bfG",menuItemContainer:"menuItemContainer___1VvjO"}},mr32:function(e,n,t){"use strict";var a=t("lSNA"),c=t.n(a),r=t("pVnL"),o=t.n(r),l=t("J4zp"),i=t.n(l),u=t("q1tI"),s=t("TSYQ"),d=t.n(s),m=t("6UMo"),p=t("V/uB"),h=t.n(p),b=t("H84U"),f=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},g=function(e){var n,t=u["useContext"](b["b"]),a=t.getPrefixCls,r=function(n){var t=e.checked,a=e.onChange,c=e.onClick;a&&a(!t),c&&c(n)},l=e.prefixCls,i=e.className,s=e.checked,m=f(e,["prefixCls","className","checked"]),p=a("tag",l),h=d()(p,(n={},c()(n,"".concat(p,"-checkable"),!0),c()(n,"".concat(p,"-checkable-checked"),s),n),i);return delete m.onChange,u["createElement"]("span",o()({},m,{className:h,onClick:r}))},k=g,O=t("09Wf"),v=t("g0mS"),y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},E=new RegExp("^(".concat(O["a"].join("|"),")(-inverse)?$")),j=new RegExp("^(".concat(O["b"].join("|"),")$")),C=function(e,n){var t,a=e.prefixCls,r=e.className,l=e.style,s=e.children,p=e.icon,f=e.color,g=e.onClose,k=e.closeIcon,O=e.closable,C=void 0!==O&&O,I=y(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),P=u["useContext"](b["b"]),x=P.getPrefixCls,M=P.direction,_=u["useState"](!0),w=i()(_,2),A=w[0],S=w[1];u["useEffect"]((function(){"visible"in I&&S(I.visible)}),[I.visible]);var T=function(){return!!f&&(E.test(f)||j.test(f))},N=o()({backgroundColor:f&&!T()?f:void 0},l),B=T(),G=x("tag",a),J=d()(G,(t={},c()(t,"".concat(G,"-").concat(f),B),c()(t,"".concat(G,"-has-color"),f&&!B),c()(t,"".concat(G,"-hidden"),!A),c()(t,"".concat(G,"-rtl"),"rtl"===M),t),r),R=function(e){e.stopPropagation(),g&&g(e),e.defaultPrevented||"visible"in I||S(!1)},H=function(){return C?k?u["createElement"]("div",{className:"".concat(G,"-close-icon"),onClick:R},k):u["createElement"](h.a,{className:"".concat(G,"-close-icon"),onClick:R}):null},V="onClick"in I||s&&"a"===s.type,L=Object(m["a"])(I,["visible"]),z=p||null,Q=z?u["createElement"](u["Fragment"],null,z,u["createElement"]("span",null,s)):s,W=u["createElement"]("span",o()({},L,{ref:n,className:J,style:N}),Q,H());return V?u["createElement"](v["a"],null,W):W},I=u["forwardRef"](C);I.displayName="Tag",I.CheckableTag=k;n["a"]=I}}]);