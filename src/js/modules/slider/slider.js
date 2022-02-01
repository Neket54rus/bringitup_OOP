export default class Slider {
	constructor({pageSelector = '', btnsSelector = '', nextBtnSelector = '', prevBtnSelector = ''} = {}) {
		this.page = document.querySelector(pageSelector)
		this.slides = this.page.children
		this.btns = document.querySelectorAll(btnsSelector)
		this.slideIndex = 1
	}
}