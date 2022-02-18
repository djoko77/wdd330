
function writeToLS(newComment) {
    const commentLists = readFromLS();
    commentLists.push(newComment);
    localStorage.setItem('commentLists', JSON.stringify(commentLists));
}

function readFromLS() {
    const allCommentsText = localStorage.getItem('allComments');
    let allComments = [];
    allComments = JSON.parse(allCommentsText);
}

export default { readFromLS, writeToLS }