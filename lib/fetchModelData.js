var Promise = require('Promise').default
/**
  * FetchModel - Fetch a model from the web server.
  *     url - string - The URL to issue the GET request.
  * Returns: a Promise that should be filled
  * with the response of the GET request parsed
  * as a JSON object and returned in the property
  * named "data" of an object.
  * If the requests has an error the promise should be
  * rejected with an object contain the properties:
  *    status:  The HTTP response status
  *    statusText:  The statusText from the xhr request
  *
*/


function fetchModel(url) {
  return new Promise((resolve, reject) => {

      // Creates xhttp request with given URL, type GET (fetch)
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", url);

      xhttp.onload = function() { // Onload & status 200 resolve with response text
          if (xhttp.status === 200) {
              resolve(xhttp.responseText);
          } else if (xhttp.status === 404) {
              reject("404: Not Found");
          }

      }

      // Execute xhttp request
      xhttp.send();

  })
}

export default fetchModel;
