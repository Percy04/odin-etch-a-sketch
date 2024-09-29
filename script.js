


const container = document.querySelector("#container");

function getRandomColor() {
    let randomInt1 = Math.random();
    let randomInt2 = Math.random();
    let randomInt3 = Math.random();
    let val1 = randomInt1 * 256;
    let val2 = randomInt2 * 256;
    let val3 = randomInt3 * 256;

    return `rgb(${val1} ${val2}, ${val3})`;
}

function createGrid(size) {
    let w = parseInt(640/size);

    for (var i=0; i<size;i++) {
        for (var j=0; j<size;j++) {
            let square = document.createElement("div");
            square.style.width = `${w}px`;
            square.style.height = `${w}px`;
            square.style.opacity = `1`;

            square.addEventListener("mouseover", function() {
                square.style.backgroundColor=getRandomColor();
                square.style.opacity = `${(window.getComputedStyle(square).opacity) - 0.1}`;
            });
            container.appendChild(square);
        }
    }
}



createGrid(16);

const setSquareButton = document.querySelector("#but");
let siz;
setSquareButton.addEventListener("click", function() {
    container.replaceChildren();
    siz = parseInt(prompt("No. of squares (1-100): "));
    while (siz < 1 || siz > 100) {
        siz = parseInt(prompt("No. of squares (1-100): "));
    }
    createGrid(siz);
})



















