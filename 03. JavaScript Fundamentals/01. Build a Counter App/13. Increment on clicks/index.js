// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

let countEl = document.getElementById("count-el");

// intialize the count as 0
let count = 0;
// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count++;
    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count;
}