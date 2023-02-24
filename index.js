let countEl = document.getElementById("count-el")
let count = 0

function increament(){
    count = count + 1
    countEl.innerText = count
}
let saveEl = document.getElementById("save-el")
function save(){
    saveEl.innerText = count
}