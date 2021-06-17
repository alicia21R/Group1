//created variables that get element by id
var setFrom = document.getElementById("df")
var setTo =document.getElementById("dt")
var arrivalTime =document.getElementById("toa")
var departureTime =document.getElementById("tod")
var Name=document.getElementById("name")
var contact=document.getElementById("telephone")
var gender=document.getElementById("gender")
var Form=document.register
//included the created variables in an array for referencing
const input=[setFrom,setTo,arrivalTime,departureTime,Name,contact,]
var error=document.querySelector('error')

//defined a fuction validate that runs through every input tag
const validate=(input)=>{
    for(let i=0;i<input.length;i++){
        if(input[i].value==""){
            input[i].style.border="1px solid red "
            error[i].textContent="Required Field"
        }else{
            input[i].style.color="antique white"
            error[i].textContent=""
        }
    }
}
//using regular expressions
let customer=document.register.clientName
let telNum=document.register.telephone
let small=document.querySelector('small')

let validation=()=>{

//let cN=/^[A-Za-z]+$/
//if(customer.value.match(cN)){
 //   customer.style.border=""
//}else{
//    customer.style.border="1px dotted blue"
//}


let tel = /^[0-9]+$/
if(telNum.value.match(tel)){
    telNum.style.border="1px solid red "
    small[10].innerHTML=""
}else{
    telNum.style.border="1px dotted red "
    small[10].innerHTML="invalid telephone number"

}
}


//using event listener i invoked the fuction
const button=document.querySelector('button')
button.addEventListener("click",validate)
button.addEventListener("click",validation)

