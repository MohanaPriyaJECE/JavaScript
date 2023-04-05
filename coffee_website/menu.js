const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartItems = [];
 
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    const itemContainer = button.parentElement;
    const itemName = itemContainer.querySelector('.item-name').textContent;
    const itemPrice = itemContainer.querySelector('.item-price').textContent;
    
    
    const cartItem = {
      name: itemName,
      price: itemPrice
    };
    
    
    cartItems.push(cartItem);
    
    
    updateCartUI();
  });
});

function updateCartUI() {
  
  const cart = document.getElementById('cart');
  
  cart.innerHTML = '';
  
  const heading = document.createElement('h2');
  heading.textContent = 'Cart';
  cart.appendChild(heading);
  
  const cartList = document.createElement('ul');
  
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name + ' - ' + item.price;
    cartList.appendChild(listItem);
  });
  
  cart.appendChild(cartList);
   
  const cartTotal = document.createElement('p');
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
  cartTotal.textContent = 'Total: $' + total.toFixed(2);
  cartTotal.setAttribute('id', 'cart-total');
  cart.appendChild(cartTotal);
}