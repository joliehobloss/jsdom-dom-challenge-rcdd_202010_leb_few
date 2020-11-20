let subButten=document.getElementById("submit");
let listComment=document.getElementById("list");
let inputComment=document.getElementById("comment-input");
let counter=document.getElementById("counter");
let pauseButten=document.getElementById("pause");
let result=0;
let minusButten=document.getElementById("counter");
let plusBittun=document.getElementById("pause");

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

});

