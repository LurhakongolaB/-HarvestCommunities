import { useState, useEffect } from 'react';
import api from '../../../services/api';

export default function NewsEvents() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await api.get('/news-events');
        const published = (res.data.data.items || []).filter(i => i.published);
        setItems(published);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    fetchItems();
  }, []);

  return (
    <div style={{ padding: '60px 5%', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>News & Events</h1>
      <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>Stay updated with our latest activities and announcements.</p>

      {loading ? <p>Loading...</p> : items.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>No news or events yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: '25px' }}>
          {items.map(item => (
            <div key={item._id} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <span style={{ padding: '5px 12px', background: '#e0e7ff', color: '#3730a3', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>{item.type}</span>
                <span style={{ color: '#6b7280', fontSize: '14px' }}>📅 {new Date(item.date).toLocaleDateString()}</span>
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#111827' }}>{item.title}</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '10px' }}>📍 {item.location}</p>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
