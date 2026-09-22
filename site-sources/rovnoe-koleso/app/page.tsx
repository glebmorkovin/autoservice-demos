import { IssueResolver } from "@/components/IssueResolver";
import {
  ArrowIcon,
  ClockIcon,
  ExternalIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
} from "@/components/Icons";
import { MobileMenu } from "@/components/MobileMenu";
import { getSiteUrl, services, site } from "@/data/site";

const basePath = "/autoservice-demos/rovnoe-koleso";

const navLinks = [
  ["Услуги", "#services"],
  ["Стоимость", "#price"],
  ["Как работаем", "#process"],
  ["Отзывы", "#reviews"],
  ["Контакты", "#contacts"],
] as const;

const processSteps = [
  ["01", "Звонок", "Расскажите, что случилось, и назовите автомобиль."],
  ["02", "Время", "Согласуйте удобное время визита по телефону."],
  ["03", "Осмотр", "Колесо осматривают и определяют подходящий вариант работ."],
  ["04", "Стоимость", "Объём и стоимость согласуются до выполнения работ."],
  ["05", "Работа", "После выполнения вы принимаете результат."],
] as const;

const faq = [
  {
    question: "Нужно ли записываться заранее?",
    answer:
      "Чтобы согласовать удобное время и не ехать вслепую, лучше предварительно позвонить по номеру +7 (911) 114-19-39.",
  },
  {
    question: "Какие услуги выполняет сервис?",
    answer:
      "Шиномонтаж, ремонт грыж и шин, вулканизация, правка и прокатка дисков, хранение и утилизация шин.",
  },
  {
    question: "Как узнать точную стоимость?",
    answer:
      "Позвоните, назовите автомобиль, размер колёс и задачу — обсудим стоимость и время визита.",
  },
  {
    question: "Можно ли отремонтировать грыжу на шине?",
    answer:
      "Ремонт грыж и шин входит в перечень услуг. Возможность восстановления конкретной шины определяется после осмотра.",
  },
  {
    question: "Можно ли оставить шины на хранение?",
    answer:
      "Принимаем шины на сезонное хранение. Позвоните перед визитом, чтобы обсудить условия и наличие места.",
  },
  {
    question: "С какими автомобилями и колёсами работает сервис?",
    answer:
      "Назовите марку, модель и размер колёс при звонке — подскажем по вашему автомобилю.",
  },
  {
    question: "Какой способ оплаты доступен?",
    answer:
      "Обсудите удобный способ оплаты при записи по телефону.",
  },
];

