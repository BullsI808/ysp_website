// justin work on post..... copy over code from movie list and change what is needed
'use strict';
const Pool = require('pg-pool');
const config = require('../config.json');
const {table, host, database, user, password, port} = config;
const pool = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});


//name is changed to content right now as we dont know specifically what will be added
module.exports.postContent = (event, context, callback) => {
console.log('event', event);

//change vars to make it work, names changed to make it fit more

// let name = event.body.movie_title;
// let postDate = event.body.movie_release_date;
// let topic = event.body.movie_genre;


let content = event.body.item_data;

 const insertNewContent = `INSERT INTO ${table} VALUES(default, $1)`;

 pool.connect()
  .then(client =>{
    client.release()
    return client.query(insertNewContent, [content])
  })
  .then(res =>{
  
 
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      message: res,
      input: event,
    }),
  };

  callback(null , response)
})

.catch(err =>{
  console.log('err', err);
})
  
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

