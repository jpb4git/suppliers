import axios from 'axios';

export default {

getSuppliers (target, url) {
    let result;
    target.loading = true;

    console.log(target);
    axios.get(url)

      .then((response) =>  {
        console.log('log axios : '  + response.data);
        target.suppliers = response.data;
        console.log('target : ' + target);

        //store.append(data);
        //store.update();
      })
      .catch(function (error) {
        return  error;
      });


  console.log('api.js');
  //return result;
  }



}

