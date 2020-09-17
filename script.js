document.addEventListener("DOMContentLoaded", function() {

    let newDiv = document.createElement("div");
    newDiv.className = "header-container";
    
    let header = document.createElement("h1");
    let node = document.createTextNode("This is an h1");
    header.appendChild(node);
    newDiv.appendChild(header)
    document.body.appendChild(newDiv);
    
})
