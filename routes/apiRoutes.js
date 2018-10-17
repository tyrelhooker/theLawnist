// Loads plantedPlants from data folder
var plantData = require('../data/plantData');

module.exports = app => {
  // User is shown JSON of data in 
  app.get('/api/plantedPlants', function(req, res) {
    res.json(plantData);
  });

  // user submitted data to the server the JSON object pushed into data array
  app.post('/api/plantedPlants', function(req, res) {
    plantData.push(req.body);
  })
}