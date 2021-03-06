document.addEventListener("DOMContentLoaded", function () {
    const colorArray = ["red", "orange", "yellow", "green", "blue", "violet", "purple", "gray"];
    let liNumber = 1;
    const button = document.getElementsByClassName("btn");
    button[0].addEventListener("click", createNewListItem);

    let newDiv = document.createElement("div");
    newDiv.classList.add("header-container");
    let h1 = document.createElement("h1");
    let node = document.createTextNode("This is an h1");
    h1.addEventListener("dblclick", function () {
        changeFontColor(h1);
    })
    h1.appendChild(node);
    newDiv.appendChild(h1)
    document.body.appendChild(newDiv);
    h1.classList.add("h1");

    let h2 = document.createElement("h2");
    let nodeTwo = document.createTextNode("This is an h2");
    h2.addEventListener("dblclick", function () {
        changeFontColor(h2);
    })
    h2.appendChild(nodeTwo);
    newDiv.appendChild(h2)
    h2.classList.add("h2");


    let h3 = document.createElement("h3");
    let nodeThree = document.createTextNode("This is an h3");
    h3.addEventListener("dblclick", function () {
        changeFontColor(h3);
    })
    h3.appendChild(nodeThree);
    newDiv.appendChild(h3)
    h3.classList.add("h3");


    let h4 = document.createElement("h4");
    let nodeFour = document.createTextNode("This is an h4");
    h4.addEventListener("dblclick", function () {
        changeFontColor(h4);
    })
    h4.appendChild(nodeFour);
    newDiv.appendChild(h4)
    h4.classList.add("h4");


    let h5 = document.createElement("h5");
    let nodeFive = document.createTextNode("This is an h5");
    h5.addEventListener("dblclick", function () {
        changeFontColor(h5);
    })
    h5.appendChild(nodeFive);
    newDiv.appendChild(h5)
    h5.classList.add("h5");


    let h6 = document.createElement("h6");
    let nodeSix = document.createTextNode("This is an h6");
    h6.addEventListener("dblclick", function () {
        changeFontColor(h6);
    })
    h6.appendChild(nodeSix);
    newDiv.appendChild(h6)
    h6.classList.add("h6");

    function createNewListItem() {
        let li = document.createElement("li");
        let liTextNode = document.createTextNode("This is a list item" + liNumber)
        li.addEventListener("click", function () {
            changeFontColor(li)
        });
        li.addEventListener("dblclick", function () {
            document.body.removeChild(li);
        })
        li.appendChild(liTextNode);
        document.body.appendChild(li);
        liNumber++;
    }

    function changeFontColor(element) {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        element.style.color = colorArray[randomNum];
    }
})

