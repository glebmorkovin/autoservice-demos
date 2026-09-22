"use client";

import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        id="mobile-navigation"
        className="mobile-nav__panel"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
      >
        <nav aria-label="Мобильная навигация">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span aria-hidden="true">0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-nav__contact">
          <p>{site.hours} · {site.city}</p>
          <a href={site.phoneHref} tabIndex={open ? 0 : -1}>
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
