const screen = document.querySelector(".screen");
const button = document.getElementById("button1");
const colorButton = document.querySelector(".color");
const erase = document.querySelector(".erase");

makeGrid(16);
let isMouseDown = false

button.addEventListener("click", function () {
  let txt1 = document.getElementById("textbox");
  userInput = txt1.value;
  if (userInput > 100 || userInput < 1) {
    alert(" Only Enter Numbers Between 100 And 1");
  } else {
    makeGrid(userInput);
  }
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
      isMouseDown = true;
      if (erase.classList.contains("active")) {
        box.style.backgroundColor = "white";
      } else {
        box.style.backgroundColor = "black";
      }
    });

    box.addEventListener("mousemove", function () {
      if (isMouseDown) {
        if (erase.classList.contains("active")) {
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
}
function makeColorGrid(userInput) {
  let boxSize = userInput * userInput;
  screen.innerHTML = "";
  for (i = 0; i < boxSize; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${640 / userInput}px`;
    box.style.height = `${640 / userInput}px`;
    const randomColor = getRandomColor();
    screen.appendChild(box);

    box.addEventListener("mousedown", function () {
      isMouseDown = true;
      if (erase.classList.contains("active")) {
        box.style.backgroundColor = "white";
      } else {
        box.style.backgroundColor = randomColor;
      }
    });

    box.addEventListener("mousemove", function () {
      if (isMouseDown) {
        if (erase.classList.contains("active")) {
          box.style.backgroundColor = "white";
        } else {
          box.style.backgroundColor = randomColor;
        }
      }
    });

    box.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
  }
}

colorButton.addEventListener("click", function () {
  txt1 = document.getElementById("textbox");
  userInput = txt1.value;
  makeColorGrid(userInput);
});

erase.addEventListener("click", function () {
  const isActive = erase.classList.toggle("active");

    if (isActive) {
    erase.style.backgroundColor = "pink";
  } else{
  erase.style.backgroundColor = "white"
  }

});


function getRandomColor() {
  const letters = "0123456789ABCDEF"; // Hexadecimal characters
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
