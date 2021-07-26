export default class Slider {
  constructor(sliderClass,
    containerClass,
    itemClass,
    backButtonClass,
    forwardButtonClass,
    selectorClass,
    buttonActiveClass,
    selectorActiveClass) {
    this.sliderClass = sliderClass;
    this.containerClass = containerClass;
    this.itemClass = itemClass;
    this.backButtonClass = backButtonClass;
    this.forwardButtonClass = forwardButtonClass;
    this.selectorClass = selectorClass;
    this.buttonActiveClass = buttonActiveClass;
    this.selectorActiveClass = selectorActiveClass;
  }

  init() {
    this.getElements();
    this.addEventListeners();
    this.currentItem = 1;
    this.lastItem = this.selectors.length;
    this.itemWidth = this.container.getBoundingClientRect().width;
    this.resizeObserver = new ResizeObserver(
      (entries) => this.resize(entries[0].contentRect.width),
    );
    this.resizeObserver.observe(this.container);
  }

  getElements() {
    this.slider = document.getElementsByClassName(this.sliderClass)[0];
    this.container = this.slider.getElementsByClassName(this.containerClass)[0];
    this.items = this.slider.getElementsByClassName(this.itemClass);
    this.backButton = this.slider.getElementsByClassName(this.backButtonClass)[0];
    this.forwardButton = this.slider.getElementsByClassName(this.forwardButtonClass)[0];
    this.selectors = this.slider.getElementsByClassName(this.selectorClass);
  }

  addEventListeners() {
    this.backButton.addEventListener('click', () => this.moveBack());
    this.forwardButton.addEventListener('click', () => this.moveForvard());
    [...this.selectors].forEach((selector, itemNumber) => selector.addEventListener('click', () => this.moveTo(itemNumber + 1)));
    this.container.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
    this.container.addEventListener('pointerup', (e) => this.handlePointerUp(e));
  }

  handlePointerDown(e) {
    this.pointerDownX = e.x;
    this.pointerDownY = e.y;
  }

  handlePointerUp(e) {
    const offsetX = e.x - this.pointerDownX;
    const offsetY = e.y - this.pointerDownY;
    if (Math.abs(offsetY) > Math.abs(offsetX)) return;
    if (Math.abs(offsetX) < 10) return;
    if (offsetX > 0) {
      this.moveBack();
      return;
    }
    this.moveForvard();
  }

  handleNavigation() {
    this.handleBackButton();
    this.handleForwardButton();
    this.handleSelectors();
  }

  handleBackButton() {
    if (this.currentItem === 1) {
      this.backButton.classList.remove(this.buttonActiveClass);
      return;
    }
    this.backButton.classList.add(this.buttonActiveClass);
  }

  handleForwardButton() {
    if (this.currentItem === this.lastItem) {
      this.forwardButton.classList.remove(this.buttonActiveClass);
      return;
    }
    this.forwardButton.classList.add(this.buttonActiveClass);
  }

  handleSelectors() {
    for (const selector of this.selectors) {
      selector.classList.remove(this.selectorActiveClass);
    }
    this.selectors[this.currentItem - 1].classList.add(this.selectorActiveClass);
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
    const offset = -(this.currentItem - 1) * this.itemWidth;
    this.container.style.transform = `translateX(${offset}px)`;
    this.handleNavigation();
  }

  resize(width) {
    this.itemWidth = width;
    this.move();
  }
}
