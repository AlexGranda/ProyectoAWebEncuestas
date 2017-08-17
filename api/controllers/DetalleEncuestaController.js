/**
 * DetalleEncuestaController
 *
 * @description :: Server-side logic for managing Detalleencuestas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listarEncuesta: function (req, res) {
		idEncuesta = req.param('idEncuesta');

		Encuesta.findOne({
			id: idEncuesta
		}).exec(function (error, encuestaEncontrada) {

				Comentario.find({
					idEncuesta: encuestaEncontrada
				}).exec(function (error, cometariosEncontrados) {
					res.view('detalleEncuesta', {
							encuesta: encuestaEncontrada,
							comentarios: cometariosEncontrados
					});
				})
		})
	},

	meGusta: function (req, res) {
		idEncuesta = req.param('idEncuesta');

		Encuesta.findOne({
			id:idEncuesta
		}).exec(function (error, encuestaEncontrada) {

			Encuesta.update({
				id: idEncuesta
			},{
				likes: encuestaEncontrada.likes + 1
			}).exec(function (error, encuestaActualizada) {

				Comentario.find({
					idEncuesta: idEncuesta
				}).exec(function (error, cometariosEncontrados) {

					console.log(encuestaActualizada.likes);
					return res.view('detalleEncuesta', {
							encuesta: encuestaActualizada,
							comentarios: cometariosEncontrados
					});
				})
			})
		})
	}
};
