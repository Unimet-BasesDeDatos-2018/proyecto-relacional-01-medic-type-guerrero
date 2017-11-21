/**
 * CitaController
 *
 * @description :: Server-side logic for managing Citas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	registrar: function(req,res){
		res.view();
//prueba
	},

	create: function(req,res,next) {
		Cita.create(req.params.all(),function citaCreado(err,cita) {
			if (err) return next(err);
			res.redirect('/Cita');

		});
	},
			show: function(req,res,next) {
				Cita.findOne(req.param('id'),function citaEncontrado(err,cita){
					if (err) return next(err);
					if (!cita) return next();
					res.view({
	cita:cita
					});
				});

			},
			index: function(req,res,next){
				Cita.find(function foundCita(err,cita){
					if (err) return next(err);
					res.view({
						cita:cita
					});
				});
			},

			destroy: function(req,res,next){
			Cita.destroy(req.param('id')).exec( function(){
				res.redirect('/Cita');
			});
		},
      buscar: function(req,res,next){

				Cita.query('SELECT*FROM medictype.cita where paciente='+req.body.cita,function foundCita(err,rawResult){
					if (err) { return res.serverError(err); }

  sails.log(rawResult);
  // (result format depends on the SQL query that was passed in, and the adapter you're using)

  // Then parse the raw result and do whatever you like with it.

  return res.json(rawResult);

});
			}


};
