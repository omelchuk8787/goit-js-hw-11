import iziToast from 'izitoast'; 
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,   
} from './js/render-functions';

const formEl = document.querySelector('.form');
const buttonEl = formEl.querySelector('button');

formEl.addEventListener('input', e => {
  const query = e.currentTarget.elements['search-text'].value.trim();
  buttonEl.disabled = !query;
});

formEl.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.currentTarget.elements['search-text'].value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query);

    if (!hits.length) {
      return;
    }

    createGallery(hits);

    iziToast.success({
      title: '✅',
      message: `Found ${totalHits} images`,
      position: 'topRight',
      messageColor: 'white',
      titleColor: 'white',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message || 'Something went wrong.',
      position: 'topRight',
      messageColor: 'white',
      titleColor: 'white',
    });
  } finally {
    hideLoader(); 
  }
});
