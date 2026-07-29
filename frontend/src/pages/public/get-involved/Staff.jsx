export default function StaffPortal() {
  return (
    <div style={{ padding: '60px 5%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>Staff Portal</h1>
      <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>Access internal resources and tools.</p>
      
      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: '#16a34a', marginBottom: '20px' }}>Staff Login</h2>
        <p style={{ color: '#4b5563', marginBottom: '30px' }}>Please use your staff credentials to access the portal.</p>
        <button 
          onClick={() => window.open('/admin/login', '_blank')}
          style={{ padding: '15px 40px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '16px' }}
        >
          Open Login in New Tab
        </button>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f9fafb', borderRadius: '8px' }}>
        <p style={{ color: '#6b7280', margin: 0 }}>
          For technical support, contact: <a href="mailto:tech@suhaco.org" style={{ color: '#16a34a' }}>tech@suhaco.org</a>
        </p>
      </div>
    </div>
  );
}
