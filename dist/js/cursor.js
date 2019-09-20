const cursor = document.querySelector('.cursor');
const pointer = document.querySelector('.pointer');

        document.addEventListener('mousemove', e => {
          console.log('eerrrr', e.target);
            cursor.setAttribute("style", "top: "+(e.pageY - 19)+"px; left: "+(e.pageX - 10)+"px;")
          pointer.setAttribute("style", "top: "+(e.pageY - 13)+"px; left: "+(e.pageX - 4)+"px;")
        });








        ScrollReveal().reveal('.projekte', { delay: 200});
        ScrollReveal().reveal('.über-uns', { delay: 200});
        ScrollReveal().reveal('#el1', { delay: 200, reset: true});
        ScrollReveal().reveal('#el2', { delay: 400, reset: true });
        ScrollReveal().reveal('#el3', { delay: 200, reset: true });
        ScrollReveal().reveal('#el4', { delay: 200, reset: true });
        ScrollReveal().reveal('#el5', { delay: 200, reset: true });
        ScrollReveal().reveal('.header_nav_toggle2', { delay: 400}); 
        ScrollReveal().reveal('.logo', { delay: 200});  
        ScrollReveal().reveal('#logo', { delay: 200, reset: true });      
        ScrollReveal().reveal('#beschreibung', { delay: 300, reset: true});
        ScrollReveal().reveal('.iphone-devices-kontakt', { delay: 300, reset: true});
        ScrollReveal().reveal('.iphone-devices-kontakt2', { delay: 300, reset: true});
        ScrollReveal().reveal('.header_nav_toggle', { delay: 300, reset: true});
        ScrollReveal().reveal('#beschreibung2', { delay: 300});
        ScrollReveal().reveal('.social', { delay: 300, reset: true});
        ScrollReveal().reveal('#el6', { delay: 300});
        ScrollReveal().reveal('#el7', { delay: 300});
        ScrollReveal().reveal('#el8', { delay: 300});
        ScrollReveal().reveal('.header_nav_toggle1', { delay: 300, reset: true});


