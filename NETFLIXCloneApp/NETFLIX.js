let firstButton = document.getElementById("sixth_Container_first_button");
let secondButton = document.getElementById("sixth_Container_second_button");
let thirdButton = document.getElementById("sixth_Container_third_button");
let forthButton = document.getElementById("sixth_Container_forth_button");
let fifthButton = document.getElementById("sixth_Container_fifth_button");
let sixthButton = document.getElementById("sixth_Container_sixth_button");

let firstDescription = document.getElementById("sixth_Container_first_description");
let secondDescription = document.getElementById("sixth_Container_second_description");
let thirdDescription = document.getElementById("sixth_Container_third_description");
let forthDescription = document.getElementById("sixth_Container_forth_description");
let fifthDescription = document.getElementById("sixth_Container_fifth_description");
let sixthDescription = document.getElementById("sixth_Container_sixth_description");

let firstIcon = document.getElementById("sixth_Container_first_button_icon");
let secondIcon = document.getElementById("sixth_Container_second_button_icon");
let thirdIcon = document.getElementById("sixth_Container_third_button_icon");
let forthIcon = document.getElementById("sixth_Container_forth_button_icon");
let fifthIcon = document.getElementById("sixth_Container_fifth_button_icon");
let sixthIcon = document.getElementById("sixth_Container_sixth_button_icon");


let allButtons = [firstButton, secondButton, thirdButton, forthButton, fifthButton, sixthButton];
let allDescriptions = [firstDescription, secondDescription, thirdDescription, forthDescription, fifthDescription, sixthDescription];
let allIcons = [firstIcon, secondIcon, thirdIcon, forthIcon, fifthIcon, sixthIcon];

allDescriptions.forEach(description => {
    description.style.display = "none";
});

allButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let description = allDescriptions[index];
        let icon = allIcons[index];
        if (description.style.display === "none") {
            description.style.display = "block";
            icon.textContent = "close"
        } else {
            description.style.display = "none";
            icon.textContent = "add"
        }
    });
});

