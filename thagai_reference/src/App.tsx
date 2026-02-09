import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-cream font-sans text-brown selection:bg-burgundy/20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}
