const UIMetronome = (function UIMetronome() {
    function getElemById(id) {
        return document.getElementById(id);
	}

    const Tempo =  (function Tempo() {
        let currentTempo = 100;

        return {
            currentTempo,
        }
    })();

    const setTempo = (function setTempo() {

        return {

        }
    })();

    const inputRange = (function inputRange() {

    })();
    

    const init = function init() {

    };

    return {
        init: init,
        Tempo: Tempo,
    };
})();


const Metronome = (function Metronome() {
    function getElemById(id) {
        return document.getElementById(id);
	}

    const init = function init() {
        UIMetronome.init();
        
    };

    return {
        init: init,
    };
})();

window.addEventListener('load', Metronome.init());

// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear();
    footer.textContent = year;
};
addDynamicFooterDate();
