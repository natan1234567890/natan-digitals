
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Order from './pages/Order';
import ScrollToTop from './components/ScrollToTop'; // <-- import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- this will scroll to top on route change */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
