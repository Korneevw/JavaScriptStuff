function buy(price, name, discount) {
    let quantity;
    while (true) {
        quantity = parseInt(prompt(`How many ${name} do you want to buy, ${price}$ each, with ${discount}% discount?`));
        if (isNaN(quantity)) {
            alert('Quantity must be a number.');
        }
        else {
            break;
        }
    }
    return [quantity, (price - price * discount / 100) * quantity];
}

let total = 0;

let bought = [];

let products = [
    ['Apple', 50],
    ['Banana', 100],
    ['Orange', 150],
    ['Juice', 75],
    ['Lemon', 250],
]

for (let i = 0; i < 5; i++) {
    let input = buy(products[i][1], products[i][0], Math.round(Math.random() * 50));
    total += input[1];
    bought.push([products[i][0], input[0]]);
}

let boughtString = '';
for (let i = 0; i < bought.length; i++) {
    boughtString += `${bought[i][0]}: ${bought[i][1]}; `;
}
boughtString = boughtString.slice(0, -2) + '.';

alert(`Total: ${total}$.\nItems: ${boughtString}`)
