function readFromLS() {
    const allCommentsText = localStorage.getItem('allComments');
    let allComments = [];
    allComments = JSON.parse(allCommentsText);
}

export default { readFromLS }