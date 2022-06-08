const array = [];

const addListBtn = () => {
    const inputFeild = document.getElementById("inputFeild")




    if (inputFeild.value.trim().length > 0) {
        array.push({
            name: inputFeild.value,
            id: Math.random(),
            task: []

        })

    } else {
        alert("Error!")
    }

    inputFeild.value = "";


    deletList()
    listDropdown()
}


const listDropdown = () => {

    const dropdown = document.getElementById("dropdown")
    array.forEach((element) => {
        const option = document.createElement("option")
        option.text = element.name
        option.value = element.id
        dropdown.appendChild(option)
    })
}

const deletList = () => {
    const x = document.getElementById("dropdown");
    x.innerHTML = ""

}


const addTask = () => {
    const boxsDiv = document.getElementById("boxsDiv")
    boxsDiv.innerHTML = ""
    const addInput = document.getElementById("addInput")
    if (addInput.value.trim().length > 0) {
        const dropdown = document.getElementById("dropdown").value
        const objIndex = array.findIndex((obj => obj.id == dropdown));
        array[objIndex].task.push(addInput.value)
        addInput.value = ""
    } else {
        alert('Error!')
    }

    array.forEach((item, i) => {
        addItem(item, objIndex, i)

    })
}

const addItem = (item, objIndex, ind) => {
    const selectValue = document.getElementById("dropdown").value
    const boxsDiv = document.getElementById("boxsDiv")
    const box = document.createElement('div')
    box.id = "divv";
    box.classList.add("divBox");
    const heading = document.createElement('h2')
    heading.classList.add("Heading")
    heading.innerHTML = item.name
    box.appendChild(heading)
    item.task.forEach((item, i) => {
        const addInput = document.getElementById("addInput")


        const innerDiv = document.createElement('div')
        const innerDivId = Math.random()
        innerDiv.id = "innerDivId"
        innerDiv.classList.add("btnsDiv")
        const pera = document.createElement('p')
        const peraId = Math.random()
        pera.id = "peraId"
        const taskCompelete = document.createElement('button')
        taskCompelete.innerHTML = "Task Done"
        const editBtn = document.createElement('button')
        const editid = Math.random()
        editBtn.id = "editid"
        editBtn.innerHTML = "Edit"

        editBtn.addEventListener("click", function () {
            listEdit(item, i, ind)


        })
        const listEdit = (item, i, ind) => {
            console.log("array[ind]", array[ind])

            if (editBtn.innerHTML === "Edit") {
                const inputField = document.createElement('input')
                inputField.id = "inputID"
                inputField.value = pera.innerHTML
                innerDiv.appendChild(inputField)
                editBtn.innerHTML = "Save"


            } else {
                editBtn.innerHTML == "Save"
                editBtn.addEventListener("change", updateValue(item, i, ind))

            }



            console.log("pera", pera);
        }
        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = "Delete"
        deleteBtn.addEventListener("click", function () {
            listDelete(item, i, ind)


        })

        pera.innerHTML = item
        innerDiv.appendChild(pera)
        innerDiv.appendChild(taskCompelete)
        innerDiv.appendChild(editBtn)
        innerDiv.appendChild(deleteBtn)
        box.appendChild(innerDiv)
        boxsDiv.appendChild(box)
    })

}
const listDelete = (item, i, ind) => {
    console.log("array[ind]", array[ind])

    array[ind].task.splice(i, 1)
    console.log(array, "arry")

    const boxsDiv = document.getElementById("boxsDiv")
    boxsDiv.innerHTML = ""

    array.forEach((item, i) => {
        addItem(item, objIndex, i)

    })



}


const updateValue = (item, i, ind) => {
    const inputField = document.getElementById("inputID").value


    array[ind].task.splice(i, 1, inputField)
    console.log("arrayhiiji", array);
    const boxsDiv = document.getElementById("boxsDiv")
    boxsDiv.innerHTML = ""
    array.forEach((item, i) => {
        addItem(item, objIndex, i)

    })


}