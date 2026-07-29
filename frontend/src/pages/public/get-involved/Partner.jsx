export default function Partner() {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 76px)', overflow: 'hidden', background: '#ffffff' }}>
      
      {/* Text Div */}
      <div style={{ flex: 1, padding: '0 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>Get Involved</span>
        <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#111827', marginBottom: '15px', lineHeight: '1.1', marginTop: 0 }}>Partner with Us</h1>
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
          We work directly with refugee and host communities in Kakuma, ensuring your support creates sustainable, long-term impact rather than temporary relief.
        </p>
        
        <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px', margin: '0 0 30px 0', fontSize: '16px' }}>
          <li>Direct, measurable community impact</li>
          <li>Transparent reporting and accountability</li>
          <li>Sustainable, community-led development models</li>
          <li>Deep local expertise and trusted relationships</li>
        </ul>

        <div>
          <a 
            href="/contact?subject=Partnership%20Inquiry" 
            style={{ 
              display: 'inline-block',
              padding: '14px 32px', 
              background: '#16a34a', 
              color: 'white', 
              borderRadius: '8px', 
              textDecoration: 'none', 
              fontWeight: '600', 
              fontSize: '16px',
              boxShadow: '0 4px 6px rgba(22, 163, 74, 0.2)'
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Image Div */}
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80" 
          alt="Community Partnership" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
    </div>
  );
}
