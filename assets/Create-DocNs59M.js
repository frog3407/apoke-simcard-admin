import{r as o,j as e}from"./index-wjXso5yx.js";import{a as d,c as P}from"./index.esm-DIjhUOd1.js";import{C as w}from"./ChannelProducts-ByY-t_5M.js";import{C as z}from"./CForm-Cy4lkiyH.js";import{a as t,C as L}from"./CRow-B9iN4PNt.js";import{a as i,C as m,b as u}from"./CFormInput-Bssn_jky.js";import{C as S}from"./CFormCheck-BVHRu7zz.js";import{C as Z,a as q,b as N,c,d as B,e as n}from"./CTable-BzRbhM5X.js";import{C as Q,a as R,b as A,c as G}from"./CModalTitle-BxFRrvMk.js";import{C as J}from"./CModalFooter-CFmimJap.js";import"./Api-BxWCt5AG.js";import"./DefaultLayout-CinKx_NY.js";import"./cil-user-Ddrdy7PS.js";var O=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"];const ie=()=>{const[j,T]=o.useState(""),[h,x]=o.useState([]),[F,I]=o.useState(!1),[y,p]=o.useState(!1),[C,V]=o.useState("joytel"),H=l=>{console.log("handleGetSelectedItems value="+JSON.stringify(l)),T(l)},f=l=>{V(l.target.value),x([]),console.log("handleSelectChannel value="+l.target.value)},k=()=>{x(j),p(!1),console.log("handelSendItems value="+j)},M=(l,a)=>{console.log("handelDelCartItem itemCode="+a);let s=h;s=s.reduce((r,b)=>(b.itemCode!==a&&r.push(b),r),[]),x(s)},D=(l,a)=>{a<1||x(s=>s.map(r=>r.itemCode===l?{...r,itemQuantity:a}:r))},g=l=>l.itemPrice*l.itemQuantity,v=()=>h.reduce((l,a)=>l+g(a),0),E=l=>{l.currentTarget.checkValidity()===!1&&(l.preventDefault(),l.stopPropagation()),I(!0)};return e.jsxs(z,{className:"row g-3 needs-validation",noValidate:!0,validated:F,onSubmit:E,children:[e.jsxs(t,{md:4,className:"position-relative",children:[e.jsx(i,{htmlFor:"username",children:"客戶姓名"}),e.jsx(m,{type:"text",id:"username",defaultValue:"",required:!0}),e.jsx(u,{invalid:!0,children:"請輸入客戶姓名"})]}),e.jsxs(t,{md:4,className:"position-relative",children:[e.jsx(i,{htmlFor:"email",children:"Email"}),e.jsx(m,{type:"text",id:"email",defaultValue:"",required:!0}),e.jsx(u,{invalid:!0,children:"請輸入Email"})]}),e.jsxs(t,{md:4,className:"position-relative",children:[e.jsx(i,{htmlFor:"cellphone",children:"聯絡電話"}),e.jsx(m,{type:"text",id:"cellphone",defaultValue:"",required:!0}),e.jsx(u,{invalid:!0,children:"請輸入聯絡電話"})]}),e.jsxs(t,{md:12,className:"position-relative",children:[e.jsx(i,{htmlFor:"note",children:"備註"}),e.jsx(m,{type:"text",id:"note",defaultValue:""}),e.jsx(u,{invalid:!0,children:"請輸入備註"})]}),e.jsxs(t,{md:12,className:"position-relative",children:[e.jsx(i,{htmlFor:"channelType",children:"渠道類型    "}),e.jsx(S,{inline:!0,type:"radio",value:"joytel",name:"channelType",id:"fchannelType1",label:"渠道1",checked:C==="joytel",onChange:f}),e.jsx(S,{inline:!0,type:"radio",value:"tgt",name:"channelType",id:"fchannelType2",label:"渠道2",checked:C==="tgt",onChange:f})]}),e.jsx(t,{md:12,children:e.jsxs(i,{htmlFor:"validationDefault05",children:["商品列表    ",e.jsx(d,{color:"info",size:"sm",onClick:()=>p(!y),children:"新增商品"})]})}),e.jsx(t,{md:12,children:e.jsxs(Z,{children:[e.jsx(q,{color:"secondary",children:e.jsxs(N,{children:[e.jsx(c,{scope:"col",className:"text-nowrap",children:"商品名稱"}),e.jsx(c,{scope:"col",className:"text-nowrap",children:"單價"}),e.jsx(c,{scope:"col",className:"text-nowrap",children:"激活日期"}),e.jsx(c,{scope:"col",className:"text-nowrap",children:"數量"}),e.jsx(c,{scope:"col",className:"text-nowrap",children:"總價"}),e.jsx(c,{scope:"col",className:"text-nowrap",children:"操作"})]})}),e.jsx(B,{children:h.map((l,a)=>e.jsxs(N,{id:l.itemCode,children:[e.jsx(n,{children:l.itemName}),e.jsx(n,{children:l.itemPrice}),e.jsx(n,{children:l.itemDate}),e.jsx(n,{children:e.jsx(m,{type:"number",size:"sm",max:10,min:1,value:l.itemQuantity,onChange:s=>D(l.itemCode,parseInt(s.target.value,10))})}),e.jsx(n,{children:g(l).toFixed(2)}),e.jsx(n,{children:e.jsx(d,{color:"danger",size:"sm",onClick:s=>M(s,l.itemCode),children:e.jsx(P,{icon:O,size:"sm"})})})]},a))})]})}),e.jsxs(L,{className:"my-2 text-end",children:[e.jsxs(t,{children:["商品總價：",v().toFixed(2),"元"]}),e.jsxs(t,{children:["應結算金額：",v().toFixed(2),"元"]})]}),e.jsx(t,{xs:12,className:"mb-5",children:e.jsx(d,{color:"primary",type:"submit",className:"float-end",children:"送出"})}),e.jsxs(Q,{size:"xl",alignment:"center",visible:y,onClose:()=>p(!1),"aria-labelledby":"ScrollingLongContentExampleLabel",children:[e.jsx(R,{children:e.jsx(A,{id:"ScrollingLongContentExampleLabel",children:"商品列表"})}),e.jsx(G,{children:e.jsx(w,{channelName:C,isSelect:!0,onSelectedItem:H,cartItems:h})}),e.jsxs(J,{children:[e.jsx(d,{color:"secondary",onClick:()=>p(!1),children:"取消"}),e.jsx(d,{color:"primary",onClick:k,children:"確認"})]})]})]})};export{ie as default};
