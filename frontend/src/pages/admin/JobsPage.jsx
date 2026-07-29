import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({ 
    title: '', department: '', type: 'Full-Time', location: '', description: '', requirements: '', deadline: '', published: false 
  });

  useEffect(() => { fetchJobs(); }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get('/jobs');
      setJobs(res.data.data.jobs || []);
    } catch (err) { console.log('Jobs route not ready yet.'); } finally { setLoading(false); }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editingId) await api.put(`/jobs/${editingId}`, formData);
      else await api.post('/jobs', formData);
      
      setFormData({ title: '', department: '', type: 'Full-Time', location: '', description: '', requirements: '', deadline: '', published: false });
      setEditingId(null); setShowForm(false);
      fetchJobs();
      alert('Job posting saved!');
    } catch (err) { alert('Error: ' + (err.response?.data?.message || 'Backend route pending.')); } finally { setSubmitting(false); }
  };

  const handleEdit = (job) => {
    setFormData({ title: job.title, department: job.department, type: job.type, location: job.location, description: job.description, requirements: job.requirements, deadline: job.deadline ? new Date(job.deadline).toISOString().split('T')[0] : '', published: job.published });
    setEditingId(job._id); setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this job?')) return;
    try { await api.delete(`/jobs/${id}`); fetchJobs(); } catch (err) { alert('Error deleting'); }
  };

  const inputStyle = { width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' };
  const labelStyle = { display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '14px' };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Job Postings</h1>
        <button onClick={() => { setShowForm(!showForm); setEditingId(null); setFormData({ title: '', department: '', type: 'Full-Time', location: '', description: '', requirements: '', deadline: '', published: false }); }} style={{ padding: '12px 24px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
          {showForm ? 'Cancel' : '+ Post a Job'}
        </button>
      </div>

      {showForm && (
        <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h2 style={{ marginTop: 0, marginBottom: '25px' }}>{editingId ? 'Edit Job' : 'Create New Job Posting'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div><label style={labelStyle}>Job Title *</label><input type="text" name="title" required value={formData.title} onChange={handleChange} style={inputStyle} /></div>
              <div><label style={labelStyle}>Department / Category</label><input type="text" name="department" value={formData.department} onChange={handleChange} style={inputStyle} /></div>
              <div><label style={labelStyle}>Job Type</label><select name="type" value={formData.type} onChange={handleChange} style={inputStyle}><option>Full-Time</option><option>Part-Time</option><option>Contract</option><option>Internship</option></select></div>
              <div><label style={labelStyle}>Location *</label><input type="text" name="location" required value={formData.location} onChange={handleChange} style={inputStyle} /></div>
              <div style={{ gridColumn: '1 / -1' }}><label style={labelStyle}>Application Deadline *</label><input type="date" name="deadline" required value={formData.deadline} onChange={handleChange} style={inputStyle} /></div>
            </div>
            <div style={{ marginBottom: '20px' }}><label style={labelStyle}>Job Description *</label><textarea name="description" required rows="4" value={formData.description} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }}></textarea></div>
            <div style={{ marginBottom: '20px' }}><label style={labelStyle}>Requirements / Qualifications</label><textarea name="requirements" rows="4" value={formData.requirements} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }}></textarea></div>
            <div style={{ marginBottom: '25px' }}><label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}><input type="checkbox" name="published" checked={formData.published} onChange={handleChange} style={{ width: '20px', height: '20px' }} /><span style={{ fontWeight: '600' }}>Publish immediately</span></label></div>
            <button type="submit" disabled={submitting} style={{ width: '100%', padding: '14px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', opacity: submitting ? 0.7 : 1 }}>{submitting ? 'Saving...' : 'Save Job'}</button>
          </form>
        </div>
      )}

      {loading ? <p>Loading...</p> : jobs.length === 0 ? <div style={{ background: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>No job postings yet.</div> : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {jobs.map(job => (
            <div key={job._id} style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>{job.title}</h3>
                  <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', background: '#e0e7ff', color: '#3730a3' }}>{job.type}</span>
                  <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', background: job.published ? '#dcfce7' : '#fef3c7', color: job.published ? '#166534' : '#92400e' }}>{job.published ? 'Published' : 'Draft'}</span>
                </div>
                <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '14px' }}>📍 {job.location} •  {job.department} • ⏳ Deadline: {job.deadline ? new Date(job.deadline).toLocaleDateString() : 'N/A'}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleEdit(job)} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleDelete(job._id)} style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
