import Image from "next/image";
import Header from "@/components/Header";
import ReviewsPanel from "@/components/ReviewsPanel";
import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  ExternalIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/Icons";
import { primaryPhone, siteData } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

const processSteps = [
  ["01", "Позвоните", "Расскажите, какая услуга нужна, и уточните время приезда."],
  ["02", "Покажите колесо", "На месте можно оценить состояние шины или диска."],
  ["03", "Согласуйте стоимость", "Цена определяется после уточнения радиуса и состояния."],
  ["04", "Примите работу", "После выполнения проверьте результат вместе с мастером."],
] as const;

const faqItems = [
  {
    question: "Нужно ли записываться заранее?",
    answer:
      "Лучше позвонить перед приездом. Так вы сможете уточнить текущую загрузку и точное время работы мастерской.",
  },
  {
    question: "Как узнать стоимость шиномонтажа?",
    answer:
      "Сообщите по телефону радиус колёс и опишите их состояние. Окончательную стоимость можно согласовать после осмотра.",
  },
  {
    question: "Какие услуги выполняет мастерская?",
    answer:
      "Выполняем шиномонтаж, балансировку и правку литых дисков.",
  },
  {
    question: "В какое время можно приехать?",
    answer:
      "Работаем ежедневно. Позвоните нам, чтобы выбрать время для обслуживания.",
  },
  {
    question: "Как найти шиномонтаж?",
    answer:
      "Адрес: ул. Плоткина, 11, Всеволожск. Ориентир — напротив дома 5. Ниже есть ссылки на Яндекс Карты и 2ГИС.",
  },
] as const;

