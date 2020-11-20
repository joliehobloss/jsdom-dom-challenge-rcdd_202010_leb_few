let subButten=document.getElementById("submit");
let listComment=document.getElementById("list");
let inputComment=document.getElementById("comment-input");
let counter=document.getElementById("counter");
let pauseButten=document.getElementById("pause");
let result=0;
let minusButten=document.getElementById("minus");
let plusBittun=document.getElementById("plus");
let heartButten=document.getElementById("heart");


//submit butten//
subButten.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});


//counter//
let internalId=setInterval( function(){
      counter.innerText= result++;
    }, 1000);


//pause buttons//
pauseButten.addEventListener("click", function(){
clearTimeout(internalId);
minusButten.disabled = true;
plusBittun.disabled = true;
heartButten.disabled = true;
pauseButten.value="",
});

