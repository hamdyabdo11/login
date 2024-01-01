var userEmail=document.getElementById('signupEmail');
var userPassword=document.getElementById('sigupPassword');
var userName=document.getElementById('signupName');
var signinEmail=document.getElementById("signinEmail");
var signinPassword=document.getElementById("signinPassword");
var signUpBtn=document.getElementById('signup');
var logOutBtn=document.getElementById('logout');
var logininbtn=document.getElementById("logininbtn");
var signuplink =document.querySelector(".signuplink");
var signinlink=document.querySelector(".signinlink");
//----------------regular expression-------------------------------
var email_regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g;
var pass_regex=/^[\w-]{3,10}$/;
// var pass_regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
var name_regex=/^[\w-]{3,10}$/g;
var accounts=[];
function check(element,regex){
    if(regex.test(element.value)===true){

        element.style.border="1px solid green"
        // console.log("if statement")
    }
    else{
        element.style.border="1px solid red"
        // console.log(" else if statement")
    }
}
if(userName){
    userName.addEventListener("blur",()=>{
        check(userName,name_regex);
    
    });
}
if(userEmail){
    userEmail.addEventListener("blur",()=>{
        check(userEmail,email_regex);
    
    });
}
if(userPassword){
    userPassword.addEventListener("blur",()=>{
        check(userPassword,pass_regex);
    
    });
}


// function addAcount(){
// function addAcount(name,email,pass)
window.onload=function(){
    signupfun();
    // logninfunc();
    }
    function signupfun(){
        if(signUpBtn){
            signUpBtn.addEventListener("click",function(){
                var signUp={
                    name:userName.value,
                    email:userEmail.value,
                    pass:userPassword.value,
                };
                if (email_regex.test(userEmail.value)===true || pass_regex.test(userPassword.value)===true || name_regex.test(userName.value)===true){
                    accounts.push(signUp);
                    localStorage.setItem("accounts", JSON.stringify(accounts));
                    for (var i = 0; i < accounts.length; i++){
                        localStorage.setItem('nameUser',JSON.stringify(accounts[i].name))
    
                        // localStorage.setItem("nameUser", JSON.stringify(userName.value));
                    
                        window.open("./../Assignment_JS_4/home.html");
                    }
                    
                        // Loop through userArr to find a user with matching email and password
                // for (var i = 0; i < accounts.length; i++) {
                //     if (accounts[i].name.toLowerCase() === email.toLowerCase() && accounts[i].pass === password) {
                //         return accounts[i]; // Return the user object if a match is found
                //     }
                // }
                // return null;
                    
            }}); 
        }
       
    }
    function logninfunc(){
        logininbtn.addEventListener("click",function(){
            var eEmail=signinEmail.value;
            var pPass=signinPassword.value;
            for (var i = 0; i < accounts.length; i++) {
                if (accounts[i].email.toLowerCase() == eEmail.toLowerCase() && accounts[i].pass.toLowerCase() == pPass.toLowerCase()) {
                    localStorage.setItem('nameUser', accounts[i].name);
                    window.open("./../Assignment_JS_4/home.html");
                } else {
                    document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
                }
            }
            
                });   
            
    }
    



// function singnup(){
// window.onload=function(){
//     
// }
    // function showUserName(){
    //     var cartoona=``;
    //     if(localStorage.getItem("nameUser") !==null){
    //         nameUser=JSON.parse(localStorage.getItem("nameUser"))
    //         cartoona=`welcome ,${nameUser}`
    //         var welcomeMesg=document.querySelector("#userMes");
    //             welcomeMesg.innerHTML="heelo";

    
    //     }
    //     // =cartoona;  
    
    
    // }

 

        
            // window.location.href=`C:\\Users\\ZALL-SOFT\\Desktop\\Route course\\day18\\Assignment_JS_4\\home.html`
    // var welcomeMes = document.getElementById("userHome")
    // var authenticatedUser = JSON.parse(localStorage.getItem("authenticatedUser")) || {};
    // if(authenticatedUser){
    //     welcomeMes.innerHTML = "Hello, " + authenticatedUser.name;
    // }
    

//logout button redirect to login in 

if(logOutBtn){
logOutBtn.addEventListener("click",function(){
    window.location.assign("./../Assignment_JS_4/index.html");
});}
if(signuplink){
    signuplink.addEventListener("click",()=>{

    document.location.assign("./../Assignment_JS_4/signup.html")

}) 
}
if(signinlink){
    signinlink.addEventListener("click",()=>{
        window.location.assign("./../Assignment_JS_4/index.html");
    }) 
}

if(logininbtn){
    logininbtn.addEventListener("click",()=>{
        window.location.assign("./../Assignment_JS_4/home.html");
        // document.querySelector(".welcome").innerHTML="welcome "+user_name;
    }) 
}
// function saveUserToLocalstorage(signUp) {
//     // Retrieve existing users from local storage (if any)
//     var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // Add the new userObject to the array
//     existingUsers.push(signUp);

//     // Save the updated array back to local storage
//     localStorage.setItem("users", JSON.stringify(existingUsers));

//     // Update userArr
//     accounts = existingUsers;
//  }
// function alertMsg(msg) {
//     warningBoxMsgSignout.innerHTML = msg;
//     warningBoxSignout.classList.add("display");
//     setTimeout(() => {
//       warningBoxSignout.classList.remove("display");
//       warningBoxMsgSignout.innerHTML = "";
//     }, "3000");
//   }


























// var req=new XMLHttpRequest();
// req.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza");
// req.send();
// var allDate=[];
// req.addEventListener("readystatechange",function(){
//     if(req.readyState==4){
//         allDate.JSON.parse(req.response).recipes;
//         display();
//     }
// });

// function display(){
//     var cartonna="";
//     for(var i=0;i<allDate.length;i++){
//         cartonna+=`<div class="col-md-3">
//     <img src="${allDate[i].image_url}" alt="">
//     <h3>${allDate[i].title}</h3>
//   </div>`
//     }
//     document.querySelector(".row").innerHTML=cartonna;
// }