import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { createSudokuMap } from './sudokuMap/sudokuMap'
import { cell_selected_val } from './sudokuMap/sudokuMap'
import { changeGivenNumbers } from './sudokuMap/sudokuMap'
import { givenNumbers } from './sudokuMap/sudokuMap'

document.querySelector('#app').innerHTML = `
  <div>
  <header>
  <h1>Sudoku AI Play</h1>
  </header>
  <section class="choices">
    <button id="ten-btn">9x9</button>
    <button id="thirty-btn">12x12</button>
    <button id="fifty-btn">15x15</button>
  </section>
  <section class="complete-round">
    <button id="complete-btn">Complete Round</button>
  </section>
    <div id="sudoku-map"></div>
  </div>
`

let button_1 = document.getElementById('ten-btn')
let button_2 = document.getElementById('thirty-btn')
let button_3 = document.getElementById('fifty-btn')

let complete_btn = document.getElementById('complete-btn')
let given_array = []

let map_el = document.getElementById('sudoku-map'); // Assuming you have a container with ID 'sudoku-map'

button_1.onclick = (e) => {
  map_el.innerHTML = ''
  createSudokuMap(map_el, 9, 9);
};

button_2.onclick = (e) => {
  map_el.innerHTML = ''
  createSudokuMap(map_el, 12, 12);
};

button_3.onclick = (e) => {
  map_el.innerHTML = ''
  createSudokuMap(map_el, 15, 15);
};

complete_btn.onclick = (e) => {
  let string = cell_selected_val[0] + '-' + cell_selected_val[1]
  const childElement = document.getElementById(string);
  childElement.classList.remove('cell-selected');
  childElement.classList.add('ceil')
  round_complete = round_complete
  changeGivenNumbers(given_array)
  console.log(givenNumbers)
}


export const changeRoundComplete = (bool) => {
  round_complete = bool
}

export let round_complete = false


