var nom =document.getElementById('nom')
var  errnom =document.getElementById('errnom')
//console.log(nom);
nom.addEventListener('input' , essai)

function essai(event) {
    if (event.target.value.length > 2) {
        nom.style.boxShadow = ''
        errnom.innerHTML = ''
        
    }else{
        console.log(event.target.value);
       nom.style.boxShadow = '1px 1px 1px 3px rgba(214, 28, 28, 0.3)'
       errnom.innerHTML = 'soit serieux et met ton nom'
    }    
}

var Prenom =document.getElementById('Prenom')
var errprenom =document.getElementById('errprenom')
//console.log(nom);
Prenom.addEventListener('input' , essai1)

function essai1(event) {
    if (event.target.value.length > 2) {
        Prenom.style.boxShadow = ''
        errprenom.innerHTML = ''

        
    }else{
        console.log(event.target.value);
       Prenom.style.boxShadow = '1px 1px 1px 3px rgba(214, 28, 28, 0.3)'
       errprenom.innerHTML = 'Soit sérieux et met ton prénom'
    }    
}

var Email =document.getElementById('email')
var erremail =document.getElementById('erremail')
//console.log(nom);
Email.addEventListener('input', essai2)

function essai2(event) {
    if (event.target.value.length > 5) {
        Email.style.boxShadow = ''
        erremail.innerHTML =""
        
    }else{
      console.log(event.target.value);
       Email.style.boxShadow = '1px 1px 1px 3px rgba(214, 28, 28, 0.3)'
       erremail.innerHTML ="soit serieux"

    }    
}

var Tel =document.getElementById('inputPassword4')
var errtel =document.getElementById('errtel')

//console.log(nom);
Tel.addEventListener('input' , essai3)

function essai3(event) {
    if (event.target.value.length > 5) {
        Tel.style.boxShadow = ''
        errtel.innerHTML = ''
        
    }else{
        console.log(event.target.value);
       Tel.style.boxShadow = '1px 1px 1px 3px rgba(214, 28, 28, 0.3)'
       errtel.innerHTML = 'Soit serieux et met ton téléphone'

    }    
}


