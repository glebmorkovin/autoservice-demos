import { MobileNav } from "@/components/MobileNav";
import { Reviews } from "@/components/Reviews";
import {
  allServices,
  faqItems,
  navigation,
  processSteps,
  serviceGroups,
  site,
} from "@/data/site";

const basePath = "/autoservice-demos/sinopsis-plus";

function getYandexWidgetUrl() {
  const candidate = process.env.NEXT_PUBLIC_YANDEX_REVIEWS_WIDGET_URL;

  if (!candidate) {
    return undefined;
  }

  try {
    const url = new URL(candidate);
    const isYandexHost =
      url.hostname === "yandex.ru" || url.hostname.endsWith(".yandex.ru");

    return url.protocol === "https:" && isYandexHost
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

const serviceCatalog = {
  "@type": "OfferCatalog",
  name: "Услуги Синопсис плюс",
  itemListElement: allServices.map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
    },
  })),
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  name: site.name,
  description:
    "Выездной шиномонтаж, ремонт шин, балансировка и работы с лобовым стеклом в Гатчине.",
  telephone: site.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressShort,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "City",
    name: site.city,
  },
  openingHoursSpecification: {
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
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: serviceCatalog,
  sameAs: [site.yandexUrl, site.dgisUrl],
};

export default function Home() {
  const yandexWidgetUrl = getYandexWidgetUrl();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержимому
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="wordmark" href="#top" aria-label="Синопсис плюс — на главную">
            <span className="wordmark__name">Синопсис плюс</span>
            <span className="wordmark__place">{site.city}</span>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="header-phone"
              href={site.phoneHref}
              aria-label={"Позвонить в Синопсис плюс: " + site.phoneDisplay}
            >
              <span className="status-dot" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a className="button button--lime button--header" href={site.phoneHref}>
              Записаться
            </a>
          </div>

          <MobileNav />
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--light">
                <span className="status-dot" aria-hidden="true" />
                {site.hours} · {site.city}
              </p>

              <h1>
                Выездной{" "}
                <span>шиномонтаж</span>{" "}
                в Гатчине
              </h1>

              <p className="hero__lead">
                Ремонт шин, балансировка, вулканизация и работы с лобовым
                стеклом. Можно обратиться круглосуточно.
              </p>

              <div className="hero__actions">
                <a
                  className="call-button"
                  href={site.phoneHref}
                  aria-label={"Позвонить в Синопсис плюс: " + site.phoneDisplay}
                >
                  <span>Позвонить сейчас</span>
                  <strong>{site.phoneDisplay}</strong>
                  <i aria-hidden="true">→</i>
                </a>
                <a
                  className="route-link"
                  href={site.yandexUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Построить маршрут <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="hero__meta">
                <div>
                  <span>Адрес</span>
                  <strong>{site.addressShort}</strong>
                </div>
                <div>
                  <span>Режим</span>
                  <strong>{site.hours}</strong>
                </div>
              </div>
            </div>

            <figure className="hero__visual">
              <picture className="responsive-image">
                <source
                  srcSet={`${basePath}/images/08_sinopsis_plus_01.webp`}
                  type="image/webp"
                />
                <img
                  src={`${basePath}/images/08_sinopsis_plus_01.jpg`}
                  alt="современной сервисной зоны"
                  width="1672"
                  height="941"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <div className="hero__shade" aria-hidden="true" />
              <div className="dispatch-marker">
                <span aria-hidden="true">+</span>
                <div>
                  <small>Формат помощи</small>
                  <strong>Выездной шиномонтаж</strong>
                </div>
              </div>
              
            </figure>
          </div>
        </section>

        <div className="signal-strip" aria-label="Ключевая информация">
          <div className="signal-strip__track">
            <span><b>24/7</b> круглосуточно</span>
            <span aria-hidden="true">•</span>
            <span><b>R12–R24</b> диапазон колёс</span>
            <span aria-hidden="true">•</span>
            <span><b>Гатчина</b> Дачный пер., 3</span>
            <span aria-hidden="true">•</span>
            <span><b>Выезд</b> по звонку</span>
          </div>
        </div>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">01 / Услуги</p>
                <h2>Помощь с колёсами и автостеклом</h2>
              </div>
              <p>
                Обслуживаем колёса и ремонтируем шины. Объём работ зависит от автомобиля и состояния детали.
              </p>
            </div>

            <article className="dispatch-service">
              <div className="dispatch-service__label">
                <span className="status-dot" aria-hidden="true" />
                Главное направление
              </div>
              <div className="dispatch-service__body">
                <h3>Выездной шиномонтаж</h3>
                <p>
                  Если помощь нужна вне стационарной точки, позвоните и сообщите
                  местоположение автомобиля. Возможность и условия выезда
                  согласуются по телефону.
                </p>
              </div>
              <a className="dispatch-service__call" href={site.phoneHref}>
                Вызвать по телефону <span aria-hidden="true">→</span>
              </a>
            </article>

            <div className="service-visuals">
              {serviceGroups.map((service) => (
                <article className="service-visual" key={service.number}>
                  <figure>
                    <picture className="responsive-image">
                      <source
                        srcSet={service.image.replace(".jpg", ".webp")}
                        type="image/webp"
                      />
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        width="1672"
                        height="941"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                    
                  </figure>
                  <div className="service-visual__content">
                    <span className="service-visual__number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="service-list" aria-label="Полный перечень услуг">
              <p className="service-list__title">Полный перечень</p>
              <ol>
                {allServices.map((service, index) => (
                  <li key={service}>
                    <span aria-hidden="true">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <strong>{service}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section price-section" id="price">
          <div className="container price-layout">
            <div className="price-copy">
              <p className="eyebrow eyebrow--light">02 / Стоимость</p>
              <h2>Сначала — задача. Затем — точный расчёт.</h2>
              <p>
                Цена зависит от автомобиля, размера колёс, повреждения и объёма
                работ. Позвоните, чтобы описать ситуацию и уточнить стоимость.
              </p>
              <a className="button button--lime" href={site.phoneHref}>
                Уточнить стоимость
              </a>
            </div>

            <div className="price-ticket">
              <div className="price-ticket__top">
                <span>Перед звонком</span>
                <span>Ваш автомобиль</span>
              </div>
              <div className="price-ticket__service">
                <p>Выездной шиномонтаж</p>
                <strong>Узнать стоимость</strong>
              </div>
              <p className="price-ticket__note">
                Назовите место, размер колёс и характер повреждения. Обсудим работы по телефону.
              </p>
            </div>
          </div>
        </section>

        <section className="section facts-process">
          <div className="container facts-process__grid">
            <div className="facts">
              <p className="eyebrow">03 / Почему удобно</p>
              <h2>Помощь с колёсами и автостёклами</h2>
              <div className="facts__list">
                <article>
                  <span>24/7</span>
                  <div>
                    <h3>Круглосуточный режим</h3>
                    <p>Связаться с сервисом можно в любое время суток.</p>
                  </div>
                </article>
                <article>
                  <span>→</span>
                  <div>
                    <h3>Выездной формат</h3>
                    <p>Выезжаем к автомобилю для шиномонтажа.</p>
                  </div>
                </article>
                <article>
                  <span>R</span>
                  <div>
                    <h3>Диапазон R12–R24</h3>
                    <p>Работаем с колёсами от R12 до R24.</p>
                  </div>
                </article>
                <article>
                  <span>+</span>
                  <div>
                    <h3>Шины и автостекло</h3>
                    <p>Два направления доступны по одному номеру телефона.</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="process">
              <p className="eyebrow">04 / Как обратиться</p>
              <h2>Понятный сценарий</h2>
              <ol>
                {processSteps.map((step) => (
                  <li key={step.number}>
                    <span>{step.number}</span>
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

        <section className="section reviews" id="reviews">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">05 / Отзывы</p>
                <h2>Отзывы клиентов</h2>
              </div>
              <p>
                Отзывы клиентов о Синопсис плюс — на Яндекс Картах и в 2ГИС.
              </p>
            </div>

            <Reviews
              yandexUrl={site.yandexUrl}
              dgisUrl={site.dgisUrl}
              yandexWidgetUrl={yandexWidgetUrl}
            />
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="contacts__map">
            <iframe
              src={site.mapEmbedUrl}
              title="Синопсис плюс на карте Гатчины"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <span className="contacts__map-label">Интерактивная карта Яндекс</span>
          </div>

          <div className="contacts__panel">
            <p className="eyebrow eyebrow--light">06 / Контакты</p>
            <h2>Дачный пер., 3<br />Гатчина</h2>

            <dl className="contact-data">
              <div>
                <dt>Телефон</dt>
                <dd><a href={site.phoneHref}>{site.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt>Режим работы</dt>
                <dd>{site.hours}</dd>
              </div>
              <div>
                <dt>Регион</dt>
                <dd>{site.region}</dd>
              </div>
            </dl>

            <div className="contacts__actions">
              <a className="button button--lime" href={site.phoneHref}>
                Позвонить
              </a>
              <a
                className="button button--outline-light"
                href={site.yandexUrl}
                target="_blank"
                rel="noreferrer"
              >
                Маршрут в Яндекс
              </a>
              <a
                className="button button--text-light"
                href={site.dgisUrl}
                target="_blank"
                rel="noreferrer"
              >
                Открыть в 2ГИС <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq__grid">
            <div className="faq__intro">
              <p className="eyebrow">07 / Вопросы</p>
              <h2>Перед обращением</h2>
              <p>
                Если ответа нет в списке, позвоните — так проще уточнить детали
                именно по вашему автомобилю.
              </p>
              <a className="text-link text-link--dark" href={site.phoneHref}>
                {site.phoneDisplay} <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="faq__items">
              {faqItems.map((item, index) => (
                <details key={item.question}>
                  <summary>
                    <span>{(index + 1).toString().padStart(2, "0")}</span>
                    <strong>{item.question}</strong>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta__inner">
            <div>
              <p className="eyebrow">Нужна помощь с автомобилем?</p>
              <h2>Опишите ситуацию по телефону</h2>
            </div>
            <a className="call-button call-button--dark" href={site.phoneHref}>
              <span>Позвонить круглосуточно</span>
              <strong>{site.phoneDisplay}</strong>
              <i aria-hidden="true">→</i>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__top">
          <div>
            <a className="wordmark wordmark--footer" href="#top">
              <span className="wordmark__name">{site.name}</span>
              <span className="wordmark__place">{site.city}</span>
            </a>
            <p>{site.descriptor} · {site.hoursShort}</p>
          </div>

          <nav aria-label="Навигация в подвале">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a href="#faq">Вопросы</a>
          </nav>

          <address>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <span>{site.addressFull}</span>
            <span>{site.hours}</span>
          </address>
        </div>

        <div className="container site-footer__bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Перед визитом уточните актуальные условия по телефону</span>
        </div>
      </footer>

      <nav className="mobile-conversion-bar" aria-label="Быстрые действия">
        <a href={site.phoneHref}>
          <span className="status-dot" aria-hidden="true" />
          Позвонить
        </a>
        <a href={site.yandexUrl} target="_blank" rel="noreferrer">
          Маршрут <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
