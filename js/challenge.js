let subButton=document.getElementById("submit");
let listComment=document.getElementById("list");
let inputComment=document.getElementById("comment-input");
let counter=document.getElementById("counter");
let pauseButton=document.getElementById("pause");
let result=0;
let minusButton=document.getElementById("minus");
let plusBitton=document.getElementById("plus");
let heartButton=document.getElementById("heart");



//submit button//
subButton.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});


//counter//
let internalId=setInterval( function(){
      counter.innerText= result++;
    }, 1000);


//pause button//
pauseButton.addEventListener("click", function(){
if(pauseButton.innerText=="pause"){
clearTimeout(internalId);
minusButton.disabled = true;
plusBitton.disabled = true;
heartButton.disabled = true;
pauseButton.innerText="resume";
}else{
result=0;
minusButton.disabled = false;
plusBitton.disabled = false;
heartButton.disabled = false;
pauseButton.innerText="pause";

}
});




