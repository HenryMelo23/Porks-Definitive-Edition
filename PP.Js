vh = 0
estilo = ''
divs = ''

for(var i=0;i<32;i+=2){
    estilo += '.led-left'+i+'{background: red;width: 5px;height: 30px;position: absolute;top: '+vh+'vh;left: 99.3vw;transform: rotate(20deg);}.led-left'+(i+1)+'{background: red;box-shadow: -2px 2px 5px red;width: 5px;height: 30px;position: absolute;top: '+(vh+4)+'vh;left: 99.4vw;transform: rotate(-20deg);}'
    divs +='<div class="led-left'+i+'"></div>'
    divs +='<div class="led-left'+(i+1)+'"></div>'
    vh+=6
}




document.getElementById('x').innerHTML= estilo
document.getElementById('borda_esquerda').innerHTML = divs


