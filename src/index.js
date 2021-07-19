import 'normalize.css';
import './sass/main.scss';
import Slider from './js/slider';

const slider = new Slider('reviews', 'reviews__box', 'reviews__back', 'reviews__forward', 'reviews__selector');
window.addEventListener('load', () => slider.init());
