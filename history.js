
const body = document.getElementById("body")
const data = JSON.parse(localStorage.getItem("newData"))
console.log(data);

const div = document.getElementById("div")

data.forEach(element => {
  const head = document.createElement("h1");
  
  head.innerHTML = `<h2>${element.name}</h2>`

// element.setAttribute( "margin-bottom: 50px;")
  body.appendChild(head)
  if(element.task.length == 0)
  {
    head.innerHTML = ``
  }
  element.task.forEach((item, index) => {
    console.log(item, 'item');
    const div1 = document.createElement("div")
    const prg = document.createElement("span")
    prg.innerHTML = item.value
    const undone = document.createElement("button")
    undone .innerHTML = "Undone"
    
        undone .addEventListener("click", function () {
          listDone(element.id, index)
        })
    const dlt = document.createElement("button")
    dlt.innerHTML = "delete"

  
    dlt .addEventListener("click", function () {
        listDelete(element, index)
      })

    div1.appendChild(prg)
    div1.appendChild(undone)       
    div1.appendChild(dlt)
    div.appendChild(div1)
  })  
});



const listDone = (id, i) => {

  console.log(id )
  let data = JSON.parse(localStorage.getItem('newData'))
  console.log("data",data)
  let newdata = JSON.parse(localStorage.getItem('data'))
  const newDataIndex = data.findIndex(x => x.id === id);
  console.log("id ==>", newDataIndex);
  console.log(id);
  const matched = newdata.findIndex(x => x.id === id)
  newdata[matched].task.push(...data[newDataIndex].task.splice(i, 1))
  console.log(matched)
  console.log(newdata)
  console.log( "adbweNB",newdata)
  localStorage.setItem('data', JSON.stringify(newdata))
  console.log(newdata);
  // data[newDataIndex].task.splice(i, 1)
  // console.log(task)
  localStorage.setItem('newData', JSON.stringify(data));
}

body.appendChild(div) 
const listDelete = (id, i) => {
  let data = JSON.parse(localStorage.getItem('newData'))
  let newdata = JSON.parse(localStorage.getItem('data'))
  const newDataIndex = data.findIndex(x => x.id === id.id);
  const matched = newdata.findIndex(x => x.id === id.id)
  newdata[matched].task.push(...data[newDataIndex].task.splice(i, 0))
  localStorage.setItem('data', JSON.stringify(newdata))
  data[newDataIndex].task.splice(i, 1)
  localStorage.setItem('newData', JSON.stringify(data));

  }