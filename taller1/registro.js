

register.addEventListener("click",()=>{
var pagina = "../taller1/tareas.html";
var name = document.getElementById("name").value;
const lastname = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value; 
const phone = document.getElementById("phone").value;
const register = document.getElementById("register");
    if ((name.length > 0) && (lastname.length > 0) && (email.length > 0) && (password.length > 0) && (phone.length > 0)) {
        console.log("Los campos tienen valores");
        pagina += "?" + name + "&" + lastname;
        console.log(pagina);
        location.href=pagina;
    } else {
        alert("Todos los campos son requeridos. Verifique que ingresó toda la información.")   
    }
});





