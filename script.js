const container = document.querySelector("#container");
const button = document.querySelector("#clear");

generateContainer(16);
function generateContainer(size) {
    container.innerHTML = "";
    const squareSize = 500 / size;

    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}
button.addEventListener("click", () =>{
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
    generateContainer(16);
});


