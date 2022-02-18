// class Comment {
//     constructor (type) {
//         this.type = type;
        
//     }
// }

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

    // getAllComments 
  function getAllComments() {
         const allComments = readFromLS();
         allComments.forEach(element => {
          const commentList = renderCommentList(element)
          showCommentList(commentList);
        //console.log(JSON.stringify(commentsList));
        // return commentsList;
})
  }
  
    //  renderCommentList for page 1
    function renderCommentList(allComments) {
        // console.log(JSON.stringify(allComments));

        let dateConvert = allComments.date;
        const today = new Date(dateConvert);
        const commentList = document.createElement("li");
        commentList.classList.add('single-comment');
        commentList.innerHTML = `
        <h4>${allComments.name}</h4>
        <br>
        <p>${allComments.content} - ${today.toDateString()}</p>
        `;
        
         return commentList;
    }
 
    function showCommentList(commentList) {
      document.querySelector('#full-comments').appendChild(commentList);
    }

    // function showCommentListFiltered(commentList) {
    //   document.querySelector('#filter-comments').appendChild(commentList);
    // }

  
    // Filter comments for subcontents
    function filterCommentsByName(hikeName) {
      //document.getElementById("filter-comments").innerHTML = '';
      let filteredComments = [];
  
      const allComments = readFromLS();
  
      if (hikeName == 'Bechler Falls') {
        filteredComments = hikeOne(allComments);
        alert(JSON.stringify(filteredComments))
      }
  
      else if (hikeName == 'Teton Canyon') {
        filteredComments = hikeTwo(allComments);
      }
  
      else if (hikeName == 'Denanda Falls') {
        filteredComments = hikeThree(allComments);
      }
  
      filteredComments.forEach(comment => {
        const commentList = renderCommentList(comment)
        //showCommentListFiltered(commentList);
        //alert(JSON.stringify(commentList))
    })
    return filteredComments;
    }
  
    function hikeOne(comments) {
      return comments.filter(comment => {
          return comment.name == 'Bechler Falls';
      })
    }
  
    function hikeTwo(comments) {
      return comments.filter(comment => {
          return comment.name == 'Teton Canyon';
      })
    }
  
    function hikeThree(comments) {
      return comments.filter(comment => {
          return comment.name == 'Denanda Falls';
      })
    }


export default { readFromLS, writeToLS, getAllComments, filterCommentsByName }