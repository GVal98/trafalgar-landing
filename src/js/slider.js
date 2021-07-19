export default class Slider {
  constructor(sliderClass, itemClass, backButtonClass, forwardButtonClass, selectorClass) {
    this.sliderClass = sliderClass;
    this.itemClass = itemClass;
    this.backButtonClass = backButtonClass;
    this.forwardButtonClass = forwardButtonClass;
    this.selectorClass = selectorClass;
  }

  init() {
    this.getElements();
    this.addEventListeners();
    this.currentItem = 1;
    this.lastItem = this.selectors.length;
  }

  getElements() {
    this.slider = document.getElementsByClassName(this.sliderClass)[0];
    this.items = this.slider.getElementsByClassName(this.itemClass);
    this.backButton = this.slider.getElementsByClassName(this.backButtonClass)[0];
    this.forwardButton = this.slider.getElementsByClassName(this.forwardButtonClass)[0];
    this.selectors = this.slider.getElementsByClassName(this.selectorClass);
  }

  addEventListeners() {
    this.backButton.addEventListener('click', () => this.moveBack());
    this.forwardButton.addEventListener('click', () => this.moveForvard());
    [...this.selectors].forEach((selector, itemNumber) => selector.addEventListener('click', () => this.moveTo(itemNumber + 1)));
  }

  handleNavigation() {
    this.handleBackButton();
    this.handleForwardButton();
    this.handleSelectors();
  }

  handleBackButton() {
    if (this.currentItem === 1) {
      this.backButton.classList.remove('reviews__arrow--active');
      return;
    }
    this.backButton.classList.add('reviews__arrow--active');
  }

  handleForwardButton() {
    if (this.currentItem === this.lastItem) {
      this.forwardButton.classList.remove('reviews__arrow--active');
      return;
    }
    this.forwardButton.classList.add('reviews__arrow--active');
  }

  handleSelectors() {
    for (const selector of this.selectors) {
      selector.classList.remove('reviews__selector--active');
    }
    this.selectors[this.currentItem - 1].classList.add('reviews__selector--active');
  }

  moveBack() {
    if (this.currentItem === 1) return;
    this.currentItem--;
    this.move();
  }

  moveForvard() {
    if (this.currentItem === this.lastItem) return;
    this.currentItem++;
    this.move();
  }

  moveTo(itemNumber) {
    this.currentItem = itemNumber;
    this.move();
  }

  move() {
    const width = this.items[0].getBoundingClientRect().width;
    const offset = -(this.currentItem - 1) * width;
    this.items[0].style.marginLeft = `${offset}px`;
    this.handleNavigation();
  }
}
