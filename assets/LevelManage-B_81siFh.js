import{r as m,j as e}from"./index-BjgWWa00.js";import{a as C}from"./index.esm-De6QwLMh.js";import{M as b}from"./MessageModal-BWYF7T0j.js";import{C as a,a as s}from"./CRow--wunV3FO.js";import{C as f,a as v}from"./CCardBody-Ba6h2PPk.js";import{C as y}from"./CCardHeader-Cj1ZAXF5.js";import{C as N}from"./CForm-O0ZTXSSh.js";import{C as T,a as w,b as l,c as r,d as g,e as i}from"./CTable-Df1j6w_f.js";import{C as d,b as n}from"./CFormInput-BMHf4JWY.js";import"./CModalTitle-CviUm8Yg.js";import"./DefaultLayout-D_R-WaSw.js";import"./cil-user-Ddrdy7PS.js";const O=()=>{const[x,o]=m.useState(!1),[j,u]=m.useState({}),h=t=>{const c=t.currentTarget;t.preventDefault(),t.stopPropagation(),c.classList.add("was-validated"),c.checkValidity()===!0&&(u({alert:"alert",type:"",title:"訊息通知",msg:"儲存成功",time:1500,navurl:""}),p()),o(!0)},p=t=>{setTimeout(()=>{o(!1)},1500)};return e.jsxs(a,{children:[e.jsx(b,{modalObj:j}),e.jsx(s,{xs:12,children:e.jsxs(f,{className:"mb-4",children:[e.jsx(y,{children:e.jsx("strong",{children:"經銷商分級設定"})}),e.jsx(v,{children:e.jsxs(N,{className:"row mx-5 g-3 needs-validation",noValidate:!0,validated:x,onSubmit:h,children:[e.jsxs(T,{bordered:!0,children:[e.jsx(w,{color:"dark",children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",className:"text-end",children:"分級名稱"}),e.jsx(r,{scope:"col",children:"分潤%數"})]})}),e.jsxs(g,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",className:"text-end",children:"銀光"}),e.jsx(i,{children:e.jsxs(a,{children:[e.jsxs(s,{sm:"auto",children:[e.jsx(d,{type:"number",id:"level1",defaultValue:"50",required:!0,max:100,min:1}),e.jsx(n,{invalid:!0,children:"請輸入銀光分潤%數"})]}),e.jsx(s,{sm:"auto",children:"%"})]})})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",className:"text-end",children:"金燦"}),e.jsx(i,{children:e.jsxs(a,{children:[e.jsxs(s,{sm:"auto",children:[e.jsx(d,{type:"number",id:"level2",defaultValue:"40",required:!0,max:100,min:1}),e.jsx(n,{invalid:!0,children:"請輸入金燦分潤%數"})]}),e.jsx(s,{sm:"auto",children:"%"})]})})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",className:"text-end",children:"白金"}),e.jsx(i,{children:e.jsxs(a,{children:[e.jsxs(s,{sm:"auto",children:[e.jsx(d,{type:"number",id:"level3",defaultValue:"45",required:!0,max:100,min:1}),e.jsx(n,{invalid:!0,children:"請輸入白金分潤%數"})]}),e.jsx(s,{sm:"auto",children:"%"})]})})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",className:"text-end",children:"黑鑽"}),e.jsx(i,{children:e.jsxs(a,{children:[e.jsxs(s,{sm:"auto",children:[e.jsx(d,{type:"number",id:"level4",defaultValue:"35",required:!0,max:100,min:1}),e.jsx(n,{invalid:!0,children:"請輸入黑鑽分潤%數"})]}),e.jsx(s,{sm:"auto",children:"%"})]})})]})]})]}),e.jsx(s,{xs:12,className:"mb-5",children:e.jsx(C,{color:"primary",type:"submit",className:"float-end",children:"儲存"})})]})})]})})]})};export{O as default};