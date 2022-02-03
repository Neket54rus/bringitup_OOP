export default class ShowInfo {
	constructor(triggerSelector) {
		this.btns = document.querySelectorAll(triggerSelector)
	}

	init() {
		this.btns.forEach(btn => {
			btn.addEventListener('click', () => {
				const text = btn.closest('.module__info-show').nextElementSibling

				text.classList.toggle('msg')
				text.style.marginTop = '20px'
			})
		})
	}
}