(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-certificate-expert-certificate-expert"],{"4e1d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={tuiListCell:i("fe6b").default,tuiIcon:i("3e6d").default,tuiButton:i("bff5").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-status-bar"}),"0"==t.userInfo.type?i("v-uni-view",{staticClass:"tui-page-title"},[t._v("专家认证")]):"4"==t.userInfo.type?i("v-uni-view",{staticClass:"tui-page-title"},[t._v("专家信息编辑")]):t._e(),i("v-uni-view",{staticClass:"tui-form"},[i("v-uni-view",{staticClass:"tui-view-input"},[i("tui-list-cell",{attrs:{hover:!1,lineLeft:!1,backgroundColor:"transparent"}},[i("v-uni-view",{staticClass:"tui-cell-input"},[i("tui-icon",{attrs:{name:"people",color:"#6d7a87",size:40}}),i("v-uni-input",{attrs:{require:!0,value:t.name,placeholder:"请输入真实姓名","placeholder-class":"tui-phcolor",type:"text",maxlength:"36"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputName.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.name,expression:"name"}],staticClass:"tui-icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput(1)}}},[i("tui-icon",{attrs:{name:"close-fill",size:32,color:"#bfbfbf"}})],1)],1)],1),i("tui-list-cell",{attrs:{hover:!1,lineLeft:!1,backgroundColor:"transparent"}},[i("v-uni-view",{staticClass:"tui-cell-input"},[i("tui-icon",{attrs:{name:"card",color:"#6d7a87",size:40}}),i("v-uni-input",{attrs:{require:!0,value:t.ID_num,placeholder:"请输入身份证","placeholder-class":"tui-phcolor",type:"text",maxlength:"36"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputID_num.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ID_num,expression:"ID_num"}],staticClass:"tui-icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput(2)}}},[i("tui-icon",{attrs:{name:"close-fill",size:32,color:"#bfbfbf"}})],1)],1)],1),i("tui-list-cell",{attrs:{hover:!1,lineLeft:!1,backgroundColor:"transparent"}},[i("v-uni-view",{staticClass:"tui-cell-input"},[i("tui-icon",{attrs:{name:"mobile",color:"#6d7a87",size:40}}),i("v-uni-input",{attrs:{require:!0,value:t.phone,placeholder:"请输入电话号码","placeholder-class":"tui-phcolor",type:"text",maxlength:"36"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputPhone.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.phone,expression:"phone"}],staticClass:"tui-icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput(3)}}},[i("tui-icon",{attrs:{name:"close-fill",size:32,color:"#bfbfbf"}})],1)],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",[i("v-uni-view",{staticClass:"thorui-input-title",attrs:{require:!0}},[t._v("擅长领域")]),i("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getSelectedInfo.apply(void 0,arguments)}}},t._l(t.checkboxItems,(function(e,n){return i("v-uni-label",{key:n},[i("v-uni-view",{staticClass:"thorui-align__center"},[i("v-uni-checkbox",{attrs:{checked:e.checked,value:e.value,color:"#f8683c",borderColor:"#999"}}),i("v-uni-text",{staticClass:"tui-text"},[t._v(t._s(e.name))])],1)],1)})),1)],1)],1),i("tui-list-cell",{attrs:{hover:!1,lineLeft:!1,backgroundColor:"transparent"}},[i("v-uni-view",{staticClass:"tui-cell-input"},[i("tui-icon",{attrs:{name:"strategy",color:"#6d7a87",size:40}}),i("v-uni-input",{attrs:{value:t.paper,placeholder:"请输入一篇发表的论文全称(知兔可查)","placeholder-class":"tui-phcolor",type:"text",maxlength:"36"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputPaper.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.paper,expression:"paper"}],staticClass:"tui-icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput(4)}}},[i("tui-icon",{attrs:{name:"close-fill",size:32,color:"#bfbfbf"}})],1)],1)],1),i("tui-list-cell",{attrs:{hover:!1,lineLeft:!1,backgroundColor:"transparent"}},[i("v-uni-view",{staticClass:"tui-cell-input"},[i("tui-icon",{attrs:{name:"strategy",color:"#6d7a87",size:40}}),i("v-uni-input",{attrs:{value:t.patent,placeholder:"请输入一篇发表的专刊全称(知兔可查)","placeholder-class":"tui-phcolor",type:"text",maxlength:"36"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputPatent.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.patent,expression:"patent"}],staticClass:"tui-icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput(5)}}},[i("tui-icon",{attrs:{name:"close-fill",size:32,color:"#bfbfbf"}})],1)],1)],1),i("tui-list-cell",[i("v-uni-view",{staticClass:"thorui-input-title"},[t._v("(论文和专刊至少选择一项填写)")])],1),i("tui-list-cell",{attrs:{hover:!1,lineLeft:!1,backgroundColor:"transparent"}},[i("v-uni-view",{staticClass:"tui-cell-input"},[i("tui-icon",{attrs:{name:"home",color:"#6d7a87",size:40}}),i("v-uni-input",{attrs:{value:t.organization,placeholder:"请输入工作单位","placeholder-class":"tui-phcolor",type:"text",maxlength:"36"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputOrganization.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.organization,expression:"organization"}],staticClass:"tui-icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput(6)}}},[i("tui-icon",{attrs:{name:"close-fill",size:32,color:"#bfbfbf"}})],1)],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",[i("v-uni-view",{staticClass:"thorui-input-title"},[t._v("个人简介")]),i("v-uni-textarea",{attrs:{require:!0,placeholder:"请输入个人简介","placeholder-class":"thorui-phcolor",maxlength:"512",value:t.scholar_profile},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputScholar_Profile.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.scholar_profile,expression:"scholar_profile"}],staticClass:"tui-icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput(7)}}},[i("tui-icon",{attrs:{name:"close-fill",size:32,color:"#bfbfbf"}})],1)],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",[i("v-uni-view",{staticClass:"thorui-input-title"},[t._v("身份证照片")]),i("uploadID",{on:{getIDpic:function(e){arguments[0]=e=t.$handleEvent(e),t.getIDPath.apply(void 0,arguments)}}})],1)],1)],1),"0"==t.userInfo.type?i("v-uni-view",{staticClass:"tui-btn-box"},[i("tui-button",{attrs:{disabledGray:!0,disabled:t.disabled,shadow:!0,shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.certificate.apply(void 0,arguments)}}},[t._v("申请认证")])],1):"4"==t.userInfo.type?i("v-uni-view",{staticClass:"tui-btn-box"},[i("tui-button",{attrs:{disabledGray:!0,disabled:t.disabled,shadow:!0,shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.certificate.apply(void 0,arguments)}}},[t._v("提交审核")])],1):t._e(),i("v-uni-view",{staticClass:"tui-cell-text"},[t._v("申请认证代表同意"),i("v-uni-view",{staticClass:"tui-color-primary",attrs:{"hover-class":"tui-opcity","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.protocol.apply(void 0,arguments)}}},[t._v("PaperDaily用户服务协议、隐私政策")])],1)],1)],1)},o=[]},"693c":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=(i("ccee"),i("26cb")),c=n(i("4464")),l=n(i("7f79")),s=n(i("5c6b")),r={components:{uploadLicense:c.default,uploadID:l.default},data:function(){return{userID:"",name:"",ID_num:"",phone:"",paper:"",patent:"",organization:"",field:"",scholar_ID:"",scholar_profile:"",selectedItems:[],checkboxItems:[{name:"信息技术",value:"0",checked:!1},{name:"装备制造",value:"1",checked:!1},{name:"新材料",value:"2",checked:!1},{name:"新能源",value:"3",checked:!1},{name:"节能环保",value:"4",checked:!1},{name:"生物医药",value:"5",checked:!1},{name:"科学创意",value:"6",checked:!1},{name:"检测检验",value:"7",checked:!1},{name:"其他",value:"8",checked:!1}]}},computed:(0,a.default)({disabled:function(){var t=!0;return this.userID&&this.name&&(this.paper||this.patent)&&this.organization&&this.ID_num&&this.scholar_ID&&this.scholar_profile&&(t=!1),t}},(0,o.mapState)(["userInfo"])),onLoad:function(e){this.userID=this.userInfo.id,this.userInfo.expert_name&&(this.name=this.userInfo.expert_name,this.organization=this.userInfo.expert_organization,this.field=this.userInfo.expert_field,this.scholar_profile=this.userInfo.expert_scholarprofile,this.phone=this.userInfo.expert_phone),t("log","onLoad in certification "+this.userID," at pages/certificate-expert/certificate-expert.vue:220")},methods:{back:function(){uni.navigateBack()},inputName:function(t){this.name=t.detail.value},inputPaper:function(t){this.paper=t.detail.value},inputPatent:function(t){this.patent=t.detail.value},inputOrganization:function(t){this.organization=t.detail.value},inputField:function(t){this.field=t.detail.value},inputID_num:function(t){this.ID_num=t.detail.value},inputScholar_ID:function(t){this.scholar_ID=t.detail.value},inputScholar_Profile:function(t){this.scholar_profile=t.detail.value},inputPhone:function(t){this.phone=t.detail.value},clearInput:function(t){1===t?this.name="":2===t?this.ID_num="":3===t?this.phone="":4===t?this.paper="":5===t?this.patent="":6===t?this.organization="":7===t&&(this.scholar_profile="")},protocol:function(){this.tui.href("/pages/doc/protocol/protocol")},getIDPath:function(e){e.length>0?this.scholar_ID=e[0]:this.scholar_ID="",t("log","IDPath!"," at pages/certificate-expert/certificate-expert.vue:280"),t("log",this.scholar_ID," at pages/certificate-expert/certificate-expert.vue:281")},getSelectedInfo:function(e){t("log",e.detail.value," at pages/certificate-expert/certificate-expert.vue:284"),this.selectedItems=e.detail.value},checkID:function(){return 18!==this.scholar_ID.length},getFieldString:function(){for(var e=[],i=0;i<this.checkboxItems.length;i++)e.push("0");t("log","string is "+e," at pages/certificate-expert/certificate-expert.vue:299");for(var n=0;n<this.selectedItems.length;n++)t("log","seledted "+this.selectedItems[n]," at pages/certificate-expert/certificate-expert.vue:301"),e[this.selectedItems[n]]="1";t("log","string is "+e," at pages/certificate-expert/certificate-expert.vue:304");for(var a="",o=0;o<e.length;o++)a+=e[o];this.field=a},checkFiledString:function(){return 0===this.selectedItems.length},validate:function(){var t=[{name:"phone",rule:["isMobile"],msg:["请输入正确手机号"]},{name:"scholar_ID",rule:["required"],msg:["请输入身份证号"],validator:[{msg:"请输入正确身份号码",method:this.checkID}]},{name:"field",rule:["required"],msg:["请至少选择一个领域"],validator:[{msg:"请至少选择一个领域",method:this.checkFieldString}]}],e={userID:this.userID,name:this.name,paper:this.paper,patent:this.patent,organization:this.organization,field:this.field,ID_num:this.ID_num,scholar_ID:this.scholar_ID,scholar_profile:this.scholar_profile,phone:this.phone},i=s.default.validation(e,t);return i},certificate:function(){var e=this;t("log","认证开始！"," at pages/certificate-expert/certificate-expert.vue:358"),this.getFieldString();var i=this.validate();i?uni.showToast({title:i,icon:"none"}):uni.uploadFile({url:"http://122.9.14.73:8000/api/expert/setinfo",files:[{uri:this.scholar_ID,name:"scholar_ID"}],formData:{id:this.userID,name:this.name,ID_num:this.ID_num,phone:this.phone,paper:this.paper,patent:this.patent,organization:this.organization,field:this.field,scholar_profile:this.scholar_profile},success:function(i){t("log",i.data," at pages/certificate-expert/certificate-expert.vue:386"),t("log","认证申请已发送"," at pages/certificate-expert/certificate-expert.vue:387"),e.back()},fail:function(e){t("log",e," at pages/certificate-expert/certificate-expert.vue:391")}})}}};e.default=r}).call(this,i("0de9")["log"])},"887f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * scss预处理 内置的常用样式变量\n * 后期项目会考虑使用scss\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container .tui-page-title[data-v-60cd587c]{width:100%;font-size:%?48?%;font-weight:700;color:#333;line-height:%?42?%;padding:%?110?% %?40?% %?40?% %?40?%;box-sizing:border-box}.container .tui-header[data-v-60cd587c]{width:100%;padding:%?40?%;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box}.container .tui-form[data-v-60cd587c]{padding-top:%?50?%}.container .tui-form .thorui-input-title[data-v-60cd587c]{padding-right:%?10?%;font-size:%?35?%}.container .tui-form .tui-view-input[data-v-60cd587c]{width:100%;box-sizing:border-box;padding:0 %?40?%}.container .tui-form .tui-view-input .tui-cell-input[data-v-60cd587c]{width:100%;display:flex;align-items:center;padding-top:%?48?%;padding-bottom:%?16?%}.container .tui-form .tui-view-input .tui-cell-input uni-input[data-v-60cd587c]{flex:1;padding-left:%?20?%}.container .tui-form .tui-view-input .tui-cell-input .tui-icon-close[data-v-60cd587c]{margin-left:auto}.container .tui-form .tui-view-input .tui-cell-input .tui-btn-send[data-v-60cd587c]{width:%?156?%;text-align:right;flex-shrink:0;font-size:%?28?%;color:#5677fc}.container .tui-form .tui-view-input .tui-cell-input .tui-gray[data-v-60cd587c]{color:#bfbfbf}.container .tui-form .tui-cell-text[data-v-60cd587c]{width:100%;padding:%?40?% %?30?%;box-sizing:border-box;font-size:%?24?%;color:#999;display:flex;align-items:center}.container .tui-form .tui-cell-text .tui-color-primary[data-v-60cd587c]{color:#5677fc;padding-left:10px}.container .tui-form .tui-btn-box[data-v-60cd587c]{width:100%;padding:0 %?30?%;box-sizing:border-box;margin-top:%?80?%}',""]),t.exports=e},b09e:function(t,e,i){"use strict";var n=i("d970"),a=i.n(n);a.a},b56d:function(t,e,i){"use strict";i.r(e);var n=i("693c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d970:function(t,e,i){var n=i("887f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3e3d23f3",n,!0,{sourceMap:!1,shadowMode:!1})},f1bb:function(t,e,i){"use strict";i.r(e);var n=i("4e1d"),a=i("b56d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b09e");var c,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"60cd587c",null,!1,n["a"],c);e["default"]=s.exports}}]);