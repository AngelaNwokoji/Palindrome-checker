const result = document.querySelector("#result");
const btn = document.querySelector("#check-btn");
const box = document.querySelector("#text-input");
const userInput = box.value.trim();


function checkWord(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

function checkBox () {
    const userInput = box.value.trim();

    if (userInput === '') {
        alert("Please input a value");
} else {
    if (checkWord(userInput)){
            result.innerText = userInput + " is a palindrome";

} else {
    result.innerText = userInput + " is not a palindrome"}
}
}

btn.addEventListener("click", checkBox);




