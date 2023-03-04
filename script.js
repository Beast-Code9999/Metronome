const UIMetronome = (function UIMetronome() {
    function getElemById(id) {
        return document.getElementById(id);
	}
    const _setEventListener = function setEventListener( elem, event, callback ) {
        elem.addEventListener( event, callback );
    };

    const Tempo =  (function Tempo() { // Stores current tempo. Accessible globally
        let currentTempo = 100;
        let bpm;
        let bpms;
        let duration;

        return {
            currentTempo,
            bpm,
            bpms,
            duration,
        };
    })();

    const setTempo = (function setTempo() { // sets stored tempo to range.value
        const updateTempo = function updateTempo(tempo) {
            Tempo.currentTempo = +tempo;
        };

        return {
            updateTempo,
        };
    })();

    const setBpm = function setBpm() {
        // The maths:
        // UIMetronome.Tempo.currentTepo / 60s        how many beats per per minute
        // Ans / 1000ms                               how many beats per second
        // 1 / Ans                                    1 beat per x miliseconds

        Tempo.bpm = Tempo.currentTempo / 60;
        Tempo.bpms = Tempo.bpm / 1000;
        Tempo.duration = 1 / Tempo.bpms;

        // console.log(Tempo.currentTempo )
        // console.log(Tempo.bpm)
        // console.log(Tempo.bpms)
        // console.log(Tempo.duration)
    }

    const inputRange = (function inputRange() { // sets tempo based on input range.value
        const range = getElemById('input__range');

        const _sliderUpdate = function _sliderUpdate() {
            range.addEventListener('input', () => {
                setTempo.updateTempo(range.value);
                setBpm();
                // console.log(Tempo.currentTempo);
            })
        };
        const _plusUpdate = function _plusUpdate() {
            const plusDiv = getElemById('input__plus');
            plusDiv.addEventListener('click', () => {
                range.value++;
                setTempo.updateTempo(range.value);
                setBpm();
                // console.log(Tempo.currentTempo);
            })
        };
        const _minusUpdate = function _minusUpdate() {
            const minusDiv = getElemById('input__minus');
            minusDiv.addEventListener('click', () => {
                range.value--;
                setTempo.updateTempo(range.value);
                setBpm();
                // console.log(Tempo.currentTempo);
            })
        }

        const init = function init() {
            _sliderUpdate();
            _plusUpdate();
            _minusUpdate();
        };

        return {
            init,
        };
    })();
    

    const init = function init() {
        inputRange.init();
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
    const _setEventListener = function setEventListener( elem, event, callback ) {
        elem.addEventListener( event, callback );
    };

    const outputBpm = getElemById('output__bpm--big');
    const range = getElemById('input__range');
    const plusDiv = getElemById('input__plus');
    const minusDiv = getElemById('input__minus');
    const playDiv = getElemById('output__play');
    let soundPlaying = false;

    // const changeInputColor = (function changeInputColor() { // changes input color based on range value


    //     const init = function init() {

    //     };

    //     return {
    //         init,
    //     };
    // })();

    const output = (function output() { // change textContent of .output__bpm--big
        function _changeOutputText() {
            outputBpm.textContent = UIMetronome.Tempo.currentTempo;
        }

        const updateOutput = function updateOutput() {
            _setEventListener(range, 'input', _changeOutputText);
            _setEventListener(plusDiv, 'click', _changeOutputText);
            _setEventListener(minusDiv, 'click', _changeOutputText);
        };
        const init = function init() {
            updateOutput();
        };

        return {
            init,
        };
    })();

    const setBeatSound = (function setBeatSound() {
        const _playSound = function _playSound( elem, event ) {
            elem.addEventListener( event, () => {
                let timer;

                if(timer !== undefined ) {
                    clearInterval(timer);
                    timer = null;
                } 
                function soundOn() {
                    let audio = getElemById('audio');
                    // console.log(audio);
                    audio.currentTime = 0; // allows audio to repeat without finishing
                    audio.play()
                }

                function startSound() {
                    clearInterval(timer);
                    timer = null;
                    timer = setInterval( soundOn, UIMetronome.Tempo.duration );
                }

                startSound();
                console.log(timer)

                function clearSound() {

                }
            })
        }

        // const _playSound = function _playSound() {
        //     const playDiv = getElemById('output__play');
        //     playDiv.addEventListener('click', ()=> {
        //         // let audio = getElemById('audio');
        //         // if(!audio) return
        //         // audio.currentTime = 0;
        //         // audio.play();
        //         soundPlaying = true;
        //         a();
        //         _setEventListener(range, 'input', a );
        //         _setEventListener(plusDiv, 'click', a );
        //         _setEventListener(minusDiv, 'click', a );

        //         function a() {
        //             let timer = setInterval(sound, duration);
        //             complete();
        //             timer = setInterval(sound, duration);

        //             function sound() {
        //                 let audio = getElemById('audio');
        //                 if(!audio) return
        //                 audio.currentTime = 0;
        //                 audio.play();
        //                 soundOnOff();
    
        //                 if( soundPlaying === false ) complete();
        //             }
    
        //             function soundOnOff() {
        //                 playDiv.addEventListener('click', ()=> {
        //                     soundPlaying = false;
        //                 })
        //             }
    
    
        //             function complete() {
        //                 clearInterval(timer);
        //                 timer = null;
        //             }
        //         }
        //     })
        // }

        const init = function init() {
            _playSound( range, 'input' );
            _playSound( playDiv, 'click' );
            _playSound( plusDiv, 'clck' );
            _playSound( minusDiv, 'click' );
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
