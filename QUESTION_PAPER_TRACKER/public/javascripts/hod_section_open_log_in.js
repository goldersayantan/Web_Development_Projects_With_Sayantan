function fun(x) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone_number = document.getElementById('phone_number').value;
    if(x === 'submit')  {
        if(email === "" || password === "") {
            alert("Please enter all the above fields");
        }else if(email !== "hod.soet@adamasuniversity.ac.in"){
            alert("email id is incorrect");
        }else if(parseInt(phone_number) !== 8759686303){
            alert("Phone number is incorrect");
        }else if(password !== "@hodlogin5555"){
            alert("Passwords do not match");
        }else {
        }
    }
}