// import `.scss` files
import './scss/main.scss';

// import vendors
import ScrollReveal from './vendors/scrollreveal';

// Scroll Reveal
window.sr = ScrollReveal(); 

sr.reveal('*', {
    delay: 0,
    duration: 200,
    origin: 'bottom',
    distance: '100px' 
});

