import throttle from "lodash.throttle"


const form = document.querySelector('.feedback-form')
const input = document.querySelector("input")
const textarea = document.querySelector("textarea")
const STORAGE_KEY = "feedback-form-state"


form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', submitData)
auto()
function inputData() {
    const data = {}
    data.email = input.value
    data.message = textarea.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
   
    
}

function auto() {

    const item = localStorage.getItem(STORAGE_KEY)
    const parsedItem = JSON.parse(item)
    if (parsedItem) {
    textarea.value = parsedItem.message;
    input.value = parsedItem.email
    }
}

function submitData(event) {
    event.preventDefault()
    const item = localStorage.getItem(STORAGE_KEY)
    const parsedItem = JSON.parse(item)
    
    console.log(parsedItem);
    form.reset()
    localStorage.clear()
}
