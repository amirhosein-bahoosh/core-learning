export function sayHello(name) {
    return `Hello, ${name}! Welcome to modular JS.`;
}

export function calculateCartTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    };
    return total;
}