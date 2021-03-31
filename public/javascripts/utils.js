const fetch = require("node-fetch");

const fetchData = () => {

    fetch('http://api.spacexdata.com/v4/launches')
  .then(response => response.json())
  .then(data => {
    return data;
  })
  .catch(err => console.log(err));

    // fetch("https://api.spacexdata.com/v4/launches/").then(response => {
    //     if (response.ok) {
    //         return response.json()
    //     }
    //     throw new Error('Request failed');
    //     }, networkError => console.log(networkError.message)
    //     ).then(jsonResponse => {
    //         return jsonResponse;
    //     });
};

module.exports = {
    fetchData
};


