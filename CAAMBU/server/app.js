const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('./benefactor');
require('./donacion');

const Benefactor = mongoose.model('benefactor');
const Donacion = mongoose.model('donacion');

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

const mongURI = "mongodb://vultines:AtreveTcaambuDBunivalle2023@ac-oh0mzsu-shard-00-00.nnlie99.mongodb.net:27017,ac-oh0mzsu-shard-00-01.nnlie99.mongodb.net:27017,ac-oh0mzsu-shard-00-02.nnlie99.mongodb.net:27017/dbcaambu?ssl=true&replicaSet=atlas-mc2jb8-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(mongURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});

mongoose.connection.on("err", (err) => {
    console.log("error", console.err)
});

app.post('/send-data', (req, res) => {
    const benefactor = new Benefactor({
        NombreCompleto: req.body.NombreCompleto,
        CI: req.body.CI,
        UbicacionDomicilio: req.body.UbicacionDomicilio,
        Telefono: req.body.Telefono,
        Email: req.body.Email,
        Password: req.body.Password,
        Anonimo: req.body.Anonimo
    })
    benefactor.save()
        .then(data => {
            console.log(data)
            res.send("success")
        }).catch(err => {
            console.log(err)
        })
    console.log("Post succesful")
})

app.get('/verify-data', (req, res) => {
    const { email, password } = req.query;
  
    Benefactor.findOne({ Email: email, Password: password })
      .then(data => {
        if (data) {
          res.send({ success: true, message: 'Login successful' });
        } else {
          res.send({ success: false, message: 'Invalid email or password' });
          console.log("Invalid email or password: " + email + " " + password )
        }
      })
      .catch(error => {
        console.log(error);
        res.send({ success: false, message: 'An error occurred' });
      });
  });

app.get('/', (req, res) => {    
    res.send('Hello World! MONGOOSE')
})

app.listen(4000, () => {
    console.log('Example app listening on port 4000!')
})

//post donacion

app.post('/send-donacion', (req, res) => {
    const donacion = new Donacion({
        CampaniaID: req.body.CampaniaID,
        BenefactorID: req.body.BenefactorID,
        RecogidaPorAsilo: req.body.RecogidaPorAsilo,
        FechaRecoleccion: req.body.FechaRecoleccion,
        RecibidoPorAsilo: req.body.RecibidoPorAsilo,
        Campania: req.body.Campania,
        Benefactor: req.body.Benefactor,
    })
    donacion.save()
        .then(data => {
            console.log(data)
            res.send("success")
        }).catch(err => {
            console.log(err)
        })
    console.log("Post succesful")
})

//allow cors headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
