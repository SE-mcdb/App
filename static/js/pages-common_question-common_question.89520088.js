(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common_question-common_question"],{"0869":function(t,n,e){var i=e("2e1e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("4a4739dc",i,!0,{sourceMap:!1,shadowMode:!1})},"159f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#333"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};n.default=i},"1f16":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(e("cc2b")),i(e("c133")),i(e("acfe"));var a=i(e("455d")),s=i(e("1e34")),u=i(e("b671")),o=i(e("30c5")),r=i(e("f758")),c={components:{uniSection:a.default,uniRow:s.default,uniCol:u.default,uniTitle:o.default,loadMore:r.default},data:function(){return{}},methods:{}};n.default=c},"2e1e":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * scss预处理 内置的常用样式变量\n * 后期项目会考虑使用scss\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-section[data-v-316acdfe]{background-color:#fff;margin-top:10px}.uni-section-header[data-v-316acdfe]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-316acdfe]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-316acdfe]{height:12px;background-color:#2979ff;border-radius:10px;width:4px}.circle[data-v-316acdfe]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#2979ff}.uni-section__content[data-v-316acdfe]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-316acdfe]{font-size:14px;color:#2979ff}.distraction[data-v-316acdfe]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-316acdfe]{font-size:12px;color:#999;line-height:16px;margin-top:2px}',""]),t.exports=n},"30c5":function(t,n,e){"use strict";e.r(n);var i=e("b9f3"),a=e("428d");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("6826");var u,o=e("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"032dff12",null,!1,i["a"],u);n["default"]=r.exports},"428d":function(t,n,e){"use strict";e.r(n);var i=e("eae7"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"455d":function(t,n,e){"use strict";e.r(n);var i=e("ecf0"),a=e("b52a");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("f3c8");var u,o=e("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"316acdfe",null,!1,i["a"],u);n["default"]=r.exports},6826:function(t,n,e){"use strict";var i=e("8bbb"),a=e.n(i);a.a},8077:function(t,n,e){"use strict";var i=e("d0e4"),a=e.n(i);a.a},"8bbb":function(t,n,e){var i=e("b0ea");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("1fa7a064",i,!0,{sourceMap:!1,shadowMode:!1})},"8e24":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={uniCard:e("be13").default,uniSection:e("455d").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[i("v-uni-text",{staticClass:"uni-h6"},[t._v("这里是常见问题解答，如果在使用过程中有任何疑问，请与我们反馈！")])],1),i("uni-section",{attrs:{title:"企业端",subTitle:"企业端常见问题",type:"line"}},[i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"uni-box"},[i("uni-title",{staticClass:"h2",attrs:{type:"h2",title:"1、我发布了需求，但是不想展示到需求平台上？"}})],1),i("v-uni-view",{staticClass:"uni-box"},[i("v-uni-text",{staticClass:"uni-text"},[t._v("当您不想展示在需求平台上时，可以在发布时选择“保存”选项。")]),i("v-uni-image",{staticClass:"uni-image",staticStyle:{width:"100%"},attrs:{src:e("cc2b"),mode:"widthFix","lazy-load":!0}}),i("v-uni-text",{staticClass:"uni-text"},[t._v("如果您需要发布到需求平台，可以选择直接发布。")])],1),i("v-uni-view",{staticClass:"uni-box"},[i("uni-title",{staticClass:"h2",attrs:{type:"h2",title:"2、我如何管理需求的进度呢？"}})],1),i("v-uni-view",{staticClass:"uni-box"},[i("v-uni-text",{staticClass:"uni-text"},[t._v("对于需求，我们设置了三种状态：已完成、已发布、未发布。其中只有第一种状态下需求代表着结束，后面两种状态分别是需求发布到需求平台-未完成，需求未发布到需求平台-未完成。您可以在需求管理中修改需求状态信息。")]),i("v-uni-text",{staticClass:"uni-text"},[t._v("对于订单信息，您需要根据需求进行跟踪。进入需求管理后，点击需求进入需求详情：")]),i("v-uni-image",{staticClass:"uni-image",staticStyle:{width:"100%"},attrs:{src:e("c133"),mode:"widthFix","lazy-load":!0}}),i("v-uni-text",{staticClass:"uni-text"},[t._v("然后在需求详情中找到订单信息，从而就可以对订单进行管理，即对需求的整体进度进行管理。")]),i("v-uni-image",{staticClass:"uni-image",staticStyle:{width:"100%"},attrs:{src:e("acfe"),mode:"widthFix","lazy-load":!0}})],1),i("v-uni-view",{staticClass:"uni-box"},[i("uni-title",{staticClass:"h2",attrs:{type:"h2",title:"3、我对同一个专家有多个需求怎么处理？"}})],1),i("v-uni-view",{staticClass:"uni-box"},[i("v-uni-text",{staticClass:"uni-text"},[t._v("对于多个需求，您需要通过上述过程精准定位到与专家对应的特定需求，直接通过聊天界面寻找专家得到的最近一次的需求订单信息哦~")])],1),i("v-uni-view",{staticClass:"uni-box"},[i("uni-title",{staticClass:"h2",attrs:{type:"h2",title:"4、我怎么和管理人员联系呢？"}})],1),i("v-uni-view",{staticClass:"uni-box"},[i("v-uni-text",{staticClass:"uni-text"},[t._v("您可以通过点击“我的”中“帮助与反馈”，和我们取得联系，欢迎您的来信！")])],1)],1)],1),i("uni-section",{attrs:{title:"专家端",subTitle:"专家端常见问题",type:"line"}},[i("load-more",{attrs:{loadtext:"正在整理中---"}})],1)],1)},s=[]},acfe:function(t,n,e){t.exports=e.p+"static/img/index_3.5c3c8ac3.png"},aef1:function(t,n,e){"use strict";e.r(n);var i=e("1f16"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},b0ea:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .uni-title {\n\n} */.uni-title__box[data-v-032dff12]{\ndisplay:flex;\nflex-direction:column;align-items:flex-start;justify-content:center;padding:8px 0;flex:1}.uni-title__base[data-v-032dff12]{font-size:15px;color:#333;font-weight:500}.uni-h1[data-v-032dff12]{font-size:20px;color:#333;font-weight:700}.uni-h2[data-v-032dff12]{font-size:18px;color:#333;font-weight:700}.uni-h3[data-v-032dff12]{font-size:16px;color:#333;font-weight:700\n\t/* font-weight: 400; */}.uni-h4[data-v-032dff12]{font-size:14px;color:#333;font-weight:700\n\t/* font-weight: 300; */}.uni-h5[data-v-032dff12]{font-size:12px;color:#333;font-weight:700\n\t/* font-weight: 200; */}",""]),t.exports=n},b52a:function(t,n,e){"use strict";e.r(n);var i=e("159f"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},b9f3:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-title__box",style:{"align-items":t.textAlign}},[e("v-uni-text",{staticClass:"uni-title__base",class:["uni-"+t.type],style:{color:t.color}},[t._v(t._s(t.title))])],1)},s=[]},c133:function(t,n,e){t.exports=e.p+"static/img/index_2.754e76db.png"},cc2b:function(t,n){t.exports="data:image/png;base64,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"},d0e4:function(t,n,e){var i=e("e0b0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("65190042",i,!0,{sourceMap:!1,shadowMode:!1})},e0b0:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".example-body[data-v-5021b24c]{\ndisplay:block;\npadding:10px}.uni-text[data-v-5021b24c]{font-size:14px;line-height:22px;color:#333}",""]),t.exports=n},e5b9:function(t,n,e){"use strict";e.r(n);var i=e("8e24"),a=e("aef1");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("8077");var u,o=e("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"5021b24c",null,!1,i["a"],u);n["default"]=r.exports},eae7:function(t,n,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};n.default=i},ecf0:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-section"},[e("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?e("v-uni-view",{staticClass:"uni-section__head"},[e("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),e("v-uni-view",{staticClass:"uni-section__content"},[e("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle},style:{color:t.color}},[t._v(t._s(t.title))]),t.subTitle?e("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),e("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},s=[]},f3c8:function(t,n,e){"use strict";var i=e("0869"),a=e.n(i);a.a}}]);