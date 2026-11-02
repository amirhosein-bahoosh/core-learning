export function renderTotalPrice(total) {
    const elementTotal = document.getElementById("total-price")
    elementTotal.textContent = total
}
export function renderCartItems(items) {
    const cartList = document.getElementById("cart-list");
    const html = items.map(item => {
        return `<li>${item.name} - $${item.price} <button data-id="${item.id}">حذف</button></li>`
    }).join('');
    cartList.innerHTML = html;
}