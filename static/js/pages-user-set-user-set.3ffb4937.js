(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-set-user-set"],{"0053":function(t,e,i){"use strict";i.r(e);var n=i("4fa4"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"0f19":function(t,e,i){"use strict";(function(t){i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object,index:Number,userInfo:Object},methods:{clickevent:function(){switch(this.item.clicktype){case"navigateTo":this.item.url&&uni.navigateTo({url:this.item.url});break;case"switchTab":this.item.url&&uni.switchTab({url:this.item.url});break;case"showImage":uni.previewImage({urls:["../../static/images/shit/dashangimg.jpg"],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){t("log","选中了第"+(e.tapIndex+1)+"个按钮,第"+(e.index+1)+"张图片"," at components/home/home-list-item.vue:43")},fail:function(e){t("log",e.errMsg," at components/home/home-list-item.vue:46")}}});break;case"contactme":uni.previewImage({urls:["../../static/images/shit/contactme.jpg"],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){t("log","选中了第"+(e.tapIndex+1)+"个按钮,第"+(e.index+1)+"张图片"," at components/home/home-list-item.vue:57")},fail:function(e){t("log",e.errMsg," at components/home/home-list-item.vue:60")}}});break;case"clear":uni.showModal({title:"提示",content:"是否要清除缓存？",confirmText:"立刻清除",success:function(t){t.confirm&&(uni.clearStorage(),uni.showToast({title:"清除缓存成功！"}))}});break}}}};e.default=n}).call(this,i("0de9")["log"])},"13bb":function(t,e,i){"use strict";i.r(e);var n=i("1406"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},1406:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{showActionSheet:{type:Boolean,default:!1}},data:function(){return{maskClosable:!0,tips:"退出登录会清除您的登录信息，确认退出吗？",itemList:[{text:"退出登录",color:"#E3302D"}],color:"#9a9a9a",size:26,isCancel:!0}},methods:{closeActionSheet:function(){this.$emit("toggleAction")},openActionSheet:function(t){},itemClick:function(e){e.index;t("log","e:"," at components/common/myActionSheet.vue:66"),t("log",e," at components/common/myActionSheet.vue:67"),this.$emit("toggleAction",1)}}};e.default=i}).call(this,i("0de9")["log"])},1745:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body"},[t._l(t.list,(function(e,n){return[i("home-list-item",{key:n+"_0",attrs:{item:e,userInfo:t.userInfo,index:n}})]})),i("v-uni-button",{staticClass:"user-set-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showActive.apply(void 0,arguments)}}},[t._v("退出登陆")]),i("my-action-sheet",{attrs:{showActionSheet:t.showActionSheet},on:{toggleAction:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleAction.apply(void 0,arguments)}}})],2)},o=[]},"1b54":function(t,e,i){var n=i("8bb3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7662118e",n,!0,{sourceMap:!1,shadowMode:!1})},"1b61":function(t,e,i){"use strict";i.r(e);var n=i("1745"),a=i("3326");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("73cc");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"63dac590",null,!1,n["a"],s);e["default"]=r.exports},"1dbb":function(t,e,i){var n=i("4c3a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("560290b5",n,!0,{sourceMap:!1,shadowMode:!1})},2252:function(t,e,i){"use strict";var n=i("bcab"),a=i.n(n);a.a},"2d78":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".home-list-item[data-v-9484b828]{padding:%?20?%;border-top:%?1?% solid #f4f4f4;border-bottom:%?1?% solid #f4f4f4}.home-list-item>uni-view[data-v-9484b828]:first-child{color:#333}.home-list-item>uni-view:first-child>uni-view[data-v-9484b828]{margin-right:%?10?%}.home-list-item>uni-view[data-v-9484b828]:last-child{color:#ccc}.home-list-hover[data-v-9484b828]{background:#f4f4f4}",""]),t.exports=e},3104:function(t,e,i){"use strict";i.r(e);var n=i("42d6"),a=i("13bb");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3ff9");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"76ab8563",null,!1,n["a"],s);e["default"]=r.exports},3326:function(t,e,i){"use strict";i.r(e);var n=i("99e9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},3696:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.tui-actionsheet[data-v-4e397304]{width:100%;position:fixed;left:0;right:0;bottom:0;z-index:9999;visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transform-origin:center;transform-origin:center;transition:all .25s ease-in-out;background-color:#f7f7f7;min-height:%?100?%}.tui-actionsheet-radius[data-v-4e397304]{border-top-left-radius:%?20?%;border-top-right-radius:%?20?%;overflow:hidden}.tui-actionsheet-show[data-v-4e397304]{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}.tui-actionsheet-tips[data-v-4e397304]{width:100%;padding:%?40?% %?60?%;box-sizing:border-box;text-align:center;background-color:#fff;display:flex;align-items:center;justify-content:center}.tui-operate-box[data-v-4e397304]{padding-bottom:%?12?%}.tui-actionsheet-btn[data-v-4e397304]{width:100%;height:%?100?%;background-color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;font-size:%?34?%;position:relative}.tui-btn-last[data-v-4e397304]{padding-bottom:env(safe-area-inset-bottom)}.tui-actionsheet-divider[data-v-4e397304]::before{content:"";width:100%;border-top:%?1?% solid #e7e7e7;position:absolute;top:0;left:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-actionsheet-cancel[data-v-4e397304]{color:#1a1a1a;padding-bottom:env(safe-area-inset-bottom)}.tui-actionsheet-hover[data-v-4e397304]{background-color:#f7f7f9}.tui-actionsheet-mask[data-v-4e397304]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:9996;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-4e397304]{opacity:1;visibility:visible}',""]),t.exports=e},"3ff9":function(t,e,i){"use strict";var n=i("1b54"),a=i.n(n);a.a},"42d6":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={tuiActionsheet:i("a423").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("tui-actionsheet",{attrs:{show:t.showActionSheet,tips:t.tips,"item-list":t.itemList,"mask-closable":t.maskClosable,color:t.color,size:t.size,"is-cancel":t.isCancel},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemClick.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.closeActionSheet.apply(void 0,arguments)}}})],1)},o=[]},"4c2b":function(t,e,i){"use strict";i.r(e);var n=i("0f19"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"4c3a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"/* 公共按钮 */.user-set-btn[data-v-63dac590]{width:100%;margin:%?20?% 0;background:#ffe933!important;border:0!important;color:#333!important}.user-set-btn-disable[data-v-63dac590]{background:#f4f4f4!important;border:%?1?% solid #eee!important;color:#909090!important}.body[data-v-63dac590]{padding:0 %?20?%!important}.common-input[data-v-63dac590]{font-size:%?30?%;border-bottom:%?1?% solid #f4f4f4}",""]),t.exports=e},"4fa4":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiActionsheet",props:{maskClosable:{type:Boolean,default:!0},show:{type:Boolean,default:!1},itemList:{type:Array,default:function(){return[{text:"确定",color:"#2B2B2B"}]}},tips:{type:String,default:""},color:{type:String,default:"#808080"},size:{type:Number,default:26},radius:{type:Boolean,default:!0},isCancel:{type:Boolean,default:!0}},methods:{handleClickMask:function(){this.maskClosable&&this.handleClickCancel()},handleClickItem:function(t){if(this.show){var e=t.currentTarget.dataset;this.$emit("click",{index:e.index})}},handleClickCancel:function(){this.$emit("cancel")}}};e.default=n},"5bc1":function(t,e,i){"use strict";i.r(e);var n=i("62b8"),a=i("4c2b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("cd0c");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"9484b828",null,!1,n["a"],s);e["default"]=r.exports},"62b8":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"home-list-item u-f-ac u-f-jsb animated fadeIn fast",attrs:{"hover-class":"home-list-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-f-ac"},[t.item.icon?i("v-uni-view",{staticClass:"icon iconfont",class:["icon-"+t.item.icon]}):t._e(),t._v(t._s(t.item.name))],1),i("v-uni-view",{staticClass:"icon iconfont icon-jinru"})],1)},o=[]},"73cc":function(t,e,i){"use strict";var n=i("1dbb"),a=i.n(n);a.a},"83e9":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"tui-actionsheet",class:{"tui-actionsheet-show":t.show,"tui-actionsheet-radius":t.radius}},[t.tips?i("v-uni-view",{staticClass:"tui-actionsheet-tips",style:{fontSize:t.size+"rpx",color:t.color}},[t._v(t._s(t.tips))]):t._e(),i("v-uni-view",{class:[t.isCancel?"tui-operate-box":""]},[t._l(t.itemList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"tui-actionsheet-btn tui-actionsheet-divider",class:{"tui-btn-last":!t.isCancel&&n==t.itemList.length-1},style:{color:e.color||"#2B2B2B"},attrs:{"hover-class":"tui-actionsheet-hover","hover-stay-time":150,"data-index":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickItem.apply(void 0,arguments)}}},[t._v(t._s(e.text))])]}))],2),t.isCancel?i("v-uni-view",{staticClass:"tui-actionsheet-btn tui-actionsheet-cancel",attrs:{"hover-class":"tui-actionsheet-hover","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickCancel.apply(void 0,arguments)}}},[t._v("取消")]):t._e()],1),i("v-uni-view",{staticClass:"tui-actionsheet-mask",class:{"tui-mask-show":t.show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickMask.apply(void 0,arguments)}}})],1)},o=[]},"8bb3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".container[data-v-76ab8563]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-76ab8563]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-76ab8563]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-76ab8563]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-btn-box[data-v-76ab8563]{width:100%;padding:%?10?% %?40?%;box-sizing:border-box}",""]),t.exports=e},"99e9":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=n(i("5bc1")),s=n(i("3104")),c=i("26cb"),r={components:{homeListItem:o.default,myActionSheet:s.default},computed:(0,a.default)({},(0,c.mapState)(["userInfo"])),data:function(){return{list:[{icon:"",name:"清除缓存",clicktype:"clear",url:""}],showActionSheet:!1,button:[{text:"取消",type:"blue",plain:!0},{text:"确定",type:"red",plain:!1}]}},methods:(0,a.default)((0,a.default)({},(0,c.mapMutations)(["setUserInfo","setChatList"])),{},{showActive:function(){this.showActionSheet=!0},toggleAction:function(t){t?(this.setUserInfo({}),uni.clearStorageSync("userInfo"),uni.clearStorageSync("token"),uni.clearStorageSync("refresh_token"),this.setChatList([]),uni.switchTab({url:"../home/home"})):this.showActionSheet=!1}})};e.default=r},a423:function(t,e,i){"use strict";i.r(e);var n=i("83e9"),a=i("0053");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2252");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4e397304",null,!1,n["a"],s);e["default"]=r.exports},a926:function(t,e,i){var n=i("2d78");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("c940d9f4",n,!0,{sourceMap:!1,shadowMode:!1})},bcab:function(t,e,i){var n=i("3696");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5192ea3a",n,!0,{sourceMap:!1,shadowMode:!1})},cd0c:function(t,e,i){"use strict";var n=i("a926"),a=i.n(n);a.a}}]);