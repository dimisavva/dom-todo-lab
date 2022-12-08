//using getElementById
const inp = document.getElementById('input-id')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')

btn.addEventListener('click',function(evt){
  const li = document.createElement('li')
  li.textContent = inp.value
  document.querySelector('ul').appendChild(li)
  inp.value = ""
})

eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});