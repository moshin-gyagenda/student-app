const registerLink = document.getElementById('registerLink');
const registerForm = document.getElementById('registerForm');

registerLink.addEventListener('click', () => {
    // alert('button clicked');
    registerForm.style.display ="block";
})

function register(){

    // alert('button register cliecked');
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let regNumber = document.getElementById('regNumber').value;
    let yearOfStudy = document.getElementById('yearOfStudy').value;

    if (firstName.toLowerCase() === "joan") {
        
        alert('user registered');
    }else{
        alert('user not registered'); 
    }

}

