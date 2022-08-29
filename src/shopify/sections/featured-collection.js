import Swiper, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

const selectors = {
	slider: "[data-slider]"
};

const FeaturedCollection = {
    onLoad() {
        this._init();
    },

    _init() {
        let that = this;
        const breakpoint = window.matchMedia( "(min-width:1400px)" );
        let mySwiper;

        const breakpointChecker = function() {
        // if larger viewport and multi-row layout needed
            if ( breakpoint.matches === true ) {
                if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
                return;
            } else if ( breakpoint.matches === false ) {
                return enableSwiper();
            }
        };

        this.sliderWrapper = this.container.querySelector(selectors.slider);

        const enableSwiper = function() {
            mySwiper = new Swiper (that.sliderWrapper, {
                slidesPerView: "auto",
                loop: false,
                // allowSlidePrev: true,
                // allowSlideNext: true,
                autoplay: true,
                modules: [ Autoplay, Pagination],
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });
        };

        breakpoint.addEventListener("change", breakpointChecker);
        breakpointChecker();
    },
}

export default FeaturedCollection;