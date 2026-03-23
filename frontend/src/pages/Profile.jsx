import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import authService from '../services/auth.service';
import { FiSave, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({ username: '', email: '', provider: '' });
  const [passwords, setPasswords] = useState({ oldPassword: '', newPassword: '' });
  
  const [msg, setMsg] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await authService.getProfile();
      setProfile(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setMsg({ type: '', text: '' });
    try {
      await authService.updateProfile(profile.username);
      setMsg({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err) {
      setMsg({ type: 'error', text: err.response?.data?.message || 'Error updating profile' });
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setMsg({ type: '', text: '' });
    try {
      await authService.changePassword(passwords.oldPassword, passwords.newPassword);
      setMsg({ type: 'success', text: 'Password changed successfully!' });
      setPasswords({ oldPassword: '', newPassword: '' });
    } catch (err) {
      setMsg({ type: 'error', text: err.response?.data?.message || 'Error changing password' });
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem' }}>Loading profile...</div>;

  const isLocal = profile.provider === 'LOCAL';

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Account Settings</h1>

      {msg.text && (
        <div style={{ 
          backgroundColor: msg.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', 
          color: msg.type === 'error' ? '#ef4444' : '#10b981', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginBottom: '1.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          {msg.type === 'error' ? <FiAlertCircle /> : <FiCheckCircle />} {msg.text}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Profile Information</h2>
          <form onSubmit={handleProfileUpdate}>
            <div className="form-group">
              <label className="form-label">Email (Read Only)</label>
              <input type="email" value={profile.email} disabled style={{ opacity: 0.6 }} />
            </div>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input type="text" value={profile.username} onChange={e => setProfile({...profile, username: e.target.value})} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
              <FiSave /> Update Profile
            </button>
          </form>
        </div>

        {isLocal && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Change Password</h2>
            <form onSubmit={handlePasswordChange}>
              <div className="form-group">
                <label className="form-label">Current Password</label>
                <input type="password" value={passwords.oldPassword} onChange={e => setPasswords({...passwords, oldPassword: e.target.value})} required />
              </div>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label">New Password</label>
                <input type="password" value={passwords.newPassword} onChange={e => setPasswords({...passwords, newPassword: e.target.value})} required minLength={6} />
              </div>
              <button type="submit" className="btn btn-secondary">
                Update Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
