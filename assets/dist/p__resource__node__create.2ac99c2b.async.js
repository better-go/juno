(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"0U+A":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("IqgA"),a=(n("1/+H"),n("hTDs")),c=(n("S0Nf"),n("r0Wv")),u=(n("bM0/"),n("GINK")),i=n("K6Fx"),s=(n("nYMg"),n("P7cs")),o=n("wS/U"),p=n("ZZRV"),l=n.n(p),f=n("9kvl"),d={labelCol:{xs:{span:18},sm:{span:8}},wrapperCol:{xs:{span:18},sm:{span:16}}},m={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function b(e){var t=s["a"].useForm(),n=Object(o["a"])(t,1),p=n[0],b=e.initialValues,h=e.request,O=e.id,w=function(e){h(Object(i["a"])(Object(i["a"])({},e),{},{id:parseInt(O)})).then((function(e){return 0!==e.code?(u["a"].error(e.msg),!1):(u["a"].success(e.msg),f["d"].goBack(),!0)}))};return l.a.createElement(s["a"],Object(r["a"])({},d,{form:p,name:"register",onFinish:w,scrollToFirstError:!0,initialValues:b}),l.a.createElement(s["a"].Item,{name:"host_name",label:"\u673a\u5668\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u673a\u5668\u540d\u79f0"}]},l.a.createElement(c["a"],null)),l.a.createElement(s["a"].Item,m,l.a.createElement(a["a"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),l.a.createElement(a["a"],{style:{marginLeft:8},onClick:function(){f["d"].goBack()}},"\u8fd4\u56de")))}},N29E:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n("n5y/");var r=n("6FWG"),a=n("l2RT"),c=n("b6tu"),u=n("LriG"),i=n("oUYw"),s=n("sACR"),o=n("ZZRV"),p=n.n(o),l=n("PcFE"),f=n("0U+A"),d=function(e){Object(u["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"render",value:function(){return p.a.createElement(s["b"],null,p.a.createElement(r["a"],null,p.a.createElement(f["a"],{request:l["a"]})))}}]),n}(p.a.Component)},PcFE:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n("K6Fx"),a=n("MnxG"),c=n.n(a),u=n("lmYr"),i=n("4Iue"),s=n("HPov");function o(e){return p.apply(this,arguments)}function p(){return p=Object(u["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/info?".concat(Object(s["stringify"])(t))));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return f=Object(u["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/list?".concat(Object(s["stringify"])(t))));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return m=Object(u["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/create",{method:"POST",data:Object(r["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return h=Object(u["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/update",{method:"POST",data:Object(r["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function O(e){return w.apply(this,arguments)}function w(){return w=Object(u["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/delete",{method:"POST",data:Object(r["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}}}]);