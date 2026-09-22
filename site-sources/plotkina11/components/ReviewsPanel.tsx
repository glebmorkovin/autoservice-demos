import { ExternalIcon } from "@/components/Icons";
import { siteData } from "@/data/site";

export default function ReviewsPanel() {
  const widgetUrl = process.env.YANDEX_REVIEWS_WIDGET_URL;
  const hasOfficialWidget = Boolean(
    widgetUrl && /^https:\/\/yandex\./i.test(widgetUrl),
  );

  if (hasOfficialWidget && widgetUrl) {
    return (
      <div className="reviews-widget-wrap">
        <iframe
          className="reviews-widget"
          src={widgetUrl}
          title="Отзывы о шиномонтаже на Яндекс Картах"
          loading="eager"
        />
        <a
          className="text-link"
          href={siteData.maps.yandex}
          target="_blank"
          rel="noreferrer"
        >
          Открыть отзывы на Яндекс Картах <ExternalIcon />
        </a>
      </div>
    );
  }

  return (
    <div className="reviews-fallback">
      <div className="reviews-note">
        <span className="eyebrow">Отзывы клиентов</span>
        <p>
          Отзывы о шиномонтаже на Плоткина — на Яндекс Картах и в 2ГИС.
        </p>
      </div>
      <div className="review-links">
        <a
          className="review-platform"
          href={siteData.maps.yandex}
          target="_blank"
          rel="noreferrer"
        >
          <span>Яндекс Карты</span>
          <strong>Смотреть отзывы</strong>
          <ExternalIcon />
        </a>
        <a
          className="review-platform"
          href={siteData.maps.dgis}
          target="_blank"
          rel="noreferrer"
        >
          <span>2ГИС</span>
          <strong>Открыть карточку</strong>
          <ExternalIcon />
        </a>
      </div>
    </div>
  );
}

