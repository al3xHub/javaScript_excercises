/*Escribe este código con if else
switch (navegador) {
    case 'Edge':
      alert( "Tienes Edge!" );
      break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Está bien, también soporto estos navegadores' );
      break;
    default:
      alert( 'Espero que esta página se vea bien' );
  }
*/

let navegador=prompt("¿Qué navegador utilizas?");
if(navegador=="Edge"){
    alert("Tienes Edge!");
}else if(navegador=="Chrome"){
    alert("Esta bien... También soporto estos navegadores.");
}else if(navegador=="Safari"){
    alert("Esta bien... También soporto estos navegadores.");
}else if(navegador=="Opera"){
    alert("Esta bien... También soporto estos navegadores.");
}else{
    alert("Espero que esta página se vea bien.");
}