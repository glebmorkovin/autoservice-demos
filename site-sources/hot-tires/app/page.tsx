import Image from "next/image";
import { MobileNav } from "@/components/MobileNav";
import { getYandexReviewsWidgetUrl, site } from "@/lib/site";

const basePath = "/autoservice-demos/hot-tires";

const serviceStories = [
  {
    number: "01",
    title: "Выездной шиномонтаж",
    text: "Когда проблема с колесом застала в дороге или во дворе, начните со звонка. Опишите ситуацию и адрес — формат выезда согласуют по телефону.",
    image: `${basePath}/images/hot-tires-spare-wheel.webp`,
    alt: "установки запасного колеса на дороге",
    position: "center 55%",
  },
  {
    number: "02",
    title: "Ремонт шин",
    text: "Повреждённую шину осмотрят и подскажут, возможен ли ремонт. Конкретный способ работы зависит от состояния колеса и уточняется после осмотра.",
    image: `${basePath}/images/hot-tires-tire-repair.webp`,
    alt: "процесса ремонта автомобильной шины",
    position: "center 52%",
  },
  {
    number: "03",
    title: "Балансировка",
    text: "Балансировка входит в перечень услуг Hot Tires. Подходящий формат и возможность выполнить работу в нужное время уточните при звонке.",
    image: `${basePath}/images/hot-tires-balancing.webp`,
    alt: "балансировки автомобильного колеса на стенде",
    position: "center 52%",
  },
];

const additionalServices = [
  {
    number: "04",
    title: "Установка запасного колеса",
    text: "Помощь с заменой повреждённого колеса на запасное.",
  },
  {
    number: "05",
    title: "Помощь на дороге",
    text: "Обращение при проблеме с колесом вне стационарной точки.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Позвоните",
    text: "Сообщите, что произошло и где находится автомобиль.",
  },
  {
    number: "02",
    title: "Уточните детали",
    text: "Назовите автомобиль и задачу — выезд, ремонт, запасное колесо или балансировка.",
  },
  {
    number: "03",
    title: "Согласуйте формат",
    text: "По телефону уточните возможность выезда, место и актуальную стоимость.",
  },
  {
    number: "04",
    title: "Передайте автомобиль",
    text: "После осмотра и согласования мастер сможет приступить к работе.",
  },
];

