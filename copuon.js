document.getElementById('applyCoupon').addEventListener('click', applyCoupon);

function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value;

    // Call a backend API to validate the coupon code and get the discount amount
    // For simplicity, we'll assume a hardcoded discount for a specific coupon code
    let discount = 0;
    if (couponCode === 'SAVE20') {
        discount = 20;
    } else if (couponCode === 'HALFOFF') {
        discount = 50;
    }

    // Update the total price based on the discount
    const totalPrice = 100;  // Initial total price
    const discountedPrice = totalPrice - (totalPrice * (discount / 100));

    // Update the displayed total price
    document.getElementById('totalPrice').textContent = discountedPrice;
}
