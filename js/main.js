function createList() {

const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
    }
  ];

links.forEach(weekly => {

let li = document.createElement("li");

let a = document.createElement("a");

let textNode = document.createTextNode(weekly.label);

a.appendChild(textNode);

a.setAttribute("href", weekly.url);

li.appendChild(a);

let list = document.getElementById("activity");

list.appendChild(li);
}
)}

createList();