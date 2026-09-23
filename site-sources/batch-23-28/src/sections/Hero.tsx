import {d,Actions,Photo,phone,Arrow} from '../components/UI';
export default function Hero(){return <section id="top" className={'hero hero-'+d.hero}>
 <div className="hero-copy"><p className="eyebrow">{d.tag}</p><h1>{d.title.map((s,i)=><span key={s} className={i?'title-second':''}>{s}</span>)}</h1><p className="hero-offer">{d.commercial.offer}</p><p className="hero-lead">{d.lead}</p><Actions/>
 <div className="hero-details"><div><small>Адрес</small><a href={d.maps.yandex} target="_blank" rel="noreferrer">{d.address}</a></div>{d.hours&&<div><small>Режим работы</small><strong>{d.hours}</strong></div>}</div></div>
 <Photo index={0} hero className="hero-photo"/>
 {d.stamp&&<div className="hero-stamp"><strong>{d.stamp}</strong><span>{d.stampLabel}</span></div>}
 {d.hero==='waypoint'&&<a className="waypoint-card" href={phone}><small>Ваш комплект</small><strong>Запись на шиномонтаж</strong><span>{d.business.phones[0]}<Arrow/></span></a>}
 {d.hero==='station'&&<div className="station-address"><span>Октябрьский<br/>проспект</span><b>1</b><small>Ежедневно<br/>09:00–20:00</small></div>}
 {d.hero==='signal'&&<div className="signal-route" aria-hidden="true"><i/><i/><i/></div>}
 {d.hero==='connect'&&<a className="connect-strip" href={phone}><span>Выездной шиномонтаж</span><strong>Вызвать шиномонтаж →</strong></a>}
 {d.hero==='matrix'&&<div className="matrix-index" aria-hidden="true">ДИАГНОСТИКА / РЕМОНТ / ОБСЛУЖИВАНИЕ</div>}
 {d.hero==='precision'&&<div className="precision-line" aria-hidden="true">ДОРОГА ЖИЗНИ, 18 <span>●</span> ВСЕВОЛОЖСК</div>}
 {d.hero==='motors'&&<div className="motors-tag" aria-hidden="true">ДИАГНОСТИКА / ДВИГАТЕЛЬ / ХОДОВАЯ</div>}
 {d.hero==='craft'&&<div className="craft-tag" aria-hidden="true">ШИНЫ • КОЛЁСА • СТЕКЛО</div>}
 </section>}
