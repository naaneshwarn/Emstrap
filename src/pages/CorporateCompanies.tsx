import PageTemplate from '../components/PageTemplate';
import { getPageData } from '../data/pageData';

export default function CorporateCompanies() {
  return <PageTemplate data={getPageData('corporate-companies')!} />;
}
