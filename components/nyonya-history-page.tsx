import Image from 'next/image';
import {HistoryEnhancements} from '@/components/history-enhancements';
import {historyCopy} from '@/lib/history-copy';
import type {Locale} from '@/lib/i18n';

const sources=[
  {href:'https://www.nhb.gov.sg/peranakanmuseum/learn/about-the-peranakans',label:'About the Peranakans'},
  {href:'https://www.nhb.gov.sg/peranakanmuseum/galleries/tpmgallerylevel-2/ceramics-and-food-culture',label:'Ceramics and Food Culture'},
  {href:'https://www.nhb.gov.sg/peranakanmuseum/galleries/tpmgallerylevel-3/decorative-textiles',label:'Decorative Textiles'}
];

export function NyonyaHistoryContent({locale}:{locale:Locale}){
  const c=historyCopy[locale];
  return <main id="main" className="history-page">
    <HistoryEnhancements/>
    <div className="history-progress" aria-hidden="true"><span className="history-progress-fill"/></div>
    <section className="history-hero" aria-labelledby="history-title">
      <Image src="/assets/story-hero.webp" alt="" fill priority sizes="100vw" className="history-hero-image"/>
      <div className="history-hero-content container">
        <p className="history-kicker">BiBiChik <span aria-hidden="true">✦</span> Nyonya Heritage</p>
        <h1 id="history-title">{c.title}</h1>
        <p className="history-deck">{c.subtitle}</p>
        <a className="history-scroll-link" href="#history-introduction">{c.explore}<span aria-hidden="true">↓</span></a>
      </div>
      <span className="history-hero-mark" aria-hidden="true">N</span>
    </section>
    <section className="history-introduction container" id="history-introduction" aria-label={c.title}>
      <span className="history-intro-rule" aria-hidden="true"/>
      <p>{c.intro}</p>
      <span className="history-intro-ornament" aria-hidden="true">✦</span>
    </section>
    <div className="history-reading-layout container">
      <nav className="history-index" aria-label={c.explore}>
        <p className="history-index-title">{c.explore}</p>
        <ol>{c.chapters.map((chapter,i)=><li key={chapter.id}><a href={`#${chapter.id}`}><span>{String(i+1).padStart(2,'0')}</span>{chapter.title}</a></li>)}</ol>
      </nav>
      <div className="history-chapters">
        {c.chapters.map((chapter,i)=><section className={`history-chapter history-chapter-${i+1}`} id={chapter.id} key={chapter.id} aria-labelledby={`${chapter.id}-title`}>
          <div className="history-chapter-header"><span className="history-chapter-number" aria-hidden="true">{String(i+1).padStart(2,'0')}</span><div><p className="history-eyebrow">{chapter.eyebrow}</p><h2 id={`${chapter.id}-title`}>{chapter.title}</h2></div></div>
          <div className="history-chapter-grid">
            <div className="history-chapter-copy">{chapter.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div>
            <figure className="history-chapter-figure"><Image src={`/assets/${chapter.image}.webp`} alt={chapter.alt} fill sizes="(max-width: 900px) 100vw, 38vw"/><figcaption>{chapter.eyebrow}</figcaption></figure>
          </div>
        </section>)}
      </div>
    </div>
    <section className="history-ending"><div className="container"><span className="history-ending-symbol" aria-hidden="true">✦</span><p>{c.closing}</p></div></section>
    <aside className="history-sources container" aria-label={c.sources}><h2>{c.sources}</h2><p>{c.sourceNote}</p><ol>{sources.map(source=><li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}<span aria-hidden="true">↗</span></a></li>)}</ol></aside>
  </main>;
}
