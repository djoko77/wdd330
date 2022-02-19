class CommentModel {
  constructor(type) {
      this.type = type
  }
}

class Comment {
  constructor(name, date, content, type) {
      this.name = name,
      this.date = date,
      this.content = content
      this.type = new CommentModel(type)
  }
}

function getAllComments() {
      const allComments = readFromLS();
      allComments.forEach(element => {
      const commentList = renderCommentList(element)
      showCommentList(commentList);
  })
}

function renderCommentList(allComments) {
      let dateConvert = allComments.date;
      const today = new Date(dateConvert);
      const commentList = document.createElement("li");
      commentList.classList.add('single-comment');
      commentList.innerHTML = `<div>
      <h4>${allComments.name}</h4>
      <p>${allComments.content} - ${today.toDateString()}</p></div>`;
      return commentList;
  }
  
function showCommentList(commentList) {
      document.querySelector('#full-comments').appendChild(commentList);
  }
      
function showCommentListFiltered(commentList) {

document.querySelector('#filtered-comments').appendChild(commentList);

}

function addComment() {
  var comments = []
  let commentText = document.getElementById("input-comment").value;
  
  let hikeName = document.getElementById("add-button").attributes["name"].value;
  //console.log(hikeName);
  let newComment = new Comment(hikeName, Date.now(), commentText, 'hike')

  comments.push(newComment);
  writeToLS(newComment);
  //console.log(JSON.stringify(newComment));
  
  document.querySelector('#filtered-comments').innerHTML = "";
  filterCommentsByName(hikeName);

}

function filterCommentsByName(hikeName) {

  let comments = readFromLS();

  var filteredComments = comments.filter(comment => comment.name == hikeName)

  filteredComments.forEach(element => {
      const commentList = renderCommentList(element)
      showCommentListFiltered(commentList);
})
//console.log(JSON.stringify(filteredComments))
//return filteredComments;
}

function writeToLS(newComment) {
  const allComments = readFromLS();
  allComments.push(newComment);
  //console.log(JSON.stringify(allComments));
  localStorage.setItem('allComments', JSON.stringify(allComments));
}

function readFromLS() {
  const allCommentsText = localStorage.getItem('allComments');
  let allComments = [];

  if(allCommentsText) {
      allComments = JSON.parse(allCommentsText);
  }
  else if (allComments == undefined || allComments == null){
      localStorage.clear();
      allComments = JSON.parse(allCommentsText);
  }
  return allComments;
}


export default { addComment, getAllComments, filterCommentsByName }




