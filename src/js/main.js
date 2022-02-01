import VideoPlayer from "./modules/playVideo";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-min"
import Difference from "./modules/difference";
import Form from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSlider({btnsSelector: '.next', wrapperForSliderSelector: '.page'})
	slider.render()

	const showUpSlider = new MiniSlider({
		wrapperForSliderSelector: '.showup__content-slider',
		prevBtnSelector: '.showup__prev',
		nextBtnSelector: '.showup__next',
		activeClass: 'card-active',
		animate: true
	})
	showUpSlider.init()

	const modulesSlider = new MiniSlider({
		wrapperForSliderSelector: '.modules__content-slider',
		prevBtnSelector: '.modules__info-btns .slick-prev',
		nextBtnSelector: '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true
	})
	modulesSlider.init()

	const feedSlider = new MiniSlider({
		wrapperForSliderSelector: '.feed__slider',
		prevBtnSelector: '.feed__slider .slick-prev',
		nextBtnSelector: '.feed__slider .slick-next',
		activeClass: 'feed__item-active'
	})
	feedSlider.init()

	const player = new VideoPlayer('.showup .play', '.overlay')
	player.init()

	new Difference('.officerold', '.officernew', '.officer__card-item').init()

	new Form('.form').init()
})