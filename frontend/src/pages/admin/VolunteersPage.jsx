import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function VolunteersPage() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({ 
    role: '', description: '', requirements: '', commitment: 'Flexible', location: '', deadline: '', published: false 
  });

  useEffect(() => { fetchVolunteers(); }, []);

  const fetchVolunteers = async () => {
    try {
      const res = await api.get('/volunteers');
      setVolunteers(res.data.data.volunteers || []);
    } catch (err) { console.log('Volunteers route not ready yet.'); } finally { setLoading(false); }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editingId) await api.put(`/volunteers/${editingId}`, formData);
      else await api.post('/volunteers', formData);
      
      setFormData({ role: '', description: '', requirements: '', commitment: 'Flexible', location: '', deadline: '', published: false });
      setEditingId(null); setShowForm(false);
      fetchVolunteers();
      alert('Volunteer call saved!');
    } catch (err) { alert('Error: ' + (err.response?.data?.message || 'Backend route pending.')); } finally { setSubmitting(false); }
  };

  const handleEdit = (vol) => {
    setFormData({ role: vol.role, description: vol.description, requirements: vol.requirements, commitment: vol.commitment, location: vol.location, deadline: vol.deadline ? new Date(vol.deadline).toISOString().split('T')[0] : '', published: vol.published });
    setEditingId(vol._id); setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this volunteer call?')) return;
    try { await api.delete(`/volunteers/${id}`); fetchVolunteers(); } catch (err) { alert('Error deleting'); }
  };

  const inputStyle = { width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' };
  const labelStyle = { display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '14px' };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Call for Volunteers</h1>
        <button onClick={() => { setShowForm(!showForm); setEditingId(null); setFormData({ role: '', description: '', requirements: '', commitment: 'Flexible', location: '', deadline: '', published: false }); }} style={{ padding: '12px 24px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
          {showForm ? 'Cancel' : '+ New Call'}
        </button>
      </div>

      {showForm && (
        <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h2 style={{ marginTop: 0, marginBottom: '25px' }}>{editingId ? 'Edit Volunteer Call' : 'Create New Volunteer Call'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div><label style={labelStyle}>Volunteer Role *</label><input type="text" name="role" required value={formData.role} onChange={handleChange} style={inputStyle} /></div>
              <div><label style={labelStyle}>Time Commitment</label><select name="commitment" value={formData.commitment} onChange={handleChange} style={inputStyle}><option>Flexible</option><option>Weekly (1-5 hrs)</option><option>Weekly (5-10 hrs)</option><option>Monthly Event</option></select></div>
              <div><label style={labelStyle}>Location *</label><input type="text" name="location" required value={formData.location} onChange={handleChange} style={inputStyle} /></div>
              <div><label style={labelStyle}>Application Deadline *</label><input type="date" name="deadline" required value={formData.deadline} onChange={handleChange} style={inputStyle} /></div>
            </div>
            <div style={{ marginBottom: '20px' }}><label style={labelStyle}>Role Description *</label><textarea name="description" required rows="4" value={formData.description} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }}></textarea></div>
            <div style={{ marginBottom: '20px' }}><label style={labelStyle}>Requirements / Skills Needed</label><textarea name="requirements" rows="4" value={formData.requirements} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }}></textarea></div>
            <div style={{ marginBottom: '25px' }}><label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}><input type="checkbox" name="published" checked={formData.published} onChange={handleChange} style={{ width: '20px', height: '20px' }} /><span style={{ fontWeight: '600' }}>Publish immediately</span></label></div>
            <button type="submit" disabled={submitting} style={{ width: '100%', padding: '14px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', opacity: submitting ? 0.7 : 1 }}>{submitting ? 'Saving...' : 'Save Call'}</button>
          </form>
        </div>
      )}

      {loading ? <p>Loading...</p> : volunteers.length === 0 ? <div style={{ background: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>No volunteer calls yet.</div> : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {volunteers.map(vol => (
            <div key={vol._id} style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>{vol.role}</h3>
                  <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', background: '#fce7f3', color: '#9d174d' }}>{vol.commitment}</span>
                  <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', background: vol.published ? '#dcfce7' : '#fef3c7', color: vol.published ? '#166534' : '#92400e' }}>{vol.published ? 'Published' : 'Draft'}</span>
                </div>
                <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '14px' }}>📍 {vol.location} • ⏳ Deadline: {vol.deadline ? new Date(vol.deadline).toLocaleDateString() : 'N/A'}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleEdit(vol)} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleDelete(vol._id)} style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
