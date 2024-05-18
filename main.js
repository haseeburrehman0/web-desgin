const tShirts = [
    {
        brand: "Nike",
        price: 599,
        size: "M",
        color: "Red"
    },
    {
        brand: "Adidas",
        price: 2999,
        size: "L",
        color: "Blue"
    },
    {
        brand: "Puma",
        price: 1999,
        size: "S",
        color: "Black"
    },
    {
        brand: "Under Armour",
        price: 3599,
        size: "XL",
        color: "White"
    },
    {
        brand: "Reebok",
        price: 2299,
        size: "M",
        color: "Gray"
    },
    {
        brand: "Calvin Klein",
        price: 2799,
        size: "S",
        color: "Green"
    },
    {
        brand: "Tommy Hilfiger",
        price: 3999,
        size: "L",
        color: "Navy"
    },
    {
        brand: "Levi's",
        price: 3199,
        size: "XL",
        color: "Brown"
    },
    {
        brand: "H&M",
        price: 1599,
        size: "M",
        color: "Yellow"
    },
    {
        brand: "Zara",
        price: 3399,
        size: "L",
        color: "Pink"
    }
];


let addItems;
let items = JSON.parse(localStorage.getItem('cartitem'));
if (items === null) {
    addItems = [];
} else {
    addItems = items;
}

let card = document.querySelector('#card')

for (let i = 0; i < tShirts.length; i++) {
    card.innerHTML += `
    <div class="card bg-dark" style="width: 18rem;">
  <div class="card-body text-light">
    <h5 class="card-title">${tShirts[i].brand}</h5>
    <h6 class="card-subtitle mb-2 mt-2">MODEL : ${tShirts[i].color}</h6>
    <h6 class="card-subtitle mb-2 mt-2">PRICE : ${tShirts[i].size}</h6>
    <p class="card-text mt-2">PRICE : ${tShirts[i].price}</a><br />
    <button onclick="addToCard(${i})" class="btn btn btn-primary">Add to Card</button>
  </div>
</div>
    `
}


function addToCard(index) {
    if (addItems.includes(tShirts[index])) {
        tShirts[index].quantity += 1
        console.log(addItems);
    } else {
        tShirts[index].quantity = 1
        addItems.push(tShirts[index])
        console.log(addItems);
    }
}

function checkOut() {
    localStorage.setItem('cartitem', JSON.stringify(addItems))
    window.location = 'card.html'
}

