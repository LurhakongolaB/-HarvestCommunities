export default function Donate() {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 76px)', overflow: 'hidden', background: '#ffffff' }}>
      
      {/* Text Div */}
      <div style={{ flex: 1, padding: '0 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>Support Our Mission</span>
        <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#111827', marginBottom: '15px', lineHeight: '1.1', marginTop: 0 }}>Make a Difference Today</h1>
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '25px' }}>
          Every contribution helps us provide sustainable livelihoods, education, and support to refugees and host communities in Kakuma.
        </p>

        {/* Buy Me a Coffee Button */}
        <a 
          href="https://www.buymeacoffee.com/suhaco" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px',
            padding: '14px 28px', 
            background: '#FFDD00', 
            color: '#000000', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: '700', 
            fontSize: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            marginBottom: '25px',
            width: 'fit-content'
          }}
        >
          <span style={{ fontSize: '20px' }}>☕</span>
          Buy Me a Coffee
        </a>

        {/* Alternative Options */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ padding: '15px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', flex: 1, minWidth: '200px' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#111827', fontSize: '14px' }}>M-Pesa Paybill</h4>
            <p style={{ margin: 0, color: '#4b5563', fontSize: '13px' }}>Paybill: 123456<br/>Account: SUHACO</p>
          </div>
          <div style={{ padding: '15px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', flex: 1, minWidth: '200px' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#111827', fontSize: '14px' }}>Bank Transfer</h4>
            <p style={{ margin: 0, color: '#4b5563', fontSize: '13px' }}>Contact us for details</p>
          </div>
        </div>
      </div>

      {/* Image Div */}
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" 
          alt="Community Support" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
    </div>
  );
}
