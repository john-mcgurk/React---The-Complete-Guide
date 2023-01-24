import EventsNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router';
function EventsRootLayout() {
  return (
    <>
      <EventsNavigation/>
      <Outlet/>
    </>
  );
}

export default EventsRootLayout;
