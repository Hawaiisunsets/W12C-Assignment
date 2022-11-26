const userPost      = document.getElementById(`userId`);
const userPostTitle = document.getElementById(`postTitle`);
const userPostBody  = document.getElementById(`postBody`);
const result        = document.getElementById(`apiResult`); 


function getPost(){
    axios.request({
        url : "https://jsonplaceholder.typicode.com/posts",
        method : "POST",
        data : {
            userId: userPost.value,
            title : userPostTitle.value,
            body  : userPostBody.value
        }
    }).then(postSuccess).catch(failure);
}

function postSuccess(response){
    let post = response.data;
    result.insertAdjacentHTML(`beforeend`, `<h3>Post ${post.id} is successful!</h3>`);
    result.insertAdjacentHTML(`beforeend`, `<h3>Post ${post.title} is successful!</h3>`);
    result.insertAdjacentHTML(`beforeend`, `<h3>Post ${post.body} is successful!</h3>`);
    console.log(post);
}


function getPatch(){
    axios.request({
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method : "PATCH",
        data : {
            id : 10,
            title : "New Patch Title"
        }
    }).then(patchSuccess).catch(failure);
}

function patchSuccess(response){
    console.log(response);
    result.innerHTML = `Patch Succesful`;
}

function getDelete(){
    axios.request({
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method : "DELETE",
        data : {
            id : 5,
        }
    }).then(deleteSuccess).catch(failure);
}

function deleteSuccess(response){
    console.log(response);
}

function getAllPosts(){
    axios.request({
        url : "https://jsonplaceholder.typicode.com/posts",
        // medthod : "GET",
    }).then(getSuccess).catch(failure);
}

function getSuccess(response){
    console.log(response);
    
    for (let i=0; i < response.data.length; i++){
        result.innerHTML = `<h3>${response.data[i].id}</h3>`;
        result.innerHTML = `<h3>${response.data[i].tilte}</h3>`;
        result.innerHTML = `<h3>${response.data[i].body}</h3>`;
    }

}
function failure(error){
    result.innerHTML = `<h3>Post fail.  Please try again.</h3>`;
    console.log(error);
}
// getAllPosts();

document.getElementById(`postButton`).addEventListener(`click`, getPost)
document.getElementById(`getPost`).addEventListener(`click`, getAllPosts)
