const mongoose = require('mongoose');

const DonacionSchema = new mongoose.Schema({
        CampaniaID: Number,
        BenefactorID: Number,
        RecogidaPorAsilo: Boolean,
        FechaRecoleccion: Date,
        RecibidoPorAsilo: Boolean,
        Campania: Number,
        Benefactor: Number
    });

mongoose.model('donacion', DonacionSchema);

