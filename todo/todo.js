
const task = document.getElementById('task');
const ul= document.getElementById('ul');

function addTask(){
li = document.createElement('li');
li.appendChild(document.createTextNode(task.value));
li.addEventListener('click',(e)=>{e.target.remove()});
ul.appendChild(li);
task.value=" ";
}


