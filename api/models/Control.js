/**
 * Control.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


      id:{
        type:'interger'
      },

      medico:{
        model:'Medico',
        requiere:true

      },
      paciente:{
        model: 'Paciente',
        requiere:true
      },
      observaciones:{
        type: 'string'
      },
      altura:{
        type: 'string'
      },
      peso:{
        type: 'string'
      },
      fecha:{
        type: 'date'
      },
      diagnostico:{
        type: 'string'
      },
cita:
{
  model:'Cita',
  requiere: true
}
    }


};
