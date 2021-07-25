export default class Menu {
  constructor(buttonClass, menuClass) {
    this.buttonClass = buttonClass;
    this.menuClass = menuClass;
    this.visibleClass = `${menuClass}--visible`;
    this.hiddenClass = `${menuClass}--hidden`;
  }

  init() {
    this.getElements();
    this.button.addEventListener('click', () => this.toggle());
  }

  getElements() {
    this.button = document.getElementsByClassName(this.buttonClass)[0];
    this.menu = document.getElementsByClassName(this.menuClass)[0];
  }

  toggle() {
    this.menu.classList.toggle(this.visibleClass);
    this.menu.classList.toggle(this.hiddenClass);
  }
}
