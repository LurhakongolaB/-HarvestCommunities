import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await api.get('/impact-stories');
      const stories = res.data.data.stories || [];
      
      // Flatten all images from all stories into a single array
      const allImages = stories.flatMap(story => 
        (story.images || []).map(img => ({
          ...img,
          storyTitle: story.title,
          storyId: story._id,
          published: story.published
        }))
      );
      
      setImages(allImages);
    } catch (err) {
      console.error('Failed to fetch gallery:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Image Gallery</h1>
          <p style={{ color: '#6b7280', margin: '5px 0 0 0' }}>Centralized view of all {images.length} uploaded images.</p>
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>Loading gallery...</p>
      ) : images.length === 0 ? (
        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center', color: '#6b7280' }}>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>No images found</p>
          <p>Upload images by creating a new Impact Story.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {images.map((img, index) => (
            <div key={`${img.storyId}-${index}`} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}>
              <div style={{ position: 'relative', height: '200px', background: '#f3f4f6' }}>
                <img 
                  src={img.url} 
                  alt={img.caption || 'Gallery image'} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span style={{ 
                  position: 'absolute', top: '10px', right: '10px', 
                  padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600',
                  background: img.published ? '#dcfce7' : '#fef3c7', 
                  color: img.published ? '#166534' : '#92400e' 
                }}>
                  {img.published ? 'Published' : 'Draft'}
                </span>
              </div>
              
              <div style={{ padding: '15px' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#111827', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {img.storyTitle}
                </p>
                {img.caption && (
                  <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#6b7280', fontStyle: 'italic' }}>
                    "{img.caption}"
                  </p>
                )}
                <button 
                  onClick={() => navigate(`/admin/stories`)} 
                  style={{ width: '100%', padding: '8px', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}
                >
                  View in Story
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
