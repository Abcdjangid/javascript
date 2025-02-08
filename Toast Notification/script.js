const toastBox = document.getElementById("toastBox");
let  SuccessMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let  errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check Again !';


function showToast(Msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = Msg;
    toastBox.appendChild(toast)

    if(Msg.includes('error')){
        toast.classList.add('error');
    }

    if(Msg.includes('Invalid')){
        toast.classList.add("Invalid");
    }

    setTimeout(() => {
        toast.remove();
    }, 5000);
}