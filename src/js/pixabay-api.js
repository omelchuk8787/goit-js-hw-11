import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { hideLoader } from './render-functions';

axios.defaults.baseURL = 'https://pixabay.com';

export async function getImagesByQuery(query, page = 1, perPage = 21) {
  const params = {
    key: '49676421-fbb984ce693a0b40b5728e81f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  };

  try {
    const res = await axios.get('/api/', { params });
    const { hits, totalHits, total } = res.data;

    if (!hits || hits.length === 0) {
      iziToast.warning({
        title: '❌',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: 'orange',
        position: 'topRight',
        messageColor: 'white',
        titleColor: 'white',
      });

      // Повертаємо передбачувану структуру навіть якщо результатів нема
      return { hits: [], totalHits: 0, total: 0 };
    }

    return { hits, totalHits, total };
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message || 'Something went wrong. Please try again later.',
      color: 'red',
      position: 'topRight',
      messageColor: 'white',
      titleColor: 'white',
    });

    return { hits: [], totalHits: 0, total: 0 };
  } finally {
    hideLoader();
  }
}
