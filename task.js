const array = JSON.parse(localStorage.getItem("data")) || [];
array.forEach((item) => {


  addvalue(item);
})


function Add() {
  let txtText1 = document.getElementById("text").value;
  if (!txtText1) {
    return
  }
  array.push({
    name: txtText1,
    id: Math.random(),
    task: []


  });

  addOption();
  getSelectValue();
  localStorage.setItem("data", JSON.stringify(array));
};

const getSelectValue = () => {
  let select = document.getElementById("dropdown");
  // let data= JSON.parse(localStorage.getItem("data"));
  // JSON.parse(localStorage.getItem("data"));
  // console.log("data",data) 
  array.forEach((e) => {
    let selector = document.createElement("option");
    let txtText1 = document.getElementById("text").value;

    selector.innerHTML = txtText1;
    selector.text = e.name;
    selector.value = e.id;
    select.append(selector);

  });
};

getSelectValue()
const addOption = () => {
  const dropdown = document.getElementById("dropdown");
  const btn = document.getElementById("addbtn")

  dropdown.innerHTML = "";
};
const addtask = () => {
  const taskDiv = document.getElementById("taskDiv");

  taskDiv.innerHTML = "";
  const Input = document.getElementById("addInput").value;
  const selector = document.getElementById("dropdown").value;
  console.log()
  if (Input.replace(/\s/g, '').length > 0) {
    objIndex = array.findIndex((obj) => obj.id == selector);
    // location.reload()

    const obj = {
      value: Input,
    }
    array[objIndex].task.push(obj);
    localStorage.setItem("data", JSON.stringify(array));
  }
  array.forEach((item) => {
    addvalue(item);


  })

};

function addvalue(item) {
  const boxsDiv = document.getElementById("taskDiv");
  const box = document.createElement("div");
  box.id = "div";
  box.classList.add("taskBox");
  const heading = document.createElement("h1");
  heading.classList.add("Heading");
  heading.innerHTML = item.name;
  box.appendChild(heading);
  // const boxsDiv1= document.getElementById("taskDiv");
  let btn = document.createElement("button");
  box.appendChild(btn);
  btn.innerHTML = "delete";
  btn.onclick = function (item) {
    update(item.id);
    // EventTarget()
  };
  item.task.forEach((item) => {
    const innerDiv = document.createElement("div");

    innerDiv.id = "innerDivId";
    innerDiv.classList.add("btnsDiv");
    const PRG = document.createElement("p");
    const PRGid = Math.random();
    PRG.id = PRGid;

    const donebtn = document.createElement("button");
    donebtn.innerHTML = "Task Done";
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("background-color", "black");
    deleteBtn.innerHTML = "Delete";
    PRG.innerHTML = item.value;
    innerDiv.appendChild(PRG);
    innerDiv.appendChild(donebtn);
    innerDiv.appendChild(editBtn);
    innerDiv.appendChild(deleteBtn);
    box.appendChild(innerDiv);
    boxsDiv.appendChild(box);
  });
};




function update(id) {

  const data = JSON.parse(localStorage.getItem("data"));
  const result = data.filter((item) => item.id !== id);
  localStorage.setItem("data", JSON.stringify(result))
  console.log(result);
}
