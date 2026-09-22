import {
  business,
  faqs,
  fullAddress,
  links,
  prices,
  processSteps,
  serviceGroups,
} from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

const basePath = "/autoservice-demos/mkservis";

const navigation = [
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Цены" },
  { href: "#process", label: "Как проходит работа" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: business.name,
  description:
    "Диагностика, ремонт автомобиля и шиномонтаж в Гатчине.",
  url: getSiteUrl(),
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: "RU",
  },
  openingHours: ["Mo-Fr 10:00-19:00", "Sa-Su 11:00-18:00"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги автосервиса",
    itemListElement: serviceGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    ),
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Перейти к содержимому
      </a>

      <header className="site-header">
        <div className="header-rail">
          <div className="container header-rail-inner">
            <span>{business.city} · {business.region}</span>
            <span className="header-hours">Режим работы: {business.hours}</span>
          </div>
        </div>

        <div className="container nav-shell">
          <a className="brand" href="#top" aria-label="МКСервис — на главную">
            <span className="brand-mark" aria-hidden="true">
              <span>МК</span>
            </span>
            <span className="brand-copy">
              <strong>МКСервис</strong>
              <small>автосервис · Гатчина</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={business.phoneHref}>
              {business.phone}
            </a>
            <a className="button button-primary button-small" href={business.phoneHref}>
              Записаться
            </a>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Открыть меню">
              <span></span><span></span><span></span>
            </summary>
            <nav aria-label="Мобильная навигация">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
              <a className="mobile-menu-phone" href={business.phoneHref}>{business.phone}</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="content">
        <section className="hero section-grid" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" aria-hidden="true"></span> Автосервис в Гатчине</p>
              <h1>
                Диагностика,
                <span>ремонт и шиномонтаж</span>
              </h1>
              <p className="hero-lead">
                МКСервис принимает автомобили на диагностику, ремонт двигателя,
                тормозной системы, ходовой и плановое обслуживание.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href={business.phoneHref}>Позвонить и записаться</a>
                <a className="button button-secondary" href={links.yandex} target="_blank" rel="noreferrer">
                  Построить маршрут
                </a>
              </div>

              <dl className="hero-facts">
                <div>
                  <dt>Адрес</dt>
                  <dd>{business.address}<br />{business.city}</dd>
                </div>
                <div>
                  <dt>Режим работы</dt>
                  <dd>Пн–пт 10:00–19:00<br />Сб–вс 11:00–18:00</dd>
                </div>
                <div>
                  <dt>Телефон</dt>
                  <dd><a href={business.phoneHref}>{business.phone}</a></dd>
                </div>
              </dl>
            </div>

            <div className="hero-visual">
              <img
                src={`${basePath}/images/06_mkservis_01.jpg`}
                alt="Автомобиль рядом с диагностическим оборудованием"
                width="1400"
                height="1050"
                loading="eager"
                fetchPriority="high"
              />
              <div className="scan-corner scan-corner-one" aria-hidden="true"></div>
              <div className="scan-corner scan-corner-two" aria-hidden="true"></div>
              <div className="diagnostic-card">
                <p>Направления работ</p>
                <ul>
                  <li><span></span>Диагностика</li>
                  <li><span></span>Двигатель</li>
                  <li><span></span>Тормоза и ходовая</li>
                  <li><span></span>Шиномонтаж</li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>

        <section className="task-strip" aria-label="Основные задачи">
          <div className="container task-strip-grid">
            <p>Можно обратиться, если:</p>
            <ul>
              <li>нужна диагностика</li>
              <li>есть вопросы по двигателю</li>
              <li>требуется ремонт тормозов или ходовой</li>
              <li>пора на плановое обслуживание</li>
            </ul>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Полный перечень</p>
                <h2>Услуги МКСервис</h2>
              </div>
              <p>
                От первичной проверки до ремонта основных узлов. Ниже — только
                направления, опубликованные для этого сервиса.
              </p>
            </div>

            <div className="service-index">
              {serviceGroups.map((group) => (
                <article className="service-row" key={group.number}>
                  <span className="service-number">{group.number}</span>
                  <div className="service-title">
                    <h3>{group.title}</h3>
                    <p>{group.lead}</p>
                  </div>
                  <ul className="service-list">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="visual-directions" aria-labelledby="visual-title">
          <div className="container">
            <div className="section-heading compact-heading">
              <p className="eyebrow">Основные направления</p>
              <h2 id="visual-title">Работа начинается с понимания задачи</h2>
            </div>

            <div className="visual-grid">
              <figure className="visual-panel visual-panel-large">
                <img
                  src={`${basePath}/images/06_mkservis_02.jpg`}
                  alt="Проверка двигателя диагностическим оборудованием"
                  width="1400"
                  height="1050"
                  loading="lazy"
                />
                <figcaption>
                  <span>01 · Диагностика</span>
                  <strong>Найти причину до начала ремонта</strong>
                  
                </figcaption>
              </figure>

              <figure className="visual-panel">
                <img
                  src={`${basePath}/images/06_mkservis_03.jpg`}
                  alt="Работа с тормозным механизмом автомобиля"
                  width="1400"
                  height="1050"
                  loading="lazy"
                />
                <figcaption>
                  <span>02 · Тормоза и ходовая</span>
                  <strong>Проверить узлы, влияющие на управление</strong>
                  
                </figcaption>
              </figure>

              <figure className="visual-panel">
                <img
                  src={`${basePath}/images/06_mkservis_04.jpg`}
                  alt="Проверка уровня моторного масла"
                  width="1400"
                  height="1050"
                  loading="lazy"
                />
                <figcaption>
                  <span>03 · Двигатель и ТО</span>
                  <strong>Обслужить автомобиль по текущей задаче</strong>
                  
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="price-section" id="prices">
          <div className="container price-grid">
            <div className="price-main">
              <div className="section-heading light-heading">
                <p className="eyebrow">Опубликованные цены</p>
                <h2>Ориентиры до визита</h2>
                <p>Итоговая стоимость зависит от автомобиля и объёма работ.</p>
              </div>

              <table className="price-table">
                <caption className="sr-only">Опубликованные цены на услуги МКСервис</caption>
                <tbody>
                  {prices.map((item) => (
                    <tr key={item.service}>
                      <th scope="row">{item.service}</th>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="price-note">
                Стоимость зависит от модели автомобиля и объёма работ. Обсудите необходимые работы при записи.
              </p>
            </div>

            <aside className="estimate-panel">
              <span className="estimate-code">CALC / 01</span>
              <h3>Нужна стоимость под ваш автомобиль?</h3>
              <p>Назовите марку, модель и опишите задачу — в сервисе подскажут, с чего начать.</p>
              <a className="button button-white" href={business.phoneHref}>Получить расчёт по телефону</a>
              <a className="estimate-phone" href={business.phoneHref}>{business.phone}</a>
            </aside>
          </div>
        </section>

        <section className="section facts-section" aria-labelledby="facts-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Почему удобно</p>
                <h2 id="facts-title">МКСервис в Гатчине</h2>
              </div>
              <p>Преимущества, которые следуют из фактического перечня услуг, адреса и режима работы.</p>
            </div>

            <div className="fact-grid">
              <article>
                <span>01</span>
                <h3>Диагностика и ремонт</h3>
                <p>Проводим диагностику, чтобы определить причину неисправности и необходимые работы.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Открыты в выходные</h3>
                <p>Сервис работает по будням и в субботу с воскресеньем — часы различаются.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Маршрут известен заранее</h3>
                <p>Адрес, телефон и ссылки на карты доступны на странице и всегда под рукой на мобильном.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section process-section section-grid" id="process">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Последовательность</p>
                <h2>Как проходит обращение</h2>
              </div>
              <p>Понятный сценарий от первого звонка до приёмки автомобиля.</p>
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
          <div className="container reviews-grid">
            <div>
              <p className="eyebrow">Отзывы клиентов</p>
              <h2>Свежие мнения — в карточках сервиса</h2>
            </div>
            <div className="reviews-copy">
              <p>
                Читайте отзывы клиентов о МКСервисе на Яндекс Картах и в 2ГИС.
              </p>
              <div className="review-actions">
                <a className="text-link" href={links.yandex} target="_blank" rel="noreferrer">Отзывы на Яндекс Картах <span>↗</span></a>
                <a className="text-link" href={links.dgis} target="_blank" rel="noreferrer">Карточка в 2ГИС <span>↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contacts">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Контакты</p>
                <h2>Как найти МКСервис</h2>
              </div>
              <p>Постройте маршрут в удобном приложении и позвоните перед выездом, чтобы уточнить загрузку.</p>
            </div>

            <div className="contact-grid">
              <div className="map-wrap">
                <iframe
                  src={links.yandexWidget}
                  title="МКСервис на Яндекс Картах"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
                <span className="map-fallback">Карта загружается с Яндекс Карт</span>
              </div>

              <div className="contact-card">
                <p className="contact-label">МКСервис · Гатчина</p>
                <h3>{business.address}</h3>
                <p className="contact-region">{business.city}, {business.region}</p>

                <dl className="contact-details">
                  <div><dt>Телефон</dt><dd><a href={business.phoneHref}>{business.phone}</a></dd></div>
                  <div><dt>Пн–пт</dt><dd>10:00–19:00</dd></div>
                  <div><dt>Сб–вс</dt><dd>11:00–18:00</dd></div>
                </dl>

                <div className="contact-actions">
                  <a className="button button-primary" href={business.phoneHref}>Позвонить</a>
                  <a className="button button-secondary" href={links.yandex} target="_blank" rel="noreferrer">Яндекс Карты</a>
                  <a className="button button-quiet" href={links.dgis} target="_blank" rel="noreferrer">Открыть в 2ГИС</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <p className="eyebrow">FAQ</p>
              <h2>Перед визитом</h2>
              <p>Ответы основаны только на опубликованной информации. Остальное лучше уточнить напрямую.</p>
              <a className="text-link" href={business.phoneHref}>Задать вопрос по телефону <span>→</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true"></span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <p className="eyebrow">МКСервис · Гатчина</p>
              <h2>Опишите задачу — начните со звонка</h2>
            </div>
            <div className="final-cta-actions">
              <a className="button button-white" href={business.phoneHref}>Позвонить {business.phone}</a>
              <a className="text-link text-link-light" href={links.yandex} target="_blank" rel="noreferrer">Построить маршрут <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="footer-brand" href="#top">МКСервис</a>
            <p>Диагностика, ремонт автомобиля и шиномонтаж в Гатчине.</p>
          </div>
          <nav aria-label="Навигация в подвале">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <address>
            <a href={business.phoneHref}>{business.phone}</a>
            <span>{fullAddress}</span>
            <span>{business.hours}</span>
          </address>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} МКСервис</span>
          <span>Запись на обслуживание по телефону</span>
        </div>
      </footer>

      <nav className="mobile-conversion-bar" aria-label="Быстрые действия">
        <a href={business.phoneHref}>Позвонить</a>
        <a href={links.yandex} target="_blank" rel="noreferrer">Маршрут</a>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
