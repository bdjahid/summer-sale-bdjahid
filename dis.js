function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
}

const originalPrice = 113; // Original price in TK
const discountPercentage = 10; // Discount percentage (10% in this example)

const discountedPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log('Original Price:', originalPrice + ' TK');
console.log('Discount Percentage:', discountPercentage + '%');
console.log('Discounted Price:', discountedPrice + ' TK');
