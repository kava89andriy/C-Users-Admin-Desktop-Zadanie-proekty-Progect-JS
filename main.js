const inputName = document.querySelector("#incomeTitle");
const inputAmount = document.querySelector("#incomeValue");
const inputSubmit = document.querySelector("#incomeForm");

inputSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  createHtml();
});
function createHtml() {
  const newItem = document.createElement("li");

  newItem.textContent = `${inputName.value} ${inputAmount.value}`;
  const budget__list = document.querySelector(".budget__list");
  budget__list.appendChild(newItem);
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add(
    "budget__list__item__button",
    "budget__list__item__button--edit"
  );

  newItem.appendChild(editButton);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  newItem.appendChild(deleteButton);
  deleteButton.classList.add(
    "budget__list__item__button",
    "budget__list__item__button--delete"
  );
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    budget__list.removeChild(newItem);
  });
}
