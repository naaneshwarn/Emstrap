import PageTemplate from '../components/PageTemplate';
import { getPageData } from '../data/pageData';

export default function TrafficManagement() {
  return <PageTemplate data={getPageData('traffic-management')!} />;
}
