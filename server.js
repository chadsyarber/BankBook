var express = require('express');
var app = express();

const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:owner@localhost:5432/Finance';

const pool = new Pool({
  connectionString: connectionString,
});

var sqlQuery = 'SELECT * FROM public.\"Item\"';

app.get('/', function(req, res, next) {
  pool.query(sqlQuery, (err, res) => {
    if(err){
      console.log(err);
    } else {
      console.log(res);
    }

    pool.end()
  });

});

app.listen(4000, function(){
  console.log('Server is running port 4000');
})


/*const client = new Client({
  connectionString: connectionString,
});
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
});
*/
