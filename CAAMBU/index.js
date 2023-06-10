const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/Benefactor', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error);
  });

// Definición del esquema y modelo de "Benefactor"
const BenefactorSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  DNI: String,
  ubicacion_domicilio: String,
  telefono: String,
  status: String,
  usuario: {
    email: String,
    password: String,
  },
});

const BenefactorModel = mongoose.model('Benefactor', BenefactorSchema);

// Ruta para obtener todos los benefactores
app.get('/benefactors', async (req, res) => {
  try {
    const benefactors = await BenefactorModel.find();
    res.json(benefactors);
  } catch (error) {
    console.error('Error al obtener los benefactores', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los benefactores' });
  }
});

// Ruta para obtener un benefactor por ID
app.get('/benefactors/:id', async (req, res) => {
  try {
    const benefactor = await BenefactorModel.findById(req.params.id);
    if (benefactor) {
      res.json(benefactor);
    } else {
      res.status(404).json({ error: 'Benefactor no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el benefactor', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener el benefactor' });
  }
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});