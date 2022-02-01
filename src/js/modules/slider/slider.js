export default class Slider {
	constructor({
						wrapperForSliderSelector = null,
						btnsSelector = null,
						nextBtnSelector = null,
						prevBtnSelector = null,
						activeClass = '',
						animate,
						autoplay
					} = {}) {
		this.wrapper = document.querySelector(wrapperForSliderSelector)
		try {
			this.slides = this.wrapper.children
		} catch (e) {
			console.log('Ошибка: ' + e)
		}
		this.btns = document.querySelectorAll(btnsSelector)
		this.prev = document.querySelector(prevBtnSelector)
		this.next = document.querySelector(nextBtnSelector)
		this.activeClass = activeClass
		this.animate = animate
		this.autoplay = autoplay
		this.slideIndex = 1
	}
}