// app.js
const mongoose = require('mongoose');
const Person = require('/models/Person');

// Créer plusieurs personnes
const createManyPeople = (arrayOfPeople) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    console.log('People created:', data);
  });
};

createManyPeople([
  { name: 'Alice', age: 25, favoriteFoods: ['Burger'] },
  { name: 'Bob', age: 28, favoriteFoods: ['Sushi'] }
]);
// app.js
const findPersonByName = (name) => {
    Person.find({ name: name }, (err, data) => {
      if (err) return console.error(err);
      console.log('Persons found:', data);
    });
  };
  
  findPersonByName('Alice');
  // app.js
const findPersonByFood = (food) => {
    Person.findOne({ favoriteFoods: food }, (err, data) => {
      if (err) return console.error(err);
      console.log('Person found:', data);
    });
  };
  
  findPersonByFood('Sushi');
  // app.js
const findPersonById = (id) => {
    Person.findById(id, (err, data) => {
      if (err) return console.error(err);
      console.log('Person found by ID:', data);
    });
  };
  
  // Remplacez 'personId' par un ID valide
  findPersonById('personId');
  // app.js
const updatePerson = (id) => {
    Person.findById(id, (err, person) => {
      if (err) return console.error(err);
  
      person.favoriteFoods.push('Hamburger');
      person.save((err, updatedPerson) => {
        if (err) return console.error(err);
        console.log('Updated person:', updatedPerson);
      });
    });
  };
  
  // Remplacez 'personId' par un ID valide
  updatePerson('personId');
  // app.js
const updatePersonAge = (name) => {
    Person.findOneAndUpdate({ name: name }, { age: 20 }, { new: true }, (err, updatedPerson) => {
      if (err) return console.error(err);
      console.log('Updated person age:', updatedPerson);
    });
  };
  
  updatePersonAge('Alice');
  // app.js
const deletePersonById = (id) => {
    Person.findByIdAndRemove(id, (err, deletedPerson) => {
      if (err) return console.error(err);
      console.log('Deleted person:', deletedPerson);
    });
  };
  
  // Remplacez 'personId' par un ID valide
  deletePersonById('personId');
  // app.js
const deletePeopleByName = (name) => {
    Person.remove({ name: name }, (err, result) => {
      if (err) return console.error(err);
      console.log('Delete result:', result);
    });
  };
  
  deletePeopleByName('Mary');
  // app.js
const findAndSortPeople = () => {
    Person.find({ favoriteFoods: 'Burritos' })
      .sort({ name: 1 })
      .limit(2)
      .select('-age')
      .exec((err, people) => {
        if (err) return console.error(err);
        console.log('Sorted and limited people:', people);
      });
  };
  
  findAndSortPeople();
  