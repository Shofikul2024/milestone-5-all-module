//  afdd money to thre account 

// step 1 : add event handler 


document.getElementById('btn-add-money').addEventListener('click' , function (event){
//   step 2: prevent defauklt behaviour (prevent reloding browser)
//    aita akto bejal lagbe 
event.preventDefault() ;

// step 3: get the phone number and the pin number 
const phoneNumber=document.getElementById('phone-number').value
const pinNumber=document.getElementById('pin-number').value
console.log(phoneNumber,pinNumber);

// step4: validate phone and  pin
//  aita temporary vabe aakto jene rakhi  pore amra main rules onusoron  kore kaj    korbo inshalla 

if (phoneNumber==='5' && pinNumber==='1234') {


    console.log( you are  logged in );
    // step5: allow user to the webside 
}
else {

    alert (' wrong phone number or  pin ')  ; 
}
     
})

document.getElementById('button-login')
.addEventListener('click' , function (event) {
event.preventDefault() ;
//   get phone number and pin
const phoneNumber =document.getElementById('phone-number'),value ;
const pinNumber =document.getElementById('pin-number'),value ;
// console.log ( phoneNumber  , pinNumber) ;
//    bad way to validate 

if (phoneNumber==='5' &&& pinNumber==='1234') {
console.log( ' you are  logged in ') ;
window.location.href='.home' ;

}
else{

    alert ( 'wrong phone number or pin .')
}


}) ;


