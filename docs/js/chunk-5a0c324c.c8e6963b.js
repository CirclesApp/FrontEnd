(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a0c324c"],{9806:function(e,t,i){},c154:function(e,t,i){"use strict";var n=i("9806"),s=i.n(n);s.a},efe9:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interview"},[i("div",{staticClass:"interview__interviewers"},[i("h2",{staticClass:"intreview__title"},[e._v("지원자")]),i("draggable",{staticClass:"interview__draggable",attrs:{list:e.applicants,group:"interviewers"}},e._l(e.applicants,(function(t){return i("div",{key:t._id,staticClass:"interview__draggable__item"},[i("div",{staticClass:"interview__draggable__item"},[i("p",[e._v(e._s(t.name))]),i("p",[e._v(e._s(t.number))])])])})),0)],1),i("div",{staticClass:"interview__applicant"},[i("h2",{staticClass:"intreview__title"},[e._v("면접자")]),i("draggable",{staticClass:"interview__draggable",attrs:{list:e.interviewers,group:"interviewers"},on:{change:e.update}},e._l(e.interviewers,(function(t,n){return i("div",{key:t._id,staticClass:"interview__draggable__item"},[i("div",{staticClass:"interview__draggable__item__content"},[i("p",[e._v(e._s(n+1)+" | "+e._s(t.name))]),i("p",[e._v(e._s(t.number))])]),i("button",{staticClass:"interview__draggable__item__action",on:{click:function(t){return e.interviewerClose(n)}}},[e._v("완료하기")])])})),0)],1),i("div",{staticClass:"interview__action"},[e.isStart?i("button",{staticClass:"close",on:{click:e.close}},[e._v("면접 종료")]):i("button",{staticClass:"start",on:{click:e.start}},[e._v("면접 시작")])])])},s=[],r=(i("7f7f"),i("2b0e")),a=i("f87c"),c=i("8055"),l=i.n(c),o=i("310e"),v=i.n(o),_=r["a"].use(a["a"],l()("https://circlesapp.kr/")).extend({components:{draggable:v.a},sockets:{interview_getInterviewByClubName:function(e){this.$store.commit("clearLoading","interview_getInterviewByClubName"),this.isStart=e.result,e.result&&(this.interviewers=e.data.interviewers)},interview_startInterview:function(e){this.$store.commit("clearLoading","interview_startInterview"),this.isStart=e.result},interview_closeInterview:function(e){this.$store.commit("clearLoading","interview_closeInterview"),this.isStart=!e.result},interview_updateInterviewers:function(e){this.interviewers=e.data.interviewers}},data:function(){return{applicants:[],interviewers:[],isStart:!1}},created:function(){var e=this;this.$store.commit("pushLoading",{name:"interview_getInterviewByClubName",message:"면접 불러오는 중"}),this.$socket.client.emit("interview_getInterviewByClubName",{clubname:this.getClub.name}),this.$store.commit("pushLoading",{name:"GET_CLUB_APPLICANT",message:"동아리 지원서 불러오는 중"}),this.$store.dispatch("GET_CLUB_APPLICANT").then((function(t){var i=e.interviewers.map((function(e){return e._id}));e.$store.commit("clearLoading","GET_CLUB_APPLICANT"),e.applicants=t.map((function(e){return{name:e.name,number:e.number,_id:e._id}})).filter((function(e){return-1==i.indexOf(e._id)}))})).catch((function(e){}))},methods:{start:function(){this.$store.commit("pushLoading",{name:"interview_startInterview",message:"면접 시작하는 중"}),this.$socket.client.emit("interview_startInterview",{clubname:this.getClub.name,interviewers:this.interviewers})},close:function(){this.$store.commit("pushLoading",{name:"interview_closeInterview",message:"면접 끝내는 중"}),this.$socket.client.emit("interview_closeInterview",{clubname:this.getClub.name})},update:function(){this.isStart&&this.$socket.client.emit("interview_updateInterviewers",{clubname:this.getClub.name,interviewers:this.interviewers})},interviewerClose:function(e){this.applicants.push(this.interviewers[e]),this.interviewers.splice(e,1),this.update()}},computed:{getClub:function(){return this.$store.state.club}}}),u=_,w=(i("c154"),i("2877")),m=Object(w["a"])(u,n,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-5a0c324c.c8e6963b.js.map