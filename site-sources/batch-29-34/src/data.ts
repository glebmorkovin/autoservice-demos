import forvater from './data/forvater.json';
import krauch from './data/krauch.json';
import tiretech from './data/tiretech.json';
import paradise from './data/paradise.json';
import avtogarant from './data/avtogarant.json';
import fast from './data/fast.json';

const raw={forvater,krauch,tiretech,paradise,avtogarant,fast};
export type Slug=keyof typeof raw;
export const slug=(import.meta.env.VITE_SITE||'forvater') as Slug;
export const data=raw[slug];

type Layout={theme:string;eyebrow:string;mapNote?:string;groups?:{title:string;items:number[]}[]};
const editorial:Record<Slug,Layout>={
forvater:{theme:'route',eyebrow:'Гатчина · дорожная помощь'},
krauch:{theme:'roadside',eyebrow:'Романовка · выездной шиномонтаж'},
tiretech:{theme:'lab',eyebrow:'Tiretech / Гатчина'},
paradise:{theme:'optics',eyebrow:'Paradise / Гатчина',groups:[{title:'Оптика и видимость',items:[1,2,3]},{title:'Системы автомобиля',items:[4,6,7]},{title:'Другие работы',items:[0,5]}]},
avtogarant:{theme:'trust',eyebrow:'Автогарант / Пригородный',groups:[{title:'Диагностика',items:[1,2,3,4]},{title:'Системы автомобиля',items:[5,6,7,8,9,10]},{title:'Помощь на дороге',items:[11]}]},
fast:{theme:'fast',eyebrow:'Fast+ / Вайя',groups:[{title:'Двигатель и электроника',items:[1,2,3,4,5,6,9]},{title:'Трансмиссия и кузов',items:[7,8,15]},{title:'Ходовая и безопасность',items:[10,11,12,13,14,16]}]}
};
export const view={...editorial[slug],...data.commercial};
export const tel=(number=data.business.phones[0])=>'tel:'+number.replace(/[^+\d]/g,'');
export const photo=(index:number)=>import.meta.env.BASE_URL+'images/'+data.visual_assets.assets[index].file;
export const mapUrl=()=>"https://yandex.ru/map-widget/v1/?mode=search&text="+encodeURIComponent(data.business.location+" "+data.business.address)+"&z=16";
