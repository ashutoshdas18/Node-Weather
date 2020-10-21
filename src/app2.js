// const request = require('request');
// const axios = require('axios');

const lib=require('./weather')
const direction=require('./lat')
const state={}

;(async ()=>{
    const city = 'Jagatsinghpur';
    state.newElement=new direction.dir(city);
    await state.newElement.getLatlong();
    const lat=state.newElement.lat;
    const long=state.newElement.long;
    state.search=new lib.weather(lat,long);
     await state.search.getResult();
    console.log(`The Current temperature in ${state.newElement.city} is ${state.search.result} degree celcius`);

 
})();

//  ;(async ()=>{
//      const city='London';
//     state.search=new lib.weather(city);
//     await state.search.getResult();
//     console.log(state.search.city);

//  })();