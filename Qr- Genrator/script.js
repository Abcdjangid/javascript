const Api_Url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const btn = document.getElementById("btn");
const error = document.getElementById("error");

btn.addEventListener("click", genrateQr);
qrText.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        genrateQr();
    }
})


function genrateQr(){
   if(qrText.value === ""){
    error.innerHTML = `"Please Enter your Text or URL"`;
    error.classList.add ("visible");
    setTimeout(() => {
        error.innerHTML = "";
        error.classList.remove("visible");
    }, 2000);
   }
   else{
    qrImage.src = Api_Url + qrText.value;
    imgBox.classList.add("show-img");
    error.innerHTML = "";
   }
}
