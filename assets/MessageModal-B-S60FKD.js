import{P as c,r as l,k as m,j as s}from"./index-BZyITvHh.js";import{C as d,a as u,b as p,c as f}from"./CModalTitle-BRGf0Wtv.js";const b=t=>{const{modalObj:e}=t,[o,a]=l.useState(!1),i=m();return l.useEffect(()=>{if(e){const r=n=>{setTimeout(()=>{console.log("MessageModal setTimeoute"),a(!1),e.navurl!=""&&i(e.navurl)},n)};console.log("modalObj.time="+e.time),e.time&&e.time>0&&(a(!0),r(e.time))}},[e]),s.jsxs(d,{alignment:"center",fullscreen:"sm",visible:o,backdrop:"static",keyboard:!1,"aria-labelledby":"FullscreenExample2",children:[s.jsx(u,{closeButton:!1,children:s.jsx(p,{id:"FullscreenExample2",children:e.title})}),s.jsx(f,{children:e.msg})]})};b.propTypes={modalObj:c.object};export{b as M};
