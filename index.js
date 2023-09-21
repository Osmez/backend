const express = require('express');
const cors = require('cors');
const https = require('https');
const bodyParser = require('body-parser');


const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/gets',(req, res)=>{
  console.log(req.body.name , "dfdfdfd");
  res.send('reqp ');
});

app.get('/fet',(req,res)=>{
  
  
});

app.post('/getword',(req, res)=>{
 let word = req.body.word;
 let url = "https://www.arabicterminology.com/?search="+word+"&book=All" 
https.get(url, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    let c = data.toString().substring(18498,28851);
    
    res.status(200).send(c);
    console.log(c);
  });


}).on("error", (err) => {
  console.log("Error: " + err.message);
});

});

app.get('/ingredients', (req, res) =>{
    res.send("dfdfd");
});

app.listen(6069);