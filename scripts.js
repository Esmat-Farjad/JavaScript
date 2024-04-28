const div = document.querySelector(".text");
const elem = document.querySelector(".fade-element");
const text = "Learn Modern JavaScript !";

function textTypingEffect(element, text, i = 0){
    if(i == 0){
        element.textContent = "";
    }
    element.textContent += text[i];
    //if we reached the end of the string 
    if(i == text.length - 1){
        return;
    }
    setTimeout(() => textTypingEffect(element, text, i + 1),50);
}
textTypingEffect(div, text);
const darkModeHandler = document.querySelectorAll(".dark-mode");
darkModeHandler.forEach(element => {
    element.addEventListener("click", function(){
        element.classList.add("display-none");
        if(element.id == "sun"){
        window.document.body.classList.remove("dark-mode-active"); 
        } else if(element.id == "moon"){
            window.document.body.classList.add("dark-mode-active");
        }
        toggleFunction()

    });
});
function toggleFunction(){
if(window.document.body.classList.contains("dark-mode-active")){
    document.getElementById("sun").style.display="block";
    document.getElementById("moon").style.display="none";
} else {
    document.getElementById("moon").style.display="block";
    document.getElementById("sun").style.display="none";
}
}
window.onload=function(){
    toggleFunction();
}