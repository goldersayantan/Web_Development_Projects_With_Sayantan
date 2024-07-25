function fun(x) {
    let input_box = document.getElementsByClassName("input_box");
    let submission_result = document.getElementById("submission_result");

    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;

    if(x === 'submit') {
        for (i = 1; i <= input_box.length; i++) {
            if (input_box[i].value === "") {
                submission_result.innerHTML = "Please Fill All The Details.";
            } else {
            }
        }
    }

    if(x === 'submit')  {
        if(password !== confirm_password)   {
            submission_result.innerHTML = "Passwords do not match";
        }
    }
}
