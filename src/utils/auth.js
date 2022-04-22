import { generateRandomKey } from './helper';
import { clearStorage } from './localstorage';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = 'https://homework-gigih-zen.vercel.app/redirect';
const SCOPE = 'playlist-modify-private playlist-read-private';
const STATE = generateRandomKey(16);

export const login = () => {
  window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}`;
};

export const logout = () => {
  clearStorage();
  window.location.replace('/');
};
