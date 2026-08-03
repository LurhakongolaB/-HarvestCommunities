export default function Livelihood() {
  return (
    <div>
    <div style={{ display: 'flex', height: 'calc(100vh - 76px)', overflow: 'hidden', background: '#ffffff' }}>
      {/* Image Div (Left side for variety) */}
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        <img src="/images/poultry.jpeg" alt="Livelihood Programs" style={{ width: '100%', height: '100%', paddingLeft: '30px',paddingBottom: '100px',paddingTop: '50px', objectFit: 'cover' }} />
      </div>
      {/* Text Div */}
      <div style={{ flex: 1, padding: '0 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '18px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>What We Do</span>
        <h1 style={{ fontSize: '35px', fontWeight: '800', color: '#111827', marginBottom: '5px', lineHeight: '1.1', marginTop: 0 }}>Livelihood Programs</h1>

        <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
          Our livelihood programs provide practical skills and resources to help community members achieve economic independence and food security.
        </p>
        <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px', margin: 0, fontSize: '16px' }}>
          <li>- Sustainable agriculture training</li>
          <li>- Poultry farming and livestock management</li>
          <li>- Crop cultivation techniques</li>
          <li>- Market linkage and value chains</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
