function savedata()
{
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("userEmail").value;
    
    sessionStorage.setItem("firstKey",fname);
    sessionStorage.setItem("lastKey",lname);
    sessionStorage.setItem("emailKey",email);
    
    if (fname == "")
        {
            document.getElementById("firstError").innerHTML = "Please enter your first name";
            document.getElementById("lastError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
        }
    else if (lname =="")
        {
            document.getElementById("lastError").innerHTML = "Please enter your last name";
            document.getElementById("firstError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
        }
    else if (email == "")
        {
            document.getElementById("emailError").innerHTML = "Please enter your email";
            document.getElementById("firstError").innerHTML = "";
            document.getElementById("lastError").innerHTML = "";
        }
    else
        {
            document.getElementById("success").innerHTML = "Hello " + fname +" "+ lname +"! your registeration was successful!";
            document.getElementById("firstError").innerHTML = "";
            document.getElementById("lastError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
            document.getElementById("status").innerHTML = email;
        }
    
}

function returndata()
{
    var uname = sessionStorage.getItem("firstKey");
    var sname = sessionStorage.getItem("lastKey");
    var email = sessionStorage.getItem("emailKey");
    
    
    if (sessionStorage.getItem("firstKey") === null || sessionStorage.getItem("lastKey") === null || sessionStorage.getItem("emailKey") === null )
    {
         document.getElementById("status").innerHTML = "REGISTER"
    }
    else if (email == "" || uname == "" || sname == "")
        {
            document.getElementById("status").innerHTML = "REGISTER"
        }
    else
        {
         document.getElementById("status").innerHTML = email;
        }
}