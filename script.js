function umn() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    var c = a * b;

    if( a<0||b<0)
    {
        alert('Вводить можно только положительные числа');
        let str = "Ошибка!";
        document.getElementById('result').innerHTML = str;
    }
    if(a===0||b===0)   
    {
        alert('Введите значения!');
        let str = "Ошибка!";
        document.getElementById('result').innerHTML = str;
    }

    if (isNaN(a)==true || isNaN(b)==true) 
    {
        alert('Вводимые данные некорректны');
        let str = "Ошибка!";
        document.getElementById('result').innerHTML = str;
    }
    else
        document.getElementById('result').innerHTML =c;
    
}
window.addEventListener('DOMContentLoaded', function (umn) {
    console.log("DOM fully loaded and parsed");
    let d = document.getElementById("but");
    d.addEventListener("click", umn);
 });
