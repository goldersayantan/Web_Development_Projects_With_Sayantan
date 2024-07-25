function fun(x) {
    let input_box = document.getElementsByClassName("input_box");
    let submission_result = document.getElementById("submission_result");

    if(x === 'submit')  {
        for(i = 1; i <= input_box.length; i++)  {
            if(input_box[i].value === "")   {
                submission_result.innerHTML = "Please Fill All The Details.";
            }else {
                window.location.href="/upload_file";
            }
        }
    }
}