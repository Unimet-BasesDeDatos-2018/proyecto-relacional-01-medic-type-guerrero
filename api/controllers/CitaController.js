/**
 * CitaController
 *
 * @description :: Server-side logic for managing Citas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	registrar: function(req,res){
		res.view();

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

};
