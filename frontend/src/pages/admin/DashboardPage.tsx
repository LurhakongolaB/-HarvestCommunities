import { useAuth } from '../../context/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-secondary-700">Admin Dashboard</h1>
          <button 
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Welcome back, {user?.name}!</h2>
          <p className="text-gray-600">
            You are successfully logged in as <span className="font-bold text-primary-600">{user?.role}</span>.
          </p>
          <p className="text-gray-600 mt-2">
            Email: {user?.email}
          </p>
          <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
            <p className="text-primary-700 font-medium">🎉 Backend Connection Successful!</p>
            <p className="text-sm text-primary-600 mt-1">
              The frontend is successfully communicating with your Express/MongoDB backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
