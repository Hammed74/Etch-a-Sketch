const screen = document.querySelector(".screen");
const blackButton = document.getElementById("black");
const colorButton = document.querySelector(".color");
const erase = document.querySelector(".erase");
const buttons = document.querySelectorAll(".button");
const clearButton = document.querySelector(".clear");

blackButton.classList.add("active");
blackButton.style.backgroundColor = "black";
blackButton.style.color = "white";

makeGrid(16);
let isMouseDown = false;

slider.addEventListener("input", function () {
  let sliderValue = slider.value;
  makeGrid(sliderValue);
});

function makeGrid(userInput) {
  let boxSize = userInput * userInput;
  screen.innerHTML = "";
  for (i = 0; i < boxSize; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${640 / userInput}px`;
    box.style.height = `${640 / userInput}px`;
    screen.appendChild(box);

    box.addEventListener("mousedown", function () {
      const randomColor = getRandomColor();
      isMouseDown = true;
      if (colorButton.classList.contains("active")) {
        box.style.backgroundColor = randomColor;
      } else if (erase.classList.contains("active")) {
        box.style.backgroundColor = "white";
      } else {
        box.style.backgroundColor = "black";
      }
    });

    box.addEventListener("mousemove", function () {
      const randomColor = getRandomColor();
      if (isMouseDown) {
        if (colorButton.classList.contains("active")) {
          box.style.backgroundColor = randomColor;
        } else if (erase.classList.contains("active")) {
          box.style.backgroundColor = "white";
        } else {
          box.style.backgroundColor = "black";
        }
      }
    });

    box.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
  }
      clearButton.addEventListener("click", function () {
      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
     box.style.backgroundColor = "";
  
   });
  })
}



blackButton.addEventListener("click", function () {
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.style.background = "";
    button.style.backgroundColor = "";
    button.style.color = "";
  });
  blackButton.classList.add("active");
  blackButton.style.backgroundColor = "black";
  blackButton.style.color = "white";
});
erase.addEventListener("click", function () {
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.style.backgroundColor = "";
    button.style.background = "";
    button.style.color = "";
  });
  erase.classList.add("active");
  erase.style.backgroundColor = "black";
  erase.style.color = "white";
});

colorButton.addEventListener("click", function () {
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.style.backgroundColor = "";
    button.style.color = "black";
  });

  colorButton.classList.add("active");
  colorButton.style.background = "black";
  colorButton.style.color = "white";
});

function getRandomColor() {
  const letters = "0123456789ABCDEF"; // Hexadecimal characters
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
