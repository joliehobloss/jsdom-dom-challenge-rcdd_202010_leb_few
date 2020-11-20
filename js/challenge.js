
//submit butten//
let subButten=document.getElementById("submit");
let inputComment=document.getElementById("comment-input");
let listComment=document.getElementById("list");
subButten.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});

//counter//
function counterIncrease() {
  let count=document.getElementById("counter");
  let counter=count.textContent++;
  let result=count.innerText=counter;
  timeoutID = window.setTimeout(result, 1000, 'That was really slow!');
} 
            


