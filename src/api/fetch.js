// Make sure to include the Axios library in your HTML file using a script tag before using this code.
import axios from 'axios';

const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

const UNSPLASH_ROOT = 'https://api.unsplash.com';
export const getPhotosByQuery = async (query) => { // Pass the query parameter here
    try {
      const response = await axios.get(
        `${UNSPLASH_ROOT}/search/photos?client_id=${clientId}&query=${query}&per_page=20`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching photos:', error);
      return null;
    }
  };





