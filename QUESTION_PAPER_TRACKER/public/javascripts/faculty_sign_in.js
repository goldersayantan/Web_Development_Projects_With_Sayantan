
function fun(x) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(x === 'submit')  {
        if(email === "" || password === "") {
            alert("Please enter all the above fields");
        }else {
            window.location.href = "/faculty_details"
        }
    }
}