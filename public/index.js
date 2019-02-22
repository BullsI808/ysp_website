console.log("hello there");

var btn1 = document.querySelector('#postTest');

btn1.addEventListener('click', ()=>{
    let data = {
        movie_title: postTitle.value,
        movie_genre: postGenre.value,
        movie_release_date: Number(postReleaseDate.value)
    };
    console.log('typeof postReleaseDate.value', typeof postReleaseDate.value);
    axios
     .post ('https://j4m4803yml.execute-api.us-west-2.amazonaws.com/dev/postMovie',data)
     .then(data=>{
         console.log('data', data);
     })
})
