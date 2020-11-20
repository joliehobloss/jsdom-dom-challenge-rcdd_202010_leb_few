let subButten=document.getElementById("submit");
let inputComment=document.getElementById("comment-input");
let listComment=document.getElementById("list");

subButten.addEventListener("click", function(){
  listComment.innerText+=inputComment.value;
});