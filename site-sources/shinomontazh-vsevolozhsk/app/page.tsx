/* eslint-disable @next/next/no-img-element */
import MobileNav from "@/components/MobileNav";

const basePath = "/autoservice-demos/shinomontazh-vsevolozhsk";

const PHONE_DISPLAY = "+7 (931) 977-87-88";
const PHONE_HREF = "tel:+79319778788";
const YANDEX_URL =
  "https://yandex.ru/maps/?text=%D1%88%D0%B8%D0%BD%D0%BE%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%20%2B7%20931%20977-87-88%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA";
const DGIS_URL =
  "https://2gis.ru/spb/search/%2B7%20931%20977-87-88%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA";
const MAP_EMBED_URL =
  "https://yandex.ru/map-widget/v1/?mode=search&text=%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA%2C%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82&z=16";

const services = [
  {
    number: "01",
    title: "Шиномонтаж",
    text: "Работы с шинами и колёсами. Перед визитом уточним задачу и удобное время.",
  },
  {
    number: "02",
    title: "Ремонт шин и грыж",
    text: "Оценим повреждение и по результату осмотра скажем, возможно ли восстановление.",
  },
  {
    number: "03",
    title: "Правка и прокатка дисков",
    text: "Проверка и восстановление геометрии диска — решение принимается после осмотра.",
  },
  {
    number: "04",
    title: "Вулканизация",
    text: "Подходящий способ ремонта подбирается с учётом характера повреждения.",
  },
  {
    number: "05",
    title: "Хранение шин",
    text: "Условия хранения и наличие свободного места можно уточнить по телефону.",
  },
  {
    number: "06",
    title: "Утилизация шин",
    text: "Порядок приёма отслуживших шин уточним перед вашим визитом.",
  },
];

const processSteps = [
  ["01", "Свяжитесь", "Позвоните и коротко опишите задачу."],
  ["02", "Выберите время", "Согласуем удобный момент для визита."],
  ["03", "Покажите автомобиль", "Осмотр помогает точно определить объём работ."],
  ["04", "Согласуйте стоимость", "Стоимость согласуется после оценки, до начала работ."],
  ["05", "Примите работу", "Проверьте результат вместе с мастером."],
];

