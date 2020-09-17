document.addEventListener("DOMContentLoaded", function () {
    let newDiv = document.createElement("div");
    newDiv.className = "header-container";
    let headerOne = document.createElement("h1");
    let node = document.createTextNode("This is an h1");
    headerOne.appendChild(node);
    newDiv.appendChild(headerOne)
    document.body.appendChild(newDiv);
    headerOne.className = "h1";

    let headerTwo = document.createElement("h2");
    let nodeTwo = document.createTextNode("This is an h2");
    headerTwo.appendChild(nodeTwo);
    newDiv.appendChild(headerTwo)
    headerTwo.className = "h2";

    let headerThree = document.createElement("h3");
    let nodeThree = document.createTextNode("This is an h3");
    headerThree.appendChild(nodeThree);
    newDiv.appendChild(headerThree)
    headerThree.className = "h3";

    let headerFour = document.createElement("h4");
    let nodeFour = document.createTextNode("This is an h4");
    headerFour.appendChild(nodeFour);
    newDiv.appendChild(headerFour)
    headerFour.className = "h4";

    let headerFive = document.createElement("h5");
    let nodeFive = document.createTextNode("This is an h5");
    headerFive.appendChild(nodeFive);
    newDiv.appendChild(headerFive)
    headerFive.className = "h5";

    let headerSix = document.createElement("h6");
    let nodeSix = document.createTextNode("This is an h6");
    headerSix.appendChild(nodeSix);
    newDiv.appendChild(headerSix)
    headerSix.className = "h6";
})
