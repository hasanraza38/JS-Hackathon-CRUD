const title=document.querySelector('#title')
const discription=document.querySelector('#discription')
const price=document.querySelector('#price')
const card =document.querySelector('#card-cont')

let arr =[];
let cardsArr =''
function addItems() {
    arr.push({
        title:title.value,
        discription:discription.value,
        price:price.value,
    })
    
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        
        card.innerHTML+=`
       <div class="card" style="width: 18rem;">
               <div class="card-body">
                 <h5 class="card-title">${title.value}</h5>
                 <p class="card-text">${discription.value}</p>
                 <p class="card-text">RS:${price.value}</p>
                 
                  <a href="#" onclick="addToCart()" class="btn btn-primary">Add To Cart</a>
                 <a href="#" class="btn btn-primary">Buy NOW</a>
               </div>
             </div>
       `
        

    }

title.value=''
discription.value=''
price.value=''

    
}


function addToCart() {

    // console.log(index);
    console.log('gfghf');
    arr.push(cardsArr)
    console.log(arr);
    
    // localStorage.setItem('cartItems' , JSON.stringify(arr))
    
// if(arr.includes(phones[index])){
//     console.log('item included');

//     phones[index].quantity += 1;
// }else{
//     phones[index].quantity = 1;
//     arr.push(phones[index]);
//     }
//     console.log(arr);


    }

