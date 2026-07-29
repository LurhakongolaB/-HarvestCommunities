export default function Leadership() {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 76px)', overflow: 'hidden', background: '#ffffff' }}>
      {/* Image Div (Left side for variety) */}
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        <img src="/images/Leadership.jpeg" alt="Leadership Development" style={{  width: '100%', height: '100%', paddingLeft: '30px',paddingBottom: '100px',paddingTop: '50px', objectFit: 'cover' }} />
      </div>
      {/* Text Div */}
      <div style={{ flex: 1, padding: '0 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>What We Do</span>
        <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#111827', marginBottom: '20px', lineHeight: '1.1', marginTop: 0 }}>Leadership Development</h1>
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
          We invest in developing local leadership to ensure communities have the capacity to drive their own development and advocate for their needs.
        </p>
        <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px', margin: 0, fontSize: '16px' }}>
          <li>Leadership and governance training</li>
          <li>Community organizing skills</li>
          <li>Advocacy and representation</li>
          <li>Youth leadership programs</li>
        </ul>
      </div>
    </div>
  );
}
