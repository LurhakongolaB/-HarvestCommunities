import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo & Description */}

        <div className="footer-section">

          <img
            src="/images/suhacoLogo.jpeg"
            alt="SUHACO Logo"
            className="footer-logo"
          />

          <h3>SUHACO</h3>

          <p>
            Sustainable Harvest Communities (SUHACO) empowers refugees
            and vulnerable communities through education, livelihoods,
            leadership development, and sustainable solutions.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <button onClick={() => navigate('/')}>
            Home
          </button>

          <button onClick={() => navigate('/about')}>
            About Us
          </button>

          <button onClick={() => navigate('/what-we-do/women-empowerment')}>
            What We Do
          </button>

          <button onClick={() => navigate('/our-impact/all')}>
            Our Impact
          </button>

          <button onClick={() => navigate('/contact')}>
            Contact
          </button>

        </div>

        {/* Get Involved */}

        <div className="footer-section">

          <h3>Get Involved</h3>

          <button onClick={() => navigate('/get-involved/partner')}>
            Partner With Us
          </button>

          <button onClick={() => navigate('/get-involved/volunteer')}>
            Become a Volunteer
          </button>

          <button onClick={() => navigate('/jobs')}>
            Careers
          </button>

          <button onClick={() => navigate('/get-involved/donate')}>
            Donate
          </button>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>
            📍 Kakuma Refugee Camp
            <br />
            Turkana County, Kenya
          </p>

          <p>
            📧 sustainableharvestcommunities@gmail.com
          </p>

          <p>
            📞 +254 114 111 094
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Sustainable Harvest Communities (SUHACO). All Rights Reserved.

      </div>

    </footer>
  );
}