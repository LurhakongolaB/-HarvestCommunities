export default function Education() {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 76px)', overflow: 'hidden', background: '#ffffff' }}>
      {/* Text Div */}
      <div style={{ flex: 1, padding: '0 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>What We Do</span>
        <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#111827', marginBottom: '20px', lineHeight: '1.1', marginTop: 0 }}>Education Programs</h1>
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
          We provide adult education and literacy programs to ensure everyone has access to learning opportunities regardless of age or background.
        </p>
        <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px', margin: 0, fontSize: '16px' }}>
          <li>Adult Basic Education (ABE)</li>
          <li>Literacy and numeracy classes</li>
          <li>Life skills training</li>
          <li>Financial literacy</li>
        </ul>
      </div>
      {/* Image Div */}
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        <img src="/public/images/education.jpeg" alt="Education Programs" style={{ width: '100%', height: '100%', paddingLeft: '20px',paddingBottom: '120px',paddingTop: '50px', paddingRight:'30px', objectFit: 'cover'  }} />
      </div>
    </div>
  );
}
