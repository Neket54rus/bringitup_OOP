export default class Download {
	constructor(triggerSelector) {
		this.btns = document.querySelectorAll(triggerSelector)
		this.path = 'assets/img/mainbg.jpg'
	}

	downloadItem(path) {
		const link = document.createElement('a')

		link.setAttribute('href', path)
		link.setAttribute('download', 'nice_picture')

		link.style.display = 'none'

		document.body.appendChild(link)

		link.click()

		document.body.removeChild(link)
	}

	init() {
		this.btns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault()
				this.downloadItem(this.path)
			})
		})
	}
}