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
		},
edit: function(req,res,next){
	Paciente.findOne(req.param('id'),function foundPaciente(err,paciente){
		if (err) return next(err);
		if (!paciente) return next();

		res.view({
			paciente:paciente
		});
	});
},
update:function(req,res,next){
	Paciente.update(req.param('id'),req.params.all(),function pacienteUpdated(err){
		if (err){
			return res.redirect('/Paciente/edit/'+req.param('id'));
		}
		res.redirect('/Paciente/show/'+req.param('id'));
	});
},
destroy: function(req,res,next){
Paciente.destroy(req.param('id')).exec( function(){
	res.redirect('/Paciente');
});
}

};
