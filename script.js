const UIMetronome = (function UIMetronome() {
    function getElemById(id) {
        return document.getElementById(id);
	}
    

    const init = function init() {

    }

    return {
        init: init,
    }
})();


const Metronome = (function Metronome() {
    function getElemById(id) {
        return document.getElementById(id);
	}

    const init = function init() {
        UIMetronome.init();
        
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
