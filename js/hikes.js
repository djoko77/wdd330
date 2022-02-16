import ls7 from './ls7';


// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.

//create an array of hikes
const hikeList = [
  {
  name: "Bechler Falls",
  imgSrc: "falls.jpg",
  imgAlt: "Image of Bechler Falls",
  distance: "3 miles",
  difficulty: "Easy",
  description:
  "Beautiful short hike along the Bechler river to Bechler Falls",
  directions:
  "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
  },
  {
  name: "Teton Canyon",
  imgSrc: "falls.jpg",
  imgAlt: "Image of Bechler Falls",
  distance: "3 miles",
  difficulty: "Easy",
  description: "Beautiful short (or long) hike through Teton Canyon.",
  directions:
  "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
  },
  {
  name: "Denanda Falls",
  imgSrc: "falls.jpg",
  imgAlt: "Image of Bechler Falls",
  distance: "7 miles",
  difficulty: "Moderate",
  description:
  "Beautiful hike through Bechler meadows river to Denanda Falls",
  directions:
  "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
  }
  ];
  
  // Image path for the images
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  export default class Hikes {
  constructor(elementId) {
  this.parentElement = document.getElementById(elementId);
  this.backButton = this.addBackButton(); // Call the funtion to create the button
  }
  
  // Return all the data from hikeList
  getAllHikes() {
  return hikeList;
  }
  
  // Function to use to find a specific name inside the object and return the object
  getHikeByName(hikeName) {
  console.log(JSON.stringify(this.getAllHikes().find(hike => hike.name === hikeName))); // for checking if we got the right object
  return this.getAllHikes().find(hike => hike.name === hikeName);
  }
  
  // Function to display the list of hikes
  showHikeList() {
  this.parentElement.innerHTML = '';
  renderHikeList(this.parentElement, this.getAllHikes());
  this.addHikeListener();
  
  // Add class name hideButton to hide the button
  this.backButton.classList.add('hideButton');
  }
  
  // Function to display the full details of one hiking location
  showOneHike(hikeName) {
  
  const hike = this.getHikeByName(hikeName);
  this.parentElement.innerHTML = '';
  this.parentElement.appendChild(renderOneHikeFull(hike));
  
  // Remove the class name of the button to make the button visible
  this.backButton.classList.remove('hideButton')
  }
  
  // Add the click event for each child element so that if the section is clicked it will run showOneHike() to display full details
  addHikeListener() {
  const listArray = Array.from(this.parentElement.children);
  listArray.forEach(child => {
  child.addEventListener('click', event => {
  this.showOneHike(event.currentTarget.dataset.name); // currentTarget returns whose event listener's callback is currently invoked
  console.log(event.currentTarget.dataset.name) // Test the data to be passed
  });
  });
  }
  // Create the button at the end of the hike full details view and add event
  addBackButton() {
  const backButton = document.createElement("button");
  backButton.innerHTML = '⬅️ Go Back to All Hikes';
  
  // Add click event to the back button to display the original lists of hikes
  backButton.addEventListener('click', () => {
  this.showHikeList();
  });
  
  // Add class name 'hideButton' to the button to hide it if the original lists of hikes view is displayed
  backButton.classList.add('hideButton');
  this.parentElement.after(backButton);
  return backButton;
  }
  }
  
  // Function to compile each rendered li and display all of them in one page
  function renderHikeList(parent, hikes) {
  hikes.forEach(hike => {
  parent.appendChild(renderOneHike(hike));
  });
  }
  // Function to create the structure of the li element
  function renderOneHike(hike) {
  const item = document.createElement("li");
  item.setAttribute('data-name', hike.name); // set attribute to get the value of the name in addHikeListener()
  item.innerHTML = `<h2>${hike.name}</h2>
  <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
  <div>
  <h3>Distance</h3>
  <p>${hike.distance}</p>
  </div>
  <div>
  <h3>Difficulty</h3>
  <p>${hike.difficulty}</p>
  </div>
  </div>` ;
  return item;
  }
  
  // Function to create the structure the full view of the clicked hiking location
  function renderOneHikeFull(hike) {
  // alert('got here');
  const item = document.createElement("li");
  item.classList.add('oneHike'); // add class for styling purposes
  item.innerHTML = `<h2>${hike.name}</h2>
  <div><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
  <div>
  <h3>Distance</h3>
  <p>${hike.distance}</p>
  </div>
  <div>
  <h3>Difficulty</h3>
  <p>${hike.difficulty}</p>
  </div>
  <div>
  <h3>Description</h3>
  <p>${hike.description}</p>
  </div>
  <div>
  <h3>Directions</h3>
  <p>${hike.directions}</p>
  </div>
  <div>
  <h3>Comments</h3>
  <p></p>
  </div>
  </div>`;
  return item;
  }
  
  // getAllComments
function getAllComments() {
      const allComments = ls7.readFromLS()
      allComments.forEach(element => {
      const list = createComment

  })
}

// function listTodos() {
//   const todoList = ls.readFromLS();
//   todoList.forEach(element => {
//       const list = createTodoElement(element)
//       addToList(list);
//   })
// }

  //  renderCommentList
  // function renderCommentList(comment) {
  //   const commentList = document.createElement("div");
  //   commentList = `<h2>${hike.name}</h2>
