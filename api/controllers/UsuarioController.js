/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearUsuario: function (req, res) {

    var parametros = req.allParams();
    sails.log.info("parametros", parametros);
    var nuevoUsuario = {
      nombres: parametros.nombres,
      apellidos: parametros.apellidos,
      password: parametros.password,
      correo: parametros.correo,
      fechaNacimiento: parametros.fechaNacimiento
    };

    Usuario.create(nuevoUsuario).exec(function (error, usuarioCreado) {
      if (error) {
        return res.serverError(error);
      }
      else {
        Usuario.find().exec(function (error, records) {
          if (error)
            return res.serverError(error);
          else {

            Encuesta.find().exec(function (error, encuestasEncontradas) {

              res.cookie('idUsuario', usuarioCreado.id);

              return res.view('encuestas', {
        					encuestas: encuestasEncontradas,
                  usuario: nuevoUsuario
        			});
        		})
          }
        });
      }
    });
  },

  llamarVistaPerfil: function (req, res) {
    parametros = req.allParams();

    if(parametros.id)
    {
      Usuario.findOne({
        id:parametros.id
      }).exec(function (err, usuarioEncontrado) {
        if(err) return res.serverError(err)

        return res.view('perfil', {usuario:usuarioEncontrado})
      })
    }
  }

};
