(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-list-user-list"],{"0898":function(t,e,n){"use strict";n.r(e);var r=n("3aba"),a=n("4d26");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"4026765e",null,!1,r["a"],u);e["default"]=o.exports},"0d4d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".tag-sex[data-v-591c3540]{background:#007aff;color:#fff;font-size:%?23?%;padding:%?5?% %?10?%;margin-left:%?10?%;border-radius:%?20?%;line-height:%?22?%}.icon-nv[data-v-591c3540]{background:#ff698d!important}",""]),t.exports=e},1050:function(t,e,n){var r=n("353d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("1bca1778",r,!0,{sourceMap:!1,shadowMode:!1})},"131c":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{ugender:Number,age:Number}};e.default=r},1506:function(t,e,n){"use strict";var r=n("81b0"),a=n.n(r);a.a},"1d81":function(t,e,n){var r=n("8469");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("8970f2c6",r,!0,{sourceMap:!1,shadowMode:!1})},"208f":function(t,e,n){"use strict";var r=n("7e6d"),a=n.n(r);a.a},"353d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".load-more[data-v-08d44c1c]{text-align:center;color:#aaa;padding:%?15?%}",""]),t.exports=e},"39f5":function(t,e,n){"use strict";var r=n("4ea4");n("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=r(n("1da1")),i=r(n("5530")),u=r(n("fba4")),s=r(n("8307")),o=r(n("f758")),c=r(n("792a")),f=n("800f"),l=n("c748"),d=n("26cb"),v={components:{swiperTabHead:u.default,userList:s.default,loadMore:o.default,noThing:c.default},computed:(0,i.default)({},(0,d.mapState)(["userInfo"])),data:function(){return{swiperheight:500,tabIndex:0,tabBars:[{name:"互关",id:"huguan",num:0},{name:"关注",id:"guanzhu",num:0},{name:"粉丝",id:"fensi",num:0}],searchtext:"",cache:[],newslist:[{loadtext:"",list:[]},{loadtext:"",list:[]},{loadtext:"",list:[]}]}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){var n=e.windowHeight-uni.upx2px(100);t.swiperheight=n}}),this.initData()},onShow:function(){var t=this;uni.getSystemInfo({success:function(e){var n=e.windowHeight-uni.upx2px(100);t.swiperheight=n}}),this.initData()},onNavigationBarSearchInputChanged:function(t){this.searchtext=t.text},onNavigationBarSearchInputConfirmed:function(t){var e=this;t.text&&(this.cache=this.newslist[this.tabIndex].list,this.newslist[this.tabIndex].list=this.newslist[this.tabIndex].list.filter((function(n){return e.strSimilarity2Percent(n.username,t.text)>0&&(console.log(typeof e.strSimilarity2Percent(n.username,t.text)),!0)})))},onNavigationBarButtonTap:function(t){0===t.index&&uni.navigateBack({delta:1})},watch:{searchtext:function(t,e){""===t&&(this.newslist[this.tabIndex].list=this.cache)}},methods:{loadmore:function(t){this.newslist[t].loadtext="加载中..."},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},attActive:function(t,e){var n=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,l.userAtt)(e.id);case 2:r=t.sent,r&&0===r.code&&n.initData();case 4:case"end":return t.stop()}}),t)})))()},initData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,f.getUserAttList)(t.userInfo.id);case 2:return n=e.sent,e.next=5,(0,f.getUserEachList)(t.userInfo.id);case 5:return r=e.sent,e.next=8,(0,f.getUserFansList)(t.userInfo.id,r);case 8:a=e.sent,t.tabBars[0].num=r.length,t.tabBars[1].num=n.length,t.tabBars[2].num=a.length,t.newslist[0].list=r,t.newslist[1].list=n,t.newslist[2].list=a;case 15:case"end":return e.stop()}}),e)})))()},strSimilarity2Number:function(t,e){var n,r,a,i,u,s=t.length,o=e.length,c=[];if(0===s)return o;if(0===o)return s;for(n=0;n<=s;n++)c[n]=[],c[n][0]=n;for(r=0;r<=o;r++)c[0][r]=r;for(n=1;n<=s;n++)for(a=t.charAt(n-1),r=1;r<=o;r++)i=e.charAt(r-1),u=a===i?0:1,c[n][r]=this.Minimum(c[n-1][r]+1,c[n][r-1]+1,c[n-1][r-1]+u);return c[s][o]},strSimilarity2Percent:function(t,e){var n=t.length>e.length?t.length:e.length,r=this.strSimilarity2Number(t,e);return(1-r/n).toFixed(4)},Minimum:function(t,e,n){return t<e?t<n?t:n:e<n?e:n}}};e.default=v},"3aba":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={userList:n("8307").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"body"},[n("swiper-tab-head",{attrs:{tabBars:t.tabBars,tabIndex:t.tabIndex,scrollItemStyle:"width:33%;",scrollStyle:"border-bottom:0;"},on:{tabtap:function(e){arguments[0]=e=t.$handleEvent(e),t.tabtap.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-swiper",{staticClass:"swiper-box",style:{height:t.swiperheight+"px"},attrs:{current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}},t._l(t.newslist,(function(e,r){return n("v-uni-swiper-item",{key:r},[n("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore(r)}}},[e.list.length>0?[t._l(e.list,(function(e,r){return[n("user-list",{key:r+"_0",attrs:{item:e,index:r},on:{attActive:function(e){arguments[0]=e=t.$handleEvent(e),t.attActive.apply(void 0,arguments)}}})]})),n("load-more",{attrs:{loadtext:e.loadtext}})]:[n("no-thing")]],2)],1)})),1)],1)],1)},i=[]},"3c74":function(t,e,n){"use strict";n.r(e);var r=n("852c"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"42c4":function(t,e,n){"use strict";var r=n("1d81"),a=n.n(r);a.a},"437c":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".nothing[data-v-78bb65ff]{background:#fff;position:absolute;display:flex;flex-direction:column;align-items:center;top:0;left:0;right:0;bottom:0}.nothing uni-image[data-v-78bb65ff]{width:50%;margin-left:%?-36?%}",""]),t.exports=e},4389:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-scroll-view",{staticClass:"uni-swiper-tab",style:t.scrollStyle,attrs:{"scroll-x":!0}},[t._l(t.tabBars,(function(e,r){return[n("v-uni-view",{key:e.id+"_0",staticClass:"swiper-tab-list",class:{active:t.tabIndex==r},style:t.scrollItemStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabtap(r)}}},[t._v(t._s(e.name)+" "+t._s(e.num?e.num:"")),n("v-uni-view",{staticClass:"swiper-tab-line"})],1)]}))],2)],1)},i=[]},"43ba":function(t,e,n){"use strict";n.r(e);var r=n("d2e4"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"4d26":function(t,e,n){"use strict";n.r(e);var r=n("39f5"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"57fa":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"load-more"},[t._v(t._s(t.loadtext))])},i=[]},"5bf4":function(t,e,n){"use strict";n.r(e);var r=n("b276"),a=n("907c");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("208f");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"591c3540",null,!1,r["a"],u);e["default"]=o.exports},"5c8f":function(t,e,n){"use strict";var r=n("75e6"),a=n.n(r);a.a},"604a":function(t,e,n){t.exports=n.p+"static/img/img_nodata.64228dd4.png"},"71af":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{tabBars:Array,tabIndex:Number,scrollStyle:{type:String,default:""},scrollItemStyle:{type:String,default:""}},methods:{tabtap:function(t){this.$emit("tabtap",t)}}};e.default=r},"75e6":function(t,e,n){var r=n("d860");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("1d85cac9",r,!0,{sourceMap:!1,shadowMode:!1})},"792a":function(t,e,n){"use strict";n.r(e);var r=n("f675"),a=n("3c74");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("1506");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"78bb65ff",null,!1,r["a"],u);e["default"]=o.exports},"7e6d":function(t,e,n){var r=n("0d4d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("4324582f",r,!0,{sourceMap:!1,shadowMode:!1})},"7fbe":function(t,e,n){"use strict";n.r(e);var r=n("ef39"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"800f":function(t,e,n){"use strict";var r=n("4ea4");n("d81d"),n("45fc"),Object.defineProperty(e,"__esModule",{value:!0}),e.getUserEachList=e.getUserFansList=e.getUserAttList=void 0,n("96cf");var a=r(n("1da1")),i=r(n("4622")),u=n("13b4"),s=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={Authorization:"Bearer "+uni.getStorageSync("token")},r=[],console.log(e),i.default.setLoading(!1),t.next=6,i.default.get("follower/roll/"+e,{},n);case 6:return a=t.sent,i.default.setLoading(!0),a&&a.length&&(r=a.map((function(t){return{id:t.id,userpic:u.picUrl+t.userpic,username:t.username,isguanzhu:!0}}))),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.getUserAttList=s;var o=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,n){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={Authorization:"Bearer "+uni.getStorageSync("token")},a=[],i.default.setLoading(!1),t.next=5,i.default.get("fan/roll/"+e,{},r);case 5:return s=t.sent,i.default.setLoading(!0),s&&s.length&&(a=s.map((function(t){return n&&n.length&&n.some((function(e){return t.id==e.id})),{id:t.id,userpic:u.picUrl+t.userpic,username:t.username,isguanzhu:t.isguanzhu}}))),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();e.getUserFansList=o;var c=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={Authorization:"Bearer "+uni.getStorageSync("token")},r=[],i.default.setLoading(!1),t.next=5,i.default.get("friend/roll/"+e,{},n);case 5:return a=t.sent,i.default.setLoading(!0),a&&a.length&&(r=a.map((function(t){return{id:t.id,userpic:u.picUrl+t.userpic,username:t.username,isguanzhu:!0}}))),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.getUserEachList=c},"81b0":function(t,e,n){var r=n("437c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("176290b2",r,!0,{sourceMap:!1,shadowMode:!1})},8307:function(t,e,n){"use strict";n.r(e);var r=n("b7ea"),a=n("7fbe");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("5c8f");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"6bdf61ea",null,!1,r["a"],u);e["default"]=o.exports},8469:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".uni-swiper-tab[data-v-2798a52a]{box-sizing:border-box;width:100%;background-color:#fff;border-bottom:%?1?% solid #eee}.swiper-tab-list[data-v-2798a52a]{color:#969696;font-weight:700}.uni-tab-bar .active[data-v-2798a52a]{color:#343434}.active .swiper-tab-line[data-v-2798a52a]{border-bottom:%?6?% solid #fede33;width:%?70?%;margin:auto;border-top:%?6?% solid #fede33;border-radius:%?20?%}",""]),t.exports=e},"852c":function(t,e){},"907c":function(t,e,n){"use strict";n.r(e);var r=n("131c"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"95af":function(t,e,n){"use strict";var r=n("1050"),a=n.n(r);a.a},b02b:function(t,e,n){"use strict";n.r(e);var r=n("71af"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},b276:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tag-sex icon iconfont",class:[0==t.ugender?"icon-nan":"icon-nv"]},[t._v(t._s(t.age))])},i=[]},b7ea:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user-list u-f-ac animated fadeIn fast",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navUserInfo.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.item.userpic,mode:"widthFix","lazy-load":!0}}),n("v-uni-view",[n("v-uni-view",[t._v(t._s(t.item.username))]),n("v-uni-view",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.item.institution))])],1),n("v-uni-view",{staticClass:"icon iconfont u-f-ajc"})],1)},i=[]},c748:function(t,e,n){"use strict";var r=n("4ea4");n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.searchUserList=e.userAtt=void 0,n("96cf");var a=r(n("1da1")),i=r(n("4622")),u=n("13b4"),s=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={Authorization:"Bearer "+uni.getStorageSync("token")},i.default.setLoading(!1),console.log(e),t.next=5,i.default.post("user/"+e+"/follow",{},n);case 5:return r=t.sent,i.default.setLoading(!0),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.userAtt=s;var o=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={Authorization:"Bearer "+uni.getStorageSync("token")},t.next=3,i.default.get("user/search/roll?key="+e,{},n);case 3:return r=t.sent,console.log("begin:"),console.log(r),r=r&&r.length?r.map((function(t){return{id:t.id,userpic:u.picUrl+t.userpic,username:t.username,isguanzhu:t.is_following,institution:t.institution}})):[],t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.searchUserList=o},d2e4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{loadtext:String}};e.default=r},d860:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".user-list[data-v-6bdf61ea]{margin:0 %?20?%;padding:%?20?% 0;border-bottom:%?1?% solid #eee}.user-list>uni-image[data-v-6bdf61ea]{width:%?100?%!important;height:%?100?%!important;border-radius:100%;margin-right:%?20?%;flex-shrink:0}.user-list>uni-view[data-v-6bdf61ea]:first-of-type{flex:1}.user-list>uni-view:first-of-type>uni-view[data-v-6bdf61ea]:first-child{font-size:%?35?%}.user-list>uni-view[data-v-6bdf61ea]:last-of-type{width:%?80?%;color:#ccc}.icon-zengjia1[data-v-6bdf61ea]{width:%?100?%;color:#f8791b!important}",""]),t.exports=e},ef39:function(t,e,n){"use strict";var r=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("5bf4")),i={components:{tagSexAge:a.default},props:{item:Object,index:Number},methods:{attActive:function(){this.$emit("attActive",this.index,this.item)},navUserInfo:function(){uni.navigateTo({url:"../../pages/user-space/user-space?uid="+this.item.id})}}};e.default=i},f675:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"nothing u-f-ajc animated fadeIn"},[r("v-uni-image",{attrs:{src:n("604a"),mode:"widthFix"}}),r("v-uni-text",[t._v("这里什么都没有哦~")])],1)},i=[]},f758:function(t,e,n){"use strict";n.r(e);var r=n("57fa"),a=n("43ba");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("95af");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"08d44c1c",null,!1,r["a"],u);e["default"]=o.exports},fba4:function(t,e,n){"use strict";n.r(e);var r=n("4389"),a=n("b02b");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("42c4");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"2798a52a",null,!1,r["a"],u);e["default"]=o.exports}}]);