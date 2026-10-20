
# Exercise 1: Reading JavaScript Errors

## 1. Variable name uses the wrong capitalization

**Error type:** ReferenceError

**What it means:** JavaScript is case-sensitive. The variable `studentName` is different from `studentname`, so JavaScript cannot find the variable used in `console.log()`.

**Fix:**
```javascript
const studentName = "Aline";
console.log("Welcome, " + studentName);
```

## 2. Incorrect string method name

**Error type:** TypeError

**What it means:** The method `toUppercase()` does not exist for strings. The correct method name is `toUpperCase()`.

**Fix:**
```javascript
const city = "Kigali";
console.log(city.toUpperCase());
```

## 3. Incorrect HTML element selector

**Error type:** TypeError

**What it means:** The selector `#page-titel` appears to contain a spelling mistake. If no element has that ID, `querySelector()` returns `null`. Trying to change `textContent` on `null` causes an error.

**Fix:**
```javascript
const title = document.querySelector("#page-title");
title.textContent = "My Tasks";
```

The ID `page-title` must match the actual ID in the HTML file.

## 4. Reassigning a constant

**Error type:** TypeError

**What it means:** A variable declared with `const` cannot be reassigned. The code tries to give `score` a new value.

**Fix:**
```javascript
let score = 0;
score = score + 10;
console.log(score);
```

## 5. Missing comma in an array

**Error type:** SyntaxError

**What it means:** A comma is missing between `"avocado"` and `"banana"`. JavaScript cannot correctly parse the array as written.

**Fix:**
```javascript
const fruits = ["mango", "avocado", "banana"];
console.log(fruits.length);
```

## 6. Recursive function has no stopping condition

**Error type:** RangeError

**What it means:** The function calls itself repeatedly without a stopping condition. Eventually, JavaScript runs out of call stack space and reports `Maximum call stack size exceeded`.

**Fix:**
```javascript
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(5);
```

The condition `if (n < 0) return;` stops the recursion after printing 0.
