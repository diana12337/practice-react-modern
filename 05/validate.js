function isPatternCorrect(inputValue, pattern) {
    const regex = pattern
    return regex.test(inputValue);
}
function createErrorElement(message) {
    const p = document.createElement("p")
    p.innerText = message
    p.style.color = "red"
    return p
}

function showError(message) {
    const p = createErrorElement(message)
    const errorDiv = document.querySelector(".error")
    p.innerText = message
    p.style.color = "red"
    errorDiv.appendChild(p)
}
export default function checkInput(inputValue, pattern, inputName) {

    let valid = false;

    if (!isPatternCorrect(inputValue, pattern, inputName)) {
        showError(`wprowadż poprawnie ${inputName}`)
    }
    else {
        valid = true;
    }
    return valid
}

