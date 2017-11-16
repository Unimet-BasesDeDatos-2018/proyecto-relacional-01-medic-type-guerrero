/**
 * IntervencionesController
 *
 * @description :: Server-side logic for managing Intervenciones
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
		Intervenciones.create(req.params.all(),function intervencionesCreado(err,intervenciones) {
			if (err) return next(err);
			res.redirect('/Paciente/show/'+intervenciones.paciente);

		});
	},
};
