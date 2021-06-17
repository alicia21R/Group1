//defining our variables
let destfromVal = document.register.df
let desttoVal = document.register.dt
let timedep = document.register.tod
let timearrival = document.register.toa
let tempVal = document.register.temperature
let clientname = document.register.clientName
let telephoneVal = document.register.telephone



var validate =()=>{
   //destination from
let destfrom = /^[A-Za-z]+$/
if(destfromVal.value.match(destfrom)){
    destfromVal.style.borderBottom = "2px solid green"
} else {
    destfromVal.style.borderBottom = "2px solid red"
}
//destination to
let destto = /^[A-Za-z]+$/
if(desttoVal.value.match(destto)){
    desttoVal.style.borderBottom = "2px solid green"
} else {
    desttoVal.style.borderBottom = "2px solid red"
}
//timeofdepature
let timedepVal = /^[0-9]+$/
if(timedep.value.match(timedepVal)){
    timedep.style.borderBottom = "2px solid green"
} else {
    timedep.style.borderBottom = "2px solid red"
}
//timeofarrival
let timeout = /^[0-9]+$/
if(timearrival.value.match(timeout)){
    timearrival.style.borderBottom = "2px solid green"
} else {
    timearrival.style.borderBottom = "2px solid red"
}

//telephone
let telephone = /^[0-9]+$/
if(telephoneVal.value.match(telephone)){
    telephoneVal.style.borderBottom = "2px solid green"
} else {
    telephoneVal.style.borderBottom = "2px solid red"
}
//temperature
let temp = /^[0-9a-zA-Z]+$/
if(tempVal.value.match(temp)){
    tempVal.style.borderBottom = "2px solid green"
} else {
    tempVal.style.borderBottom = "2px solid red"
}
//name
let clientname = document.register.clientName
if(clientname.value<=8){
    clientname.textContent = "Name shoud exceed 8 characters"
}
}

const button = document.querySelector("button")
button.addEventListener("click",validate)