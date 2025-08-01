//creating login and sign up setting 
const login = document.querySelector("#form1");
const signup = document.querySelector("#form2");





// checking 
// console.log(login, signup)

//1//signup form on submiting
if (signup) {
    signup.addEventListener("submit", (event) => {
        event.preventDefault()
        const user = JSON.parse(localStorage.getItem("userdata")) || [];
        let data = {
            //Sign up data
            Semail: document.querySelector("#exampleInputEmail1").value.trim(),
            SName: document.querySelector("#Name").value.trim(),
            Spassword: document.querySelector("#exampleInputPassword1").value.trim(),

        }

        let userdata = JSON.parse(localStorage.getItem("userdata")) || [];

        let findemail = userdata.find(u => u.Semail === data.Semail);
        //    let findname = userdata.find(u =>  u.SName === data.SName );
        let findpassword = userdata.find(u => u.Spassword === data.Spassword);


        //   check the condition true or false
        if (findemail) {
            data.Semail.value
            document.querySelector("#exampleInputEmail1").value = "This email has already exist!!"
            document.querySelector("#exampleInputEmail1").style.color = "red"
            document.querySelector("#exampleInputEmail1").style.border = "2px solid red"
        }
        if (findpassword) {
            document.querySelector("#exampleInputPassword1").style.color = "red"
            document.querySelector("#exampleInputPassword1").style.border = "2px solid red"
        }

        else {
            user.push(data)
            localStorage.setItem("userdata", JSON.stringify(user))
            //go to login 
            window.location.href = "index.html"
        }
        console.log(localStorage.getItem("userdata"))
    }
    )
}




if (login) {
    login.addEventListener("submit", (event) => {
        event.preventDefault()

        let data = {
            //Login data

            Lemail: document.querySelector("#email2").value.trim(),
            Lpassword: document.querySelector("#password2").value.trim(),
        }

        let userdata = JSON.parse(localStorage.getItem("userdata")) || [];

        // Check user match with all 3 fields
        let findUser = userdata.find(
            u =>
                u.Semail === data.Lemail &&
                u.Spassword === data.Lpassword
        );

        if (findUser) {
            window.location.href = "home.html";

        }

        else {
            let para = document.querySelector("#para")
            para.innerHTML = "something went wrong please enter a vaild data!!";
            para.style.color = "red";

            document.querySelector("#email2").style.border = "2px solid red";
            document.querySelector("#email2").style.color = " red";


            document.querySelector("#LName").style.color = "red";
            document.querySelector("#LName").style.border = "2px solid red";

            let Password = document.querySelector("#password2");
            Password.style.color = "red"
            Password.style.border = "2px solid red"
        }

    })


}