const faq = [
  {
    question: "Нужно ли записываться заранее?",
    answer:
      "Перед визитом или вызовом мастера лучше позвонить. Так можно сразу уточнить задачу, доступность нужной услуги и удобное время.",
  },
  {
    question: "Как узнать стоимость работ?",
    answer:
      "Стоимость зависит от автомобиля, характера повреждения и места выполнения работ. Позвоните нам — обсудим ситуацию.",
  },
  {
    question: "Можно ли вызвать мастера к автомобилю?",
    answer:
      "Да, выездной шиномонтаж входит в перечень услуг Hot Tires. Возможность выезда по конкретному адресу согласуйте по телефону.",
  },
  {
    question: "Поможете установить запасное колесо?",
    answer:
      "Поможем установить запасное колесо. Опишите ситуацию по телефону, чтобы согласовать выезд.",
  },
  {
    question: "Выполняете балансировку?",
    answer:
      "Да, балансировка входит в перечень услуг. Детали для вашего автомобиля уточните при записи.",
  },
  {
    question: "Как построить маршрут?",
    answer:
      "Hot Tires находится по адресу: д. Романовка, 9, Гатчинский район. В блоке контактов есть ссылки на Яндекс Карты и 2ГИС.",
  },
];

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
      <path d="M7.1 3.5 9.5 8 7.8 9.7c1.2 2.6 3.4 4.7 6 6l1.7-1.7 4.5 2.4v2.2c0 1-.8 1.8-1.8 1.8A15.8 15.8 0 0 1 3.6 5.3c0-1 .8-1.8 1.8-1.8h1.7Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M7 5h8v8M15 5 6 14" />
    </svg>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();
  const yandexReviewsWidgetUrl = getYandexReviewsWidgetUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    name: site.name,
    description:
      "Выездной шиномонтаж, ремонт шин, установка запасного колеса, балансировка и помощь на дороге.",
    telephone: "+79219532789",
    address: {
      "@type": "PostalAddress",
      streetAddress: "д. Романовка, 9",
      addressLocality: "д. Романовка",
      addressRegion: "Ленинградская область",
      addressCountry: "RU",
    },
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
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги Hot Tires",
      itemListElement: site.services.map((serviceName) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName,
        },
      })),
    },
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        К основному содержимому
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="signal-strip" aria-label="Статус работы">
        <div className="shell signal-strip-inner">
          <span className="status-dot" aria-hidden="true" />
          <strong>На связи круглосуточно</strong>
          <span className="signal-separator" aria-hidden="true" />
          <span>{site.location}</span>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="Hot Tires — на главную">
            <span>HOT</span>
            <i aria-hidden="true" />
            <span>TIRES</span>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#process">Как работаем</a>
            <a href="#cost">Стоимость</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a className="header-cta" href={site.phoneHref}>
              Вызвать мастера
              <ArrowIcon />
            </a>
          </div>

          <MobileNav />
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src={`${basePath}/images/hot-tires-roadside.webp`}
            alt="выездной помощи с колесом на дороге ночью"
            fill
            priority
            unoptimized
            quality={90}
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span>Hot Tires</span>
                Выездной шиномонтаж
              </p>
              <h1 id="hero-title">
                Помощь с колесом
                <em>там, где вы</em>
              </h1>
              <p className="hero-lead">
                Ремонт шин, установка запасного колеса, балансировка и помощь
                на дороге. Доступны круглосуточно.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href={site.phoneHref}>
                  <PhoneIcon />
                  Позвонить мастеру
                </a>
                <a
                  className="button button-ghost"
                  href={site.maps.yandex}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PinIcon />
                  Построить маршрут
                </a>
              </div>

              <a className="hero-phone" href={site.phoneHref}>
                <span>Один номер для связи</span>
                {site.phoneDisplay}
              </a>
            </div>

            <aside className="hero-facts" aria-label="Ключевая информация">
              <div className="hero-fact hero-fact-time">
                <span>24/7</span>
                <p>Круглосуточно</p>
              </div>
              <div className="hero-fact">
                <PinIcon />
                <div>
                  <span>Адрес</span>
                  <p>{site.address}</p>
                  <small>Гатчинский район</small>
                </div>
              </div>
              <div className="hero-fact">
                <ClockIcon />
                <div>
                  <span>Перед выездом</span>
                  <p>Позвоните и опишите ситуацию</p>
                </div>
              </div>
            </aside>
          </div>

          <div className="hero-marquee" aria-hidden="true">
            <span>ВЫЕЗД</span>
            <i />
            <span>РЕМОНТ ШИН</span>
            <i />
            <span>ЗАПАСНОЕ КОЛЕСО</span>
            <i />
            <span>БАЛАНСИРОВКА</span>
          </div>
        </section>

        <section className="services section-light" id="services" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading services-heading">
              <p className="section-kicker">Что делаем</p>
              <h2 id="services-title">
                С колесом — к нам.
                <br />
                С выездом — <span>к вам.</span>
              </h2>
              <p>
                Поможем с ремонтом колеса в сервисе или на выезде. Позвоните и расскажите, что случилось.
              </p>
            </div>

            <div className="service-stories">
              {serviceStories.map((service) => (
                <article className="service-story" key={service.title}>
                  <figure className="service-visual">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 800px) 100vw, 58vw"
                      style={{ objectPosition: service.position }}
                    />
                    
                  </figure>
                  <div className="service-copy">
                    <span>{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href={site.phoneHref}>
                      Уточнить по телефону
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="additional-services">
              <div className="additional-label">
                <span>Ещё услуги</span>
                <p>Услуги Hot Tires</p>
              </div>
              <div className="additional-list">
                {additionalServices.map((service) => (
                  <article key={service.title}>
                    <span>{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="availability" aria-label="Режим работы">
          <div className="shell availability-inner">
            <p>Колесо не выбирает время</p>
            <strong>Hot Tires на связи 24 / 7</strong>
            <a href={site.phoneHref}>
              {site.phoneDisplay}
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="process section-dark" id="process" aria-labelledby="process-title">
          <div className="shell">
            <div className="process-heading">
              <p className="section-kicker section-kicker-light">Как начать</p>
              <h2 id="process-title">
                Один звонок —
                <br />
                понятный следующий шаг
              </h2>
              <p>
                Без длинной формы: сначала коротко опишите ситуацию. Всё, что
                требует точного ответа, согласуйте напрямую с мастером.
              </p>
            </div>

            <ol className="process-list">
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
        </section>

        <section className="cost" id="cost" aria-labelledby="cost-title">
          <div className="cost-stripes" aria-hidden="true" />
          <div className="shell cost-inner">
            <div>
              <p className="section-kicker section-kicker-dark">Стоимость</p>
              <h2 id="cost-title">Рассчитаем под вашу задачу</h2>
            </div>
            <div className="cost-copy">
              <p>
                Точный тариф зависит от автомобиля и объёма работ. Сообщите,
                что случилось с колесом и где вы находитесь — актуальную
                стоимость уточнят по телефону до начала работ.
              </p>
              <a className="button button-dark" href={site.phoneHref}>
                Получить расчёт
                <ArrowIcon />
              </a>
              <small>Узнайте стоимость по телефону.</small>
            </div>
          </div>
        </section>

        <section className="facts section-light" aria-labelledby="facts-title">
          <div className="shell facts-grid">
            <div className="facts-title">
              <p className="section-kicker">Почему удобно</p>
              <h2 id="facts-title">Hot Tires рядом с вами</h2>
            </div>
            <article>
              <span>24/7</span>
              <h3>Круглосуточно</h3>
              <p>Связаться с Hot Tires можно в любое время суток.</p>
            </article>
            <article>
              <span>→</span>
              <h3>Есть выезд</h3>
              <p>Выездной шиномонтаж и помощь на дороге входят в перечень услуг.</p>
            </article>
            <article>
              <span>09</span>
              <h3>Адрес в Романовке</h3>
              <p>д. Романовка, 9, Гатчинский район.</p>
            </article>
          </div>
        </section>

        <section className="reviews section-dark" id="reviews" aria-labelledby="reviews-title">
          <div className="shell reviews-inner">
            <div>
              <p className="section-kicker section-kicker-light">Отзывы</p>
              <h2 id="reviews-title">Смотрите на независимых площадках</h2>
              <p>
                Отзывы клиентов Hot Tires можно прочитать на картах. Поделитесь и своим опытом обращения.
              </p>
            </div>
            {yandexReviewsWidgetUrl ? (
              <div className="reviews-widget">
                <iframe
                  src={yandexReviewsWidgetUrl}
                  title="Отзывы о Hot Tires на Яндекс Картах"
                  loading="eager"
                />
                <a href={site.maps.dgis} target="_blank" rel="noreferrer">
                  Открыть карточку в 2ГИС
                  <ExternalIcon />
                </a>
              </div>
            ) : (
              <div className="review-links">
                <a href={site.maps.yandex} target="_blank" rel="noreferrer">
                  <span>Я</span>
                  <div>
                    <small>Открыть карточку</small>
                    <strong>Яндекс Карты</strong>
                  </div>
                  <ExternalIcon />
                </a>
                <a href={site.maps.dgis} target="_blank" rel="noreferrer">
                  <span>2</span>
                  <div>
                    <small>Открыть карточку</small>
                    <strong>2ГИС</strong>
                  </div>
                  <ExternalIcon />
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="contacts" id="contacts" aria-labelledby="contacts-title">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="section-kicker section-kicker-light">Контакты</p>
              <h2 id="contacts-title">Найдите нас в Романовке</h2>

              <dl>
                <div>
                  <dt>Адрес</dt>
                  <dd>{site.address}, Гатчинский район</dd>
                </div>
                <div>
                  <dt>Режим работы</dt>
                  <dd>{site.hours}</dd>
                </div>
                <div>
                  <dt>Телефон</dt>
                  <dd>
                    <a href={site.phoneHref}>{site.phoneDisplay}</a>
                  </dd>
                </div>
              </dl>

              <div className="contact-actions">
                <a className="button button-primary" href={site.phoneHref}>
                  <PhoneIcon />
                  Позвонить
                </a>
                <a
                  className="button button-outline"
                  href={site.maps.yandex}
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс Карты
                  <ExternalIcon />
                </a>
                <a
                  className="button button-outline"
                  href={site.maps.dgis}
                  target="_blank"
                  rel="noreferrer"
                >
                  2ГИС
                  <ExternalIcon />
                </a>
              </div>

              <p className="contact-note">
                Перед выездом позвоните, чтобы уточнить задачу и точку встречи.
              </p>
            </div>

            <div className="map-wrap">
              <iframe
                src={site.maps.embed}
                title="Hot Tires на Яндекс Картах"
                loading="eager"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={site.maps.yandex} target="_blank" rel="noreferrer">
                Открыть большую карту
                <ExternalIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="faq section-light" aria-labelledby="faq-title">
          <div className="shell faq-grid">
            <div className="faq-heading">
              <p className="section-kicker">Коротко о главном</p>
              <h2 id="faq-title">Вопросы перед звонком</h2>
              <p>
                Не нашли ответ? Позвоните — так быстрее уточнить именно вашу
                ситуацию.
              </p>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
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

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="shell final-cta-inner">
            <p>Проблема с колесом?</p>
            <h2 id="final-cta-title">Начните со звонка</h2>
            <a href={site.phoneHref}>
              {site.phoneDisplay}
              <PhoneIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <a className="wordmark wordmark-footer" href="#top" aria-label="Hot Tires — наверх">
            <span>HOT</span>
            <i aria-hidden="true" />
            <span>TIRES</span>
          </a>

          <div className="footer-contact">
            <span>{site.address}, Гатчинский район</span>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <strong>{site.hours}</strong>
          </div>

          <nav aria-label="Навигация в подвале">
            <a href="#services">Услуги</a>
            <a href="#process">Как работаем</a>
            <a href="#cost">Стоимость</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
        <div className="shell footer-bottom">
          <span>© {currentYear} Hot Tires</span>
          <span>Выездной шиномонтаж · д. Романовка</span>
        </div>
      </footer>

      <nav className="mobile-conversion" aria-label="Быстрые действия">
        <a href={site.phoneHref}>
          <PhoneIcon />
          Позвонить
        </a>
        <a href={site.maps.yandex} target="_blank" rel="noreferrer">
          <PinIcon />
          Маршрут
        </a>
      </nav>
    </>
  );
}
