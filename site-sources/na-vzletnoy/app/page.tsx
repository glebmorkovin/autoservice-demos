import Image from "next/image";
import { MobileMenu } from "@/components/MobileMenu";

const basePath = "/autoservice-demos/na-vzletnoy";
const phonePrimary = "+7 (965) 046-40-20";
const phonePrimaryHref = "tel:+79650464020";
const phoneSecondary = "+7 (999) 229-38-17";
const phoneSecondaryHref = "tel:+79992293817";
const yandexUrl =
  "https://yandex.ru/maps/?text=%D0%9D%D0%B0%20%D0%92%D0%B7%D0%BB%D1%91%D1%82%D0%BD%D0%BE%D0%B9%2C%20%D0%92%D0%B7%D0%BB%D1%91%D1%82%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2024%2C%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA";
const yandexEmbedUrl =
  "https://yandex.ru/map-widget/v1/?text=%D0%9D%D0%B0%20%D0%92%D0%B7%D0%BB%D1%91%D1%82%D0%BD%D0%BE%D0%B9%2C%20%D0%92%D0%B7%D0%BB%D1%91%D1%82%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2024%2C%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA&z=16";
const dgisUrl =
  "https://2gis.ru/spb/search/%D0%9D%D0%B0%20%D0%92%D0%B7%D0%BB%D1%91%D1%82%D0%BD%D0%BE%D0%B9%20%D1%88%D0%B8%D0%BD%D0%BE%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA";
