const container = document.querySelector('.container')

const randomizeColor = document.querySelector('.btnBoom')

const colorCard = document.querySelector('.box-one')

function getRandomGradient() {
    const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    return `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`;
}


randomizeColor.addEventListener("click", () => {
    const boxOne = document.querySelector(".box-one");
    boxOne.style.background = getRandomGradient();
})



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

