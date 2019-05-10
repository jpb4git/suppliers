import axios from 'axios';

export default {

getSuppliers (target, url) {
    let result;


    axios.get(url)
      .then((response) =>  {

        target.suppliers = response.data;
        target.loaded = true;

      })
      .catch(function (error) {
        return  error;
      });
  }
}

