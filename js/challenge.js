
//submit butten//
let subButten=document.getElementById("submit");
let inputComment=document.getElementById("comment-input");
let listComment=document.getElementById("list");
subButten.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});

//counter//

function counterIncrease() {
  let counter=document.getElementById("counter");
  let result=counter.innerText
  timeoutID = window.setTimeout(window.alert, 1000, 'That was really slow!');
} 
            


