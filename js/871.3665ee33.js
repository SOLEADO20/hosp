"use strict";(self["webpackChunkhosp"]=self["webpackChunkhosp"]||[]).push([[871,333],{4333:function(e,l,t){t.r(l),t.d(l,{default:function(){return c}});var a=t(3396),u=t(4870),n=t(4901),i=t(7178);const s=(0,a._)("h4",null,"写评价",-1),r={style:{flex:"auto"}},d={name:"EditDrawer"};var o=Object.assign(d,{props:{editDrawerVisible:{type:Boolean,required:!0,default:!1},id:{type:Number,required:!0,default:-1}},emits:["update:editDrawerVisible","handleSubmit"],setup(e,{emit:l}){const t=e,d=(0,a.Fl)({get(){return t.editDrawerVisible},set(e){l("update:editDrawerVisible",e)}}),o=(0,u.iH)({id:-1,remark:""}),m=(0,u.qj)({remark:[{required:!0,message:"请填写评价",trigger:"blur"},{max:255,message:"评价信息不可超过255个字符",trigger:"blur"}]}),c=(0,u.iH)(null),p=async()=>{let e=await n.ZP.get("/api/center/appointments/"+t.id);if(console.log(e.data),20010==e.data.code){let l=e.data.appointment;o.value={id:t.id,remark:l.remark}}else(0,i.z8)({message:e.data.msg,type:"error"});console.log("从后台填充...")},w=()=>{d.value=!1},f=()=>{c.value.validate((async e=>{if(e){let e,t;console.log("提交修改..."),e="/api/center/appointments",t=await n.ZP.put(e,o.value),console.log("修改预约订单 res.data= ",t.data),20030==t.data.code?((0,i.z8)({message:t.data.msg,type:"success"}),l("handleSubmit"),w()):(0,i.z8)({message:t.data.msg,type:"error"})}}))};return(0,a.YP)(d,(e=>{1==e&&p()})),(e,l)=>{const t=(0,a.up)("el-input"),n=(0,a.up)("el-form-item"),i=(0,a.up)("el-form"),p=(0,a.up)("el-button"),k=(0,a.up)("el-drawer");return(0,a.wg)(),(0,a.j4)(k,{modelValue:(0,u.SU)(d),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,u.dq)(d)?d.value=e:null),direction:"rtl"},{header:(0,a.w5)((()=>[s])),default:(0,a.w5)((()=>[(0,a.Wm)(i,{ref_key:"editFormRef",ref:c,model:o.value,rules:m,"label-width":"0px","label-position":"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{label:"",prop:"remark",style:{width:"100%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:o.value.remark,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value.remark=e),type:"textarea",rows:5},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),footer:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(p,{onClick:w},{default:(0,a.w5)((()=>[(0,a.Uk)("取消")])),_:1}),(0,a.Wm)(p,{type:"primary",onClick:f},{default:(0,a.w5)((()=>[(0,a.Uk)("评价")])),_:1})])])),_:1},8,["modelValue"])}}});const m=o;var c=m},1871:function(e,l,t){t.r(l),t.d(l,{default:function(){return C}});var a=t(3396),u=t(7139),n=t(4870),i=t(4239),s=t(2748),r=t(4901),d=t(7178),o=t(4333);const m={class:"card-header"},c={class:"cell-item"},p={class:"cell-item"},w={class:"cell-item"},f={class:"cell-item"},k={class:"cell-item"},g={class:"cell-item"},_={key:0,style:{color:"#E6A23C"}},y={key:1,style:{color:"#67C23A"}},v={key:2,style:{color:"#F56C6C"}},W={key:3,style:{color:"#909399"}},U={class:"cell-item"},b={class:"cell-item"},h={name:"index"};var z=Object.assign(h,{setup(e){const l=(0,n.iH)(i.Z.getters.GET_USERINFO),t=(0,n.iH)([]),h=(0,n.iH)(-1),z=(0,n.iH)(!1),S=e=>{console.log("编辑评价...",e),z.value=!0,h.value=e},I=async e=>{console.log("取消预约...",e);let l="/api/center/appointments/"+e;console.log("url=",l);let t=await r.ZP.del(l);console.log("res=",t),20040==t.data.code?((0,d.z8)({message:t.data.msg,type:"success"}),await C()):(0,d.z8)({message:t.data.msg,type:"error"})},C=async()=>{let e=await r.ZP.get("/api/center/appointments?userId="+l.value.id);console.log("更新预约信息 res= ",e),20010==e.data.code?t.value=e.data.appointmentList:(0,d.z8)({message:e.data.msg,type:"error"})};return C(),(e,l)=>{const i=(0,a.up)("el-button"),r=(0,a.up)("el-popconfirm"),d=(0,a.up)("el-icon"),q=(0,a.up)("el-descriptions-item"),D=(0,a.up)("el-collapse-item"),V=(0,a.up)("el-collapse"),j=(0,a.up)("el-descriptions"),x=(0,a.up)("el-card"),H=(0,a.up)("el-scrollbar"),F=(0,a.up)("el-main"),A=(0,a.up)("el-container");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,{style:{padding:"5px",background:"aliceblue"},id:"mainView"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.value,(l=>((0,a.wg)(),(0,a.j4)(x,{key:l.id,style:{margin:"20px 0 0 20px",width:"700px"}},{header:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a._)("span",null,(0,u.zw)(l.doctorInfo.name)+" "+(0,u.zw)(l.departmentInfo.name),1),e.hasAnyAuthority("center:appointment:delete")&&0==l.status?((0,a.wg)(),(0,a.j4)(r,{key:0,title:"您确定要取消该预约吗？",onConfirm:e=>I(l.id)},{reference:(0,a.w5)((()=>[(0,a.Wm)(i,{type:"warning"},{default:(0,a.w5)((()=>[(0,a.Uk)("取消预约")])),_:1})])),_:2},1032,["onConfirm"])):e.hasAnyAuthority("center:appointment:edit")&&1==l.status?((0,a.wg)(),(0,a.j4)(i,{key:1,type:"primary",onClick:e=>S(l.id)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 写评价 ")])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])])),default:(0,a.w5)((()=>[(0,a.Wm)(j,{column:2,size:"default",border:""},{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{label:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(s.User))])),_:1}),(0,a.Uk)(" 就诊人 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,u.zw)(l.patientInfo.name),1)])),_:2},1024),(0,a.Wm)(q,null,{label:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(s.QuestionFilled))])),_:1}),(0,a.Uk)(" 就诊序号 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,u.zw)(l.sequence),1)])),_:2},1024),(0,a.Wm)(q,null,{label:(0,a.w5)((()=>[(0,a._)("div",w,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(s.Clock))])),_:1}),(0,a.Uk)(" 就诊时间 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,u.zw)(l.scheduleInfo.date)+" "+(0,u.zw)(0==l.scheduleInfo.time?"上午 08:00-12:00":"下午 14:00-19:00"),1)])),_:2},1024),(0,a.Wm)(q,null,{label:(0,a.w5)((()=>[(0,a._)("div",f,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(s.Location))])),_:1}),(0,a.Uk)(" 就诊地点 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,u.zw)(l.roomInfo.roomNo)+" "+(0,u.zw)(l.roomInfo.note),1)])),_:2},1024),(0,a.Wm)(q,null,{label:(0,a.w5)((()=>[(0,a._)("div",k,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(s.InfoFilled))])),_:1}),(0,a.Uk)(" 提交时间 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,u.zw)(l.createTime),1)])),_:2},1024),(0,a.Wm)(q,null,{label:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(s.InfoFilled))])),_:1}),(0,a.Uk)(" 订单状态 ")])])),default:(0,a.w5)((()=>[0==l.status?((0,a.wg)(),(0,a.iD)("span",_,"待就诊")):1==l.status?((0,a.wg)(),(0,a.iD)("span",y,"已就诊")):2==l.status?((0,a.wg)(),(0,a.iD)("span",v,"已取消")):3==l.status?((0,a.wg)(),(0,a.iD)("span",W,"已过期")):(0,a.kq)("",!0)])),_:2},1024),0==l.status&&l.scheduleInfo.currentSequence>0?((0,a.wg)(),(0,a.j4)(q,{key:0},{label:(0,a.w5)((()=>[(0,a._)("div",U,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(s.Bicycle))])),_:1}),(0,a.Uk)(" 当前就诊 ")])])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,u.zw)(l.scheduleInfo.currentSequence),1)])),_:2},1024)):(0,a.kq)("",!0),1==l.status?((0,a.wg)(),(0,a.j4)(q,{key:1},{label:(0,a.w5)((()=>[(0,a._)("div",b,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(s.EditPen))])),_:1}),(0,a.Uk)(" 详情 ")])])),default:(0,a.w5)((()=>[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,{title:"诊断结果",name:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(l.prescription),1)])),_:2},1024),(0,a.Wm)(D,{title:"我的评价",name:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(l.remark),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),(0,a.Wm)((0,n.SU)(o["default"]),{id:h.value,"edit-drawer-visible":z.value,"onUpdate:edit-drawer-visible":l[0]||(l[0]=e=>z.value=e),onHandleSubmit:C},null,8,["id","edit-drawer-visible"])],64)}}}),S=t(89);const I=(0,S.Z)(z,[["__scopeId","data-v-685c925a"]]);var C=I}}]);
//# sourceMappingURL=871.3665ee33.js.map