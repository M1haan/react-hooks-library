import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-JhL3uwfD.js";function l(s,n){o.useEffect(()=>{const t=i=>{const r=s==null?void 0:s.current;r&&(r.contains(i.target)||n(i))};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[s,n])}const B=()=>{const[s,n]=o.useState(!1),t=o.useRef(null);return l(t,()=>{s&&n(!1)}),e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui, -apple-system, sans-serif",minHeight:"400px",position:"relative"},children:[e.jsxs("h2",{style:{margin:"0 0 20px 0",color:"#333",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"🔲"})," useClickAway - Модальное окно"]}),e.jsx("button",{onClick:()=>n(!0),type:"button",style:{padding:"12px 24px",background:"#007bff",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",cursor:"pointer"},children:"Открыть модальное окно"}),s&&e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},children:e.jsxs("div",{ref:t,style:{background:"white",padding:"32px",borderRadius:"12px",maxWidth:"400px",boxShadow:"0 10px 25px rgba(0,0,0,0.2)",position:"relative"},children:[e.jsx("button",{onClick:()=>n(!1),type:"button",style:{position:"absolute",top:"12px",right:"12px",background:"none",border:"none",fontSize:"20px",cursor:"pointer",color:"#666"},children:"✕"}),e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Модальное окно"}),e.jsx("p",{style:{margin:"0 0 24px 0",color:"#666"},children:"Кликните вне этого окна, чтобы закрыть его. Хук useClickAway отслеживает клики вне элемента."}),e.jsx("div",{style:{padding:"12px",background:"#f8f9fa",borderRadius:"6px",fontSize:"14px",color:"#495057"},children:"🔍 Попробуйте кликнуть вне этого окна"})]})})]})},D=()=>{const[s,n]=o.useState(!1),t=o.useRef(null);return l(t,()=>{n(!1)}),e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui, -apple-system, sans-serif",minHeight:"300px"},children:[e.jsxs("h2",{style:{margin:"0 0 20px 0",color:"#333",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"📋"})," useClickAway - Выпадающее меню"]}),e.jsxs("div",{ref:t,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{onClick:()=>n(!s),type:"button",style:{padding:"12px 24px",background:"#6c757d",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:s?"▼":"▶"}),s?"Закрыть меню":"Открыть меню"]}),s&&e.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:"8px",background:"white",border:"1px solid #dee2e6",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",minWidth:"200px",zIndex:100},children:["Профиль","Настройки","Помощь","Выйти"].map(i=>e.jsx("button",{type:"button",onClick:()=>{alert(`Выбрано: ${i}`),n(!1)},style:{width:"100%",padding:"12px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:"14px",borderBottom:"1px solid #f1f3f5",transition:"background 0.2s"},onMouseEnter:r=>{r.currentTarget.style.background="#f8f9fa"},onMouseLeave:r=>{r.currentTarget.style.background="none"},children:i},i))})]}),e.jsxs("div",{style:{marginTop:"40px",padding:"16px",background:"#f8f9fa",borderRadius:"8px",fontSize:"14px",color:"#666"},children:[e.jsx("p",{style:{margin:"0 0 8px 0"},children:e.jsx("strong",{children:"📌 Как это работает:"})}),e.jsxs("ul",{style:{margin:"0",paddingLeft:"20px"},children:[e.jsx("li",{children:"Кликните на кнопку, чтобы открыть меню"}),e.jsx("li",{children:"Кликните вне меню, чтобы закрыть его"}),e.jsx("li",{children:"Хук автоматически добавляет и удаляет слушатели событий"})]})]})]})},z=()=>{const[s,n]=o.useState(!1),t=o.useRef(null),i=o.useRef(null);return l(t,r=>{var p;(p=i.current)!=null&&p.contains(r.target)||n(!1)}),e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui, -apple-system, sans-serif",minHeight:"200px"},children:[e.jsxs("h2",{style:{margin:"0 0 20px 0",color:"#333",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"💡"})," useClickAway - Тултип"]}),e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.jsx("button",{ref:i,onClick:()=>n(!s),type:"button",style:{padding:"12px 24px",background:"#17a2b8",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",cursor:"pointer"},children:"Показать подсказку"}),s&&e.jsxs("div",{ref:t,style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:"12px",padding:"16px",background:"#17a2b8",color:"white",borderRadius:"8px",fontSize:"14px",minWidth:"250px",boxShadow:"0 4px 12px rgba(23, 162, 184, 0.3)",zIndex:100},children:[e.jsx("div",{style:{position:"absolute",top:"-6px",left:"50%",transform:"translateX(-50%)",width:0,height:0,borderLeft:"8px solid transparent",borderRight:"8px solid transparent",borderBottom:"8px solid #17a2b8"}}),e.jsx("p",{style:{margin:"0 0 8px 0",fontWeight:"bold"},children:"🎯 Полезная подсказка"}),e.jsx("p",{style:{margin:"0",fontSize:"12px",opacity:.9},children:"Этот тултип закроется, если кликнуть вне его области. Клик по кнопке не закрывает его."})]})]})]})},M={title:"Hooks/useClickAway",component:B,tags:["autodocs"],parameters:{docs:{description:{component:"Хук для отслеживания кликов вне указанного элемента. Полезно для модальных окон, выпадающих меню и тултипов."}}}},c={render:()=>e.jsx(B,{})},x={render:()=>e.jsx(D,{})},u={render:()=>e.jsx(z,{})},f={render:function(){const[n,t]=o.useState(null),i=o.useRef(null),r=o.useRef(null),p=o.useRef(null);return l(i,()=>{n===1&&t(null)}),l(r,()=>{n===2&&t(null)}),l(p,()=>{n===3&&t(null)}),e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui, sans-serif"},children:[e.jsx("h3",{children:"📦 Несколько элементов"}),e.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:"Кликните на бокс - он активируется. Кликните вне его - деактивируется."}),e.jsx("div",{style:{display:"flex",gap:"20px"},children:[1,2,3].map(a=>{const d=n===a,m=["#007bff","#28a745","#dc3545"];return e.jsxs("button",{onClick:()=>t(a),type:"button",style:{width:"150px",height:"150px",background:d?m[a-1]:"#f8f9fa",border:`3px solid ${m[a-1]}`,borderRadius:"12px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.2s ease",color:d?"white":"#333"},children:[e.jsx("span",{style:{fontSize:"32px",marginBottom:"8px"},children:d?"✓":"□"}),e.jsxs("span",{children:["Бокс ",a]}),d&&e.jsx("span",{style:{fontSize:"12px",marginTop:"8px"},children:"(активен)"})]},Date.now())})})]})}};var b,g,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ModalDemo />
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,j,v;x.parameters={...x.parameters,docs:{...(h=x.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DropdownDemo />
}`,...(v=(j=x.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var R,k,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <TooltipDemo />
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,A,C;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function WithMultipleRefs() {
    const [activeBox, setActiveBox] = useState<number | null>(null);
    const box1Ref = useRef<HTMLDivElement>(null);
    const box2Ref = useRef<HTMLDivElement>(null);
    const box3Ref = useRef<HTMLDivElement>(null);
    useClickAway(box1Ref, () => {
      if (activeBox === 1) setActiveBox(null);
    });
    useClickAway(box2Ref, () => {
      if (activeBox === 2) setActiveBox(null);
    });
    useClickAway(box3Ref, () => {
      if (activeBox === 3) setActiveBox(null);
    });
    return <div style={{
      padding: '24px',
      fontFamily: 'system-ui, sans-serif'
    }}>
        <h3>📦 Несколько элементов</h3>
        <p style={{
        color: '#666',
        marginBottom: '20px'
      }}>
          Кликните на бокс - он активируется. Кликните вне его - деактивируется.
        </p>

        <div style={{
        display: 'flex',
        gap: '20px'
      }}>
          {[1, 2, 3].map(num => {
          // const ref = num === 1 ? box1Ref : num === 2 ? box2Ref : box3Ref
          const isActive = activeBox === num;
          const colors = ['#007bff', '#28a745', '#dc3545'];
          return <button key={Date.now()} onClick={() => setActiveBox(num)} type="button" style={{
            width: '150px',
            height: '150px',
            background: isActive ? colors[num - 1] : '#f8f9fa',
            border: \`3px solid \${colors[num - 1]}\`,
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: isActive ? 'white' : '#333'
          }}>
                <span style={{
              fontSize: '32px',
              marginBottom: '8px'
            }}>
                  {isActive ? '✓' : '□'}
                </span>
                <span>Бокс {num}</span>
                {isActive && <span style={{
              fontSize: '12px',
              marginTop: '8px'
            }}>(активен)</span>}
              </button>;
        })}
        </div>
      </div>;
  }
}`,...(C=(A=f.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const E=["Modal","Dropdown","Tooltip","WithMultipleRefs"];export{x as Dropdown,c as Modal,u as Tooltip,f as WithMultipleRefs,E as __namedExportsOrder,M as default};
