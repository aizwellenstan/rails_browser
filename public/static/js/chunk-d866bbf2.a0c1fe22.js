(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d866bbf2"],{"8fd7":function(e,s,t){},a8f8:function(e,s,t){"use strict";s["a"]="https://product.nadi3docms.com/api"},a9d7:function(e,s,t){"use strict";var a=t("8fd7"),r=t.n(a);r.a},f93d:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"el-card login-card text-primary fs-xl is-always-shadow"},[t("div",{staticClass:"el-card__header"},[e._v("Add User")]),e._v(" "),e.errorMessage?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n      "+e._s(e.errorMessage)+"\n    ")]):e._e(),e._v(" "),e.successMessage?t("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v("\n      "+e._s(e.successMessage)+"\n    ")]):e._e(),e._v(" "),e.signingUp?e._e():t("form",{on:{submit:function(s){return s.preventDefault(),e.signup(s)}}},[t("div",{staticClass:"form-group"},[t("div",{staticClass:"el-form-item"},[t("label",{staticClass:"el-form-item__label"},[e._v("Username")]),e._v(" "),t("div",{staticClass:"el-form-item__content"},[t("div",{staticClass:"el-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"el-input__inner",attrs:{id:"username",type:"text","aria-describedby":"usernameHelp",placeholder:"Username",required:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}})])])]),e._v(" "),t("h5",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}})]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("Password")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"textbox",attrs:{id:"password",type:"password","aria-describedby":"passwordHelp",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),e._v(" "),t("h5",{staticClass:"form-text text-muted",attrs:{id:"passwordHelp"}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("Confirm Password")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"textbox",attrs:{id:"confirmPassword",type:"password","aria-describedby":"confirmPasswordHelp",placeholder:"ConfirmPassword",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(s){s.target.composing||e.$set(e.user,"confirmPassword",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("Email")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"textbox",attrs:{type:"text","aria-describedby":"emailHelp",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(s){s.target.composing||e.$set(e.user,"email",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("Phone")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],staticClass:"textbox",attrs:{type:"text","aria-describedby":"",placeholder:"Phone",required:""},domProps:{value:e.user.phone},on:{input:function(s){s.target.composing||e.$set(e.user,"phone",s.target.value)}}})]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("Address")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.address,expression:"user.address"}],staticClass:"textbox",attrs:{type:"text","aria-describedby":"",placeholder:"Address",required:""},domProps:{value:e.user.address},on:{input:function(s){s.target.composing||e.$set(e.user,"address",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("Language")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.language,expression:"user.language"}],staticClass:"textbox",attrs:{type:"text","aria-describedby":"",placeholder:"Language",required:""},domProps:{value:e.user.language},on:{input:function(s){s.target.composing||e.$set(e.user,"language",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("CompanyId")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.comanyId,expression:"user.comanyId"}],staticClass:"textbox",attrs:{type:"text","aria-describedby":"",placeholder:"CompanyId",required:""},domProps:{value:e.user.comanyId},on:{input:function(s){s.target.composing||e.$set(e.user,"comanyId",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("ProductId")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.productId,expression:"user.productId"}],staticClass:"textbox",attrs:{type:"text","aria-describedby":"",placeholder:"ProductId",required:""},domProps:{value:e.user.productId},on:{input:function(s){s.target.composing||e.$set(e.user,"productId",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("ProjectId")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.projectId,expression:"user.projectId"}],staticClass:"textbox",attrs:{type:"text","aria-describedby":"",placeholder:"ProjectId",required:""},domProps:{value:e.user.projectId},on:{input:function(s){s.target.composing||e.$set(e.user,"projectId",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("Description")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.description,expression:"user.description"}],staticClass:"textbox",attrs:{type:"text","aria-describedby":"",placeholder:"Description",required:""},domProps:{value:e.user.description},on:{input:function(s){s.target.composing||e.$set(e.user,"description",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{staticClass:"tag"},[e._v("Group")]),e._v(" "),t("form",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.user.group,expression:"user.group"}],on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.$set(e.user,"group",s.target.multiple?t:t[0])}}},[t("option",{attrs:{selected:""}},[e._v("User")]),e._v(" "),t("option",[e._v("Manager")])])])])]),e._v(" "),e._m(0)])])])},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticStyle:{"padding-top":"21px"}},[t("button",{staticClass:"btn-cyan",attrs:{type:"submit"}},[e._v("Submit")])])}],o=t("a8f8"),i=o["a"]+"/signup",n={data:function(){return{signingUp:!1,errorMessage:"",user:{username:"",password:"",confirmPassword:"",companyId:"",productId:"",projectId:"",description:"",group:"",language:"",address:"",phone:"",email:""},isChecked:!0}},watch:{user:{handler:function(){this.errorMessage=""},deep:!0}},methods:{signup:function(){var e=this;this.errorMessage="",this.successMessage="",this.signingUp=!0,fetch(i,{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(this.user)}).then((function(e){return e.json()})).then((function(s){console.log(s),e.successMessage=s.message})).then((function(s){setTimeout((function(){e.signingUp=!1}),1e3)}))}}},d=n,u=(t("a9d7"),t("2877")),l=Object(u["a"])(d,a,r,!1,null,"1eb24f36",null);s["default"]=l.exports}}]);