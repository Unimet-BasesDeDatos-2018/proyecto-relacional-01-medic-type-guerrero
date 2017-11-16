/**
 * AntecedentesController
 *
 * @description :: Server-side logic for managing Antecedentes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req,res,err){
		Paciente.findOne(req.param('paciente'),function foundPaciente (err,paciente){
			if (err) return next(err);
			if (!paciente) return next();
			res.view({
				paciente:paciente
			});
		});


	},

	create: function(req,res,next) {
		Antecedentes.create(req.params.all(),function antecedentesCreado(err,antecedentes) {
			if (err) return next(err);
		res.json(antecedentes);

		});
	},

};
