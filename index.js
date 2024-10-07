const Display = document.getElementById("text");

function GotoDisplay(input){
    Display.value += input;
}

function Clear(){
    Display.value = "";
}
if (Display.value == "undifined"){
    Display.value = ""
}

function Calculate(){
    try{
        Display.value = eval(Display.value);
    }
    catch{
        Display.value = "😟wrong";
        setTimeout(Clear, 1500)
    }


    Display.value = eval(Display.value);
}
