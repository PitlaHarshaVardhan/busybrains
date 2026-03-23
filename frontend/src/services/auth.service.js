import api from './api';

const login = (email, password) => {
  return api.post('/auth/login', { email, password }).then((response) => {
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const register = (username, email, password) => {
  return api.post('/auth/register', {
    username,
    email,
    password,
  });
};

const getProfile = () => {
  return api.get('/users/profile');
};

const updateProfile = (username) => {
  return api.put('/users/profile', { username });
};

const changePassword = (oldPassword, newPassword) => {
  return api.put('/users/change-password', { oldPassword, newPassword });
};

const authService = {
  login,
  register,
  getProfile,
  updateProfile,
  changePassword,
};

export default authService;
