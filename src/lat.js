const axios = require('axios')
class dir{
    constructor(city){
        this.city=city;
    }
    async getLatlong(){
        try{
        const res=await axios(`https://api.opencagedata.com/geocode/v1/json?key=4ea880ffb06e436c81cdcb08479b27cc&q=${this.city}`);
        this.lat=Math.floor(res.data.results[0].geometry.lat);
        this.long=Math.floor(res.data.results[0].geometry.lng);
        }
        catch(error){
            console.log('Hello');
        }
    }


}

module.exports.dir=dir;