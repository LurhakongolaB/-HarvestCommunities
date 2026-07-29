import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* --- HERO SECTION (Split Layout) --- */}
      <div style={{ display: 'flex', minHeight: '85vh', alignItems: 'center', background: '#ffffff' }}>
        
        {/* Left Div: Professional Statement */}
        <div style={{ flex: 1, padding: '10px 5%', maxWidth: '700px' }}>
          <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>
            Sustainable Harvest Communities
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: '700', color: '#111827', lineHeight: '1.2', marginBottom: '25px' }}>
            Empowering Communities Through <span style={{ color: '#16a34a' }}>Sustainable Harvest</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.7', marginBottom: '35px' }}>
            Operating in Kakuma Refugee Camp, SUHACO is dedicated to empowering refugees and vulnerable host communities. Rather than promoting dependency, we invest in practical solutions—like sustainable agriculture, VSLA, and women's empowerment—that strengthen self-reliance, resilience, and economic inclusion.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigate('/get-involved/donate')} 
              style={{ padding: '16px 32px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 6px rgba(22, 163, 74, 0.2)' }}
            >
              Support Our Mission
            </button>
            <button 
              onClick={() => navigate('/our-impact/all')} 
              style={{ padding: '16px 32px', background: 'transparent', color: '#16a34a', border: '2px solid #16a34a', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
            >
              See Our Impact
            </button>
          </div>
        </div>

        {/* Right Div: Hero Image */}
        <div style={{ flex: 1, height: '85vh', position: 'relative', overflow: 'hidden', background: '#f3f4f6' }}>
          {/* Using a high-quality placeholder image related to agriculture/community. Replace this URL with your own image from /public/images/ */}
          <img src="/images/poultry.jpeg" alt="Livelihood Programs" style={{ width: '100%', height: '100%', paddingLeft: '5px',paddingBottom: '50px',paddingTop: '30px', paddingRight:'50px', objectFit: 'cover' }} />
          
          {/* <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" 
            alt="Community farming" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          /> */}
          {/* Optional overlay for better blending */} 
          

          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, #ffffff 0%, transparent 20%)' }}></div>
        </div>
      </div>

      {/* --- CORE PILLARS SECTION --- */}
      <div style={{ padding: '80px 5%', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>Our Core Interventions</h2>
            <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
              We help individuals and families improve food security, increase household income, and create sustainable economic opportunities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { icon: '🌱', title: 'Sustainable Agriculture', desc: 'Teaching modern, eco-friendly farming techniques, crop cultivation, and poultry reproduction to ensure long-term food security.' },
              { icon: '💰', title: 'Economic Empowerment', desc: 'Facilitating Village Savings and Loan Associations (VSLA) and social entrepreneurship to build financial independence.' },
              { icon: '📚', title: 'Education & Leadership', desc: 'Providing Adult Basic Education, literacy programs, and leadership development to equip communities with vital skills.' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', padding: '20px 30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #e5e7eb', transition: 'transform 0.2s' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#111827', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '15px', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MISSION & VISION BANNER --- */}
      <div style={{ background: '#16a34a', padding: '80px 5%', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Our Vision</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', opacity: 0.95 }}>
            "We envision a resilient, self-reliant, and integrated society that promotes dignity and mutual community growth."
          </p>
          <button 
            onClick={() => navigate('/about')} 
            style={{ padding: '14px 32px', background: 'white', color: '#16a34a', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '700', cursor: 'pointer' }}
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
