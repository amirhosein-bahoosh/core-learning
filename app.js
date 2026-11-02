// ==========================================
// ۱. ماژول استیت (state.js)
// ==========================================

/**
 * متغیر: cartState
 * ساختار: شیء حاوی آرایه‌ای از محصولات { items: Array<{id, name, price}> }
 * هدف: منبع واحد حقیقت (Single Source of Truth) برای کل داده‌های سبد خرید
 */

/**
 * تابع: addItemToCart
 * ورودی: یک شیء با ویژگی‌های محصول -> { name: string, price: number }
 * خروجی: ندارد (void)
 * وظیفه: بررسی اعتبار ورودی‌ها، تولید شناسه یکتا (id)، و ذخیره آیتم در استیت مرکزی
 */


// ==========================================
// ۲. ماژول محاسبات (utils.js)
// ==========================================

/**
 * تابع: calculateCartTotal
 * ورودی: آرایه‌ای از محصولات -> Array<{price: number}>
 * خروجی: یک عدد (number) که جمع کل قیمت‌هاست
 * وظیفه: محاسبه خالص ریاضی بدون هیچ‌گونه دستکاری در صفحه یا استیت (Pure Function)
 */


// ==========================================
// ۳. ماژول رابط کاربری (ui.js)
// ==========================================

/**
 * تابع: renderTotalPrice
 * ورودی: یک عدد (مجموع قیمت) -> total: number
 * خروجی: ندارد (DOM Manipulation)
 * وظیفه: پیدا کردن تگ قیمت در صفحه و قرار دادن عدد در آن
 */

/**
 * تابع: renderCartItems
 * ورودی: آرایه‌ای از محصولات -> items: Array<{name, price}>
 * خروجی: ندارد (DOM Manipulation)
 * وظیفه: تبدیل داده‌ها به تگ‌های <li> و چسباندن آن‌ها داخل لیست در صفحه HTML
 */

import { cartState, addItemToCart } from "./state.js";
import {deleteItemFromCart} from "./state.js";

import { calculateCartTotal } from "./utils.js"

import {renderTotalPrice, renderCartItems} from "./ui.js"

function renderApp() {
    renderCartItems ( cartState.items)
    renderTotalPrice ( calculateCartTotal(cartState.items) )
}

renderApp()

const form = document.getElementById("add-product-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    
    const name = nameInput.value;
    const price = Number(priceInput.value)

    addItemToCart({
        name, price
    })
    renderApp()
    form.reset()
});

const cartList = document.getElementById("cart-list");

cartList.addEventListener("click", (e) => {
  // اینجا میتونی چک کنی که آیا واقعا رو دکمه کلیک شده یا جای دیگه
  // مثلا با if (e.target.tagName === 'BUTTON') یا if (e.target.dataset.id)
  
  const id = e.target.dataset.id; // متغیر id رو با const تعریف کن!
  if (id) { // چک کن که آیا واقعا id وجود داره
    deleteItemFromCart(Number(id));
    renderApp();
  }
});
