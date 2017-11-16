/**
 * ControlController
 *
 * @description :: Server-side logic for managing Controls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req,res){
		res.view();
	},
	create: function(req,res,next) {
		Control.create(req.params.all(),function controlCreado(err,control) {
			if (err) return next(err);
			res.redirect('/control/show/'+control.id);

		});
	},
		show: function(req,res,next) {
			Control.findOne(req.param('id'),function controlEncontrado(err,control){
				if (err) return next(err);
				if (!control) return next();
				res.view({
control:control
				});
			});
},
};
