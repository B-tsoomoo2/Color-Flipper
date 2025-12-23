const colors = ["red", "blue", "orange", "grey", "aqua", "purple"];

let selectedColorMode = null;

const colorText = document.getElementById("color-name");
const clickMe = document.getElementById("clickMe");
const simple = document.getElementById("simple");
const hex = document.getElementById("hex");

clickMe.addEventListener("click", () => {
  console.log(selectedColorMode);
  // hevervee simple songoson bol selectedColor ni generateSimpleColor
  // const selectedColor = generateSimpleColor();

  const selectedColor = generateHex();

  changeColor(selectedColor);
});

simple.addEventListener("click", () => {
  selectedColorMode = "simple";
  const selectedColor = generateSimpleColor();
  changeColor(selectedColor);
});

hex.addEventListener("click", () => {
  selectedColorMode = "hex";

  const selectedColor = generateHex();
  changeColor(selectedColor);
});

const generateSimpleColor = () => {
  const randomIndex = randomNumber();
  const selectedColor = colors[randomIndex];

  return selectedColor;
};

const changeColor = (selectedColor) => {
  document.body.style.backgroundColor = selectedColor;
  colorText.textContent = selectedColor;
};

const randomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

const hexChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateHex = () => {
  let hexColor = "#"; // 000000
  for (let i = 0; i < 6; i++) {
    let hexCharIndex = Math.floor(Math.random() * 15);
    hexColor += hexChar[hexCharIndex];
  }

  return hexColor;
};
