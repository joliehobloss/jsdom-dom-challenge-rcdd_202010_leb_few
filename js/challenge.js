
//submit butten//
let subButten=document.getElementById("submit");
let listComment=document.getElementById("list");
let inputComment=document.getElementById("comment-input");
subButten.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});

//counter//
let counter=document.getElementById("counter");
let result=0;
 setInterval( function(){
      result++;
      counter.innerText= result++;
    }, 1000);


