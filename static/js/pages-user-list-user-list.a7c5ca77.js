(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-list-user-list"],{"0898":function(t,e,n){"use strict";n.r(e);var r=n("668d"),i=n("4d26");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var u,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"f7b8b840",null,!1,r["a"],u);e["default"]=o.exports},"0d4d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".tag-sex[data-v-591c3540]{background:#007aff;color:#fff;font-size:%?23?%;padding:%?5?% %?10?%;margin-left:%?10?%;border-radius:%?20?%;line-height:%?22?%}.icon-nv[data-v-591c3540]{background:#ff698d!important}",""]),t.exports=e},1050:function(t,e,n){var r=n("353d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("1bca1778",r,!0,{sourceMap:!1,shadowMode:!1})},"131c":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{ugender:Number,age:Number}};e.default=r},1506:function(t,e,n){"use strict";var r=n("81b0"),i=n.n(r);i.a},2022:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".user-list[data-v-5cd6dd00]{margin:0 %?20?%;padding:%?20?% 0;border-bottom:%?1?% solid #eee}.user-list>uni-image[data-v-5cd6dd00]{width:%?100?%!important;height:%?100?%!important;border-radius:100%;margin-right:%?20?%;flex-shrink:0}.user-list>uni-view[data-v-5cd6dd00]:first-of-type{flex:1}.user-list>uni-view:first-of-type>uni-view[data-v-5cd6dd00]:first-child{font-size:%?35?%}.user-list>uni-view[data-v-5cd6dd00]:last-of-type{width:%?80?%;color:#ccc}.icon-zengjia1[data-v-5cd6dd00]{width:%?100?%;color:#f8791b!important}",""]),t.exports=e},"208f":function(t,e,n){"use strict";var r=n("7e6d"),i=n.n(r);i.a},"353d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".load-more[data-v-08d44c1c]{text-align:center;color:#aaa;padding:%?15?%}",""]),t.exports=e},"39f5":function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),a=r(n("5530")),u=r(n("fba4")),s=r(n("8307")),o=r(n("f758")),c=r(n("792a")),f=n("800f"),l=n("c748"),d=n("26cb"),v={components:{swiperTabHead:u.default,userList:s.default,loadMore:o.default,noThing:c.default},computed:(0,a.default)({},(0,d.mapState)(["userInfo"])),data:function(){return{swiperheight:500,tabIndex:0,tabBars:[{name:"互关",id:"huguan",num:0},{name:"关注",id:"guanzhu",num:0},{name:"粉丝",id:"fensi",num:0}],searchtext:"",cache:[],newslist:[{loadtext:"",list:[]},{loadtext:"",list:[]},{loadtext:"",list:[]}]}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){var n=e.windowHeight-uni.upx2px(100);t.swiperheight=n}}),this.initData()},onShow:function(){var t=this;uni.getSystemInfo({success:function(e){var n=e.windowHeight-uni.upx2px(100);t.swiperheight=n}}),this.initData()},onNavigationBarSearchInputChanged:function(t){this.searchtext=t.text},onNavigationBarSearchInputConfirmed:function(e){var n=this;e.text&&(this.cache=this.newslist[this.tabIndex].list,this.newslist[this.tabIndex].list=this.newslist[this.tabIndex].list.filter((function(r){return n.strSimilarity2Percent(r.username,e.text)>0&&(t("log",typeof n.strSimilarity2Percent(r.username,e.text)," at pages/user-list/user-list.vue:149"),!0)})))},onNavigationBarButtonTap:function(t){0===t.index&&uni.navigateBack({delta:1})},watch:{searchtext:function(t,e){""===t&&(this.newslist[this.tabIndex].list=this.cache)}},methods:{loadmore:function(t){this.newslist[t].loadtext="加载中..."},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},attActive:function(t,e){var n=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,l.userAtt)(e.id);case 2:r=t.sent,r&&0===r.code&&n.initData();case 4:case"end":return t.stop()}}),t)})))()},initData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,f.getUserAttList)(t.userInfo.id);case 2:return n=e.sent,e.next=5,(0,f.getUserEachList)(t.userInfo.id);case 5:return r=e.sent,e.next=8,(0,f.getUserFansList)(t.userInfo.id,r);case 8:i=e.sent,t.tabBars[0].num=r.length,t.tabBars[1].num=n.length,t.tabBars[2].num=i.length,t.newslist[0].list=r,t.newslist[1].list=n,t.newslist[2].list=i;case 15:case"end":return e.stop()}}),e)})))()},strSimilarity2Number:function(t,e){var n,r,i,a,u,s=t.length,o=e.length,c=[];if(0===s)return o;if(0===o)return s;for(n=0;n<=s;n++)c[n]=[],c[n][0]=n;for(r=0;r<=o;r++)c[0][r]=r;for(n=1;n<=s;n++)for(i=t.charAt(n-1),r=1;r<=o;r++)a=e.charAt(r-1),u=i===a?0:1,c[n][r]=this.Minimum(c[n-1][r]+1,c[n][r-1]+1,c[n-1][r-1]+u);return c[s][o]},strSimilarity2Percent:function(t,e){var n=t.length>e.length?t.length:e.length,r=this.strSimilarity2Number(t,e);return(1-r/n).toFixed(4)},Minimum:function(t,e,n){return t<e?t<n?t:n:e<n?e:n}}};e.default=v}).call(this,n("0de9")["log"])},"3c74":function(t,e,n){"use strict";n.r(e);var r=n("852c"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"437c":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".nothing[data-v-78bb65ff]{background:#fff;position:absolute;display:flex;flex-direction:column;align-items:center;top:0;left:0;right:0;bottom:0}.nothing uni-image[data-v-78bb65ff]{width:50%;margin-left:%?-36?%}",""]),t.exports=e},"43ba":function(t,e,n){"use strict";n.r(e);var r=n("d2e4"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"4d26":function(t,e,n){"use strict";n.r(e);var r=n("39f5"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"4ee5":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-scroll-view",{staticClass:"uni-swiper-tab",style:t.scrollStyle,attrs:{"scroll-x":!0}},[t._l(t.tabBars,(function(e,r){return[n("v-uni-view",{key:e.id+"_0",staticClass:"swiper-tab-list",class:{active:t.tabIndex==r},style:t.scrollItemStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabtap(r)}}},[t._v(t._s(e.name)+" "+t._s(e.num?e.num:"")),n("v-uni-view",{staticClass:"swiper-tab-line"})],1)]}))],2)],1)},a=[]},"57fa":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"load-more"},[t._v(t._s(t.loadtext))])},a=[]},"5bf4":function(t,e,n){"use strict";n.r(e);var r=n("b276"),i=n("907c");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("208f");var u,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"591c3540",null,!1,r["a"],u);e["default"]=o.exports},"604a":function(t,e,n){t.exports=n.p+"static/img/img_nodata.64228dd4.png"},"668d":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={userList:n("8307").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"body"},[n("swiper-tab-head",{attrs:{tabBars:t.tabBars,tabIndex:t.tabIndex,scrollItemStyle:"width:33%;",scrollStyle:"border-bottom:0;"},on:{tabtap:function(e){arguments[0]=e=t.$handleEvent(e),t.tabtap.apply(void 0,arguments)}}}),0==t.tabIndex&&t.newslist[0].list.length>0?[t._l(t.newslist[0].list,(function(e,r){return[n("user-list",{key:r+"_0",attrs:{item:e,index:r},on:{attActive:function(e){arguments[0]=e=t.$handleEvent(e),t.attActive.apply(void 0,arguments)}}})]}))]:t._e(),1==t.tabIndex&&t.newslist[1].list.length>0?[t._l(t.newslist[1].list,(function(e,r){return[n("user-list",{key:r+"_0",attrs:{item:e,index:r},on:{attActive:function(e){arguments[0]=e=t.$handleEvent(e),t.attActive.apply(void 0,arguments)}}})]}))]:t._e(),2==t.tabIndex&&t.newslist[2].list.length>0?[t._l(t.newslist[2].list,(function(e,r){return[n("user-list",{key:r+"_0",attrs:{item:e,index:r},on:{attActive:function(e){arguments[0]=e=t.$handleEvent(e),t.attActive.apply(void 0,arguments)}}})]}))]:t._e()],2)},a=[]},"71af":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{tabBars:Array,tabIndex:Number,scrollStyle:{type:String,default:""},scrollItemStyle:{type:String,default:""}},methods:{tabtap:function(t){this.$emit("tabtap",t)}}};e.default=r},7368:function(t,e,n){var r=n("83f7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("ab41c200",r,!0,{sourceMap:!1,shadowMode:!1})},"792a":function(t,e,n){"use strict";n.r(e);var r=n("f675"),i=n("3c74");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("1506");var u,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"78bb65ff",null,!1,r["a"],u);e["default"]=o.exports},"7e6d":function(t,e,n){var r=n("0d4d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("4324582f",r,!0,{sourceMap:!1,shadowMode:!1})},"7fbe":function(t,e,n){"use strict";n.r(e);var r=n("ef39"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"800f":function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("d81d"),n("45fc"),Object.defineProperty(e,"__esModule",{value:!0}),e.getUserEachList=e.getUserFansList=e.getUserAttList=void 0,n("96cf");var i=r(n("1da1")),a=r(n("4622")),u=n("13b4"),s=function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(n){var r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={Authorization:"Bearer "+uni.getStorageSync("token")},i=[],t("log",n," at api/user-list.js:12"),a.default.setLoading(!1),e.next=6,a.default.get("follower/roll/"+n,{},r);case 6:return s=e.sent,a.default.setLoading(!0),s&&s.length&&(i=s.map((function(t){return{id:t.id,userpic:u.picUrl+t.userpic,username:t.username,name:t.institution,isguanzhu:!0}}))),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.getUserAttList=s;var o=function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e,n){var r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={Authorization:"Bearer "+uni.getStorageSync("token")},i=[],a.default.setLoading(!1),t.next=5,a.default.get("fan/roll/"+e,{},r);case 5:return s=t.sent,a.default.setLoading(!0),s&&s.length&&(i=s.map((function(t){return n&&n.length&&n.some((function(e){return t.id==e.id})),{id:t.id,userpic:u.picUrl+t.userpic,username:t.username,name:t.institution,isguanzhu:t.isguanzhu}}))),t.abrupt("return",i);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();e.getUserFansList=o;var c=function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(n){var r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={Authorization:"Bearer "+uni.getStorageSync("token")},i=[],a.default.setLoading(!1),e.next=5,a.default.get("friend/roll/"+n,{},r);case 5:return s=e.sent,a.default.setLoading(!0),s&&s.length&&(i=s.map((function(t){return{id:t.id,userpic:u.picUrl+t.userpic,username:t.username,name:t.institution,isguanzhu:!0}}))),t("log",i," at api/user-list.js:79"),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.getUserEachList=c}).call(this,n("0de9")["log"])},"81b0":function(t,e,n){var r=n("437c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("176290b2",r,!0,{sourceMap:!1,shadowMode:!1})},8307:function(t,e,n){"use strict";n.r(e);var r=n("bbfb"),i=n("7fbe");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("bc24");var u,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"5cd6dd00",null,!1,r["a"],u);e["default"]=o.exports},"83f7":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".uni-swiper-tab[data-v-0396e450]{box-sizing:border-box;width:100%;background-color:#fff;border-bottom:%?1?% solid #eee}.swiper-tab-list[data-v-0396e450]{color:#969696;font-weight:700}.uni-tab-bar .active[data-v-0396e450]{color:#343434}.active .swiper-tab-line[data-v-0396e450]{border-bottom:%?6?% solid #fede33;width:%?70?%;margin:auto;border-top:%?6?% solid #fede33;border-radius:%?20?%}",""]),t.exports=e},"852c":function(t,e){},"907c":function(t,e,n){"use strict";n.r(e);var r=n("131c"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"95af":function(t,e,n){"use strict";var r=n("1050"),i=n.n(r);i.a},b02b:function(t,e,n){"use strict";n.r(e);var r=n("71af"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},b19f:function(t,e,n){var r=n("2022");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("5cbf17e4",r,!0,{sourceMap:!1,shadowMode:!1})},b276:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tag-sex icon iconfont",class:[0==t.ugender?"icon-nan":"icon-nv"]},[t._v(t._s(t.age))])},a=[]},bbfb:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user-list u-f-ac animated fadeIn fast",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navUserInfo.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.item.userpic,mode:"widthFix","lazy-load":!0}}),n("v-uni-view",[n("v-uni-view",[t._v(t._s(t.item.username))]),n("v-uni-view",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.item.name))])],1),n("v-uni-view",{staticClass:"icon iconfont u-f-ajc"})],1)},a=[]},bc24:function(t,e,n){"use strict";var r=n("b19f"),i=n.n(r);i.a},c748:function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.searchUserList=e.userAtt=void 0,n("96cf");var i=r(n("1da1")),a=r(n("4622")),u=n("13b4"),s=function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(n){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={Authorization:"Bearer "+uni.getStorageSync("token")},a.default.setLoading(!1),t("log",n," at api/user-search.js:12"),e.next=5,a.default.post("user/"+n+"/follow",{},r);case 5:return i=e.sent,a.default.setLoading(!0),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.userAtt=s;var o=function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(n){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={Authorization:"Bearer "+uni.getStorageSync("token")},e.next=3,a.default.get("user/search/roll?key="+n,{},r);case 3:return i=e.sent,t("log","begin:"," at api/user-search.js:23"),t("log",i," at api/user-search.js:24"),i=i&&i.length?i.map((function(t){return{id:t.id,userpic:u.picUrl+t.userpic,username:t.username,name:t.nickname,isguanzhu:t.is_following,institution:t.institution}})):[],e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.searchUserList=o}).call(this,n("0de9")["log"])},c8fb:function(t,e,n){"use strict";var r=n("7368"),i=n.n(r);i.a},d2e4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{loadtext:String}};e.default=r},ef39:function(t,e,n){"use strict";var r=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("5bf4")),a={components:{tagSexAge:i.default},props:{item:Object,index:Number},methods:{attActive:function(){this.$emit("attActive",this.index,this.item)},navUserInfo:function(){uni.navigateTo({url:"../../pages/user-space/user-space?uid="+this.item.id})}}};e.default=a},f675:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"nothing u-f-ajc animated fadeIn"},[r("v-uni-image",{attrs:{src:n("604a"),mode:"widthFix"}}),r("v-uni-text",[t._v("这里什么都没有哦~")])],1)},a=[]},f758:function(t,e,n){"use strict";n.r(e);var r=n("57fa"),i=n("43ba");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("95af");var u,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"08d44c1c",null,!1,r["a"],u);e["default"]=o.exports},fba4:function(t,e,n){"use strict";n.r(e);var r=n("4ee5"),i=n("b02b");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("c8fb");var u,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"0396e450",null,!1,r["a"],u);e["default"]=o.exports}}]);