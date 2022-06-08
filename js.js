let users = JSON.parse(localStorage.getItem("contects"));

const tb = document.getElementById("table");

let row1 = document.createElement("tr");

let heading1 = document.createElement("th");
let heading2 = document.createElement("th");
let heading3 = document.createElement("th");
let heading4 = document.createElement("th");
let heading5 = document.createElement("th");
let heading6 = document.createElement("th");
let heading7 = document.createElement("th");

(heading1.innerText = "INDEX"),
  (heading2.innerText = "FIRSTNAME"),
  (heading3.innerText = "LASTNAME"),
  (heading4.innerText = "EMAIL"),
  (heading5.innerText = "PHONENUMBER"),
  (heading6.innerText = "ADDRESS"),
  (heading7.innerText = "ACTION"),
  row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
row1.appendChild(heading4);
row1.appendChild(heading5);
row1.appendChild(heading6);
row1.appendChild(heading7);

tb.appendChild(row1);

users.forEach((item, index) => {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");

  let btn = document.createElement("button");
  btn.innerHTML = "adit";
  btn.onclick= function(){
 aditVlaue(index,item)
//  addEventListener(index,item)
  }
  let btn1 = document.createElement("button");
  btn1.innerHTML = "delete";
  btn1.onclick = function () {
    deleteContect(index);
    EventTarget()
  };

  td7.appendChild(btn);
  td7.appendChild(btn1);
  (td1.innerText = index),
    td2.innerText = item.firstName,
    td3.innerText = item.LastName,
    td4.innerText = item.emailValue,
    td5.innerText = item.PhoneNumber,
    td6.innerText = item.address,
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  tb.appendChild(trow);
  
  function deleteContect(index) {
    location.reload()
    const data = JSON.parse(localStorage.getItem("contects"));
    data.splice(index, 1);
    localStorage.setItem("contects", JSON.stringify(data))
    console.log(index);
  }
  
  function aditVlaue(index,item){
  seletedRow =item.parentElement;
  document.getElementById("fname").value=seletedRow.td2[index].innerHTML;
  document.getElementById("lname").value=seletedRow.td3[1].innerHTML;
  document.getElementById("emailValue").value=seletedRow.td4[2].innerHTML;
  document.getElementById("PhoneNumber").value=seletedRow.td5[3].innerHTML;
  document.getElementById("EnterText").value=seletedRow.td6[4].innerHTML;
  // const data = JSON.parse(localStorage.getItem("contects"));
  
  console.log(index,item)
  
  
  };

  // deleteContect(index);
});  











































let array = JSON.parse(localStorage.getItem("data")) || [];
console.log('react', array)
array.forEach((item) => {
  addvalue(item);
})

function Add() {
  let txtText1 = document.getElementById("text").value;
  if (!txtText1.trim().length > 0) {
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
  if (Input.replace(/\s/g, '').length > 0) {
    objIndex = array.findIndex((obj) => obj.id == selector);


    const obj = {
      value: Input,
      id: Math.random()
    }

    array[objIndex].task.push(obj);
    localStorage.setItem("data", JSON.stringify(array));
  }
  array.forEach((item, i) => {
    addvalue(item, objIndex, i);


  })

};

function addvalue(item, objIndex, ind) {
  const boxsDiv = document.getElementById("taskDiv");
  const box = document.createElement("div");
  box.id = "div";
  box.classList.add("taskBox");
  const heading = document.createElement("h1");
  heading.classList.add("Heading");
  heading.innerHTML = item.name;
  box.appendChild(heading);
  let btn = document.createElement("button");
  box.appendChild(btn);
  btn.innerHTML = "delete";
  btn.onclick = function () {
    update(item.id);
  };
console.log(item,"item.task")
  item.task.forEach((value, i) => {

    const innerDiv = document.createElement("div");
    innerDiv.id = "innerDivId";
    innerDiv.classList.add("btnsDiv");
    const PRG = document.createElement("p");
    const PRGid = Math.random();
    PRG.id = PRGid;
    const donebtn = document.createElement("button");
    donebtn.innerHTML = "Task Done";
    donebtn.addEventListener("click", function () {
      listDone(item, i)
    })
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    // console.log(item.id,"hahahaha");
    // console.log(item.id, 'hoooo')
    editBtn.addEventListener("click", function () {
      listEdit(value, item.id)

    })

    const listEdit = (item, objIndex, ind) => {

      let data = JSON.parse(localStorage.getItem('data'))
      if (editBtn.innerHTML === "Edit") {

        const inputField = document.createElement('input')
        localStorage.setItem('data', JSON.stringify(data))
        inputField.id = "inputID"
        inputField.value = PRG.innerHTML
        innerDiv.appendChild(inputField)
        editBtn.innerHTML = "Save"
      } else {
        editBtn.innerHTML == "Save"
        editBtn.addEventListener("change", updateValue(item, objIndex, ind))
      }
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("background-color", "black");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function () {
      listDelete(item, i)
    })
    PRG.innerHTML = value.value;
    innerDiv.appendChild(PRG);
    innerDiv.appendChild(donebtn);
    innerDiv.appendChild(editBtn);
    innerDiv.appendChild(deleteBtn);
    box.appendChild(innerDiv);
    boxsDiv.appendChild(box);
  });
};

const listDelete = (id, i) => {
  let data = JSON.parse(localStorage.getItem('data'))
  const newDataIndex = data.findIndex(x => x.id === id.id)
  data[newDataIndex].task.splice(i, 1)
  localStorage.setItem('data', JSON.stringify(data));
  document.getElementById("taskDiv").innerHTML = "";
  data.forEach((item, id) => {
    addvalue(item, id)

  })
}
function update(id, i, ind) {
  let data = JSON.parse(localStorage.getItem('data'))
  const newDataIndex = data.findIndex(x => x.id === id)
  data[newDataIndex].task = []
  localStorage.setItem('data', JSON.stringify(data))
  document.getElementById("taskDiv").innerHTML = "";
  document.getElementById("text").value = "";
  document.getElementById("addInput").value = "";
  array = JSON.parse(localStorage.getItem('data'))
  data.forEach((item, id) => {
    addvalue(item, id)

  })
}

const updateValue = (id, i) => {
  const inputField = document.getElementById("inputID").value
  let data = JSON.parse(localStorage.getItem('data'))
  const newDataIndex = data.findIndex(x => x.id === i)
  const taskIndex = data[newDataIndex].task.findIndex(x => x.id === id.id)
  data[newDataIndex].task[taskIndex].value = inputField
  localStorage.setItem('data', JSON.stringify(data))
  document.getElementById("taskDiv").innerHTML = "";
  data.forEach((item, id) => {
    addvalue(item, id)

  })
}

const listDone = (id, i) => {

  
}