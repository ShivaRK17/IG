//For bulb 
let bulb = document.getElementById("bulb");
let bulbidea = document.getElementById('bulbidea');
let home = document.getElementById('home');
bulb.addEventListener('click',()=>{
    bulbidea.style.top = '100px';
    bulbidea.style.opacity = '0';
    setTimeout(() => {
        bulbidea.style.display = 'none';
        home.style.display = 'block';
    }, 1000);
})