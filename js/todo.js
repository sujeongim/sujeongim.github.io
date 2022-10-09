const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY ="todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify : 어떤 데이터 형태라도 string으로 바꿔줌, JSON.parse : string을 다시 데이터 형태로 바꿔줌
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id)); // 조건문에 false인 item만 제외하고 남은 list를 리턴해준다.
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    const button = document.createElement("button");
    button.innerText = "Dlete";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // li 안에 span을 집어넣음
    li.appendChild(button); 
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    saveToDos();
    paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // 리스트의 각 원소에 대해 함수 실행. python의 map 같은 느낌
    // parsedToDo.forEach((item) => console.log("This is the turn of ", item)); -> 이렇게 바로 함수 써줄 수도 있음
}