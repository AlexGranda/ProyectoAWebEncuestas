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
					res.view('detalleencuesta', {
							encuesta: encuestaEncontrada,
							comentarios: cometariosEncontrados
					});
				})
		})
	}
};
