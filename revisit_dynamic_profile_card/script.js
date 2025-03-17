// Get references to all input fields and elements
const nameInput = document.getElementById("nameInput");
const bioInput = document.getElementById("bioInput");
const imageInput = document.getElementById("imageInput");
const bgColorInput = document.getElementById("bgColorInput");
const updateButton = document.getElementById("updateButton");

const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileImage = document.getElementById("profileImage");
const profileCard = document.getElementById("profileCard");

// Function to update the profile name
function updateName() {
    const newName = nameInput.value.trim();
    if (newName !== "") {
        profileName.textContent = newName;
    }
}

// Function to update the profile bio
function updateBio() {
    const newBio = bioInput.value.trim();
    if (newBio !== "") {
        profileBio.textContent = newBio;
    }
}

// Function to update the profile image
function updateImage() {
    const newImageUrl = imageInput.value.trim();
    if (newImageUrl !== "") {
        profileImage.setAttribute("src", newImageUrl);
    }
}

// Function to update the background color
function updateBackgroundColor() {
    const newColor = bgColorInput.value;
    profileCard.style.backgroundColor = newColor;
}

// Master function to update the profile card
function updateProfile() {
    updateName();
    updateBio();
    updateImage();
    updateBackgroundColor();
}

// Attach event listener to the update button
updateButton.addEventListener("click", updateProfile);
