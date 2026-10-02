import { createBrowserRouter } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import CorporateCompanies from './pages/CorporateCompanies';
import SmartCities from './pages/SmartCities';
import GovernmentAgencies from './pages/GovernmentAgencies';
import AmbulanceProviders from './pages/AmbulanceProviders';
import TrafficManagement from './pages/TrafficManagement';
import PoliceDepartments from './pages/PoliceDepartments';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'corporate-companies', Component: CorporateCompanies },
      { path: 'smart-cities', Component: SmartCities },
      { path: 'government-agencies', Component: GovernmentAgencies },
      { path: 'ambulance-providers', Component: AmbulanceProviders },
      { path: 'traffic-management', Component: TrafficManagement },
      { path: 'police-departments', Component: PoliceDepartments },
    ],
  },
]);
