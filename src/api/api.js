import axios from 'axios';

export default {

getSuppliers (target, url) {
    let result;
    console.log('api call')

    axios.get(url)
      .then((response) =>  {

        target.suppliers = response.data;
        target.loaded = true;
        console.log('loaded data from axios. => ' + target.suppliers.id)
      })
      .catch(function (error) {
        return  error;
      });
  },

  getSupplier (target, url) {
    let result;
    console.log('api call solo')

    axios.get(url)
      .then((response) =>  {
        target.supplier.id = response.data.id;
        target.supplier.name = response.data.name;
        target.supplier.status = response.data.status;
        target.supplier.longitude = response.data.longitude;
        target.supplier.latitude = response.data.latitude;
        target.supplier.checkedAt = response.data.checkedAt;
        console.log('loaded data from axios solo.' + target.supplier)
      })
      .catch(function (error) {
        return  error;
      });
  }


}

