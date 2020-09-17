document.addEventListener("DOMContentLoaded", function () {
    const colorArray = ["red", "orange", "yellow", "green", "blue", "violet", "purple", "gray"];
    //const button = document.getElementById("btn");

    let newDiv = document.createElement("div");
    newDiv.classList.add("header-container");
    let h1 = document.createElement("h1");
    let node = document.createTextNode("This is an h1");
    h1.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h1.style.color = colorArray[randomNum];
    })
    h1.appendChild(node);
    newDiv.appendChild(h1)
    document.body.appendChild(newDiv);
    h1.classList.add("h1");


    let h2 = document.createElement("h2");
    let nodeTwo = document.createTextNode("This is an h2");
    h2.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h2.style.color = colorArray[randomNum];
    })
    h2.appendChild(nodeTwo);
    newDiv.appendChild(h2)
    h2.classList.add("h2");


    let h3 = document.createElement("h3");
    let nodeThree = document.createTextNode("This is an h3");
    h3.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h3.style.color = colorArray[randomNum];
    })
    h3.appendChild(nodeThree);
    newDiv.appendChild(h3)
    h3.classList.add("h3");


    let h4 = document.createElement("h4");
    let nodeFour = document.createTextNode("This is an h4");
    h4.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h4.style.color = colorArray[randomNum];
    })
    h4.appendChild(nodeFour);
    newDiv.appendChild(h4)
    h4.classList.add("h4");


    let h5 = document.createElement("h5");
    let nodeFive = document.createTextNode("This is an h5");
    h5.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h5.style.color = colorArray[randomNum];
    })
    h5.appendChild(nodeFive);
    newDiv.appendChild(h5)
    h5.classList.add("h5");


    let h6 = document.createElement("h6");
    let nodeSix = document.createTextNode("This is an h6");
    h6.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h6.style.color = colorArray[randomNum];
    })
    h6.appendChild(nodeSix);
    newDiv.appendChild(h6)
    h6.classList.add("h6");
})



// //step 11
// function insertList () {
//     let liNode = document.createElement("LI");    
//     var textNode = document.createTextNode(`Thi.s is list item ${1}`);
//     liNode.appendChild(textNode);
//    //number incremented by 1
// }

// //step 12
// document.getElementById("btn").addEventListener("click", function () {
//     insertList();
// }) 

//step 13
//Using the same random color function created above, apply an event listener that when a list item is clicked once, 
//it changes the color of the font to one fo the 8 random colors.



//step 14
// function removeListItem (element) {
//     element.addEventListner("dblclick", function () {
//        document.body.removeChild(element);
//     });
// }
//removeListItem(listitem);