const inputName = document.querySelector("#incomeTitle");
const inputAmount = document.querySelector("#incomeValue");
const inputSubmit = document.querySelector("#incomeForm");
const incomesList = document.querySelector("#incomesList");

const inputNameExpenses = document.querySelector("#expenseTitle");
const inputAmountExpenses = document.querySelector("#expenseValue");
const inputSubmitExpenses = document.querySelector("#expenseForm");
const expensesList = document.querySelector("#expensesList");
// const text = document.querySelector(".text--center--down");

let incomesSum = 0;
let totalExpanses = 0;
let budgetValue = 0;
let expensesSum = 0;

const incomes = [];
const expenses = [];

const addItem = (type) => {
  if (type === "incomes") {
    const newIncome = {
      title: document.getElementById("incomeTitle").value,
      amount: Number(document.getElementById("incomeValue").value),
      id: (Math.random() * 100000).toFixed(0),
    };
    incomes.push(newIncome);
    incomesUpdateSum();
    renderIncomes();
  } else {
    const newExpenses = {
      title: document.getElementById("expenseTitle").value,
      amount: Number(document.getElementById("expenseValue").value),
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
      span.appendChild(nameInput);
      span.appendChild(amountInput);
      saveButton.addEventListener("click", () => {
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
  // renderText(budgetValue);
  document.getElementById("incomesValue").innerHTML = incomesSum;
  document.getElementById("budgetValue").innerHTML = budgetValue;
};

const expensesUpdateSum = () => {
  expensesSum = expenses.reduce((prevValue, curentValue) => {
    return +prevValue + +curentValue.amount;
  }, 0);
  budgetValue = incomesSum - expensesSum;
  document.getElementById("expensesValue").innerHTML = expensesSum;
  document.getElementById("budgetValue").innerHTML = budgetValue;
};

// const renderText = (amount) => {
//   if (amount > 0) {
//     text.innerText = "You can spend: ";
//   } else if (amount === 0) {
//     text.innerText = "You have no money. You budget is: ";
//   } else text.innerText = "You are in troubles, your budget is: ";
// };
