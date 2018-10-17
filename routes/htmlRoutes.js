var path = require('path');

module.exports = app => {
  app.get('/planted', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/planted.html'));
  });

  app.get('/newPlant', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/newPlant.html'));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};