(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0abfd0"],{"182e":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[a("p",{staticClass:"caption"},[e._v("\n      Please scroll down to see the image have a short bounce effect when being visible for first time.\n      This effect is just for demoing that something happens when target comes into view.\n    ")]),e._l(6,function(t){return a("p",{key:"a-"+t},[e._v(e._s(e.loremipsum))])}),a("p",{staticClass:"caption"},[e._v("Scroll Fire below. Reload page to see the bounce effect again.")]),a("p",{staticClass:"text-center"},[a("img",{directives:[{name:"scroll-fire",rawName:"v-scroll-fire",value:e.bounceImage,expression:"bounceImage"}],staticStyle:{width:"200px"},attrs:{src:i("2918")}})]),e._l(3,function(t){return a("p",{key:"b-"+t},[e._v(e._s(e.loremipsum))])})],2)])},n=[];a._withStripped=!0;var o={data:function(){return{loremipsum:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},methods:{bounceImage:function(e){e.classList.add("animate-bounce"),setTimeout(function(){document.body.contains(e)&&e.classList.remove("animate-bounce")},2e3)}}},s=o,r=i("2877"),c=Object(r["a"])(s,a,n,!1,null,null,null);c.options.__file="scroll-fire.vue";t["default"]=c.exports}}]);