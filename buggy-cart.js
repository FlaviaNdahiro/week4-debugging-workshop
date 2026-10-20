
const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen", price: 300, qty: 5 },
  { name: "Bag", price: 12000, qty: 1 },
];

function getSubtotal(items) {
  let subtotal = 0;

  // Bug 1 fix: The loop used <=, which accessed an index beyond the array.
  // I found this from the TypeError and the loop index in the debugger.
  // The Scope panel can confirm i equals items.length when the error occurs.
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty;
  }

  return subtotal;
}

function getDiscount(subtotal) {
  // Bug 2 fix: Check the larger threshold first, or it will never be reached
  // for subtotals above 20000. I identified this by tracing the conditions.
  if (subtotal > 20000) return 0.2;
  else if (subtotal > 10000) return 0.1;

  return 0;
}

function getTotal(items) {
  const subtotal = getSubtotal(items);
  const discount = getDiscount(subtotal);

  // Bug 3 fix: discount is a rate, so multiply it by subtotal to get the amount.
  // I found this by inspecting subtotal and discount in the Scope/Watch panels.
  const total = subtotal - subtotal * discount;

  return total;
}

// Risky value: "1500" is a string, but multiplication converts it to a number.
// This works with *, but using + could concatenate strings instead of adding numbers.
console.log(getTotal(cart));
