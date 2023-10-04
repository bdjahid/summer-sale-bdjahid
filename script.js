let total = 0;

function handleClick(target) {
    const addItems = document.getElementById('show-items');
    const addName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = addName;
    addItems.appendChild(li)

    console.log(target.childNodes[3].childNodes[5].innerText.split(" "))

}

