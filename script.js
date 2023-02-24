const Metronome = (function Metronome() {

    const init = function init() {

    }

    return {
        init: init,
    }
})();

window.addEventListener('load', Metronome.init())

// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear();
    footer.textContent = year;
};
addDynamicFooterDate();
