import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';import fs from 'node:fs';import path from 'node:path';
const slug=process.env.SITE || 'siniy-garazh';
const data=JSON.parse(fs.readFileSync(`src/data/${slug}.json`,'utf8'));const base=`/autoservice-demos/${slug}/`;const url=`https://glebmorkovin.github.io${base}`;
const title=`${data.business.name} — ${data.tag}`;const desc=`${data.services.slice(0,4).join(', ')}. ${data.address}. ${data.hours}. ${data.business.phones[0]}.`;
export default defineConfig({base,plugins:[react(),{name:'site-meta',transformIndexHtml(html){return html.replaceAll('__TITLE__',title).replaceAll('__DESC__',desc).replaceAll('__URL__',url).replaceAll('__BASE__',base).replace('__IMAGE__',url+'images/'+data.visual_assets.assets[0].file);}}],resolve:{alias:{'@site':path.resolve(`src/data/${slug}.json`)}},publicDir:`public-sites/${slug}`,build:{outDir:`dist/${slug}`,emptyOutDir:true}});
