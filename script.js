const container = document.querySelector("#container");
const button = document.querySelector("#generate-container");

function generateContainer(size) {
  const squareSize = 500 / size;

  for (let i = 0; i < size*size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    /*
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });
    */
    container.appendChild(square);
  }
}

generateContainer(16);

