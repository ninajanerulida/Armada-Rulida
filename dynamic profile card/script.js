// Select elements
const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileImage = document.getElementById("profileImage");
const profileCard = document.getElementById("profileCard");

// Function to update name
function updateName() {
    const newName = document.getElementById("nameInput").value;
    if (newName.trim() !== "") {
        profileName.innerText = newName;
    }
}

// Function to update bio
function updateBio() {
    const newBio = document.getElementById("bioInput").value;
    if (newBio.trim() !== "") {
        profileBio.textContent = newBio;
    }
}

// Function to update profile image
function updateImage() {
    const newImageURL = document.getElementById("imageInput").value;
    if (newImageURL.trim() !== "") {
        profileImage.setAttribute("src", newImageURL);
    }
}

// Function to change background color
function updateBackgroundColor() {
    const newColor = document.getElementById("bgColorInput").value;
    profileCard.style.backgroundColor = newColor;
}
