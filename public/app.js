const submit = document.querySelector('.submit');
submit.addEventListener('click', function(e) {
  e.preventDefault();
  var newPlant = {
    commonName: document.getElementById('plant-common-name').value.trim(),
    scientificName: document.getElementById('plant-scientific-name').value.trim(),
    fertilizeDate: document.getElementById('plant-fertilize-date').value.trim(),
    pruneDate: document.getElementById('plant-trim-date').value.trim(),
  };
  console.log(newPlant);

  $.post('/api/plantedPlants', newPlant, function(data) {
    if(data) {
      alert('A New Plant was added to the planted list!');
    }
    else {
      alert('Something went wrong...');
    }

    document.getElementById('plant-common-name').val("");
    document.getElementById('plant-scientific-name').val("");
    document.getElementById('plant-fertilize-date').val("");
    document.getElementById('plant-trim-date').val("");
  });
});