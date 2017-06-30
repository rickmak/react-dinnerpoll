const skygear = require('skygear');
const skygearCloud = require('skygear/cloud');

const sql = "SELECT DISTINCT choice FROM app_dinnerpollpoly.vote ORDER BY choice;";
const distinct = () => {
  return new Promise(function(resolve, reject) {
    skygearCloud.pool.query(sql, (err, res) => {
      if (err) {
        console.log(err.stack);
        reject({error: err});
      } else {
        console.log(res.rows[0]);
        resolve({response: res.rows});
      }
    });
  });
}

skygearCloud.op('distinct', distinct);

// quick test of availability
skygearCloud.handler('test', function(req) {
  return "Hello, world!";
}, {
  method: ['GET'],
  userRequired: false
});
