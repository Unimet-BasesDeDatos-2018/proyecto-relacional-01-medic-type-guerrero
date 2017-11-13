/**
 * PacienteController
 *
 * @description :: Server-side logic for managing pacientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


registrar: function(req,res){
	res.view();
},
create: function(req,res,next) {
	Paciente.create(req.params.all(),function pacienteCreado(err,paciente) {
		if (err) return next(err);
		res.redirect('/Paciente/show/'+paciente.id);

	});
},
		show: function(req,res,next) {
			Paciente.findOne(req.param('id'),function pacienteEncontrado(err,paciente){
				if (err) return next(err);
				if (!paciente) return next();
				res.view({
paciente:paciente
				});
			});

		},
		index: function(req,res,next){
			Paciente.find(function foundPaciente(err,paciente){
				if (err) return next(err);
				res.view({
					paciente:paciente
				});
			});
		}


};
