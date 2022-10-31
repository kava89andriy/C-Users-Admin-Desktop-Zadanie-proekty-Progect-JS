const inputName = document.querySelector("#incomeTitle");
const inputAmount = document.querySelector("#incomeValue");
const inputSubmit = document.querySelector("#incomeForm");

const incomes = [];
const expens = [];
const addIncome = () => {
  const newIncome = {
    title: incomeTitle.value,
    amount: incomeValue.value,
    id: Math.random(),

  };
  incomes.push(newIncome);
  createHtml()
}
inputSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  addIncome();
});
function createHtml() {
  incomes.forEach((element) => {
    const newItem = document.createElement("li");

  newItem.textContent = `${element.title} ${element.amount}`;
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
});

};
  
