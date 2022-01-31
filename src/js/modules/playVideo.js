export default class VideoPlayer {
	constructor(triggerSelector, modalWindowSelector) {
		this.btns = document.querySelectorAll(triggerSelector)
		this.modalWindow = document.querySelector(modalWindowSelector)
		this.closeBtn = this.modalWindow.querySelector('.close')
	}

	bindTriggers() {
		this.btns.forEach(btn => {
			btn.addEventListener('click', () => {
				if (document.querySelector('iframe#frame')) {
					this.modalWindow.style.display = 'flex'
				} else {
					const path = btn.getAttribute('data-url')

					this.createPlayer(path)
				}
			})
		})
	}

	bindCloseBtn() {
		this.closeBtn.addEventListener('click', () => {
			this.modalWindow.style.display = 'none'

			this.player.stopVideo()
		})
	}

	createPlayer(url) {
		this.player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: `${url}`,
		});

		this.modalWindow.style.display = 'flex'
	}

	init() {
		const tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		this.bindTriggers()
		this.bindCloseBtn()
	}
}