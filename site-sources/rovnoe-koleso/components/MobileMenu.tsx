"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/data/site";

const links = [
  ["Услуги", "#services"],
  ["Стоимость", "#price"],
  ["Как работаем", "#process"],
  ["Отзывы", "#reviews"],
  ["Контакты", "#contacts"],
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-navigation">
        <nav aria-label="Мобильная навигация" className="mobile-menu__nav">
          {links.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__contact">
          <p>{site.addressShort}, {site.city}</p>
          <p>{site.hours}</p>
          <a className="button button--light" href={site.phoneHref}>
            <PhoneIcon />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
