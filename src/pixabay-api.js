import axios from 'axios';

export async function fetchImages(searchQuery, pages = 1) {
  const API_KEY = '40473562-55a35ac94a8c595bdc431a572';
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: searchQuery,
    per_page: 40,
    page: pages,
  };

  try {
    const { data } = await axios.get(BASE_URL, { params });
    return data;
  } catch (error) {
    throw error;
  }
}
