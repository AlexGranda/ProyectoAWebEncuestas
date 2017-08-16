/**
 * DetalleEncuestaController
 *
 * @description :: Server-side logic for managing Detalleencuestas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listarEncuesta: function (req, res) {
		idEncuesta = req.param('idEncuesta');

		Encuesta.find({
			id: idEncuesta
		}).exec(function (error, encuestaEncontrada) {
			res.view('detalleencuesta', {
					encuesta: encuestaEncontrada
			});
		})
	}
};
