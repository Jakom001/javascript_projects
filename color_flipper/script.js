const colors = ['green', 'red', 'rgba(133, 122, 200)'];
const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];



const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const container = document.querySelector('.container');



btn.addEventListener('click', () =>{
    let hexcolor = ''
    for (let i= 1; i<= 6; i++){
        let randomIndex = Math.floor(Math.random() * 16);
        hexcolor += hex[randomIndex];
    }
    
    color.textContent = `#${hexcolor}`;
    document.body.style.backgroundColor = `#${hexcolor}`;
});


