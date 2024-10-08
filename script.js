
// MAPEAMENTOS HTML
const valueUl = document.querySelector('.ul-li')
const titulo = document.querySelector('.titulo')
const valueform = document.querySelector('.form')
const buttonFor = document.querySelector('.button-Foreach')
const buttonMap = document.querySelector('.button-Map')
const buttonTradicion = document.querySelector('.button-tradicion')
const buttonFilter = document.querySelector('.button-Filter')
const descontCupom = document.querySelector('#send')
const buttonbebidas = document.querySelector(".button-Bebidas")
//MAPEAMENTOS MOBILE
const abrirMenu = document.querySelector(".icon-list")
const menu = document.querySelector(".menu-mobile")
const overley = document.getElementById('overlay-menu')
const cardatpioMobile = document.getElementById('button-Foreach')
const buttonMobileTradi = document.getElementById('button-tradicion')
const buttonMobileVegan = document.getElementById('button-Filter')
const buttonMobileDrinks = document.getElementById('button-Bebidas')

//CONVERT MOEDAS
function newMoedas(newValor) {

    const convert = newValor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return convert

}
//FOREACH
function newCardapio(showAll) {
    let newformulare = ''
    let newElement = ''
    let h1 = ''
    const mostrarTudo = showAll.forEach((element) => {

        newElement += ` 
         <li class="order">
              <img src=${element.src}>
              <p>${element.name}</p>
              <p class="item-descont">${element.descont}</p>
              <p class="item-price"> ${newMoedas(element.price)} <span> -> </span> ${newMoedas(element.price * 0.9)}</p>
         </li>
         
         `
        h1 = `<h1>Digite aqui seu pedido</h1>`
        newformulare = `
        <input type="text" name="name"  placeholder="Seu nome completo:" required autocomplete="none">
        <input type="text" name="phone"  placeholder="Numero da mesa:" required autocomplete="none">
        <textarea  name="message" placeholder="Seu pedido:" required autocomplete="none"></textarea>
        <div class="rrsantos-enviar"><input type="submit"></div>
      
        <input type="hidden">
        <input type="hidden">
    `
    })

    valueUl.innerHTML = newElement
    valueform.innerHTML = newformulare
    titulo.innerHTML = h1
}

//FILTER
function filterTotal(newfilter) {

    const filtraçon = menuOptions.filter(number => number.vegan)

    newCardapio(filtraçon)
}

function drinks(newdrinks) {

    const bebidas = menuOptions.filter(drinks => drinks.drinks)

    newCardapio(bebidas)
}

function tradicion(testes) {
    const tradicionais = menuOptions.filter(element => element.vegan === false)

    newCardapio(tradicionais)
}

//MENU-MOBILE
abrirMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir')
})

overley.addEventListener('click', ()=> {
    menu.classList.remove('abrir')
})

// EVENTOS DE CLICK
buttonFor.addEventListener('click', () => newCardapio(menuOptions))
buttonTradicion.addEventListener('click', tradicion)
buttonFilter.addEventListener('click', filterTotal)
buttonbebidas.addEventListener('click', drinks)
// MOBILE
cardatpioMobile.addEventListener('click', () => newCardapio(menuOptions))
buttonMobileTradi.addEventListener('click', tradicion)
buttonMobileVegan.addEventListener('click', filterTotal)
buttonMobileDrinks.addEventListener('click', drinks)


























/*
// CONVERT MOEDAS
function convertcurrency(value) {

    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}
//FIM 

// FOREACH 
buttonFor.addEventListener('click', () => products(menuOptions))

function products(arrayPrice) {
    let total = ''
    arrayPrice.forEach((element) => {

        total += `

          <li>
              <img src=${element.src}>
              <p>${element.name}</p>
              <p class="item-price">${convertcurrency(element.price)}</p>
         </li>
         
         `

    });

    return valueUl.innerHTML = total
}
// FIM FOREACH

// MAP => jeito do Rodolfo
buttonMap.addEventListener('click', descontTotal)

function descontTotal() {

    const newArray = menuOptions.map((descont) => ({

        ...descont,
        price: descont.price * 0.9, // Dar 10% de desconto

    }))

    products(newArray)

}

// REDUCE
buttonReduce.addEventListener('click', somTudo)
function somTudo() {

    const productsValue = menuOptions.reduce((acc, totalSoma) => acc + totalSoma.price, 0)

    valueUl.innerHTML = `

    <li>
        A soma de todos os meus itens do menu é ${convertcurrency(productsValue)}
   </li>
   
   `
}

//FILTER

buttonFilter.addEventListener('click', filterTotal)
function filterTotal() {

    const filtraçon = menuOptions.filter((healthy) => healthy.vegan)

    products(filtraçon)
}





MAP => FEITO DO MEU JEITO 
buttonMap.addEventListener('click', descontTotal)

function descontTotal() {
    let preco = ''
    const newArray = menuOptions.map((descont) => {

        const dividido = 10 / 100
        const total = dividido * descont.price
        const fusao = descont.price - total
        preco +=  `
    
        <li>
            <img src=${descont.src}>
            <p>${descont.name}</p>
            <p class="item-price">R$ ${fusao.toFixed(2)}</p>
       </li>
       
       `  
        })

     valueUl.innerHTML = preco   
}


=> FILTER feito do meu jeito

buttonFilter.addEventListener('click', filterTotal)
function filterTotal() {
let box = ''
   const filtraçon =  menuOptions.filter((healthy) => {

    if (healthy.vegan === true) {

        box += `
          <li>
              <img src=${healthy.src}>
              <p>${healthy.name}</p>
              <p class="item-price">R$ ${healthy.price.toFixed(2)}</p>
         </li>
         
         `  
    } else return false

   })
  
   valueUl.innerHTML = box
  
}
*/





