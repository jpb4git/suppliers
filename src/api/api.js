import axios from 'axios';

export default {

getSuppliers (target, url) {

    axios.get(url)
      .then((response) =>  {
        target.suppliers = response.data;
        target.loaded = true ;
      })
      .catch(function (error) {
        target.error = true;
        return  error;
      });
  }
}

