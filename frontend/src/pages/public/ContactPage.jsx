import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div style={{ padding: '5px 5%', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#111827' }}>Contact Us</h1>
      <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '5px' }}>We'd love to hear from you. Send us a message!</p>

      {sent && <div style={{ background: '#f0fdf4', color: '#166534', padding: '15px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>Message sent successfully!</div>}

      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontWeight: '100' }}>Your Name</label>
          <input type="text" required style={{ width: '100%', padding: '5px', border: '0.25px solid #d1d5db', borderRadius: '0.25px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email Address</label>
          <input type="email" required style={{ width: '100%', padding: '5px', border: '1px solid #d1d5db', borderRadius: '0.25px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Message</label>
          <textarea required rows="3" style={{ width: '100%', padding: '5px', border: '1px solid #d1d5db', borderRadius: 'o.25px', boxSizing: 'border-box' }}></textarea>
        </div>
        <button type="submit" style={{ width: '100%', padding: '5px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '3px', fontSize: '12px', fontWeight: '100', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
