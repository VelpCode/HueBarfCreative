const container = document.querySelector('.container')

const randomizeColor = document.querySelector('.btnBoom')

const colorCard = document.querySelector('.box-one')



function getRandomGradient() {
    const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    return `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`;
}

function getRandomGradientTwo() {

    const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = '#' + Math.floor(Math.random()*10000000).toString(16);
    const randomColor3 = '#' + Math.floor(Math.random()*16777215).toString(16);
    return `linear-gradient(190deg, ${randomColor1}, ${randomColor2}, ${randomColor3})`;

}


function getRandomGradientThree() {

    const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomColor3 = '#' + Math.floor(Math.random()*12311243).toString(16);

    return `linear-gradient(20deg, ${randomColor1}, ${randomColor2}, ${randomColor3})`;
    

}


document.getElementById("randomBtnOne").addEventListener("click", () => {
    const boxOne = document.querySelector(".box-one");
    boxOne.style.background = getRandomGradient();
})


document.getElementById("randomBtnTwo").addEventListener("click", () => {
    const boxTwo = document.querySelector(".box-two");
    boxTwo.style.background = getRandomGradientTwo();
})


document.getElementById("randomBtnThree").addEventListener("click", () => {
    const boxThree = document.querySelector(".box-three");
    boxThree.style.background = getRandomGradientThree();
})


document.getElementById("randomBtnFour").addEventListener("click", () => {
    const boxFour = document.querySelector(".box-four");
    boxFour.style.background = getRandomGradient();
})


document.getElementById("randomBtnFive").addEventListener("click", () => {
    const boxFive = document.querySelector(".box-five");
    boxFive.style.background = getRandomGradientThree();
})


document.getElementById("randomBtnSix").addEventListener("click", () => {
    const boxSix = document.querySelector(".box-six");
    boxSix.style.background = getRandomGradientTwo();
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

