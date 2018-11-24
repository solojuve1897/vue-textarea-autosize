!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueTextareaAutosize=factory():root.VueTextareaAutosize=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){var Component=__webpack_require__(4)(__webpack_require__(3),__webpack_require__(5),null,null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("textarea-autosize",__WEBPACK_IMPORTED_MODULE_0__components_TextareaAutosize_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_TextareaAutosize_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_TextareaAutosize_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_TextareaAutosize_vue__);__webpack_require__.d(__webpack_exports__,"TextareaAutosize",function(){return __WEBPACK_IMPORTED_MODULE_0__components_TextareaAutosize_vue___default.a});var plugin={version:"1.0.5",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(0))},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target};__webpack_exports__.default={name:"TextareaAutosize",created:function(){this.updateVal()},mounted:function(){this.resize()},props:{value:{type:[String,Number],default:""},autosize:{type:Boolean,default:!0},minHeight:{type:[Number],default:null},maxHeight:{type:[Number],default:null},important:{type:[Boolean,Array],default:!1}},data:function(){return{val:null,maxHeightScroll:!1}},computed:{computedStyles:function(){var objStyles={};return this.autosize&&(objStyles.resize=this.isResizeImportant?"none !important":"none",this.maxHeightScroll||(objStyles.overflow=this.isOverflowImportant?"hidden !important":"hidden")),objStyles},isResizeImportant:function(){var imp=this.important;return!0===imp||Array.isArray(imp)&&imp.includes("resize")},isOverflowImportant:function(){var imp=this.important;return!0===imp||Array.isArray(imp)&&imp.includes("overflow")},isHeightImportant:function(){var imp=this.important;return!0===imp||Array.isArray(imp)&&imp.includes("height")},listeners:function(){var _this=this;return _extends({},this.$listeners,{input:function(event){return _this.$emit("input",event.target.value)}})}},methods:{updateVal:function(){this.val=this.value},resize:function(){var important=this.isHeightImportant?"important":"";this.$el.style.setProperty("height","auto",important);var contentHeight=this.$el.scrollHeight+1;this.minHeight&&(contentHeight=contentHeight<this.minHeight?this.minHeight:contentHeight),this.maxHeight&&(contentHeight>this.maxHeight?(contentHeight=this.maxHeight,this.maxHeightScroll=!0):this.maxHeightScroll=!1);var heightVal=contentHeight+"px";return this.$el.style.setProperty("height",heightVal,important),this}},watch:{value:function(){this.updateVal()},val:function(_val){this.$nextTick(this.resize),this.$emit("input",_val)}}}},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement;return(_vm._self._c||_h)("textarea",_vm._g({directives:[{name:"model",rawName:"v-model",value:_vm.val,expression:"val"}],style:_vm.computedStyles,domProps:{value:_vm.val},on:{focus:_vm.resize,input:function($event){$event.target.composing||(_vm.val=$event.target.value)}}},_vm.listeners))},staticRenderFns:[]}}])});