var db = require('../config');

var Portfolio = db.Model.extend({
  tableName: 'portfolios',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = Portfolio;
