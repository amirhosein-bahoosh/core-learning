export const cartState = {
    items: [
        {id: 1, name: "Laptop", price: 1200},
        {id: 2, name: "Mouse", price: 25}
    ]
};

export function addItemToCart(item) {
    if ( !item.name || item.name.trim() === "") {
        console.error("نام محصول نمیتواند خالی باشد.")
        return
    }
    if ( item.price <= 0 || typeof item.price !== "number" || Number.isNaN(item.price)) {
        console.error('input not valid');
        return
    }
    const newItem = {
        id: Date.now(),
        name: item.name.trim(),
        price: item.price
    }

    cartState.items.push(newItem);
    console.log("محصول با موفقیت اضافه شد:", newItem)
}

export function deleteItemFromCart(id) {
    if (!id) {
        console.error('ID is required')
        return
    }
    cartState.items = cartState.items.filter((item) => item.id !== id)
}