// function to getElement by query selector
const getElement = (element) => document.querySelector(element);

// function to set value in Element
const setValue = (target, value) => {
  target.innerText = value;
};

// Text utilities performed here
const convert = (value, cas) => {
  switch (cas) {
    case 0:
      return value
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
    case 1:
      return value
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return word.toUpperCase();
        })
        .replace(/\s+/g, "");
    case 2:
      return value.replace(/\s+/g, "_");
    case 3:
      return value
        .replace(/(?:^\w+|[A-Z]|\b\w+)/g, (word, index) => {
          return word.toUpperCase();
        })
        .replace(/\s+/g, "_");
    case 4:
      return value.replace(/\s+/g, "-");
    case 5:
      return value
        .replace(/(?:^\w+|[A-Z]|\b\w+)/g, (word, index) => {
          return word.toUpperCase();
        })
        .replace(/\s+/g, "-");
  }
};

const assignValues = () => {
  let inp = getElement("#text").value; // Input value

  !inp && window.alert("Please enter text..."); // Alert if 'Empty'

  // Assigning 'converted values' to 'Cases'
  // in loop
  allCase.map((myCase, index) => {
    setValue(myCase, convert(inp, index));
  });
};

// Input value
const inp = getElement("#text");
// Button value
const btn = getElement("#convert-btn");

// Cases value
const camel = getElement("#camel-case");
const pascal = getElement("#pascal-case");
const snake = getElement("#snake-case");
const scrSnake = getElement("#screaming-snake-case");
const kebab = getElement("#kebab-case");
const scrKebab = getElement("#screaming-kebab-case");

// Cases added in array
// to perform loop
const allCase = [camel, pascal, snake, scrSnake, kebab, scrKebab];

// Event Listener added on Button
btn.addEventListener("click", (e) => {
  e.preventDefault(); // Cancel the default action

  assignValues();
});

// Trigger function on pressing 'ENTER'
inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Cancel the default action

    // Two ways of doing it (both work fine)
    // btn.click();// FIRST: trigger Button
    assignValues(); // SECOND: directly call function
  }
});
