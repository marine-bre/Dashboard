
const request = async (endpoint, data,) => {      
      fetch(`https://guarded-wildwood-26859.herokuapp.com/api/user/${endpoint}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

export default request
