"use client";

import { useState } from "react";
import { PhoneIcon } from "@/components/Icons";
import { navItems, primaryPhone, siteData } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="wordmark" href="#top" aria-label="На главную">
          <span>ШИНОМОНТАЖ</span>
          <small>во Всеволожске</small>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={primaryPhone.href}>
            {primaryPhone.display}
          </a>
          <a className="button button-small" href={primaryPhone.href}>
            Записаться
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu ${isOpen ? "is-open" : ""}`}
        id="mobile-menu"
      >
        <nav aria-label="Мобильная навигация">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-contact">
          <span>{siteData.address}</span>
          <a href={primaryPhone.href}>
            <PhoneIcon />
            {primaryPhone.display}
          </a>
        </div>
      </div>
    </header>
  );
}

