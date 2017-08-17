/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords')

module.exports = {

  login: function (req, res) {
    var parametros = req.allParams()
    Usuario
      .findOne({correo: parametros.correo})
      .exec(function (err, usuarioEncontrado) {
        if (err)
          res.serverError(error);

        if (!usuarioEncontrado) {
          res.serverError('No existe el usuario')
        } else {
          Passwords
            .checkPassword({
              passwordAttempt: parametros.password,
              encryptedPassword: usuarioEncontrado.password
            })
            .exec({
              error: function (err) {
                res.serverError(err)
              },
              incorrect: function () {
                res.serverError('Contrasenia encriptada incorrecta')
              },
              success: function () {
                // Busqueda de encuestas
                Encuesta
                  .find()
                  .exec(function (error, encuestasEncontradas) {

                    res.cookie('idUsuario', usuarioEncontrado.id);

                    return res.view('encuestas', {
                      encuestas: encuestasEncontradas,
                    });
                  })
              }
            })
        }
      })
    }
};
