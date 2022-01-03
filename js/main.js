/************************************/
/**** Dynamic Table of Contents ****/
/**********************************/

function createList() {

    // Weekly list of links
    const links = [
        {
            label: "Week 1 Notes",
            url: "week1/index.html"
        },
        {
            label: "Week 2 Notes",
            url: "week2/index.html"
        }
    ];

        //  For each of the items in the array of links
        links.forEach(weekly => {
        
        // Create an li element
        let li = document.createElement("li");

        // Create an anchor element
        let a = document.createElement("a");

        // Create the text node 
        let textNode = document.createTextNode(weekly.label);
        
        // Append the text node to anchor element
        a.appendChild(textNode);

        // Set the href attribute
        a.setAttribute("href", weekly.url);
    
        // Append the anchor element to li element
        li.appendChild(a);
        
        // Select the ol element from index.html
        let list = document.getElementById("activity");
        
        // Append the li element to the list
        list.appendChild(li);
        }
        )}

// Run the function
createList();