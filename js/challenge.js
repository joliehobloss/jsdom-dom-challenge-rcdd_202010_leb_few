
//submit butten//
let subButten=document.getElementById("submit");
let listComment=document.getElementById("list");
/*let inputComment=document.getElementById("comment-input");
subButten.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});*/

//counter//
/*function counterIncrease() {
  let count=document.getElementById("counter");
  let counter=count.textContent++;
  let result=count.innerText=counter;
  window.setTimeout(result, 1000);
} */
         
subButten.addEventListener("click", function(){
  let count=document.getElementById("counter");
  
  listComment.innerText=parseInt(count.innerText)+1;
});            


