import{j as e,k as j,r as m}from"./index-dwMshqbq.js";import"./DefaultLayout-C50DTWXY.js";import{a as b}from"./index.esm-D-bg44FK.js";import{M as N}from"./MessageModal-BGkXzzGK.js";import{C as l,a}from"./CRow-Cpzd-lh4.js";import{C as v,a as f}from"./CCardBody-BS33oP_J.js";import{C as p}from"./CCardHeader-uo-W1e64.js";import{C}from"./CForm-eOC2DV4N.js";import{a as s,C as i,b as r}from"./CFormInput-vQtvdtRD.js";import{C as y}from"./CFormCheck-C6UGEHB1.js";import"./cil-user-Ddrdy7PS.js";import"./CModalTitle-R5OM4q82.js";const F=()=>{j();const[o,n]=m.useState({}),[c,u]=m.useState(!1),x=[{id:1,name:"銀光"},{id:2,name:"金燦"},{id:3,name:"白金"},{id:4,name:"黑鑽"}],h=t=>{const d=t.currentTarget;console.log("form.checkValidity()="+d.checkValidity()),t.preventDefault(),t.stopPropagation(),d.checkValidity()===!0&&n({alert:"alert",type:"",title:"訊息通知",msg:"經銷商建立成功",time:1500,navurl:"/admin/user/list"}),u(!0)};return e.jsxs(C,{className:"row g-3 needs-validation",noValidate:!0,validated:c,onSubmit:h,children:[e.jsx(N,{modalObj:o}),e.jsxs(l,{className:"my-3",children:[e.jsx(s,{htmlFor:"validationUserId",className:"col-sm-1 col-form-label",children:"帳號"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"text",id:"validationUserId",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入帳號"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationPwd",className:"col-sm-1 col-form-label",children:"密碼"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"password",id:"validationPwd",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入密碼"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationPwdConfirm",className:"col-sm-1 col-form-label",children:"密碼確認"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"password",id:"validationPwdConfirm",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入密碼"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationDealerLevel",className:"col-sm-1 col-form-label",children:"經銷商等級"}),e.jsxs(a,{sm:6,children:[x.map((t,d)=>e.jsx(y,{inline:!0,type:"radio",value:t.id,name:"dealerLevel",label:t.name,required:!0},d)),e.jsx(r,{invalid:!0,children:"請選擇經銷商分級"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationDealerName",className:"col-sm-1 col-form-label",children:"經銷商名稱"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"text",id:"validationDealerName",name:"dealerName",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入經銷商名稱"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationNumber",className:"col-sm-1 col-form-label",children:"統一編號"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"text",id:"validationNumber",name:"dealerNumber",defaultValue:""}),e.jsx(r,{invalid:!0,children:"請輸入正確的統一編號"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationOwner",className:"col-sm-1 col-form-label",children:"負責人"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"text",id:"validationOwner",name:"dealerOwner",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入負責人"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationContactName",className:"col-sm-1 col-form-label",children:"連絡人"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"text",id:"validationContactName",name:"dealerContactName",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入連絡人姓名"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationAddress",className:"col-sm-1 col-form-label",children:"連絡地址"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"text",id:"validationAddress",name:"dealerAddress",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入聯繫地址"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationContactNumber",className:"col-sm-1 col-form-label",children:"連絡電話"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"text",id:"validationContactNumber",name:"dealerContactNumber",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入連絡電話"})]})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(s,{htmlFor:"validationPhoneNumber",className:"col-sm-1 col-form-label",children:"手機號碼"}),e.jsxs(a,{sm:6,children:[e.jsx(i,{type:"text",id:"validationPhoneNumber",name:"dealerPhoneNumber",defaultValue:"",required:!0}),e.jsx(r,{invalid:!0,children:"請輸入連絡電話"})]})]}),e.jsx(a,{xs:12,children:e.jsx(b,{color:"primary",type:"submit",children:"建立"})})]})},I=()=>e.jsx(l,{children:e.jsx(a,{xs:12,children:e.jsxs(v,{className:"mb-4",children:[e.jsx(p,{children:e.jsx("strong",{children:"經銷商基本資料"})}),e.jsxs(f,{children:[e.jsx("p",{className:"text-body-secondary small",children:"建立完成後請提供帳號密碼給經銷商"}),F()]})]})})});export{I as default};
