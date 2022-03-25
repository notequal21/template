
if (document.querySelector('.modal-open-btn')) {
	const openBtn = document.querySelectorAll('.modal-open-btn')
	const modal = document.querySelector('.contactus')
	const modalBg = document.querySelector('.contactus__bg')
	const body = document.querySelector('body')
	const content = document.querySelectorAll('.container')

	let toggleModal = (e) => {
		e.preventDefault()

		let div = document.createElement('div');
		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		if (modal.classList.contains('active')) {
			modal.classList.remove('active')
			body.classList.remove('lock')
			if (window.innerWidth > 992) {
				content.forEach((item) => {
					item.style.maxWidth = `1320px`
					item.style.padding = ` 0 20px`
				})
			}
		} else {
			modal.classList.add('active')
			body.classList.add('lock')
			if (window.innerWidth > 992) {
				content.forEach((item) => {
					item.style.maxWidth = `${1320 + scrollWidth}px`
					item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`
				})
			}
		}
	}

	openBtn.forEach((item) => {
		item.addEventListener('click', toggleModal)
	})
	modalBg.addEventListener('click', toggleModal)
}