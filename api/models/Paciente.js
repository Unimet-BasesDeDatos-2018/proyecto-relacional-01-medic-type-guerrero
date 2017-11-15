/**
 * Paciente.js
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
    cedula:{
      type: 'integer'
    },
    nombre:{
      type: 'string'
    },
    apellido:{
      type: 'string'
    },
    fecha:{
      type: 'date'
    },
    direccion:{
      type: 'string'
    },


  }
};
