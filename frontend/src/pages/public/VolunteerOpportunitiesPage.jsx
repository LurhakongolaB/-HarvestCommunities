import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function VolunteerOpportunitiesPage() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const res = await api.get('/volunteers');
        const published = (res.data.data.volunteers || []).filter(vol => vol.published);
        setVolunteers(published);
      } catch (err) { 
        console.error('Failed to fetch volunteer opportunities:', err); 
      } finally { 
        setLoading(false); 
      }
    };
    fetchVolunteers();
  }, []);

  return (
    <div style={{ padding: '60px 5%', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>Volunteer Opportunities</h1>
      <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>Make a difference by volunteering your time and skills.</p>

      {loading ? (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading opportunities...</p>
      ) : volunteers.length === 0 ? (
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', color: '#6b7280' }}>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>No volunteer opportunities at the moment</p>
          <p>Check back soon or contact us to learn how you can help!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '25px' }}>
          {volunteers.map(vol => {
            const isClosed = vol.deadline && new Date(vol.deadline) < new Date();
            const postedDate = vol.createdAt ? new Date(vol.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recently';
            const deadline = vol.deadline ? new Date(vol.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Ongoing';
            
            return (
              <div key={vol._id} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: '4px solid #f59e0b' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h3 style={{ fontSize: '24px', margin: '0 0 10px 0', color: '#111827' }}>{vol.role}</h3>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                      <span style={{ color: '#6b7280', fontSize: '14px' }}>📍 {vol.location}</span>
                      <span style={{ color: '#6b7280', fontSize: '14px' }}>⏰ {vol.commitment}</span>
                    </div>
                  </div>
                  <span style={{ 
                    padding: '6px 12px', 
                    background: isClosed ? '#fee2e2' : '#fef3c7', 
                    color: isClosed ? '#991b1b' : '#92400e', 
                    borderRadius: '6px', 
                    fontSize: '12px', 
                    fontWeight: '600' 
                  }}>
                    {isClosed ? 'Closed' : 'Open'}
                  </span>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ margin: '0 0 8px 0', color: '#374151', fontSize: '16px' }}>Role Description</h4>
                  <p style={{ color: '#4b5563', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap' }}>{vol.description}</p>
                </div>
                
                {vol.requirements && (
                  <div style={{ marginBottom: '15px' }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#374151', fontSize: '16px' }}>Requirements</h4>
                    <p style={{ color: '#4b5563', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap' }}>{vol.requirements}</p>
                  </div>
                )}
                
                <div style={{ 
                  borderTop: '1px solid #e5e7eb', 
                  paddingTop: '15px', 
                  marginTop: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '15px'
                }}>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
                       Posted: {postedDate}
                    </p>
                    <p style={{ color: isClosed ? '#991b1b' : '#6b7280', fontSize: '14px', margin: 0, fontWeight: isClosed ? '600' : '400' }}>
                       Deadline: {deadline}
                    </p>
                  </div>
                  <button 
                    onClick={() => window.location.href = '/get-involved/volunteer'}
                    style={{ 
                      padding: '10px 20px', 
                      background: isClosed ? '#9ca3af' : '#f59e0b', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '6px', 
                      cursor: isClosed ? 'not-allowed' : 'pointer', 
                      fontWeight: '600' 
                    }}
                    disabled={isClosed}
                  >
                    {isClosed ? 'Opportunity Closed' : 'Apply to Volunteer'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
