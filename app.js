var quote=document.querySelector('.quote');
var author=document.querySelector('.author');




const api="https://api.quotable.io/random";
async function getquote(url){
    const response=await fetch(url);
    var data=await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote(api);