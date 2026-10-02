import PageTemplate from '../components/PageTemplate';
import { getPageData } from '../data/pageData';

export default function GovernmentAgencies() {
  return <PageTemplate data={getPageData('government-agencies')!} />;
}
