export default class Menu {
  constructor(buttonClass, menuClass) {
    this.buttonClass = buttonClass;
    this.menuClass = menuClass;
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
    if (this.isVisible()) {
      this.hide();
      return;
    }
    this.show();
  }

  show() {
    this.menu.style.transform = 'translateX(0)';
    this.menu.style.opacity = '1';
  }

  hide() {
    this.menu.style.transform = 'translateX(100%)';
    this.menu.style.opacity = '0';
  }

  isVisible() {
    return this.menu.getBoundingClientRect().x === 0;
  }
}
