const fs = require('fs');
const path = require('path');

const directory = './images/';

fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    const newName = file.split('Your Splitter');
    const newFilename = newName[1];
    const name = e =>  path.join(directory, e);
    fs.rename(name(file), name(newFilename), () => {})
  });
});