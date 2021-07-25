import 'normalize.css';
import './sass/main.scss';
import Menu from './js/menu';
import Slider from './js/slider';

window.addEventListener('load', () => {
  const menu = new Menu('header__menu-button', 'header__menu');
  menu.init();

  const slider = new Slider('reviews',
    'reviews__container',
    'reviews__box',
    'reviews__back',
    'reviews__forward',
    'reviews__selector',
    'reviews__arrow--active',
    'reviews__selector--active');
  slider.init();
});
