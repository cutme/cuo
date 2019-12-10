import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

import Siema from 'siema';

document.addEventListener('DOMContentLoaded',function() {

    const meetus = document.getElementById('meetus');
        
    const meetusCarousel = function() {

        const glide = new Glide(meetus, {
            type: 'carousel',
            animationDuration: 1000,
            autoplay: false,
            hoverpause: false,
            gap: 0,
            perView: 2
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1)
    };
   
   
    meetus ? meetusCarousel() : false;


}, false)