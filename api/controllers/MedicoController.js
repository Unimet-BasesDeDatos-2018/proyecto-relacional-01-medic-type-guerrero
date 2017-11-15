/**
 * MedicoController
 *
 * @description :: Server-side logic for managing Medicoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	registrar: function(req,res){
		res.view();
	},
	create: function(req,res,next) {
		Medico.create(req.params.all(),function medicoCreado(err,medico) {
			if (err) return next(err);
			res.redirect('/Medico/show/'+medico.id);

		});
	},
			show: function(req,res,next) {

				Medico.findOne(req.param('id')).populateAll().exec(function(err,medico){
					if (err) return next(err);
					if (!medico) return next();
					res.view({
	medico:medico
					});
				});

		},
			index: function(req,res,next){
				Medico.find(function foundMedico(err,medico){
					if (err) return next(err);
					res.view({
						medico:medico
					});
				});
			},
	edit: function(req,res,next){
		Medico.findOne(req.param('id'),function foundMedico(err,medico){
			if (err) return next(err);
			if (!medico) return next();

			res.view({
				medico:medico
			});
		});
	},
	update:function(req,res,next){
		Medico.update(req.param('id'),req.params.all(),function medicoUpdated(err){
			if (err){
				return res.redirect('/Medico/edit/'+req.param('id'));
			}
			res.redirect('/Medico/show/'+req.param('id'));
		});
	},
	destroy: function(req,res,next){
	Medico.destroy(req.param('id')).exec( function(){
		res.redirect('/Medico');
	});
	}


};
