import { createMenus } from './menu.js'
import { initializeFruitList } from './fruit-list.js'

console.log('Hello world!')  // testa att skript-filen körs

/* Våra redskap:
console.log
querySelector, querySelectorAll
innerText
addEventListener('click', functionName)
classList: .add, .remove, .toggle
*/

const output = document.querySelector('.output')
if( output === null ) {
	console.log('Kontrollera stavningen, querySelector hittade inget element!')
}
// id: #
// CSS-klass: .

output.innerText = 'Hello world'

let count = 0
const countButton = document.querySelector('#count-button')
countButton.addEventListener('click', counter)

function counter(event) {
	// console.log('Vad får vi från webbläsaren? ', event)
	count++
	output.innerText = 'Antal klick: ' + count

	countButton.classList.add('alternate-button')
	// classList.toggle för att byta
}


createMenus()
initializeFruitList()
