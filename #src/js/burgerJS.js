
if (document.querySelector('.header-body__burger')) {
	const openBtn = document.querySelector('.header-body__burger')
	const menu = document.querySelector('.header-body__btns')
	const body = document.querySelector('body')

	let toggleBurger = () => {
		if (openBtn.classList.contains('active')) {
			openBtn.classList.remove('active')
			menu.classList.remove('active')
			body.classList.remove('lock')
		} else {
			openBtn.classList.add('active')
			menu.classList.add('active')
			body.classList.add('lock')
		}
	}

	openBtn.addEventListener('click', toggleBurger)
}