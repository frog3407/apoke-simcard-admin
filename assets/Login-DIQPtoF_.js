import{r as i,_ as g,R as N,b as y,c as v,P as d,k as w,j as s}from"./index-DhMebg7v.js";import{b,c as m,a as L}from"./index.esm-DrYIGDCx.js";import{a as k,s as I}from"./Api-BxWCt5AG.js";import{C as p,a as h}from"./CRow-D2By6jQ2.js";import{C as R,a as E}from"./CCardBody-DVuKHB-5.js";import{C as G}from"./CForm-CXykK3_S.js";import{C as u,a as x}from"./CInputGroupText-DrjlKuDr.js";import{c as P}from"./cil-user-Ddrdy7PS.js";import{C}from"./CFormInput-_srQuxKd.js";import{c as S}from"./cil-lock-locked-DmxpJbVL.js";var l=i.forwardRef(function(r,o){var t=r.children,n=r.className,c=g(r,["children","className"]);return N.createElement("div",y({className:v("card-group",n)},c,{ref:o}),t)});l.propTypes={children:d.node,className:d.string};l.displayName="CCardGroup";const z=()=>{const[r,o]=i.useState(""),[t,n]=i.useState(""),c=w(),j=async()=>{try{const a=await k({username:r,password:t});console.log("result="+JSON.stringify(a)),a.code==="0000"?(I(a.result.token),c("/dashboard")):alert(a.message)}catch(e){console.error("Error fetching data:",e)}},f=()=>{j()};return s.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:s.jsx(b,{children:s.jsx(p,{className:"justify-content-center",children:s.jsx(h,{md:8,children:s.jsx(l,{children:s.jsx(R,{className:"p-4",children:s.jsx(E,{children:s.jsxs(G,{children:[s.jsx("h1",{children:"Login"}),s.jsx("p",{className:"text-body-secondary",children:"Sign In to your account"}),s.jsxs(u,{className:"mb-3",children:[s.jsx(x,{children:s.jsx(m,{icon:P})}),s.jsx(C,{placeholder:"Username",onChange:e=>o(e.target.value),autoComplete:"username"})]}),s.jsxs(u,{className:"mb-4",children:[s.jsx(x,{children:s.jsx(m,{icon:S})}),s.jsx(C,{type:"password",placeholder:"Password",onChange:e=>n(e.target.value),autoComplete:"current-password"})]}),s.jsx(p,{children:s.jsx(h,{xs:6,children:s.jsx(L,{color:"primary",className:"px-4",onClick:f,children:"Login"})})})]})})})})})})})})};export{z as default};