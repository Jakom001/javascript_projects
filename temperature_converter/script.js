let textBox = document.getElementById('textBox');
let toFahrenheit = document.getElementById('toFahrenheit');
let toCelcius = document.getElementById('toCelcius');
let result = document.getElementById('result');
let mysubmit = document.getElementById('mysubmit');
let temp;

mysubmit.onclick = function convert(){
    if (isNaN(Number(textBox.value))){
        result.textContent = 'please enter a number';
    }
    else if(textBox.value === ""){
        result.textContent = 'please enter a value';
    }

    else if (toFahrenheit.checked){
    
        temp = (Number(textBox.value) * 9/5 + 32); 
        result.textContent = temp.toFixed() + "°F"
    }

    else if(toCelcius.checked){
        result.textContent = ((Number(textBox.value) - 32) * 5/9).toFixed() + '°C';
    }

    else{
        result.textContent= 'please select an input'
    }

}
