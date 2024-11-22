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

    // Log load's value
    console.log(load);
}