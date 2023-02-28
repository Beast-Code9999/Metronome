const UIMetronome = (function UIMetronome() {
    function getElemById(id) {
        return document.getElementById(id);
	}

    const Tempo =  (function Tempo() { // Stores current tempo. Accessible globally
        let currentTempo = 100;

        return {
            currentTempo,
        };
    })();

    const setTempo = (function setTempo() { // sets stored tempo to range.value
        const updateTempo = function updateTempo(tempo) {
            Tempo.currentTempo = tempo;
        };

        return {
            updateTempo,
        };
    })();

    const inputRange = (function inputRange() { // sets tempo based on input range.value
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

    const changeInputColor = (function changeInputColor() { // changes input color based on range value


        const init = function init() {

        };

        return {
            init,
        };
    })();

    const output = (function output() {
        const outputBpm = getElemById('output__bpm--big');
        const range = getElemById('input__range');
        const plusDiv = getElemById('input__plus');
        const minusDiv = getElemById('input__minus');

        const _setEventListener = function _setEventListener(elem, event) {
            elem.addEventListener(event, () => {
                // console.log(UIMetronome.Tempo.currentTempo)
                outputBpm.textContent = UIMetronome.Tempo.currentTempo;
            })
        };
        const updateOutput = function updateOutput() {
            _setEventListener(range, 'input');
            _setEventListener(plusDiv, 'click');
            _setEventListener(minusDiv, 'click');
        };
        const init = function init() {
            updateOutput();
        };

        return {
            init,
        };
    })();

    const setBeatSound = (function setBeatSound() {
        let soundPlaying = false;
        // The maths:
        // UIMetronome.Tempo.currentTepo / 60s        how many beats per per minute
        // Ans / 1000ms                               how many beats per second
        // 1 / Ans                                    1 beat per x miliseconds

        const _playSound = function _playSound() {
            const playDiv = getElemById('output__play');
            playDiv.addEventListener('click', ()=> {
                // let audio = getElemById('audio');
                // if(!audio) return
                // audio.currentTime = 0;
                // audio.play();

                function sound() {
                    let audio = getElemById('audio');
                    if(!audio) return
                    audio.currentTime = 0;
                    audio.play();

                    if( soundPlaying === false ) complete();
                }

                function soundOnOff() {
                    
                }

                let timer = setInterval(sound, 100);

                function complete() {
                    clearInterval(timer);
                    timer = null;
                }

            })
        }

        const init = function init() {
            _playSound();
        };

        return {
            init,
        };
    })();

    const init = function init() {
        UIMetronome.init();
        output.init();
        setBeatSound.init()
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
