import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export function Layout() {
  const { pathname } = useLocation();

  // A new route should start at the top, like a regular page load would.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content" key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
