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

	Paciente.findOne(req.param('id')).populateAll().exec(function(err,paciente){
		if (err) return next(err);
		if (!paciente) return next();
		res.view({
paciente:paciente
		});
	});

}
		,
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
,
buscar: function(req,res,next){

	Control.query('Select paciente.nombre, control.* from paciente inner join cita on paciente.cedula = cita.paciente inner join control on cita.id = control.cita  where paciente.cedula='+req.body.cedula,function foundPaciente(err,rawResult){
		if (err) { return res.serverError(err); }

sails.log(rawResult);
// (result format depends on the SQL query that was passed in, and the adapter you're using)

// Then parse the raw result and do whatever you like with it.

return res.json(rawResult);

});
}

};
