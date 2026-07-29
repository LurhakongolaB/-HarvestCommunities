import { useState, useEffect } from 'react';
import api from '../../services/api';
import ImageUploader from '../../components/common/ImageUploader';

export default function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [files, setFiles] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({ 
    title: '', slug: '', description: '', date: '', location: '', category: 'Education', published: false 
  });

  useEffect(() => { 
    fetchStories(); 
  }, []);

  const fetchStories = async () => {
    try {
      const res = await api.get('/impact-stories');
      setStories(res.data.data.stories || []);
    } catch (err) { 
      console.error('Failed to fetch stories:', err); 
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
        await api.put(`/impact-stories/${editingId}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.post('/impact-stories', data, { headers: { 'Content-Type': 'multipart/form-data' } });
      }

      setFormData({ title: '', slug: '', description: '', date: '', location: '', category: 'Education', published: false });
      setFiles([]); 
      setEditingId(null); 
      setShowForm(false);
      fetchStories();
      alert('Story saved successfully!');
    } catch (err) { 
      alert('Error: ' + (err.response?.data?.message || err.message)); 
    } finally { 
      setSubmitting(false); 
    }
  };

  const handleEdit = (story) => {
    setFormData({ 
      title: story.title, 
      slug: story.slug, 
      description: story.description, 
      date: new Date(story.date).toISOString().split('T')[0], 
      location: story.location, 
      category: story.category, 
      published: story.published 
    });
    setEditingId(story._id); 
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this story?')) return;
    try { 
      await api.delete(`/impact-stories/${id}`); 
      fetchStories(); 
    } catch (err) { 
      alert('Error deleting'); 
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Impact Stories</h1>
        <button 
          onClick={() => { 
            setShowForm(!showForm); 
            setEditingId(null); 
            setFormData({ title: '', slug: '', description: '', date: '', location: '', category: 'Education', published: false }); 
            setFiles([]); 
          }} 
          style={{ padding: '12px 24px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
        >
          {showForm ? 'Cancel' : '+ New Story'}
        </button>
      </div>

      {showForm && (
        <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h2 style={{ marginTop: 0, marginBottom: '25px' }}>{editingId ? 'Edit Story' : 'Create New Story'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Title *</label>
                <input type="text" name="title" required value={formData.title} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Slug *</label>
                <input type="text" name="slug" required value={formData.slug} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Date *</label>
                <input type="date" name="date" required value={formData.date} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Location *</label>
                <input type="text" name="location" required value={formData.location} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Description *</label>
              <textarea name="description" required rows="5" value={formData.description} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }}></textarea>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '15px', fontWeight: '600' }}>Upload Images</label>
              <ImageUploader files={files} setFiles={setFiles} />
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} style={{ width: '20px', height: '20px' }} />
                <span style={{ fontWeight: '600' }}>Publish immediately</span>
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={submitting} 
              style={{ width: '100%', padding: '14px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', opacity: submitting ? 0.7 : 1 }}
            >
              {submitting ? 'Saving...' : 'Save Story'}
            </button>
          </form>
        </div>
      )}

      {loading ? (
        <p>Loading stories...</p>
      ) : stories.length === 0 ? (
        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>
          No stories yet. Click "+ New Story" to create one.
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {stories.map(story => (
            <div key={story._id} style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>{story.title}</h3>
                  <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', background: story.published ? '#dcfce7' : '#fef3c7', color: story.published ? '#166534' : '#92400e' }}>
                    {story.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '14px' }}>
                  📍 {story.location} • 📅 {new Date(story.date).toLocaleDateString()} • 📷 {story.images?.length || 0} images
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleEdit(story)} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleDelete(story._id)} style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
