# Metronome

Start date: 20th February 2023

Credits:
    sound effect:
        -  "https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=103712"

UPDATE: 
    - 4th of March: setTimeout() and setInterval() seems to have jittery effect and has inaccuracy in the milliseconds. Callback also seems to be problematic.
    - Synchronization and scheduling of code seems to not work after changing tempo using setInterval() alone.
    - There seems to be a library Tone.js which could help make this app a lot easier, but due to simple feature of this app, I refrained myself from using a whole library. (Note that: Simple feature, but hard implementation using vanilla js).