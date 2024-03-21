const div = document.querySelector(".text");
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
    setTimeout(() => textTypingEffect(element, text, i + 1),100);
}
textTypingEffect(div, text);


