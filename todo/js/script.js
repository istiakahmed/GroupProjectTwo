// ------------------------------dom part start
let headinput       = document.querySelector('.headinput')
let headbutton      = document.querySelector('.headbutton')
let singletodoinput = document.querySelector('.singletodoinput')
let editbutton      = document.querySelector('.editbutton')
let deletebutton    = document.querySelector('.deletebutton')
let single_todo_list= document.querySelector('.single_todo_list')
// -----------------------------Enter function part start
let EnterClick =(item)=>{
        if(item.key == "Enter"){
                clicky()
        }
}
// -----------------------------function part start
let clicky =()=>{
        if(headinput.value ==''){
        alert('faka rakhte pariba na botsho')}
        else{
// create element
let singletodo         = document.createElement('div')
let todocheckbox       = document.createElement('input')
let singletodoinput    = document.createElement('input')
let editbutton         = document.createElement('button')
let deletebutton       = document.createElement('button')
// append child
single_todo_list.appendChild(singletodo)
singletodo.appendChild(todocheckbox)
singletodo.appendChild(singletodoinput)
singletodo.appendChild(editbutton)
singletodo.appendChild(deletebutton)
// create classname
singletodo.classList.add('singletodo')
todocheckbox.classList.add('todocheckbox')
singletodoinput.classList.add('singletodoinput')
editbutton.classList.add('editbutton')
deletebutton.classList.add('deletebutton')
// adding content
editbutton.innerHTML     = 'Edit'
deletebutton.innerHTML   = 'Remove'
// adding data to input field
singletodoinput.value    = headinput.value
headinput.value = ''     
// setting attribute
todocheckbox.setAttribute('type' , 'checkbox')
singletodoinput.setAttribute('readonly','readonly')
// remove with button
deletebutton.addEventListener('click', ()=>{
singletodo.remove()})
// edit with button
editbutton.addEventListener('click' , ()=>{
if(editbutton.innerHTML=='Edit'){editbutton.innerHTML='Save'
singletodoinput.removeAttribute('readonly','readonly')}
else{
editbutton.innerHTML='Edit'
singletodoinput.setAttribute('readonly','readonly')
}})}}
