const n = 5; // Controls the number of lines in the top half

// Upper Pyramid (including middle line)
for (let i = 1; i <= n; i++) {
  const spaces = " ".repeat(n - i);
  const stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}

// Lower Inverted Pyramid
for (let i = n - 1; i >= 1; i--) {
  const spaces = " ".repeat(n - i);
  const stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
