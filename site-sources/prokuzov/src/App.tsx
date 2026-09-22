import { DiagnosticReveal } from "./components/DiagnosticReveal";
import { MobileMenu } from "./components/MobileMenu";

const phoneDisplay = "+7 (981) 753-27-14";
const phoneHref = "tel:+79817532714";
const yandexUrl =
  "https://yandex.ru/maps/?text=PROkuzov%20%D1%83%D0%BB.%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B6%D0%B8%D0%BD%D0%B0%2C%205%20%D0%93%D0%B0%D1%82%D1%87%D0%B8%D0%BD%D0%B0%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C";
const dgisUrl =
  "https://2gis.ru/spb/search/PROkuzov%20%D1%83%D0%BB.%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B6%D0%B8%D0%BD%D0%B0%2C%205%20%D0%93%D0%B0%D1%82%D1%87%D0%B8%D0%BD%D0%B0%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C";
const mapEmbedUrl =
  "https://yandex.ru/map-widget/v1/?mode=search&text=%D1%83%D0%BB.%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B6%D0%B8%D0%BD%D0%B0%2C%205%2C%20%D0%93%D0%B0%D1%82%D1%87%D0%B8%D0%BD%D0%B0&z=16";
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const serviceGroups = [
  {
    number: "01",
    title: "Восстановление кузова",
    note: "От диагностики повреждений до ремонта отдельных элементов",
    items: [
      "Диагностика кузова",
      "Кузовной ремонт",
      "Восстановление геометрии кузова",
      "Ремонт и замена стоек кузова",
      "Ремонт багажника",
      "Ремонт и замена дверей",
      "Ремонт и замена крыла",
      "Ремонт крыши",
      "Сварочные работы по кузову",
    ],
  },
  {
    number: "02",
    title: "Полировка и уход",
    note: "Работа с поверхностями кузова, стёкол и дисков",
    items: [
      "Детейлинг",
      "Полировка кузова",
      "Полировка стёкол",
      "Полировка дисков",
      "Воск",
      "Антидождь для стёкол",
    ],
  },
  {
    number: "03",
    title: "Защита поверхностей",
    note: "Решения для защиты лакокрасочного покрытия",
    items: ["Защитные покрытия", "Антигравийная плёнка"],
  },
];

const processSteps = [
  ["01", "Свяжитесь", "Позвоните и кратко опишите повреждение или нужную услугу."],
  ["02", "Покажите задачу", "Уточните по телефону, как передать фото, либо договоритесь об осмотре."],
  ["03", "Согласуйте", "После оценки обсудите объём работ, стоимость и подходящее время."],
  ["04", "Примите работу", "После завершения осмотрите результат и задайте оставшиеся вопросы."],
];

