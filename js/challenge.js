
//submit butten//
let subButten=document.getElementById("submit");
let listComment=document.getElementById("list");
let inputComment=document.getElementById("comment-input");
subButten.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});

//counter//
function counterIncrease() {
  let count=document.getElementById("counter");
  let result=parseInt(count.innerText)+1;
  return result;
} 
listComment.innerText=window.setTimeout(counterIncrease(), 1000);     
           


