let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

const form = document.getElementById('form')
const uname = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const message = document.getElementById('message')

function validate() {

    document.getElementById('nameError').innerText="";
    document.getElementById('emailError').innerText="";
    document.getElementById('numberError').innerText="";
    document.getElementById('messageError').innerText="";
      
    if( uname.value == "" || uname.value.length < 3) {
        if(uname.value.length<3){
            document.getElementById('nameError').innerText="Atleast 3 charecters required"; 
        }
        else{            
            document.getElementById('nameError').innerText="Provide valid name";     
        }
        uname.focus();
         return false;
    }
    if( email.value == "" ) {
        document.getElementById('emailError').innerText="Provide valid Email";
        email.focus() ;
        return false;
    }
    if( number.value == "" || number.value<1000000000 || number.value> 9999999999) {
        document.getElementById('numberError').innerText="Provide valid Number";
        number.focus();
        return false;
    }
    if( message.value == "" ) {
        document.getElementById('messageError').innerText="Message is required";
        message.focus();
        return false;
    }
    return( true );
 }