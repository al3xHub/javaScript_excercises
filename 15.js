/*let mensaje;
if (login == 'Empleado') {
  mensaje = 'Hola';
} else if (login == 'Director') {
  mensaje = 'Felicidades';
} else if (login == '') {
  mensaje = 'No te has registrado';
} else {
  mensaje = '';
}
*/

let mensaje=(login=='Empleado')? 'Hola': (login== 'Director')? 'Felicidades':
(login=='')? 'No te has registrado':'';