const faq = [
  {
    question: "Нужно ли записываться заранее?",
    answer:
      "Чтобы согласовать удобное время и не ехать напрасно, лучше сначала позвонить по номеру +7 (981) 753-27-14.",
  },
  {
    question: "Как узнать стоимость кузовного ремонта?",
    answer:
      "Стоимость зависит от автомобиля, повреждения и объёма работ. Позвоните нам, чтобы договориться об осмотре.",
  },
  {
    question: "Можно ли оценить повреждение по фотографии?",
    answer:
      "Фото помогает предварительно понять задачу. Позвоните — уточните удобный способ передачи снимков и потребуется ли очный осмотр.",
  },
  {
    question: "Какие кузовные детали ремонтируют?",
    answer:
      "Ремонтируем стойки кузова, багажник, двери, крылья и крышу. Восстанавливаем геометрию и выполняем сварочные работы.",
  },
  {
    question: "Работает ли сервис с моей маркой автомобиля?",
    answer:
      "Назовите марку, модель, год выпуска и задачу по телефону — обсудим возможность ремонта.",
  },
  {
    question: "Сколько времени займёт ремонт?",
    answer:
      "Срок зависит от характера повреждения и согласованного объёма работ. Уточните ориентир после фото или осмотра автомобиля.",
  },
  {
    question: "Где находится PROkuzov и когда работает?",
    answer:
      "Адрес: Гатчина, ул. Жемчужина, 5. График: с понедельника по субботу, с 10:00 до 21:00.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "PROkuzov",
  description:
    "Кузовной ремонт, диагностика кузова, полировка и защитные покрытия в Гатчине.",
  telephone: "+79817532714",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Жемчужина, 5",
    addressLocality: "Гатчина",
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
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Гатчина",
  },
  sameAs: [yandexUrl, dgisUrl],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержимому
      </a>

      <header className="site-header">
        <div className="header-inner shell">
          <a className="wordmark" href="#top" aria-label="PROkuzov — на главную">
            PRO<span>kuzov</span>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#estimate">Стоимость</a>
            <a href="#process">Процесс</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={phoneHref}>
              {phoneDisplay}
            </a>
            <a className="button button--compact" href={phoneHref}>
              Записаться
            </a>
          </div>
          <MobileMenu />
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> Кузовная студия · Гатчина
              </p>
              <h1>
                Кузовной ремонт
                <br />
                <em>в Гатчине</em> — без догадок о цене
              </h1>
              <p className="hero-lead">
                Диагностика и восстановление кузова, полировка и защитные
                покрытия. Стоимость рассчитывается по вашему автомобилю — после
                фото или осмотра.
              </p>

              <div className="hero-cta">
                <a className="button" href={phoneHref}>
                  Позвонить <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#estimate">
                  Как получить оценку
                </a>
              </div>

              <dl className="hero-facts">
                <div>
                  <dt>Адрес</dt>
                  <dd>Гатчина, ул. Жемчужина, 5</dd>
                </div>
                <div>
                  <dt>График</dt>
                  <dd>пн–сб 10:00–21:00</dd>
                </div>
              </dl>
            </div>

            <DiagnosticReveal />
          </div>
          <div className="hero-index" aria-hidden="true">
            47°
          </div>
        </section>

        <section className="service-intro section shell" id="services">
          <div className="section-heading">
            <p className="section-kicker">Направления работ</p>
            <h2>От формы металла до финиша поверхности</h2>
          </div>
          <p className="section-intro-copy">
            Кузовной ремонт и восстановление автомобиля. Выберите нужное направление и позвоните для записи.
          </p>
        </section>

        <section className="services shell" aria-label="Услуги PROkuzov">
          {serviceGroups.map((group) => (
            <article className="service-group" key={group.number}>
              <div className="service-group-heading">
                <span>{group.number}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.note}</p>
                </div>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                    <i aria-hidden="true">↘</i>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="estimate section" id="estimate">
          <div className="estimate-inner shell">
            <div className="estimate-title">
              <p className="section-kicker section-kicker--light">Стоимость</p>
              <h2>Сначала — задача. Затем — честный расчёт.</h2>
            </div>
            <div className="estimate-copy">
              <p className="estimate-lead">
                Стоимость кузовного ремонта зависит от автомобиля, характера повреждения и объёма работ. Договоритесь об осмотре по телефону.
              </p>
              <ol className="estimate-steps">
                <li>
                  <span>01</span>
                  <p>Сделайте общий кадр автомобиля и крупные планы повреждения.</p>
                </li>
                <li>
                  <span>02</span>
                  <p>Позвоните и уточните удобный способ передачи фотографий.</p>
                </li>
                <li>
                  <span>03</span>
                  <p>При необходимости согласуйте осмотр для точного расчёта.</p>
                </li>
              </ol>
              <div className="estimate-actions">
                <a className="button button--copper" href={phoneHref}>
                  Оценить ремонт по фото
                </a>
                <span>Фото не заменяет очный осмотр, если он потребуется.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="visual-work section shell" aria-labelledby="visual-work-title">
          <div className="section-heading section-heading--wide">
            <p className="section-kicker">Визуально о работах</p>
            <h2 id="visual-work-title">Три уровня внимания к автомобилю</h2>
          </div>

          <div className="work-grid">
            <figure className="work-figure work-figure--large">
              <div className="work-image">
                <img
                  src={asset("/images/prokuzov-body-repair.jpg")}
                  alt="Рихтовка кузовной детали"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span>01 / Форма</span>
                <strong>Ремонт и восстановление кузовных элементов</strong>
              </figcaption>
            </figure>

            <figure className="work-figure work-figure--small">
              <div className="work-image">
                <img
                  src={asset("/images/prokuzov-polishing.jpg")}
                  alt="Машинная полировка кузова"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span>02 / Поверхность</span>
                <strong>Полировка кузова, стёкол и дисков</strong>
              </figcaption>
            </figure>

            <figure className="work-figure work-figure--wide">
              <div className="work-image">
                <img
                  src={asset("/images/prokuzov-glass-care.jpg")}
                  alt="Работа с автомобильным стеклом"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span>03 / Защита</span>
                <strong>Уход за стёклами и защитные покрытия</strong>
              </figcaption>
            </figure>
          </div>
          
        </section>

        <section className="facts section">
          <div className="shell facts-grid">
            <div className="facts-heading">
              <p className="section-kicker">Почему удобно</p>
              <h2>Кузовные работы в Гатчине</h2>
            </div>
            <article>
              <span>01</span>
              <h3>Кузовной профиль</h3>
              <p>
                Диагностика, геометрия, ремонт деталей, сварочные работы и
                финишный уход собраны в одном перечне услуг.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>До 21:00</h3>
              <p>
                PROkuzov работает с понедельника по субботу с 10:00 до 21:00.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>В Гатчине</h3>
              <p>
                Сервис находится по адресу: ул. Жемчужина, 5. Маршрут можно
                открыть в Яндекс Картах или 2ГИС.
              </p>
            </article>
          </div>
        </section>

        <section className="process section shell" id="process">
          <div className="process-heading">
            <p className="section-kicker">Порядок обращения</p>
            <h2>Путь от первого звонка до приёмки</h2>
            <p>
              Универсальный сценарий, который помогает заранее понять следующий
              шаг. Детали конкретной работы согласуйте с сервисом.
            </p>
          </div>
          <ol className="process-list">
            {processSteps.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="reviews section" id="reviews">
          <div className="shell reviews-grid">
            <div className="reviews-copy">
              <p className="section-kicker section-kicker--light">Отзывы</p>
              <h2>Актуальные мнения — в карточках сервиса</h2>
              <p>
                Читайте отзывы клиентов о PROkuzov на Яндекс Картах и в 2ГИС.
              </p>
            </div>
            <div className="review-links">
              <a href={yandexUrl} target="_blank" rel="noopener noreferrer">
                <span>Яндекс Карты</span>
                <strong>Смотреть отзывы</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a href={dgisUrl} target="_blank" rel="noopener noreferrer">
                <span>2ГИС</span>
                <strong>Открыть карточку</strong>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>
        </section>

        <section className="contacts section shell" id="contacts">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="section-kicker">Контакты</p>
              <h2>PROkuzov в Гатчине</h2>
              <dl>
                <div>
                  <dt>Адрес</dt>
                  <dd>ул. Жемчужина, 5, Гатчина, Ленинградская область</dd>
                </div>
                <div>
                  <dt>График</dt>
                  <dd>пн–сб 10:00–21:00</dd>
                </div>
                <div>
                  <dt>Телефон</dt>
                  <dd>
                    <a href={phoneHref}>{phoneDisplay}</a>
                  </dd>
                </div>
              </dl>
              <div className="contact-actions">
                <a className="button" href={phoneHref}>
                  Позвонить
                </a>
                <a
                  className="button button--outline-dark"
                  href={yandexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Маршрут в Яндекс
                </a>
                <a
                  className="text-link text-link--dark"
                  href={dgisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Открыть в 2ГИС
                </a>
              </div>
            </div>

            <div className="map-shell">
              <iframe
                src={mapEmbedUrl}
                title="Карта проезда к PROkuzov, улица Жемчужина, 5, Гатчина"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={yandexUrl} target="_blank" rel="noopener noreferrer">
                Открыть большую карту <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="faq section shell" id="faq">
          <div className="faq-heading">
            <p className="section-kicker">Вопросы</p>
            <h2>Перед обращением</h2>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing-cta">
          <div className="shell closing-cta-inner">
            <p>Опишите задачу — начните с короткого звонка</p>
            <a href={phoneHref}>{phoneDisplay}</a>
            <span>пн–сб 10:00–21:00</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <div>
            <a className="wordmark wordmark--footer" href="#top">
              PRO<span>kuzov</span>
            </a>
            <p>Кузовные работы и уход за автомобилем в Гатчине.</p>
          </div>
          <nav aria-label="Навигация в подвале">
            <a href="#services">Услуги</a>
            <a href="#estimate">Стоимость</a>
            <a href="#process">Процесс</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <address>
            <a href={phoneHref}>{phoneDisplay}</a>
            <span>ул. Жемчужина, 5, Гатчина</span>
            <span>пн–сб 10:00–21:00</span>
          </address>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} PROkuzov</span>
          <span>Информация о стоимости уточняется после оценки автомобиля</span>
        </div>
      </footer>

      <div className="mobile-conversion" aria-label="Быстрые действия">
        <a href={phoneHref}>Позвонить</a>
        <a href={yandexUrl} target="_blank" rel="noopener noreferrer">
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
