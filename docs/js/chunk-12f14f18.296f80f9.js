(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12f14f18"],{1398:function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"passwordchange"},[a("form",{staticClass:"passwordchange__wrapper",attrs:{action:"javascript:void(0);"},on:{submit:s.changePassword}},[a("header",[a("router-link",{staticClass:"passwordchange__back",attrs:{to:"/"}},[a("i",{staticClass:"mdi mdi-chevron-left"})]),a("h1",{staticClass:"passwordchange__title",staticStyle:{flex:"1"}},[s._v("circles.")])],1),a("div",{staticStyle:{flex:"1"}}),s._m(0),s.isEmailAuth?s._e():a("div",{staticClass:"passwordchange__rowwrapper"},[a("div",{staticClass:"passwordchange__inputwrapper"},[a("h3",[s._v("이메일")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],attrs:{minlength:"4",autocomplete:"email",type:"email",name:"email",placeholder:"이메일을 입력하세요.",required:"",disabled:s.isEmailAuth},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}})]),a("button",{staticClass:"passwordchange__emailSend",attrs:{type:"button"},on:{click:s.sendEmail}},[s._v("확인")])]),s.isEmailAuth?a("div",{staticClass:"passwordchange__inputwrapper"},[a("h3",[s._v("비밀번호")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{required:"",autocomplete:"new-password",minlength:"4",maxlength:"24",type:"password",name:"password",placeholder:"비밀번호를 입력하세요."},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]):s._e(),s.isEmailAuth?a("div",{staticClass:"passwordchange__inputwrapper"},[a("h3",[s._v("비밀번호 확인")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.checkPassword,expression:"checkPassword"}],staticClass:"checkPassword",class:{"checkPassword-clear":s.password&&s.checkPassword==s.password,"checkPassword-declear":s.checkPassword&&s.checkPassword!=s.password},attrs:{required:"",autocomplete:"new-password",minlength:"4",maxlength:"24",type:"password",name:"password",placeholder:"비밀번호를 다시 입력하세요."},domProps:{value:s.checkPassword},on:{input:function(e){e.target.composing||(s.checkPassword=e.target.value)}}})]):s._e(),s.isEmailAuth?a("button",{staticClass:"passwordchange__button",attrs:{type:"submit"}},[s._v("승인")]):a("div",{staticStyle:{flex:"2"}})])])},i=[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("h2",{staticClass:"passwordchange__text"},[s._v(" 비밀번호 재설정 "),a("span",[s._v("Password Reset")])])}],o=(a("a481"),a("2b0e")),r=o["a"].extend({name:"PasswordChange",data:function(){return{email:"",code:"",password:"",checkPassword:""}},created:function(){this.email=this.$route.query.email||"",this.code=this.$route.query.token||""},methods:{sendEmail:function(){var s=this;this.$store.commit("pushLoading",{name:"SEND_CHANGEPASSWORD_EMAIL",message:"이메일 보내는 중"}),this.$store.dispatch("SEND_CHANGEPASSWORD_EMAIL",{email:this.email}).then((function(e){s.$store.commit("clearLoading","SEND_CHANGEPASSWORD_EMAIL"),s.$store.commit("showNotice","".concat(s.email," 메일함을 확인해주세요.")),s.$router.push("/")})).catch((function(s){return console.log(s)}))},changePassword:function(){var s=this;this.isEmailAuth&&(this.password!=this.checkPassword||this.$store.dispatch("CHANGE_PASSWORD",{email:this.email,code:this.code,newPassword:this.password}).then((function(e){s.$store.commit("showNotice","비밀번호가 재설정되었습니다."),s.$router.replace({name:"login"})})))}},computed:{isEmailAuth:function(){return this.$route.query.token&&this.$route.query.email}}}),c=r,n=(a("61ca"),a("2877")),l=Object(n["a"])(c,t,i,!1,null,null,null);e["default"]=l.exports},5949:function(s,e,a){},"61ca":function(s,e,a){"use strict";var t=a("5949"),i=a.n(t);i.a}}]);
//# sourceMappingURL=chunk-12f14f18.296f80f9.js.map