import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get('/jobs');
        // Only show published jobs to the public
        const published = (res.data.data.jobs || []).filter(job => job.published);
        setJobs(published);
      } catch (err) { 
        console.error('Failed to fetch jobs:', err); 
      } finally { 
        setLoading(false); 
      }
    };
    fetchJobs();
  }, []);

  return (
    <div style={{ padding: '60px 5%', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>Career Opportunities</h1>
      <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>Join our team and make a meaningful impact in refugee communities.</p>

      {loading ? (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading opportunities...</p>
      ) : jobs.length === 0 ? (
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', color: '#6b7280' }}>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>No job openings at the moment</p>
          <p>Check back soon for new opportunities!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '25px' }}>
          {jobs.map(job => (
            <div key={job._id} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: '4px solid #16a34a' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '24px', margin: '0 0 10px 0', color: '#111827' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>📍 {job.location}</span>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>💼 {job.type}</span>
                    {job.department && <span style={{ color: '#6b7280', fontSize: '14px' }}>🏢 {job.department}</span>}
                  </div>
                </div>
                <span style={{ 
                  padding: '6px 12px', 
                  background: job.deadline && new Date(job.deadline) < new Date() ? '#fee2e2' : '#dcfce7', 
                  color: job.deadline && new Date(job.deadline) < new Date() ? '#991b1b' : '#166534', 
                  borderRadius: '6px', 
                  fontSize: '12px', 
                  fontWeight: '600' 
                }}>
                  {job.deadline && new Date(job.deadline) < new Date() ? 'Closed' : 'Open'}
                </span>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#374151', fontSize: '16px' }}>Description</h4>
                <p style={{ color: '#4b5563', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap' }}>{job.description}</p>
              </div>
              
              {job.requirements && (
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ margin: '0 0 8px 0', color: '#374151', fontSize: '16px' }}>Requirements</h4>
                  <p style={{ color: '#4b5563', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap' }}>{job.requirements}</p>
                </div>
              )}
              
              <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '15px', marginTop: '15px' }}>
                <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 10px 0' }}>
                   Application Deadline: {job.deadline ? new Date(job.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No deadline'}
                </p>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  style={{ 
                    padding: '10px 20px', 
                    background: job.deadline && new Date(job.deadline) < new Date() ? '#9ca3af' : '#16a34a', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '6px', 
                    cursor: job.deadline && new Date(job.deadline) < new Date() ? 'not-allowed' : 'pointer', 
                    fontWeight: '600' 
                  }}
                  disabled={job.deadline && new Date(job.deadline) < new Date()}
                >
                  {job.deadline && new Date(job.deadline) < new Date() ? 'Position Closed' : 'Apply Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
