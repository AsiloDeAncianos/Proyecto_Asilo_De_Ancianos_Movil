const mongoose = require('mongoose');

const BenefactorSchema = new mongoose.Schema({
        NombreCompleto: String,
        CI: Number,
        UbicacionDomicilio: String,
        Telefono: Number,
        Email: String,
        Password: String,
        Anonimo: Boolean
    });

mongoose.model('benefactor', BenefactorSchema);

