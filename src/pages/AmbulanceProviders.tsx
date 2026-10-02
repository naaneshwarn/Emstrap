import PageTemplate from '../components/PageTemplate';
import { getPageData } from '../data/pageData';

export default function AmbulanceProviders() {
  return <PageTemplate data={getPageData('ambulance-providers')!} />;
}
