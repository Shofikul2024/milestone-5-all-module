// console.log(" button clicking added file ");

//  h.w  net theke shikye  hobe     form submit reloding  the page  
document.getElementById('button-login').addEventListener('click' , function () {
    event.preventDefault()
 


const phoneNumber =document.getElementById('phone-number').value ;


const pinNumber = document.getElementById('pin-number').value ;
console.log(phoneNumber ,pinNumber) ;

if (phoneNumber ==='5 ' && pinNumber==='1234') {
    console.log('you are logged in ') ;
 window.location.href=''

}
else {
alert ( 'wrong phone number or pin') ;

}

})  