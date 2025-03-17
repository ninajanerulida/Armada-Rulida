// Select the notification container and button
const notificationContainer = document.getElementById("notificationContainer");
const showNotificationBtn = document.getElementById("showNotification");

// Function to create a notification
function createNotification() {
    // Create notification div
    const notification = document.createElement("div");
    notification.classList.add("notification");

    // Add message text
    notification.innerHTML = `<span>You have a new message!</span>`;

    // Create close button
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "×";
    closeButton.classList.add("close-btn");

    // Remove notification when close button is clicked
    closeButton.addEventListener("click", () => {
        notification.remove();
    });

    // Append close button to notification
    notification.appendChild(closeButton);

    // Insert at the top of the container
    if (notificationContainer.firstChild) {
        notificationContainer.insertBefore(notification, notificationContainer.firstChild);
    } else {
        notificationContainer.appendChild(notification);
    }

    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Event listener for button click
showNotificationBtn.addEventListener("click", createNotification);