const priceField = document.querySelector('#price-field');
const discountText = document.querySelector('#discount-text'); 
const totalPrice = document.querySelector('#total-price');
document.querySelector('#discount-btn').addEventListener('click', function(){
    const getPrice= priceField.value;
    if(getPrice ==''){
        alert('Enter price amount first');
        return;
    };
    const price=parseFloat(getPrice);
    discountText.innerText = '30% Discount Applied Succesfully'
    const discountedPrice = price - (price*(30/100));
    totalPrice.innerText = discountedPrice.toFixed(2);
})
priceField.addEventListener('keyup', function(event){
    totalPrice.innerText=event.target.value;
})

// offering cupon option
document.querySelector('#offer-btn').addEventListener('click', function(){
    const offerSection=document.querySelector('#offer-section');
    const discountSection=document.querySelector('#discount-section');
    const normalSection=document.querySelector('#normal-section');
    normalSection.style.display = 'none';
    offerSection.style.display = 'none';
    discountSection.style.display = 'grid';
    
})


// Discount using cupon
const priceField2 = document.querySelector('#price-field2');
const discountText2 = document.querySelector('#discount-text2'); 
const totalPrice2 = document.querySelector('#total-price2');
const cuponField = document.querySelector('#cupon-field')
document.querySelector('#discount-btn2').addEventListener('click', function(){
    const getPrice2= priceField2.value;
    if(getPrice2 ==''){
        alert('Enter price amount first');
        return;
    };
    const price2 = parseFloat(getPrice2);
    const cupon = cuponField.value;
    if(cupon === '' || cupon != 'DISC30'){
        alert('Enter your coupon correctly !')
        return;
    };
    if(cupon === 'DISC30'){
        const discountedPrice2 = price2 - (price2*(30/100));
        totalPrice2.innerText = discountedPrice2.toFixed(2);
    }
    discountText2.innerText = 'Discount Applied Succesfully'
})
priceField2.addEventListener('keyup', function(event){
    totalPrice2.innerText=event.target.value;
})