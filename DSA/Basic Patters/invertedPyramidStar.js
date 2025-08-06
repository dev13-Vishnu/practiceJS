const rows = 5;
for(let i = rows; i > 0; i--) {
    const spaces = " ".repeat(rows-i);
    const stars = "*".repeat(2*i -1);
    console.log(spaces+stars);
}