const toDoForm =document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const todobox = document.querySelector(".todobox");
const todoCount=document.querySelector(".todocount");
const allclear = document.querySelector(".allclear");
let Todos=[];

toDoForm.addEventListener("submit", addToDo);


function clear(event){ //모두 없애는 함수
    while(todobox.hasChildNodes()){
        todobox.removeChild(todobox.firstChild);
    }
    todoCount.innerText=` 할 일:0개`
}

function addLine (event) // xircle누르면 완료 표시 
{
    const li = event.target.parentElement;
    let circle =li.querySelector('img');
    let div = li.querySelector('div');
    console.log(li);
    if (circle.getAttribute('src') == "circle.png")
    {
        console.log(circle.getAttribute('src'));
        circle.src="check.png";
        div.style.textDecoration = "line-through";
        div.style.textDecorationColor = "black";
        div.style.color="#606060"
    }   
    else {
         circle.src="circle.png";
         div.style.textDecoration = "";
         div.style.color="black";
    }
}

function deleteToDo(event){ // x버튼 누르면 삭제
    const li =event.target.parentElement;
    li.remove();

    const count = document.querySelectorAll("li").length;
    todoCount.innerText=` 할 일:${count}개`
}

function addToDo(event){
    event.preventDefault();
    const li = document.createElement("li");
    const div = document.createElement("div");
    const circle = document.createElement("img");
    const btn_x = document.createElement("button");
    const count = document.querySelectorAll("li").length+1;
    const newToDo = toDoInput.value;
    ㅣ

    if (newToDo =="")
    {
        alert("내용을 입력하세요")
    }

    else {
        div.innerText=newToDo;
        circle.src="circle.png";
        btn_x.innerText="X";
        li.className="todoli"
        li.appendChild(circle);
        li.appendChild(div);
        li.appendChild(btn_x);
        todobox.appendChild(li);
        toDoInput.value="";
        todoCount.innerText=` 할 일:${count}개`

    }

    circle.addEventListener("click",addLine);
    btn_x.addEventListener("click",deleteToDo);
    allclear.addEventListener("click",clear);

}