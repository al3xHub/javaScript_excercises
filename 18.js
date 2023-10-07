let cliente=prompt("Login Username:","");
if(cliente=="Admin"){
    let contrasenia=prompt("Password:","");
    if(contrasenia=="TheMaster"){
        alert("Bienvenido");
    }else if(contrasenia!="TheMaster"){
        alert("Contraseña incorrecta");
    }else{
        alert("Cancelado");
    }
}
else if(cliente=="" || cliente==null){
    alert("Cancelado");
}
else{
    alert("No te conozco");
}