document.addEventListener("DOMContentLoaded", function() {
    let balance = 5000;
    const balanceDisplay = document.getElementById("balance");
    const amountInput = document.getElementById("amount");
    const depositBtn = document.getElementById("deposit");
    const withdrawBtn = document.getElementById("withdraw");
    const message = document.getElementById("message");

    function updateMessage(text, color) {
        message.textContent = text;
        message.style.color = color;
    }

    depositBtn.addEventListener("click", function() {
        let amount = parseFloat(amountInput.value);
        if (amount > 0) {
            balance += amount;
            balanceDisplay.textContent = `$${balance}`;
            updateMessage(`Successfully deposited $${amount}.`, "green");
        } else {
            updateMessage("Please enter a valid amount.", "red");
        }
        amountInput.value = "";
    });

    withdrawBtn.addEventListener("click", function() {
        let amount = parseFloat(amountInput.value);
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            balanceDisplay.textContent = `$${balance}`;
            updateMessage(`Successfully withdrew $${amount}.`, "blue");
        } else if (amount > balance) {
            updateMessage("Insufficient funds.", "red");
        } else {
            updateMessage("Please enter a valid amount.", "red");
        }
        amountInput.value = "";
    });
});
