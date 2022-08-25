document.addEventListener("DOMContentLoaded", () => {
 form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    myToDoList(e.target.newTask.value)
    form.reset()
  })
})

function myToDoList (todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteBtn)
  btn.textContent = 'x'
  li.textContent = `${todo}  `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function deleteBtn (e) {
  e.target.parentNode.remove()
}