export default function Home() {
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    description: `${site.descriptor} во Всеволожске`,
    url: siteUrl,
    telephone: site.phoneDisplay,
    image: `${siteUrl}/images/12_rovnoe_koleso_01.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressShort,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "RU",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title },
      })),
    },
    sameAs: [site.yandexMaps, site.dgis],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Перейти к содержанию</a>

      <header className="site-header">
        <div className="shell header-inner">
          <a aria-label="Ровное Колесо — на главную" className="brand" href="#top">
            <span aria-hidden="true" className="brand__mark"><i /></span>
            <span className="brand__text"><strong>Ровное</strong><strong>Колесо</strong></span>
          </a>

          <nav aria-label="Основная навигация" className="desktop-nav">
            {navLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={site.phoneHref}>{site.phoneDisplay}</a>
            <a className="button button--compact" href={site.phoneHref}>Записаться<ArrowIcon /></a>
          </div>
          <MobileMenu />
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div aria-hidden="true" className="hero-orbit" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Всеволожск · шиномонтаж</p>
              <h1>Ровное Колесо — <span>шиномонтаж и ремонт шин</span></h1>
              <p className="hero-lead">
                Ремонт повреждений, правка дисков, хранение и утилизация шин
                на Пушкинской улице, 128А.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href={site.phoneHref}><PhoneIcon />Позвонить</a>
                <a className="button button--ghost" href={site.yandexMaps} rel="noopener noreferrer" target="_blank">
                  <MapPinIcon />Построить маршрут
                </a>
              </div>
              <dl className="hero-facts">
                <div><dt><MapPinIcon />Адрес</dt><dd>{site.addressShort}, {site.city}</dd></div>
                <div><dt><ClockIcon />График</dt><dd>{site.hours}</dd></div>
              </dl>
            </div>

            <div className="hero-media">
              <img
                alt="шиномонтажа и балансировки колеса"
                decoding="async"
                fetchPriority="high"
                height={941}
                loading="eager"
                src={`${basePath}/images/12_rovnoe_koleso_01.jpg`}
                width={1672}
              />
              
              <div className="hero-location"><span>Точка сервиса</span><strong>{site.addressShort}</strong><small>{site.city}</small></div>
            </div>
          </div>
          <div aria-hidden="true" className="shell measure-line"><span>ШИНЫ</span><i /><span>ДИСКИ</span></div>
        </section>

        <section aria-label="Выбор проблемы с колесом" className="shell issue-section"><IssueResolver /></section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Услуги</p><h2>Шиномонтаж<br />и ремонт колёс</h2></div>
              <p>Обслуживаем колёса и ремонтируем шины. Расскажите о своей задаче при записи.</p>
            </div>

            <div className="services-list">
              {services.map((service) => (
                <article className="service-row" key={service.number}>
                  <span className="service-row__number">{service.number}</span>
                  <div><h3>{service.title}</h3><p>{service.text}</p></div>
                  <a aria-label={`Уточнить услугу: ${service.title}`} href={site.phoneHref}><ArrowIcon /></a>
                </article>
              ))}
            </div>

            <div className="service-callout">
              <p>Не уверены, как назвать проблему?</p>
              <a href={site.phoneHref}><span>Опишите её по телефону</span><strong>{site.phoneDisplay}</strong><ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="section visual-section" aria-labelledby="visual-title">
          <div className="shell">
            <div className="section-heading section-heading--row">
              <div><p className="eyebrow">По задачам колеса</p><h2 id="visual-title">Ремонт. Точность. Хранение.</h2></div>
              
            </div>
            <div className="visual-grid">
              <figure className="visual-card visual-card--large">
                <img alt="ремонта повреждённой шины" decoding="async" height={941} loading="lazy" src={`${basePath}/images/12_rovnoe_koleso_02.jpg`} width={1672} />
                <figcaption><strong>Ремонт шин</strong></figcaption>
              </figure>
              <figure className="visual-card">
                <img alt="точной балансировки колеса" decoding="async" height={941} loading="lazy" src={`${basePath}/images/12_rovnoe_koleso_03.jpg`} width={1672} />
                <figcaption><strong>Шиномонтаж</strong></figcaption>
              </figure>
              <figure className="visual-card">
                <img alt="организованного хранения шин" decoding="async" height={941} loading="lazy" src={`${basePath}/images/12_rovnoe_koleso_04.jpg`} width={1672} />
                <figcaption><strong>Хранение шин</strong></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="price-section" id="price">
          <div aria-hidden="true" className="price-orbit" />
          <div className="shell price-grid">
            <div><p className="eyebrow eyebrow--light">Стоимость</p><h2>Рассчитаем под ваш автомобиль и задачу</h2></div>
            <div className="price-content">
              <p className="price-lead">Стоимость зависит от размера колёс, состояния шин и объёма работ. Позвоните нам, чтобы обсудить ваш комплект.</p>
              <div className="price-inputs" aria-label="Что назвать при звонке"><span>Автомобиль</span><span>Размер колёс</span><span>Тип повреждения</span></div>
              <a className="button button--light" href={site.phoneHref}><PhoneIcon />Получить расчёт по телефону</a>
            </div>
          </div>
        </section>

        <section className="section facts-section">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Почему удобно</p><h2>Ровное Колесо<br />во Всеволожске</h2></div>
              <p>Работаем с шинами и дисками на Пушкинской улице во Всеволожске.</p>
            </div>
            <div className="fact-grid">
              <article><span>01</span><h3>Каждый день</h3><p>Работаем ежедневно. Позвоните, чтобы выбрать время приезда.</p></article>
              <article><span>02</span><h3>Во Всеволожске</h3><p>Адрес точки: Пушкинская улица, 128А.</p></article>
              <article><span>03</span><h3>От ремонта до хранения</h3><p>Работы с шинами и дисками, сезонное хранение и утилизация.</p></article>
              <article><span>04</span><h3>Прямой контакт</h3><p>Запись и расчёт стоимости — по одному номеру телефона.</p></article>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="shell">
            <div className="section-heading section-heading--row">
              <div><p className="eyebrow">Порядок обращения</p><h2>От звонка до готового колеса</h2></div>
              <p>Простой ориентир для визита: детали конкретной работы уточняются по телефону и после осмотра.</p>
            </div>
            <ol className="process-list">
              {processSteps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="shell reviews-grid">
            <div>
              <p className="eyebrow eyebrow--light">Отзывы</p><h2>Актуальные отзывы — на картах</h2>
              <p className="reviews-lead">Посмотрите отзывы о Ровном Колесе на Яндекс Картах и в 2ГИС.</p>
            </div>
            <div className="review-links">
              <a href={site.yandexMaps} rel="noopener noreferrer" target="_blank"><span className="review-links__index">01</span><span><strong>Яндекс Карты</strong><small>Смотреть актуальные отзывы</small></span><ExternalIcon /></a>
              <a href={site.dgis} rel="noopener noreferrer" target="_blank"><span className="review-links__index">02</span><span><strong>2ГИС</strong><small>Открыть карточку сервиса</small></span><ExternalIcon /></a>
            </div>
          </div>
        </section>

        <section className="section contacts-section" id="contacts">
          <div className="shell">
            <div className="section-heading section-heading--row">
              <div><p className="eyebrow">Контакты</p><h2>Приезжайте на Пушкинскую, 128А</h2></div>
              <p>Перед выездом позвоните, чтобы уточнить загрузку и согласовать удобное время.</p>
            </div>
            <div className="contacts-grid">
              <div className="map-frame">
                <iframe allowFullScreen loading="eager" referrerPolicy="no-referrer-when-downgrade" src={site.yandexMapEmbed} title="Карта: Ровное Колесо, Пушкинская улица, 128А" />
                <a href={site.yandexMaps} rel="noopener noreferrer" target="_blank">Открыть большую карту<ExternalIcon /></a>
              </div>
              <div className="contact-card">
                <p className="contact-card__label">Ровное Колесо</p>
                <dl>
                  <div><dt><MapPinIcon />Адрес</dt><dd>{site.addressFull}</dd></div>
                  <div><dt><ClockIcon />График</dt><dd>{site.hours}</dd></div>
                  <div><dt><PhoneIcon />Телефон</dt><dd><a href={site.phoneHref}>{site.phoneDisplay}</a></dd></div>
                </dl>
                <div className="contact-card__actions">
                  <a className="button button--primary" href={site.phoneHref}><PhoneIcon />Позвонить</a>
                  <a className="button button--outline" href={site.yandexMaps} rel="noopener noreferrer" target="_blank">Яндекс Карты<ExternalIcon /></a>
                  <a className="button button--outline" href={site.dgis} rel="noopener noreferrer" target="_blank">Открыть в 2ГИС<ExternalIcon /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <p className="eyebrow">FAQ</p><h2>Перед визитом</h2>
              <p>Здесь — ответы на вопросы перед визитом. Для записи позвоните нам.</p>
              <a className="text-link" href={site.phoneHref}>{site.phoneDisplay}<ArrowIcon /></a>
            </div>
            <div className="faq-list">
              {faq.map((item, index) => (
                <details key={item.question}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<PlusIcon /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <a aria-label="Ровное Колесо — наверх" className="footer-brand" href="#top">Ровное <span>Колесо</span></a>
          <div className="footer-contact"><a href={site.phoneHref}>{site.phoneDisplay}</a><p>{site.addressShort}, {site.city}</p><p>{site.hours}</p></div>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} Ровное Колесо</p>
          <nav aria-label="Навигация в подвале">{navLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
          <a href="#top">Наверх ↑</a>
        </div>
      </footer>

      <div className="mobile-conversion" aria-label="Быстрые действия">
        <a href={site.phoneHref}><PhoneIcon /><span>Позвонить</span></a>
        <a href={site.yandexMaps} rel="noopener noreferrer" target="_blank"><MapPinIcon /><span>Маршрут</span></a>
      </div>

      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} type="application/ld+json" />
    </>
  );
}
