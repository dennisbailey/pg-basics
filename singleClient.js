// var pg = require('pg');
// 
// var connectionString = 'postgres://localhost:5432/pgintro';
// 
// var client = new pg.Client(connectionString);
// client.connect();

// client.query("SELECT * FROM cities", function(err, result) {
//   console.log(result.rows);
// });
// 
// client.query("INSERT INTO cities(name, country, rating) values('Plymouth', 'United States', 6)");
// 
// client.query("SELECT * FROM cities", function(err, result) {
//   console.log(result.rows);
//   client.end();
// });

// client.query("SELECT * FROM cities WHERE id = 1", function(err, result) {
//   console.log(result.rows);
//   client.end();
// });

// client.query("UPDATE cities SET name = 'Plymouth' WHERE id= 4");
// 
// client.query("SELECT * FROM cities", function(err, result) {
//   console.log(result.rows);
//   client.end();
// });

// client.query("DELETE FROM cities WHERE id= 3");
// 
// client.query("SELECT * FROM cities", function(err, result) {
//   console.log(result.rows);
//   client.end();
// });

var pg = require('pg');
var connectionString = 'postgres://localhost:5432/pgintro';

// pg.connect(connectionString,function(err, client, done) {
// 
//     if(err) {
//         done();
//         console.log('Error fetching Client : ' + err);
//     }
// 
//     var query = client.query('SELECT * FROM cities');
// 
//     query.on('row', function(row) {
//         console.log(row);
//     });
// 
//     query.on('end', function() {
//         done();
//     });
// 
// });


var selectAllFrom = function(tableName) { 
  
  pg.connect(connectionString, function(err, client, done) {

    if(err) {
      console.log('Error fetching Client : ' + err);
      done();
    }

    var query = client.query('SELECT * FROM ' + tableName + '');

    query.on('row', function(row) {
      console.log(row);
    });

    query.on('end', function() {
      done();
    });

  });

}
  
//selectAllFrom("cities");

var findCity = function(city) { 
  
  pg.connect(connectionString, function(err, client, done) {

    if(err) {
      console.log('Error fetching Client : ' + err);
      done();
    }
    var queryString = 'SELECT * FROM cities WHERE name = ' + city + '';
    var query = client.query(queryString);

    query.on('row', function(row) {
      console.log(row);
    });

    query.on('end', function() {
      done();
    });

  });

}

//findCity("'Plymouth'");

var addCity = function(name, country, rating) { 
  
  pg.connect(connectionString, function(err, client, done) {

    if(err) {
      console.log('Error fetching Client : ' + err);
      done();
    }
    var queryString = "INSERT INTO cities(name, country, rating) values('"+ name +"', '" + country + "', " + rating + " )";
    console.log(queryString);
    var query = client.query(queryString);

    query.on('row', function(row) {
      console.log(row);
    });

    query.on('end', function() {
      done();
    });

  });

}

addCity("Tinsel Town", "United States", 3);
findCity("'Tinsel Town'");
