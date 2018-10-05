(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21767e"],{c71e:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:t.view}},[a("q-layout-header",{attrs:{reveal:t.headerReveal},model:{value:t.header,callback:function(e){t.header=e},expression:"header"}},[a("q-toolbar",{attrs:{inverted:"ios"===t.$q.theme}},[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Toggle menu on left side"},on:{click:function(e){t.left=!t.left}}}),a("q-toolbar-title",[t._v("\n        Header\n        "),a("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Header Subtitle")])]),t.$q.platform.within.iframe?t._e():a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",dense:"",label:"Go to Showcase"},on:{click:function(e){t.$router.replace("/showcase")}}}),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Toggle menu on right side"},on:{click:function(e){t.right=!t.right}}})],1),"mat"===t.$q.theme?a("demo-tabs"):t._e()],1),a("q-layout-footer",{attrs:{reveal:t.footerReveal},model:{value:t.footer,callback:function(e){t.footer=e},expression:"footer"}},["ios"===t.$q.theme?a("demo-tabs"):t._e(),a("q-toolbar",{attrs:{inverted:"ios"===t.$q.theme}},[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Toggle menu on left side"},on:{click:function(e){t.left=!t.left}}}),a("q-toolbar-title",[t._v("\n        Footer\n      ")]),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Toggle menu on right side"},on:{click:function(e){t.right=!t.right}}})],1)],1),a("q-layout-drawer",{attrs:{side:"left",overlay:t.leftOverlay,behavior:t.leftBehavior,breakpoint:t.leftBreakpoint,"content-class":"mat"===t.$q.theme?"bg-grey-3":null},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list-header",[t._v("Left Panel")]),a("q-item",{attrs:{to:"/showcase/layout-demo/play-with-layout"}},[a("q-item-side",{attrs:{icon:"account circle"}}),a("q-item-main",{attrs:{label:"Play with Layout",sublabel:"Learn more about it"}}),a("q-item-side",{attrs:{right:"",icon:"thumb_up"}})],1),a("q-item",{attrs:{to:"/showcase/layout-demo/drawer-panels"}},[a("q-item-side",{attrs:{icon:"view_array"}}),a("q-item-main",{attrs:{label:"Drawer Panels",sublabel:"Layout left/right sides"}})],1),a("q-item",{attrs:{to:"/showcase/layout-demo/page-sticky"}},[a("q-item-side",{attrs:{icon:"pin_drop"}}),a("q-item-main",{attrs:{label:"Page Sticky",sublabel:"...on a Layout"}})],1),a("q-item",{attrs:{to:"/showcase/layout-demo/floating-action-button"}},[a("q-item-side",{attrs:{icon:"play_for_work"}}),a("q-item-main",{attrs:{label:"Floating Action Button",sublabel:"For Page actions"}})],1),t.scrolling?a("div",{staticStyle:{padding:"25px 16px 16px"}},t._l(50,function(e){return a("p",{key:"left-"+e,staticClass:"caption"},[a("em",[t._v("Left Panel has intended scroll")])])})):t._e()],1)],1),a("q-layout-drawer",{attrs:{side:"right",overlay:t.rightOverlay,behavior:t.rightBehavior,breakpoint:t.rightBreakpoint,"content-class":"mat"===t.$q.theme?"bg-grey-3":null,"content-style":{fontSize:"16px"}},model:{value:t.right,callback:function(e){t.right=e},expression:"right"}},[a("q-list-header",[t._v("Right Panel")]),t.scrolling?a("div",{staticStyle:{padding:"25px 16px 16px"}},t._l(50,function(e){return a("p",{key:"right-"+e,staticClass:"caption"},[a("em",[t._v("Right Panel has intended scroll")])])})):t._e()],1),a("q-page-container",[a("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[a("router-view")],1)],1)],1)},l=[];o._withStripped=!0;var i=a("3156"),r=a.n(i),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-tabs",{style:"ios"===t.$q.theme?{background:"rgba(255,255,255,0.95"}:null,attrs:{color:"primary",inverted:"ios"===t.$q.theme}},[a("q-route-tab",{attrs:{slot:"title",icon:"play_circle_outline",to:"/showcase/layout-demo/play-with-layout",replace:"",label:"Play with Layout"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"view_array",to:"/showcase/layout-demo/drawer-panels",replace:"",label:"Drawer Panels"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"pin_drop",to:"/showcase/layout-demo/page-sticky",replace:"",label:"Page Sticky"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"play_for_work",to:"/showcase/layout-demo/floating-action-button",replace:"",label:"Floating Action Button"},slot:"title"})],1)},s=[];n._withStripped=!0;var c={name:"demo-tabs"},u=c,m=a("2877"),d=Object(m["a"])(u,n,s,!1,null,null,null);d.options.__file="demo-tabs.vue";var h=d.exports,f=a("2f62"),b={components:{DemoTabs:h},computed:r()({header:{get:function(){return this.$store.state.layoutDemo.header},set:function(t){this.$store.commit("layoutDemo/setHeader",t)}},footer:{get:function(){return this.$store.state.layoutDemo.footer},set:function(t){this.$store.commit("layoutDemo/setFooter",t)}},left:{get:function(){return this.$store.state.layoutDemo.left},set:function(t){this.$store.commit("layoutDemo/setLeft",t)}},right:{get:function(){return this.$store.state.layoutDemo.right},set:function(t){this.$store.commit("layoutDemo/setRight",t)}}},Object(f["b"])("layoutDemo",["view"]),Object(f["c"])("layoutDemo",["headerReveal","footerReveal","leftOverlay","leftBehavior","leftBreakpoint","rightOverlay","rightBehavior","rightBreakpoint","scrolling"]))},p=b,y=Object(m["a"])(p,o,l,!1,null,null,null);y.options.__file="layout-demo.vue";e["default"]=y.exports}}]);