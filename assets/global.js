class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.atcButton = this.querySelector(".atc-button");
    this.body = document.querySelector("body");
  }

  connectedCallback() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.atcButton.addEventListener("click", this.addToCart.bind(this));
  }

  openCartDrawer() {
    this.body.classList.add("cart-open");
  }

  addToCart() {
    // add to cart logic
    // fake delay to mimic fetch request
    this.atcButton.classList.add("loading");
    setTimeout(() => {
      this.atcButton.classList.remove("loading");
      this.openCartDrawer();
    }, 1000);
  }
}
customElements.define("product-card", ProductCard);

class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.closeButton = this.querySelector(".cart-drawer__close-btn");
    this.overlay = document.querySelector(".overlay");
    this.body = document.querySelector("body");
    this.cartIcon = document.querySelector(".header__bag");
  }

  connectedCallback() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.closeButton.addEventListener("click", this.closeCartDrawer.bind(this));
    this.overlay.addEventListener("click", this.closeCartDrawer.bind(this));
    this.cartIcon.addEventListener("click", this.openCartDrawer.bind(this));
  }

  closeCartDrawer() {
    this.body.classList.remove("cart-open");
  }

  openCartDrawer() {
    this.body.classList.add("cart-open");
  }
}
customElements.define("cart-drawer", CartDrawer);
