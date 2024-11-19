"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[976],{2053:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"intro","title":"Getting started","description":"Get the package","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/shucream-docs/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/monkkeyking/shucream-docs/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar"}');var r=s(4848),t=s(8453);const c={sidebar_position:1},i="Getting started",d={},o=[{value:"Get the package",id:"get-the-package",level:2},{value:"Create a <code>cream.js</code> file",id:"create-a-creamjs-file",level:2},{value:"Run a command",id:"run-a-command",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,r.jsx)(n.h2,{id:"get-the-package",children:"Get the package"}),"\n",(0,r.jsx)(n.p,{children:"Install shucream using npm"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i shucream\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."}),"\n",(0,r.jsx)(n.p,{children:"The command also installs all necessary dependencies you need to run Shucream."}),"\n",(0,r.jsxs)(n.h2,{id:"create-a-creamjs-file",children:["Create a ",(0,r.jsx)(n.code,{children:"cream.js"})," file"]}),"\n",(0,r.jsxs)(n.p,{children:["In the root of your project (next to ",(0,r.jsx)(n.code,{children:"package.json"}),"), create a ",(0,r.jsx)(n.code,{children:"cream.js"})," file. This file defines your API requests."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Example ",(0,r.jsx)(n.code,{children:"cream.js"}),":"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n    baseUrl: 'http://localhost:3000',\n    baseSuccessCode: 200,\n    requests: {\n        1: {\n            method: 'POST',\n            url: '/data',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: {\n                name: 'Sample 1',\n            },\n        },\n    },\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"run-a-command",children:"Run a command"}),"\n",(0,r.jsx)(n.p,{children:"Use the shu CLI to call the requests defined in cream.js."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example command:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"shu ask 1 --responses\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);