
//submit butten//
let subButten=document.getElementById("submit");
let listComment=document.getElementById("list");
let inputComment=document.getElementById("comment-input");
subButten.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});

//counter//
 
let i=0;   
listComment.innerText=window.setTimeout(i++, 1000);        


