function changeMainHeading() {
    document.getElementById("main-heading").textContent = "Welcome to the Updated Campus Event Portal!";
}

function changeCardColor() {
    document.getElementById("card-1").style.backgroundColor = "#dcfce7";
}

function addNewEvent() {
    let inputVal = document.getElementById("newEventInput").value;
    let display = document.getElementById("eventDisplayArea");
    display.textContent = inputVal ? "Successfully Added: " + inputVal : "Please type an event name first!";
    display.style.color = inputVal ? "#16a34a" : "#dc2626";
}

function modifyEventCard() {
    document.getElementById("card2-title").textContent = "Tech Hackathon 2026 (Updated)";
    document.getElementById("card2-title").style.color = "#842029";
}
function handleRegistration(e) {
    e.preventDefault();
    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNumber").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("regMessage");

    if (!name || !roll || !email) {
        msg.textContent = "Error: Please fill in all required fields.";
        msg.style.color = "#dc2626";
    } else {
        msg.textContent = "Success! Thank you, your registration is confirmed.";
        msg.style.color = "#16a34a";
    }
}

function changeHeadingSize() {
    document.getElementById("reg-heading").style.fontSize = "38px";
}