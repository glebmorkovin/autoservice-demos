"use client";

import { useState, type CSSProperties } from "react";

const heroImage = `${import.meta.env.BASE_URL}images/prokuzov-hero.jpg`;

export function DiagnosticReveal() {
  const [position, setPosition] = useState(58);
  const revealStyle = {
    "--reveal-position": `${position}%`,
  } as CSSProperties;

  return (
    <figure className="diagnostic-figure">
      <div className="diagnostic-reveal" style={revealStyle}>
        <img
          src={heroImage}
          alt="Автомобиль с разобранной передней частью в кузовной мастерской"
          width="1672"
          height="941"
          fetchPriority="high"
          className="diagnostic-image"
        />

        <div className="diagnostic-analysis" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            width="1672"
            height="941"
            className="diagnostic-image diagnostic-image--analysis"
          />
          <div className="diagnostic-grid" />
        </div>

        <span className="diagnostic-label diagnostic-label--photo">Фото</span>
        <span className="diagnostic-label diagnostic-label--inspection">
          Осмотр
        </span>
        <div className="diagnostic-divider" aria-hidden="true">
          <span>↔</span>
        </div>
        <input
          className="diagnostic-range"
          type="range"
          min="20"
          max="80"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Сравнить фото повреждения и режим осмотра"
        />
      </div>
      <figcaption>
        Переместите разделитель: фото помогает начать оценку, а точный объём
        работ определяется после осмотра.
      </figcaption>
    </figure>
  );
}
