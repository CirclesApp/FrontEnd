(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fedeada"],{a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("form",{staticClass:"login__wrapper",attrs:{action:"javascript:void(0);"},on:{submit:t.login}},[a("header",[a("router-link",{staticClass:"login__back",attrs:{to:"/"}},[a("i",{staticClass:"mdi mdi-chevron-left"})]),a("h1",{staticClass:"login__title",staticStyle:{flex:"1"}},[t._v("circles.")])],1),t._m(0),a("div",{staticClass:"login__inputwrapper"},[a("h3",[t._v("이메일")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{minlength:"4",autocomplete:"email",type:"email",name:"email",placeholder:"이메일을 입력하세요.",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"login__inputwrapper"},[a("h3",[t._v("비밀번호")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{required:"",autocomplete:"new-password",minlength:"4",maxlength:"24",type:"password",name:"password",placeholder:"비밀번호를 입력하세요."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.errorAlert?a("p",{staticClass:"login__alert"},[a("i",{staticClass:"mdi mdi-alert-circle"}),t._v(" "+t._s(t.errorAlert)+" ")]):t._e(),a("button",{staticClass:"login__button",attrs:{type:"submit"}},[t._v("로그인")]),a("router-link",{staticClass:"login__option",attrs:{to:"/register"}},[t._v("계정 만들기 >")]),a("router-link",{staticClass:"login__option",staticStyle:{"margin-bottom":"10%"},attrs:{to:"/passwordchange"}},[t._v("비밀번호 재설정 >")])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"login__text"},[t._v(" 로그인 "),a("span",[t._v("Login")])])}],o=a("2b0e"),r=o["a"].extend({name:"Login",data:function(){return{email:"",password:"",errorAlert:""}},methods:{login:function(){var t=this;this.$store.commit("pushLoading",{name:"LOGIN",message:"로그인 시도 중"}),this.$store.dispatch("LOGIN",{email:this.email,password:this.password}).then((function(e){t.$store.dispatch("GET_USER_PROFILE",{token:e,pushSubscription:localStorage.getItem("circles.pushSubscription")}).then((function(a){localStorage.setItem("circles.loginToken",e),t.$store.commit("clearLoading","LOGIN"),t.$router.push("/")})).catch((function(e){t.$store.commit("clearLoading","LOGIN"),t.errorAlert=e.response.data.message||"서버 에러"}))})).catch((function(e){t.$store.commit("clearLoading","LOGIN"),t.errorAlert=e.response.data.message||"서버 에러"}))}}}),n=r,l=(a("d6db"),a("2877")),c=Object(l["a"])(n,s,i,!1,null,null,null);e["default"]=c.exports},d6db:function(t,e,a){"use strict";var s=a("e67a"),i=a.n(s);i.a},e67a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6fedeada.d9478d29.js.map