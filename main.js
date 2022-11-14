const inputName = document.querySelector("#incomeTitle");
const inputAmount = document.querySelector("#incomeValue");
const inputSubmit = document.querySelector("#incomeForm");
const incomesList = document.querySelector("#incomesList");

const inputNameExpenses = document.querySelector("#expenseTitle");
const inputAmountExpenses = document.querySelector("#expenseValue");
const inputSubmitExpenses = document.querySelector("#expenseForm");
const expensesList = document.querySelector("#expensesList");

let incomesSum = 0;
let budgetValue = 0;

let expensesSum = 0;
// let budgetValueExpenses = 0;

const incomes = [];
const expenses = [];
const addIncome = () => {
  const newIncome = {
    title: incomeTitle.value,
    amount: Number(incomeValue.value),
    id: (Math.random() * 100000).toFixed(0),
  };

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
      deleteItem(incomes[index]);
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
  const indexToRemowe = incomes.findIndex((income) => income.id == item.id);
  document.getElementById("incomesValue").innerHTML = incomesSum - item.amount;
  document.getElementById("budgetValue").innerHTML = budgetValue - item.amount;
  incomes.splice(indexToRemowe, 1);
  renderIncomes();
  incomesSum = incomesSum - item.amount;
  budgetValue = budgetValue - item.amount;
};
const incomesUpdateSum = () => {
  incomesSum = incomes.reduce((prevValue, curentValue) => {
    return +prevValue + +curentValue.amount;
  }, 0);
  budgetValue = incomesSum;
  document.getElementById("incomesValue").innerHTML = incomesSum;
  document.getElementById("budgetValue").innerHTML = budgetValue;
};

const addExpense = () => {
  const newexpenses = {
    titleExpenses: expenseTitle.value,
    amountExpenses: Number(expenseValue.value),
    id: (Math.random() * 100000).toFixed(0),
  };
  expenses.push(newexpenses);
  expensesUpdateSum();
  renderExpenses();
};

function renderExpenses() {
  expensesList.innerHTML = "";
  expenses.forEach((elementExpenses, index) => {
    const newItemExpenses = document.createElement("li");
    const spanExpenses = document.createElement("span");

    spanExpenses.textContent = `${elementExpenses.title} ${elementExpenses.amount}`;
    newItemExpenses.appendChild(span);
    newItemExpenses.id = elementExpenses.id;
    expensesList.appendChild(newItemExpenses);
    const editButtonExpenses = document.createElement("button");
    editButtonExpenses.textContent = "Edit";
    editButtonExpenses.classList.add(
      "budget__list__expenses__item__button",
      "budget__list__expenses__item__button--edit"
    );

    newItemExpenses.appendChild(editButton);
    const deleteButtonExpenses = document.createElement("button");
    deleteButtonExpenses.id = "deleteBTNExpenses" + elementExpenses.id;
    deleteButtonExpenses.textContent = "Delete";
    newItemExpenses.appendChild(deleteButtonExpenses);
    deleteButtonExpenses.classList.add(
      "budget__list__expenses__item__button",
      "budget__list__expenses__item__button--delete"
    );
    const saveButtonExpenses = document.createElement("button");
    saveButtonExpenses.textContent = "Save";
    newItemExpenses.appendChild(saveButtonExpenses);
    saveButtonExpenses.classList.add(
      "budget__list__expenses__item__button",
      "budget__list__expenses__item__button--save",
      "budget__list__expenses__item__button--not-visible"
    );

    const cancelButtonExpenses = document.createElement("button");
    cancelButtonExpenses.textContent = "Cancel";
    newItemExpenses.appendChild(cancelButtonExpenses);
    cancelButtonExpenses.classList.add(
      "budget__list__expenses__item__button",
      "budget__list__expenses__item__button--cancel",
      "budget__list__expenses__item__button--not-visible"
    );

    deleteButtonExpenses.addEventListener("click", () => {
      deleteItemExpenses(expenses[index]);
    });
    editButtonExpenses.addEventListener("click", () => {
      editButtonExpenses.classList.add(
        "budget__list__expenses__item__button--not-visible"
      );
      deleteButtonExpenses.classList.add(
        "budget__list__expenses__item__button--not-visible"
      );
      saveButtonExpenses.classList.remove(
        "budget__list__expenses__item__button--not-visible"
      );
      cancelButtonExpenses.classList.remove(
        "budget__list__expenses__item__button--not-visible"
      );
      spanExpenses.innerHTML = "";
      const nameInputExpenses = document.createElement("input");
      nameInputExpenses.value = elementExpenses.titleExpenses;
      const amountInputExpenses = document.createElement("input");
      amountInputExpenses.value = elementExpenses.amountExpenses;
      spanExpenses.appendChild(nameInputExpenses);
      spanExpenses.appendChild(amountInputExpenses);
      saveButtonExpenses.addEventListener("click", () => {
        const updateExpenses = (itemExpenses) => {
          itemExpenses.titleExpenses = nameInputExpenses.value;
          itemExpenses.amountExpenses = amountInputExpenses.value;
        };
        expenses.map((itemExpenses) =>
          itemExpenses.id === elementExpenses.id
            ? updateExpenses(itemExpenses)
            : itemExpenses
        );
        expensesUpdateSum();
        renderExpenses();

        expenses.map((itemExpenses) => itemExpenses.id === elementExpenses.id);
      });

      cancelButtonExpenses.addEventListener("click", () => {
        renderExpenses();
      });
    });
  });
}

const deleteItemExpenses = (itemExpenses) => {
  const indexToRemowe = expenses.findIndex(
    (expense) => expense.id == itemExpenses.id
  );
  document.getElementById("expensesValue").innerHTML =
    expensesSum - itemExpenses.amountExpenses;
  document.getElementById("budgetValue").innerHTML =
    budgetValue - itemExpenses.amountExpenses;
  expenses.splice(indexToRemowe, 1);
  renderExpenses();
  expensesSum = expensesSum - itemExpenses.amountExpenses;
  budgetValue = budgetValue - itemExpenses.amountExpenses;
};

const expensesUpdateSum = () => {
  expensesSum = expenses.reduce((prevValue, curentValue) => {
    return +prevValue + +curentValue.amount;
  }, 0);
  budgetValueExpenses = expensesSum;
  document.getElementById("expensesValue").innerHTML = expensesSum;
  document.getElementById("budgetValue").innerHTML = budgetValueExpenses;
};
