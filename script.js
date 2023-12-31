const container = document.querySelector('.container')

const randomizeColor = document.querySelector('.btnBoom')

const colorCard = document.querySelector('.box-one')


const searchBar = document.getElementById('search-bar');
const boxSeven = document.querySelector('.box-seven');
const submitButton = document.getElementById('submit-button');


submitButton.addEventListener('click', updateGradient);

function updateGradient() {
    const colors = searchBar.value.split(',');
    if (colors.length === 2) {
        const color1 = colors[0].trim();
        const color2 = colors[1].trim();
        boxSeven.style.background = `linear-gradient(132deg, ${color1} 9%, ${color2} 100%)`;
    }
}


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



const modal = document.getElementById('modal')
const openModal = document.querySelector('.contacts');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.classList.add('.active');
    modal.showModal();
    

})


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('.active'); // Remove the "active" class to hide the modal when clicked outside
        modal.close();
    }
});


