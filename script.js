
function calcula() {
    let str = document.getElementById('temperature');
    if (str.value.toUpperCase().includes('F')) {
        let grausF = Number(str.value.toUpperCase().replace("F", ""));
        let calculaC = (grausF - 32) * (5/9);
        str = calculaC + 'C';
        
    } else if (str.value.toUpperCase().includes('C')) {
        grausC = Number(str.value.toUpperCase().replace("C", ""));
        let calculaF = grausC * (9/5) + 32; 
        str = calculaF + 'F';
    
    } else {
        str = 'Temperatura inválida. Insira o valor com "C" ou "F"';
    }
    return  document.getElementById('result').innerHTML = str;
}
