const inputBox = document.querySelector(".inputBox")
const ListContainer = document.querySelector(".ListContainer")


const AddTask = document.querySelector('.AddTask')

AddTask.addEventListener("click", () => {

    if (inputBox.value === '') {
        alert('Você tem que escrever algo!')
    } else {
        const liEl = document.createElement('li')
        liEl.innerText = inputBox.value
        ListContainer.appendChild(liEl)
        const span = document.createElement("span")
        span.innerText = '\u00d7'
        liEl.appendChild(span)
    }

    inputBox.value = ''
    saveData()

})

ListContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', ListContainer.innerHTML)
}


function showTask() {
    ListContainer.innerHTML = localStorage.getItem('data')
}
showTask()