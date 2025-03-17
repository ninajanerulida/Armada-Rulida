document.addEventListener("DOMContentLoaded", function() {
    let balance = 5000;
    let dailyWithdrawLimit = 1000;
    let totalWithdrawnToday = 0;

    const balanceDisplay = document.getElementById("balance");
    const amountInput = document.getElementById("amount");
    const depositBtn = document.getElementById("deposit");
    const withdrawBtn = document.getElementById("withdraw");
    const message = document.getElementById("message");
    const history = document.getElementById("history");

    function updateMessage(text, color) {
        message.textContent = text;
        message.style.color = color;
    }

    function addTransaction(type, amount) {
        const transaction = document.createElement("div");
        transaction.classList.add("transaction");
        transaction.textContent = `${type}: $${amount}`;
        history.prepend(transaction);
    }

    depositBtn.addEventListener("click", function() {
        let amount = parseFloat(amountInput.value);
        if (amount > 0) {
            balance += amount;
            balanceDisplay.textContent = `$${balance}`;
            addTransaction("Deposit", amount);
            updateMessage(`Successfully deposited $${amount}.`, "green");
        } else {
            updateMessage("Please enter a valid amount.", "red");
        }
        amountInput.value = "";
    });

    withdrawBtn.addEventListener("click", function() {
        let amount = parseFloat(amountInput.value);
        if (amount > 0 && amount <= balance) {
            if (totalWithdrawnToday + amount > dailyWithdrawLimit) {
                updateMessage("Daily withdrawal limit reached!", "red");
            } else {
                balance -= amount;
                totalWithdrawnToday += amount;
                balanceDisplay.textContent = `$${balance}`;
                addTransaction("Withdraw", amount);
                updateMessage(`Successfully withdrew $${amount}.`, "blue");
            }
        } else if (amount > balance) {
            updateMessage("Insufficient funds.", "red");
        } else {
            updateMessage("Please enter a valid amount.", "red");
        }
        amountInput.value = "";
    });
});
