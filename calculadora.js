const display= document.querySelector("#display");//seleccionar todos los componentes de display
const buttons= document.querySelectorAll("button");//toma todos los botones que tenemos

buttons.forEach((btn) => {
    //Evenlistener es una funcion se llama solo cuando se le de click a algun boton
    btn.addEventListener("click", () =>{
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac"){
            display.value = "";
        } else if (btn.id == "de"){
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id
        }
    })
})
