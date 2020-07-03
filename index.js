
document.getElementById('getText').addEventListener
('click',getText);
document.getElementById('getUsers').addEventListener
('click',getUsers);
document.getElementById('getPosts').addEventListener
('click',getPosts);
document.getElementById('addPost').addEventListener
('submit',addPost);
function getText(){
    // fetch('sample.txt')
    // .then(function(res){
    //     // console.log(res.text());
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.error(err));

}

function getUsers(){
    fetch('dummy.json')
    .then((res) => res.json())
    .then((data) =>{
        let output = '<h2>Users</h2>';
         //console.log(typeof(data));
        data.forEach(function(user){
            output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
        
    })
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) =>{
        let output = '<h2>POSTS</h2>';
        data.forEach((post)=>{
            output+= `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `;
        });

        document.getElementById('output').innerHTML = output;
    })
}

function addPost(e){
    e.preventDefault(); // to prevent it from submitting to a file

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },

        body:JSON.stringify({
            "title":title,
            "body":body
        })

    })
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
    })
    
}
