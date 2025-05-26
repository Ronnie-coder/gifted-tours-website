import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Fleet from '../pages/Fleet'; 
import BookNow from '../pages/BookNow';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio'; // Import the Portfolio component

export default function Router() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route path="tours/:slug" element={<TourDetails />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="portfolio" element={<Portfolio />} /> {/* Add Portfolio route */}
            <Route path="book" element={<BookNow />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}