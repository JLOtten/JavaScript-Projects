// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//addEventListener to addGuestButton variable, listen for a click event
addGuestButton.addEventListener("click", function() {
    //write a variable called guest to capture the guestInput value
    const guest = guestInput.value;
    //console.log(guest);
    //write an if statement to check if guest is not an empty string
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();   
    }
});

//write a function to clear the input of the guestInput box value
const clearInput = function() {
    guestInput.value = ""; 
};

const addToList = function(guest) {
    //create a variable called listItem and create a new list element in the HTML
    const listItem = document.createElement("li");
    //change the innerText of the listItem to the guest variable
    listItem.innerText = guest;
    //append the listItem to guessList so the new element appears at the end of the list
    guestList.append(listItem);
    //call addGuestButton function
};

const updateGuestCount = function() {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};