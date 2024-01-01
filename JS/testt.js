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
var pass_regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
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
user_name.addEventListener("blur",()=>{
    check(user_name,name_regex);

});
user_email.addEventListener("blur",()=>{
    check(user_email,email_regex);

});
user_password.addEventListener("blur",()=>{
    check(user_password,pass_regex);

});

// function addAcount(){
// function addAcount(name,email,pass)
window.onload=function(){
    signupfun();
    // logninfunc();
    }
    function signupfun(){
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

                
                    window.open("./../Assignment_JS_4/home.html");
                }
                

        }}); 
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

// if(logininbtn){
//     logininbtn.addEventListener("click",()=>{
//         window.location.assign("./../Assignment_JS_4/home.html");
//         // document.querySelector(".welcome").innerHTML="welcome "+user_name;
//     }) 
// }








