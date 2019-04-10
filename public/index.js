console.log("hello there");

let input1= document.querySelector('#testContent');
let btn1 = document.getElementById('postTest');
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

 btn1.addEventListener('click', ()=>{
     console.log(input1.value);
     let data = {
         item_data: input1.value
     };
      axios.post ('https://j4m4803yml.execute-api.us-west-2.amazonaws.com/dev/postContent',data)
      .then(data=>{
          console.log('data', data);
        
      })
 })
// .catch(function(err){
//      console.log('err', err);
//  });



//gallery code

var gallery = document.querySelector('.gallery');
var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    if (n > gallery.length){
        slideIndex = 1
    }
    
    if (n < 1) {
        slideIndex = gallery.length
    }

    for(var i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }

    gallery[slideIndex - 1].style.display = "block";
}
