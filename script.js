const containerDiv = document.querySelector(".container");
const promptBtn = document.getElementById("prompt");
let numberOfSquaresPerSide = 16;

const setGridSize = (thisNumberOfSquaresPerSide) => {
    for(let i = 0; i < (thisNumberOfSquaresPerSide ** 2); i++) {
        let divs = document.createElement("div");
        divs.style.width = `calc(100% / ${thisNumberOfSquaresPerSide} - 10px)`;
        divs.style.height = `calc(100% / ${thisNumberOfSquaresPerSide} - 10px)`;
        divs.style.margin = "5px";
        divs.style.backgroundColor = "rgb(110, 110, 110)";
        containerDiv.appendChild(divs);
    
        //hover effect
        divs.addEventListener("mouseover", () => {
            divs.style.backgroundColor = "rgba(182, 182, 182, 0.6)"
        });
    }
}

setGridSize(numberOfSquaresPerSide);

promptBtn.addEventListener("click", () => {

    numberOfSquaresPerSide = prompt("Enter number of squares per side");
    containerDiv.innerHTML = "";

    if(numberOfSquaresPerSide > 86) {
        numberOfSquaresPerSide = 86;
    }else if(numberOfSquaresPerSide < 0) {
        numberOfSquaresPerSide = 0;
    }

    setGridSize(numberOfSquaresPerSide);
});