$(document).ready(function () {
    // Cart items array
    let cart = [];

    // Function to update the cart modal
    function updateCartModal() {
        const modalCart = document.querySelector('.modal-cart');
        modalCart.innerHTML = '';

        let totalPrice = 0; // Initialize total price

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <p>${item.name} - UGX ${item.price} - Quantity: ${item.quantity}</p>
                <button class="btn btn-sm btn-danger remove-item" data-name="${item.name}" data-price="${item.price}">Remove</button>
                <button class="btn btn-sm btn-secondary decrease-quantity" data-name="${item.name}" data-price="${item.price}">-</button>
                <button class="btn btn-sm btn-secondary increase-quantity" data-name="${item.name}" data-price="${item.price}">+</button>
                <hr>
            `;
            modalCart.appendChild(cartItem);

            totalPrice += item.price; // Update total price
        });

        // Display total price at the bottom of the modal
        const totalElement = document.createElement('div');
        totalElement.innerHTML = `<p>Total Price: UGX ${totalPrice.toFixed(2)}</p>`;
        modalCart.appendChild(totalElement);

        // Add click event listeners to the "Remove" buttons
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const itemName = this.getAttribute('data-name');
                cart = cart.filter(item => item.name !== itemName);
                updateCartModal();
            });
        });

        // Add click event listeners to the "Decrease Quantity" buttons
        const decreaseButtons = document.querySelectorAll('.decrease-quantity');
        decreaseButtons.forEach(button => {
            button.addEventListener('click', function () {
                const itemName = this.getAttribute('data-name');
                const itemPrice = parseFloat(this.getAttribute('data-price'));
                const cartItem = cart.find(item => item.name === itemName);

                if (cartItem.quantity > 1) {
                    cartItem.quantity -= 1;
                    cartItem.price -= itemPrice;
                } else {
                    // If the quantity reaches 1, remove the item
                    cart = cart.filter(item => item.name !== itemName);
                }

                updateCartModal();
            });
        });

        // Add click event listeners to the "Increase Quantity" buttons
        const increaseButtons = document.querySelectorAll('.increase-quantity');
        increaseButtons.forEach(button => {
            button.addEventListener('click', function () {
                const itemName = this.getAttribute('data-name');
                const itemPrice = parseFloat(this.getAttribute('data-price'));
                const cartItem = cart.find(item => item.name === itemName);

                cartItem.quantity += 1;
                cartItem.price += itemPrice;

                updateCartModal();
            });
        });
    }

    // Click event listener for "Add to Cart" buttons
    $('.add-to-cart-btn').click(function () {
        const itemName = $(this).data('name');
        const itemPrice = $(this).data('price');

        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.name === itemName);

        if (existingItem) {
            // If it's already in the cart, increment the quantity and update the price
            existingItem.quantity += 1;
            existingItem.price += itemPrice;
        } else {
            // If it's not in the cart, add it
            cart.push({
                name: itemName,
                price: itemPrice,
                quantity: 1
            });
        }

        // Update the cart modal
        updateCartModal();
    });

    // Click event listener for the cart icon
    $('.cart-icon').click(function () {
        $('#cartModal').modal('show');
    });

    // Click event listener for the checkout button
    $('#checkoutBtn').click(function () {
        // Implement your checkout logic here
        alert('To checkout, click OK to continue by the login or signup😋');
    });

    // Click event listener for the close button on the cart modal
    $('#closeCartBtn').click(function () {
        $('#cartModal').modal('hide'); // Close the modal
    });
});



    // JavaScript to change the text and color of the "Add to Cart" button
    let buttons = document.getElementsByClassName('add-to-cart-btn');

    Array.from(buttons).forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.innerHTML === 'Add to Cart') {
                button.innerHTML = 'Added to Cart';
                button.style.backgroundColor = 'pink'; // Change button color to pink
                button.disabled=true;
                button.removeEventListener('click',this);
            }
        });
    });




    







    $(document).ready(function () {
    // Cart items array
    let cart = [];

    // Function to check if item is already in the cart
    function checkItemInCart(itemName) {
        return cart.some(item => item.name === itemName);
    }

    // Function to update the cart modal
    function updateCartModal() {
        // Rest of the code remains the same
        // ...
    }

    // Click event listener for "Add to Cart" buttons
    $('.add-to-cart-btn').click(function () {
        const itemName = $(this).data('name');
        const itemPrice = $(this).data('price');

        // Check if the item is already in the cart
        const isItemInCart = checkItemInCart(itemName);

        if (!isItemInCart) {
            // If it's not already in the cart, add it
            cart.push({
                name: itemName,
                price: itemPrice,
                quantity: 1
            });
        }

        // Update the cart modal
        updateCartModal();

        // Change the button text and color
        const button = $(this)[0];
        if (button.innerHTML === 'Add to Cart') {
            button.innerHTML = 'Added to Cart';
            button.style.backgroundColor = 'pink'; // Change button color to pink
        }
    });

    // Rest of the code remains the same
    // ...
});
