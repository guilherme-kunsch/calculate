var value;
var result;
//função de receber os digitos
function button (num){
    value = document.calc.viewfinder.value += num;
}

//Botão de resetar a calculadora
function reset(){
    document.calc.viewfinder.value = "";
}

function calculate () {
    result = eval(value);
    document.calc.viewfinder.value = result;
}

