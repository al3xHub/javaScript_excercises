function truncar(str,maxlength){
    if(str.length>maxlength){
        console.log(str.substring(0,maxlength-1)+"…");
    }else{
        console.log(str);
    }

}
truncar("Lo que me gustaría contarte de este tema es:",20);