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
        const updateTempo = function updateTempo(tempo) {
            Tempo.currentTempo = tempo;
        }

        return {
            updateTempo,
        }
    })();

    const inputRange = (function inputRange() {

        return {

        }
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

    const changeInputColor = (function changeInputColor() {

        return {

        }
    })();

    const output = (function output() {

        return {
            
        }
    })();

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
