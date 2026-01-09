import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      showToast('Passwords do not match!', 'error');
      return;
    }
    localStorage.setItem('signupData', JSON.stringify(formData));
    showToast('Account created successfully! (Demo)', 'success');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🍌</div>
            <h2 className="text-3xl font-bold gradient-text">Join BananaShop</h2>
            <p className="text-gray-600 mt-2">Create your account today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 btn-ripple font-semibold text-lg"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;