let vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?");
let groupSize = prompt("How many are in your group?");

if (groupSize <= 2) {
    transportation = "first class"
}
else if (groupSize >= 3 && groupSize <= 5) {
    transportation = "a helicopter"
}
else if (groupSize >= 6) {
    transportation = "a charter flight"
}

if (vacationType == "adventurous") {
    destination = " to go Whitewater Rafting in the Grand Canyon."
}
else if (vacationType == "musical") {
    destination = " to New Orleans."
}
else if (vacationType == "tropical") {
    destination = " to a Beach Vacation in Mexico."
}
let result = console.log("Since you're vacationing in a group of " + groupSize + " and are seeking " + vacationType + " destinations, you should consider taking " + transportation + destination)