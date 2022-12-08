// Cached element reference
const inputField = document.getElementById("mainInput");
const submitBtn = document.getElementById("submit-button");
const todoList = document.getElementById("todo-list");
const resetBtn = document.getElementById("reset-button");
const list = document.querySelector("ul");

// ------- Main Listeners -------

// Submit Button
submitBtn.addEventListener("click", function (evt) {
  const li = document.createElement("li");
  li.textContent = inputField.value;
  if (inputField.value === "") {
    return null;
  } else {
    inputField.value = "";
    document.querySelector("ul").appendChild(li);
    document.querySelector("ul").appendChild(button);
  }
});

// Reset Button
resetBtn.addEventListener("click", function (evt) {
  inputField.value = "";
  document.querySelector("ul").innerHTML = "";
});

// Delete Button
list.addEventListener("click", function (e) {
  e.target.remove();
  // console.log(e.target.children);
  console.log(e.target);
});
