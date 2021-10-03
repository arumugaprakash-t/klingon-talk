var translate_btn = document.querySelector("#btn-click")

var outputDiv = document.querySelector("#output")

var input_text = document.querySelector("#txt-area")

var url = "https://api.funtranslations.com/translate/klingon.json"


function translate(text){

    return url +"?text="+text
}

function error(){
    console.log("Oops somethings is wrong")
    alert("Something went wrong")
}

function clickHandling(){
    fetch(translate(input_text.value))
        .then(respone => respone.json())
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(error)
}

translate_btn.addEventListener("click",clickHandling)