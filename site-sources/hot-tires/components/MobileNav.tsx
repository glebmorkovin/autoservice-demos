"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Как работаем" },
  { href: "#cost", label: "Стоимость" },
  { href: "#contacts", label: "Контакты" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
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
        <span className={open ? "menu-icon is-open" : "menu-icon"} aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      <div className={open ? "mobile-menu is-open" : "mobile-menu"} id="mobile-menu">
        <nav aria-label="Мобильная навигация">
          {links.map((link, index) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-contact">
          <p>На связи круглосуточно</p>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <span>{site.address}, Гатчинский район</span>
        </div>
      </div>
    </div>
  );
}
