/**
 * EncuestaController
 *
 * @description :: Server-side logic for managing Encuestas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listarEncuestas: function (req, res) {
		Encuesta.find().exec(function (error, encuestasEncontradas) {
			res.view('encuestas', {
					encuestas: encuestasEncontradas
			});
		})
	}
};
