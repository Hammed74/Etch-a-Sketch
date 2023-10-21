const screen = document.querySelector(".screen");
const button = document.getElementById("button1");




button.addEventListener("click", function () {
    let txt1 = document.getElementById("textbox");
    userInput = txt1.value;
    if ((userInput > 100) || (userInput < 1)){
        alert(" Only Enter Numbers Between 100 And 1")}
    else{
    makeGrid(userInput)
    }

});

function makeGrid(userInput) {
  let boxSize = userInput * userInput;
  screen.innerHTML = '';
  for (i = 0; i < boxSize; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${640 / userInput}px`;
    box.style.height = `${640 / userInput}px`;
    screen.appendChild(box);

    box.addEventListener("mousedown", function () {
      isMouseDown = true;
      box.style.backgroundColor = "black";
    });

    box.addEventListener("mousemove", function () {
      if (isMouseDown) {
        box.style.backgroundColor = "black";
      }
    });

    box.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
  }
}makeGrid(16);


