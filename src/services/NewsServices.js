import axios from 'axios';

const API_KEY = '0d03075f54ae00c04f0d140f163ffaf6';
const BASE_URL = 'https://gnews.io/api/v4';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    token: API_KEY,
    lang: 'en',
    country: 'us',
  },
});

const getTopOneNews = async () => {
  try {
    const response = await api.get('/top-headlines', {
      params: { max: 1 },
    });
    return response.data.articles[0];
  } catch (error) {
    console.error('Error receiving top nzews:', error);
    return null;
  }
};

const getNewsByCategory = async (category, limit = 10, page = 1) => {
  try {
    const response = await api.get('/top-headlines', {
      params: {
        topic: category,
        max: limit,
        page,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error(`Error receiving ${category} news:`, error);
    return [];
  }
};

export { getTopOneNews, getNewsByCategory };
