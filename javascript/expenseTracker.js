document.addEventListener("DOMContentLoaded", () => {
  const expenseName = document.getElementById("expense-name-input");
  const expenseAmount = document.getElementById("expense-amount-input");
  const addExpenseButton = document.getElementById("add-expense-btn");
  const expenseList = document.getElementById("expense-list");
  const totalExpense = document.getElementById("total-expense");

  let total = 0;
  addExpenseButton.addEventListener("click", () => {
    const NameOfExpense = expenseName.value.trim();
    const amountOfExpense = Number(expenseAmount.value);

    if (NameOfExpense === "" || isNaN(amountOfExpense) || amountOfExpense <= 0)
      return;

    const li = document.createElement("li");
    li.textContent = `${NameOfExpense} - ${amountOfExpense}`;
    expenseList.appendChild(li);

    total += amountOfExpense;
    totalExpense.textContent = `Total: Rs${total}`;
    expenseAmount.value = "";
    expenseName.value = "";
    console.log(typeof amountOfExpense, amountOfExpense);
  });
});
