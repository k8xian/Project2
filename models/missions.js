//requiring orma
const orm = require("../config/orm.js");

var missions = {
  //integrating selectAll orm and passing in just a callback
  selectAll: function(table, cb) {
    orm.all(table, function(res) {
      cb(res);
    });
  },
  //integrating insertOne orm and taking variables to specify data to be inserted
  selectOne: function(table, condition, cb) {
    orm.one(table, condition, function(res) {
      cb(res);
    });
  },
  //integrating insertOne orm and taking variables to specify data to be inserted
  createOne: function(table, cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
      cb(res);
    });
  },
  //integrating updateOne orm to update devoured status by taking data about the name of the mission and devoured status
  updateOne: function(table, objColVals, condition, cb) {
    orm.updateOne("table", objColVals, condition, function(res) {
      cb(res);
    });
  },
  //integrating delete orm based on id
  delete: function(condition, cb) {
    orm.delete("missions", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = missions;
