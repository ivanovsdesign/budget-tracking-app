class UI {
    constructor(){
        //input forms
        this.incomeInput = document.getElementById("income-input");
        this.expenseInput = document.getElementById("expenses-input");
        this.expenseAmountInput = document.getElementById("expenses-amount-input");
        //input buttons
        this.incomeBtn = document.getElementById("income-btn");
        this.expensesBtn = document.getElementById("expenses-btn");
        //visual area
        this.visualIncome = document.getElementById("income-counter");
        this.visualExpenses = document.getElementById("expenses-counter");
        this.visualBudget = document.getElementById("budget-counter");
        //display area
        this.displayArea = document.querySelector(".display-area");
    }

    addEntry(){
        const entries = ['kek'];
        let entry = document.createElement("div");
        entry.classList.add("display-entry");
        entry.innerHTML = `<p class="entry-title">${entries[0]}</p>
        <p class="entry-button" id="edit-btn">Edit</p>
        <p class="entry-button" id="delete-btn">Delete</p>`
        this.displayArea.appendChild(entry);
    }
}

const ui = new UI();
const self = this;

ui.incomeBtn.addEventListener("click", function() {
    ui.visualIncome.textContent = `\$${ui.incomeInput.value}`;
})

ui.expensesBtn.addEventListener("click", function() {
    ui.addEntry();
})