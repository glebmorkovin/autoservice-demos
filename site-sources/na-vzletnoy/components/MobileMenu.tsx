"use client";

import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function MobileMenu({ links }: { links: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div className={`menu-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav id="mobile-navigation" aria-label="Мобильная навигация">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="menu-panel__contact">
          <p>Ежедневно · 09:00–21:00</p>
          <a href="tel:+79650464020">+7 (965) 046-40-20</a>
        </div>
      </div>
    </div>
  );
}
