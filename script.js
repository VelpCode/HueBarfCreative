const container = document.querySelector('.container')

const cardAmount = 3;
let bool = true;

let color1Arr = [];
let color2Arr = [];

function rndColor() {
    const x = Math.round(0xfffff * Math.random()).toString(16);
    const y = 6 - x.length;
    const z = "000000";
    const z1 = z.substring(0,y);
    const randomColor = "#" + z1 + x;
    return randomColor;

}

