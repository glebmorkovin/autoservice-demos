"use client";

import { useEffect, useState } from "react";

const links = [
  ["Услуги", "#services"],
  ["Стоимость", "#estimate"],
  ["Как проходит работа", "#process"],
  ["Отзывы", "#reviews"],
  ["Контакты", "#contacts"],
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="mobile-menu-shell">
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Мобильная навигация">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-contact">
          <span>пн–сб 10:00–21:00</span>
          <a href="tel:+79817532714">+7 (981) 753-27-14</a>
        </div>
      </div>
    </div>
  );
}
