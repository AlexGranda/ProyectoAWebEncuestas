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
            return res.view('homepage');
          }
        });
      }
    });
  },

};

