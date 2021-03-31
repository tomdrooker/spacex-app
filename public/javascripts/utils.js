const fetch = require("node-fetch");

const fetchData = () => {
  fetch('http://api.spacexdata.com/v4/launches')
  .then(response => response.json())
  .then(data => {
    return data;
  })
  .catch(err => console.log(err));
};

module.exports = {
    fetchData
};


