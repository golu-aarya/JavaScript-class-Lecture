// const h1 = document.getElementsByTagName('h1');
// console.log(h1)

// h1[0].style.textAlign = 'center'
// h1[0].style.color = 'green'
// h1[0].style.backgroundColor = 'yellow' 

const events = [
    "javascript",
    "python",
   "html",
   "css",
   "rect",
   "jeson"
]

const eventList = document.getElementById("eventList")
const element1 = document.createElement("li")

// element1.innerText = events[0]
// eventList.appendChild(element1)

events.forEach(event => {
    const element = document.createElement("li")
    element.innerText = event
    // console.log(element)

    eventList.appendChild(element)
})