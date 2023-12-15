let result = document.getElementById("result");
let button = document.getElementById("button");
let reset = document.getElementById("reset");


button.addEventListener("click",function(){
    result.innerHTML ++;
    console.log(result)
})


reset.addEventListener("click", function (){
    result.innerHTML=" ";
    console.log(result)
})