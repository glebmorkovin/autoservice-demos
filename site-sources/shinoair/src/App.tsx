import { ContactPlanner } from "./components/contact-planner";
import {
  ArrowIcon,
  ChevronIcon,
  ClockIcon,
  ExternalIcon,
  MapPinIcon,
  PhoneIcon,
} from "./components/icons";
import { faqs, services, siteData } from "./data/site";

const navigation = [
  { label: "Услуги", href: "#services" },
  { label: "Стоимость", href: "#price" },
  { label: "Как обратиться", href: "#process" },
  { label: "Контакты", href: "#contacts" },
];

const reviewsWidgetCandidate = import.meta.env.VITE_YANDEX_REVIEWS_WIDGET_URL;
const yandexReviewsWidgetUrl =
  reviewsWidgetCandidate?.startsWith("https://yandex.ru/") ||
  reviewsWidgetCandidate?.startsWith("https://yandex.com/")
    ? reviewsWidgetCandidate
    : undefined;
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const processSteps = [
  {
    number: "01",
    title: "Позвоните",
    text: "Подтвердите актуальную работу точки и доступность нужной услуги.",
  },
  {
    number: "02",
    title: "Опишите задачу",
    text: "Назовите автомобиль, услугу и местоположение, если нужен выезд.",
  },
  {
    number: "03",
    title: "Уточните условия",
    text: "Согласуйте формат, время и стоимость до начала работ.",
  },
  {
    number: "04",
    title: "Приезжайте или ждите выезд",
    text: "Получите точный ориентир для визита либо подтвердите точку выезда.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteData.name,
  description:
    "Шиномонтаж, грузовой и выездной шиномонтаж, ремонт и подкачка шин в Гатчинском районе.",
  telephone: siteData.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteData.locationShort,
    addressRegion: "Ленинградская область",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Гатчинский район, Ленинградская область",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги шиномонтажа",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>

      <header className="site-header">
        <div className="notice-strip">
          <div className="shell notice-inner">
            <span>Гатчинский район · шиномонтаж с выездом</span>
            <span className="notice-action">Перед поездкой позвоните</span>
          </div>
        </div>

        <div className="shell header-main">
          <a className="wordmark" href="#top" aria-label="Shinoair — на главную">
            <strong>Shinoair</strong>
            <small>шиномонтаж</small>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-contact">
            <a className="header-phone" href={siteData.phoneHref}>
              <PhoneIcon />
              <span>
                <small>Позвонить сейчас</small>
                {siteData.phoneDisplay}
              </span>
            </a>
            <a className="button button-cyan header-cta" href={siteData.phoneHref}>
              Уточнить время
              <ArrowIcon />
            </a>
          </div>

          <details className="mobile-menu">
            <summary>
              <span>Меню</span>
              <ChevronIcon />
            </summary>
            <nav aria-label="Мобильная навигация">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href={siteData.phoneHref}>Позвонить {siteData.phoneDisplay}</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={asset("/images/09_shinoair_01.jpg")}
            alt="выездного шиномонтажа у автомобиля"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="hero-grid-overlay" aria-hidden="true" />

          <div className="shell hero-content">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> Shinoair · Новосветское поселение
              </p>
              <h1 id="hero-title">
                Шиномонтаж
                <br />
                <em>с выездом</em>
                <br /> в Гатчинском районе
              </h1>
              <p className="hero-lead">
                Шиномонтаж, грузовое направление, ремонт и подкачка шин.
                Начните со звонка — уточните работу точки, возможность выезда и
                стоимость.
              </p>

              <div className="hero-actions">
                <a className="button button-cyan" href={siteData.phoneHref}>
                  <PhoneIcon />
                  Позвонить
                </a>
                <a
                  className="button button-outline"
                  href={siteData.maps.yandex}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPinIcon />
                  Открыть маршрут
                </a>
              </div>

              <p className="hero-warning">
                <span aria-hidden="true">!</span>
                {siteData.statusNote}
              </p>
            </div>

            <div className="hero-side" aria-label="Краткая информация">
              <div className="service-tag">
                <span>01</span>
                <strong>Выездной формат</strong>
              </div>
              <div className="service-tag">
                <span>02</span>
                <strong>Грузовые колёса</strong>
              </div>
              <div className="service-tag">
                <span>03</span>
                <strong>Ремонт и подкачка</strong>
              </div>
              
            </div>
          </div>

          <div className="shell hero-facts">
            <div>
              <PhoneIcon />
              <span>
                <small>Телефон</small>
                <a href={siteData.phoneHref}>{siteData.phoneDisplay}</a>
              </span>
            </div>
            <div>
              <MapPinIcon />
              <span>
                <small>Локация</small>
                {siteData.locationRegion}
              </span>
            </div>
            <div>
              <ClockIcon />
              <span>
                <small>Свяжитесь с нами</small>
                {siteData.hoursCatalog} · уточните по телефону
              </span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow dark-eyebrow">
                  <span /> Пять направлений
                </p>
                <h2>Шиномонтаж и помощь на дороге</h2>
              </div>
              <p>
                Расскажите о проблеме с колесом. Обсудим нужные работы и возможность обслуживания вашего автомобиля.
              </p>
            </div>

            <div className="primary-services">
              {services.slice(0, 2).map((service, index) => (
                <article key={service.title} className="primary-service">
                  <span className="service-number">0{index + 1}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <a href={siteData.phoneHref} aria-label={`Уточнить услугу: ${service.title}`}>
                    Уточнить
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>

            <div className="visual-services">
              {services.slice(2).map((service, index) => (
                <article key={service.title} className="visual-service">
                  <div className="service-image-wrap">
                    {"image" in service ? (
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                      />
                    ) : null}
                    
                  </div>
                  <div className="visual-service-copy">
                    <span>0{index + 3}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fact-band" aria-label="Преимущества формата">
          <div className="shell fact-band-grid">
            <div>
              <span>Формат</span>
              <strong>На точке и с выездом</strong>
            </div>
            <div>
              <span>Специализация</span>
              <strong>Шиномонтаж и грузовое направление</strong>
            </div>
            <div>
              <span>Контакт</span>
              <strong>Один прямой номер</strong>
            </div>
          </div>
        </section>

        <section className="estimate-section" id="price">
          <div className="shell estimate-grid">
            <div className="estimate-copy">
              <p className="eyebrow">
                <span /> Расчёт стоимости
              </p>
              <h2>
                Цена — после
                <br /> уточнения задачи
              </h2>
              <p>
                Стоимость зависит от автомобиля, типа колёс и характера повреждения. Позвоните нам, чтобы обсудить необходимые работы.
              </p>
              <ul className="estimate-factors" aria-label="Что сообщить при звонке">
                <li>Автомобиль или тип колёс</li>
                <li>Нужная услуга</li>
                <li>Местоположение для выезда</li>
                <li>Краткое описание ситуации</li>
              </ul>
              <a className="estimate-phone" href={siteData.phoneHref}>
                <PhoneIcon />
                <span>
                  <small>Узнать стоимость</small>
                  {siteData.phoneDisplay}
                </span>
              </a>
            </div>

            <ContactPlanner />
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow dark-eyebrow">
                  <span /> Как обратиться
                </p>
                <h2>Короткий путь от задачи к обслуживанию</h2>
              </div>
              <p>
                Сценарий помогает подготовиться к обращению. Конкретные условия
                и доступность работ подтвердите во время звонка.
              </p>
            </div>

            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="shell reviews-grid">
            <div>
              <p className="eyebrow">
                <span /> Отзывы и карточки
              </p>
              <h2>Отзывы о Shinoair</h2>
            </div>
            <div className="reviews-copy">
              {yandexReviewsWidgetUrl ? (
                <iframe
                  className="reviews-widget"
                  src={yandexReviewsWidgetUrl}
                  title="Отзывы о Shinoair на Яндекс Картах"
                  loading="eager"
                />
              ) : (
                <p>
                  Отзывы клиентов Shinoair доступны на картах. Поделитесь своим опытом после обращения.
                </p>
              )}
              <div className="map-link-row">
                <a
                  href={siteData.maps.yandex}
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс Карты
                  <ExternalIcon />
                </a>
                <a href={siteData.maps.dgis} target="_blank" rel="noreferrer">
                  2ГИС
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section contacts-section" id="contacts">
          <div className="shell">
            <div className="section-heading split-heading contact-heading">
              <div>
                <p className="eyebrow dark-eyebrow">
                  <span /> Контакты и маршрут
                </p>
                <h2>Сначала звонок. Затем — точный маршрут</h2>
              </div>
              <p>
                Позвоните нам перед поездкой — обсудим время обслуживания и подскажем въезд.
              </p>
            </div>

            <div className="contact-grid">
              <div className="map-frame">
                <iframe
                  src={siteData.maps.yandexEmbed}
                  title="Поиск Shinoair в Новосветском сельском поселении на Яндекс Картах"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <span className="map-disclaimer">
                  Маршрут к сервису
                </span>
              </div>

              <address className="contact-card">
                <div className="contact-block">
                  <span>Телефон</span>
                  <a className="contact-phone" href={siteData.phoneHref}>
                    {siteData.phoneDisplay}
                  </a>
                  <small>Нажмите, чтобы позвонить</small>
                </div>

                <div className="contact-block">
                  <span>Ориентир</span>
                  <strong>{siteData.locationShort}</strong>
                  <p>{siteData.locationRegion}</p>
                  <small>{siteData.locationNote}</small>
                </div>

                <div className="contact-block">
                  <span>Запись по телефону</span>
                  <strong>{siteData.hoursCatalog}</strong>
                  <small>{siteData.hoursNote}</small>
                </div>

                <div className="contact-warning">
                  <span aria-hidden="true">!</span>
                  <p>{siteData.statusNote}</p>
                </div>

                <div className="contact-actions">
                  <a className="button button-dark" href={siteData.phoneHref}>
                    <PhoneIcon />
                    Позвонить
                  </a>
                  <a
                    className="button button-map"
                    href={siteData.maps.yandex}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPinIcon />
                    Яндекс
                  </a>
                  <a
                    className="button button-map"
                    href={siteData.maps.dgis}
                    target="_blank"
                    rel="noreferrer"
                  >
                    2ГИС
                    <ExternalIcon />
                  </a>
                </div>
              </address>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <p className="eyebrow dark-eyebrow">
                <span /> Вопросы
              </p>
              <h2>Перед обращением</h2>
              <p>
                Здесь только ответы, которые можно дать без предположений. Всё,
                что зависит от автомобиля и текущей загрузки, уточняется по телефону.
              </p>
              <a href={siteData.phoneHref}>
                Задать вопрос
                <ArrowIcon />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <ChevronIcon />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <a className="wordmark footer-wordmark" href="#top">
              <strong>Shinoair</strong>
              <small>шиномонтаж</small>
            </a>
            <p>
              Шиномонтаж, грузовой и выездной шиномонтаж в Гатчинском районе.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-contact">
            <a href={siteData.phoneHref}>{siteData.phoneDisplay}</a>
            <p>{siteData.locationShort}</p>
            <p>{siteData.locationRegion}</p>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Shinoair</span>
          <span>Перед визитом подтвердите работу сервиса по телефону</span>
        </div>
      </footer>

      <div className="mobile-conversion-bar" aria-label="Быстрые действия">
        <a href={siteData.phoneHref}>
          <PhoneIcon />
          Позвонить
        </a>
        <a href={siteData.maps.yandex} target="_blank" rel="noreferrer">
          <MapPinIcon />
          Маршрут
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
