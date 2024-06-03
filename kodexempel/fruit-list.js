function initializeFruitList() {
	console.log('initializeFruitList')

	const fruitInput = document.querySelector('.fruit-input')
	const addFruitButton = document.querySelector('.add-fruit')
	const fruitList = document.querySelector('.fruit-list')
	// Kontrollera gärna att du lyckas hitta elementen:
	// console.log('fruit input:', fruitInput)

	addFruitButton.addEventListener('click', addFruit)

	function addFruit() {
		// plocka ut det användaren skrivit, spara i en variabel
		// skapa ett <li> element
		// sätt innerText till det användaren skrivit
		// lägg till <li> sist i fruktlistan

		const text = fruitInput.value
		const li = document.createElement('li')
		li.innerText = text
		fruitList.append(li)  // lägg till sist i <ul>
		// använd fruitList.prepend(li) om du vill lägga till först
	}
}

export { initializeFruitList }
