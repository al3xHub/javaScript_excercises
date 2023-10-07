function checkSpam(spam){
    spam=spam.toLowerCase();
    if(spam=="viagra" || spam=="xxx"){
        console.log(true)
    }else{
        console.log(false);
    }
}

checkSpam("ViAGra");