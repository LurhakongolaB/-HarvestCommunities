export default function WomenEmpowerment() {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 76px)', overflow: 'hidden', background: '#ffffff' }}>
      {/* Text Div */}
      <div style={{ flex: 1, padding: '0 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>What We Do</span>
        <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#111827', marginBottom: '20px', lineHeight: '1.1', marginTop: 0 }}>Women Empowerment</h1>
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
          SUHACO is dedicated to empowering women through economic opportunities, skills training, and leadership development. We believe that when women thrive, entire communities benefit.
        </p>
        <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px', margin: 0, fontSize: '16px' }}>
          <li>- Village Savings and Loan Associations (VSLA)</li>
          <li>- Entrepreneurship training and mentorship</li>
          <li>- Leadership and advocacy skills</li>
          <li>- Access to microfinance opportunities</li>
        </ul>
      </div>
      {/* Image Div */}
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        <img src="/images/womeEmpowerment.jpg" alt="Women Empowerment" style={{ width: '100%', height: '100%', paddingLeft: '10px',paddingBottom: '100px',paddingTop: '50px', paddingRight:'30px', objectFit: 'cover'  }} />
      </div>
    </div>
  );
}
