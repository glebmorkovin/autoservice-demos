import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';

const slug=process.env.VITE_SITE||'forvater';
const data=JSON.parse(fs.readFileSync(`src/data/${slug}.json`,'utf8'));
const base=`/autoservice-demos/${slug}/`;
const url=`https://glebmorkovin.github.io${base}`;
const title=`${data.business.name} — ${data.services.slice(0,2).join(', ')} | ${data.business.location}`;
const description=`${data.services.slice(0,3).join(', ')}. ${data.business.address}, ${data.business.location}. ${data.business.hours}. ${data.business.phones[0]}.`;

export default defineConfig({
  base,
  plugins:[react(),{name:'site-meta',transformIndexHtml(html){return html.replaceAll('__TITLE__',title).replaceAll('__DESC__',description).replaceAll('__URL__',url).replaceAll('__BASE__',base).replaceAll('__IMAGE__',url+'images/'+data.visual_assets.assets[0].file)}}],
  publicDir:`public-sites/${slug}`,
  build:{outDir:`dist/${slug}`,emptyOutDir:true},
});
