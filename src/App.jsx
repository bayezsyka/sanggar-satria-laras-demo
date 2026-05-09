import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PublicLayout from "./Components/layout/PublicLayout";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import KiHaryo from "./Pages/KiHaryo";
import NotFound from "./Pages/NotFound";
import Services from "./Pages/Services";
import Videos from "./Pages/Videos";
import WayangSantri from "./Pages/WayangSantri";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route element={<PublicLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/tentang" />
        <Route element={<KiHaryo />} path="/ki-haryo" />
        <Route element={<WayangSantri />} path="/wayang-santri" />
        <Route element={<Services />} path="/layanan" />
        <Route element={<Events />} path="/jadwal" />
        <Route element={<Gallery />} path="/galeri" />
        <Route element={<Videos />} path="/video" />
        <Route element={<Articles />} path="/wawasan" />
        <Route element={<Contact />} path="/kontak" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
