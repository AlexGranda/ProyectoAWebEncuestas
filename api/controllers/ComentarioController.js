/**
 * ComentarioController
 *
 * @description :: Server-side logic for managing Comentarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	agregarComentario: function (req, res) {

		parametros = req.allParams()
		idEncuesta = parametros.idEncuesta
		idUsuario = req.cookies.idUsuario;

		Usuario.findOne({
			id: idUsuario
		}).exec(function (error, usuarioEncontrado) {

			Encuesta.findOne({
				id: idEncuesta
			}).exec(function (error, encuestaEncontrada) {

				encuesta = {
					fechaCreacion: new Date(),
					texto: parametros.texto,
					idUsuario: usuarioEncontrado.id,
					idEncuesta: encuestaEncontrada.id
				}

				Comentario.create(encuesta).exec(function (error, comentarioCreado) {
					return res.redirect('/encuestas/detalle/'+idEncuesta);

				})

			})

		})
	}
};
