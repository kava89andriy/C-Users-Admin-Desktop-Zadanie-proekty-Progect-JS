const inputName = document.getElementById("incomeTitle");
const inputAmount = document.getElementById("incomeValue");
const inputSubmit = document.querySelector("#incomeForm");
const incomesList = document.querySelector("#incomesList");

const inputNameExpenses = document.querySelector("#expenseTitle");
const inputAmountExpenses = document.querySelector("#expenseValue");
const inputSubmitExpenses = document.querySelector("#expenseForm");
const expensesList = document.querySelector("#expensesList");
const budget = document.getElementById("budgetValue");

let incomesSum = 0;
let totalExpanses = 0;
let budgetValue = 0;
let expensesSum = 0;

const incomes = [];
const expenses = [];

const addItem = (type) => {
  if (type === "incomes") {
    const newIncome = {
      title: inputName.value,
      amount: Number(inputAmount.value),
      id: (Math.random() * 100000).toFixed(0),
    };
    incomes.push(newIncome);
    incomesUpdateSum();
    renderIncomes();
  } else {
    const newExpenses = {
      title: inputNameExpenses.value,
      amount: Number(inputAmountExpenses.value),
      id: (Math.random() * 100000).toFixed(0),
    };
    expenses.push(newExpenses);
    expensesUpdateSum();
    renderExpenses();
  }
};

inputSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem("incomes");
});
inputSubmitExpenses.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem("expenses");
});

function renderIncomes() {
  incomesList.innerHTML = "";
  incomes.forEach((element, index) => {
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
    deleteButton.id = "deleteBTN" + element.id;
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
      deleteItem(incomes[index], "incomes");
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
      amountInput.type = "number";
      span.appendChild(nameInput);
      span.appendChild(amountInput);
      saveButton.addEventListener("click", () => {
        if (amountInput.value < 0) {
          alert("The value can not be below 0");
        } else {
          const updateIncome = (item) => {
            item.title = nameInput.value;
            item.amount = amountInput.value;
          };
          incomes.map((item) =>
            item.id === element.id ? updateIncome(item) : item
          );
          incomesUpdateSum();
          renderIncomes();
          incomes.map((item) => item.id === element.id);
        }
      });

      cancelButton.addEventListener("click", () => {
        renderIncomes();
      });
    });
  });
}

function renderExpenses() {
  expensesList.innerHTML = "";
  expenses.forEach((element, index) => {
    const newItem = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = `${element.title} ${element.amount}`;
    newItem.appendChild(span);
    newItem.id = element.id;
    expensesList.appendChild(newItem);
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add(
      "budget__list__item__button",
      "budget__list__item__button--edit"
    );

    newItem.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteBTN" + element.id;
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
      deleteItem(expenses[index], "expenses");
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
      amountInput.type = "number";

      span.appendChild(nameInput);
      span.appendChild(amountInput);
      saveButton.addEventListener("click", () => {
        if (amountInput.value < 0) {
          alert("The value can not be below 0");
        } else {
          const updateIncome = (item) => {
            item.title = nameInput.value;
            item.amount = amountInput.value;
          };

          expenses.map((item) =>
            item.id === element.id ? updateIncome(item) : item
          );
          expensesUpdateSum();
          renderExpenses();

          expenses.map((item) => item.id === element.id);
        }
      });

      cancelButton.addEventListener("click", () => {
        renderIncomes();
      });
    });
  });
}

const deleteItem = (item, type) => {
  if (type === "incomes") {
    const indexToRemowe = incomes.findIndex((income) => income.id == item.id);
    incomes.splice(indexToRemowe, 1);
    renderIncomes();
    incomesUpdateSum();
  } else {
    const indexToRemowe = expenses.findIndex(
      (expense) => expense.id == item.id
    );
    expenses.splice(indexToRemowe, 1);
    renderExpenses();
    expensesUpdateSum();
  }
};

const incomesUpdateSum = () => {
  incomesSum = incomes.reduce((prevValue, curentValue) => {
    return +prevValue + +curentValue.amount;
  }, 0);
  budgetValue = incomesSum - expensesSum;
  document.getElementById("incomesValue").innerHTML = incomesSum;
  budget.innerHTML = budgetValue;
  renderText(incomesSum, expensesSum, budgetValue);
};

const expensesUpdateSum = () => {
  expensesSum = expenses.reduce((prevValue, curentValue) => {
    return +prevValue + +curentValue.amount;
  }, 0);
  budgetValue = incomesSum - expensesSum;
  document.getElementById("expensesValue").innerHTML = expensesSum;
  budget.innerHTML = budgetValue;
  renderText(incomesSum, expensesSum, budgetValue);
};

const budgetText = document.getElementById("budgetState");

const renderText = (amount, expense, difference) => {
  if (amount > expense) {
    budgetText.innerHTML = ` <p class="text--center">
    You can still spend <span id="budgetValue">${difference}</span> PLN
  </p>`;
  } else if (difference === 0) {
    budgetText.innerHTML = `<p class="text--center">
    You have no money. You budget is:  <span id="budgetValue">0</span> PLN
  </p>`;
  } else if (difference < 0) {
    budgetText.innerHTML = `<p class="text--center">
    You are in troubles, your budget is: <span id="budgetValue">${difference}</span> PLN
  </p>`;
  }
};
