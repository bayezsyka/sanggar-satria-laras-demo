import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PublicLayout = () => (
  <div className="min-h-screen bg-putih-hangat text-coklat-gelap">
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(199,161,90,0.12),transparent_30%),linear-gradient(180deg,rgba(248,241,231,0.95),#fffaf2)]" />
    <div className="fixed inset-x-0 top-0 -z-10 h-72 opacity-70 [background-image:linear-gradient(90deg,rgba(138,90,50,0.06)_1px,transparent_1px),linear-gradient(rgba(138,90,50,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PublicLayout;
