import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdsBanner from "@/components/AdsBanner.tsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>

        <div className="container mx-auto px-4">
            <AdsBanner />
        </div>

      <Footer />
    </div>
  );
};

export default Layout;

