"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Icon } from "@/components/Icon";

const radii = ["R15", "R16", "R17", "R18", "R19+"];

export function WheelSelector() {
  const [selected, setSelected] = useState("R17");

  return (
    <div className="wheel-selector" aria-label="Выбор радиуса колеса">
      <div className="wheel-selector-copy">
        <span className="micro-label">Ваш радиус</span>
        <strong>{selected}</strong>
      </div>
      <div className="radius-options" role="group" aria-label="Радиус колеса">
        {radii.map((radius) => (
          <button
            aria-pressed={selected === radius}
            className={selected === radius ? "is-active" : ""}
            key={radius}
            onClick={() => setSelected(radius)}
            type="button"
          >
            {radius}
          </button>
        ))}
      </div>
      <a
        aria-label={`Уточнить услуги для радиуса ${selected} по телефону`}
        className="wheel-call"
        href={site.phoneHref}
      >
        Уточнить
        <Icon name="arrow" size={18} />
      </a>
      <p className="wheel-selector-note">
        Не знаете радиус? Назовите модель автомобиля при звонке.
      </p>
    </div>
  );
}
