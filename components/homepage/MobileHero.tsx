"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useHomepageMotion } from "./MotionProvider";
import { useHomepageCopy } from "./useHomepageCopy";
import { DURATION, SERVICES, POSES, frameAt, headlines, type Box } from "@/lib/homepage/mobile-hero-motion";
import styles from "./MobileHero.module.css";

const labels = {
  tr: { data: "Veri / ihtiyaç", rules: "İş kuralları + AI", product: "Dijital ürün", request: "İhtiyaç", flow: "İş akışı", record: "Veri", analysis: "Analiz", workspace: "Çalışma alanı", description: "Veri ve ihtiyaçlar, iş kuralları ve yapay zekâ ile çalışan web ve mobil yazılıma dönüşür." },
  en: { data: "Data / needs", rules: "Business rules + AI", product: "Digital product", request: "Needs", flow: "Workflow", record: "Data", analysis: "Insights", workspace: "Workspace", description: "Data and needs become working web and mobile software through business rules and artificial intelligence." },
  de: { data: "Daten / Bedarf", rules: "Geschäftsregeln + KI", product: "Digitales Produkt", request: "Bedarf", flow: "Ablauf", record: "Daten", analysis: "Analyse", workspace: "Arbeitsbereich", description: "Daten und Anforderungen werden durch Geschäftsregeln und künstliche Intelligenz zu funktionierender Web- und Mobilsoftware." },
};
export function MobileHero() {
  const t = useHomepageCopy();
  const { locale } = useLanguage();
  const l = labels[locale];
  const { paused, reduced, ready, toggle } = useHomepageMotion();
  const svg = useRef<SVGSVGElement>(null);
  const hero = useRef<HTMLElement>(null);
  const time = useRef(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const section = hero.current!;
    let intersecting = false;
    const update = () => setVisible(intersecting && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { intersecting=entry.isIntersecting; update(); });
    observer.observe(section);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  useEffect(() => {
    const root = svg.current!, section = hero.current!;
    const rect = (name:string) => root.querySelector<SVGRectElement>(`[data-part="${name}"]`)!;
    const frame=rect("frame"), seat=rect("seat"), data=rect("data"), logic=rect("logic"), sidebar=rect("sidebar");
    const product=root.querySelector<SVGGElement>("[data-product]")!;
    const back=root.querySelector<SVGGElement>("[data-back]")!;
    const dataTitle=root.querySelector<SVGTextElement>("[data-data-title]")!;
    const logicTitle=root.querySelector<SVGTextElement>("[data-logic-title]")!;
    const badge=rect("badge"), badgeText=root.querySelector<SVGTextElement>("[data-badge-text]")!;
    const heading=root.querySelector<SVGTextElement>("[data-ui-title]")!;
    const bar=root.querySelector<SVGPathElement>("[data-bar]")!;
    const dots=root.querySelector<SVGGElement>("[data-dots]")!;
    const pill=rect("pill");
    const chrome=root.querySelector<SVGTextElement>("[data-chrome]")!;
    const nav=root.querySelector<SVGPathElement>("[data-nav]")!;
    const cards=[...root.querySelectorAll<SVGRectElement>("[data-card]")];
    const captions=[...root.querySelectorAll<SVGTextElement>("[data-caption]")];
    const marks=[...root.querySelectorAll<SVGPathElement>("[data-mark]")];
    const cells=[...root.querySelectorAll<SVGRectElement>("[data-cell]")];
    const titles=[...section.querySelectorAll<HTMLElement>("[data-headline]")];
    const labels=[...section.querySelectorAll<HTMLElement>("[data-service]")];
    const setBox=(node:SVGRectElement,box:Box,r=7)=>{ ["x","y","width","height"].forEach((key,i)=>node.setAttribute(key,String(box[i])));node.setAttribute("rx",String(r)); };
    const textAt=(node:SVGTextElement,x:number,y:number)=>{node.setAttribute("x",String(x));node.setAttribute("y",String(y));};
    function paint(seconds:number) {
      const f=frameAt(seconds),[x,y,w,h]=f.frame;
      root.dataset.time=seconds.toFixed(3); root.dataset.stage=SERVICES[f.active]; section.dataset.stage=SERVICES[f.active];
      titles.forEach((node,i)=>{node.style.opacity=String(i===f.active?f.opacity:0);node.style.transform=`translateY(${i===f.active?f.titleY:0}px)`;});
      labels.forEach((node,i)=>{node.dataset.active=String(i===f.active);if(i===f.active)node.setAttribute("aria-current","true");else node.removeAttribute("aria-current");});
      setBox(frame,f.frame,10+f.phone*10);setBox(seat,[x,y+6,w,h],10+f.phone*10);
      product.setAttribute("transform",`rotate(${f.angle} 175 170)`);back.setAttribute("transform",`rotate(${f.angle} 175 170)`);back.style.opacity=String(f.depth);
      setBox(data,f.data);setBox(logic,f.logic);
      textAt(dataTitle,f.data[0]+16,f.data[1]+24);textAt(logicTitle,f.logic[0]+50,f.logic[1]+27);
      setBox(badge,[f.logic[0]+14,f.logic[1]+10,26,26],7);textAt(badgeText,f.logic[0]+27,f.logic[1]+28);
      cells.forEach((node,i)=>setBox(node,[f.data[0]+16+i*34,f.data[1]+39,23,5],2.5));
      textAt(heading,x+18,y+54-f.phone*4);heading.setAttribute("font-size",String(16-f.phone));
      bar.setAttribute("d",`M${x} ${y+28}h${w}`);bar.style.opacity=String(1-f.phone);
      dots.setAttribute("transform",`translate(${x+16} ${y+14})`);dots.style.opacity=String(1-f.phone);
      textAt(chrome,x+50,y+18);chrome.style.opacity=String(1-f.phone);
      setBox(pill,[x+w/2-13,y+10,26,3],1.5);pill.style.opacity=String(f.phone);
      setBox(sidebar,[x+16,f.cards[0][1],22,f.cards[2][1]+f.cards[2][3]-f.cards[0][1]],5);sidebar.style.opacity=String(f.sidebar);
      nav.setAttribute("d",`M${x+22} ${f.cards[0][1]+15}h10m-10 15h7m-7 15h10`);nav.style.opacity=String(f.sidebar);
      cards.forEach((node,i)=>{
        const [cx,cy,cw,ch]=f.cards[i];setBox(node,f.cards[i]);textAt(captions[i],cx+11,cy+19);
        marks[i].setAttribute("d",i===2?`M${cx+12} ${cy+ch-14} Q${cx+cw*.26} ${cy+ch-12} ${cx+cw*.45} ${cy+ch-23} T${cx+cw-13} ${cy+ch-31}`:`M${cx+12} ${cy+ch-12}h${cw-32}`);
      });
    }
    // Paint immediately even while paused or after changing language; there is no late asset load.
    paint(reduced?15:time.current);
    if (!ready || paused || !visible) return;
    let frameId=0, previous:number|undefined;
    const tick=(now:number)=>{
      if(previous!==undefined)time.current=(time.current+Math.min(now-previous,64)/1000)%DURATION;
      previous=now;paint(time.current);frameId=requestAnimationFrame(tick);
    };
    frameId=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(frameId);
  }, [paused, reduced, ready, visible, locale]);
  return <section id="mobile-hero" ref={hero} className={styles.mobileHero} data-stage="web">
    <div className={styles.transport}><button type="button" aria-pressed={paused} aria-disabled={reduced || !ready} aria-controls="mobile-hero references" title={reduced ? t.motionReducedInfo : undefined} onClick={toggle}>
      <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d={paused ? "m7 4 9 6-9 6Z" : "M7 4v12M13 4v12"} fill="none" stroke="currentColor" strokeWidth="1.5" /></svg><span>{paused ? t.resumeMotion : t.pauseMotion}</span>
    </button></div>
    <h1 className={styles.title}>
      <span className="sr-only">{t.hero0} {SERVICES.map(key=>t[key]).join(", ")}</span>
      {headlines[locale].map((text,i)=><span key={i} className={styles.headline} data-headline={SERVICES[i]} aria-hidden="true" style={{opacity:i===0?1:0}}>{text}</span>)}
    </h1>
    <svg ref={svg} className={styles.art} viewBox="0 0 350 320" role="img" aria-labelledby="mobile-system-title mobile-system-desc" data-stage="web">
      <title id="mobile-system-title">{t.scene}</title><desc id="mobile-system-desc">{l.description}</desc>
      <g data-back="" opacity="0" transform="rotate(-1.2 175 170)">
        <rect data-part="data" x="14" y="34" width="292" height="194" rx="7" fill="#dfe8f2" stroke="#afc1d4"/>
        <text data-data-title="" x="30" y="58" fill="#435d76" fontSize="15">{l.data}</text>
        {[0,1,2,3,4,5].map(i=><rect data-cell="" key={i} x={30+i*34} y="73" width="23" height="5" rx="2.5" fill={i%2?"#8ba7ca":"#285bd6"}/>)}
        <rect data-part="logic" x="32" y="50" width="304" height="202" rx="7" fill="#eaf0f8" stroke="#8da9cf"/>
        <rect data-part="badge" x="46" y="60" width="26" height="26" rx="7" fill="#285bd6"/>
        <text data-badge-text="" x="59" y="78" textAnchor="middle" fill="white" fontSize="15">{locale==="de"?"KI":"AI"}</text>
        <text data-logic-title="" x="82" y="77" fill="#334f73" fontSize="15">{l.rules}</text>
      </g>
      <g data-product="" transform="rotate(-1.2 175 170)">
        <rect data-part="seat" x="6" y="30" width="338" height="244" rx="10" fill="#dbe4ef"/>
        <rect data-part="frame" x="6" y="24" width="338" height="244" rx="10" fill="#fff" stroke="#829bb9"/>
        <path data-bar="" d="M6 52h338" stroke="#dce5ef"/>
        <g data-dots="" transform="translate(22 38)" fill="#93a9c2"><circle r="2"/><circle cx="9" r="2"/><circle cx="18" r="2"/></g>
        <text data-chrome="" x="56" y="42" fill="#53677a" fontSize="15">BayesSoft</text>
        <rect data-part="pill" x="162" y="34" width="26" height="3" rx="1.5" fill="#829bb9" opacity="0"/>
        <text data-ui-title="" x="24" y="78" fill="#172b43" fontSize="16" fontWeight="500">{l.workspace}</text>
        <rect data-part="sidebar" x="22" y="108" width="22" height="137" rx="5" fill="#e4ebf4"/>
        <path data-nav="" d="M28 123h10m-10 15h7m-7 15h10" fill="none" stroke="#7d98ba" strokeWidth="2" strokeLinecap="round"/>
        {[l.flow,l.record,l.analysis].map((label,i)=>{const [x,y,w,h]=POSES[0].cards[i];return <g key={i}>
          <rect data-card="" x={x} y={y} width={w} height={h} rx="7" fill={i===0?"#e9f0fc":i===1?"#f0f4f8":"#f6f9fd"}/>
          <text data-caption="" x={x+11} y={y+19} fill="#435d76" fontSize="15">{label}</text>
          <path data-mark="" d={i===2?`M${x+12} ${y+h-14} Q${x+w*.26} ${y+h-12} ${x+w*.45} ${y+h-23} T${x+w-13} ${y+h-31}`:`M${x+12} ${y+h-12}h${w-32}`} fill="none" stroke={i===1?"#9ab0cb":"#285bd6"} strokeWidth={i===2?2:3} strokeLinecap="round"/>
        </g>;})}
      </g>
    </svg>
    <ul className={styles.services} aria-label={t.services}>{SERVICES.map((key,i)=><li key={key} data-service={key} data-active={i===0} aria-current={i===0?"true":undefined}>{t[key]}</li>)}</ul>
    <div className="sr-only">{[t.hero1, t.hero2, t.hero3].join(" ")}{reduced && <p>{t.motionReducedInfo}</p>}</div>
  </section>;
}