export default function Home() {
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteData.name,
    description:
      "Шиномонтаж, балансировка и правка литых дисков на улице Плоткина во Всеволожске.",
    url: siteUrl,
    image: `${siteUrl}/images/workshop-hero.jpg`,
    telephone: siteData.phones.map((phone) => phone.display),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.address,
      addressLocality: "Всеволожск",
      addressRegion: "Ленинградская область",
      addressCountry: "RU",
    },
    areaServed: { "@type": "City", name: "Всеволожск" },
    hasMap: siteData.maps.yandex,
    serviceType: ["Шиномонтаж", "Балансировка колёс", "Правка литых дисков"],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Перейти к содержанию</a>
      <Header />

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Всеволожск · шиномонтажная мастерская</p>
              <h1>Шиномонтаж <span>на Плоткина, 11</span></h1>
              <p className="hero-lead">
                Шиномонтаж, балансировка и правка литых дисков. Позвоните перед
                приездом — уточним время и сориентируем по стоимости.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={primaryPhone.href}>
                  <PhoneIcon /> Позвонить
                </a>
                <a className="button button-outline" href={siteData.maps.yandex} target="_blank" rel="noreferrer">
                  <PinIcon /> Построить маршрут
                </a>
              </div>
              <div className="hero-facts" aria-label="Основная информация">
                <div className="hero-fact">
                  <PinIcon />
                  <span><strong>{siteData.address}</strong><small>{siteData.landmark}</small></span>
                </div>
                <div className="hero-fact">
                  <ClockIcon />
                  <span><strong>{siteData.hours}</strong><small>{siteData.hoursNote}</small></span>
                </div>
              </div>
            </div>

            <figure className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/autoservice-demos/plotkina11/images/workshop-hero.jpg"
                  alt="шиномонтажной мастерской"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
              </div>
              
              <div className="address-sign" aria-hidden="true">
                <span>ПЛОТКИНА</span><strong>11</strong><small>ВСЕВОЛОЖСК</small>
              </div>
            </figure>
          </div>
          <div className="hero-service-line">
            <div className="shell">
              <span>Шиномонтаж</span><i /><span>Балансировка</span><i /><span>Правка литых дисков</span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Услуги</p><h2>Работаем с шинами и дисками</h2></div>
              <p>Поможем с сезонной заменой шин, балансировкой и восстановлением дисков. Для записи позвоните нам.</p>
            </div>
            <div className="services-layout">
              {siteData.services.map((service, index) => (
                <article className={`service-card service-card-${index + 1}`} key={service.title}>
                  <div className="service-media">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes={index === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 34vw"}
                    />
                    
                  </div>
                  <div className="service-body">
                    <span className="service-number">{service.number}</span>
                    <div><h3>{service.title}</h3><p>{service.description}</p></div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="section price-section" id="price">
          <div className="shell price-grid">
            <div className="price-copy">
              <p className="eyebrow eyebrow-light">Стоимость</p>
              <h2>Точный расчёт — после уточнения деталей</h2>
              <p>Стоимость зависит от размера колеса, состояния шины и необходимых работ. Позвоните нам — обсудим вашу задачу.</p>
              <a className="button button-cream" href={primaryPhone.href}><PhoneIcon /> Получить расчёт</a>
            </div>
            <div className="price-ticket">
              <div className="ticket-head"><span>Для расчёта сообщите</span><strong>2 детали</strong></div>
              <ul>
                <li><CheckIcon /><span><strong>Радиус колеса</strong><small>Назовите маркировку или размер</small></span></li>
                <li><CheckIcon /><span><strong>Состояние колеса</strong><small>Опишите задачу или повреждение</small></span></li>
              </ul>
              <div className="ticket-phone"><span>Основной телефон</span><a href={primaryPhone.href}>{primaryPhone.display}</a></div>
            </div>
          </div>
        </section>

        <section className="section convenience-section">
          <div className="shell">
            <div className="section-heading compact-heading">
              <div><p className="eyebrow">Почему удобно</p><h2>Понятно, куда ехать и как связаться</h2></div>
            </div>
            <div className="fact-strips">
              <article><span>01</span><h3>Адрес с ориентиром</h3><p>Ул. Плоткина, 11 — напротив дома 5 во Всеволожске.</p></article>
              <article><span>02</span><h3>Работаем ежедневно</h3><p>Точные часы на нужный день удобно уточнить звонком.</p></article>
              <article><span>03</span><h3>Несколько видов работ</h3><p>Шиномонтаж, балансировка и правка литых дисков.</p></article>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="shell process-grid">
            <div className="process-intro">
              <p className="eyebrow">Как обратиться</p><h2>От звонка до готового колеса</h2>
              <p>Простой сценарий помогает заранее уточнить время, задачу и порядок расчёта.</p>
            </div>
            <ol className="process-list">
              {processSteps.map(([number, title, text]) => (
                <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Отзывы</p><h2>Читайте отзывы там, где они опубликованы</h2></div>
              <p>Мнения клиентов и ответы на отзывы — в карточках мастерской.</p>
            </div>
            <ReviewsPanel />
          </div>
        </section>

        <section className="contacts-section" id="contacts">
          <div className="contacts-grid">
            <div className="map-wrap">
              <iframe src={siteData.maps.embed} title="Карта проезда к шиномонтажу на улице Плоткина, 11" loading="eager" allowFullScreen />
              <span className="map-label">Карта Яндекса</span>
            </div>
            <div className="contacts-card">
              <p className="eyebrow eyebrow-light">Контакты</p><h2>Плоткина, 11</h2>
              <p className="contacts-location">{siteData.location}</p>
              <dl>
                <div><dt>Ориентир</dt><dd>{siteData.landmark}</dd></div>
                <div><dt>Режим работы</dt><dd>{siteData.hours}<small>{siteData.hoursNote}</small></dd></div>
                <div><dt>Телефоны</dt><dd className="contacts-phones">{siteData.phones.map((phone) => <a href={phone.href} key={phone.href}>{phone.display}</a>)}</dd></div>
              </dl>
              <div className="contact-actions">
                <a className="button button-cream" href={primaryPhone.href}><PhoneIcon /> Позвонить</a>
                <a className="button button-green-outline" href={siteData.maps.yandex} target="_blank" rel="noreferrer">Яндекс Карты <ExternalIcon /></a>
                <a className="button button-green-outline" href={siteData.maps.dgis} target="_blank" rel="noreferrer">Открыть в 2ГИС <ExternalIcon /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <p className="eyebrow">Частые вопросы</p><h2>Перед приездом</h2>
              <p>Если вашего вопроса нет в списке, позвоните — так быстрее всего уточнить детали.</p>
              <a className="text-link" href={primaryPhone.href}>{primaryPhone.display} <ArrowIcon /></a>
            </div>
            <div className="faq-list">
              {faqItems.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta-inner">
            <div><span className="eyebrow">Запись и расчёт</span><h2>Позвоните перед приездом</h2></div>
            <p>Назовите нужную услугу и параметры колеса — уточним время и порядок расчёта.</p>
            <a className="button button-primary" href={primaryPhone.href}><PhoneIcon /> {primaryPhone.display}</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><strong>{siteData.name}</strong><span>{siteData.address}, {siteData.location}</span></div>
          <nav aria-label="Навигация в подвале"><a href="#services">Услуги</a><a href="#price">Стоимость</a><a href="#reviews">Отзывы</a><a href="#contacts">Контакты</a></nav>
          <div className="footer-contact"><a href={primaryPhone.href}>{primaryPhone.display}</a><span>{siteData.hours} · часы уточните по телефону</span></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {siteData.name}</span><a href={siteData.maps.yandex} target="_blank" rel="noreferrer">Построить маршрут</a></div>
      </footer>

      <div className="mobile-action-bar" aria-label="Быстрые действия">
        <a href={primaryPhone.href}><PhoneIcon /> Позвонить</a>
        <a href={siteData.maps.yandex} target="_blank" rel="noreferrer"><PinIcon /> Маршрут</a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}

