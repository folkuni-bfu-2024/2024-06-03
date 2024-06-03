console.log('Hello world!')  // testa att skript-filen körs

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

function counter() {
	count++
	output.innerText = 'Antal klick: ' + count

	countButton.classList.add('alternate-button')
	// classList.toggle för att byta
}
