function comprobarEdad(edad) {
    if (edad > 18) {
      return true;
    } else {
      return confirm('¿Te dejan tus padres?');
    }
  }

  comprobarEdad(7);