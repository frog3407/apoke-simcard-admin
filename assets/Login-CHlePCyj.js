import{r as o,k as j,j as s}from"./index-CEg36ZDl.js";import{b as f,c as a,a as g}from"./index.esm-aVwYej4G.js";import{a as y,s as N}from"./Api-DLDctVmQ.js";import{C as t,a as n}from"./CRow-Du6_IKp1.js";import{C as w}from"./CCardGroup-CPa_IhGB.js";import{C as L,a as b}from"./CCardBody-C9A50pGX.js";import{C as k}from"./CForm-NHQ9OEXS.js";import{C as c,a as i}from"./CInputGroupText-B63mGaHv.js";import{c as v}from"./cil-user-Ddrdy7PS.js";import{C as l}from"./CFormInput-DFAaZGe8.js";import{c as I}from"./cil-lock-locked-DmxpJbVL.js";import"./CFormControlWrapper-lEHDi6K0.js";import"./CFormControlValidation-Bc3qNh2g.js";import"./CFormLabel-93-2SCO8.js";const z=()=>{const[m,d]=o.useState(""),[p,x]=o.useState(""),h=j(),C=async()=>{try{const e=await y({username:m,password:p});console.log("result="+JSON.stringify(e)),e.code==="0000"?(N(e.result.token),h("/dashboard")):alert(e.message)}catch(r){console.error("Error fetching data:",r)}},u=()=>{C()};return s.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:s.jsx(f,{children:s.jsx(t,{className:"justify-content-center",children:s.jsx(n,{md:8,children:s.jsx(w,{children:s.jsx(L,{className:"p-4",children:s.jsx(b,{children:s.jsxs(k,{children:[s.jsx("h1",{children:"Login"}),s.jsx("p",{className:"text-body-secondary",children:"Sign In to your account"}),s.jsxs(c,{className:"mb-3",children:[s.jsx(i,{children:s.jsx(a,{icon:v})}),s.jsx(l,{placeholder:"Username",onChange:r=>d(r.target.value),autoComplete:"username"})]}),s.jsxs(c,{className:"mb-4",children:[s.jsx(i,{children:s.jsx(a,{icon:I})}),s.jsx(l,{type:"password",placeholder:"Password",onChange:r=>x(r.target.value),autoComplete:"current-password"})]}),s.jsx(t,{children:s.jsx(n,{xs:6,children:s.jsx(g,{color:"primary",className:"px-4",onClick:u,children:"Login"})})})]})})})})})})})})};export{z as default};
