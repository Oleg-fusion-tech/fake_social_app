import axios from './axiosInstance';

export const signInUser = async () => {
  const res = await axios.get('/users');
  return res.data.user;
}

export const createUser = async (name) => {
  const res = await axios.post('/users', { name });
  localStorage.setItem('id', res.data.user.id);
  return res.data.user;
}

export const setUserColor = async ({ color, id }) => {
  const res = await axios.put(`/users/${id}`, { color });
  return res.data.user;
}