(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dd763c1"],{1:function(e,t){},2:function(e,t){},3:function(e,t){},3796:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),a("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v("\n    Drop excel file here or\n    "),a("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v("\n      Browse\n    ")])],1)])},o=[],s=(a("7f7f"),a("1146")),r=a.n(s),l={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(e){var t=e.header,a=e.results;this.excelData.header=t,this.excelData.results=a,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(a),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files,a=t[0];a&&this.upload(a)},upload:function(e){if(this.$refs["excel-upload-input"].value=null,this.beforeUpload){var t=this.beforeUpload(e);t&&this.readerData(e)}else this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new Promise((function(a,n){var o=new FileReader;o.onload=function(e){var n=e.target.result,o=r.a.read(n,{type:"array"}),s=o.SheetNames[0],l=o.Sheets[s],i=t.getHeaderRow(l),c=r.a.utils.sheet_to_json(l);t.generateData({header:i,results:c}),t.loading=!1,a()},o.readAsArrayBuffer(e)}))},getHeaderRow:function(e){var t,a=[],n=r.a.utils.decode_range(e["!ref"]),o=n.s.r;for(t=n.s.c;t<=n.e.c;++t){var s=e[r.a.utils.encode_cell({c:t,r:o})],l="UNKNOWN "+t;s&&s.t&&(l=r.a.utils.format_cell(s)),a.push(l)}return a},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},i=l,c=(a("67df"),a("2877")),u=Object(c["a"])(i,n,o,!1,null,"d2407dd6",null);t["a"]=u.exports},"67df":function(e,t,a){"use strict";var n=a("8ba6"),o=a.n(n);o.a},"6f74":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e._v("\n  Create HotData\n  "),a("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}}),e._v(" "),a("button",{on:{click:e.handleSubmit}},[e._v("Submit")]),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,(function(e){return a("el-table-column",{key:e,attrs:{prop:e,label:e}})})),1)],1)},o=[],s=a("3796"),r=a("a8f8"),l=localStorage.getItem("CompanyId"),i=localStorage.getItem("ProductId"),c=localStorage.getItem("ProjectId"),u=r["a"]+"/".concat(l,"/").concat(i,"/").concat(c,"/hotdata"),d={name:"UploadExcel",components:{UploadExcelComponent:s["a"]},data:function(){return{tableData:[],tableHeader:[]}},methods:{beforeUpload:function(e){var t=e.size/1024/1024<1;return!!t||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var t=e.results,a=e.header;this.tableData=t,this.tableHeader=a},handleSubmit1:function(){console.log(this.tableData)},handleSubmit:function(){var e=this;this.errorMessage="",this.successMessage="",this.signingUp=!0;for(var t=0;t<this.tableData.length;t++)fetch(u,{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(this.tableData[t])}).then((function(e){return e.json()})).then((function(t){console.log(t),e.successMessage=t.message})).then((function(t){setTimeout((function(){e.signingUp=!1}),1e3)}));this.tableData="",this.tableHeader=""}}},p=d,f=a("2877"),h=Object(f["a"])(p,n,o,!1,null,null,null);t["default"]=h.exports},"8ba6":function(e,t,a){},a8f8:function(e,t,a){"use strict";t["a"]="https://product.nadi3docms.com/api"}}]);