export default function LeadershipImpact() {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 76px)', overflow: 'hidden', background: '#ffffff' }}>
      
      {/* Text Div: Professional Statement */}
      <div style={{ flex: 1, padding: '0 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>Our Impact</span>
        <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#111827', marginBottom: '20px', lineHeight: '1.1', marginTop: 0 }}>Community Leadership</h1>
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
          At SUHACO, we believe that sustainable change must be driven from within. Our leadership programs are designed to identify, train, and support emerging leaders from refugee and host communities.
        </p>
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '0' }}>
          By equipping individuals with governance, advocacy, and conflict-resolution skills, we ensure that vulnerable groups—including women, youth, and persons with disabilities—have a strong voice in the decision-making processes that affect their lives.
        </p>
      </div>

      {/* Image Div */}
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        {/* Make sure to add an image named 'impact-leadership.jpg' to your public/images folder! */}
        <img 
          src="/images/Leadership.jpeg" 
          alt="Community Leadership" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
    </div>
  );
}
