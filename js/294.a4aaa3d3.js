"use strict";(self["webpackChunkhosp"]=self["webpackChunkhosp"]||[]).push([[294],{5294:function(e,l,t){t.r(l),t.d(l,{default:function(){return v}});t(541);var a=t(3396),d=t(4870),o=t(7139),u=t(4901),n=t(7178),i=t(4239);const r={class:"cell-item"},s={class:"cell-item"},m={class:"cell-item"},p={class:"cell-item"},c={class:"cell-item"},f={style:{flex:"auto"}},w={name:"EditDrawer"};var I=Object.assign(w,{props:{editDrawerVisible:{type:Boolean,required:!0,default:!1},scheduleInfo:{type:Object,required:!0,default:()=>({id:6,date:"2022-11-08T16:00:00.000Z",time:0,departmentId:17,roomId:20,workerId:14,capacity:24,departmentInfo:{name:"体检科",id:17},roomInfo:{id:20,disabled:!1,deleted:!1,roomNo:205,departmentId:17,note:"体检科诊室",departmentInfo:null},doctorInfo:{id:15,name:"付玉琳",idNo:null,sex:!0,tel:17788889997,note:"擅长健康检查"}})}},emits:["update:editDrawerVisible","handleSubmit"],setup(e,{emit:l}){const t=e,w=(0,a.Fl)({get(){return t.editDrawerVisible},set(e){l("update:editDrawerVisible",e)}}),I=(0,d.iH)(i.Z.getters.GET_USERINFO),_=(0,d.iH)([]),b=(0,d.iH)({id:-1,patientId:-1,scheduleId:t.scheduleInfo.id,userId:I.value.id}),v=(0,d.qj)({patientId:[{required:!0,message:"请选择就诊人",trigger:"blur"}]}),h=(0,d.iH)(null),g=async()=>{let e=await u.ZP.get("/api/center/users/"+I.value.id),l=await u.ZP.get("/api/center/patients?userId="+I.value.id);if(console.log("更新用户信息 res= ",e),console.log("更新就诊人信息 res= ",l),20010==e.data.code&&20010==l.data.code){let a=e.data.user.personInfo,d={id:-1,userId:e.data.user.id,patientId:a.id,relation:"本人",note:"无",patientInfo:a};_.value=l.data.patientList,_.value.unshift(d),b.value={id:-1,patientId:a.id,scheduleId:t.scheduleInfo.id,userId:I.value.id}}else(0,n.z8)({message:e.data.msg,type:"error"})},k=()=>{w.value=!1},W=()=>{h.value.validate((async e=>{if(e){let e,t;console.log("提交新增..."),e="/api/center/appointments",t=await u.ZP.post(e,b.value),console.log("新增预约 res.data= ",t.data),20020==t.data.code?((0,n.z8)({message:t.data.msg,type:"success"}),l("handleSubmit"),k()):(0,n.z8)({message:t.data.msg,type:"error"})}}))};return(0,a.YP)(w,(e=>{1==e&&g()})),(l,t)=>{const u=(0,a.up)("InfoFilled"),n=(0,a.up)("el-icon"),i=(0,a.up)("el-descriptions-item"),I=(0,a.up)("QuestionFilled"),g=(0,a.up)("Iphone"),U=(0,a.up)("EditPen"),y=(0,a.up)("el-descriptions"),z=(0,a.up)("el-radio"),V=(0,a.up)("el-radio-group"),D=(0,a.up)("el-form-item"),Z=(0,a.up)("el-form"),j=(0,a.up)("el-button"),q=(0,a.up)("el-drawer");return(0,a.wg)(),(0,a.j4)(q,{modelValue:(0,d.SU)(w),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,d.dq)(w)?w.value=e:null),direction:"rtl"},{header:(0,a.w5)((()=>[(0,a._)("h4",null,"预约 "+(0,o.zw)(e.scheduleInfo.departmentInfo.name)+" "+(0,o.zw)(e.scheduleInfo.doctorInfo.name)+"医生",1)])),default:(0,a.w5)((()=>[(0,a.Wm)(y,{title:"医生信息卡",column:2,size:"default",border:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{label:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1}),(0,a.Uk)(" 工号 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,o.zw)(e.scheduleInfo.workerId),1)])),_:1}),(0,a.Wm)(i,null,{label:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1}),(0,a.Uk)(" 姓名 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,o.zw)(e.scheduleInfo.doctorInfo.name),1)])),_:1}),(0,a.Wm)(i,null,{label:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I)])),_:1}),(0,a.Uk)(" 性别 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,o.zw)("0"==e.scheduleInfo.doctorInfo.sex?"男":"女"),1)])),_:1}),(0,a.Wm)(i,null,{label:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g)])),_:1}),(0,a.Uk)(" 电话 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,o.zw)(e.scheduleInfo.doctorInfo.tel),1)])),_:1}),(0,a.Wm)(i,null,{label:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U)])),_:1}),(0,a.Uk)(" 特长 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,o.zw)(e.scheduleInfo.doctorInfo.note),1)])),_:1})])),_:1})])),footer:(0,a.w5)((()=>[(0,a.Wm)(Z,{ref_key:"editFormRef",ref:h,model:b.value,rules:v,"label-width":"100px","label-position":"right",style:{"margin-bottom":"25%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{label:"选择就诊人",prop:"patientId"},{default:(0,a.w5)((()=>[(0,a.Wm)(V,{modelValue:b.value.patientId,"onUpdate:modelValue":t[0]||(t[0]=e=>b.value.patientId=e)},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.value,(e=>((0,a.wg)(),(0,a.j4)(z,{key:e.patientId,label:e.patientId},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.relation)+" "+(0,o.zw)(e.patientInfo.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),(0,a._)("div",f,[(0,a.Wm)(j,{onClick:k},{default:(0,a.w5)((()=>[(0,a.Uk)("取消")])),_:1}),(0,a.Wm)(j,{type:"primary",onClick:W},{default:(0,a.w5)((()=>[(0,a.Uk)("预约")])),_:1})])])),_:1},8,["modelValue"])}}}),_=t(89);const b=(0,_.Z)(I,[["__scopeId","data-v-34e27b16"]]);var v=b}}]);
//# sourceMappingURL=294.a4aaa3d3.js.map