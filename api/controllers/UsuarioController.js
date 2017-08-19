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
              req.session.authenticated = true

              return res.redirect('/encuestas');
        		})
          }
        });
      }
    });
  },

  editarUsuario: function (req, res) {
    var parametros = req.allParams();

    sails.log.info(parametros)

    //sails.log.info(parametros)
    if (parametros.nombres && parametros.apellidos && parametros.correo && parametros.id && parametros.password) {
      Usuario.update({
        id: parametros.id
      }, {
        nombres: parametros.nombres,
        apellidos: parametros.apellidos,
        correo: parametros.correo,
        password: parametros.password
      }).exec(function (err, usuarioEditado) {
        if (err)
          return res.serverError(err);
        if (usuarioEditado) {
          //Si encontro y actualizo
          return res.redirect('/perfil?id='+parametros.id);
        }
        else {
          //No encontro
          return res.notFound();
        }
      });
    }
    else {
      return res.badRequest();
    }
  },

  llamarVistaPerfil: function (req, res) {
    idUsuario = req.cookies.idUsuario;

    if(idUsuario)
    {
      Usuario.findOne({
        id:idUsuario
      }).exec(function (err, usuarioEncontrado) {
        if(err) return res.serverError(err)

        return res.view('perfil', {usuario:usuarioEncontrado})
      })
    }
  },

  llamarVistaEditarUsuario: function (req, res) {
    idUsuario = req.cookies.idUsuario;

    if(idUsuario)
    {
      Usuario.findOne({
        id:idUsuario
      }).exec(function (err, usuarioEncontrado) {
        if(err) return res.serverError(err)

        return res.view('editarUsuario', {usuario:usuarioEncontrado})
      })
    }
  }

};
