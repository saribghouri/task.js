const array = [];

const addListBtn = () => {
  const inputFeild = document.getElementById("inputFeild").value;
  array.push({
    name: inputFeild,
    id: Math.random(),
    task: [],
  });
  listDropdown();
};
const listDropdown = () => {
  const dropdown = document.getElementById("dropdown");
  array.forEach((element) => {
    const option = document.createElement("option");
    option.text = element.name;
    option.value = element.id;
    dropdown.appendChild(option);
  });
};
const addOption = () => {
  const x = document.getElementById("dropdown");
  x.innerHTML = "";
};
const SelectValue = () => {};
const addnotes = () => {
  const boxsDiv = document.getElementById("boxsDiv");

  console.log(boxsDiv)
  boxsDiv.innerHTML = "";
  const addInput = document.getElementById("addInput").value;
  const dropdown = document.getElementById("dropdown").value;
  objIndex = array.findIndex((obj) => obj.id == dropdown);

  array[objIndex].task.push(addInput);
  array.forEach((item) => {
    addvalue(item);
  });
};
const addvalue = (item) => {
  const boxsDiv = document.getElementById("boxsDiv");
  const box = document.createElement("div");
  box.id = "divv";
  box.classList.add("taskBox");
  const heading = document.createElement("h2");
  heading.classList.add("Heading");
  heading.innerHTML = item.name;
  box.appendChild(heading);
  item.task.forEach((item) => {
    const innerDiv = document.createElement("div");
    innerDiv.id = "innerDivId";
    innerDiv.classList.add("btnsDiv");
    const pera = document.createElement("p");
    const peraId = Math.random();
    pera.id = peraId;
    const donebtn = document.createElement("button");
    donebtn.innerHTML = "Task Done";
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("background-color", "black");
    deleteBtn.innerHTML = "Delete";
    pera.innerHTML = item;
    innerDiv.appendChild(pera);
    innerDiv.appendChild(donebtn);
    innerDiv.appendChild(editBtn);
    innerDiv.appendChild(deleteBtn);
    box.appendChild(innerDiv);
    boxsDiv.appendChild(box);
  });
};