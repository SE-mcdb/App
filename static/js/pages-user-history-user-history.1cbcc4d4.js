(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-history-user-history"],{"0785":function(t,e,n){"use strict";var i=n("4ea4");n("26e9"),Object.defineProperty(e,"__esModule",{value:!0}),e.deleteHistory=e.getTopicHistory=void 0,n("96cf");var a=i(n("1da1")),o=i(n("4622")),r=n("13b4"),u=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default.get("topic/history");case 2:return n=t.sent,n&&n.length?n.reverse():n=[],t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.getTopicHistory=u;var s=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o.default.setLoading(!1),t.next=3,o.default.delete("topic/history",{ids:[e]},r.headerForm);case 3:return n=t.sent,o.default.setLoading(!0),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.deleteHistory=s},"0a04":function(t,e,n){"use strict";n.r(e);var i=n("34fb"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},3406:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".user-list[data-v-0b272aaa]{margin:0 %?20?%;padding:%?20?% 0;height:%?110?%;border-bottom:%?1?% solid #eee}.wrap[data-v-0b272aaa]{width:%?500?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-list>uni-image[data-v-0b272aaa]{width:%?100?%!important;height:%?100?%!important;border-radius:100%;margin-right:%?20?%;flex-shrink:0}.user-list>uni-view[data-v-0b272aaa]:first-of-type{flex:1}.user-list>uni-view:first-of-type>uni-view[data-v-0b272aaa]:first-child{font-size:%?35?%}.user-list>uni-view[data-v-0b272aaa]:last-of-type{width:%?80?%;color:#ccc}.icon-zengjia1[data-v-0b272aaa]{width:%?100?%;color:#f8791b!important}",""]),t.exports=e},"34fb":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{item:Object,index:Number},methods:{gotoInfo:function(t){console.log(t),this.$emit("gotoTopicInfo",t)}}};e.default=i},"586b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user-list u-f-ac animated fadeIn fast",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.gotoInfo(t.item)}}},[n("v-uni-image",{attrs:{src:t.item.userpic,mode:"widthFix","lazy-load":!0}}),n("v-uni-view",[n("v-uni-view",[t._v(t._s(t.item.created_by.username))]),n("v-uni-view",{staticClass:"wrap"},[t._v(t._s(t.item.title))])],1),n("v-uni-view",{staticClass:"icon iconfont icon-jinru u-f-ajc"})],1)},o=[]},"60cb":function(t,e,n){"use strict";var i=n("b5cd"),a=n.n(i);a.a},a1b7:function(t,e,n){"use strict";n.r(e);var i=n("fd4f"),a=n("a32d");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"4a12002c",null,!1,i["a"],r);e["default"]=s.exports},a32d:function(t,e,n){"use strict";n.r(e);var i=n("ec52"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b52b:function(t,e,n){"use strict";n.r(e);var i=n("586b"),a=n("0a04");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("60cb");var r,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0b272aaa",null,!1,i["a"],r);e["default"]=s.exports},b5cd:function(t,e,n){var i=n("3406");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1eed02e1",i,!0,{sourceMap:!1,shadowMode:!1})},ec52:function(t,e,n){"use strict";var i=n("4ea4");n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("5530")),r=i(n("b52b")),u=i(n("f758")),s=i(n("3a7a")),c=i(n("632b")),f=n("26cb"),d=i(n("792a")),l=n("0785"),p={components:{historyList:r.default,loadMore:u.default,uniSwipeAction:s.default,uniSwipeActionItem:c.default,noThing:d.default},computed:(0,o.default)({},(0,f.mapState)(["userInfo"])),data:function(){return{list:[],loadtext:"",options:[{text:"删除",style:{backgroundColor:"#dd524d"}}]}},mounted:function(){this.initData()},methods:{initData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.userInfo.id){e.next=6;break}return e.next=3,(0,l.getTopicHistory)();case 3:n=e.sent,0==n.length&&(t.loadtext="浏览历史为空"),t.list=n;case 6:case"end":return e.stop()}}),e)})))()},onClick:function(t,e){this.$http.setLoading(!1),(0,l.deleteHistory)(t.id),this.list.splice(e,1)},gotoTopicInfo:function(t){uni.navigateTo({url:"../../pages/detail/detail?id="+t.tid})},showDitu:function(){console.log(88),uni.getLocation({type:"wgs84",success:function(t){console.log("当前位置的经度："+t.longitude),console.log("当前位置的纬度："+t.latitude)},fail:function(t){console.log(t)},complete:function(){}})}}};e.default=p},fd4f:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniSwipeAction:n("3a7a").default,uniSwipeActionItem:n("632b").default,historyList:n("b52b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-swipe-action",[t._l(t.list,(function(e,i){return[n("uni-swipe-action-item",{key:i,attrs:{options:t.options},on:{onClick:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(e,i)}}},[n("history-list",{key:i,attrs:{item:e},on:{gotoTopicInfo:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoTopicInfo(e)}}})],1)]}))],2),0==t.list.length?n("no-thing"):t._e(),n("load-more",{attrs:{loadtext:t.loadtext}})],1)},o=[]}}]);