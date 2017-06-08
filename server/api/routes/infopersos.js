import express from 'express';
import Infoperso from '../models/infoperso.js';


let router = express.Router();

module.exports = (app) => {


    var infoperso = new Infoperso();

    router.get('/', infoperso.findAll);

    router.get('/:id', infoperso.findById);

    router.post('/', infoperso.create);

    app.use('/infopersos', router);

};
