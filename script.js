// Variables
let ad = document.querySelectorAll("img");
let navBar = document.querySelector("nav");
let introScreen = document.getElementsByClassName("intro");
let nameInput = document.getElementById("name_input");
let name = nameInput.innerHTML;
let nameInput2 = document.getElementById("name_input_2");
let name2 = nameInput2.innerHTML;
let nameButton = document.getElementById("submit_button");
let noNameButton = document.getElementById("submit_button_2");
let welcomeMessage = document.querySelector("h1");

//  Main page starts out hidden
navBar.style.visibility = "hidden";
ad[5].style.display = "none";

// Records and updates name input values
nameInput.addEventListener("change", updateValue);
nameInput2.addEventListener("change", updateValue2);

function updateValue(event){
    name = event.target.value;
}

function updateValue2(event){
    name2 = event.target.value;
}

// Sends you to main page with name inputted
nameButton.onclick = function(event){
    event.preventDefault();

    // Alerts you to fill in all fields before pressing the "Submit Name" button
    if(name == "" || name2 == ""){
        alert("Please fill in all fields.");
    }

    // Sends you to main page once all fields are filled, displays welcome message
    else{
        welcomeMessage.innerHTML = "Welcome, " + name + " " + name2 + "!";
        nameInput.style.display = "none";
        nameInput2.style.display = "none";
        nameButton.style.display = "none";
        noNameButton.style.display = "none";
        navBar.style.visibility = "visible";
        ad[5].style.display = "block";

        for(let i = 0; i < introScreen.length; i++){
            introScreen[i].style.display = "none";
        }
    }
}

// Sends you to main page immediately, with no welcome message
noNameButton.onclick = function(event){
    event.preventDefault();

    nameInput.style.display = "none";
    nameInput2.style.display = "none";
    nameButton.style.display = "none";
    noNameButton.style.display = "none";
    navBar.style.visibility = "visible";
    ad[5].style.display = "block";

    for(let i = 0; i < introScreen.length; i++){
        introScreen[i].style.display = "none";
    }
}