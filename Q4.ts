//Write a program that calculates the discount for a product based on its
// price. If the price is above $100, apply a 10% discount; otherwise,
// apply a 5% discount.

function calculateDiscount(price: number): number {
    return price > 100 ? 0.1 * price : 0.05 * price;
  }
  
  // ProductPrice
  const productPrice = 120;
  console.log(`Discount: ${calculateDiscount(productPrice)} USD`);
  