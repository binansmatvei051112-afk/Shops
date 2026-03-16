window.onload = function () {

    const removeBtns = document.querySelectorAll('.remove-btn');
    const totalPriceElement = document.getElementById('total-price');
    const summaryBlock = document.querySelector('.cart-summary');

    removeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const item = btn.closest('.cart-item');

            if (item) {
                item.remove();
                console.log("Товар удален");

                const remainingItems = document.querySelectorAll('.cart-item');

                if (remainingItems.length === 0) {
                    if (totalPriceElement) totalPriceElement.innerText = "0";
                    if (summaryBlock) {
                        summaryBlock.innerHTML = "<h2>Ваша корзина пуста</h2>";
                    }
                }
            }
        });
    });
    const plus = document.querySelector('.qty-btn-plus-btn');
    const minus = document.querySelector('.qty-btn-minus-btn');
    let schet = document.getElementById('Schet');
    let quantity = 1;
    let totalPrice = document.getElementById('total-price');
    let price = 99990;

    plus.addEventListener('click', function () {
        quantity += 1;
        schet.innerText = quantity;
        console.log("Текущая количество: ", quantity);
        totalPrice.innerText = (price * quantity) + " ₽";
        console.log("Текущая цена: ", totalPrice.innerText);
    }
    );
    minus.addEventListener('click', function () {
        if (quantity > 0) {
            quantity -= 1;
            schet.innerText = quantity;
            console.log("Текущая количество: ", quantity);
            totalPrice.innerText = (price * quantity) + " ₽";
            console.log("Текущая цена: ", totalPrice.innerText);
        }
    })
};