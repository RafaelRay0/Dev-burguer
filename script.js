
// MAPEAMENTOS HTML
const valueUl = document.querySelector('.ul-li')
const buttonFor = document.querySelector('.button-Foreach')
const buttonMap = document.querySelector('.button-Map')
const buttonReduce = document.querySelector('.button-Reduce')
const buttonFilter = document.querySelector('.button-Filter')
const descontCupom = document.querySelector('#send')


//CONVERT MOEDAS
function newMoedas(newValor) {

 const convert = newValor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
   
 return convert
    
}

//FOREACH
function newCardapio(showAll) {

let newElement = ''
    const mostrarTudo = showAll.forEach((element) => {

        newElement  += ` 
         <li>
              <img src=${element.src}>
              <p>${element.name}</p>
              <p class="item-price"> ${newMoedas(element.price)}</p>
         </li>
         
         `
    })

   valueUl.innerHTML = newElement
}

descontCupom.addEventListener('click', function(e) {
    e.preventDefault();

    const cupom = document.querySelector("#descont")
    const value = cupom.value
    if (value === 'desconto10') {
        const descont = menuOptions.map((itens) => ({

            ...itens,
            price: itens.price * 0.9,
    
        }))
    newCardapio(descont)
    }else (
        alert("Cupom invalido")
    )
})


// REDUCE
function totalSum() {

    const valueSum = menuOptions.reduce((acc, element) => {

       return acc + element.price 
        
    }, 0)
    
    valueUl.innerHTML = ` 
    <li>
        A soma de todos os meus itens do menu é ${valueSum}
    </li>
    
    `
}

//FILTER
function filterTotal() {

    const filtraçon = Veganos.filter(number => number.vegan)

    newCardapio(filtraçon)
}
// EVENTOS DE CLICK
buttonFor.addEventListener('click',()=> newCardapio(menuOptions))
buttonReduce.addEventListener('click', totalSum)
buttonFilter.addEventListener('click', filterTotal)



























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





