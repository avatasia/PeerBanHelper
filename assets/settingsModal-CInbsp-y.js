import{G as I,S as b}from"./index-glj3iLVJ.js";import{f as h}from"./time-CwNg5_U-.js";import{f as M,a6 as x,r as S,a as w,a8 as B,j as V,s as y,t as s,y as r,a2 as l,v as u,x as C}from"./libs-D-uoNQCp.js";import{M as m,a6 as O,G,H,J as N}from"./arcoDesign-BIo_4ded.js";const J=M({__name:"settingsModal",setup(j,{expose:i}){const{t:c}=x(),o=S(!1);i({showModal:()=>{o.value=!0}});const d=e=>{const t=e.split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},f=e=>e.replace(/,/g,""),a=w({checkInterval:0});B(I,{onSuccess:e=>{a.checkInterval=e.data}});const p=async()=>{const e=await b(a.checkInterval);return e.success?(m.success({content:e.message,resetOnHover:!0}),!0):(m.error({content:e.message,resetOnHover:!0}),!1)};return(e,t)=>{const v=O,_=G,g=H,k=N;return V(),y(k,{visible:o.value,"onUpdate:visible":t[1]||(t[1]=n=>o.value=n),title:l(c)("page.rule_management.ruleSubscribe.settingsModal.title"),"unmount-on-close":"","modal-style":{width:"35vw"},onBeforeOk:p},{default:s(()=>[r(g,{model:a},{default:s(()=>[r(_,{field:"checkInterval",label:l(c)("page.rule_management.ruleSubscribe.settingsModal.checkInterval")},{extra:s(()=>[u(C(l(h)(a.checkInterval)),1)]),default:s(()=>[r(v,{modelValue:a.checkInterval,"onUpdate:modelValue":t[0]||(t[0]=n=>a.checkInterval=n),step:1e3,min:1e3,formatter:d,parser:f},{suffix:s(()=>t[2]||(t[2]=[u(" ms ")])),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title"])}}});export{J as default};
