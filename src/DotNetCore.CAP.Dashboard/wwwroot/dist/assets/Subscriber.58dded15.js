import{n,c as _}from"./index.648aeb94.js";const l={data(){return{subscribers:{}}},mounted(){_.get("/subscriber").then(r=>{this.subscribers=r.data})}};var o=function(){var t=this,s=t._self._c;return s("b-row",[s("h2",{attrs:{"page-line":"","mb-4":""}},[t._v(t._s(t.$t("Subscriber")))]),s("b-table-simple",{attrs:{"caption-top":"",bordered:"",small:"",responsive:""}},[s("caption",[t._v(t._s(t.$t("SubscriberDescription")))]),s("b-thead",{attrs:{"head-variant":"light"}},[s("b-tr",[s("b-th",{staticClass:"text-left",attrs:{width:"30%"}},[t._v(t._s(t.$t("Group")))]),s("b-th",{staticClass:"text-left"},[t._v(t._s(t.$t("Name")))]),s("b-th",{staticClass:"text-left"},[t._v(t._s(t.$t("Method")))])],1)],1),s("b-tbody",[t._l(t.subscribers,function(e){return t._l(e.values,function(a,i){return s("b-tr",{key:e.group+i},[i==0?s("b-td",{staticClass:"text-left align-middle",attrs:{rowspan:e.childCount}},[t._v(" "+t._s(e.group)+" ")]):t._e(),s("b-td",{staticClass:"text-left align-middle"},[t._v(" "+t._s(a.topic)+" ")]),s("b-td",[s("div",{staticClass:"snippet-code text-left align-middle"},[s("code",[s("pre",[s("span",{staticClass:"type"},[t._v(t._s(a.implName))]),t._v(":"),s("br"),s("span",{domProps:{innerHTML:t._s(a.methodEscaped)}},[t._v(t._s(a.methodEscaped))])])])])])],1)})})],2)],1)],1)},c=[],d=n(l,o,c,!1,null,null,null,null);const b=d.exports;export{b as default};