const currentYear = new Date().getFullYear();

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Стоимость" },
  { href: "#process", label: "Как работаем" },
  { href: "#contacts", label: "Контакты" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "На Взлётной",
  description:
    "Шиномонтаж, ремонт шин, правка и покраска дисков, ошиповка и хранение шин во Всеволожске.",
  telephone: ["+7-965-046-40-20", "+7-999-229-38-17"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Взлётная ул., 24",
    addressLocality: "Всеволожск",
    addressRegion: "Ленинградская область",
    addressCountry: "RU",
  },
  openingHours: "Mo-Su 09:00-21:00",
  areaServed: "Всеволожск",
  serviceType: [
    "Шиномонтаж",
    "Ремонт шин",
    "Правка и прокатка дисков",
    "Вулканизация",
    "Ошиповка",
    "Хранение шин",
    "Покраска дисков",
  ],
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.3 3.5 10 8 7.9 9.6c1.4 2.8 3.7 5.1 6.5 6.5L16 14l4.5 2.7-.8 3.5c-.2.8-.9 1.3-1.7 1.3C9.4 21.5 2.5 14.6 2.5 6c0-.8.5-1.5 1.3-1.7l3.5-.8Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="На Взлётной — к началу страницы">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="brand-copy">
              <strong>На Взлётной</strong>
              <small>шиномонтаж · Всеволожск</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={phonePrimaryHref}>
              {phonePrimary}
            </a>
            <a className="button button--compact" href={phonePrimaryHref}>
              Записаться
              <ArrowIcon />
            </a>
          </div>

          <MobileMenu links={navLinks} />
        </div>
      </header>

      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="hero" id="top">
          <Image
            className="hero-image"
            src={`${basePath}/images/hero-workshop.webp`}
            alt="современной зоны шиномонтажа"
            fill
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="runway-lines" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="shell hero-inner">
            <div className="hero-kicker reveal">
              <span className="status-dot" />
              Ежедневно · 09:00–21:00
            </div>
            <h1 className="reveal reveal--delay-1" aria-label="Шиномонтаж и ремонт колёс во Всеволожске">
              Шиномонтаж
              <span>и ремонт колёс</span>
              во Всеволожске
            </h1>
            <p className="hero-lead reveal reveal--delay-2">
              «На Взлётной» — шиномонтаж, ремонт шин, работы с дисками и сезонное хранение на Взлётной улице.
            </p>

            <div className="hero-actions reveal reveal--delay-3">
              <a className="button" href={phonePrimaryHref}>
                <PhoneIcon />
                Позвонить
              </a>
              <a
                className="button button--ghost"
                href={yandexUrl}
                target="_blank"
                rel="noreferrer"
              >
                <PinIcon />
                Построить маршрут
              </a>
            </div>

            
          </div>

          <div className="hero-index" aria-hidden="true">
            <b>47</b>
            <span>RUNWAY</span>
          </div>
        </section>

        <section className="quick-strip" aria-label="Основная информация">
          <div className="shell quick-strip__grid">
            <div className="quick-item">
              <span>Адрес</span>
              <strong>Взлётная ул., 24</strong>
              <small>Всеволожск, Ленинградская область</small>
            </div>
            <div className="quick-item">
              <span>График</span>
              <strong>09:00–21:00</strong>
              <small>ежедневно</small>
            </div>
            <div className="quick-item quick-item--phone">
              <span>Связаться</span>
              <a href={phonePrimaryHref}>{phonePrimary}</a>
              <a href={phoneSecondaryHref}>{phoneSecondary}</a>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow"><span>01</span> Направления работ</p>
              <h2>Всё, что касается шин и дисков</h2>
              <p>
                От сезонного шиномонтажа до ремонта повреждений, восстановления дисков и хранения шин.
              </p>
            </div>

            <div className="service-list">
              <article className="service-row">
                <div className="service-row__number">01</div>
                <div className="service-row__copy">
                  <p className="service-label">Шины</p>
                  <h3>Шиномонтаж и ошиповка</h3>
                  <ul>
                    <li>Шиномонтаж</li>
                    <li>Ошиповка</li>
                  </ul>
                </div>
                <figure className="service-visual service-visual--empty">
                  <div className="tire-mark" aria-hidden="true" />
                  <figcaption>Подготовка колёс к сезону</figcaption>
                </figure>
              </article>

              <article className="service-row service-row--image">
                <div className="service-row__number">02</div>
                <div className="service-row__copy">
                  <p className="service-label">Повреждения</p>
                  <h3>Ремонт шин</h3>
                  <ul>
                    <li>Устранение проколов</li>
                    <li>Ремонт порезов и деформаций</li>
                    <li>Вулканизация</li>
                  </ul>
                </div>
                <figure className="service-visual">
                  <Image
                    src={`${basePath}/images/tire-repair.webp`}
                    alt="ремонта повреждённой шины"
                    fill
                    unoptimized
                    sizes="(max-width: 820px) 100vw, 38vw"
                  />
                  
                </figure>
              </article>

              <article className="service-row service-row--image">
                <div className="service-row__number">03</div>
                <div className="service-row__copy">
                  <p className="service-label">Диски</p>
                  <h3>Восстановление дисков</h3>
                  <ul>
                    <li>Правка и прокатка дисков</li>
                    <li>Покраска дисков</li>
                  </ul>
                </div>
                <figure className="service-visual">
                  <Image
                    src={`${basePath}/images/wheel-straightening.webp`}
                    alt="работ по восстановлению автомобильного диска"
                    fill
                    unoptimized
                    sizes="(max-width: 820px) 100vw, 38vw"
                  />
                  
                </figure>
              </article>

              <article className="service-row service-row--image">
                <div className="service-row__number">04</div>
                <div className="service-row__copy">
                  <p className="service-label">Межсезонье</p>
                  <h3>Хранение шин</h3>
                  <p className="service-description">
                    Услуга сезонного хранения шин — без необходимости искать место дома или в гараже.
                  </p>
                </div>
                <figure className="service-visual">
                  <Image
                    src={`${basePath}/images/tire-storage.webp`}
                    alt="организованного хранения автомобильных шин"
                    fill
                    unoptimized
                    sizes="(max-width: 820px) 100vw, 38vw"
                  />
                  
                </figure>
              </article>
            </div>
          </div>
        </section>

        <section className="pricing section" id="prices">
          <div className="shell pricing-grid">
            <div className="pricing-title">
              <p className="eyebrow"><span>02</span> Стоимость</p>
              <h2>Цена — без догадок</h2>
              <p>
                Стоимость зависит от автомобиля, размера колёс, характера повреждения и объёма работ.
              </p>
            </div>

            <div className="price-callout">
              <span className="price-callout__line" aria-hidden="true" />
              <p className="price-callout__label">Как узнать цену</p>
              <h3>Назовите автомобиль и нужную услугу</h3>
              <p>
                Позвоните нам — обсудим стоимость и подберём время для обслуживания.
              </p>
              <div className="price-callout__actions">
                <a className="button" href={phonePrimaryHref}>
                  <PhoneIcon />
                  Уточнить стоимость
                </a>
                <a className="text-link" href="#services">
                  Посмотреть услуги <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="shell fact-rail" aria-label="Преимущества обращения">
            <div className="fact-rail__item">
              <b>09:00–21:00</b>
              <span>работа ежедневно</span>
            </div>
            <div className="fact-rail__item">
              <b>Шины + диски</b>
              <span>основные работы в одном месте</span>
            </div>
            <div className="fact-rail__item">
              <b>Хранение</b>
              <span>отдельная сезонная услуга</span>
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="shell process-layout">
            <div className="process-heading">
              <p className="eyebrow"><span>03</span> Порядок обращения</p>
              <h2>Понятно от звонка до приёмки</h2>
              <p>
                Универсальный сценарий помогает заранее согласовать задачу и не принимать решения вслепую.
              </p>
            </div>

            <ol className="process-steps">
              <li>
                <span>01</span>
                <div><h3>Позвоните</h3><p>Опишите автомобиль и нужную услугу, уточните свободное время.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>Покажите автомобиль</h3><p>Состояние шины или диска оценивается до начала работ.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>Согласуйте</h3><p>Объём и стоимость работ обсуждаются до выполнения.</p></div>
              </li>
              <li>
                <span>04</span>
                <div><h3>Примите работу</h3><p>После выполнения остаётся проверить результат и забрать автомобиль.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="shell reviews-layout">
            <div className="reviews-copy">
              <p className="eyebrow"><span>04</span> Отзывы</p>
              <h2>Актуальные отзывы — на картах</h2>
              <p>
                Читайте отзывы клиентов и делитесь своим опытом обслуживания в Яндекс Картах и 2ГИС.
              </p>
            </div>

            <div className="review-platforms">
              <a href={yandexUrl} target="_blank" rel="noreferrer">
                <span className="platform-code">Я</span>
                <div><small>Яндекс Карты</small><strong>Смотреть отзывы</strong></div>
                <ArrowIcon />
              </a>
              <a href={dgisUrl} target="_blank" rel="noreferrer">
                <span className="platform-code platform-code--dgis">2</span>
                <div><small>2ГИС</small><strong>Открыть карточку</strong></div>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="contacts-layout">
            <div className="map-wrap">
              <iframe
                src={yandexEmbedUrl}
                title="На Взлётной на карте Всеволожска"
                loading="eager"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-badge">Яндекс Карты · интерактивная карта</div>
            </div>

            <div className="contact-panel">
              <p className="eyebrow"><span>05</span> Как нас найти</p>
              <h2>Взлётная ул., 24</h2>
              <p className="contact-city">Всеволожск, Ленинградская область</p>

              <dl className="contact-details">
                <div><dt>График</dt><dd>Ежедневно<br />09:00–21:00</dd></div>
                <div><dt>Телефоны</dt><dd><a href={phonePrimaryHref}>{phonePrimary}</a><a href={phoneSecondaryHref}>{phoneSecondary}</a></dd></div>
              </dl>

              <div className="contact-actions">
                <a className="button" href={phonePrimaryHref}><PhoneIcon /> Позвонить</a>
                <a className="button button--ghost" href={yandexUrl} target="_blank" rel="noreferrer"><PinIcon /> Маршрут</a>
              </div>

              <div className="map-links">
                <a href={yandexUrl} target="_blank" rel="noreferrer">Открыть в Яндекс Картах <ArrowIcon /></a>
                <a href={dgisUrl} target="_blank" rel="noreferrer">Открыть в 2ГИС <ArrowIcon /></a>
              </div>

              <p className="address-caution">
                Ждём вас на Взлётной улице, 24. Позвоните, если нужна помощь с маршрутом.
              </p>
            </div>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="shell faq-layout">
            <div className="faq-heading">
              <p className="eyebrow"><span>06</span> Вопросы</p>
              <h2>Перед визитом</h2>
              <p>Если нужного ответа нет, позвоните — так быстрее уточнить детали именно по вашему автомобилю.</p>
            </div>

            <div className="faq-list">
              <details>
                <summary>Нужно ли записываться заранее?<span aria-hidden="true" /></summary>
                <p>Чтобы уточнить загруженность и свободное время, лучше позвонить перед визитом.</p>
              </details>
              <details>
                <summary>Как узнать стоимость работ?<span aria-hidden="true" /></summary>
                <p>Назовите по телефону автомобиль, размер колёс и нужную услугу. Для ремонта повреждений окончательный объём зависит от состояния шины или диска.</p>
              </details>
              <details>
                <summary>Какие услуги выполняет сервис?<span aria-hidden="true" /></summary>
                <p>Шиномонтаж, ремонт шин, устранение проколов, порезов и деформаций, правка и прокатка дисков, вулканизация, ошиповка, хранение шин и покраска дисков.</p>
              </details>
              <details>
                <summary>Можно ли отремонтировать прокол или порез?<span aria-hidden="true" /></summary>
                <p>Такие работы входят в перечень услуг. Возможность ремонта конкретного повреждения уточняется после осмотра.</p>
              </details>
              <details>
                <summary>Есть ли сезонное хранение шин?<span aria-hidden="true" /></summary>
                <p>Принимаем шины на хранение. Условия и наличие места обсудим по телефону.</p>
              </details>
              <details>
                <summary>Какие автомобили и размеры колёс обслуживаются?<span aria-hidden="true" /></summary>
                <p>Назовите марку автомобиля и размер колёс при звонке — обсудим обслуживание вашего комплекта.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="contact-teaser">
          <div className="shell contact-teaser__inner">
            <div>
              <p className="eyebrow"><span>07</span> Связаться</p>
              <h2>Позвоните перед визитом</h2>
            </div>
            <div className="contact-teaser__phones">
              <a className="button" href={phonePrimaryHref}><PhoneIcon /> {phonePrimary}</a>
              <a href={phoneSecondaryHref}>{phoneSecondary}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <div className="site-footer__brand">
            <div className="brand brand--footer">
              <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
              <span className="brand-copy"><strong>На Взлётной</strong><small>шиномонтаж · Всеволожск</small></span>
            </div>
            <p>Взлётная ул., 24<br />Ежедневно 09:00–21:00</p>
          </div>

          <nav className="footer-nav" aria-label="Навигация в подвале">
            {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            <a href="#faq">Вопросы</a>
          </nav>

          <div className="footer-contacts">
            <a href={phonePrimaryHref}>{phonePrimary}</a>
            <a href={phoneSecondaryHref}>{phoneSecondary}</a>
            <a href={yandexUrl} target="_blank" rel="noreferrer">Построить маршрут <ArrowIcon /></a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© {currentYear} «На Взлётной»</p>
          <p>Информация о стоимости и параметрах обслуживания уточняется по телефону.</p>
        </div>
      </footer>

      <nav className="mobile-conversion" aria-label="Быстрые действия">
        <a href={phonePrimaryHref}>
          <PhoneIcon />
          Позвонить
        </a>
        <a href={yandexUrl} target="_blank" rel="noreferrer">
          <PinIcon />
          Маршрут
        </a>
      </nav>
    </>
  );
}
