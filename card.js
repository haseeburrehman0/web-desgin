let cardBox = document.querySelector('#cardBox')
let h2 = document.querySelector('h2')
let totalAmount = document.querySelector('#totalAmount')

let getData = JSON.parse(localStorage.getItem('cartitem'))
console.log(getData);

function renderScreen() {
    if (getData != null && getData.length > 0) {
        for (let i = 0; i < getData.length; i++) {
            cardBox.innerHTML += `
            <div class="card bg-dark" style="width: 18rem;">
            <div class="card-body text-light">
              <h5 class="card-title">${getData[i].brand}</h5>
              <h6 class="card-subtitle mb-2 mt-2">MODEL : ${getData[i].color}</h6>
              <h6 class="card-subtitle mb-2 mt-2">SIZE : ${getData[i].size}</h6>
              <p class="card-text mt-2">PRICE : ${getData[i].price}</a><br />
              <p class="card-text mt-2">Quantity : <button class='btn btn-danger' onclick='lessQuantity(${i})'>-</button>${getData[i].quantity} <button class='btn btn-danger' onclick='addQuantity(${i})'>+</button></p><br />
              <button class="btn btn-danger" onclick="deleteBtn(${i})">Delete</button>
            </div>
          </div>`
        }
    } else {
        console.log('Cart items Emty ha malik');
        h2.innerHTML += `No Items found...`
    }
}
renderScreen()

function deleteBtn(i) {
    getData.splice(i, 1)
    localStorage.setItem('cartitem', JSON.stringify(getData))
    location.reload()
}

function ubdatePrice() {
    let TotalPrice = 0;
    for (let i = 0; i < getData.length; i++) {
        TotalPrice = TotalPrice + (getData[i].price * getData[i].quantity)
    }
    totalAmount.innerHTML = `Total Amount : ${TotalPrice}`
}
ubdatePrice()

function addQuantity(i) {
    getData[i].quantity += 1
    localStorage.setItem('cartitem', JSON.stringify(getData))
    location.reload()
    ubdatePrice()
}

function lessQuantity(i) {
    if (getData[i].quantity === 1) {
        getData.splice(i, 1)
        localStorage.setItem('cartitem', JSON.stringify(getData))
        location.reload()
    } else {
        getData[i].quantity -= 1
        localStorage.setItem('cartitem', JSON.stringify(getData))
        location.reload()
        ubdatePrice()
    }
}