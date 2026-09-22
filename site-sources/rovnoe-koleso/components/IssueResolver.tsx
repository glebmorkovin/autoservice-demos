"use client";

import { useState } from "react";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { issues, site } from "@/data/site";

export function IssueResolver() {
  const [activeId, setActiveId] = useState<(typeof issues)[number]["id"]>(issues[0].id);
  const active = issues.find((issue) => issue.id === activeId) ?? issues[0];

  return (
    <div className="issue-panel">
      <div className="issue-panel__topline">
        <span>Быстрый выбор задачи</span>
        <span>Выберите симптом</span>
      </div>
      <div className="issue-panel__layout">
        <div>
          <p className="eyebrow eyebrow--light">Что случилось с колесом?</p>
          <h2>Начнём с вашей задачи</h2>
        </div>
        <div className="issue-tabs" role="tablist" aria-label="Проблема с колесом">
          {issues.map((issue, index) => (
            <button
              aria-controls="issue-result"
              aria-selected={activeId === issue.id}
              className={activeId === issue.id ? "is-active" : ""}
              id={`issue-${issue.id}`}
              key={issue.id}
              onClick={() => setActiveId(issue.id)}
              role="tab"
              type="button"
            >
              <span>0{index + 1}</span>
              {issue.label}
              <ArrowIcon />
            </button>
          ))}
        </div>
        <div
          aria-labelledby={`issue-${active.id}`}
          className="issue-result"
          id="issue-result"
          role="tabpanel"
        >
          <p>{active.hint}</p>
          <a className="button button--light" href={site.phoneHref}>
            <PhoneIcon />
            Позвонить и уточнить
          </a>
        </div>
      </div>
    </div>
  );
}
