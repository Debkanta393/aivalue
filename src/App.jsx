import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Subscription from "./pages/Subscription";
import DashboardLayout from "./components/DashboardLayout";
import SubscriptionDetails from "./pages/SubscriptionDetails";

function AppContent() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
      {!isDashboardRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
  