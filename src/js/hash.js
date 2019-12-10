document.addEventListener('DOMContentLoaded',function() {

    let cover = document.getElementById('cover');

    window.onload = function() {
        
        if(window.location.hash) {
        
            let src = window.location.hash;
            let obj = document.getElementById( src.slice(1, src.length) );
            
            
            let window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
            let target = window_pos + obj.getBoundingClientRect().top - 160;
            
            //setTimeout(function() {
                cutme.Helpers.scrollTo(target, 1, 0);                
           // }, 100);
            
            
            // Set current menu item class on active hash

/*
            const tellMyName = function() {
            
                const nav = document.getElementsByClassName('js-nav')[0];
                const navLi = nav.getElementsByTagName('li');
                const navA = nav.getElementsByTagName('a');
                
                for (let i = 0; i < navLi.length; i++) {
                    navLi[i].classList.remove('current-menu-item');
                }
            
                for (let g = 0; g < navA.length; g ++) {
            
                    let str = navA[g].href.split("#")[1];
                
                    if (str === src.slice(1, src.length)) {
                        
                        navA[g].parentNode.classList.add('current-menu-item');
                    }                                    
                }
            };
            
            tellMyName();
*/
        } else {
	        document.documentElement.classList.add('no-hash');
        }
        
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
        }, 250);
    }
        
}, false);
