/**
 * EncuestaController
 *
 * @description :: Server-side logic for managing Encuestas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  editarEncuesta: function (req, res) {
    parametros = req.allParams();

    if(parametros.titulo && parametros.descripcion && parametros.id && parametros.idUsuario)
    {
      Encuesta.update({
          id:parametros.id
        },
        {
          titulo: parametros.titulo,
          descripcion: parametros.descripcion
        }).exec(function (err, encuestaEditada) {
        if(err) return res.serverError(err);
        if(encuestaEditada){

          Encuesta.find({idUsuario:parametros.idUsuario}).exec(function (err, encuestas) {
            return res.view('misEncuestas', {encuestas:encuestas});
          })
          return res.view('misEncuestas',{});
        }
      })
    }
  },

  listarEncuestas: function (req, res) {
    Encuesta
      .find()
      .exec(function (error, encuestasEncontradas) {
        res.view('encuestas', {encuestas: encuestasEncontradas});
      })
  },

  listarMisEncuestas: function (req, res) {

    idUsuario = req.cookies.idUsuario;

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
  },

  crearEncuesta: function (req, res) {
    parametros = req.allParams();
    idUsuario = req.cookies.idUsuario;

    console.log(parametros);
    console.log(idUsuario);

    Usuario.findOne({
      id: idUsuario
    }).exec(function (error, usuarioEncontrado) {

      if (error) {
        console.log(error);
      }

      encuesta = {
        titulo: parametros.titulo,
        descripcion: parametros.descripcion,
        idUsuario: usuarioEncontrado
      }

      Encuesta.create(encuesta).exec(function (error, encuestaCreada) {

        if (error) {
          console.log(error);
        }

        // Buscar encuetas por usuario
        Encuesta
          .find({idUsuario: idUsuario})
          .exec(function (error, encuestasEncontradas) {

            return res.view('misEncuestas', {
              encuestas: encuestasEncontradas,
              usuario: usuarioEncontrado
            })
          })

      })

    })

  },
};
