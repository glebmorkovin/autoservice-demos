"use client";

import { useEffect, useState } from "react";

type MobileNavProps = {
  phoneHref: string;
  yandexUrl: string;
};

const links = [
  ["Услуги", "#services"],
  ["Стоимость", "#price"],
  ["Как работаем", "#process"],
  ["Отзывы", "#reviews"],
  ["Контакты", "#contacts"],
  ["Вопросы", "#faq"],
];

export default function MobileNav({ phoneHref, yandexUrl }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu">
        <nav aria-label="Мобильная навигация">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <a href={phoneHref}>Позвонить</a>
          <a href={yandexUrl} target="_blank" rel="noreferrer">
            Построить маршрут ↗
          </a>
        </div>
      </div>
    </div>
  );
}
