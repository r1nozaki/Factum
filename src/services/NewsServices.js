import axios from 'axios';

const API_KEY = 'zjYcNuCxSgQg9V4KbNULkmCjW4tamt6N4iEjzLIh';
const BASE_URL = 'https://api.thenewsapi.com/v1/news';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_token: API_KEY,
    locale: 'us',
    language: 'en',
  },
});

const getTopOneNews = async () => {
  try {
    const response = await api.get('/top', {
      params: { limit: 1 },
    });
    return response.data.data[0];
  } catch (error) {
    console.error('Error receiving top news:', error);
    return null;
  }
};

export { getTopOneNews };
