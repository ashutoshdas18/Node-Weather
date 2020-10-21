const axios = require('axios')

class weather{

    constructor(lat,long){
        this.lat=lat;
        this.long=long
    
    }
     async getResult(){
         
        try{
        const res = await axios(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=304905f58af3f569e02ff981ca359bf0`);
        this.result=Math.ceil(res.data.main.temp-273.15);
    }
        catch(error){
            console.log('Hello');
        }
        
    }
}
module.exports.weather=weather;

// // axios.get(url).then((response)=>{
// //     console.log(response.data)
// // })


//  const b= async function(city){
//      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=304905f58af3f569e02ff981ca359bf0`;
//      let a = await axios(url);
//     const result=a.data; 
//     }
