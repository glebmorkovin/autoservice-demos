# Исходники опубликованных сайтов

Каждая папка содержит редактируемый проект. Папки batch объединяют несколько сайтов; список находится в slugs.json. Публичные адреса остаются в docs/<slug>/.

## Сборка

В папке проекта: `npm ci`. Для Vite: `npm run build`. Для Next: `npx next build --webpack`. Для batch: `node build-all.mjs`. Содержимое out/ (Next), dist/ (Vite) или dist/<slug>/ (batch) копируется в docs/<slug>/.

GitHub Pages: main, /docs. Перед публикацией проверить мобильную версию, ссылки, изображения и тексты.
