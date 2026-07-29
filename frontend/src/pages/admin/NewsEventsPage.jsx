import { useState, useEffect } from 'react';
import api from '../../services/api';
import ImageUploader from '../../components/common/ImageUploader';

export default function NewsEventsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [files, setFiles] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({ 
    title: '', slug: '', type: 'Event', date: '', time: '', location: '', description: '', published: false 
  });

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    try {
      // Note: If your backend doesn't have this route yet, it will catch the error below
      const res = await api.get('/news-events');
      setItems(res.data.data.items || []);
    } catch (err) { 
      console.log('News/Events route not ready on backend yet, using empty list.');
    } finally { 
      setLoading(false); 
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      files.forEach(file => data.append('images', file));

      if (editingId) {
        await api.put(`/news-events/${editingId}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.post('/news-events', data, { headers: { 'Content-Type': 'multipart/form-data' } });
      }

      setFormData({ title: '', slug: '', type: 'Event', date: '', time: '', location: '', description: '', published: false });
      setFiles([]); setEditingId(null); setShowForm(false);
      fetchItems();
      alert('News/Event saved successfully!');
    } catch (err) { 
      alert('Error: ' + (err.response?.data?.message || 'Backend route may not be ready yet.')); 
    } finally { 
      setSubmitting(false); 
    }
  };

  const handleEdit = (item) => {
    setFormData({ 
      title: item.title, slug: item.slug, type: item.type, 
      date: new Date(item.date).toISOString().split('T')[0], 
      time: item.time || '', location: item.location, 
      description: item.description, published: item.published 
    });
    setEditingId(item._id); setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    try { await api.delete(`/news-events/${id}`); fetchItems(); } catch (err) { alert('Error deleting'); }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>News & Events</h1>
        <button 
          onClick={() => { setShowForm(!showForm); setEditingId(null); setFormData({ title: '', slug: '', type: 'Event', date: '', time: '', location: '', description: '', published: false }); setFiles([]); }} 
          style={{ padding: '12px 24px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
        >
          {showForm ? 'Cancel' : '+ Add New'}
        </button>
      </div>

      {showForm && (
        <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h2 style={{ marginTop: 0, marginBottom: '25px' }}>{editingId ? 'Edit Item' : 'Create New News/Event'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Title *</label>
                <input type="text" name="title" required value={formData.title} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Type</label>
                <select name="type" value={formData.type} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }}>
                  <option>Event</option>
                  <option>News</option>
                  <option>Workshop</option>
                  <option>Announcement</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Date *</label>
                <input type="date" name="date" required value={formData.date} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Time (Optional)</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Location *</label>
                <input type="text" name="location" required value={formData.location} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Description *</label>
              <textarea name="description" required rows="5" value={formData.description} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }}></textarea>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '15px', fontWeight: '600' }}>Upload Banner/Image</label>
              <ImageUploader files={files} setFiles={setFiles} />
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} style={{ width: '20px', height: '20px' }} />
                <span style={{ fontWeight: '600' }}>Publish immediately</span>
              </label>
            </div>
            
            <button type="submit" disabled={submitting} style={{ width: '100%', padding: '14px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', opacity: submitting ? 0.7 : 1 }}>
              {submitting ? 'Saving...' : 'Save Item'}
            </button>
          </form>
        </div>
      )}

      {loading ? <p>Loading...</p> : items.length === 0 ? (
        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>No news or events yet.</div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {items.map(item => (
            <div key={item._id} style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>{item.title}</h3>
                  <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', background: '#e0e7ff', color: '#3730a3' }}>{item.type}</span>
                  <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', background: item.published ? '#dcfce7' : '#fef3c7', color: item.published ? '#166534' : '#92400e' }}>
                    {item.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '14px' }}>
                  📅 {new Date(item.date).toLocaleDateString()} {item.time && `at ${item.time}`} • 📍 {item.location}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleEdit(item)} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleDelete(item._id)} style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
