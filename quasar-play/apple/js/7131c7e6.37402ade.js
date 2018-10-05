(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7131c7e6","38efd0dc"],{"94d0":function(e,t,a){},9529:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[a("q-input",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{placeholder:"Placeholder"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{"stack-label":"Stack label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{"float-label":"Float label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{"float-label":"Float label & placeholder",placeholder:"Placeholder"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{type:"email","float-label":"Email",suffix:"@gmail.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("q-input",{attrs:{type:"password","float-label":"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-input",{attrs:{type:"password","float-label":"Password with no toggle button","no-pass-toggle":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-input",{attrs:{placeholder:"Clearable",clearable:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{"upper-case":"","stack-label":"Uppercased"},model:{value:e.upper,callback:function(t){e.upper=t},expression:"upper"}}),a("div",{staticClass:"caption"},[e._v("Number inputs")]),a("q-input",{attrs:{type:"number",prefix:"$","stack-label":"Number with prefix"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),a("q-input",{attrs:{type:"number","stack-label":"Number with prefix, suffix, clearable",prefix:"$",suffix:"TSP",clearable:""},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),a("q-input",{attrs:{type:"number",step:2,prefix:"$","stack-label":"With step 2, use arrow keys"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),a("q-input",{attrs:{type:"number",decimals:2,step:1.4,prefix:"$","stack-label":"Float with step 1.4, use arrow keys"},model:{value:e.floatNum,callback:function(t){e.floatNum=t},expression:"floatNum"}}),a("div",{staticClass:"caption"},[e._v("Inverted")]),a("q-input",{attrs:{inverted:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{type:"email",inverted:"",color:"secondary",suffix:"@gmail.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("q-input",{attrs:{type:"password","inverted-light":"",color:"amber",clearable:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-input",{attrs:{type:"number",align:"right",suffix:"EUR",inverted:"",color:"brown","stack-label":"Number aligned to right"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),a("div",{staticClass:"caption"},[e._v("\n      Lazy input\n    ")]),a("span",{staticClass:"chip-container"},[a("q-chip",{attrs:{square:"",color:"secondary"}},[e._v("\n        Model: "+e._s(e.lazy)+"\n      ")])],1),a("q-input",{attrs:{value:e.lazy,"max-length":"30"},on:{change:function(t){return e.lazy=t}}}),a("div",{staticClass:"caption"},[e._v("Hide the underline")]),a("q-input",{attrs:{"hide-underline":""},model:{value:e.textUnderline,callback:function(t){e.textUnderline=t},expression:"textUnderline"}}),a("div",{staticClass:"caption"},[e._v("Before/after icons")]),a("q-input",{attrs:{type:"email",before:[{icon:"mail",handler:function(){}}],suffix:"@gmail.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("q-input",{attrs:{inverted:"","float-label":"Icon when input has content",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{inverted:"",color:"secondary",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{"float-label":"Minimum 5 characters password","inverted-light":"",color:"amber",type:"password",after:[{icon:"done",condition:e.password.length>=5,handler:function(){}}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-input",{attrs:{inverted:"",color:"brown",type:"email",before:[{icon:"mail",handler:function(){}}],suffix:"@gmail.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("q-input",{attrs:{inverted:"",type:"number",before:[{icon:"monetization_on",handler:function(){}}]},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),a("div",{staticClass:"caption"},[e._v("Textarea (auto-grows)")]),a("q-input",{attrs:{type:"textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),a("q-input",{attrs:{inverted:"",color:"secondary","float-label":"Inverted textarea",type:"textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),a("q-input",{attrs:{inverted:"",color:"purple",rows:"5","float-label":"Inverted textarea",type:"textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),a("div",{staticClass:"caption"},[e._v("Textarea (has max height)")]),a("q-input",{attrs:{type:"textarea","max-height":50},model:{value:e.areaMax,callback:function(t){e.areaMax=t},expression:"areaMax"}}),a("div",{staticClass:"caption"},[e._v("Error/warning states")]),a("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning,callback:function(t){e.warning=t},expression:"warning"}}),a("q-input",{attrs:{error:e.error,warning:e.warning},model:{value:e.texterr,callback:function(t){e.texterr=t},expression:"texterr"}}),a("q-input",{attrs:{error:e.error,warning:e.warning,"float-label":"Float label"},model:{value:e.texterr,callback:function(t){e.texterr=t},expression:"texterr"}}),a("q-input",{attrs:{error:e.error,warning:e.warning,inverted:""},model:{value:e.texterr,callback:function(t){e.texterr=t},expression:"texterr"}}),a("q-input",{attrs:{error:e.error,warning:e.warning,inverted:"","float-label":e.error?"We got an error":"Everything fine now",after:[{icon:"warning",error:!0,handler:function(){}},{icon:"priority_high",warning:!0,handler:function(){}}]},model:{value:e.texterr,callback:function(t){e.texterr=t},expression:"texterr"}}),a("div",{staticClass:"caption"},[e._v("Read only")]),a("q-input",{attrs:{readonly:"","float-label":"Read only text input"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{readonly:"","inverted-light":"",color:"amber","float-label":"Read only & inverted"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{rows:"5",readonly:"",type:"textarea","float-label":"Read only textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),a("q-input",{attrs:{rows:"5",readonly:"",inverted:"",type:"textarea","float-label":"Read only & inverted textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),a("div",{staticClass:"caption"},[e._v("Disabled")]),a("q-input",{attrs:{disable:"","float-label":"Disabled text input"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{disable:"","inverted-light":"",color:"amber","float-label":"Disabled & inverted"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{rows:"5",disable:"",type:"textarea","float-label":"Disabled textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),a("q-input",{attrs:{rows:"5",disable:"",inverted:"",type:"textarea","float-label":"Disabled & inverted textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),a("div",{staticClass:"caption"},[e._v("With loading state")]),a("q-toggle",{attrs:{label:"Toggle loading state"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}}),a("q-input",{attrs:{loading:e.loading},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{loading:e.loading,"stack-label":"Loading or not?"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{loading:e.loading,inverted:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("q-input",{attrs:{loading:e.loading,inverted:"",color:"secondary","stack-label":"Loading or not?"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("div",{staticClass:"caption"},[e._v("In a Field")]),a("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error2,callback:function(t){e.error2=t},expression:"error2"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning2,callback:function(t){e.warning2=t},expression:"warning2"}}),a("br"),a("br"),a("q-field",{attrs:{count:7,helper:"What's your account name?",error:e.error2,"error-label":"Hey, we got an error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[a("q-input",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("q-field",{attrs:{icon:"wifi",helper:"Your awesome helper",error:e.error2,"error-label":"We got an error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[a("q-input",{attrs:{"float-label":"Textfield"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("q-field",{attrs:{icon:"account_circle",label:"Account",count:7,helper:"What's your account name?",error:e.error2,"error-label":"Hey, we got an error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[a("q-input",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("q-field",{attrs:{icon:"card_travel",label:"Travel card",helper:"Some helper",error:e.error2,"error-label":"Wait, wait. Error!",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[a("q-input",{attrs:{"float-label":"Float label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("q-field",{attrs:{icon:"important_devices",label:"Device name",count:15,helper:"Some helper",error:e.error2,"error-label":"Wait, wait. Error!",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[a("q-input",{attrs:{inverted:"",placeholder:"On Field",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("q-field",{attrs:{icon:"place",label:"Your destination",helper:"Some helper",error:e.error2,"error-label":"Some error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[a("q-input",{attrs:{color:"secondary",inverted:"","stack-label":"Stack Label",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("q-field",{attrs:{icon:"wifi",label:"Wifi network",helper:"We need your wifi id",error:e.error2,"error-label":"That's not a valid id number",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[a("q-input",{attrs:{color:"secondary",inverted:e.error,"float-label":"Float Label",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("div",{staticClass:"caption"},[e._v("On a dark background")]),a("div",{staticClass:"dark-example"},[a("q-input",{attrs:{type:"number","float-label":"Colored",dark:"",color:"yellow",prefix:"$",suffix:"TSP"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),a("q-input",{attrs:{type:"number","float-label":"Colored",dark:"",color:"secondary",prefix:"$",suffix:"TSP"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),a("q-field",{attrs:{icon:"wifi",label:"Wifi network",count:10,helper:"We need this for connecting you"}},[a("q-input",{attrs:{dark:"",color:"yellow","float-label":"Wifi name"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)],1),a("div",{staticClass:"caption"},[e._v("With tooltip/popover")]),a("q-input",{attrs:{"float-label":"Tooltip"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}},[a("q-tooltip",[e._v("Some tooltip")])],1),a("q-input",{attrs:{"float-label":"Popover"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}},[a("q-popover",{attrs:{fit:"",offset:[0,10]}},[a("div",{staticClass:"bg-primary text-white",staticStyle:{padding:"10px"}},[e._v("\n          Some popover content\n        ")])])],1)],1)])},n=[];r._withStripped=!0;a("94d0");var l={data:function(){return{text:"",textUnderline:"Quasar",upper:"UP",num:5,floatNum:2.34,lazy:"Lazy update - on blur",email:"email",password:"password",area:"Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.",areaMax:"",texterr:"Quasar rulz",error:!0,warning:!1,error2:!1,warning2:!1,loading:!0}},watch:{error:function(e){e&&(this.warning=!1)},warning:function(e){e&&(this.error=!1)},error2:function(e){e&&(this.warning2=!1)},warning2:function(e){e&&(this.error2=!1)}}},o=l,i=a("2877"),s=Object(i["a"])(o,r,n,!1,null,null,null);s.options.__file="input.vue";t["default"]=s.exports}}]);