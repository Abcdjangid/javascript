const Bill  = document.getElementById("bill")
const Tip  = document.getElementById("tip")
const Button  = document.getElementById("button")
const Result  = document.getElementById("result")


function calculatetotal(){
    const billvalue = Bill.value;
    const tipValue = Tip.value;
    const Totalvalue = billvalue*(1+tipValue/100)
    Result = Totalvalue.toFixed(2);
}
Button.addEventListener("click", calculatetotal)