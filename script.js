// Define DOM Elements
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// Define Globals
let load = 0;

// Run blurring() every 30ms
let int = setInterval(blurring, 30);

function blurring(){

    // Increment load value by 1
    load++

    // Skip if load is lower than 100
    if(load > 99){

        // Stop int if load's value is 100
        clearInterval(int)

    }

    // Update loadText element
    loadText.innerHTML = `${load}%`;

    // Set loadText opacity
    // scale() is called as load is updated
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // Set bg blur level
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

    /* scale() Syntax Breakdown: 

        scale(load, 0, 100, 1, 0)

            load : Current load value
            0    : Start time
            100  : End time
            1    : Starting Opacity (Visible)
            0    : Ending Opacity (Invisible)
    
    */

}


const scale = (num, in_min, in_max, out_min, out_max) => {

    return (num - in_min) * (out_max - out_min) / 
    (in_max - in_min) + out_min;
}
