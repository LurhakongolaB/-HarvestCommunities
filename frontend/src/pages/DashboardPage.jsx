import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Welcome, {user?.name}!</h1>
      <div style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <p>Role: <strong style={{ color: '#16a34a' }}>{user?.role}</strong></p>
        <p>Email: {user?.email}</p>
        <div style={{ marginTop: '20px', padding: '15px', background: '#f0fdf4', borderRadius: '6px', border: '1px solid #dcfce7', color: '#166534' }}>
          🎉 Backend Connection Successful!
        </div>
      </div>
    </div>
  );
}
