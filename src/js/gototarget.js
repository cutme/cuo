import ScrollToPlugin from 'gsap/ScrollToPlugin';

document.addEventListener('DOMContentLoaded',function() {

    const btnGoTo = document.getElementsByClassName('js-goto'),
          topbar = document.getElementsByClassName('js-top')[0];

	const speed_calculate = function (target) {
    	let base_speed  = 30,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/100;

    	return speed;
	};
	
	const clickAction = function(e) {
	
	    const that = e.currentTarget;

	    let src = that.getAttribute('href');
	    
	    const moveTo = function() {
		    const window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
	
		    //const obj = document.getElementById(src.slice(1, src.length));
		    const obj = document.getElementById(src.split('#')[1]);

		    if (obj) {
			    
			    let offset = 0;
			    let ww = window.innerWidth;
			    			    
			    if (src != '#kontakt') {

		        	offset = 160;
				    
					if (ww <= 1024) {
						offset = 140;
					}
					
					if (ww <= 500) {
						offset = 100;
					}
		        }
		        
		        
	            
	            //document.body.removeAttribute('style');
		    
		        let target = window_pos + obj.getBoundingClientRect().top;
		        cutme.Helpers.scrollTo(target, speed_calculate(target), offset);
		        
		        //topbar.classList.add('is-out');
	
		    } else {
	    	    
	    	    window.open(src, '_self');
	    	    
		    }
	    };


	    if (!src) {
	    	
	        src = that.getElementsByTagName('a')[0].getAttribute('href');
	        
	        // Check if current page is the same of the link
	        
	        if ( src.split('#')[0] ===  window.location.pathname.slice(1)) {

				// Get only hash
						        
				let hash = src.split('#')[1];

				if (hash) {
					src = "#" + hash;
				}
	        }
	        
	        moveTo();
        }
        
	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};
	
    if (btnGoTo.length > 0) {
        for (let i = 0; i < btnGoTo.length; i++) {
            btnGoTo[i].addEventListener('click', clickAction);
        }
    }

    
}, false);
