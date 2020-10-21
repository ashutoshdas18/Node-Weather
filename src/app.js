console.log('Hello')
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const lib=require('./weather')
const direction=require('./lat')
const state={}

const app = express();

const dirName=path.join(__dirname,'/assets/hbs');

app.set('view engine','hbs')
app.set('views',dirName);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/assets')));

app.get('/', (req, res) => {
  res.render('index');
  console.log('Hello')

})

app.post('/products', (req, res) => {
  (async ()=>{
    const city = req.body.detaills;
    state.newElement=new direction.dir(city);
    await state.newElement.getLatlong();
    const lat=state.newElement.lat;
    const long=state.newElement.long;
    state.search=new lib.weather(lat,long);
     await state.search.getResult();
    res.send(`The Current temperature in ${state.newElement.city} is ${state.search.result} degree celcius`);

 
})();
});



app.listen(3000, () => {
  console.log(`Server started on port`);
});
