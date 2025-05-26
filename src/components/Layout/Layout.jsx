import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        {/* renders the routed page */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}