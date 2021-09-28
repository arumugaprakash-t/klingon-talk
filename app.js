var translate_btn = document.querySelector("#btn-click")

var outputDiv = document.querySelector("#output")

var input_text = document.querySelector("#txt-area")

function clickHandling() {
    
    var array = input_text.value.split(" ")
    var string=""
    for(var i=0;i<array.length;i++) {
        string+=(array[i] + " ki ")
    }
    
    outputDiv.innerText = string 


}


translate_btn.addEventListener("click",clickHandling)