import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    { name: 'Impact Stories', path: '/admin/stories', icon: '📝' },
    { name: 'Image Gallery', path: '/admin/gallery', icon: '🖼️' },
    { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  const buttonStyle = (path) => ({
    display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '12px 15px',
    marginBottom: '8px', background: location.pathname === path ? '#f0fdf4' : 'transparent',
    color: location.pathname === path ? '#16a34a' : '#4b5563', border: 'none',
    borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontSize: '15px',
    fontWeight: location.pathname === path ? '600' : '400'
  });

  return (
    <aside style={{ width: '250px', background: 'white', borderRight: '1px solid #e5e7eb', padding: '20px', position: 'fixed', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ color: '#16a34a', fontSize: '24px', fontWeight: 'bold', marginBottom: '40px', paddingLeft: '10px' }}>SUHACO</h2>
      
      <nav style={{ flex: 1 }}>
        {menuItems.map(item => (
          <button key={item.path} onClick={() => navigate(item.path)} style={buttonStyle(item.path)}>
            <span>{item.icon}</span> {item.name}
          </button>
        ))}
      </nav>

      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
        <p style={{ margin: '0 0 15px 0', fontWeight: '600', color: '#111827', paddingLeft: '10px' }}>{user?.name}</p>
        <button onClick={logout} style={{ width: '100%', padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
