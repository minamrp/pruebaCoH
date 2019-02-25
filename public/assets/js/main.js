'use strict';

const pageTitleEl = document.querySelector('.page__title');
const article = document.querySelector('.article');
const lista = {
  A: 'Primer elemento',
  B: 'Segundo elemento',
  C: 'Tercer elemento',
  D: 'Cuarto elemento',
  E: 'Quinto elemento',
};
const message = 'Elemento enviado: ';
let event;

function  selectDom () {
  const optionsObject = `<select>
                          <option selected>${lista.A}</option>
                          <option>${lista.B}</option>
                          <option>${lista.C}</option>
                          <option>${lista.D}</option>
                          <option>${lista.E}</option>
                        </select>`;
  article.innerHTML = optionsObject;

  const pageTitle = `Selecciona un elemento de la lista`;
  pageTitleEl.innerHTML = pageTitle;

  const btn = `<button class="btn">Enviar</button>`;
  article.innerHTML += btn;

}
selectDom();

function selectValue(e){
  event = e.currentTarget.value;
}

function selectOption (){
  if(!event){
    return alert(`${message} ${lista.A}`);
  }else{
    return alert(`${message} ${event}`);
  }
}

const btn =document.querySelector('button');
const selectEl = document.querySelector('select');
selectEl.addEventListener('change', selectValue);
btn.addEventListener('click', selectOption);



// define('modulo', ['jquery'], function ($) {

//   var modulo = {
//       //START

//       //Private attributes
//       _lista: {
//           A: "Primer elemento",
//           B: "Segundo elemento",
//           C: "Tercer elemento",
//           D: "Cuarto elemento",
//           E: "Quinto elemento",
//       },
//       _MENSAJE: "Elemento enviado: ",

//       //Public attributes

//       //Public methods
//       init: function () {
//           //call to ready method

//           //call to mockup method

//           //call to addEvents method

//       },

//       //Private methods

//       //END
//   };
//   modulo.init();
// });


//# sourceMappingURL=main.js.map
