import PageTemplate from '../components/PageTemplate';
import { getPageData } from '../data/pageData';

export default function PoliceDepartments() {
  return <PageTemplate data={getPageData('police-departments')!} />;
}
