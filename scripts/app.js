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

    //submitting forms

    incomeSubmit(svalue){
        const value = this.incomeInput.value;

        if (value < 0 || value === "" || value === NaN){
            this.incomeInput.classList.add("input-alert");
            this.incomeInput.placeholder = "Enter a valid amount";
            const self = this;
            setTimeout(function(){
                self.incomeInput.classList.remove("input-alert");
                self.incomeInput.placeholder = "Enter your income";
            }, 2000)
        }
        else {
            this.incomeUpdate(svalue);
        }
    }

    //updating visual elements

    incomeUpdate(value){
        this.visualIncome.textContent = `\$${value}`
    }

    expenseUpdate(value){
        this.visualExpenses.textContent = `\$${value}`
    }

    budgetUpdate(value){
        this.visualBudget.textContent = `\$${value}`
    }

    //manipulating expenses list

    addEntry(){
        const entries = ['kek'];
        let entry = document.createElement("div");
        entry.classList.add("display-entry");
        entry.innerHTML = `<p class="entry-title">${entries[0]}</p>
        <p class="entry-amount">$120</p>
        <p class="entry-button" id="edit-btn">Edit</p>
        <p class="entry-button" id="delete-btn">Delete</p>`
        this.displayArea.appendChild(entry);
    }
}

window.addEventListener("DOMContentLoaded", function() {
    const ui = new UI();
    var count = 0;

    ui.incomeBtn.addEventListener("click", function() {
        count = ui.incomeInput.value;
        ui.incomeSubmit(count);
    })

    ui.expensesBtn.addEventListener("click", function() {
        ui.addEntry();
    })
})

