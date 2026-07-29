import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import PublicStoriesPage from './pages/public/StoriesPage';
import ContactPage from './pages/public/ContactPage';
import JobsPage from './pages/public/JobsPage';
import VolunteerOpportunitiesPage from './pages/public/VolunteerOpportunitiesPage';

// What We Do Pages
import WomenEmpowerment from './pages/public/what-we-do/WomenEmpowerment';
import Livelihood from './pages/public/what-we-do/Livelihood';
import Education from './pages/public/what-we-do/Education';
import LeadershipWhat from './pages/public/what-we-do/Leadership';

// Our Impact Pages
import Reports from './pages/public/our-impact/Reports';
import NewsEvents from './pages/public/our-impact/NewsEvents';
import AllImpacts from './pages/public/our-impact/AllImpacts';
import LeadershipImpact from './pages/public/our-impact/Leadership';

// Get Involved Pages
import Partner from './pages/public/get-involved/Partner';
import Donate from './pages/public/get-involved/Donate';
import Volunteer from './pages/public/get-involved/Volunteer';
import Staff from './pages/public/get-involved/Staff';

// Admin Pages
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import AdminStoriesPage from './pages/admin/StoriesPage';
import AdminNewsEventsPage from './pages/admin/NewsEventsPage';
import AdminJobsPage from './pages/admin/JobsPage';
import AdminVolunteersPage from './pages/admin/VolunteersPage';
import GalleryPage from './pages/admin/GalleryPage';
import SettingsPage from './pages/admin/SettingsPage';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="stories" element={<PublicStoriesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="volunteer-opportunities" element={<VolunteerOpportunitiesPage />} />
            
            {/* What We Do */}
            <Route path="what-we-do/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="what-we-do/livelihood" element={<Livelihood />} />
            <Route path="what-we-do/education" element={<Education />} />
            <Route path="what-we-do/leadership" element={<LeadershipWhat />} />
            
            {/* Our Impact */}
            <Route path="our-impact/reports" element={<Reports />} />
            <Route path="our-impact/news-events" element={<NewsEvents />} />
            <Route path="our-impact/all" element={<AllImpacts />} />
            <Route path="our-impact/leadership" element={<LeadershipImpact />} />
            
            {/* Get Involved */}
            <Route path="get-involved/partner" element={<Partner />} />
            <Route path="get-involved/donate" element={<Donate />} />
            <Route path="get-involved/volunteer" element={<Volunteer />} />
            <Route path="get-involved/staff" element={<Staff />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="stories" element={<AdminStoriesPage />} />
            <Route path="news-events" element={<AdminNewsEventsPage />} />
            <Route path="jobs" element={<AdminJobsPage />} />
            <Route path="volunteers" element={<AdminVolunteersPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
