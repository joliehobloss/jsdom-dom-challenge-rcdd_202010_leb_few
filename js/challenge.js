
//submit butten//
let subButten=document.getElementById("submit");
let listComment=document.getElementById("list");
let inputComment=document.getElementById("comment-input");
subButten.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});

//counter//
 setInterval( function(){
      let counter=document.getElementById("counter");
      let result=0;
      result++;
      counter.innerText= result++;
    }, 1000);


