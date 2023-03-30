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
//assign potlick item button
const assignButton =document.querySelector(".assign");
//variable that stores the list of assigned potluck items
const assignedItems = document.querySelector(".assigned-items");

//addEventListener to addGuestButton variable, listen for a click event
addGuestButton.addEventListener("click", function() {
    //write a variable called guest to capture the guestInput value
    const guest = guestInput.value;
    //console.log(guest);
    //write an if statement to check if guest is not an empty string
    if (guest !== "") {
        addToList(guest); //call this function to add a guest to the guest list
        updateGuestCount(); //call this function to recalculate and update the guest count
        clearInput();  //call this function to clear the input box after adding a guest
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

const assignItems = function () {
    const potluckItems = [
        "potato salad",
        "hummus",
        "cookies",
        "fruit",
        "tortilla chips",
        "salsa",
        "guacamole",
        "queso dip",
        "watermelon",
        "potato chips",
        "sangria",
        "coleslaw"
    ];

    //grab/select guess list from HTML, save to variable allGuests
    const allGuests = document.querySelectorAll(".guest-list li");

    //loop throught the gues list
    for (let guest of allGuests) {
        //to select a rsndom element from the array use Math.floor(Math.random() * the length of the array)
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        //add the randomly picked item to the itme list at the randomPotluckIndex spot
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        //create a new list item in the HTMl for the newly randomly selected item
        let listItem = document.createElement("li");
        //using guest.innerText to access the name inside the li element. make a template literal to assign each guest a potluck item to bring
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`
        //add the listItem to the assignedItems array
        assignedItems.append(listItem);
        //remove the item at the randomPotluckIndex so it won;t be assigned twice
        potluckItems.splice(randomPotluckIndex, 1);
    }
};
//make and event listener for clicking on the assign button
assignButton.addEventListener("click", function () {
    assignItems(); //call this function once the click event happens
    assignButton.disabled = true; //this disables the assignItems button when a dish is called twice
});