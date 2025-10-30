import axios from 'axios';

const API_KEY = '6c8287be632cf92b50f9cbd3b41c6bcf';
const BASE_URL = 'http://api.mediastack.com/v1/news';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    access_key: API_KEY,
    languages: 'en',
    countries: 'us',
  },
});

const getTopOneNews = async () => {
  try {
    const response = await api.get('', { params: { limit: 1 } });
    return response.data.data[0] || null;
  } catch (error) {
    console.error('Error fetching top news:', error);
    return null;
  }
};

const getNewsByCategory = async (category, limit = 10) => {
  try {
    const response = await api.get('', {
      params: {
        categories: category,
        limit,
      },
    });

    const news = response.data.data || [];
    return news.slice(0, limit);
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
};

const getNewsByTitle = async title => {
  try {
    const response = await api.get('', {
      params: {
        limit: 50,
        keywords: title,
      },
    });

    const news = response.data.data || [];

    const foundNews = news.find(item => item.title === title);
    return foundNews || null;
  } catch (error) {
    console.error(`Error fetching news by title (${title}):`, error);
    return null;
  }
};

export { getTopOneNews, getNewsByCategory, getNewsByTitle };
