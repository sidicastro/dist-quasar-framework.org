(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["48ec92ec"],{"7bdf":function(t,e,i){},b7c9:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"docs-ripple row justify-center",attrs:{padding:""}},[i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[i("p",{staticClass:"caption"},[i("span",{staticClass:"desktop-only"},[t._v("Click")]),i("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v("\n      on the area below to see it in action.\n    ")]),i("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"relative-position",class:t.classes})])])},a=[];n._withStripped=!0;var s=["primary","amber","secondary","orange","tertiary","lime","cyan","purple","brown","blue"],r={data:function(){return{color:s[0],index:0}},computed:{classes:function(){return"bg-".concat(this.color)}},mounted:function(){var t=this;this.timer=setInterval(function(){t.index=(t.index+1)%s.length,t.color=s[t.index]},3e3)},beforeDestroy:function(){clearInterval(this.timer)}},c=r,o=(i("ffa0"),i("2877")),l=Object(o["a"])(c,n,a,!1,null,null,null);l.options.__file="material-ripples.vue";e["default"]=l.exports},ffa0:function(t,e,i){"use strict";var n=i("7bdf"),a=i.n(n);a.a}}]);