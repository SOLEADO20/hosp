"use strict";(self["webpackChunkhosp"]=self["webpackChunkhosp"]||[]).push([[671],{6671:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});l(7658);var a=l(3396),d=l(7139),o=l(4870),s=l(4901),n=l(5410),u=l.n(n),r=l(7178),c=l(4239);const i=e=>((0,a.dD)("data-v-0fc50e16"),e=e(),(0,a.Cn)(),e),g=i((()=>(0,a._)("span",null,null,-1))),p={style:{height:"265px",border:"1px solid #95d475","border-radius":"5px"}},m={style:{height:"265px",border:"1px solid #95d475","border-radius":"5px","margin-top":"5px"}},w={name:"index"};var D=Object.assign(w,{setup(e){const t=(0,o.iH)(c.Z.getters.GET_USERINFO);let l=(0,o.iH)([]);const n=(0,o.qj)({doctorId:t.value.personId,selectedDate:new Date});let i=new Date;const w=(0,o.iH)([new Date(i.getTime()-864e5*i.getDay()),new Date(i.getTime()+864e5*(6-i.getDay()))]),D=(0,o.iH)(),f=()=>{n.selectedDate=new Date(n.selectedDate.getTime()-6048e5)},_=()=>{n.selectedDate=new Date(n.selectedDate.getTime()+6048e5)},h=e=>{D.value.selectDate(e)},k=(e,t)=>{let a=e.getFullYear(),d=e.getMonth(),o=e.getDate(),s=[];for(const n of l.value)n.date.getFullYear()!=a||n.date.getMonth()!=d||n.date.getDate()!=o||null!=t&&n.time!=t||s.push(n);return s},y=e=>{let t=e.getFullYear(),l=e.getMonth()+1,a=e.getDate(),d=t+"-"+(l<10?"0"+l:l)+"-"+(a<10?"0"+a:a);return console.log("dateToStr dateDate=",e,", dateStr=",d),d},b=e=>{let t=parseInt(e.substring(0,4)),l=parseInt(e.substring(5,7)),a=parseInt(e.substring(8,10)),d=new Date(t,l-1,a,0,0,0,0);return console.log("strToDate dateStr=",e,", dateDate=",d),d},x=async()=>{let e=y(n.selectedDate),t={doctorId:n.doctorId,selectedDate:e},a="/api/bsns/schedules/listByDoctorId?"+u().stringify(t);console.log("url=",a);let d=await s.ZP.get(a);if(console.log("更新排班列表 res= ",d),20010==d.data.code){let e=[];d.data.scheduleList.forEach((t=>{t.date=b(t.date),e.push(t)})),l.value=e}else(0,r.z8)({message:d.data.msg,type:"error"})};return x(),(0,a.YP)(n,((e,t)=>{console.log("watch queryForm.selectedDate=",e.selectedDate);let l=new Date(e.selectedDate.getTime()-864e5*e.selectedDate.getDay()),a=new Date(e.selectedDate.getTime()+864e5*(6-e.selectedDate.getDay()));w.value=[l,a],console.log(Date.now()+" 重新拉取数据..."),console.log(n),x()}),{deep:!0}),(e,t)=>{const l=(0,a.up)("el-date-picker"),o=(0,a.up)("el-row"),s=(0,a.up)("el-header"),u=(0,a.up)("el-button"),r=(0,a.up)("el-button-group"),c=(0,a.up)("el-divider"),i=(0,a.up)("el-tag"),y=(0,a.up)("el-card"),b=(0,a.up)("el-scrollbar"),x=(0,a.up)("el-calendar"),W=(0,a.up)("el-main"),v=(0,a.up)("el-container");return(0,a.wg)(),(0,a.j4)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"operatingFloor"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{gutter:20},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{modelValue:n.selectedDate,"onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedDate=e),type:"week",format:"[第] ww [周]",placeholder:"选择一周",clearable:!1,style:{margin:"0 10px"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(W,{style:{padding:"5px",background:"aliceblue"},id:"mainView"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(x,{modelValue:n.selectedDate,"onUpdate:modelValue":t[2]||(t[2]=e=>n.selectedDate=e),range:w.value,ref_key:"calendar",ref:D},{header:(0,a.w5)((({date:e})=>[(0,a._)("span",null,(0,d.zw)(e),1),g,(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{size:"small",onClick:f},{default:(0,a.w5)((()=>[(0,a.Uk)(" 上一周 ")])),_:1}),(0,a.Wm)(u,{size:"small",onClick:t[1]||(t[1]=e=>h("today"))},{default:(0,a.w5)((()=>[(0,a.Uk)("今天")])),_:1}),(0,a.Wm)(u,{size:"small",onClick:_},{default:(0,a.w5)((()=>[(0,a.Uk)(" 下一周 ")])),_:1})])),_:1})])),"date-cell":(0,a.w5)((({data:e})=>[(0,a._)("p",{class:(0,d.C_)(e.isSelected?"is-selected":"")},(0,d.zw)(e.day.split("-").slice(1).join("-")),3),(0,a._)("div",p,[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)("上午")])),_:1}),(0,a.Wm)(b,{height:"210px"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k(e.date,0),(e=>((0,a.wg)(),(0,a.j4)(y,{key:e.id,style:{"font-size":"xx-small"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,d.zw)(e.departmentInfo.name)+" ",1),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,d.zw)(e.roomInfo.roomNo)+"诊室",1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)]),(0,a._)("div",m,[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)("下午")])),_:1}),(0,a.Wm)(b,{height:"210px"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k(e.date,1),(e=>((0,a.wg)(),(0,a.j4)(y,{key:e.id,style:{"font-size":"xx-small"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,d.zw)(e.departmentInfo.name)+" ",1),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,d.zw)(e.roomInfo.roomNo)+"诊室",1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])])),_:1},8,["modelValue","range"])])),_:1})])),_:1})])),_:1})}}}),f=l(89);const _=(0,f.Z)(D,[["__scopeId","data-v-0fc50e16"]]);var h=_}}]);
//# sourceMappingURL=671.a78c5753.js.map