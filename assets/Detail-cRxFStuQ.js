import{r as o,j as e}from"./index-wjXso5yx.js";import{M as b}from"./MessageModal-Ciqu2hJI.js";import{C as l,a as s}from"./CRow-B9iN4PNt.js";import{C as f,a as y,b as g,c as v}from"./CModalTitle-BxFRrvMk.js";import{C as V}from"./CForm-Cy4lkiyH.js";import{a as M,C as N,b as T}from"./CFormInput-Bssn_jky.js";import{C as F}from"./CModalFooter-CFmimJap.js";import{a as n}from"./index.esm-DIjhUOd1.js";import{C as k,a as R}from"./CCardBody-CmojFhr1.js";import{C as w}from"./CCardHeader-C7Vk0w_N.js";import{C as B}from"./DefaultLayout-CinKx_NY.js";import{C as S,a as H,b as h,c as a,d as D,e as c}from"./CTable-BzRbhM5X.js";import"./cil-user-Ddrdy7PS.js";const W=()=>{const[x,j]=o.useState(!1),[t,d]=o.useState(!1),[C,p]=o.useState({}),r={id:1,status:0,company:"A公司",taxid:"12345678",leader:"王小明",contact:"王小明",address:"高雄市鼓山二路1000號",contactnumber:"02-2222222",phonenumber:"0912345677",level:"銀光",createtime:"2024/11/08"},u=i=>{const m=i.currentTarget;console.log("form.checkValidity()="+m.checkValidity()),i.preventDefault(),i.stopPropagation(),m.checkValidity()===!0&&(d(!1),p({alert:"alert",type:"",title:"訊息通知",msg:"儲值成功",time:1500,navurl:""})),j(!0)};return e.jsxs(l,{children:[e.jsx(b,{modalObj:C}),e.jsxs(f,{visible:t,alignment:"center",onClose:()=>d(!1),"aria-labelledby":"addRecharge",children:[e.jsx(y,{children:e.jsx(g,{children:"新增儲值"})}),e.jsxs(V,{className:"row mx-5 g-3 needs-validation",noValidate:!0,validated:x,onSubmit:u,children:[e.jsx(v,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(M,{htmlFor:"validationValue",className:"form-label",children:"儲值金額"}),e.jsx(N,{type:"number",min:1,id:"validationValue",name:"rechargeValue",defaultValue:"",required:!0}),e.jsx(T,{invalid:!0,children:"請輸入儲值金額"})]})}),e.jsxs(F,{children:[e.jsx(n,{color:"secondary",onClick:()=>d(!1),children:"取消"}),e.jsx(n,{color:"primary",type:"submit",children:"送出"})]})]})]}),e.jsx(s,{xs:12,children:e.jsxs(k,{className:"mb-4",children:[e.jsx(w,{children:e.jsx("strong",{children:"經銷商詳細資料"})}),e.jsxs(R,{children:[e.jsxs(l,{children:[e.jsxs(s,{md:4,children:["編號：",r.id]}),e.jsxs(s,{md:4,children:["經銷商名稱：",r.company]}),e.jsxs(s,{md:4,children:["分級：",r.level]})]}),e.jsxs(l,{children:[e.jsxs(s,{md:4,children:["統一編號：",r.taxid]}),e.jsxs(s,{md:4,children:["負責人：",r.leader]}),e.jsxs(s,{md:4,children:["連絡人：",r.contact]})]}),e.jsxs(l,{children:[e.jsxs(s,{md:4,children:["連絡地址：",r.address]}),e.jsxs(s,{md:4,children:["連絡電話：",r.contactnumber]}),e.jsxs(s,{md:4,children:["手機號碼：",r.phonenumber]})]}),e.jsxs(l,{children:[e.jsxs(s,{md:4,children:["建立時間：",r.createtime]}),e.jsxs(s,{md:6,children:["狀態：",e.jsx(B,{color:"success",children:"啟用"})]})]}),e.jsx(l,{className:"my-3",children:e.jsx(s,{children:e.jsx("hr",{})})}),e.jsxs(l,{className:"justify-content-between",children:[e.jsx(s,{md:4,children:e.jsx("h4",{children:"儲值紀錄"})}),e.jsx(s,{md:4,className:"text-end",children:e.jsx(n,{color:"info",size:"sm",variant:"outline",className:"me-2",onClick:()=>d(!t),children:"新增儲值"})})]}),e.jsx(l,{children:e.jsx(s,{children:e.jsxs(S,{children:[e.jsx(H,{color:"light",children:e.jsxs(h,{children:[e.jsx(a,{scope:"col",children:"交易號碼"}),e.jsx(a,{scope:"col",children:"交易類型"}),e.jsx(a,{scope:"col",children:"交易金額"}),e.jsx(a,{scope:"col",children:"交易後餘額"}),e.jsx(a,{scope:"col",children:"交易時間"}),e.jsx(a,{scope:"col",children:"備註"})]})}),e.jsx(D,{children:e.jsxs(h,{children:[e.jsx(a,{scope:"row",children:"J20241028"}),e.jsx(c,{children:"充值"}),e.jsx(c,{children:"100"}),e.jsx(c,{children:"156"}),e.jsx(c,{children:"2024-10-28 12:16:53"}),e.jsx(c,{children:"這是備註"})]})})]})})})]})]})})]})};export{W as default};
