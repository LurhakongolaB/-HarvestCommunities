import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: '📊 Dashboard', path: '/admin/dashboard' },
    { name: ' Impact Stories', path: '/admin/stories' },
    { name: '📰 News & Events', path: '/admin/news-events' },
    { name: '💼 Job Postings', path: '/admin/jobs' },
    { name: '🤝 Volunteers', path: '/admin/volunteers' },
    { name: '🖼️ Image Gallery', path: '/admin/gallery' },
    { name: '⚙️ Settings', path: '/admin/settings' }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '250px', background: 'white', borderRight: '1px solid #e5e7eb', padding: '20px', position: 'fixed', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Clickable Logo */}
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, margin: 0, textAlign: 'left' }}>
          <h2 style={{ color: '#16a34a', fontSize: '24px', fontWeight: 'bold', marginBottom: '40px', paddingLeft: '10px' }}>SUHACO 🌍</h2>
        </button>
        
        {menu.map(item => (
          <button key={item.path} onClick={() => navigate(item.path)} style={{ display: 'block', width: '100%', padding: '12px 15px', marginBottom: '8px', background: location.pathname === item.path ? '#f0fdf4' : 'transparent', color: location.pathname === item.path ? '#16a34a' : '#4b5563', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontSize: '15px', fontWeight: location.pathname === item.path ? '600' : '400' }}>
            {item.name}
          </button>
        ))}
        <div style={{ marginTop: 'auto', borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
          <p style={{ margin: '0 0 15px 0', fontWeight: '600', paddingLeft: '10px' }}>{user?.name}</p>
          <button onClick={logout} style={{ width: '100%', padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}> 🚪 Logout</button>
        </div>
      </aside>
      <main style={{ marginLeft: '250px', flex: 1, padding: '30px', background: '#f9fafb' }}>
        <Outlet />
      </main>
    </div>
  );
}
