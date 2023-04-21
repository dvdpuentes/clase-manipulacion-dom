/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({h1, p, parrafito, pid, input});

//h1.innerHTML = 'El que se va para Barranquilla....<br> pierde su silla';
h1.innerText = 'El que se va para Barranquilla....<br> pierde su silla';
console.log(h1.getAttribute('pantalla'));
console.log(parrafito.getAttribute('class'));
h1.setAttribute('class', 'rojo');

h1.classList.add('verde');
h1.classList.remove('rojo');

//input.value = "Cambio de texto";

const img = document.createElement('img');

img.setAttribute('src', 'https://images.pexels.com/photos/15801862/pexels-photo-15801862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);

pid.append (img);*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector("#calculo2");
const btn1 = document.querySelector('#btnCalcular1');
const btn2 = document.querySelector('#btnCalcular2');
const resultado = document.querySelector('#resultado');

//btn2.addEventListener('click', btnOnClick);
form.addEventListener('submit', sumarInputValues);

// function btnOnClick(){
//     let resu = parseInt(input1.value) + parseInt(input2.value);
//     console.log(resu);
//     resultado.innerText = "Resultado es: " + resu;
// }

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();    
    let resu = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado es: " + resu;
}


