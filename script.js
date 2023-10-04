let total = 0;

function handleClick(target) {
    const addItems = document.getElementById('show-items');
    const addName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = addName;
    addItems.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    console.log(total)
    const showPrice = document.getElementById('total');
    showPrice.innerText = total;

}

