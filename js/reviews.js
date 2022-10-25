// Реализация отзывов

let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function(event) {
    event.preventDefault();

    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);

    saveComments();
    showComments();
}

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments() {
    let commentField = document.getElementById('comment');
    let out = '';
    comments.forEach(function(item) {
        out += `<div class="comment_section"> <div class="reviews_header"> <h2 class="reviews_title">${item.name}</h2> <p class="date">${timeConverter(item.time)}</p> </div> <p class="comment">${item.body}</p> </div>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}