"use client";

import {useEffect} from 'react';

export function HistoryEnhancements(){
  useEffect(()=>{
    const root=document.querySelector<HTMLElement>('.history-page');
    if(!root)return;
    const sections=[...root.querySelectorAll<HTMLElement>('.history-chapter')];
    const links=[...root.querySelectorAll<HTMLAnchorElement>('.history-index a')];
    const progress=root.querySelector<HTMLElement>('.history-progress-fill');
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame=0;
    const update=()=>{
      frame=0;
      const travel=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      if(progress)progress.style.transform=`scaleX(${Math.min(1,Math.max(0,window.scrollY/travel))})`;
      let active=0;
      sections.forEach((section,i)=>{if(section.getBoundingClientRect().top<window.innerHeight*.42)active=i;});
      links.forEach((link,i)=>{if(i===active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
    };
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
    if(!reduced&&'IntersectionObserver'in window){
      root.classList.add('history-motion-ready');
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
      },{rootMargin:'0px 0px -8% 0px',threshold:.08});
      sections.forEach(section=>observer.observe(section));
      window.addEventListener('scroll',onScroll,{passive:true});
      update();
      return()=>{observer.disconnect();window.removeEventListener('scroll',onScroll);if(frame)cancelAnimationFrame(frame);};
    }
    window.addEventListener('scroll',onScroll,{passive:true});
    update();
    return()=>{window.removeEventListener('scroll',onScroll);if(frame)cancelAnimationFrame(frame);};
  },[]);
  return null;
}
