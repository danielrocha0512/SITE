let menuList = [
  {
    name: 'Cheese Burguer Duplo',
    price: 'R$ 35,00',
    image: './image/hamb-1.png',
    description: 'Pao levinho de fermentacao natural da Trigou, burguer 160g, queijo prato e maionese da casa',
  },
  {
    name: 'Cheese Burguer',
    price: 'R$ 35,00',
    image: './image/hamb-2.png',
    description: 'Pao levinho de fermentacao natural da Trigou, burguer 160g, queijo prato e maionese da casa',
  },
  {
    name: 'Smash Burger',
    price: 'R$ 35,00',
    image: './image/hamb-3.png',
    description: 'Pao levinho de fermentacao natural da Trigou, burguer 160g, queijo prato e maionese da casa',
  },
  {
    name: 'Cheese Bacon',
    price: 'R$ 35,00',
    image: './image/hamb-4.png',
    description: 'Pao levinho de fermentacao natural da Trigou, burguer 160g, queijo prato e maionese da casa',
  },
  {
    name: 'Cheese Burger',
    price: 'R$ 35,00',
    image: './image/hamb-5.png',
    description: 'Pao levinho de fermentacao natural da Trigou, burguer 160g, queijo prato e maionese da casa',
  },
  {
    name: 'Cheese Burger',
    price: 'R$ 35,00',
    image: './image/hamb-6.png',
    description: 'Pao levinho de fermentacao natural da Trigou, burguer 160g, queijo prato e maionese da casa',
  },
  {
    name: 'Cheese Burger',
    price: 'R$ 35,00',
    image: './image/hamb-7.png',
    description: 'Pao levinho de fermentacao natural da Trigou, burguer 160g, queijo prato e maionese da casa',
  },
  {
    name: 'Cheese Burger',
    price: 'R$ 35,00',
    image: './image/hamb-8.png',
    description: 'Pao levinho de fermentacao natural da Trigou, burguer 160g, queijo prato e maionese da casa',
  },
]
// COLOCAR REFRIGERANTE NA LISTA ACIMA ^

let leftList = document.getElementById('menu-list-left')
let rightList = document.getElementById('menu-list-right')

menuList.forEach((item, index) => {
  let li = document.createElement('li')
  li.innerHTML = `
  <div class="item-container">
    <img class="hamb-img" src="${item.image}" alt=${item.name}>
    <div class="item-content_container">
      <div class="description-container">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="price-container">
        <p class="item-price">${item.price}</p>
        <div class="cart-icon-container">
          <i style="color: white" class="fa fa-shopping-cart fa-md" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
  `
  if (index % 2 === 0) {
    leftList.appendChild(li)
  } else {
    rightList.appendChild(li)
  }
})
