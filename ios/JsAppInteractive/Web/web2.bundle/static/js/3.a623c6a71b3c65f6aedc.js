webpackJsonp([3],{KIwU:function(e,n,t){"use strict";var i=t("35q6"),r={props:{comments:{type:Array,default:function(){return["1","2","3","2"]}},commentReplys:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goToReplyDetail:function(e){console.log("sssss"),Object(i.a)("goToReplyDetail")},resolveQuestionFollowers:function(e){return e.answers+" 赞同 · "+e.followers+" 评论"}}},a={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",e._l(e.comments,function(n){return i("div",{staticClass:"event_comment_wrap"},[i("img",{staticClass:"avatar",attrs:{src:t("4pSz")}}),e._v(" "),i("div",{staticClass:"info"},[e._m(0,!0),e._v(" "),i("div",{staticClass:"comment three_line_text"},[e._v("做一个会生活的人,做一个会生活的人,做一个会生活的人,做一个会生活的人,做一个会生活的人,做一个会生活的人,做一个会生活的人,做一个会生活的人,做一个会生活的人")]),e._v(" "),e._m(1,!0),e._v(" "),e.commentReplys.length>0?i("div",{staticClass:"other_reply_wrap",on:{click:function(t){e.goToReplyDetail(n)}}},[e._l(e.commentReplys,function(n){return i("div",{staticClass:"other_reply"},[i("label",{staticClass:"other_name"},[e._v("梦幻的悟空bbbbb")]),e._v(" "),i("label",{staticClass:"other_content content_style"},[e._v("：有的人活着，但是他已经死了,有的人死了，但是他还活着")])])}),e._v(" "),i("div",{staticClass:"more_other_replay"},[e._v("查看全部25条评论>>")])],2):e._e()])])}),0)},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"user"},[n("div",{staticClass:"use_name",staticStyle:{"margin-top":"0.17rem"}},[n("div",[this._v("用户名称几个字")]),this._v(" "),n("div",{staticStyle:{"font-size":"0.20rem","margin-top":"0.08rem"}},[this._v("2小时前")])]),this._v(" "),n("label",{staticClass:"user_follow"},[this._v("已关注")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"total-reply-zan"},[n("img",{staticClass:"zan_comment",attrs:{src:t("+MiT")}}),n("label",[this._v(" 999 ")]),this._v(" "),n("img",{staticClass:"zan_comment",attrs:{src:t("5TSI")}}),n("label",[this._v(" 999")])])}]};var o=t("C7Lr")(r,a,!1,function(e){t("u6zz")},"data-v-49c2a314",null);n.a=o.exports},KOEt:function(e,n,t){(e.exports=t("UTlt")(!0)).push([e.i,"\n.reply_detail[data-v-1cc0e286] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  rifht: 0;\n  bottom: 0;\n  padding: 0 0.19rem;\n  color: #8e8e93;\n  font-size: 0.25rem;\n  background-color: #fff;\n}\n.reply_detail .reply[data-v-1cc0e286] {\n  position: relative;\n  padding: 0.34rem 0.42rem 0 0.34rem;\n}\n.reply_detail .reply .reply_info[data-v-1cc0e286] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.reply_detail .reply .reply_info .left[data-v-1cc0e286] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.reply_detail .reply .reply_info .left img[data-v-1cc0e286] {\n  width: 0.72rem;\n  height: 0.72rem;\n}\n.reply_detail .reply .reply_content[data-v-1cc0e286] {\n  padding-left: 0.92rem;\n  padding-right: 0.79rem;\n  padding-top: 0.23rem;\n}\n.reply_detail .reply .reply_spec[data-v-1cc0e286] {\n  margin-top: 0.54rem;\n}","",{version:3,sources:["D:/Project/igw-app/src/components/ReplyDetail/ReplyDetail.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,mCAAmC;CACpC;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;EACvC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB",file:"ReplyDetail.vue",sourcesContent:["\n.reply_detail[data-v-1cc0e286] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  rifht: 0;\n  bottom: 0;\n  padding: 0 0.19rem;\n  color: #8e8e93;\n  font-size: 0.25rem;\n  background-color: #fff;\n}\n.reply_detail .reply[data-v-1cc0e286] {\n  position: relative;\n  padding: 0.34rem 0.42rem 0 0.34rem;\n}\n.reply_detail .reply .reply_info[data-v-1cc0e286] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.reply_detail .reply .reply_info .left[data-v-1cc0e286] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.reply_detail .reply .reply_info .left img[data-v-1cc0e286] {\n  width: 0.72rem;\n  height: 0.72rem;\n}\n.reply_detail .reply .reply_content[data-v-1cc0e286] {\n  padding-left: 0.92rem;\n  padding-right: 0.79rem;\n  padding-top: 0.23rem;\n}\n.reply_detail .reply .reply_spec[data-v-1cc0e286] {\n  margin-top: 0.54rem;\n}"],sourceRoot:""}])},TzzF:function(e,n,t){(e.exports=t("UTlt")(!0)).push([e.i,"\n.event_comment_wrap[data-v-49c2a314] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  margin-bottom: 0.18rem;\n  padding: 0.17rem 0.2rem 0.2rem 0.14rem;\n  border: 1px solid #e1e1e1;\n  border-radius: 3px;\n  box-sizing: content-box;\n}\n.event_comment_wrap .info[data-v-49c2a314] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  width: calc(100% - 0.72rem - 0.34rem - 0.24rem);\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  margin-left: 0.24rem;\n}\n.event_comment_wrap .info .user[data-v-49c2a314] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.event_comment_wrap .info .comment[data-v-49c2a314] {\n  margin-top: 0.23rem;\n}\n.event_comment_wrap .info .total-reply-zan[data-v-49c2a314] {\n  margin-top: 0.25rem;\n  font-size: 0.2rem;\n}\n.event_comment_wrap .info .other_reply_wrap[data-v-49c2a314] {\n  margin-top: 0.24rem;\n  padding: 0.22rem 0.23rem 0.19rem 0.22rem;\n  border-radius: 5px;\n  background-color: #fcf6f6;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.event_comment_wrap .info .other_reply_wrap .other_reply[data-v-49c2a314] {\n  margin-bottom: 0.18rem;\n}\n.event_comment_wrap .info .other_reply_wrap .other_reply .other_name[data-v-49c2a314] {\n  color: #ffa535;\n}\n.event_comment_wrap .info .other_reply_wrap .other_reply .other_content[data-v-49c2a314] {\n  color: #000;\n}\n.event_comment_wrap .info .other_reply_wrap .more_other_replay[data-v-49c2a314] {\n  -webkit-align-self: flex-end;\n          align-self: flex-end;\n}","",{version:3,sources:["D:/Project/igw-app/src/pages/event-comment.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,uBAAuB;EACvB,uCAAuC;EACvC,0BAA0B;EAC1B,mBAAmB;EACnB,wBAAwB;CACzB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,gDAAgD;EAChD,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,qBAAqB;CACtB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;EACvC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,yCAAyC;EACzC,mBAAmB;EACnB,0BAA0B;EAC1B,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,uBAAuB;CACxB;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,6BAA6B;UACrB,qBAAqB;CAC9B",file:"event-comment.vue",sourcesContent:["\n.event_comment_wrap[data-v-49c2a314] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  margin-bottom: 0.18rem;\n  padding: 0.17rem 0.2rem 0.2rem 0.14rem;\n  border: 1px solid #e1e1e1;\n  border-radius: 3px;\n  box-sizing: content-box;\n}\n.event_comment_wrap .info[data-v-49c2a314] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  width: calc(100% - 0.72rem - 0.34rem - 0.24rem);\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  margin-left: 0.24rem;\n}\n.event_comment_wrap .info .user[data-v-49c2a314] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.event_comment_wrap .info .comment[data-v-49c2a314] {\n  margin-top: 0.23rem;\n}\n.event_comment_wrap .info .total-reply-zan[data-v-49c2a314] {\n  margin-top: 0.25rem;\n  font-size: 0.2rem;\n}\n.event_comment_wrap .info .other_reply_wrap[data-v-49c2a314] {\n  margin-top: 0.24rem;\n  padding: 0.22rem 0.23rem 0.19rem 0.22rem;\n  border-radius: 5px;\n  background-color: #fcf6f6;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.event_comment_wrap .info .other_reply_wrap .other_reply[data-v-49c2a314] {\n  margin-bottom: 0.18rem;\n}\n.event_comment_wrap .info .other_reply_wrap .other_reply .other_name[data-v-49c2a314] {\n  color: #ffa535;\n}\n.event_comment_wrap .info .other_reply_wrap .other_reply .other_content[data-v-49c2a314] {\n  color: #000;\n}\n.event_comment_wrap .info .other_reply_wrap .more_other_replay[data-v-49c2a314] {\n  -webkit-align-self: flex-end;\n          align-self: flex-end;\n}"],sourceRoot:""}])},"u/YN":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("KIwU"),r=t("hhm8"),a={data:function(){return{isFollow:!1,tabLabels:[{label:"详情"},{label:"游戏"},{label:"动态"}],replyScrollOptions:Object(r.b)(!1,!0),comment:["1"],replys:["1","2","3","4"],abstract:"网易2001年正式成立在线游戏事业部，经过近20年的快速发展，网易的品牌价值已超过13亿美元，并跻身全球七大游戏公司之一。"}},methods:{goBack:function(){this.$router.back()},replyPullingUp:function(){var e=this;setTimeout(function(){e.replys=e.replys.concat(["1","2"])},1500)}},computed:{},components:{EventComment:i.a},mounted:function(){},destroyed:function(){console.log(" reply_detail destroyed")}},o={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"reply_detail"},[i("cube-scroll",{attrs:{data:e.replys,options:e.replyScrollOptions},on:{"pulling-up":function(n){e.replyPullingUp()}}},[i("event-comment",{attrs:{comments:e.comment}}),e._v(" "),i("div",[e._v("相关回复 共23条")]),e._v(" "),e._l(e.replys,function(n){return i("div",{staticClass:"reply"},[i("div",{staticClass:"reply_info"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:t("4pSz")}}),e._v(" "),i("div",{staticClass:"user_info",staticStyle:{"margin-top":"0.17rem","margin-left":"0.24rem"}},[i("div",[e._v("包子大叔")]),e._v(" "),i("div",{staticStyle:{"font-size":"0.20rem","margin-top":"0.08rem"}},[e._v("1天前")])])]),e._v(" "),i("div",{staticStyle:{"font-size":"0.2rem"}},[i("img",{staticClass:"zan_comment",attrs:{src:t("5TSI")}}),i("label",[e._v(" 999")])])]),e._v(" "),i("div",{staticClass:"content_style reply_content"},[e._v("Dota2 音乐会有参加的吗？一起的下方留言！地点：北京凯迪拉克中心网易2001年正式成立在线游戏事业部，经过近20年的快速发展，网易的品牌价值已超过13亿美元，并跻身全球七大游戏公司之一")]),e._v(" "),i("div",{staticClass:"reply_spec bottom-line"})])})],2)],1)},staticRenderFns:[]};var l=t("C7Lr")(a,o,!1,function(e){t("zOF+")},"data-v-1cc0e286",null);n.default=l.exports},u6zz:function(e,n,t){var i=t("TzzF");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("FIqI")("6a343121",i,!0,{})},"zOF+":function(e,n,t){var i=t("KOEt");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("FIqI")("657594c9",i,!0,{})}});
//# sourceMappingURL=3.a623c6a71b3c65f6aedc.js.map