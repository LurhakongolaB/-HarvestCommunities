import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function PublicStoriesPage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await api.get('/impact-stories');
        // Only show published stories to the public
        const published = (res.data.data.stories || []).filter(s => s.published);
        setStories(published);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    fetchStories();
  }, []);

  return (
    <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px', color: '#111827' }}>Impact Stories</h1>
      <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>Real stories of change from our communities.</p>

      {loading ? <p>Loading stories...</p> : stories.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>No published stories yet. Check back soon!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {stories.map(story => (
            <div key={story._id} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              {story.images && story.images.length > 0 && (
                <img src={story.images[0].url} alt={story.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              )}
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '12px', color: '#16a34a', fontWeight: '600', textTransform: 'uppercase' }}>{story.category}</span>
                <h3 style={{ fontSize: '20px', margin: '10px 0', color: '#111827' }}>{story.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '15px' }}>📍 {story.location} • {new Date(story.date).toLocaleDateString()}</p>
                <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '15px' }}>{story.description.substring(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
