(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{290:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(92);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,s=i}finally{try{n||null==u.return||u.return()}finally{if(r)throw s}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},291:function(e,t,a){},292:function(e,t,a){e.exports={profile_img:"ProfileInfo_profile_img__1rLxJ",description:"ProfileInfo_description__2zlON"}},293:function(e,t,a){e.exports={posts_area:"MyPosts_posts_area__6rPCS",posts:"MyPosts_posts__2ni6c"}},294:function(e,t,a){e.exports={item:"Post_item__3cxop"}},302:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(49),s=a(52),o=a(51),u=a(0),i=a.n(u),l=a(291),c=a.n(l),p=a(84),m=a(292),d=a.n(m),f=a(290),b=function(e){var t=Object(u.useState)(!1),a=Object(f.a)(t,2),n=a[0],r=a[1],s=Object(u.useState)(e.status),o=Object(f.a)(s,2),l=o[0],c=o[1];return Object(u.useEffect)((function(){c(e.status)}),[e.status]),i.a.createElement("div",null,n?i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){r(!1),e.updateUserStatus(l)},onChange:function(e){c(e.currentTarget.value)},value:l})):i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"status")))},v=function(e){return e.profile?i.a.createElement("div",null,i.a.createElement("div",{className:d.a.description},i.a.createElement("img",{src:e.profile.photos.large}),i.a.createElement("div",null,e.profile.aboutMe),i.a.createElement("div",null,e.profile.lookingForAJobDescription)),i.a.createElement("div",null,i.a.createElement(b,{status:e.status,updateUserStatus:e.updateUserStatus}))):i.a.createElement(p.a,null)},E=a(91),h=a(126),y=a(127),g=a(293),_=a.n(g),j=a(294),O=a.n(j),P=function(e){return i.a.createElement("div",{className:O.a.item},i.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig"}),i.a.createElement("div",null,i.a.createElement("span",null,e.message),i.a.createElement("div",null,"like: ",e.likesCount)))},S=a(62),U=a(90),k=Object(U.a)("textarea"),x=Object(S.a)(10),C=Object(y.a)({form:"addPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(h.a,{component:k,name:"addPost",placeholder:"Post message",validate:[S.b,x]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),I=i.a.memo((function(e){console.log("render yo");var t=e.posts.map((function(e){return i.a.createElement(P,{message:e.message,likesCount:e.likesCount,key:e.id})}));return i.a.createElement("div",{className:_.a.posts_area},i.a.createElement("h3",null,"My Posts"),i.a.createElement("div",null,i.a.createElement(C,{onSubmit:function(t){e.addPost(t.addPost)}}),i.a.createElement("div",{className:_.a.posts},t)))})),A=a(21),N=Object(A.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:E.a})(I),w=function(e){return i.a.createElement("div",{className:c.a.content},i.a.createElement(v,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),i.a.createElement(N,null))},M=a(9),J=a(8),z=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return i.a.createElement(w,this.props)}}]),a}(i.a.Component);t.default=Object(J.d)(M.f,Object(A.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:E.c,getUserStatus:E.d,updateUserStatus:E.e}))(z)}}]);
//# sourceMappingURL=3.22e87f2a.chunk.js.map