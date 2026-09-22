import Image from "next/image";
import { Icon } from "@/components/Icon";
import { MobileMenu } from "@/components/MobileMenu";
import { ReviewsPanel } from "@/components/ReviewsPanel";
import { WheelSelector } from "@/components/WheelSelector";
import { navigation, site } from "@/data/site";
import { getSiteUrl } from "@/data/site-url";

const basePath = "/autoservice-demos/shinomontal";

const processSteps = [
  {
    title: "Свяжитесь с сервисом",
    text: "Позвоните и кратко опишите задачу.",
  },
  {
    title: "Согласуйте визит",
    text: "Уточните текущую загрузку, адрес и удобное время.",
  },
  {
    title: "Покажите автомобиль",
    text: "Состояние шины или системы оценивают при осмотре.",
  },
  {
    title: "Уточните стоимость",
    text: "Состав и цена работ согласуются до выполнения.",
  },
  {
    title: "Примите работу",
    text: "После завершения проверьте результат вместе с сервисом.",
  },
] as const;

const conveniences = [
  {
    number: "01",
    title: "Каждый день",
    text: "Сервис работает ежедневно с 10:00 до 21:00.",
  },
  {
    number: "02",
    title: "Прямая связь",
    text: "Один телефон для записи, расчёта и уточнения адреса.",
  },
  {
    number: "03",
    title: "Не только сезонная смена",
    text: "Ремонт порезов, автоклимат и продажа б/у автошин.",
  },
  {
    number: "04",
    title: "В Кудрово",
    text: "Маршрут можно открыть в Яндекс Картах или 2ГИС.",
  },
] as const;

