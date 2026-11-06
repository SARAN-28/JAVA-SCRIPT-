const Username = document.getElementById("name")
const Userage = document.getElementById("age")
const Usercourse = document.getElementById("course")
const Container = document.getElementById("studentContainer")
const form = document.querySelector("form")

let Students = []
let editIndex = null

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const Name = Username.value.trim()
    const Age = Userage.value.trim()
    const Course = Usercourse.value.trim()

    if (Name === "" || Age === "" || Course === "") {
        alert("All fields are required")
        return
    }

    if (editIndex !== null) {
        Students[editIndex] = {
            name: Name,
            age: Age,
            course: Course
        }

        editIndex = null
        document.querySelector(".add").textContent = "Add"
    } else {
        Students.push({
            name: Name,
            age: Age,
            course: Course
        })
    }

    console.log(Students);
    

    renderStudents()

    Username.value = ""
    Userage.value = ""
    Usercourse.value = ""
})

function renderStudents() {
    Container.innerHTML = ""

    Students.forEach((student, index) => {
        const div = document.createElement("div")
        div.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>Course: ${student.course}</p>
        `

        const delbtn = document.createElement("button")
        delbtn.textContent = "Delete"

        const editbtn = document.createElement("button")
        editbtn.textContent = "Edit"

        div.appendChild(editbtn)
        div.appendChild(delbtn)
        Container.appendChild(div)

        delbtn.addEventListener("click", function () {
            Students.splice(index, 1)
            console.log(Students);
            
            renderStudents()
        })

        editbtn.addEventListener("click", function () {
            Username.value = student.name
            Userage.value = student.age
            Usercourse.value = student.course

            editIndex = index
            document.querySelector(".add").textContent = "Update"
        })
    })
}

