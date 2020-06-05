const fs = require('fs');
const path = require('path');

module.exports = function (file, ext, callback) {
  fs.readdir(file,(err, list) => {
    if (err) {return callback(err)};
    var list = list.filter (item => {
      return path.extname(item) === '.' + ext;
      })
      callback(null, list);
    })
  }

  

