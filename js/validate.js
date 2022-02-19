const uname = document.querySelector('#name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const message = document.querySelector('#message');
const submitbtn = document.querySelector('#submit');

const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const numberError = document.querySelector('#numberError');
const messageError = document.querySelector('#messageError');

const submitBox = document.querySelector('#submitted');

let validate = [];

const regname=/^[a-zA-Z][a-zA-Z][a-zA-Z ]*$/;
const regmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitbtn.addEventListener('click', ()=> {
    if(uname.value == ""){
        nameError.textContent = "Provide your name";
    }
    if(email.value == ""){
        emailError.textContent = "Provide your email";
    }
    if(number.value ==""){
        numberError.textContent = "Provide your Number";
    }
    if(message.value == ""){
        messageError.textContent = "Provide a Message";
    }
})

uname.addEventListener('focusout',() => {
    if(uname.value == ""){
        nameError.textContent = "Provide your name";
    }
    else if(uname.value.match(regname) != uname.value){
        nameError.textContent = "Provide a proper name";
    }
    else{
        nameError.textContent = "";
        validate[0]=1;
    }
})

email.addEventListener('focusout',() => {
    if(email.value == ""){
        emailError.textContent = "Provide your email";
    }
    else if(email.value.match(regmail) != email.value){
        emailError.textContent = "Provide a proper Email";
    }
    else{
        emailError.textContent = "";
        validate[1]=1;
    }

})


number.addEventListener('focusout', () => {
    if(number.value ==""){
        numberError.textContent = "Provide your Number";
    }
    else if(number.value.length<9 || number.value.length >12){
        numberError.textContent = "provide a proper Number";
    }
    else{
        numberError.textContent = "";
        validate[2]=1;
    }
})

message.addEventListener('focusout', () => {
    if(message.value == ""){
        messageError.textContent = "Provide a Message";
    }
    else if (message.value.length<3){
        messageError.textContent = "Atleast 3 charecters required";
    }
    else{
        messageError.textContent = "";
        validate[3]=1;
    }
})


$("#submit-form").submit((e)=>{
    let sum = validate.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log("in ajax");
    console.log(sum);
    e.preventDefault()
    if(sum == 4){
        sum=0;
        validate = [0,0,0,0];
        document.getElementById('submitted').innerText="Submitting...";
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwIPCMeMOv5f-JmgDn6GVyTuP9UOxgAuuxc0djC/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                document.getElementById('submitted').innerText="Submitted succesfully";

                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value  = "";
                document.getElementById('number').value  = "";

                setTimeout(() => {
                    document.getElementById('submitted').innerText="";
                },3000);
                
            },
        error:function (err){
            document.getElementById('submitted').innerText="Some Error occured";

        }
    }) 
    }
    // else{
    //     document.getElementById('submitted').innerText="";
    // }
    
})