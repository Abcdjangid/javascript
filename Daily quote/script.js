const Api_Url = "https://api.quotable.io/random";
const Quote = document.getElementById("Quote");
const author = document.getElementById("author");
const errorShow = document.getElementById("error");


async function getquote(Api_Url) {
    errorShow.innerHTML = "";
    try {
        const response = await fetch(Api_Url);

        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        Quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch(error){
        errorShow.innerHTML = (`Failed to fetch a quote. Please try again later.`);  
        Quote.innerHTML = "";
        author.innerHTML = "";
        Quote.style.display = ("none");
        author.style.display = ("none");
    }
}


function tweet() {
    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(Quote.innerHTML + " ---- by " + author.innerHTML),
        "Twitter window",
        "width=600,height=500,left=100,top=100,resizable=yes,scrollbars=yes"
    );
}
