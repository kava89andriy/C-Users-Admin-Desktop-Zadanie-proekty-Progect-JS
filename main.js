const inputName = document.querySelector("#incomeTitle");
const inputAmount = document.querySelector("#incomeValue");
const inputSubmit = document.querySelector("#incomeForm");
const incomesList = document.querySelector("#incomesList");

const incomes = [];
const expenses = [];
const addIncome = () => {
  const newIncome = {
    title: incomeTitle.value,
    amount: incomeValue.value,
    id: (Math.random() * 100000).toFixed(0),
  };
  incomes.push(newIncome);
  console.log(incomes);
  renderIncomes();
};
inputSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  addIncome();
});
function renderIncomes() {
  incomesList.innerHTML = "";
  incomes.forEach((element) => {
    const newItem = document.createElement("li");
    newItem.textContent = `${element.title} ${element.amount}`;
    newItem.id = element.id;
    incomesList.appendChild(newItem);
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
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    newItem.appendChild(saveButton);
    saveButton.classList.add(
      "budget__list__item__button",
      "budget__list__item__button--save",
      "budget__list__item__button--not-visible"
    );

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    newItem.appendChild(cancelButton);
    cancelButton.classList.add(
      "budget__list__item__button",
      "budget__list__item__button--cancel",
      "budget__list__item__button--not-visible"
    );

    deleteButton.addEventListener("click", () => {
      deleteItem(newItem);
    });
    editButton.addEventListener("click", () => {
      editButton.classList.add("budget__list__item__button--not-visible");
      deleteButton.classList.add("budget__list__item__button--not-visible");
      saveButton.classList.remove("budget__list__item__button--not-visible");
      cancelButton.classList.remove("budget__list__item__button--not-visible");

      // const newArray = incomes.map((item) => item.id === element.id ? {
      //   ...item ,
      // })
    });
  });
}

const deleteItem = (item) => {
  const indexToRemowe = incomes.findIndex((income) => (income.id = item.id));
  incomes.splice(indexToRemowe, 1);
  renderIncomes();
};
