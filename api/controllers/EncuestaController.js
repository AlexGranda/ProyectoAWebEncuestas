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
      Usuario
        .destroy({id: params.id})
        .exec(function (err, usuarioDestruidoRawr) {
          if (err)
            return res.negotiate(err);
          return res.view('encuestas')
        })
    } else {
      return res.badRequest();
    }
  },

  editarEncuesta: function (req, res) {
    parametros = req.allParams();
  },

  listarEncuestas: function (req, res) {
    Encuesta
      .find()
      .exec(function (error, encuestasEncontradas) {
        res.view('encuestas', {encuestas: encuestasEncontradas});
      })
  },

  listarMisEncuestas: function (req, res) {

    parametros = req.allParams();
    idUsuario = parametros.idUsuario

    Usuario.findOne({
      id: idUsuario
    }).exec(function (error, usuarioEncontrado) {

      if (!usuarioEncontrado) {
        res.serverError('No existe el usuario')
      }

      Encuesta
        .find({idUsuario: idUsuario})
        .exec(function (error, encuestasEncontradas) {

          return res.view('misEncuestas', {
            encuestas: encuestasEncontradas,
            usuario: usuarioEncontrado
          })
        })
    })
  }
};
