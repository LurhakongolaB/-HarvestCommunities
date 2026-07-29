import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reports() {
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    { 
      year: '2024', 
      title: 'Annual Report 2024', 
      summary: 'Our 2024 annual report highlights the transformative impact of SUHACO\'s programs in Kakuma Refugee Camp, including 500+ women empowered through VSLA, 200 families trained in sustainable agriculture, and 150 adults completing literacy programs.',
      pages: 24,
      size: '2.4 MB',
      public: true
    },
    { 
      year: '2023', 
      title: 'Annual Report 2023', 
      summary: 'SUHACO\'s inaugural annual report documenting our founding year, establishing community programs, and building partnerships with local leaders and international supporters.',
      pages: 18,
      size: '1.8 MB',
      public: true
    }
  ];

  return (
    <div style={{ padding: '60px 5%', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>Annual Reports</h1>
      <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>Transparency and accountability in our work.</p>
      
      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: '#16a34a', marginBottom: '30px', fontSize: '24px' }}>Our Impact Reports</h2>
        <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '30px' }}>
          View our annual reports to see how we're making a difference in the communities we serve. For detailed financial reports and donor-specific documents, please contact us directly.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {reports.map((report, i) => (
            <div key={i} style={{ 
              padding: '25px', 
              background: '#f9fafb', 
              borderRadius: '8px', 
              border: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div style={{ flex: 1, minWidth: '250px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#111827', fontSize: '20px' }}>{report.title}</h3>
                <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '14px' }}>
                  📄 {report.pages} pages • 💾 {report.size}
                </p>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '15px', lineHeight: '1.5' }}>
                  {report.summary}
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setSelectedReport(report)}
                  style={{ 
                    padding: '10px 20px', 
                    background: '#16a34a', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '6px', 
                    cursor: 'pointer', 
                    fontWeight: '600',
                    fontSize: '14px'
                  }}
                >
                  Read More
                </button>
                <button 
                  onClick={() => navigate('/contact?subject=Report%20Request&message=I%20would%20like%20to%20request%20the%20download%20link%20for%20' + report.title)}
                  style={{ 
                    padding: '10px 20px', 
                    background: 'white', 
                    color: '#16a34a', 
                    border: '2px solid #16a34a', 
                    borderRadius: '6px', 
                    cursor: 'pointer', 
                    fontWeight: '600',
                    fontSize: '14px'
                  }}
                >
                  Request Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', padding: '20px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #dcfce7' }}>
          <p style={{ margin: 0, color: '#166534', fontSize: '14px', textAlign: 'center' }}>
             <strong>Donors:</strong> Contact us at <a href="mailto:reports@suhaco.org" style={{ color: '#16a34a' }}>reports@suhaco.org</a> for exclusive access to detailed financial reports and impact metrics.
          </p>
        </div>
      </div>

      {/* Report Preview Modal */}
      {selectedReport && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'rgba(0,0,0,0.8)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            maxWidth: '800px', 
            width: '100%', 
            maxHeight: '80vh', 
            overflow: 'auto',
            padding: '40px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 style={{ margin: 0, color: '#111827', fontSize: '28px' }}>{selectedReport.title}</h2>
              <button 
                onClick={() => setSelectedReport(null)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  fontSize: '32px', 
                  cursor: 'pointer', 
                  color: '#6b7280',
                  padding: '0 10px'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '16px' }}>
              <h3 style={{ color: '#16a34a', marginBottom: '15px' }}>Executive Summary</h3>
              <p>{selectedReport.summary}</p>
              
              <h3 style={{ color: '#16a34a', marginBottom: '15px', marginTop: '30px' }}>Key Highlights</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Community-led development initiatives</li>
                <li>Sustainable agriculture programs</li>
                <li>Women's economic empowerment through VSLA</li>
                <li>Education and literacy programs</li>
                <li>Leadership development training</li>
              </ul>

              <h3 style={{ color: '#16a34a', marginBottom: '15px', marginTop: '30px' }}>Document Information</h3>
              <p><strong>Pages:</strong> {selectedReport.pages}</p>
              <p><strong>File Size:</strong> {selectedReport.size}</p>
              <p><strong>Year:</strong> {selectedReport.year}</p>

              <div style={{ marginTop: '30px', padding: '20px', background: '#f9fafb', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ marginBottom: '15px', color: '#6b7280' }}>
                  To download the full PDF report, please contact us or log in as a donor.
                </p>
                <button 
                  onClick={() => {
                    navigate('/contact?subject=Report%20Download%20Request&message=I%20would%20like%20to%20download%20' + selectedReport.title);
                    setSelectedReport(null);
                  }}
                  style={{ 
                    padding: '12px 30px', 
                    background: '#16a34a', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '6px', 
                    cursor: 'pointer', 
                    fontWeight: '600'
                  }}
                >
                  Request Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
