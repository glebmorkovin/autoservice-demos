import { SectionHeading } from "./components/SectionHeading";
import { faq, prices, serviceGroups, site, workSteps } from "./data/site";

const reviewWidgetUrl = "";

type ImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  fill?: boolean;
  unoptimized?: boolean;
};

function Image({ src, alt, sizes, priority }: ImageProps) {
  const imageSrc = src.startsWith("/")
    ? `${import.meta.env.BASE_URL}${src.slice(1)}`
    : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressCountry: "RU",
  },
  telephone: site.phones.map((phone) => phone.label),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [site.vk, site.maps.yandex, site.maps.dgis],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги ЮВС",
    itemListElement: serviceGroups.flatMap((group) =>
      group.services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
      })),
    ),
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="ЮВС — на главную">
            <span className="brand__name">ЮВС</span>
            <span className="brand__meta">автосервис · СПБ</span>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#prices">Цены</a>
            <a href="#how">Как работаем</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <div className="header-contact">
            <a className="header-phone" href={site.phones[0].href}>
              {site.phones[0].label}
            </a>
            <a className="button button--compact" href={site.phones[0].href}>
              Записаться
            </a>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Открыть меню">
              <span>Меню</span>
              <i aria-hidden="true" />
            </summary>
            <nav aria-label="Мобильная навигация">
              <a href="#services">Услуги</a>
              <a href="#prices">Цены</a>
              <a href="#how">Как работаем</a>
              <a href="#reviews">Отзывы</a>
              <a href="#contacts">Контакты</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span>Санкт-Петербург</span>
                <span className="status-dot">Открыто ежедневно</span>
              </div>
              <h1>
                ЮВС — шиномонтаж{" "}
                <span>и автосервис</span>
              </h1>
              <p className="hero-lead">
                Колёса, ходовая, двигатель, электрика и климатические системы
                на Английском проспекте.
              </p>

              <div className="hero-actions">
                <a className="button button--primary" href={site.phones[0].href}>
                  <span>Записаться по телефону</span>
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  className="button button--outline"
                  href={site.maps.yandex}
                  target="_blank"
                  rel="noreferrer"
                >
                  Построить маршрут
                </a>
              </div>

              <dl className="hero-facts">
                <div>
                  <dt>Адрес</dt>
                  <dd>{site.address}</dd>
                </div>
                <div>
                  <dt>График</dt>
                  <dd>{site.hours}</dd>
                </div>
                <div>
                  <dt>Телефон</dt>
                  <dd>
                    <a href={site.phones[0].href}>{site.phones[0].label}</a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/images/01_uvs_01.jpg"
                  alt="шиномонтажа в автомобильной мастерской"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
                <div className="hero-image-mark" aria-hidden="true">
                  <span>ШИНОМОНТАЖ</span>
                  <span>НАПРАВЛЕНИЕ 01</span>
                </div>
              </div>
              <div className="hero-street-tag">
                <span>точка сервиса</span>
                <strong>Английский пр., 9–11Д</strong>
              </div>
            </div>
          </div>
        </section>

        <div className="service-strip" aria-label="Основные направления">
          <div className="shell service-strip__inner">
            <span>Шиномонтаж</span>
            <i aria-hidden="true" />
            <span>Автосервис</span>
            <i aria-hidden="true" />
            <span>Выездной шиномонтаж</span>
            <i aria-hidden="true" />
            <span>Хранение колёс</span>
          </div>
        </div>

        <section className="section services" id="services">
          <div className="shell">
            <SectionHeading
              index="01"
              eyebrow="Полный перечень"
              title="С чем можно обратиться"
              description="Все направления ниже взяты из опубликованного перечня услуг ЮВС. Для конкретной неисправности лучше заранее уточнить возможность работы по телефону."
            />

            <div className="service-groups">
              {serviceGroups.map((group) => (
                <article className="service-group" key={group.code}>
                  <div className="service-group__header">
                    <span className="service-group__code">{group.code}</span>
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>
                  <ul>
                    {group.services.map((service, index) => (
                      <li key={service}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="services-cta">
              <p>
                Не нашли нужную работу в списке? Позвоните — по телефону можно
                уточнить, сможет ли сервис помочь с вашей задачей.
              </p>
              <a className="text-link" href={site.phones[0].href}>
                Позвонить в ЮВС <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section price-section" id="prices">
          <div className="shell">
            <SectionHeading
              index="02"
              eyebrow="Стоимость услуг"
              title="Ориентиры по стоимости"
              description="Начальные цены на основные работы. Итоговая стоимость зависит от автомобиля, расходных материалов и объёма обслуживания."
              inverted
            />

            <div className="price-layout">
              <div className="price-table" role="table" aria-label="Цены на услуги">
                {prices.map((item, index) => (
                  <div className="price-row" role="row" key={item.service}>
                    <span className="price-row__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span role="cell">{item.service}</span>
                    <strong role="cell">{item.price}</strong>
                  </div>
                ))}
              </div>

              <aside className="price-callout">
                <p className="eyebrow">Точный расчёт</p>
                <h3>Сначала автомобиль и задача — затем стоимость</h3>
                <p>
                  Назовите марку, модель и нужную услугу. Финальную цену можно
                  подтвердить после уточнения деталей или осмотра.
                </p>
                <a className="button button--light" href={site.phones[0].href}>
                  Уточнить стоимость
                </a>
                <small>Указанные цены не являются публичной офертой.</small>
              </aside>
            </div>
          </div>
        </section>

        <section className="section convenience">
          <div className="shell convenience-layout">
            <div className="convenience-title">
              <p className="eyebrow">Почему удобно</p>
              <h2>Сервис под разные автомобильные задачи</h2>
              <p>
                Шиномонтаж и обслуживание автомобиля в одном месте. Позвоните нам, чтобы подобрать время для нужных работ.
              </p>
            </div>
            <div className="convenience-list">
              <article>
                <span>09—21</span>
                <div>
                  <h3>Ежедневный график</h3>
                  <p>Можно выбрать время утром, днём или вечером.</p>
                </div>
              </article>
              <article>
                <span>4 типа</span>
                <div>
                  <h3>Разные форматы транспорта</h3>
                  <p>Легковые автомобили, внедорожники, микроавтобусы и мотоциклы.</p>
                </div>
              </article>
              <article>
                <span>Выезд</span>
                <div>
                  <h3>Выездной шиномонтаж</h3>
                  <p>Зону выезда и условия можно уточнить по телефону.</p>
                </div>
              </article>
              <article>
                <span>Колёса</span>
                <div>
                  <h3>Ремонт и хранение</h3>
                  <p>Работы с шинами и дисками дополняет сезонное хранение.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="work-visuals" aria-labelledby="visuals-title">
          <div className="shell">
            <div className="visuals-header">
              <div>
                <p className="eyebrow">Направления работ</p>
                <h2 id="visuals-title">Колёса, автомобиль, технические системы</h2>
              </div>
              
            </div>

            <div className="visual-grid">
              <figure className="visual-card visual-card--wide">
                <div className="visual-card__image">
                  <Image
                    src="/images/01_uvs_03.jpg"
                    alt="обслуживания автомобиля на подъёмнике"
                    fill
                    unoptimized
                    sizes="(max-width: 800px) 100vw, 55vw"
                  />
                </div>
                <figcaption>
                  <span>01 / автомобиль</span>
                  <strong>Осмотр и сервисные работы</strong>
                </figcaption>
              </figure>
              <figure className="visual-card visual-card--tall">
                <div className="visual-card__image">
                  <Image
                    src="/images/01_uvs_04.jpg"
                    alt="шиномонтажа и балансировки колеса"
                    fill
                    unoptimized
                    sizes="(max-width: 800px) 100vw, 40vw"
                  />
                </div>
                <figcaption>
                  <span>02 / колёса</span>
                  <strong>Шины, диски и хранение</strong>
                </figcaption>
              </figure>
              <figure className="visual-card visual-card--full">
                <div className="visual-card__image">
                  <Image
                    src="/images/01_uvs_02.jpg"
                    alt="диагностики автомобильного двигателя"
                    fill
                    unoptimized
                    sizes="100vw"
                  />
                </div>
                <figcaption>
                  <span>03 / диагностика</span>
                  <strong>Двигатель, электрика и климат</strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section process" id="how">
          <div className="shell">
            <SectionHeading
              index="03"
              eyebrow="Путь клиента"
              title="Как обычно проходит обращение"
              description="Простой ориентир от первого звонка до выполненной работы. Детали конкретного визита согласовываются с сервисом."
            />
            <ol className="process-list">
              {workSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="shell reviews-layout">
            <SectionHeading
              index="04"
              eyebrow="Независимые площадки"
              title="Отзывы клиентов ЮВС"
              description="Читайте отзывы о сервисе на картах. Будем рады вашему отзыву после обслуживания."
              inverted
            />

            {reviewWidgetUrl ? (
              <div className="reviews-widget">
                <iframe
                  src={reviewWidgetUrl}
                  title="Отзывы о ЮВС на Яндекс Картах"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="reviews-fallback">
                <div className="reviews-fallback__copy">
                  <span className="source-stamp">ОТЗЫВЫ / ЮВС</span>
                  <h3>Откройте свежие отзывы перед визитом</h3>
                  <p>
                    Читайте отзывы о ЮВС на Яндекс Картах и в 2ГИС.
                  </p>
                </div>
                <div className="review-links">
                  <a
                    href={site.maps.yandex}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Открыть отзывы о ЮВС на Яндекс Картах"
                  >
                    <span>Яндекс Карты</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={site.maps.dgisReviews}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Открыть отзывы о ЮВС в 2ГИС"
                  >
                    <span>2ГИС</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="shell faq-layout">
            <div className="faq-intro">
              <p className="eyebrow">Коротко о главном</p>
              <h2>Вопросы перед визитом</h2>
              <p>
                Если вопрос зависит от автомобиля или текущей загрузки,
                правильнее уточнить его напрямую у сервиса.
              </p>
              <a className="text-link" href={site.phones[0].href}>
                Задать вопрос по телефону <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="faq-list">
              {faq.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="shell contacts-grid">
            <div className="contacts-copy">
              <p className="eyebrow">ЮВС · Санкт-Петербург</p>
              <h2>Записаться и построить маршрут</h2>
              <div className="contact-detail">
                <span>Адрес</span>
                <strong>{site.fullAddress}</strong>
              </div>
              <div className="contact-detail">
                <span>График</span>
                <strong>{site.hours}</strong>
              </div>
              <div className="contact-detail contact-detail--phones">
                <span>Телефоны</span>
                {site.phones.map((phone) => (
                  <a href={phone.href} key={phone.href}>
                    {phone.label}
                  </a>
                ))}
              </div>

              <div className="contact-actions">
                <a className="button button--primary" href={site.phones[0].href}>
                  Позвонить
                </a>
                <a
                  className="button button--outline-dark"
                  href={site.maps.yandex}
                  target="_blank"
                  rel="noreferrer"
                >
                  Маршрут в Яндекс
                </a>
                <a
                  className="text-link"
                  href={site.maps.dgis}
                  target="_blank"
                  rel="noreferrer"
                >
                  Открыть в 2ГИС <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="map-frame">
              <iframe
                src={site.maps.embed}
                title="ЮВС на карте Санкт-Петербурга"
                loading="eager"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-pin" aria-hidden="true">
                <i />
                <span>ЮВС</span>
              </div>
              <div className="map-fallback">
                <span>Карта не загрузилась?</span>
                <a href={site.maps.yandex} target="_blank" rel="noreferrer">
                  Открыть Яндекс Карты
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <div>
            <a className="brand brand--footer" href="#top">
              <span className="brand__name">ЮВС</span>
              <span className="brand__meta">автосервис · СПБ</span>
            </a>
            <p>{site.fullAddress}</p>
            <p>{site.hours}</p>
          </div>
          <nav aria-label="Навигация в подвале">
            <a href="#services">Услуги</a>
            <a href="#prices">Цены</a>
            <a href="#how">Как работаем</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-contacts">
            {site.phones.map((phone) => (
              <a href={phone.href} key={phone.href}>
                {phone.label}
              </a>
            ))}
            <a href={site.vk} target="_blank" rel="noreferrer">
              Страница ВКонтакте ↗
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} ЮВС</span>
          <span>Цены не являются публичной офертой</span>
        </div>
      </footer>

      <nav className="mobile-actions" aria-label="Быстрые действия">
        <a href={site.phones[0].href}>Позвонить</a>
        <a href={site.maps.yandex} target="_blank" rel="noreferrer">
          Маршрут
        </a>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
