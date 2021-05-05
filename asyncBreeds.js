// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log(`fs.readfile is asking the disc to read the files and return the data`);
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    // if (!error) return data;
    if (!error) {
      callback(data)
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
 breedDetailsFromFile('Bombay', breed => {
  console.log('Return Value: ', breed);
});
console.log(`the callback function returns will get an immediatly response of undefined from the fs.readfile`)
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
//this one will excute and immeditly will get an immediatly response of undefined from the fs.readfile becuase the fs.readline 
//didin't get the data from the disk yet- it's happening b/c of the function fs.readfile is asychronic
//breedDetailsFromFile has no other code to execute thereafter and also returns undefined