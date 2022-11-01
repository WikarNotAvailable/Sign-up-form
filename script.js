const password = document.getElementsByName("password")[0].addEventListener('input', validate);
const repeat = document.getElementsByName("confirmPass")[0].addEventListener('input', validate);

function validate(){

    const password = document.getElementsByName("password")[0];
    const repeat = document.getElementsByName("confirmPass")[0];

    if(password.value != repeat.value){
       password.setAttribute('class','error');
       repeat.setAttribute('class','error');
       console.log("not equal");
    }
    else{
        password.classList.remove("error");
        repeat.classList.remove("error");
        console.log("equal");
    }
   
}