import {data,view} from './data';
import {Header,Footer} from './components/Shell';
import Hero from './sections/Hero';
import {Services,Details,Process,PriceAndFaq} from './sections/Content';
import Contacts from './sections/Contacts';

export default function App(){const url=`https://glebmorkovin.github.io/autoservice-demos/${import.meta.env.VITE_SITE||'forvater'}/`;const schema={
  '@context':'https://schema.org','@type':'AutoRepair',name:data.business.name,url,telephone:data.business.phones[0],address:{'@type':'PostalAddress',streetAddress:data.business.address,addressLocality:data.business.location,addressCountry:'RU'},image:url+'images/'+data.visual_assets.assets[0].file
};return <div className={'site theme-'+view.theme}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Header/><main id="main"><Hero/><Services/><Details/><Process/><PriceAndFaq/><Contacts/></main><Footer/></div>}
