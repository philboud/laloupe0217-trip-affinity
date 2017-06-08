
import mongoose from 'mongoose';



const infopersoSchema = new mongoose.Schema({

  photo: {
      type: String
    },
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    sexe: {
        type: String
    },
    complement: {
        type: String
    }
});


let model = mongoose.model('Infoperso', infopersoSchema);

export default class Infoperso {

  findAll(req, res) {
    model.find({}, {
      password: 0
    }, (err, infoperso) => {
      if (err || !infoperso) {
        res.sendStatus(403);
      } else {
        res.json(infoperso);
      }
    });
  }

    findById(req, res) {
        model.findById(req.params.id, {
            password: 0
          }, (err, infoperso) => {
            if (err || !infoperso) {
                res.sendStatus(403);
            } else {
                res.json(infoperso);
                  console.log(res.json);
            }
        });
    }

  create(req, res){
      model.create(req.body, (err,infoperso) => {
        if (err ||!infoperso){
          res.status(500).send(err.message);
        } else {
          res.json({
             infoperso
          });
        }
  });

  }


}
