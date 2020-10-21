const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const lib=require('./weather')
const direction=require('./lat')

const state={}

const app = express();
const port = process.env.PORT || 3000
app.set('view engine','hbs')
const dirName=path.join(__dirname,'/assets/hbs');
app.set('views',dirName);

const partialDirectory=path.join(__dirname,'/assets/partials');
hbs.registerPartials(partialDirectory);


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/assets')));

app.get('/', (req, res) => {
  res.render('index');

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
    res.render('weather',{
      temp:state.search.result,
      loc:state.newElement.city
    })
    // `The Current temperature in ${state.newElement.city} is ${state.search.result} degree celcius`);

 
})();
});



app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