const faq = [
  {
    question: "Нужно ли записываться заранее?",
    answer:
      "Лучше предварительно позвонить: так можно уточнить текущую загрузку и согласовать удобное время визита.",
  },
  {
    question: "Как узнать стоимость работ?",
    answer:
      "Стоимость зависит от автомобиля, размера колёс, состояния шин и дисков. Позвоните нам, чтобы обсудить работы и записаться.",
  },
  {
    question: "Какие услуги выполняет сервис?",
    answer:
      "Шиномонтаж, ремонт шин и грыж, правка и прокатка дисков, вулканизация, хранение и утилизация шин.",
  },
  {
    question: "Какие автомобили и размеры колёс принимаете?",
    answer:
      "Назовите модель автомобиля и размер колёс по телефону — обсудим обслуживание вашего комплекта.",
  },
  {
    question: "Сколько времени займут работы?",
    answer:
      "Срок зависит от задачи и состояния колеса. Ориентир можно получить после описания проблемы, а точное время — после осмотра.",
  },
  {
    question: "Сервис работает в выходные?",
    answer:
      "Да. В субботу и воскресенье график работы — с 10:00 до 20:00. В будни — с 09:00 до 21:00.",
  },
  {
    question: "Как найти точный въезд?",
    answer:
      "Ждём вас на Всеволожском проспекте во Всеволожске. Позвоните перед первым визитом — подскажем въезд.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Шиномонтаж на Всеволожском проспекте",
  description:
    "Шиномонтаж, ремонт шин и грыж, правка дисков, вулканизация, хранение и утилизация шин во Всеволожске.",
  telephone: "+79319778788",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Всеволожский проспект",
    addressLocality: "Всеволожск",
    addressRegion: "Ленинградская область",
    addressCountry: "RU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  sameAs: [YANDEX_URL, DGIS_URL],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a className="skip-link" href="#content">
        Перейти к содержанию
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="На главную">
          <span>ШИНОМОНТАЖ</span>
          <small>НА ВСЕВОЛОЖСКОМ</small>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#price">Стоимость</a>
          <a href="#process">Как работаем</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <a className="button button-accent button-compact" href={PHONE_HREF}>
            Записаться
          </a>
        </div>

        <MobileNav phoneHref={PHONE_HREF} yandexUrl={YANDEX_URL} />
      </header>

      <main id="content">
        <section className="hero" id="top">
          <div className="hero-content">
            <p className="eyebrow">Всеволожск · Всеволожский проспект</p>
            <h1>
              Шиномонтаж
              <span>на Всеволожском</span>
            </h1>
            <p className="hero-lead">
              Шиномонтаж, ремонт шин, правка дисков и сезонное хранение.
              Позвоните — уточним задачу, стоимость и время визита.
            </p>

            <div className="hero-cta">
              <a className="button button-accent" href={PHONE_HREF}>
                Позвонить и записаться <Arrow />
              </a>
              <a
                className="button button-ghost"
                href={YANDEX_URL}
                target="_blank"
                rel="noreferrer"
              >
                Построить маршрут <Arrow />
              </a>
            </div>

            <dl className="hero-facts">
              <div>
                <dt>Будни</dt>
                <dd>09:00–21:00</dd>
              </div>
              <div>
                <dt>Выходные</dt>
                <dd>10:00–20:00</dd>
              </div>
              <div>
                <dt>Телефон</dt>
                <dd>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </dd>
              </div>
            </dl>
          </div>

          <figure className="hero-visual">
            <img
              src={`${basePath}/images/workshop-hero.jpg`}
              alt="современной зоны шиномонтажа с автомобилем и оборудованием"
              decoding="async"
              fetchPriority="high"
              loading="eager"
            />
            
          </figure>
        </section>

        <div className="service-ticker" aria-hidden="true">
          <span>ШИНОМОНТАЖ</span>
          <i>•</i>
          <span>РЕМОНТ ШИН</span>
          <i>•</i>
          <span>ДИСКИ</span>
          <i>•</i>
          <span>ХРАНЕНИЕ</span>
          <i>•</i>
          <span>УТИЛИЗАЦИЯ</span>
        </div>

        <section className="services section" id="services">
          <div className="section-heading">
            <p className="section-index">01 / УСЛУГИ</p>
            <h2>Шины, диски и сезонное обслуживание.</h2>
            <p>
              От сезонной смены колёс до ремонта повреждений и хранения.
              Точный состав работ уточняется после описания задачи или осмотра.
            </p>
          </div>

          <div className="services-layout">
            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={PHONE_HREF} aria-label={`Уточнить услугу: ${service.title}`}>
                    Уточнить <Arrow />
                  </a>
                </article>
              ))}
            </div>

            <figure className="services-photo">
              <img
                src={`${basePath}/images/tire-fitting.jpg`}
                alt="процесса шиномонтажа на станке"
                decoding="async"
                loading="lazy"
              />
              <figcaption>
                <span>Шиномонтаж</span>
                
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="price-section section-dark" id="price">
          <div className="price-copy">
            <p className="section-index section-index-light">02 / СТОИМОСТЬ</p>
            <h2>Сначала задача. Потом точная сумма.</h2>
            <p>
              Стоимость зависит от автомобиля, размера колёс, характера повреждения и объёма работ. Позвоните нам, чтобы обсудить ваш случай.
            </p>
            <a className="phone-display" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="estimate-sheet">
            <div className="sheet-topline">
              <span>РАСЧЁТ СТОИМОСТИ</span>
              <span>ВСЕВОЛОЖСК</span>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>Назовите автомобиль</strong>
                  <p>И, если знаете, размер колёс.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Опишите задачу</strong>
                  <p>Замена, повреждение, диск или хранение.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Согласуйте работы</strong>
                  <p>Стоимость согласуется после оценки, до начала работ.</p>
                </div>
              </li>
            </ol>
            <a className="button button-ink" href={PHONE_HREF}>
              Получить расчёт <Arrow />
            </a>
          </div>
        </section>

        <section className="convenience section">
          <div className="section-heading compact-heading">
            <p className="section-index">03 / ПОЧЕМУ УДОБНО</p>
            <h2>Практичный сервис рядом.</h2>
          </div>
          <div className="convenience-grid">
            <article>
              <span>ПН–ВС</span>
              <h3>Работаем каждый день</h3>
              <p>До 21:00 в будни и до 20:00 по выходным.</p>
            </article>
            <article>
              <span>ШИНЫ + ДИСКИ</span>
              <h3>Несколько задач в одном месте</h3>
              <p>Ремонт, правка, вулканизация, хранение и утилизация.</p>
            </article>
            <article>
              <span>2 КАРТЫ</span>
              <h3>Маршрут без лишнего поиска</h3>
              <p>Ссылки на Яндекс Карты и 2ГИС собраны в контактах.</p>
            </article>
          </div>
        </section>

        <section className="process section-dark" id="process">
          <div className="process-media">
            <img
                src={`${basePath}/images/wheel-straightening.jpg`}
              alt="правки и обработки автомобильного диска"
              decoding="async"
              loading="lazy"
            />
            <div className="media-label">ПРАВКА ДИСКОВ</div>
          </div>

          <div className="process-content">
            <p className="section-index section-index-light">04 / КАК ПРОХОДИТ РАБОТА</p>
            <h2>Понятный путь от звонка до готового колеса.</h2>
            <ol className="process-list">
              {processSteps.map(([number, title, text]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="storage-feature">
          <figure>
            <img
                src={`${basePath}/images/tire-storage.jpg`}
              alt="аккуратно размещённых шин и колёс на хранении"
              decoding="async"
              loading="lazy"
            />
          </figure>
          <div className="storage-copy">
            <p className="section-index">05 / ХРАНЕНИЕ</p>
            <h2>Комплект шин не обязан занимать место дома.</h2>
            <p>
              Уточните по телефону условия сезонного хранения и наличие
              свободного места для вашего комплекта.
            </p>
            <a className="text-link" href={PHONE_HREF}>
              Узнать условия хранения <Arrow />
            </a>
            
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="reviews-copy">
            <p className="section-index">06 / ОТЗЫВЫ</p>
            <h2>Отзывы наших клиентов.</h2>
            <p>
              Читайте отзывы клиентов и поделитесь впечатлениями после визита.
            </p>
          </div>
          <div className="review-links">
            <a href={YANDEX_URL} target="_blank" rel="noreferrer">
              <span className="map-brand map-brand-yandex">Я</span>
              <div>
                <strong>Яндекс Карты</strong>
                <small>Найти сервис и посмотреть отзывы</small>
              </div>
              <Arrow />
            </a>
            <a href={DGIS_URL} target="_blank" rel="noreferrer">
              <span className="map-brand map-brand-dgis">2</span>
              <div>
                <strong>2ГИС</strong>
                <small>Открыть результаты по телефону</small>
              </div>
              <Arrow />
            </a>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="map-frame">
            <iframe
              src={MAP_EMBED_URL}
              title="Поиск шиномонтажа на карте Всеволожска"
              loading="eager"
              allowFullScreen
            />
            <div className="map-caption">
              Карта показывает поиск по телефону и городу. Точный номер дома
              уточните перед выездом.
            </div>
          </div>

          <div className="contact-panel">
            <p className="section-index">07 / КОНТАКТЫ</p>
            <h2>Как нас найти</h2>
            <dl>
              <div>
                <dt>Адрес</dt>
                <dd>
                  Всеволожский проспект,
                  <br />
                  Всеволожск, Ленинградская область
                  <small>Позвоните — подскажем въезд.</small>
                </dd>
              </div>
              <div>
                <dt>Телефон</dt>
                <dd>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </dd>
              </div>
              <div>
                <dt>График</dt>
                <dd>
                  пн–пт&nbsp;&nbsp;09:00–21:00
                  <br />
                  сб–вс&nbsp;&nbsp;10:00–20:00
                </dd>
              </div>
            </dl>
            <div className="contact-actions">
              <a className="button button-accent" href={PHONE_HREF}>
                Позвонить <Arrow />
              </a>
              <a
                className="button button-outline-dark"
                href={YANDEX_URL}
                target="_blank"
                rel="noreferrer"
              >
                Яндекс Карты
              </a>
              <a
                className="button button-outline-dark"
                href={DGIS_URL}
                target="_blank"
                rel="noreferrer"
              >
                2ГИС
              </a>
            </div>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="faq-heading">
            <p className="section-index">08 / ВОПРОСЫ</p>
            <h2>Перед визитом</h2>
            <p>Коротко о том, что можно уточнить заранее.</p>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                  <i aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">Запись и расчёт по телефону</p>
          <h2>Колёса требуют внимания?</h2>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <p>Позвоните — уточним задачу и подберём время для визита.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="wordmark footer-wordmark">
          <span>ШИНОМОНТАЖ</span>
          <small>НА ВСЕВОЛОЖСКОМ</small>
        </div>
        <div className="footer-address">
          <strong>Всеволожский проспект, Всеволожск</strong>
          <span>Точный номер дома уточните по телефону</span>
        </div>
        <nav aria-label="Навигация в подвале">
          <a href="#services">Услуги</a>
          <a href="#price">Стоимость</a>
          <a href="#contacts">Контакты</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="footer-meta">
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>

      <div className="mobile-action-bar" aria-label="Быстрые действия">
        <a href={PHONE_HREF}>Позвонить</a>
        <a href={YANDEX_URL} target="_blank" rel="noreferrer">
          Маршрут <Arrow />
        </a>
      </div>
    </>
  );
}
