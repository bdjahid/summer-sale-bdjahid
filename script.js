let total = 0;
let dis = 20;
function handleClick(target) {
    const addItems = document.getElementById('show-items');
    const addName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = addName;
    addItems.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    console.log(total.toFixed(2))

    const showPrice = document.getElementById('total');
    showPrice.innerText = total.toFixed(2);

    const discountAmount = (total * dis) / 100;
    const discountedPrice = total - discountAmount;
    const discount = document.getElementById('discount')
    discount.innerText = discountAmount;
    const totalPrice = document.getElementById('totalPrice')
    totalPrice.innerText = discountedPrice;
    console.log(discountedPrice)


    const coupon = document.getElementById('coupon');
    if (total.toFixed(2) <= 200) {
        coupon.disabled = true;
    } else {
        coupon.disabled = false;
    }


    const btn = document.getElementById('btn');
    if (Number < 0) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

}

