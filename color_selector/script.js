document.getElementById("container").addEventListener("click", function() {
    alert("You clicked the container!");
    this.style.backgroundColor = "lightgray"; 
});

document.querySelectorAll(".color-box").forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents event from reaching #container
        document.getElementById("container").style.backgroundColor = this.style.backgroundColor;
        alert("You clicked the " + this.textContent + " button!");
    });
});
