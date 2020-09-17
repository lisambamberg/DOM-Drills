document.addEventListener("DOMContentLoaded", function () {
    const colorArray = ["red", "orange", "yellow", "green", "blue", "violet", "purple", "gray"];
    //const button = document.getElementById("btn");

    let newDiv = document.createElement("div");
    newDiv.className = "header-container";
    let h1 = document.createElement("h1");
    let node = document.createTextNode("This is an h1");
    h1.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h1.style.color = colorArray[randomNum];
    })
    h1.appendChild(node);
    newDiv.appendChild(h1)
    document.body.appendChild(newDiv);
    h1.className = "h1";


    let h2 = document.createElement("h2");
    let nodeTwo = document.createTextNode("This is an h2");
    h2.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h2.style.color = colorArray[randomNum];
    })
    h2.appendChild(nodeTwo);
    newDiv.appendChild(h2)
    h2.className = "h2";


    let h3 = document.createElement("h3");
    let nodeThree = document.createTextNode("This is an h3");
    h3.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h3.style.color = colorArray[randomNum];
    })
    h3.appendChild(nodeThree);
    newDiv.appendChild(h3)
    h3.className = "h3";


    let h4 = document.createElement("h4");
    let nodeFour = document.createTextNode("This is an h4");
    h4.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h4.style.color = colorArray[randomNum];
    })
    h4.appendChild(nodeFour);
    newDiv.appendChild(h4)
    h4.className = "h4";


    let h5 = document.createElement("h5");
    let nodeFive = document.createTextNode("This is an h5");
    h5.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h5.style.color = colorArray[randomNum];
    })
    h5.appendChild(nodeFive);
    newDiv.appendChild(h5)
    h5.className = "h5";


    let h6 = document.createElement("h6");
    let nodeSix = document.createTextNode("This is an h6");
    h6.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * 7))
        h6.style.color = colorArray[randomNum];
    })
    h6.appendChild(nodeSix);
    newDiv.appendChild(h6)
    h6.className = "h6";
})

