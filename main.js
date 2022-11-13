const inputName = document.querySelector("#incomeTitle");
const inputAmount = document.querySelector("#incomeValue");
const inputSubmit = document.querySelector("#incomeForm");
const incomesList = document.querySelector("#incomesList");
let incomesSum = 0;
let budgetValue = 0;

const incomes = [];
const expenses = [];
const addIncome = () => {
  const newIncome = {
    title: incomeTitle.value,
    amount: Number(incomeValue.value),
    id: (Math.random() * 100000).toFixed(0),
  };
  console.log(incomeValue.value)
  incomes.push(newIncome);
  incomesUpdateSum();
  // const incomesSum = incomes.reduce((prevValue, curentValue) => {
  //   return prevValue + curentValue.amount;
  // }, 0);

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
    const span = document.createElement("span");

    span.textContent = `${element.title} ${element.amount}`;
    newItem.appendChild(span);
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
      span.innerHTML = "";
      const nameInput = document.createElement("input");
      nameInput.value = element.title;
      const amountInput = document.createElement("input");
      amountInput.value = element.amount;
      span.appendChild(nameInput);
      span.appendChild(amountInput);
      saveButton.addEventListener("click", () => {
        const updateIncome = (item) => {
          item.title = nameInput.value;
          item.amount = amountInput.value;
        };
        incomes.map((item) =>
          item.id === element.id ? updateIncome(item) : item
        );
        incomesUpdateSum();
        renderIncomes();

        // console.log(nameInput.value, amountInput.value);
        incomes.map((item) => item.id === element.id);
      });

      cancelButton.addEventListener("click", () => {
        // editButton.classList.remove("budget__list__item__button--not-visible");
        // deleteButton.classList.remove("budget__list__item__button--not-visible");
        // saveButton.classList.add("budget__list__item__button--not-visible");
        // cancelButton.classList.add("budget__list__item__button--not-visible");
        // span.removeChild(nameInput);
        // span.removeChild(amountInput);
        renderIncomes();
      });

      // const newArray = incomes.map((item) => item.id === element.id ? {
      //   ...item ,
      // })
    });
  });
}

const deleteItem = (item) => {
  const indexToRemowe = incomes.findIndex((income) => (income.id = item.id));
  let itemAmount = incomes[indexToRemowe].amount;
  console.log(incomes[indexToRemowe]);
  // incomes.splice(indexToRemowe, 1);
  // renderIncomes();
};
const incomesUpdateSum = () => {
  incomesSum = incomes.reduce((prevValue, curentValue) => {
    return +prevValue + +curentValue.amount;
  }, 0);
  document.getElementById("incomesValue").innerHTML = incomesSum;
  document.getElementById("budgetValue").innerHTML = budgetValue + incomesSum;
  console.log(incomesSum);
};
