/**
 * HorarioController
 *
 * @description :: Server-side logic for managing Horarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req,res,err){
		Medico.findOne(req.param('medico'),function foundMedico (err,medico){
			if (err) return next(err);
			if (!medico) return next();
			res.view({
				horario:horario
			});
		});


	},

	create: function(req,res,next) {
		Horario.create(req.params.all(),function horarioCreado(err,horario) {
			if (err) return next(err);
			res.redirect('/Medico/show/'+horario.medico);

		});
	},


};
