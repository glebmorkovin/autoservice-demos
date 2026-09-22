export const site = {
  name: "Hot Tires",
  phoneDisplay: "+7 (921) 953-27-89",
  phoneHref: "tel:+79219532789",
  address: "д. Романовка, 9",
  location: "д. Романовка, Гатчинский район",
  hours: "Круглосуточно",
  maps: {
    yandex:
      "https://yandex.ru/maps/?text=Hot%20Tires%20%D0%B4.%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%2C%209%20%D0%B4.%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%2C%20%D0%93%D0%B0%D1%82%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD",
    dgis:
      "https://2gis.ru/spb/search/Hot%20Tires%20%D0%B4.%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%2C%209%20%D0%B4.%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%2C%20%D0%93%D0%B0%D1%82%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD",
    embed:
      "https://yandex.ru/map-widget/v1/?mode=search&text=Hot%20Tires%2C%20%D0%B4.%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%2C%209%2C%20%D0%93%D0%B0%D1%82%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD&z=15",
  },
  services: [
    "Выездной шиномонтаж",
    "Ремонт шин",
    "Установка запасного колеса",
    "Балансировка",
    "Помощь на дороге",
    "Работы с автостёклами",
  ],
} as const;

export function getSiteUrl() { return "https://glebmorkovin.github.io/autoservice-demos/hot-tires"; }

export function getYandexReviewsWidgetUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_YANDEX_REVIEWS_WIDGET_URL?.trim();

  if (!configuredUrl) return null;

  try {
    const url = new URL(configuredUrl);
    const isYandexHost =
      url.hostname === "yandex.ru" || url.hostname.endsWith(".yandex.ru");

    return url.protocol === "https:" && isYandexHost ? url.toString() : null;
  } catch {
    return null;
  }
}
