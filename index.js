// Write your code here!
// const element = document.createElement("div")
// document.body.append(element)

// const head = document.createElement("h1")
// head.textContent = "TEST"
// element.append(head)

// const textP = document.createElement("p")
// textP.textContent = "This is a paragraph"

// element.append(textP)


// let main = document.getElementById("id")
// main.innerHTML = "content"
// main.innerHTML = " <h1>content</h1> "


const element = document.getElementById("main")
element.remove()

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");   //OR the below code
//  newHeader.id = ("victory") //this is similar

newHeader.textContent = "Brian is the champion inside";

