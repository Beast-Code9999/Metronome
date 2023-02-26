const UIMetronome = (function UIMetronome() {
    function getElemById(id) {
        return document.getElementById(id);
	}

    const Tempo =  (function Tempo() {
        let currentTempo = 100;

        return {
            currentTempo,
        };
    })();

    const setTempo = (function setTempo() {
        const updateTempo = function updateTempo(tempo) {
            Tempo.currentTempo = tempo;
        };

        return {
            updateTempo,
        };
    })();

    const inputRange = (function inputRange() {
        const range = getElemById('input__range');

        const _sliderUpdate = function _sliderUpdate() {
            range.addEventListener('input', () => {
                setTempo.updateTempo(range.value);
                console.log(Tempo.currentTempo);
            })
        };

        const _plusUpdate = function _plusUpdate() {
            const plusDiv = getElemById('input__plus');
            plusDiv.addEventListener('click', () => {
                Tempo.currentTempo++;
                console.log(Tempo.currentTempo)
            })
        };

        const updateRange = function updateRange() {
            _sliderUpdate();
            _plusUpdate();
        };

        return {
            updateRange
        };
    })();
    

    const init = function init() {
        inputRange.updateRange();
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
