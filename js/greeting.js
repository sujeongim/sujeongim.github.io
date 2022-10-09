const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
// function handleButtonClick(){
//     const username = loginInput.value;
//     if (username === "") {
//         alert("Please write your name");
//     } else if(username.length > 15 ){ // string 길이 
//         alert("Your name is too long.")
//     } else{
//         console.dir("hello", loginInput.value);
//     }   
// } // 함수 대신에 html의 form 기능 사용하기!

// function handleButtonClick(){
//     const username = loginInput.value;
//     console.log(username);
// }
// loginButton.addEventListener("click", handleButtonClick)
// form은 버튼이나 엔터를 누르면 자동으로 submit됨. 따라서 버튼 클릭여부 말고 submit을 했는지를 인식해야 함

function onLoginSubmit(eventinfo){ // info : event에 대한 정보가 자동으로 넘어감
    eventinfo.preventDefault(); // Event에 default로 존재하는 Behavior을 하지 않도록 함
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; // string formating. 윗줄과 동일한 기능을 하는 코드. '' / "" 안됨. 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

function PaintGreetings(savedUserName){
    greeting.innerText = `Hello ${savedUserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    PaintGreetings(savedUserName);
}