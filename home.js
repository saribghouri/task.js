const array = JSON.parse(localStorage.getItem("data")) || [];
console.log("javascript", array);
array.forEach((item) => {
  addvalue(item);
});

const add = () => {
  let txtText1 = document.getElementById("text").value;

  if (!txtText1.trim().length > 0) {
    return;
  }
  array.push({
    name: txtText1,
    id: Math.random(),
    task: [],
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

getSelectValue();
const addOption = () => {
  const dropdown = document.getElementById("dropdown");
  // const btn = document.getElementById("addbtn")
  dropdown.innerHTML = "";
};
const addtask = () => {
  const taskDiv = document.getElementById("taskDiv");

  taskDiv.innerHTML = "";
  const Input = document.getElementById("addInput").value;
  const selector = document.getElementById("dropdown").value;
  if (Input.replace(/\s/g, "").length > 0) {
    objIndex = array.findIndex((obj) => obj.id == selector);

    const obj = {
      value: Input,
      id: Math.random(),
    };

    array[objIndex].task.push(obj);
    localStorage.setItem("data", JSON.stringify(array));
  }
  array.forEach((item) => {
    addvalue(item);
  });
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
  let btn = document.createElement("button");
  box.appendChild(btn);
  btn.innerHTML = "delete";
  btn.onclick = function () {
    update(item.id);
  };

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
      listDone(item, i);
    });
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";

    editBtn.addEventListener("click", function () {
      listEdit(value, item.id);
    });

    const listEdit = (item, objIndex, ind) => {
      let data = JSON.parse(localStorage.getItem("data"));
      if (editBtn.innerHTML === "Edit") {
        const inputField = document.createElement("input");
        localStorage.setItem("data", JSON.stringify(data));
        inputField.id = "inputID";
        inputField.value = PRG.innerHTML;
        innerDiv.appendChild(inputField);
        editBtn.innerHTML = "Save";
      } else {
        editBtn.innerHTML == "Save";
        editBtn.addEventListener("change", updateValue(item, objIndex, ind));
      }
    };
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("background-color", "black");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function () {
      listDelete(item, i);
    });
    PRG.innerHTML = value.value;
    innerDiv.appendChild(PRG);
    innerDiv.appendChild(donebtn);
    innerDiv.appendChild(editBtn);
    innerDiv.appendChild(deleteBtn);
    box.appendChild(innerDiv);
    boxsDiv.appendChild(box);
  });
}

const listDelete = (id, i) => {
  let data = JSON.parse(localStorage.getItem("data"));
  const newDataIndex = data.findIndex((x) => x.id === id.id);
  data[newDataIndex].task.splice(i, 1);
  localStorage.setItem("data", JSON.stringify(data));
  document.getElementById("taskDiv").innerHTML = "";
  data.forEach((item, id) => {
    addvalue(item, id);
  });
};
function update(id, i, ind) {
  let data = JSON.parse(localStorage.getItem("data"));
  const newDataIndex = data.findIndex((x) => x.id === id);
  data[newDataIndex].task = [];
  localStorage.setItem("data", JSON.stringify(data));
  document.getElementById("taskDiv").innerHTML = "";
  document.getElementById("text").value = "";
  document.getElementById("addInput").value = "";
  array = JSON.parse(localStorage.getItem("data"));
  data.forEach((item, id) => {
    addvalue(item, id);
  });
}

const updateValue = (id, i) => {
  const inputField = document.getElementById("inputID").value;
  let data = JSON.parse(localStorage.getItem("data"));
  const newDataIndex = data.findIndex((x) => x.id === i);
  const taskIndex = data[newDataIndex].task.findIndex((x) => x.id === id.id);
  data[newDataIndex].task[taskIndex].value = inputField;
  localStorage.setItem("data", JSON.stringify(data));
  document.getElementById("taskDiv").innerHTML = "";
  data.forEach((item, id) => {
    addvalue(item, id);
  });
};

const listDone = (item, i) => {
  let data = JSON.parse(localStorage.getItem("data"));
  let newData = JSON.parse(localStorage.getItem("newData"));
  if (newData) {
    const alreadyExist = newData.find((x) => x.id === item.id);
    const doneTask = data.find((x) => x.id === item.id).task[i];
    if (alreadyExist) {
      alreadyExist.task.push(doneTask);
      localStorage.setItem("newData", JSON.stringify(newData));
    } else {
      const doneTask = data.find((x) => x.id === item.id).task[i];
      item.task = [doneTask];
      newData.push(item);
      localStorage.setItem("newData", JSON.stringify(newData));
    }
  } else {
    const doneTask = data.find((x) => x.id === item.id).task[i];
    item.task = [doneTask];
    localStorage.setItem("newData", JSON.stringify([item]));
  }
  listDelete(item, i);
  window.location.href = "history.html";
};
