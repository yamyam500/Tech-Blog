const userLogin= async (e)=>{
    e.preventDefault()
    console.log("button click");

    const username= document.querySelector("#user-input").value
    const password=document.querySelector("#user-password").value

    if(username && password){
        const response= await fetch("/api/users/login",{
            method:"POST",
            body:JSON.stringify({
                username:username,
                password:password
            }),
            headers:{"Content-Type" :"application/json"}
        })

        if(response.ok){
            console.log(response.ok);
            document.location.replace("/dashboard")
        }else{
            alert("oops! Something went wrong!")
        }
    }

}

document
.querySelector(".login-form")
.addEventListener("click",userLogin)