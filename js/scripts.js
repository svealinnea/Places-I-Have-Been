//Business Logic 
function placesIveBeen () { 
  this.place = [];
}
place.prototype.addName = function(name) {
  this.name.push(name);
}
place.prototype.addCharacteristics = function(characteristic) {
  this.characteristic.push(characteristic);
}
place.prototype.addNotes = function(notes) {
  this.notes.push(notes);
}

//Business Logic for inputs
function Place(name,characteristic,notes ) {
  this.name = name;
  this.characteristic = characteristic;
  this.notes = notes;
}
place.prototype.allInfo = function() {
  return this.name + " " + this.notes;
}