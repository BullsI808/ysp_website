console.log("hello there");

var input1= document.querySelector('#testContent');
var btn1 = document.getElementById('postTest');
console.log(btn1);

//get 


axios.get('https://j4m4803yml.execute-api.us-west-2.amazonaws.com/dev/getContent')
    .then(
        function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log('err', err);
        });



//post

// btn1.addEventListener('click', ()=>{
//     let data = {
//         item_data: input1.value
//     };
//     axios
//      .post ('https://j4m4803yml.execute-api.us-west-2.amazonaws.com/dev/postContent',data)
//      .then(data=>{
//          console.log('data', data);
//      })
// })
// .catch(function(err){
//     console.log('err', err);
// });
