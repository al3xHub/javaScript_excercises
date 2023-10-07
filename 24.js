/*
Utiliza una variante sin el if. Una puede ser con "?" y la otra con OR.
function comprobarEdad(edad) {
    if (edad > 18) {
      return true;
    } else {
      return confirm('¿Tienes el permiso de tus padres para acceder a esta página?');
    }
  }
*/

//let resultado = condicion ? valor1 : valor2;
let edad;
function comprobarEdad(edad){
    edad= (edad>18) ? true : confirm('Tienes el permiso de tus padres para acceder a esta página?');
}

comprobarEdad(1);

