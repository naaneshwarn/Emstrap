import PageTemplate from '../components/PageTemplate';
import { getPageData } from '../data/pageData';

export default function SmartCities() {
  return <PageTemplate data={getPageData('smart-cities')!} />;
}
