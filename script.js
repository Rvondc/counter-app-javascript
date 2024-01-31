const btnIncrement = document.querySelector(".btn-increment");
const btnDecrement = document.querySelector(".btn-decrement");
const textValue = document.querySelector("h2");
const btnChange = document.querySelector(".btn-change");
const textColorValue = document.querySelector(".color-value")

let counter = 0;

btnIncrement.addEventListener("click", function () {
  counter++;
  textValue.textContent = counter;
});

btnDecrement.addEventListener("click", function () {
  counter--;
  textValue.textContent = counter;
});

btnChange.addEventListener("click", function () {
    const red = Math.trunc(Math.random() * 255);
    const green = Math.trunc(Math.random() * 255);
    const blue = Math.trunc(Math.random() * 255);
    textValue.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    textColorValue.textContent = `RGB(${red}, ${green}, ${blue})`

    console.log(`${red}, ${green}, ${blue}`)
})
