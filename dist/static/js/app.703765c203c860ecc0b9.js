webpackJsonp([1,0],[function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var n=o(6),u=s(n),r=o(63),p=s(r),i=o(15),a=s(i),d=o(52),f=s(d);u["default"].use(p["default"]),u["default"].config.devtools=!0;var l=new p["default"]({saveScrollPosition:!0});(0,a["default"])(l),l.start(u["default"].extend(f["default"]),"app"),window.router=l},,function(t,e,o){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deletePost=e.updatePost=e.createPost=e.getPost=e.getPosts=void 0;var u=o(12),r=n(u),p=o(3),i=s(p);e.getPosts=function(t){var e=t.dispatch;r["default"].getPosts().then(function(t){e(i.GET_POSTS_SUCCESS,{posts:t.data})},function(t){e(i.GET_POSTS_FAIL)})},e.getPost=function(t,e){var o=t.dispatch;r["default"].getPost(e).then(function(t){o(i.GET_POST_SUCCESS,{post:t.data})},function(t){o(i.GET_POST_FAIL)})},e.createPost=function(t,e){var o=t.dispatch;r["default"].createPost(e).then(function(t){o(i.CREATE_POST_SUCCESS)},function(t){o(i.CREATE_POST_FAIL)})},e.updatePost=function(t,e,o){var s=t.dispatch;r["default"].createPost(e,o).then(function(t){s(i.UPDATE_POST_SUCCESS,{post:t.data})},function(t){s(i.UPDATE_POST_FAIL)})},e.deletePost=function(t,e){var o=t.dispatch;r["default"].deletePost(e).then(function(t){o(i.DELETE_POST_SUCCESS)},function(t){o(i.DELETE_POST_FAIL)})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_POSTS_SUCCESS="GET_POSTS_SUCCESS",e.GET_POSTS_FAIL="GET_POSTS_FAIL",e.GET_POST_SUCCESS="GET_POST_SUCCESS",e.GET_POST_FAIL="GET_POST_FAIL",e.CREATE_POST_SUCCESS="CREATE_POST_SUCCESS",e.CREATE_POST_FAIL="CREATE_POST_FAIL",e.UPDATE_POST_SUCCESS="UPDATE_POST_SUCCESS",e.UPDATE_POST_FAIL="UPDATE_POST_FAIL",e.DELETE_POST_SUCCESS="DELETE_POST_SUCCESS",e.DELETE_POST_FAIL="DELETE_POST_FAIL"},,,,,,,,function(t,e,o){var s,n;s=o(20),n=o(44),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(13);e["default"]={getPosts:function(){return s.PostsResource.get()},getPost:function(t){return s.PostsResource.get({postid:t})},createPost:function(t){return s.PostsResource.save()},updatePost:function(t,e){return s.PostsResource.update()},deletePost:function(t){return s.PostsResource["delete"]({postid:t})}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.PostsResource=void 0;var n=o(6),u=s(n),r=o(62),p=s(r),i=o(14);u["default"].use(p["default"]),u["default"].http.options.crossOrigin=!0,u["default"].http.options.xhr={withCredentials:!0};e.PostsResource=u["default"].resource(i.API_ROOT+"posts{/postid}")},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_ROOT="http://jsonplaceholder.typicode.com/"},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){t.map({"/":{name:"homepage",component:u["default"]},"/page":{name:"normalpage",component:p["default"]},"/posts":{name:"postspage",component:a["default"],subRoutes:{"/":{name:"postlist",component:f["default"]},"/new":{name:"postnew",component:x["default"]},"/:postid":{name:"postdetail",component:P["default"],subRoutes:{"/":{name:"postshow",component:c["default"]},"/edit":{name:"postedit",component:T["default"]}}}}}})};var n=o(53),u=s(n),r=o(54),p=s(r),i=o(55),a=s(i),d=o(58),f=s(d),l=o(56),c=s(l),_=o(60),P=s(_),S=o(59),x=s(S),v=o(57),T=s(v)},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n,u=o(7),r=s(u),p=o(3),i={post:{}},a=(n={},(0,r["default"])(n,p.GET_POST_SUCCESS,function(t,e){console.log(e),t.post=e.post}),(0,r["default"])(n,p.GET_POST_FAIL,function(t,e){}),(0,r["default"])(n,p.CREATE_POST_SUCCESS,function(t,e){window.alert("Create Success!")}),(0,r["default"])(n,p.CREATE_POST_FAIL,function(t,e){window.alert("Create Fail!")}),(0,r["default"])(n,p.UPDATE_POST_SUCCESS,function(t,e){window.alert("Update Success!")}),(0,r["default"])(n,p.UPDATE_POST_FAIL,function(t,e){window.alert("Update Fail!")}),n);e["default"]={state:i,mutations:a}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n,u=o(7),r=s(u),p=o(3),i={posts:[]},a=(n={},(0,r["default"])(n,p.GET_POSTS_SUCCESS,function(t,e){t.posts=e.posts}),(0,r["default"])(n,p.GET_POSTS_FAIL,function(t,e){}),(0,r["default"])(n,p.DELETE_POST_SUCCESS,function(t,e){window.alert("Delete success!")}),(0,r["default"])(n,p.DELETE_POST_FAIL,function(t,e){window.alert("Delete fail!")}),n);e["default"]={state:i,mutations:a}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(6),u=s(n),r=o(64),p=s(r),i=o(17),a=s(i),d=o(16),f=s(d);u["default"].use(p["default"]),e["default"]=new p["default"].Store({modules:{postlist:a["default"],postdetail:f["default"]}})},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(61),u=s(n),r=o(18),p=s(r);e["default"]={store:p["default"],components:{Sidebar:u["default"]}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(27),u=s(n),r=o(2);e["default"]={props:{post:{type:Object,"default":function(){return{title:"",body:""}}},type:{type:String,"default":function(){return"new"}}},vuex:{actions:{createPost:r.createPost,updatePost:r.updatePost}},methods:{update:function(){this.updatePost(this.post.id,JSON.parse((0,u["default"])(this.post)))},create:function(){this.createPost(JSON.parse((0,u["default"])(this.post)))}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={vuex:{getters:{post:function(t){return t.postdetail.post}}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(11),u=s(n);e["default"]={vuex:{getters:{post:function(t){return t.postdetail.post}}},components:{PostForm:u["default"]}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(2);e["default"]={vuex:{getters:{posts:function(t){return t.postlist.posts}},actions:{getPosts:s.getPosts,deletePost:s.deletePost}},route:{activate:function(t){var e=t.next;this.getPosts(),e()}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(11),u=s(n);e["default"]={components:{PostForm:u["default"]}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(2);e["default"]={vuex:{getters:{post:function(t){return t.postdetail.post}},actions:{getPost:s.getPost}},route:{activate:function(t){var e=t.next;this.getPost(this.$route.params.postid),e()}}}},function(t,e){"use strict"},,,,,,,,,,,,,,,function(t,e){t.exports=" <div id=app> <h1>The Vue Boilerplate</h1> <sidebar></sidebar> <router-view></router-view> </div> "},function(t,e){t.exports=" <p> This is the homepage. </p> "},function(t,e){t.exports=" <p> This is the normal page. </p> "},function(t,e){t.exports=" <strong> {{ type | json }} </strong> <form> <input type=text v-model=post.title> <br> <textarea cols=20 rows=20 v-model=post.body></textarea> <br> <div v-if=\"type=='edit'\"> <input type=submit value=Update v-on:click.prevent=update> </div> <div v-else> <input type=submit value=Create v-on:click.prevent=create> </div> </form> "},function(t,e){t.exports=" <h2>Posts</h2> <router-view></router-view> "},function(t,e){t.exports=" <h3>The Post Detail</h3> <table> <tr> <td align=right><b>ID</b></td> <td>{{ post.id }}</td> </tr> <tr> <td align=right><b>UserID</b></td> <td>{{ post.userId }}</td> </tr> <tr> <td align=right><b>Title</b></td> <td>{{ post.title }}</td> </tr> <tr> <td align=right><b>Body</b></td> <td>{{ post.body }}</td> </tr> </table> "},function(t,e){t.exports=" <post-form v-bind:post=post v-bind:type=\"'edit'\"></post-form> "},function(t,e){t.exports=' <h3>The Posts List</h3> <ul> <li v-for="post in posts"> <a v-link="{ name: \'postdetail\', params: { postid: post.id }}">{{ post.title }} </a> <br> <button v-link="{ name: \'postedit\', params: { postid: post.id } }">Edit</button> <button v-on:click.prevent=deletePost(post.id)>Delete</button> </li> </ul> '},function(t,e){t.exports=" <post-form></post-form> "},function(t,e){t.exports=" <h2>Post</h2> <router-view></router-view> "},function(t,e){t.exports=" <nav> <a v-link=\"{ name: 'homepage' }\">Homepage</a> <a v-link=\"{ name: 'normalpage' }\">Page</a> <a v-link=\"{ name: 'postlist' }\">Posts</a> </nav> "},function(t,e,o){var s,n;s=o(19),n=o(41),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;n=o(42),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;n=o(43),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;n=o(45),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;s=o(21),n=o(46),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;s=o(22),n=o(47),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;s=o(23),n=o(48),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;s=o(24),n=o(49),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;s=o(25),n=o(50),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var s,n;s=o(26),n=o(51),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}]);
//# sourceMappingURL=app.703765c203c860ecc0b9.js.map