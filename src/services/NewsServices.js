import axios from 'axios';

const BASE_URL = 'https://68fe05987c700772bb128ef7.mockapi.io/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getTopOneNews = async () => {
  try {
    const response = await api.get('/news');
    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching top news:', error);
    return null;
  }
};

export const getNewsByCategory = async (category, limit = 10, page = 1) => {
  try {
    const response = await api.get('/news', {
      params: { category, page, limit },
    });
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
};

export const getNewsById = async id => {
  try {
    const response = await api.get(`/news/${id}`);
    return response.data || null;
  } catch (error) {
    console.error(`Error fetching news by id (${id}):`, error);
    return null;
  }
};
