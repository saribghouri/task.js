const body = document.getElementById("body");
const data = JSON.parse(localStorage.getItem("newData"));

const div = document.createElement("div");
div.setAttribute("id", "maindiv");
const div1 = document.createElement("div");
div1.setAttribute("id", "divindiv");
data.forEach((element, index) => {
  const head = document.createElement("h1");
  head.setAttribute("id", "head");

  head.innerHTML = index + 1 + `<h2> ${element.name}</h2>`;
  div1.appendChild(head);
  div.appendChild(div1);
  if (element.task.length == 0) {
    head.innerHTML = ``;
  }
  element.task.forEach((item, index) => {
    const div2 = document.createElement("div");

    div2.setAttribute("id", "valuediv");

    const prg = document.createElement("span");
    prg.innerHTML = item.value;
    const undone = document.createElement("button");
    undone.innerHTML = "Undone";

    undone.addEventListener("click", () => {
      listDone(element.id, index);
    });
    const dlt = document.createElement("button");
    dlt.innerHTML = "delete";

    dlt.addEventListener("click", () => {
      listDelete(element, index);
    });

    div2.appendChild(prg);
    div2.appendChild(undone);
    div2.appendChild(dlt);
    div.appendChild(div2);
    div1.appendChild(div2);
  });
});

const listDone = (id, i) => {
  console.log(id);
  let data = JSON.parse(localStorage.getItem("newData"));
  let newdata = JSON.parse(localStorage.getItem("data"));
  const newDataIndex = data.findIndex((x) => x.id === id);
  const matched = newdata.findIndex((x) => x.id === id);
  newdata[matched].task.push(...data[newDataIndex].task.splice(i, 1));
  localStorage.setItem("data", JSON.stringify(newdata));
  localStorage.setItem("newData", JSON.stringify(data));
};

body.appendChild(div);
const listDelete = (id, i) => {
  let data = JSON.parse(localStorage.getItem("newData"));
  let newdata = JSON.parse(localStorage.getItem("data"));
  const newDataIndex = data.findIndex((x) => x.id === id.id);
  const matched = newdata.findIndex((x) => x.id === id.id);
  newdata[matched].task.push(...data[newDataIndex].task.splice(i, 0));
  localStorage.setItem("data", JSON.stringify(newdata));
  data[newDataIndex].task.splice(i, 1);
  localStorage.setItem("newData", JSON.stringify(data));
};