export default function Home() {
  const yandexMapWidget =
    process.env.NEXT_PUBLIC_YANDEX_MAP_WIDGET_URL ?? site.yandexWidgetFallback;
  const yandexReviewsWidget =
    process.env.NEXT_PUBLIC_YANDEX_REVIEWS_WIDGET_URL;
  const year = new Date().getFullYear();
  const publicUrl = getSiteUrl();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    name: site.name,
    description:
      "Шиномонтаж, замена шин, ремонт порезов, обслуживание автомобильных климатических систем и продажа б/у автошин в Кудрово.",
    telephone: "+79818363858",
    url: publicUrl,
    image: `${publicUrl}/images/shinomontal-hero.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Кудрово",
      addressRegion: "Ленинградская область",
      addressCountry: "RU",
    },
    areaServed: {
      "@type": "City",
      name: "Кудрово",
    },
    openingHours: site.openingHoursSchema,
    sameAs: [site.dgisUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги ШиноМонталь",
      itemListElement: site.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
        },
      })),
    },
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="ШиноМонталь — на главную">
            <span>Шино</span>Монталь<i aria-hidden="true" />
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a className="button button-small button-dark" href={site.phoneHref}>
              Записаться
              <Icon name="arrow" size={17} />
            </a>
          </div>

          <MobileMenu />
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> Кудрово · ежедневно 10:00–21:00
              </p>
              <h1>
                <span>ШиноМонталь</span>
                Шиномонтаж и сервис в Кудрово
              </h1>
              <p className="hero-lead">
                Замена шин, ремонт порезов, обслуживание автоклимата и продажа
                б/у автошин — с прямой записью по телефону.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href={site.phoneHref}>
                  <Icon name="phone" size={19} />
                  Позвонить
                </a>
                <a
                  className="button button-outline"
                  href={site.yandexUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon name="map" size={19} />
                  Построить маршрут
                </a>
              </div>

              <div className="hero-facts" aria-label="Контактная информация">
                <div>
                  <Icon name="clock" size={19} />
                  <span>
                    <small>График</small>
                    Ежедневно, 10:00–21:00
                  </span>
                </div>
                <div>
                  <Icon name="map" size={19} />
                  <span>
                    <small>Район</small>
                    Кудрово, Ленинградская область
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <Image
                alt="Фото шиномонтажной зоны с автомобилем и оборудованием"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                src={`${basePath}/images/shinomontal-hero.jpg`}
                unoptimized
              />
              
              <div className="tire-arcs" aria-hidden="true" />
            </div>

            <WheelSelector />
          </div>
        </section>

        <section className="service-strip" aria-label="Основные направления">
          <div className="container service-strip-inner">
            <span>Шиномонтаж</span>
            <i aria-hidden="true" />
            <span>Ремонт порезов</span>
            <i aria-hidden="true" />
            <span>Автоклимат</span>
            <i aria-hidden="true" />
            <span>Б/у автошины</span>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">01 / Услуги</p>
                <h2>Сфокусированы на шинах. Берёмся и за автоклимат.</h2>
              </div>
              <p>
                Шиномонтаж, ремонт колёс и обслуживание автомобиля в Кудрово.
              </p>
            </div>

            <div className="services-layout">
              <article className="service-visual-card">
                <Image
                  alt="Фото работы мастера на шиномонтажном станке"
                  fill
                  sizes="(max-width: 800px) 100vw, 45vw"
                  src={`${basePath}/images/shinomontal-tire-service.jpg`}
                  unoptimized
                />
                <div className="service-visual-overlay">
                  <span>01</span>
                  <h3>Шиномонтаж</h3>
                  <p>Запись и состав работ — по прямому телефону сервиса.</p>
                </div>
                
              </article>

              <div className="service-list">
                {site.services.slice(1).map((service) => (
                  <article className="service-row" key={service.index}>
                    <span>{service.index}</span>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <a
                      aria-label={`Уточнить услугу «${service.title}» по телефону`}
                      href={site.phoneHref}
                    >
                      <Icon name="arrow" size={21} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section convenience-section">
          <div className="container">
            <div className="section-heading compact-heading">
              <p className="section-kicker">02 / Почему удобно</p>
              <h2>Понятный локальный сервис без лишних шагов</h2>
            </div>

            <div className="convenience-list">
              {conveniences.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="price-section" id="price">
          <div className="container price-grid">
            <div className="price-copy">
              <p className="section-kicker section-kicker-light">03 / Стоимость</p>
              <h2>Сначала задача. Потом точная сумма.</h2>
              <p>
                Стоимость зависит от автомобиля и объёма работ. Сообщите модель,
                радиус колёс и нужную услугу — сервис уточнит детали по телефону.
              </p>
              <div className="price-actions">
                <a className="button button-primary" href={site.phoneHref}>
                  Получить расчёт
                  <Icon name="arrow" size={19} />
                </a>
                <a className="text-link-light" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <figure className="price-image">
              <Image
                alt="Фото аккуратного хранения шин и дисков"
                fill
                sizes="(max-width: 800px) 100vw, 42vw"
                src={`${basePath}/images/shinomontal-tire-storage.jpg`}
                unoptimized
              />
              
            </figure>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container process-grid">
            <div className="process-image-wrap">
              <Image
                alt="Фото балансировки автомобильного колеса"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                src={`${basePath}/images/shinomontal-balancing.jpg`}
                unoptimized
              />
              
              <div className="process-stamp" aria-hidden="true">
                <span>10</span>
                <i>—</i>
                <span>21</span>
              </div>
            </div>

            <div className="process-content">
              <div className="section-heading compact-heading">
                <p className="section-kicker">04 / Как проходит визит</p>
                <h2>От звонка до приёмки — по шагам</h2>
              </div>
              <ol className="process-list">
                {processSteps.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="container reviews-grid">
            <div className="reviews-copy">
              <p className="section-kicker">05 / Отзывы</p>
              <h2>Читайте актуальные отзывы там, где они опубликованы</h2>
              <p>
                Читайте отзывы клиентов о ШиноМонталь на Яндекс Картах и в 2ГИС.
              </p>
            </div>
            <ReviewsPanel yandexWidgetUrl={yandexReviewsWidget} />
          </div>
        </section>

        <section className="section contacts-section" id="contacts">
          <div className="container">
            <div className="section-heading split-heading contacts-heading">
              <div>
                <p className="section-kicker">06 / Контакты</p>
                <h2>ШиноМонталь в Кудрово</h2>
              </div>
              <p>
                Перед выездом позвоните: точный номер дома нужно подтвердить у
                сервиса.
              </p>
            </div>

            <div className="contact-grid">
              <div className="map-frame">
                <iframe
                  allowFullScreen
                  aria-label="Карта с поиском ШиноМонталь в Кудрово"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={yandexMapWidget}
                  title="ШиноМонталь на карте"
                />
                <a
                  className="map-open-link"
                  href={site.yandexUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Открыть большую карту <Icon name="arrow" size={18} />
                </a>
              </div>

              <aside className="contact-card" aria-label="Контакты ШиноМонталь">
                <div className="contact-card-top">
                  <span className="wordmark wordmark-light">
                    <span>Шино</span>Монталь<i aria-hidden="true" />
                  </span>
                  <p>{site.addressLabel}</p>
                  <small>{site.addressNote}</small>
                </div>

                <dl>
                  <div>
                    <dt>Телефон</dt>
                    <dd>
                      <a href={site.phoneHref}>{site.phoneDisplay}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>График</dt>
                    <dd>{site.hours}</dd>
                  </div>
                </dl>

                <div className="contact-buttons">
                  <a className="button button-primary" href={site.phoneHref}>
                    <Icon name="phone" size={19} />
                    Позвонить
                  </a>
                  <a
                    className="button button-outline-light"
                    href={site.dgisUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Открыть в 2ГИС
                    <Icon name="arrow" size={18} />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="section-heading compact-heading faq-heading">
              <p className="section-kicker">07 / Вопросы</p>
              <h2>Перед визитом</h2>
              <p>Короткие ответы на то, что важно уточнить заранее.</p>
              <a className="button button-dark" href={site.phoneHref}>
                Задать вопрос
                <Icon name="arrow" size={18} />
              </a>
            </div>

            <div className="faq-list">
              {site.faq.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.question}
                    <Icon name="chevron" size={21} />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <p className="section-kicker section-kicker-light">Запись по телефону</p>
              <h2>Опишите задачу — сервис подскажет следующий шаг</h2>
            </div>
            <a href={site.phoneHref}>
              <span>Позвонить сейчас</span>
              <strong>{site.phoneDisplay}</strong>
              <Icon name="arrow" size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="wordmark wordmark-light" href="#top">
            <span>Шино</span>Монталь<i aria-hidden="true" />
          </a>
          <nav aria-label="Навигация в подвале">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <span>{site.hours}</span>
            <span>{site.location}</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {year} ШиноМонталь</span>
          <span>Информация на сайте не является публичной офертой</span>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Быстрые действия">
        <a href={site.phoneHref}>
          <Icon name="phone" size={20} />
          Позвонить
        </a>
        <a href={site.yandexUrl} rel="noreferrer" target="_blank">
          <Icon name="map" size={20} />
          Маршрут
        </a>
      </nav>

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
    </>
  );
}
