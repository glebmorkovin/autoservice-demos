import { site } from "@/data/site";
import { Icon } from "@/components/Icon";

export function ReviewsPanel({ yandexWidgetUrl }: { yandexWidgetUrl?: string }) {
  if (yandexWidgetUrl) {
    return (
      <div className="reviews-widget-frame">
        <iframe
          aria-label="Отзывы о ШиноМонталь на Яндекс Картах"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src={yandexWidgetUrl}
          title="Отзывы на Яндекс Картах"
        />
      </div>
    );
  }

  return (
    <div className="reviews-trust-panel">
      <div>
        <span className="micro-label">Независимые площадки</span>
        <h3>Актуальные отзывы — на картах</h3>
        <p>
          Поделитесь впечатлениями после визита — оставьте отзыв на удобной площадке.
        </p>
      </div>

      <div className="review-links">
        <a href={site.yandexUrl} rel="noreferrer" target="_blank">
          Яндекс Карты <Icon name="arrow" size={18} />
        </a>
        <a href={site.dgisUrl} rel="noreferrer" target="_blank">
          2ГИС <Icon name="arrow" size={18} />
        </a>
      </div>
    </div>
  );
}
