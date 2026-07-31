import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function PublicLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'What We Do', 
      dropdown: [
        { name: 'Women Empowerment', path: '/what-we-do/women-empowerment' },
        { name: 'Livelihood', path: '/what-we-do/livelihood' },
        { name: 'Education', path: '/what-we-do/education' },
        { name: 'Leadership', path: '/what-we-do/leadership' }
      ]
    },
    { 
      name: 'Our Impact', 
      dropdown: [
        { name: 'Reports', path: '/our-impact/reports' },
        { name: 'News & Events', path: '/our-impact/news-events' },
        { name: 'All Impacts', path: '/our-impact/all' },
        { name: 'Leadership', path: '/our-impact/leadership' }
      ]
    },
    { 
      name: 'Get Involved', 
      dropdown: [
        { name: 'Partner with Us', path: '/get-involved/partner' },
        { name: 'Become Volunteer', path: '/get-involved/volunteer' },
        { name: 'Job Opportunities', path: '/jobs' },
        { name: 'Volunteer Opportunities', path: '/volunteer-opportunities' },
        { name: 'Staff Portal', path: '/admin/login', newTab: true }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navbar */}
      <nav style={{ 
        background: 'white', 
        borderBottom: '1px solid #e5e7eb', 
        padding: '10px 5%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        height: '86px',
        boxSizing: 'border-box'
      }}>
        {/* LOGO IMAGE - Notice it starts with /images/ NOT /public/images/ */}
        <img 
          src="/images/suhacoLogo.jpeg" 
          alt="SUHACO Logo" 
          onClick={() => navigate('/')}
          style={{ height: '100px', cursor: 'pointer', objectFit: 'contain' }}
        />
        
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          {navItems.map(item => (
            item.dropdown ? (
              <div 
                key={item.path || item.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontSize: '15px', 
                  fontWeight: '500',
                  color: location.pathname.startsWith(item.path?.split('/')[0] || '') ? '#16a34a' : '#374151',
                  padding: '10px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  {item.name}
                  <span style={{ fontSize: '10px' }}>▼</span>
                </button>
                
                {activeDropdown === item.name && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    minWidth: '220px',
                    padding: '8px 0',
                    zIndex: 101
                  }}>
                    {item.dropdown.map(link => (
                      <button
                        key={link.path}
                        onClick={() => {
                          if (link.newTab) {
                            window.open(link.path, '_blank');
                          } else {
                            navigate(link.path);
                          }
                          setActiveDropdown(null);
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '12px 20px',
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontSize: '14px',
                          color: '#374151',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#f0fdf4'}
                        onMouseLeave={(e) => e.target.style.background = 'white'}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button 
                key={item.path} 
                onClick={() => navigate(item.path)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontSize: '15px', 
                  fontWeight: '500',
                  color: location.pathname === item.path ? '#16a34a' : '#374151',
                  padding: '10px 15px'
                }}
              >
                {item.name}
              </button>
            )
          ))}
          
          <button 
            onClick={() => navigate('/get-involved/donate')} 
            style={{ 
              background: '#16a34a', 
              color: 'white', 
              border: 'none', 
              padding: '10px 24px', 
              borderRadius: '6px', 
              cursor: 'pointer', 
              fontWeight: '700',
              marginLeft: '15px',
              fontSize: '15px',
              boxShadow: '0 2px 4px rgba(22, 163, 74, 0.2)'
            }}
          >
            Donate Now
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer style={{ 
        background: '#111827', 
        color: 'white', 
        padding: '50px 5% 30px', 
        marginTop: '50px' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div>
            <img src="/images/suhacoLogo.jpeg" alt="SUHACO" style={{ height: '100px', marginBottom: '15px', borderBottomRightRadius: '70%', borderEndEndRadius: '70%', borderStartEndRadius: '70%', borderBottomLeftRadius: '70%',borderTopLeftRadius:'70%', background:'transparent', overflow: 'hidden' }} />
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Sustainable Harvest Communities<br/>Empowering refugees and vulnerable communities through sustainable development.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button onClick={() => navigate('/about')} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', textAlign: 'left' }}>About Us</button>
              <button onClick={() => navigate('/what-we-do/women-empowerment')} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', textAlign: 'left' }}>What We Do</button>
              <button onClick={() => navigate('/get-involved/donate')} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', textAlign: 'left' }}>Donate</button>
              <button onClick={() => navigate('/contact')} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', textAlign: 'left' }}>Contact</button>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px' }}>Contact Info</h4>
            <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
               Kakuma Refugee Camp<br/>
              Turkana County, Kenya<br/>
               sustainableharvestcommunities@gmail.com<br/>
               +254 114111094
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #374151', marginTop: '30px', paddingTop: '20px', textAlign: 'center', color: '#6b7280' }}>
          <p>© {new Date().getFullYear()} SUHACO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
