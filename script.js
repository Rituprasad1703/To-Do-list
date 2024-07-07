const inputBox=document.getElementById("ip-box");
const listContainer=document.getElementById("task-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let newli=document.createElement("li");
        newli.innerHTML=inputBox.value;
        listContainer.append(newli);
        let sp=document.createElement("span");
        sp.innerHTML="\u00d7";
        newli.appendChild(sp);
    }
    inputBox.value="";
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();