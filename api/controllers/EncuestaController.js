/**
 * EncuestaController
 *
 * @description :: Server-side logic for managing Encuestas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearEncuesta: function (req, res) {
    parametros = req.allParams();

    if (re.method == "POST" && parametros.id) {
      Usuario.destroy({
        id: params.id
      }).exec(function (err, usuarioDestruidoRawr) {
        if (err) return res.negotiate(err);
        return res.view('encuestas')
      })
    }
    else {
      return res.badRequest();
    }
  },
  editarEncuesta: function (req, res) {
    parametros = req.allParams();

    

  }
};

