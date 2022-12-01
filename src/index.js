document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    handleToDo(e.target.querySelector('#new-task-description').value)
    form.reset()
  })

});

function handleToDo(todo){
  let p = document.createElement('p')
  let bttn = document.createElement('button')
  bttn.addEventListener('click', DeleteTask)
  bttn.textContent = '  x  '
  p.textContent = `${todo}`
  p.appendChild(bttn)
  document.querySelector('#tasks').appendChild(p)
}

function DeleteTask(e){
  e.target.parentNode.remove()
}