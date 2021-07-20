import 'normalize.css';
import './sass/main.scss';
import Slider from './js/slider';

const slider = new Slider('reviews',
  'reviews__container',
  'reviews__box',
  'reviews__back',
  'reviews__forward',
  'reviews__selector',
  'reviews__arrow--active',
  'reviews__selector--active');
window.addEventListener('load', () => slider.init());
