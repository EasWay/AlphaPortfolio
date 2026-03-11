import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import VisionMission from './pages/VisionMission';
import StrategicPartnerships from './pages/StrategicPartnerships';
import LeadershipTeam from './pages/LeadershipTeam';
import WhyWorkWithUs from './pages/WhyWorkWithUs';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="strategic-partnerships" element={<StrategicPartnerships />} />
          <Route path="leadership-team" element={<LeadershipTeam />} />
          <Route path="why-work-with-us" element={<WhyWorkWithUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
