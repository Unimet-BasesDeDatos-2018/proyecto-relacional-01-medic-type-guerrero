/**
 * EspecialidadController
 *
 * @description :: Server-side logic for managing Especialidads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req,res,err){
		Medico.findOne(req.param('medico'),function foundMedico (err,medico){
			if (err) return next(err);
			if (!medico) return next();
			res.view({
				medico:medico
			});
		});


	},

	create: function(req,res,next) {
		Especialidad.create(req.params.all(),function especialidadCreado(err,especialidad) {
			if (err) return next(err);
			res.json(especialidad);

		});
	},

};
