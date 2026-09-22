"use client";

import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import { Icon } from "@/components/Icon";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <div className="mobile-menu-shell">
      <button
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        className="mobile-menu-toggle"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <Icon name={open ? "close" : "menu"} size={24} />
      </button>

      {open && (
        <div className="mobile-menu-panel">
          <nav id="mobile-navigation" aria-label="Мобильная навигация">
            {navigation.map((item, index) => (
              <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-contact">
            <p>{site.hours}</p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
        </div>
      )}
    </div>
  );
}
