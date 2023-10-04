let total = 0;
let dis = 10;
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
    discount.innerText = discountedPrice;
    const totalPrice = document.getElementById('totalPrice')
    totalPrice.innerText = discountedPrice;
    console.log(discountedPrice)




}

