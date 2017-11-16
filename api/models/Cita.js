/**
 * Cita.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type: 'integer',
       primaryKey: true,
      autoIncrement:true
    },
   paciente:{
    type:'integer',
      required:true
    },
    medico:{
      type:'integer',
      required:true
    },
   horario:{
     type:'string',
     required:true
   }
  }
};
