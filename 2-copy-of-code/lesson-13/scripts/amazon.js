let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {

    // This solution uses a feature of JavaScript called a
    // closure. Each time we run the loop, it will create
    // a new variable called addedMessageTimeoutId and do
    // button.addEventListener().
    //
    // Then, because of closure, the function we give to
    // button.addEventListener() will get a unique copy
    // of the addedMessageTimeoutId variable and it will
    // keep this copy of the variable forever.
    // (Reminder: closure = if a function has access to a
    // value/variable, it will always have access to that
    // value/variable).
    //
    // This allows us to create many unique copies of the
    // addedMessageTimeoutId variable (one for every time
    // we run the loop) so it lets us keep track of many
    // timeoutIds (one for each product).
    let addedMessageTimeoutId;

    button.addEventListener('click', () => {
      const {productId} = button.dataset;

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      const quantity = Number(quantitySelector.value);

      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId,
          quantity
        });
      }

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;

      const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
      );

      addedMessage.classList.add('added-to-cart-visible');

      // Check if a previous timeoutId exists. If it does,
      // we will stop it.
      if (addedMessageTimeoutId) {
        clearTimeout(addedMessageTimeoutId);
      }

      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
      }, 2000);

      // Save the timeoutId so we can stop it later.
      addedMessageTimeoutId = timeoutId;
    });
  });