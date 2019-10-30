// Reference: https://programacion.net/articulo/paso_de_variables_javascript_entre_paginas_i_12
cadVariables = location.search.substring(1,location.search.length);
console.log(location.search.length);
arrVariables = cadVariables.split("&");
for (i=0; i<arrVariables.length; i++) {
  arrVariableActual = arrVariables[i].split("=");
  if (isNaN(parseFloat(arrVariableActual[1]))){
    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
}else {
    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");}
}


let welcome = document.getElementById("welcome");
welcome.innerHTML="Bienvenid@ "+ arrVariables[0] + " " + arrVariables[1];
function addTask() {
    const task = document.getElementById("task").value;
    // const registerTasks = document.getElementById("registerTasks").value;
    const pendingTasks = document.getElementById("pendingTasks");
    const newTask = document.createElement("li");
    newTask.textContent=task;
    pendingTasks.appendChild(newTask);  
    newTask.addEventListener("click",()=>{
        pendingTasks.removeChild(newTask); 
    })
};

