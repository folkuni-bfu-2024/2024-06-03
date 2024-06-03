// console.log('Menu.js')

function createMenus() {
	// console.log('createMenus')
	const links = document.querySelectorAll('.menu a')
	console.log('createMenus, start=', links[0].innerText)

	links[0].addEventListener('click', startClick)
	links[1].addEventListener('click', searchClick)
	links[2].addEventListener('click', myPagesClick)

	// Gör så start-länken ser ut att vara markerad, dvs. CSS-klassen "selected"
	// Avmarkera alla andra menyalternativ
	function startClick(event) {
		console.log('startClick')
		deSelect()
		links[0].classList.add('selected')
	}
	function searchClick(event) {
		console.log('searchClick')
		deSelect()
		links[1].classList.add('selected')
	}
	function myPagesClick(event) {
		console.log('myPagesClick')
		deSelect()
		links[2].classList.add('selected')
	}
	function deSelect() {
		for( let i=0; i<links.length; i++ ) {
			links[i].classList.remove('selected')
		}
	}
}

export { createMenus }
