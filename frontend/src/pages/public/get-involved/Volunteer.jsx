import { useState } from 'react';

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 76px)', overflow: 'hidden', background: '#ffffff' }}>
      
      {/* Left Div: Statement & Form */}
      <div style={{ flex: 1, padding: '0 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>Get Involved</span>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', marginBottom: '15px', lineHeight: '1.1', marginTop: 0 }}>Become a Volunteer</h1>
        
        {/* Humanitarian Statement */}
        <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #16a34a', marginBottom: '25px' }}>
          <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
            "In the heart of Kakuma, hope is built by hands working together. By volunteering with SUHACO, you aren't just offering your time—you are directly empowering refugees and vulnerable host communities to build a self-reliant future. Whether you have skills in education, agriculture, healthcare, or community organizing, your contribution creates ripples of lasting change. Join us in turning compassion into action."
          </p>
        </div>

        {submitted ? (
          <div style={{ background: '#dcfce7', color: '#166534', padding: '20px', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>
            Thank you for your heart to serve! We will be in touch with you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Full Name *</label>
                <input type="text" required style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Email Address *</label>
                <input type="email" required style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '14px' }} />
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Area of Expertise / Skills</label>
              <input type="text" placeholder="e.g., Teaching, Agriculture, Healthcare, IT" style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '14px' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Why do you want to volunteer with SUHACO? *</label>
              <textarea required rows="3" style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '14px', resize: 'none' }}></textarea>
            </div>
            
            <button type="submit" style={{ 
              padding: '14px', 
              background: '#16a34a', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              fontSize: '16px', 
              fontWeight: '700', 
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(22, 163, 74, 0.2)'
            }}>
              Submit Application
            </button>
          </form>
        )}
      </div>

      {/* Right Div: Inspiring Image */}
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        {/* Make sure to add an image named 'volunteer.jpg' to your public/images folder! */}
        <img 
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80" 
          alt="Volunteers helping community" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        {/* Optional subtle overlay to make it look premium */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 100%)' }}></div>
      </div>
      
    </div>
  );
}
