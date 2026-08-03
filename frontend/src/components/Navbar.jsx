import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const goTo = (item) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    if (item.newTab) {
      window.open(item.path, '_blank');
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      <nav className="navbar">

        {/* Logo */}

        <div className="navbar-logo">
          <img
            src="/images/suhacoLogo.jpeg"
            alt="SUHACO"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Desktop Navigation */}

        <div className="desktop-menu">

          {navItems.map(item => (

            item.dropdown ? (

              <div
                key={item.name}
                className="dropdown-container"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >

                <button className="nav-btn">

                  {item.name}

                  <span>▼</span>

                </button>

                {activeDropdown === item.name && (

                  <div className="dropdown-menu">

                    {item.dropdown.map(link => (

                      <button
                        key={link.path}
                        className="dropdown-item"
                        onClick={() => goTo(link)}
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
                className={
                  location.pathname === item.path
                    ? 'nav-btn active'
                    : 'nav-btn'
                }
                onClick={() => goTo(item)}
              >
                {item.name}
              </button>

            )

          ))}

          <button
            className="donate-btn"
            onClick={() => navigate('/get-involved/donate')}
          >
            Donate Now
          </button>

        </div>

        {/* Hamburger */}

        <div
          className={
            mobileMenuOpen
              ? 'hamburger active'
              : 'hamburger'
          }
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >

          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>

        </div>

      </nav>

      {/* Mobile Menu */}

      <div
        className={
          mobileMenuOpen
            ? 'mobile-menu open'
            : 'mobile-menu'
        }
      >

        <ul className="mobile-nav-list">

          {navItems.map(item => (

            <li
              key={item.name}
              className="mobile-nav-item"
            >

              {item.dropdown ? (

                <>

                  <button
                    className="mobile-nav-btn"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name
                          ? null
                          : item.name
                      )
                    }
                  >

                    {item.name}

                    <span>

                      {activeDropdown === item.name
                        ? '▲'
                        : '▼'}

                    </span>

                  </button>

                  <div
                    className={
                      activeDropdown === item.name
                        ? 'mobile-dropdown open'
                        : 'mobile-dropdown'
                    }
                  >

                    {item.dropdown.map(link => (

                      <button
                        key={link.path}
                        className="mobile-dropdown-item"
                        onClick={() => goTo(link)}
                      >

                        {link.name}

                      </button>

                    ))}

                  </div>

                </>

              ) : (

                <button
                  className={
                    location.pathname === item.path
                      ? 'mobile-nav-btn active'
                      : 'mobile-nav-btn'
                  }
                  onClick={() => goTo(item)}
                >

                  {item.name}

                </button>

              )}

            </li>

          ))}

        </ul>

        <button
          className="mobile-donate-btn"
          onClick={() => goTo({
            path: '/get-involved/donate'
          })}
        >
          Donate Now
        </button>

      </div>
    </>
  );
}