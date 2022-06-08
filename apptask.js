
const body = document.getElementById("body")
const data = JSON.parse(localStorage.getItem("newData"))
console.log(data);

const div = document.createElement("div")

data.forEach(element => {
  const head = document.createElement("h1");
  head.innerHTML = `<h2>${element.name}</h2>`
  body.appendChild(head)
  element.task.forEach((item, index) => {
    console.log(item, 'item');
    const div1 = document.createElement("div")
    const prg = document.createElement("span")
    prg.innerHTML = item.value
    const dlt = document.createElement("button")
    dlt.innerHTML = "Delete"
    dlt.addEventListener("click", function () {
      listDelete(element, index)
    })
    div1.appendChild(prg)
    div1.appendChild(dlt)
    div.appendChild(div1)
  })
});

const listDelete = (id, i) => {
  let data = JSON.parse(localStorage.getItem('newData'))
  let newdata = JSON.parse(localStorage.getItem('data'))
  const newDataIndex = data.findIndex(x => x.id === id.id)
  const matched = newdata.findIndex(x => x.id === id.id)
  newdata[matched].task.push(...data[newDataIndex].task.splice(i, 1))
  localStorage.setItem('data', JSON.stringify(newdata))
  console.log(newdata);
  data[newDataIndex].task.splice(i, 1)
  localStorage.setItem('newData', JSON.stringify(data));
}

body.appendChild(div) 