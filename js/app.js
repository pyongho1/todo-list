// Cached element reference
const inputField = document.getElementById("mainInput");
const submitBtn = document.getElementById("submit-button");
const todoList = document.getElementById("todo-list");
const resetBtn = document.getElementById("reset-button");

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
  }
});

// Reset Button
resetBtn.addEventListener("click", function (evt) {
  inputField.value = "";
  document.querySelector("ul").innerHTML = "";
});

// Delete Button
todoList.addEventListener("click", function (evt) {
  // evt.target.li
  console.log(evt.target);
  // for (let test of todoList) {
  //   console.log(test);
  // }
});
