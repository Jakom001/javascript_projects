let diceSides = document.getElementById('diceSides');
const roleDice = document.getElementById('roleDice');
const diceSide = document.getElementById('diceside');
const diceImage = document.getElementById('diceimage');

const values = [];
const images = [];

roleDice.onclick = () =>{
    
    for (let i=1; i<= diceSides.value; i++ ){
        const value = Math.floor(Math.random() *6) + 1
        values.push(value)
        images.push(`<img src="images/${value}sided.png" alt="Dice ${value}">`);   
    }
    diceSide.textContent = `Dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join('')
   
}
