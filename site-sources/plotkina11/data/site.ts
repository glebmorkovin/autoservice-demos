export const siteData = {
  name: "Шиномонтаж во Всеволожске",
  location: "Всеволожск, Ленинградская область",
  address: "ул. Плоткина, 11",
  landmark: "ориентир: напротив дома 5",
  hours: "Ежедневно",
  hoursNote: "Точное время работы уточните перед приездом",
  phones: [
    { display: "+7 (904) 604-70-98", href: "tel:+79046047098" },
    { display: "+7 (911) 909-38-89", href: "tel:+79119093889" },
  ],
  maps: {
    yandex:
      "https://yandex.ru/maps/?text=%D0%A8%D0%B8%D0%BD%D0%BE%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%20%D0%B2%D0%BE%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA%D0%B5%20%D1%83%D0%BB.%20%D0%9F%D0%BB%D0%BE%D1%82%D0%BA%D0%B8%D0%BD%D0%B0%2C%2011%20%28%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%3A%20%D0%BD%D0%B0%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2%20%D0%B4%D0%BE%D0%BC%D0%B0%205%29%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C",
    dgis:
      "https://2gis.ru/spb/search/%D0%A8%D0%B8%D0%BD%D0%BE%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%20%D0%B2%D0%BE%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA%D0%B5%20%D1%83%D0%BB.%20%D0%9F%D0%BB%D0%BE%D1%82%D0%BA%D0%B8%D0%BD%D0%B0%2C%2011%20%28%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%3A%20%D0%BD%D0%B0%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2%20%D0%B4%D0%BE%D0%BC%D0%B0%205%29%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C",
    embed:
      "https://yandex.ru/map-widget/v1/?mode=search&text=%D1%83%D0%BB.%20%D0%9F%D0%BB%D0%BE%D1%82%D0%BA%D0%B8%D0%BD%D0%B0%2C%2011%2C%20%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA&z=16",
  },
  services: [
    {
      number: "01",
      title: "Шиномонтаж",
      description:
        "Работы с шинами и колёсами. Стоимость зависит от радиуса и состояния колеса.",
      image: "/autoservice-demos/plotkina11/images/tire-fitting.jpg",
      imageAlt: "работ по шиномонтажу",
    },
    {
      number: "02",
      title: "Балансировка",
      description:
        "Балансировка автомобильных колёс. Параметры конкретного автомобиля уточните по телефону.",
      image: "/autoservice-demos/plotkina11/images/wheel-balancing.jpg",
      imageAlt: "балансировки автомобильного колеса",
    },
    {
      number: "03",
      title: "Правка литых дисков",
      description:
        "Оценка состояния и правка литого диска. Возможность работы определяют после осмотра.",
      image: "/autoservice-demos/plotkina11/images/wheel-repair.jpg",
      imageAlt: "правки литого автомобильного диска",
    },
  ],
} as const;

export const primaryPhone = siteData.phones[0];

export const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#price", label: "Стоимость" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
] as const;

