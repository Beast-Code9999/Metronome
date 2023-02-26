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
                // console.log(Tempo.currentTempo);
            })
        };
        const _plusUpdate = function _plusUpdate() {
            const plusDiv = getElemById('input__plus');
            plusDiv.addEventListener('click', () => {
                range.value++;
                setTempo.updateTempo(range.value);
                // console.log(Tempo.currentTempo);
            })
        };
        const _minusUpdate = function _minusUpdate() {
            const minusDiv = getElemById('input__minus');
            minusDiv.addEventListener('click', () => {
                range.value--;
                setTempo.updateTempo(range.value);
                // console.log(Tempo.currentTempo);
            })
        }
        const updateRange = function updateRange() {
            _sliderUpdate();
            _plusUpdate();
            _minusUpdate();
        };

        return {
            updateRange,
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
        const outputBpm = getElemById('output__bpm--big');
        const range = getElemById('input__range');


        const _setEventListener = function _setEventListener(elem, event) {
            elem.addEventListener(event, () => {
                console.log(outputBpm);
            })
        };

        const updateOutput = function updateOutput() {
            _setEventListener(range, 'input');
        };

        const init = function init() {
            updateOutput();
        };

        return {
            init,
        };
    })();

    const init = function init() {
        UIMetronome.init();
        output.init();
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
